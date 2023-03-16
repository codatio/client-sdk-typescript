import "reflect-metadata";

import { getSimplePathParams, ppMetadataKey } from "./pathparams";

import { plainToInstance } from "class-transformer";
import {requestMetadataKey} from "./requestbody";

export const SerializationMethodToContentType: Record<string, string> = {
  "json":      "application/json",
  "form":      "application/x-www-form-urlencoded",
  "multipart": "multipart/form-data",
  "raw":       "application/octet-stream",
  "string":    "text/plain",
}

export interface PropInfo {
  key: string | symbol;
  type: any;
  elemType: any;
  elemDepth: number;
}

function isSpeakeasyBase(type: any): boolean {
  return type && Object.getPrototypeOf(type)?.name == "SpeakeasyBase";
}

function handleArray(value: any, elemType: any, elemDepth: number): any {
  if (!Array.isArray(value)) {
    return value;
  }

  if (elemDepth == 1) {
    return value.map((v: any) => new elemType(v));
  } else {
    return value.map((v: any) => {
      if (Array.isArray(v)) {
        return handleArray(v, elemType, elemDepth - 1);
      } else if (typeof v == "object") {
        return handleObject(v, elemType, elemDepth - 1);
      } else {
        return v;
      }
    });
  }
}

function handleObject(value: any, elemType: any, elemDepth: number): any {
  if (typeof value != "object") {
    return value;
  }

  if (elemDepth == 1) {
    return Object.keys(value).reduce((acc: any, key: string) => {
      acc[key] = new elemType(value[key]);
      return acc;
    }, {});
  } else {
    return Object.keys(value).reduce((acc: any, key: string) => {
      const v = value[key];
      if (Array.isArray(v)) {
        acc[key] = handleArray(v, elemType, elemDepth - 1);
      } else if (typeof v == "object") {
        acc[key] = handleObject(v, elemType, elemDepth - 1);
      } else {
        acc[key] = v;
      }
      return acc;
    }, {});
  }
}

export class SpeakeasyBase {
  constructor(payload?: Record<string | symbol, unknown>) {
    const props: PropInfo[] = (this as any)["__props__"];
    if (props) {
      for (const prop of props) {
        if (payload && payload.hasOwnProperty(prop.key)) {
          const value = payload[prop.key];
          if (isSpeakeasyBase(prop.type)) {
            (this as any)[prop.key] = new prop.type(value);
          } else if (
            prop.type.name == "Array" &&
            isSpeakeasyBase(prop.elemType)
          ) {
            (this as any)[prop.key] = handleArray(
              value,
              prop.elemType,
              prop.elemDepth
            );
          } else if (
            prop.type.name == "Object" &&
            isSpeakeasyBase(prop.elemType)
          ) {
            (this as any)[prop.key] = handleObject(
              value,
              prop.elemType,
              prop.elemDepth
            );
          } else {
            (this as any)[prop.key] = value;
          }
        }
      }
    }
  }
}

export class ParamDecorator {
  Style: string;
  Explode: boolean;
  ParamName: string;
  Serialization?: string;
  DateTimeFormat?: string;
  constructor(
    Style: string,
    Explode: boolean,
    ParamName: string,
    Serialization?: string,
    DateTimeFormat?: string
  ) {
    this.Style = Style;
    this.Explode = Explode;
    this.ParamName = ParamName;
    this.Serialization = Serialization;
    this.DateTimeFormat = DateTimeFormat;
  }
}

export function SpeakeasyMetadata<
  T extends SpeakeasyBase = Record<string | symbol, unknown>
>(params?: {
  data?: string;
  elemType?: { new (): T };
  elemDepth?: number;
}): PropertyDecorator {
  return (target, propertyKey) => {
    if (params?.data) {
      const annsArr = params.data.split(", ");

      for (let i = 0; i < annsArr.length; i += 2) {
        Reflect.defineMetadata(annsArr[i], annsArr[i + 1], target, propertyKey);
      }
    }

    let props: PropInfo[];
    if (target.hasOwnProperty("__props__")) {
      props = (target as any)["__props__"];
    } else {
      props = (target as any)["__props__"] = [];
    }

    const prop = {
      key: propertyKey,
      type: Reflect.getMetadata("design:type", target, propertyKey),
    } as PropInfo;

    if (params?.elemType) {
      prop.elemType = params.elemType;
      prop.elemDepth = params.elemDepth || 1;
    }

    props.push(prop);
  };
}

export function templateUrl(
  stringWithParams: string,
  params: Record<string, string>
): string {
  let res: string = stringWithParams;
  Object.entries(params).forEach(([key, value]) => {
    const match: string = "{" + key + "}";
    res = res.replaceAll(match, value);
  });
  return res;
}

export function generateURL(
  serverURL: string,
  path: string,
  pathParams: any,
  globals?: any
): string {
  const url: string = serverURL.replace(/\/$/, "") + path;
  const parsedParameters: Record<string, string> = {};

  const fieldNames: string[] =
    "__props__" in pathParams
      ? pathParams["__props__"].map((prop: any) => prop.key)
      : Object.getOwnPropertyNames(pathParams);
  fieldNames.forEach((fname) => {
    const requestBodyAnn: string = Reflect.getMetadata(
      requestMetadataKey,
      pathParams,
      fname
    );

    if (requestBodyAnn) return;

    const ppAnn: string = Reflect.getMetadata(
      ppMetadataKey,
      pathParams,
      fname
    );

    if (ppAnn == null) return;

    const ppDecorator: ParamDecorator = parseParamDecorator(
      ppAnn,
      fname,
      "simple",
      false
    );
    if (ppDecorator == null) return;

    let value = pathParams[fname];
    value = populateFromGlobals(value, fname, "pathParam", globals);

    switch (ppDecorator.Style) {
      case "simple":
        const simpleParams: Map<string, string> = getSimplePathParams(
          ppDecorator.ParamName,
          value,
          ppDecorator.Explode,
          ppDecorator.DateTimeFormat
        );
        simpleParams.forEach((value, key) => {
          parsedParameters[key] = value;
        });
    }
  });
  return templateUrl(url, parsedParameters);
}

export function parseParamDecorator(
  ann: string,
  fName: string,
  defaultStyle: string,
  defaultExplode: boolean
): ParamDecorator {
  // style=simple;explode=false;name=apiID
  const decorator: ParamDecorator = new ParamDecorator(
    defaultStyle,
    defaultExplode,
    fName.toLowerCase()
  );

  if (ann == null) return decorator;
  ann.split(";").forEach((annPart) => {
    const [paramKey, paramVal]: string[] = annPart.split("=");
    switch (paramKey) {
      case "style":
        decorator.Style = paramVal;
        break;
      case "explode":
        decorator.Explode = paramVal == "true";
        break;
      case "name":
        decorator.ParamName = paramVal;
        break;
      case "serialization":
        decorator.Serialization = paramVal;
        break;
      case "dateTimeFormat":
        decorator.DateTimeFormat = paramVal;
    }
  });
  return decorator;
}

export function isStringRecord(obj: any): obj is Record<string, string> {
  if (typeof obj !== "object") return false;

  if (Object.getOwnPropertySymbols(obj).length > 0) return false;

  return Object.getOwnPropertyNames(obj).every(
    (prop) => typeof obj[prop] === "string"
  );
}

export function isNumberRecord(obj: any): obj is Record<string, number> {
  if (typeof obj !== "object") return false;

  if (Object.getOwnPropertySymbols(obj).length > 0) return false;

  return Object.getOwnPropertyNames(obj).every(
    (prop) => typeof obj[prop] === "number"
  );
}

export function isBooleanRecord(obj: any): obj is Record<string, boolean> {
  if (typeof obj !== "object") return false;

  if (Object.getOwnPropertySymbols(obj).length > 0) return false;

  return Object.getOwnPropertyNames(obj).every(
    (prop) => typeof obj[prop] === "boolean"
  );
}

export function isEmpty(value: any): boolean {
  // check for undefined, null, and NaN
  let res: boolean = false;
  if (typeof value === "number") res = Number.isNaN(value);
  else if (typeof value === "string") res = value === "";
  return res || value == null;
}

// If value is Date type, serialize as ISO string since Date constructor creates from system clock
export function convertIfDateObjectToISOString(
  value: any,
  dateTimeFormat?: string
): any {
  const dtFormat = dateTimeFormat ?? "YYYY-MM-DDThh:mm:ss.sssZ";
  if (value instanceof Date) {
    if (dtFormat === "YYYY-MM-DD") {
      const dateRegex = /^(\d{4})-(\d{2})-(\d{2})/;
      const [_, year, month, day]: RegExpMatchArray = value
        .toISOString()
        .match(dateRegex)!;
      return `${year}-${month}-${day}`;
    }
    if (dtFormat === "YYYY-MM-DDThh:mm:ss.sssZ") {
      return value.toISOString();
    }
  }
  return value;
}

export function encodeAndConvertPrimitiveVal(
  value: any,
  dateTimeFormat?: string
): any {
  return encodeURIComponent(
    convertIfDateObjectToISOString(value, dateTimeFormat)
  );
}

export function deserializeJSONResponse<T>(
  value: T,
  klass?: any,
  elemDepth: number = 0
): any {
  if (value !== Object(value)) {
    return value;
  }

  if (elemDepth === 0 && klass != null) {
    return plainToInstance(klass, value, {
      excludeExtraneousValues: true,
    }) as typeof klass;
  }

  if (Array.isArray(value)) {
    return value.map((v) => deserializeJSONResponse(v, klass, elemDepth - 1));
  }

  if (typeof value === "object" && value != null) {
    let copiedRecord: Record<string, any> = {};
    for (const key in value) {
      copiedRecord[key] = deserializeJSONResponse(
        value[key],
        klass,
        elemDepth - 1
      );
    }
    return copiedRecord;
  }

  return plainToInstance(klass, value, {
    excludeExtraneousValues: true,
  }) as typeof klass;
}

export function getResFieldDepth(res: any): number {
  const props = res["__props__"];
  let resFieldDepth = 1;

  if (props) {
    for (const prop of props) {
      if (res && res.hasOwnProperty(prop.key)) {
        if (
          (prop.type.name == "Array" || prop.type.name == "Object") &&
          isSpeakeasyBase(prop.elemType)
        ) {
          if (prop.elemDepth > resFieldDepth) {
            resFieldDepth = prop.elemDepth;
            break;
          }
        }
      }
    }
  }

  return resFieldDepth;
}

export function populateFromGlobals(
  value: any,
  fieldName: string,
  paramType: string,
  globals: any
): any {
  if (globals && value === undefined) {
    if ("parameters" in globals && paramType in globals.parameters) {
      let globalValue = globals.parameters[paramType][fieldName];
      if (globalValue !== undefined) {
        value = globalValue;
      }
    }
  }

  return value;
}
