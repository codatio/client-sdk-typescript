import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, plainToInstance, Transform, Type } from "class-transformer";

export class GetCreateUpdateBillsModelPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=companyId",
  })
  companyId: string;

  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=connectionId",
  })
  connectionId: string;
}

export class GetCreateUpdateBillsModelRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCreateUpdateBillsModelPathParams;
}
export enum GetCreateUpdateBillsModelPushOptionPushOptionPropertyPushOptionChoiceOptionTypeEnum {
  Array = "Array",
  Object = "Object",
  String = "String",
  Number = "Number",
  Boolean = "Boolean",
  DateTime = "DateTime",
  File = "File",
  MultiPart = "MultiPart",
}

export class GetCreateUpdateBillsModelPushOptionPushOptionPropertyPushOptionChoice extends SpeakeasyBase {
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
  type?: GetCreateUpdateBillsModelPushOptionPushOptionPropertyPushOptionChoiceOptionTypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "value" })
  value?: string;
}
export enum GetCreateUpdateBillsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionChoiceOptionTypeEnum {
  Array = "Array",
  Object = "Object",
  String = "String",
  Number = "Number",
  Boolean = "Boolean",
  DateTime = "DateTime",
  File = "File",
  MultiPart = "MultiPart",
}

export class GetCreateUpdateBillsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionChoice extends SpeakeasyBase {
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
  type?: GetCreateUpdateBillsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionChoiceOptionTypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "value" })
  value?: string;
}
export enum GetCreateUpdateBillsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionChoiceOptionTypeEnum {
  Array = "Array",
  Object = "Object",
  String = "String",
  Number = "Number",
  Boolean = "Boolean",
  DateTime = "DateTime",
  File = "File",
  MultiPart = "MultiPart",
}

export class GetCreateUpdateBillsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionChoice extends SpeakeasyBase {
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
  type?: GetCreateUpdateBillsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionChoiceOptionTypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "value" })
  value?: string;
}
export enum GetCreateUpdateBillsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionChoiceOptionTypeEnum {
  Array = "Array",
  Object = "Object",
  String = "String",
  Number = "Number",
  Boolean = "Boolean",
  DateTime = "DateTime",
  File = "File",
  MultiPart = "MultiPart",
}

export class GetCreateUpdateBillsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionChoice extends SpeakeasyBase {
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
  type?: GetCreateUpdateBillsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionChoiceOptionTypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "value" })
  value?: string;
}
export enum GetCreateUpdateBillsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionPropertyOptionTypeEnum {
  Array = "Array",
  Object = "Object",
  String = "String",
  Number = "Number",
  Boolean = "Boolean",
  DateTime = "DateTime",
  File = "File",
  MultiPart = "MultiPart",
}

export class GetCreateUpdateBillsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionPropertyPushValidationInfoPushFieldValidation extends SpeakeasyBase {
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

export class GetCreateUpdateBillsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionPropertyPushValidationInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({
    elemType:
      GetCreateUpdateBillsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionPropertyPushValidationInfoPushFieldValidation,
  })
  @Expose({ name: "information" })
  @Type(
    () =>
      GetCreateUpdateBillsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionPropertyPushValidationInfoPushFieldValidation
  )
  information?: GetCreateUpdateBillsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionPropertyPushValidationInfoPushFieldValidation[];

  @SpeakeasyMetadata({
    elemType:
      GetCreateUpdateBillsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionPropertyPushValidationInfoPushFieldValidation,
  })
  @Expose({ name: "warnings" })
  @Type(
    () =>
      GetCreateUpdateBillsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionPropertyPushValidationInfoPushFieldValidation
  )
  warnings?: GetCreateUpdateBillsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionPropertyPushValidationInfoPushFieldValidation[];
}

export class GetCreateUpdateBillsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionProperty extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description: string;

  @SpeakeasyMetadata()
  @Expose({ name: "displayName" })
  displayName: string;

  @SpeakeasyMetadata({
    elemType:
      GetCreateUpdateBillsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionChoice,
  })
  @Expose({ name: "options" })
  @Type(
    () =>
      GetCreateUpdateBillsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionChoice
  )
  options?: GetCreateUpdateBillsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionChoice[];

  @SpeakeasyMetadata()
  @Expose({ name: "required" })
  required: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: GetCreateUpdateBillsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionPropertyOptionTypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "validation" })
  @Type(
    () =>
      GetCreateUpdateBillsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionPropertyPushValidationInfo
  )
  validation?: GetCreateUpdateBillsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionPropertyPushValidationInfo;
}
export enum GetCreateUpdateBillsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyOptionTypeEnum {
  Array = "Array",
  Object = "Object",
  String = "String",
  Number = "Number",
  Boolean = "Boolean",
  DateTime = "DateTime",
  File = "File",
  MultiPart = "MultiPart",
}

export class GetCreateUpdateBillsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushValidationInfoPushFieldValidation extends SpeakeasyBase {
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

export class GetCreateUpdateBillsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushValidationInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({
    elemType:
      GetCreateUpdateBillsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushValidationInfoPushFieldValidation,
  })
  @Expose({ name: "information" })
  @Type(
    () =>
      GetCreateUpdateBillsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushValidationInfoPushFieldValidation
  )
  information?: GetCreateUpdateBillsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushValidationInfoPushFieldValidation[];

  @SpeakeasyMetadata({
    elemType:
      GetCreateUpdateBillsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushValidationInfoPushFieldValidation,
  })
  @Expose({ name: "warnings" })
  @Type(
    () =>
      GetCreateUpdateBillsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushValidationInfoPushFieldValidation
  )
  warnings?: GetCreateUpdateBillsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushValidationInfoPushFieldValidation[];
}

export class GetCreateUpdateBillsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionProperty extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description: string;

  @SpeakeasyMetadata()
  @Expose({ name: "displayName" })
  displayName: string;

  @SpeakeasyMetadata({
    elemType:
      GetCreateUpdateBillsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionChoice,
  })
  @Expose({ name: "options" })
  @Type(
    () =>
      GetCreateUpdateBillsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionChoice
  )
  options?: GetCreateUpdateBillsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionChoice[];

  @SpeakeasyMetadata({
    elemType:
      GetCreateUpdateBillsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionProperty,
  })
  @Expose({ name: "properties" })
  @Transform(
    ({ value }) => {
      const obj: Record<
        string,
        GetCreateUpdateBillsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionProperty
      > = {};
      for (const key in value) {
        obj[key] = plainToInstance(
          GetCreateUpdateBillsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionProperty,
          value[
            key
          ] as GetCreateUpdateBillsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionProperty,
          { excludeExtraneousValues: true }
        );
      }
      return obj;
    },
    { toClassOnly: true }
  )
  properties?: Record<
    string,
    GetCreateUpdateBillsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionProperty
  >;

  @SpeakeasyMetadata()
  @Expose({ name: "required" })
  required: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: GetCreateUpdateBillsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyOptionTypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "validation" })
  @Type(
    () =>
      GetCreateUpdateBillsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushValidationInfo
  )
  validation?: GetCreateUpdateBillsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushValidationInfo;
}
export enum GetCreateUpdateBillsModelPushOptionPushOptionPropertyPushOptionPropertyOptionTypeEnum {
  Array = "Array",
  Object = "Object",
  String = "String",
  Number = "Number",
  Boolean = "Boolean",
  DateTime = "DateTime",
  File = "File",
  MultiPart = "MultiPart",
}

export class GetCreateUpdateBillsModelPushOptionPushOptionPropertyPushOptionPropertyPushValidationInfoPushFieldValidation extends SpeakeasyBase {
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

export class GetCreateUpdateBillsModelPushOptionPushOptionPropertyPushOptionPropertyPushValidationInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({
    elemType:
      GetCreateUpdateBillsModelPushOptionPushOptionPropertyPushOptionPropertyPushValidationInfoPushFieldValidation,
  })
  @Expose({ name: "information" })
  @Type(
    () =>
      GetCreateUpdateBillsModelPushOptionPushOptionPropertyPushOptionPropertyPushValidationInfoPushFieldValidation
  )
  information?: GetCreateUpdateBillsModelPushOptionPushOptionPropertyPushOptionPropertyPushValidationInfoPushFieldValidation[];

  @SpeakeasyMetadata({
    elemType:
      GetCreateUpdateBillsModelPushOptionPushOptionPropertyPushOptionPropertyPushValidationInfoPushFieldValidation,
  })
  @Expose({ name: "warnings" })
  @Type(
    () =>
      GetCreateUpdateBillsModelPushOptionPushOptionPropertyPushOptionPropertyPushValidationInfoPushFieldValidation
  )
  warnings?: GetCreateUpdateBillsModelPushOptionPushOptionPropertyPushOptionPropertyPushValidationInfoPushFieldValidation[];
}

export class GetCreateUpdateBillsModelPushOptionPushOptionPropertyPushOptionProperty extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description: string;

  @SpeakeasyMetadata()
  @Expose({ name: "displayName" })
  displayName: string;

  @SpeakeasyMetadata({
    elemType:
      GetCreateUpdateBillsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionChoice,
  })
  @Expose({ name: "options" })
  @Type(
    () =>
      GetCreateUpdateBillsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionChoice
  )
  options?: GetCreateUpdateBillsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionChoice[];

  @SpeakeasyMetadata({
    elemType:
      GetCreateUpdateBillsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionProperty,
  })
  @Expose({ name: "properties" })
  @Transform(
    ({ value }) => {
      const obj: Record<
        string,
        GetCreateUpdateBillsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionProperty
      > = {};
      for (const key in value) {
        obj[key] = plainToInstance(
          GetCreateUpdateBillsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionProperty,
          value[
            key
          ] as GetCreateUpdateBillsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionProperty,
          { excludeExtraneousValues: true }
        );
      }
      return obj;
    },
    { toClassOnly: true }
  )
  properties?: Record<
    string,
    GetCreateUpdateBillsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionProperty
  >;

  @SpeakeasyMetadata()
  @Expose({ name: "required" })
  required: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: GetCreateUpdateBillsModelPushOptionPushOptionPropertyPushOptionPropertyOptionTypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "validation" })
  @Type(
    () =>
      GetCreateUpdateBillsModelPushOptionPushOptionPropertyPushOptionPropertyPushValidationInfo
  )
  validation?: GetCreateUpdateBillsModelPushOptionPushOptionPropertyPushOptionPropertyPushValidationInfo;
}
export enum GetCreateUpdateBillsModelPushOptionPushOptionPropertyOptionTypeEnum {
  Array = "Array",
  Object = "Object",
  String = "String",
  Number = "Number",
  Boolean = "Boolean",
  DateTime = "DateTime",
  File = "File",
  MultiPart = "MultiPart",
}

export class GetCreateUpdateBillsModelPushOptionPushOptionPropertyPushValidationInfoPushFieldValidation extends SpeakeasyBase {
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

export class GetCreateUpdateBillsModelPushOptionPushOptionPropertyPushValidationInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({
    elemType:
      GetCreateUpdateBillsModelPushOptionPushOptionPropertyPushValidationInfoPushFieldValidation,
  })
  @Expose({ name: "information" })
  @Type(
    () =>
      GetCreateUpdateBillsModelPushOptionPushOptionPropertyPushValidationInfoPushFieldValidation
  )
  information?: GetCreateUpdateBillsModelPushOptionPushOptionPropertyPushValidationInfoPushFieldValidation[];

  @SpeakeasyMetadata({
    elemType:
      GetCreateUpdateBillsModelPushOptionPushOptionPropertyPushValidationInfoPushFieldValidation,
  })
  @Expose({ name: "warnings" })
  @Type(
    () =>
      GetCreateUpdateBillsModelPushOptionPushOptionPropertyPushValidationInfoPushFieldValidation
  )
  warnings?: GetCreateUpdateBillsModelPushOptionPushOptionPropertyPushValidationInfoPushFieldValidation[];
}

export class GetCreateUpdateBillsModelPushOptionPushOptionProperty extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description: string;

  @SpeakeasyMetadata()
  @Expose({ name: "displayName" })
  displayName: string;

  @SpeakeasyMetadata({
    elemType:
      GetCreateUpdateBillsModelPushOptionPushOptionPropertyPushOptionChoice,
  })
  @Expose({ name: "options" })
  @Type(
    () => GetCreateUpdateBillsModelPushOptionPushOptionPropertyPushOptionChoice
  )
  options?: GetCreateUpdateBillsModelPushOptionPushOptionPropertyPushOptionChoice[];

  @SpeakeasyMetadata({
    elemType:
      GetCreateUpdateBillsModelPushOptionPushOptionPropertyPushOptionProperty,
  })
  @Expose({ name: "properties" })
  @Transform(
    ({ value }) => {
      const obj: Record<
        string,
        GetCreateUpdateBillsModelPushOptionPushOptionPropertyPushOptionProperty
      > = {};
      for (const key in value) {
        obj[key] = plainToInstance(
          GetCreateUpdateBillsModelPushOptionPushOptionPropertyPushOptionProperty,
          value[
            key
          ] as GetCreateUpdateBillsModelPushOptionPushOptionPropertyPushOptionProperty,
          { excludeExtraneousValues: true }
        );
      }
      return obj;
    },
    { toClassOnly: true }
  )
  properties?: Record<
    string,
    GetCreateUpdateBillsModelPushOptionPushOptionPropertyPushOptionProperty
  >;

  @SpeakeasyMetadata()
  @Expose({ name: "required" })
  required: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: GetCreateUpdateBillsModelPushOptionPushOptionPropertyOptionTypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "validation" })
  @Type(
    () =>
      GetCreateUpdateBillsModelPushOptionPushOptionPropertyPushValidationInfo
  )
  validation?: GetCreateUpdateBillsModelPushOptionPushOptionPropertyPushValidationInfo;
}
export enum GetCreateUpdateBillsModelPushOptionOptionTypeEnum {
  Array = "Array",
  Object = "Object",
  String = "String",
  Number = "Number",
  Boolean = "Boolean",
  DateTime = "DateTime",
  File = "File",
  MultiPart = "MultiPart",
}

export class GetCreateUpdateBillsModelPushOption extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "displayName" })
  displayName: string;

  @SpeakeasyMetadata({
    elemType: GetCreateUpdateBillsModelPushOptionPushOptionProperty,
  })
  @Expose({ name: "properties" })
  @Transform(
    ({ value }) => {
      const obj: Record<
        string,
        GetCreateUpdateBillsModelPushOptionPushOptionProperty
      > = {};
      for (const key in value) {
        obj[key] = plainToInstance(
          GetCreateUpdateBillsModelPushOptionPushOptionProperty,
          value[key] as GetCreateUpdateBillsModelPushOptionPushOptionProperty,
          { excludeExtraneousValues: true }
        );
      }
      return obj;
    },
    { toClassOnly: true }
  )
  properties?: Record<
    string,
    GetCreateUpdateBillsModelPushOptionPushOptionProperty
  >;

  @SpeakeasyMetadata()
  @Expose({ name: "required" })
  required: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: GetCreateUpdateBillsModelPushOptionOptionTypeEnum;
}

export class GetCreateUpdateBillsModelResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  pushOption?: GetCreateUpdateBillsModelPushOption;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
