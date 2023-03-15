import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, plainToInstance, Transform, Type } from "class-transformer";

export class GetCreateItemsModelPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=companyId",
  })
  companyId: string;

  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=connectionId",
  })
  connectionId: string;
}

export class GetCreateItemsModelRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCreateItemsModelPathParams;
}
export enum GetCreateItemsModelPushOptionPushOptionPropertyPushOptionChoiceOptionTypeEnum {
  Array = "Array",
  Object = "Object",
  String = "String",
  Number = "Number",
  Boolean = "Boolean",
  DateTime = "DateTime",
  File = "File",
  MultiPart = "MultiPart",
}

export class GetCreateItemsModelPushOptionPushOptionPropertyPushOptionChoice extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "displayName" })
  displayName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "required" })
  required?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type?: GetCreateItemsModelPushOptionPushOptionPropertyPushOptionChoiceOptionTypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "value" })
  value?: string;
}
export enum GetCreateItemsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionChoiceOptionTypeEnum {
  Array = "Array",
  Object = "Object",
  String = "String",
  Number = "Number",
  Boolean = "Boolean",
  DateTime = "DateTime",
  File = "File",
  MultiPart = "MultiPart",
}

export class GetCreateItemsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionChoice extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "displayName" })
  displayName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "required" })
  required?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type?: GetCreateItemsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionChoiceOptionTypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "value" })
  value?: string;
}
export enum GetCreateItemsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionChoiceOptionTypeEnum {
  Array = "Array",
  Object = "Object",
  String = "String",
  Number = "Number",
  Boolean = "Boolean",
  DateTime = "DateTime",
  File = "File",
  MultiPart = "MultiPart",
}

export class GetCreateItemsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionChoice extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "displayName" })
  displayName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "required" })
  required?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type?: GetCreateItemsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionChoiceOptionTypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "value" })
  value?: string;
}
export enum GetCreateItemsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionChoiceOptionTypeEnum {
  Array = "Array",
  Object = "Object",
  String = "String",
  Number = "Number",
  Boolean = "Boolean",
  DateTime = "DateTime",
  File = "File",
  MultiPart = "MultiPart",
}

export class GetCreateItemsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionChoice extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "displayName" })
  displayName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "required" })
  required?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type?: GetCreateItemsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionChoiceOptionTypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "value" })
  value?: string;
}
export enum GetCreateItemsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionPropertyOptionTypeEnum {
  Array = "Array",
  Object = "Object",
  String = "String",
  Number = "Number",
  Boolean = "Boolean",
  DateTime = "DateTime",
  File = "File",
  MultiPart = "MultiPart",
}

export class GetCreateItemsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionPropertyPushValidationInfoPushFieldValidation extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "details" })
  details: string;

  @SpeakeasyMetadata()
  @Expose({ name: "field" })
  field?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "ref" })
  ref?: string;
}

export class GetCreateItemsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionPropertyPushValidationInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({
    elemType:
      GetCreateItemsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionPropertyPushValidationInfoPushFieldValidation,
  })
  @Expose({ name: "information" })
  @Type(
    () =>
      GetCreateItemsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionPropertyPushValidationInfoPushFieldValidation
  )
  information?: GetCreateItemsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionPropertyPushValidationInfoPushFieldValidation[];

  @SpeakeasyMetadata({
    elemType:
      GetCreateItemsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionPropertyPushValidationInfoPushFieldValidation,
  })
  @Expose({ name: "warnings" })
  @Type(
    () =>
      GetCreateItemsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionPropertyPushValidationInfoPushFieldValidation
  )
  warnings?: GetCreateItemsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionPropertyPushValidationInfoPushFieldValidation[];
}

export class GetCreateItemsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionProperty extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description: string;

  @SpeakeasyMetadata()
  @Expose({ name: "displayName" })
  displayName: string;

  @SpeakeasyMetadata({
    elemType:
      GetCreateItemsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionChoice,
  })
  @Expose({ name: "options" })
  @Type(
    () =>
      GetCreateItemsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionChoice
  )
  options?: GetCreateItemsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionChoice[];

  @SpeakeasyMetadata()
  @Expose({ name: "required" })
  required: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: GetCreateItemsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionPropertyOptionTypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "validation" })
  @Type(
    () =>
      GetCreateItemsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionPropertyPushValidationInfo
  )
  validation?: GetCreateItemsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionPropertyPushValidationInfo;
}
export enum GetCreateItemsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyOptionTypeEnum {
  Array = "Array",
  Object = "Object",
  String = "String",
  Number = "Number",
  Boolean = "Boolean",
  DateTime = "DateTime",
  File = "File",
  MultiPart = "MultiPart",
}

export class GetCreateItemsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushValidationInfoPushFieldValidation extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "details" })
  details: string;

  @SpeakeasyMetadata()
  @Expose({ name: "field" })
  field?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "ref" })
  ref?: string;
}

export class GetCreateItemsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushValidationInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({
    elemType:
      GetCreateItemsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushValidationInfoPushFieldValidation,
  })
  @Expose({ name: "information" })
  @Type(
    () =>
      GetCreateItemsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushValidationInfoPushFieldValidation
  )
  information?: GetCreateItemsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushValidationInfoPushFieldValidation[];

  @SpeakeasyMetadata({
    elemType:
      GetCreateItemsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushValidationInfoPushFieldValidation,
  })
  @Expose({ name: "warnings" })
  @Type(
    () =>
      GetCreateItemsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushValidationInfoPushFieldValidation
  )
  warnings?: GetCreateItemsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushValidationInfoPushFieldValidation[];
}

export class GetCreateItemsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionProperty extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description: string;

  @SpeakeasyMetadata()
  @Expose({ name: "displayName" })
  displayName: string;

  @SpeakeasyMetadata({
    elemType:
      GetCreateItemsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionChoice,
  })
  @Expose({ name: "options" })
  @Type(
    () =>
      GetCreateItemsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionChoice
  )
  options?: GetCreateItemsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionChoice[];

  @SpeakeasyMetadata({
    elemType:
      GetCreateItemsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionProperty,
  })
  @Expose({ name: "properties" })
  @Transform(
    ({ value }) => {
      const obj: Record<
        string,
        GetCreateItemsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionProperty
      > = {};
      for (const key in value) {
        obj[key] = plainToInstance(
          GetCreateItemsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionProperty,
          value[
            key
          ] as GetCreateItemsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionProperty,
          { excludeExtraneousValues: true }
        );
      }
      return obj;
    },
    { toClassOnly: true }
  )
  properties?: Record<
    string,
    GetCreateItemsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionProperty
  >;

  @SpeakeasyMetadata()
  @Expose({ name: "required" })
  required: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: GetCreateItemsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyOptionTypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "validation" })
  @Type(
    () =>
      GetCreateItemsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushValidationInfo
  )
  validation?: GetCreateItemsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushValidationInfo;
}
export enum GetCreateItemsModelPushOptionPushOptionPropertyPushOptionPropertyOptionTypeEnum {
  Array = "Array",
  Object = "Object",
  String = "String",
  Number = "Number",
  Boolean = "Boolean",
  DateTime = "DateTime",
  File = "File",
  MultiPart = "MultiPart",
}

export class GetCreateItemsModelPushOptionPushOptionPropertyPushOptionPropertyPushValidationInfoPushFieldValidation extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "details" })
  details: string;

  @SpeakeasyMetadata()
  @Expose({ name: "field" })
  field?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "ref" })
  ref?: string;
}

export class GetCreateItemsModelPushOptionPushOptionPropertyPushOptionPropertyPushValidationInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({
    elemType:
      GetCreateItemsModelPushOptionPushOptionPropertyPushOptionPropertyPushValidationInfoPushFieldValidation,
  })
  @Expose({ name: "information" })
  @Type(
    () =>
      GetCreateItemsModelPushOptionPushOptionPropertyPushOptionPropertyPushValidationInfoPushFieldValidation
  )
  information?: GetCreateItemsModelPushOptionPushOptionPropertyPushOptionPropertyPushValidationInfoPushFieldValidation[];

  @SpeakeasyMetadata({
    elemType:
      GetCreateItemsModelPushOptionPushOptionPropertyPushOptionPropertyPushValidationInfoPushFieldValidation,
  })
  @Expose({ name: "warnings" })
  @Type(
    () =>
      GetCreateItemsModelPushOptionPushOptionPropertyPushOptionPropertyPushValidationInfoPushFieldValidation
  )
  warnings?: GetCreateItemsModelPushOptionPushOptionPropertyPushOptionPropertyPushValidationInfoPushFieldValidation[];
}

export class GetCreateItemsModelPushOptionPushOptionPropertyPushOptionProperty extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description: string;

  @SpeakeasyMetadata()
  @Expose({ name: "displayName" })
  displayName: string;

  @SpeakeasyMetadata({
    elemType:
      GetCreateItemsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionChoice,
  })
  @Expose({ name: "options" })
  @Type(
    () =>
      GetCreateItemsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionChoice
  )
  options?: GetCreateItemsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionChoice[];

  @SpeakeasyMetadata({
    elemType:
      GetCreateItemsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionProperty,
  })
  @Expose({ name: "properties" })
  @Transform(
    ({ value }) => {
      const obj: Record<
        string,
        GetCreateItemsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionProperty
      > = {};
      for (const key in value) {
        obj[key] = plainToInstance(
          GetCreateItemsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionProperty,
          value[
            key
          ] as GetCreateItemsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionProperty,
          { excludeExtraneousValues: true }
        );
      }
      return obj;
    },
    { toClassOnly: true }
  )
  properties?: Record<
    string,
    GetCreateItemsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionProperty
  >;

  @SpeakeasyMetadata()
  @Expose({ name: "required" })
  required: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: GetCreateItemsModelPushOptionPushOptionPropertyPushOptionPropertyOptionTypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "validation" })
  @Type(
    () =>
      GetCreateItemsModelPushOptionPushOptionPropertyPushOptionPropertyPushValidationInfo
  )
  validation?: GetCreateItemsModelPushOptionPushOptionPropertyPushOptionPropertyPushValidationInfo;
}
export enum GetCreateItemsModelPushOptionPushOptionPropertyOptionTypeEnum {
  Array = "Array",
  Object = "Object",
  String = "String",
  Number = "Number",
  Boolean = "Boolean",
  DateTime = "DateTime",
  File = "File",
  MultiPart = "MultiPart",
}

export class GetCreateItemsModelPushOptionPushOptionPropertyPushValidationInfoPushFieldValidation extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "details" })
  details: string;

  @SpeakeasyMetadata()
  @Expose({ name: "field" })
  field?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "ref" })
  ref?: string;
}

export class GetCreateItemsModelPushOptionPushOptionPropertyPushValidationInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({
    elemType:
      GetCreateItemsModelPushOptionPushOptionPropertyPushValidationInfoPushFieldValidation,
  })
  @Expose({ name: "information" })
  @Type(
    () =>
      GetCreateItemsModelPushOptionPushOptionPropertyPushValidationInfoPushFieldValidation
  )
  information?: GetCreateItemsModelPushOptionPushOptionPropertyPushValidationInfoPushFieldValidation[];

  @SpeakeasyMetadata({
    elemType:
      GetCreateItemsModelPushOptionPushOptionPropertyPushValidationInfoPushFieldValidation,
  })
  @Expose({ name: "warnings" })
  @Type(
    () =>
      GetCreateItemsModelPushOptionPushOptionPropertyPushValidationInfoPushFieldValidation
  )
  warnings?: GetCreateItemsModelPushOptionPushOptionPropertyPushValidationInfoPushFieldValidation[];
}

export class GetCreateItemsModelPushOptionPushOptionProperty extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description: string;

  @SpeakeasyMetadata()
  @Expose({ name: "displayName" })
  displayName: string;

  @SpeakeasyMetadata({
    elemType: GetCreateItemsModelPushOptionPushOptionPropertyPushOptionChoice,
  })
  @Expose({ name: "options" })
  @Type(() => GetCreateItemsModelPushOptionPushOptionPropertyPushOptionChoice)
  options?: GetCreateItemsModelPushOptionPushOptionPropertyPushOptionChoice[];

  @SpeakeasyMetadata({
    elemType: GetCreateItemsModelPushOptionPushOptionPropertyPushOptionProperty,
  })
  @Expose({ name: "properties" })
  @Transform(
    ({ value }) => {
      const obj: Record<
        string,
        GetCreateItemsModelPushOptionPushOptionPropertyPushOptionProperty
      > = {};
      for (const key in value) {
        obj[key] = plainToInstance(
          GetCreateItemsModelPushOptionPushOptionPropertyPushOptionProperty,
          value[
            key
          ] as GetCreateItemsModelPushOptionPushOptionPropertyPushOptionProperty,
          { excludeExtraneousValues: true }
        );
      }
      return obj;
    },
    { toClassOnly: true }
  )
  properties?: Record<
    string,
    GetCreateItemsModelPushOptionPushOptionPropertyPushOptionProperty
  >;

  @SpeakeasyMetadata()
  @Expose({ name: "required" })
  required: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: GetCreateItemsModelPushOptionPushOptionPropertyOptionTypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "validation" })
  @Type(() => GetCreateItemsModelPushOptionPushOptionPropertyPushValidationInfo)
  validation?: GetCreateItemsModelPushOptionPushOptionPropertyPushValidationInfo;
}
export enum GetCreateItemsModelPushOptionOptionTypeEnum {
  Array = "Array",
  Object = "Object",
  String = "String",
  Number = "Number",
  Boolean = "Boolean",
  DateTime = "DateTime",
  File = "File",
  MultiPart = "MultiPart",
}

export class GetCreateItemsModelPushOption extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "displayName" })
  displayName: string;

  @SpeakeasyMetadata({
    elemType: GetCreateItemsModelPushOptionPushOptionProperty,
  })
  @Expose({ name: "properties" })
  @Transform(
    ({ value }) => {
      const obj: Record<
        string,
        GetCreateItemsModelPushOptionPushOptionProperty
      > = {};
      for (const key in value) {
        obj[key] = plainToInstance(
          GetCreateItemsModelPushOptionPushOptionProperty,
          value[key] as GetCreateItemsModelPushOptionPushOptionProperty,
          { excludeExtraneousValues: true }
        );
      }
      return obj;
    },
    { toClassOnly: true }
  )
  properties?: Record<string, GetCreateItemsModelPushOptionPushOptionProperty>;

  @SpeakeasyMetadata()
  @Expose({ name: "required" })
  required: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: GetCreateItemsModelPushOptionOptionTypeEnum;
}

export class GetCreateItemsModelResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  pushOption?: GetCreateItemsModelPushOption;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
