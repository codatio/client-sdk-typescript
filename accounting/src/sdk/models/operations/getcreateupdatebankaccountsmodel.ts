import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, plainToInstance, Transform, Type } from "class-transformer";

export class GetCreateUpdateBankAccountsModelPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=companyId",
  })
  companyId: string;

  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=connectionId",
  })
  connectionId: string;
}

export class GetCreateUpdateBankAccountsModelRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCreateUpdateBankAccountsModelPathParams;
}
export enum GetCreateUpdateBankAccountsModelPushOptionPushOptionPropertyPushOptionChoiceOptionTypeEnum {
  Array = "Array",
  Object = "Object",
  String = "String",
  Number = "Number",
  Boolean = "Boolean",
  DateTime = "DateTime",
  File = "File",
  MultiPart = "MultiPart",
}

export class GetCreateUpdateBankAccountsModelPushOptionPushOptionPropertyPushOptionChoice extends SpeakeasyBase {
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
  type?: GetCreateUpdateBankAccountsModelPushOptionPushOptionPropertyPushOptionChoiceOptionTypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "value" })
  value?: string;
}
export enum GetCreateUpdateBankAccountsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionChoiceOptionTypeEnum {
  Array = "Array",
  Object = "Object",
  String = "String",
  Number = "Number",
  Boolean = "Boolean",
  DateTime = "DateTime",
  File = "File",
  MultiPart = "MultiPart",
}

export class GetCreateUpdateBankAccountsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionChoice extends SpeakeasyBase {
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
  type?: GetCreateUpdateBankAccountsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionChoiceOptionTypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "value" })
  value?: string;
}
export enum GetCreateUpdateBankAccountsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionChoiceOptionTypeEnum {
  Array = "Array",
  Object = "Object",
  String = "String",
  Number = "Number",
  Boolean = "Boolean",
  DateTime = "DateTime",
  File = "File",
  MultiPart = "MultiPart",
}

export class GetCreateUpdateBankAccountsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionChoice extends SpeakeasyBase {
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
  type?: GetCreateUpdateBankAccountsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionChoiceOptionTypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "value" })
  value?: string;
}
export enum GetCreateUpdateBankAccountsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionChoiceOptionTypeEnum {
  Array = "Array",
  Object = "Object",
  String = "String",
  Number = "Number",
  Boolean = "Boolean",
  DateTime = "DateTime",
  File = "File",
  MultiPart = "MultiPart",
}

export class GetCreateUpdateBankAccountsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionChoice extends SpeakeasyBase {
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
  type?: GetCreateUpdateBankAccountsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionChoiceOptionTypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "value" })
  value?: string;
}
export enum GetCreateUpdateBankAccountsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionPropertyOptionTypeEnum {
  Array = "Array",
  Object = "Object",
  String = "String",
  Number = "Number",
  Boolean = "Boolean",
  DateTime = "DateTime",
  File = "File",
  MultiPart = "MultiPart",
}

export class GetCreateUpdateBankAccountsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionPropertyPushValidationInfoPushFieldValidation extends SpeakeasyBase {
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

export class GetCreateUpdateBankAccountsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionPropertyPushValidationInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({
    elemType:
      GetCreateUpdateBankAccountsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionPropertyPushValidationInfoPushFieldValidation,
  })
  @Expose({ name: "information" })
  @Type(
    () =>
      GetCreateUpdateBankAccountsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionPropertyPushValidationInfoPushFieldValidation
  )
  information?: GetCreateUpdateBankAccountsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionPropertyPushValidationInfoPushFieldValidation[];

  @SpeakeasyMetadata({
    elemType:
      GetCreateUpdateBankAccountsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionPropertyPushValidationInfoPushFieldValidation,
  })
  @Expose({ name: "warnings" })
  @Type(
    () =>
      GetCreateUpdateBankAccountsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionPropertyPushValidationInfoPushFieldValidation
  )
  warnings?: GetCreateUpdateBankAccountsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionPropertyPushValidationInfoPushFieldValidation[];
}

export class GetCreateUpdateBankAccountsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionProperty extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description: string;

  @SpeakeasyMetadata()
  @Expose({ name: "displayName" })
  displayName: string;

  @SpeakeasyMetadata({
    elemType:
      GetCreateUpdateBankAccountsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionChoice,
  })
  @Expose({ name: "options" })
  @Type(
    () =>
      GetCreateUpdateBankAccountsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionChoice
  )
  options?: GetCreateUpdateBankAccountsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionChoice[];

  @SpeakeasyMetadata()
  @Expose({ name: "required" })
  required: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: GetCreateUpdateBankAccountsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionPropertyOptionTypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "validation" })
  @Type(
    () =>
      GetCreateUpdateBankAccountsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionPropertyPushValidationInfo
  )
  validation?: GetCreateUpdateBankAccountsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionPropertyPushValidationInfo;
}
export enum GetCreateUpdateBankAccountsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyOptionTypeEnum {
  Array = "Array",
  Object = "Object",
  String = "String",
  Number = "Number",
  Boolean = "Boolean",
  DateTime = "DateTime",
  File = "File",
  MultiPart = "MultiPart",
}

export class GetCreateUpdateBankAccountsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushValidationInfoPushFieldValidation extends SpeakeasyBase {
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

export class GetCreateUpdateBankAccountsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushValidationInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({
    elemType:
      GetCreateUpdateBankAccountsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushValidationInfoPushFieldValidation,
  })
  @Expose({ name: "information" })
  @Type(
    () =>
      GetCreateUpdateBankAccountsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushValidationInfoPushFieldValidation
  )
  information?: GetCreateUpdateBankAccountsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushValidationInfoPushFieldValidation[];

  @SpeakeasyMetadata({
    elemType:
      GetCreateUpdateBankAccountsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushValidationInfoPushFieldValidation,
  })
  @Expose({ name: "warnings" })
  @Type(
    () =>
      GetCreateUpdateBankAccountsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushValidationInfoPushFieldValidation
  )
  warnings?: GetCreateUpdateBankAccountsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushValidationInfoPushFieldValidation[];
}

export class GetCreateUpdateBankAccountsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionProperty extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description: string;

  @SpeakeasyMetadata()
  @Expose({ name: "displayName" })
  displayName: string;

  @SpeakeasyMetadata({
    elemType:
      GetCreateUpdateBankAccountsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionChoice,
  })
  @Expose({ name: "options" })
  @Type(
    () =>
      GetCreateUpdateBankAccountsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionChoice
  )
  options?: GetCreateUpdateBankAccountsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionChoice[];

  @SpeakeasyMetadata({
    elemType:
      GetCreateUpdateBankAccountsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionProperty,
  })
  @Expose({ name: "properties" })
  @Transform(
    ({ value }) => {
      const obj: Record<
        string,
        GetCreateUpdateBankAccountsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionProperty
      > = {};
      for (const key in value) {
        obj[key] = plainToInstance(
          GetCreateUpdateBankAccountsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionProperty,
          value[
            key
          ] as GetCreateUpdateBankAccountsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionProperty,
          { excludeExtraneousValues: true }
        );
      }
      return obj;
    },
    { toClassOnly: true }
  )
  properties?: Record<
    string,
    GetCreateUpdateBankAccountsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushOptionProperty
  >;

  @SpeakeasyMetadata()
  @Expose({ name: "required" })
  required: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: GetCreateUpdateBankAccountsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyOptionTypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "validation" })
  @Type(
    () =>
      GetCreateUpdateBankAccountsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushValidationInfo
  )
  validation?: GetCreateUpdateBankAccountsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionPropertyPushValidationInfo;
}
export enum GetCreateUpdateBankAccountsModelPushOptionPushOptionPropertyPushOptionPropertyOptionTypeEnum {
  Array = "Array",
  Object = "Object",
  String = "String",
  Number = "Number",
  Boolean = "Boolean",
  DateTime = "DateTime",
  File = "File",
  MultiPart = "MultiPart",
}

export class GetCreateUpdateBankAccountsModelPushOptionPushOptionPropertyPushOptionPropertyPushValidationInfoPushFieldValidation extends SpeakeasyBase {
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

export class GetCreateUpdateBankAccountsModelPushOptionPushOptionPropertyPushOptionPropertyPushValidationInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({
    elemType:
      GetCreateUpdateBankAccountsModelPushOptionPushOptionPropertyPushOptionPropertyPushValidationInfoPushFieldValidation,
  })
  @Expose({ name: "information" })
  @Type(
    () =>
      GetCreateUpdateBankAccountsModelPushOptionPushOptionPropertyPushOptionPropertyPushValidationInfoPushFieldValidation
  )
  information?: GetCreateUpdateBankAccountsModelPushOptionPushOptionPropertyPushOptionPropertyPushValidationInfoPushFieldValidation[];

  @SpeakeasyMetadata({
    elemType:
      GetCreateUpdateBankAccountsModelPushOptionPushOptionPropertyPushOptionPropertyPushValidationInfoPushFieldValidation,
  })
  @Expose({ name: "warnings" })
  @Type(
    () =>
      GetCreateUpdateBankAccountsModelPushOptionPushOptionPropertyPushOptionPropertyPushValidationInfoPushFieldValidation
  )
  warnings?: GetCreateUpdateBankAccountsModelPushOptionPushOptionPropertyPushOptionPropertyPushValidationInfoPushFieldValidation[];
}

export class GetCreateUpdateBankAccountsModelPushOptionPushOptionPropertyPushOptionProperty extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description: string;

  @SpeakeasyMetadata()
  @Expose({ name: "displayName" })
  displayName: string;

  @SpeakeasyMetadata({
    elemType:
      GetCreateUpdateBankAccountsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionChoice,
  })
  @Expose({ name: "options" })
  @Type(
    () =>
      GetCreateUpdateBankAccountsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionChoice
  )
  options?: GetCreateUpdateBankAccountsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionChoice[];

  @SpeakeasyMetadata({
    elemType:
      GetCreateUpdateBankAccountsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionProperty,
  })
  @Expose({ name: "properties" })
  @Transform(
    ({ value }) => {
      const obj: Record<
        string,
        GetCreateUpdateBankAccountsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionProperty
      > = {};
      for (const key in value) {
        obj[key] = plainToInstance(
          GetCreateUpdateBankAccountsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionProperty,
          value[
            key
          ] as GetCreateUpdateBankAccountsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionProperty,
          { excludeExtraneousValues: true }
        );
      }
      return obj;
    },
    { toClassOnly: true }
  )
  properties?: Record<
    string,
    GetCreateUpdateBankAccountsModelPushOptionPushOptionPropertyPushOptionPropertyPushOptionProperty
  >;

  @SpeakeasyMetadata()
  @Expose({ name: "required" })
  required: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: GetCreateUpdateBankAccountsModelPushOptionPushOptionPropertyPushOptionPropertyOptionTypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "validation" })
  @Type(
    () =>
      GetCreateUpdateBankAccountsModelPushOptionPushOptionPropertyPushOptionPropertyPushValidationInfo
  )
  validation?: GetCreateUpdateBankAccountsModelPushOptionPushOptionPropertyPushOptionPropertyPushValidationInfo;
}
export enum GetCreateUpdateBankAccountsModelPushOptionPushOptionPropertyOptionTypeEnum {
  Array = "Array",
  Object = "Object",
  String = "String",
  Number = "Number",
  Boolean = "Boolean",
  DateTime = "DateTime",
  File = "File",
  MultiPart = "MultiPart",
}

export class GetCreateUpdateBankAccountsModelPushOptionPushOptionPropertyPushValidationInfoPushFieldValidation extends SpeakeasyBase {
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

export class GetCreateUpdateBankAccountsModelPushOptionPushOptionPropertyPushValidationInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({
    elemType:
      GetCreateUpdateBankAccountsModelPushOptionPushOptionPropertyPushValidationInfoPushFieldValidation,
  })
  @Expose({ name: "information" })
  @Type(
    () =>
      GetCreateUpdateBankAccountsModelPushOptionPushOptionPropertyPushValidationInfoPushFieldValidation
  )
  information?: GetCreateUpdateBankAccountsModelPushOptionPushOptionPropertyPushValidationInfoPushFieldValidation[];

  @SpeakeasyMetadata({
    elemType:
      GetCreateUpdateBankAccountsModelPushOptionPushOptionPropertyPushValidationInfoPushFieldValidation,
  })
  @Expose({ name: "warnings" })
  @Type(
    () =>
      GetCreateUpdateBankAccountsModelPushOptionPushOptionPropertyPushValidationInfoPushFieldValidation
  )
  warnings?: GetCreateUpdateBankAccountsModelPushOptionPushOptionPropertyPushValidationInfoPushFieldValidation[];
}

export class GetCreateUpdateBankAccountsModelPushOptionPushOptionProperty extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description: string;

  @SpeakeasyMetadata()
  @Expose({ name: "displayName" })
  displayName: string;

  @SpeakeasyMetadata({
    elemType:
      GetCreateUpdateBankAccountsModelPushOptionPushOptionPropertyPushOptionChoice,
  })
  @Expose({ name: "options" })
  @Type(
    () =>
      GetCreateUpdateBankAccountsModelPushOptionPushOptionPropertyPushOptionChoice
  )
  options?: GetCreateUpdateBankAccountsModelPushOptionPushOptionPropertyPushOptionChoice[];

  @SpeakeasyMetadata({
    elemType:
      GetCreateUpdateBankAccountsModelPushOptionPushOptionPropertyPushOptionProperty,
  })
  @Expose({ name: "properties" })
  @Transform(
    ({ value }) => {
      const obj: Record<
        string,
        GetCreateUpdateBankAccountsModelPushOptionPushOptionPropertyPushOptionProperty
      > = {};
      for (const key in value) {
        obj[key] = plainToInstance(
          GetCreateUpdateBankAccountsModelPushOptionPushOptionPropertyPushOptionProperty,
          value[
            key
          ] as GetCreateUpdateBankAccountsModelPushOptionPushOptionPropertyPushOptionProperty,
          { excludeExtraneousValues: true }
        );
      }
      return obj;
    },
    { toClassOnly: true }
  )
  properties?: Record<
    string,
    GetCreateUpdateBankAccountsModelPushOptionPushOptionPropertyPushOptionProperty
  >;

  @SpeakeasyMetadata()
  @Expose({ name: "required" })
  required: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: GetCreateUpdateBankAccountsModelPushOptionPushOptionPropertyOptionTypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "validation" })
  @Type(
    () =>
      GetCreateUpdateBankAccountsModelPushOptionPushOptionPropertyPushValidationInfo
  )
  validation?: GetCreateUpdateBankAccountsModelPushOptionPushOptionPropertyPushValidationInfo;
}
export enum GetCreateUpdateBankAccountsModelPushOptionOptionTypeEnum {
  Array = "Array",
  Object = "Object",
  String = "String",
  Number = "Number",
  Boolean = "Boolean",
  DateTime = "DateTime",
  File = "File",
  MultiPart = "MultiPart",
}

export class GetCreateUpdateBankAccountsModelPushOption extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "displayName" })
  displayName: string;

  @SpeakeasyMetadata({
    elemType: GetCreateUpdateBankAccountsModelPushOptionPushOptionProperty,
  })
  @Expose({ name: "properties" })
  @Transform(
    ({ value }) => {
      const obj: Record<
        string,
        GetCreateUpdateBankAccountsModelPushOptionPushOptionProperty
      > = {};
      for (const key in value) {
        obj[key] = plainToInstance(
          GetCreateUpdateBankAccountsModelPushOptionPushOptionProperty,
          value[
            key
          ] as GetCreateUpdateBankAccountsModelPushOptionPushOptionProperty,
          { excludeExtraneousValues: true }
        );
      }
      return obj;
    },
    { toClassOnly: true }
  )
  properties?: Record<
    string,
    GetCreateUpdateBankAccountsModelPushOptionPushOptionProperty
  >;

  @SpeakeasyMetadata()
  @Expose({ name: "required" })
  required: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: GetCreateUpdateBankAccountsModelPushOptionOptionTypeEnum;
}

export class GetCreateUpdateBankAccountsModelResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  pushOption?: GetCreateUpdateBankAccountsModelPushOption;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
