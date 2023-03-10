import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, plainToInstance, Transform, Type } from "class-transformer";

export class GetCreateChartOfAccountsModelPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=companyId",
  })
  companyId: string;

  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=connectionId",
  })
  connectionId: string;
}

export class GetCreateChartOfAccountsModelRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCreateChartOfAccountsModelPathParams;
}
export enum GetCreateChartOfAccountsModelPushOptionPushOptionPropertyPushOptionChoiceOptionTypeEnum {
  Array = "Array",
  Object = "Object",
  String = "String",
  Number = "Number",
  Boolean = "Boolean",
  DateTime = "DateTime",
  File = "File",
  MultiPart = "MultiPart",
}

export class GetCreateChartOfAccountsModelPushOptionPushOptionPropertyPushOptionChoice extends SpeakeasyBase {
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
  type?: GetCreateChartOfAccountsModelPushOptionPushOptionPropertyPushOptionChoiceOptionTypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "value" })
  value?: string;
}
export enum GetCreateChartOfAccountsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionChoiceOptionTypeEnum {
  Array = "Array",
  Object = "Object",
  String = "String",
  Number = "Number",
  Boolean = "Boolean",
  DateTime = "DateTime",
  File = "File",
  MultiPart = "MultiPart",
}

export class GetCreateChartOfAccountsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionChoice extends SpeakeasyBase {
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
  type?: GetCreateChartOfAccountsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionChoiceOptionTypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "value" })
  value?: string;
}
export enum GetCreateChartOfAccountsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionChoiceOptionTypeEnum {
  Array = "Array",
  Object = "Object",
  String = "String",
  Number = "Number",
  Boolean = "Boolean",
  DateTime = "DateTime",
  File = "File",
  MultiPart = "MultiPart",
}

export class GetCreateChartOfAccountsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionChoice extends SpeakeasyBase {
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
  type?: GetCreateChartOfAccountsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionChoiceOptionTypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "value" })
  value?: string;
}
export enum GetCreateChartOfAccountsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionChoiceOptionTypeEnum {
  Array = "Array",
  Object = "Object",
  String = "String",
  Number = "Number",
  Boolean = "Boolean",
  DateTime = "DateTime",
  File = "File",
  MultiPart = "MultiPart",
}

export class GetCreateChartOfAccountsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionChoice extends SpeakeasyBase {
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
  type?: GetCreateChartOfAccountsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionChoiceOptionTypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "value" })
  value?: string;
}
export enum GetCreateChartOfAccountsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionPropertyOptionTypeEnum {
  Array = "Array",
  Object = "Object",
  String = "String",
  Number = "Number",
  Boolean = "Boolean",
  DateTime = "DateTime",
  File = "File",
  MultiPart = "MultiPart",
}

export class GetCreateChartOfAccountsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionPropertyPushValidationInfoPushFieldValidation extends SpeakeasyBase {
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

export class GetCreateChartOfAccountsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionPropertyPushValidationInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({
    elemType:
      GetCreateChartOfAccountsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionPropertyPushValidationInfoPushFieldValidation,
  })
  @Expose({ name: "information" })
  @Type(
    () =>
      GetCreateChartOfAccountsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionPropertyPushValidationInfoPushFieldValidation
  )
  information?: GetCreateChartOfAccountsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionPropertyPushValidationInfoPushFieldValidation[];

  @SpeakeasyMetadata({
    elemType:
      GetCreateChartOfAccountsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionPropertyPushValidationInfoPushFieldValidation,
  })
  @Expose({ name: "warnings" })
  @Type(
    () =>
      GetCreateChartOfAccountsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionPropertyPushValidationInfoPushFieldValidation
  )
  warnings?: GetCreateChartOfAccountsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionPropertyPushValidationInfoPushFieldValidation[];
}

export class GetCreateChartOfAccountsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionProperty extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description: string;

  @SpeakeasyMetadata()
  @Expose({ name: "displayName" })
  displayName: string;

  @SpeakeasyMetadata({
    elemType:
      GetCreateChartOfAccountsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionChoice,
  })
  @Expose({ name: "options" })
  @Type(
    () =>
      GetCreateChartOfAccountsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionChoice
  )
  options?: GetCreateChartOfAccountsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionChoice[];

  @SpeakeasyMetadata()
  @Expose({ name: "required" })
  required: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: GetCreateChartOfAccountsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionPropertyOptionTypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "validation" })
  @Type(
    () =>
      GetCreateChartOfAccountsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionPropertyPushValidationInfo
  )
  validation?: GetCreateChartOfAccountsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionPropertyPushValidationInfo;
}
export enum GetCreateChartOfAccountsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyOptionTypeEnum {
  Array = "Array",
  Object = "Object",
  String = "String",
  Number = "Number",
  Boolean = "Boolean",
  DateTime = "DateTime",
  File = "File",
  MultiPart = "MultiPart",
}

export class GetCreateChartOfAccountsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushValidationInfoPushFieldValidation extends SpeakeasyBase {
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

export class GetCreateChartOfAccountsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushValidationInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({
    elemType:
      GetCreateChartOfAccountsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushValidationInfoPushFieldValidation,
  })
  @Expose({ name: "information" })
  @Type(
    () =>
      GetCreateChartOfAccountsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushValidationInfoPushFieldValidation
  )
  information?: GetCreateChartOfAccountsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushValidationInfoPushFieldValidation[];

  @SpeakeasyMetadata({
    elemType:
      GetCreateChartOfAccountsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushValidationInfoPushFieldValidation,
  })
  @Expose({ name: "warnings" })
  @Type(
    () =>
      GetCreateChartOfAccountsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushValidationInfoPushFieldValidation
  )
  warnings?: GetCreateChartOfAccountsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushValidationInfoPushFieldValidation[];
}

export class GetCreateChartOfAccountsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionProperty extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description: string;

  @SpeakeasyMetadata()
  @Expose({ name: "displayName" })
  displayName: string;

  @SpeakeasyMetadata({
    elemType:
      GetCreateChartOfAccountsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionChoice,
  })
  @Expose({ name: "options" })
  @Type(
    () =>
      GetCreateChartOfAccountsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionChoice
  )
  options?: GetCreateChartOfAccountsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionChoice[];

  @SpeakeasyMetadata({
    elemType:
      GetCreateChartOfAccountsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionProperty,
  })
  @Expose({ name: "properties" })
  @Transform(
    ({ value }) => {
      const obj: Record<
        string,
        GetCreateChartOfAccountsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionProperty
      > = {};
      for (const key in value) {
        obj[key] = plainToInstance(
          GetCreateChartOfAccountsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionProperty,
          value[
            key
          ] as GetCreateChartOfAccountsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionProperty,
          { excludeExtraneousValues: true }
        );
      }
      return obj;
    },
    { toClassOnly: true }
  )
  properties?: Record<
    string,
    GetCreateChartOfAccountsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionProperty
  >;

  @SpeakeasyMetadata()
  @Expose({ name: "required" })
  required: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: GetCreateChartOfAccountsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyOptionTypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "validation" })
  @Type(
    () =>
      GetCreateChartOfAccountsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushValidationInfo
  )
  validation?: GetCreateChartOfAccountsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushValidationInfo;
}
export enum GetCreateChartOfAccountsModelPushOptionPushOptionPropertyPushOptionPropertyOptionTypeEnum {
  Array = "Array",
  Object = "Object",
  String = "String",
  Number = "Number",
  Boolean = "Boolean",
  DateTime = "DateTime",
  File = "File",
  MultiPart = "MultiPart",
}

export class GetCreateChartOfAccountsModelPushOptionPushOptionPropertyPushOptionPropertyPushValidationInfoPushFieldValidation extends SpeakeasyBase {
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

export class GetCreateChartOfAccountsModelPushOptionPushOptionPropertyPushOptionPropertyPushValidationInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({
    elemType:
      GetCreateChartOfAccountsModelPushOptionPushOptionPropertyPushOptionPropertyPushValidationInfoPushFieldValidation,
  })
  @Expose({ name: "information" })
  @Type(
    () =>
      GetCreateChartOfAccountsModelPushOptionPushOptionPropertyPushOptionPropertyPushValidationInfoPushFieldValidation
  )
  information?: GetCreateChartOfAccountsModelPushOptionPushOptionPropertyPushOptionPropertyPushValidationInfoPushFieldValidation[];

  @SpeakeasyMetadata({
    elemType:
      GetCreateChartOfAccountsModelPushOptionPushOptionPropertyPushOptionPropertyPushValidationInfoPushFieldValidation,
  })
  @Expose({ name: "warnings" })
  @Type(
    () =>
      GetCreateChartOfAccountsModelPushOptionPushOptionPropertyPushOptionPropertyPushValidationInfoPushFieldValidation
  )
  warnings?: GetCreateChartOfAccountsModelPushOptionPushOptionPropertyPushOptionPropertyPushValidationInfoPushFieldValidation[];
}

export class GetCreateChartOfAccountsModelPushOptionPushOptionPropertyPushOptionProperty extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description: string;

  @SpeakeasyMetadata()
  @Expose({ name: "displayName" })
  displayName: string;

  @SpeakeasyMetadata({
    elemType:
      GetCreateChartOfAccountsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionChoice,
  })
  @Expose({ name: "options" })
  @Type(
    () =>
      GetCreateChartOfAccountsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionChoice
  )
  options?: GetCreateChartOfAccountsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionChoice[];

  @SpeakeasyMetadata({
    elemType:
      GetCreateChartOfAccountsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionProperty,
  })
  @Expose({ name: "properties" })
  @Transform(
    ({ value }) => {
      const obj: Record<
        string,
        GetCreateChartOfAccountsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionProperty
      > = {};
      for (const key in value) {
        obj[key] = plainToInstance(
          GetCreateChartOfAccountsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionProperty,
          value[
            key
          ] as GetCreateChartOfAccountsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionProperty,
          { excludeExtraneousValues: true }
        );
      }
      return obj;
    },
    { toClassOnly: true }
  )
  properties?: Record<
    string,
    GetCreateChartOfAccountsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionProperty
  >;

  @SpeakeasyMetadata()
  @Expose({ name: "required" })
  required: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: GetCreateChartOfAccountsModelPushOptionPushOptionPropertyPushOptionPropertyOptionTypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "validation" })
  @Type(
    () =>
      GetCreateChartOfAccountsModelPushOptionPushOptionPropertyPushOptionPropertyPushValidationInfo
  )
  validation?: GetCreateChartOfAccountsModelPushOptionPushOptionPropertyPushOptionPropertyPushValidationInfo;
}
export enum GetCreateChartOfAccountsModelPushOptionPushOptionPropertyOptionTypeEnum {
  Array = "Array",
  Object = "Object",
  String = "String",
  Number = "Number",
  Boolean = "Boolean",
  DateTime = "DateTime",
  File = "File",
  MultiPart = "MultiPart",
}

export class GetCreateChartOfAccountsModelPushOptionPushOptionPropertyPushValidationInfoPushFieldValidation extends SpeakeasyBase {
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

export class GetCreateChartOfAccountsModelPushOptionPushOptionPropertyPushValidationInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({
    elemType:
      GetCreateChartOfAccountsModelPushOptionPushOptionPropertyPushValidationInfoPushFieldValidation,
  })
  @Expose({ name: "information" })
  @Type(
    () =>
      GetCreateChartOfAccountsModelPushOptionPushOptionPropertyPushValidationInfoPushFieldValidation
  )
  information?: GetCreateChartOfAccountsModelPushOptionPushOptionPropertyPushValidationInfoPushFieldValidation[];

  @SpeakeasyMetadata({
    elemType:
      GetCreateChartOfAccountsModelPushOptionPushOptionPropertyPushValidationInfoPushFieldValidation,
  })
  @Expose({ name: "warnings" })
  @Type(
    () =>
      GetCreateChartOfAccountsModelPushOptionPushOptionPropertyPushValidationInfoPushFieldValidation
  )
  warnings?: GetCreateChartOfAccountsModelPushOptionPushOptionPropertyPushValidationInfoPushFieldValidation[];
}

export class GetCreateChartOfAccountsModelPushOptionPushOptionProperty extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description: string;

  @SpeakeasyMetadata()
  @Expose({ name: "displayName" })
  displayName: string;

  @SpeakeasyMetadata({
    elemType:
      GetCreateChartOfAccountsModelPushOptionPushOptionPropertyPushOptionChoice,
  })
  @Expose({ name: "options" })
  @Type(
    () =>
      GetCreateChartOfAccountsModelPushOptionPushOptionPropertyPushOptionChoice
  )
  options?: GetCreateChartOfAccountsModelPushOptionPushOptionPropertyPushOptionChoice[];

  @SpeakeasyMetadata({
    elemType:
      GetCreateChartOfAccountsModelPushOptionPushOptionPropertyPushOptionProperty,
  })
  @Expose({ name: "properties" })
  @Transform(
    ({ value }) => {
      const obj: Record<
        string,
        GetCreateChartOfAccountsModelPushOptionPushOptionPropertyPushOptionProperty
      > = {};
      for (const key in value) {
        obj[key] = plainToInstance(
          GetCreateChartOfAccountsModelPushOptionPushOptionPropertyPushOptionProperty,
          value[
            key
          ] as GetCreateChartOfAccountsModelPushOptionPushOptionPropertyPushOptionProperty,
          { excludeExtraneousValues: true }
        );
      }
      return obj;
    },
    { toClassOnly: true }
  )
  properties?: Record<
    string,
    GetCreateChartOfAccountsModelPushOptionPushOptionPropertyPushOptionProperty
  >;

  @SpeakeasyMetadata()
  @Expose({ name: "required" })
  required: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: GetCreateChartOfAccountsModelPushOptionPushOptionPropertyOptionTypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "validation" })
  @Type(
    () =>
      GetCreateChartOfAccountsModelPushOptionPushOptionPropertyPushValidationInfo
  )
  validation?: GetCreateChartOfAccountsModelPushOptionPushOptionPropertyPushValidationInfo;
}
export enum GetCreateChartOfAccountsModelPushOptionOptionTypeEnum {
  Array = "Array",
  Object = "Object",
  String = "String",
  Number = "Number",
  Boolean = "Boolean",
  DateTime = "DateTime",
  File = "File",
  MultiPart = "MultiPart",
}

export class GetCreateChartOfAccountsModelPushOption extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "displayName" })
  displayName: string;

  @SpeakeasyMetadata({
    elemType: GetCreateChartOfAccountsModelPushOptionPushOptionProperty,
  })
  @Expose({ name: "properties" })
  @Transform(
    ({ value }) => {
      const obj: Record<
        string,
        GetCreateChartOfAccountsModelPushOptionPushOptionProperty
      > = {};
      for (const key in value) {
        obj[key] = plainToInstance(
          GetCreateChartOfAccountsModelPushOptionPushOptionProperty,
          value[
            key
          ] as GetCreateChartOfAccountsModelPushOptionPushOptionProperty,
          { excludeExtraneousValues: true }
        );
      }
      return obj;
    },
    { toClassOnly: true }
  )
  properties?: Record<
    string,
    GetCreateChartOfAccountsModelPushOptionPushOptionProperty
  >;

  @SpeakeasyMetadata()
  @Expose({ name: "required" })
  required: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: GetCreateChartOfAccountsModelPushOptionOptionTypeEnum;
}

export class GetCreateChartOfAccountsModelResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  pushOption?: GetCreateChartOfAccountsModelPushOption;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
