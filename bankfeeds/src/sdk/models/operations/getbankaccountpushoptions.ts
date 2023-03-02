import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Type } from "class-transformer";


export class GetBankAccountPushOptionsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" })
  accountId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=connectionId" })
  connectionId: string;
}

export class GetBankAccountPushOptionsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=orderBy" })
  orderBy?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;
}

export class GetBankAccountPushOptionsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header;name=Authorization" })
  apiKey: string;
}

export class GetBankAccountPushOptionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetBankAccountPushOptionsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetBankAccountPushOptionsQueryParams;

  @SpeakeasyMetadata()
  security: GetBankAccountPushOptionsSecurity;
}
export enum GetBankAccountPushOptionsPushOptionPushOptionChoicePushOptionChoicePushOptionChoicePushOptionChoiceOptionTypeEnum {
    Array = "Array",
    Object = "Object",
    String = "String",
    Number = "Number",
    Boolean = "Boolean",
    DateTime = "DateTime",
    File = "File",
    MultiPart = "MultiPart"
}

export class GetBankAccountPushOptionsPushOptionPushOptionChoicePushOptionChoicePushOptionChoicePushOptionChoicePushValidationInfoPushFieldValidation extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "details" })
  details: string;

  @SpeakeasyMetadata()
  @Expose({ name: "field" })
  field: string;

  @SpeakeasyMetadata()
  @Expose({ name: "ref" })
  ref?: string;
}

export class GetBankAccountPushOptionsPushOptionPushOptionChoicePushOptionChoicePushOptionChoicePushOptionChoicePushValidationInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: GetBankAccountPushOptionsPushOptionPushOptionChoicePushOptionChoicePushOptionChoicePushOptionChoicePushValidationInfoPushFieldValidation })
  @Expose({ name: "information" })
  @Type(() => GetBankAccountPushOptionsPushOptionPushOptionChoicePushOptionChoicePushOptionChoicePushOptionChoicePushValidationInfoPushFieldValidation)
  information?: GetBankAccountPushOptionsPushOptionPushOptionChoicePushOptionChoicePushOptionChoicePushOptionChoicePushValidationInfoPushFieldValidation[];

  @SpeakeasyMetadata({ elemType: GetBankAccountPushOptionsPushOptionPushOptionChoicePushOptionChoicePushOptionChoicePushOptionChoicePushValidationInfoPushFieldValidation })
  @Expose({ name: "warnings" })
  @Type(() => GetBankAccountPushOptionsPushOptionPushOptionChoicePushOptionChoicePushOptionChoicePushOptionChoicePushValidationInfoPushFieldValidation)
  warnings?: GetBankAccountPushOptionsPushOptionPushOptionChoicePushOptionChoicePushOptionChoicePushOptionChoicePushValidationInfoPushFieldValidation[];
}

export class GetBankAccountPushOptionsPushOptionPushOptionChoicePushOptionChoicePushOptionChoicePushOptionChoice extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description: string;

  @SpeakeasyMetadata()
  @Expose({ name: "displayName" })
  displayName: string;

  @SpeakeasyMetadata()
  @Expose({ name: "rel" })
  rel?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "required" })
  required: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: GetBankAccountPushOptionsPushOptionPushOptionChoicePushOptionChoicePushOptionChoicePushOptionChoiceOptionTypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "validation" })
  @Type(() => GetBankAccountPushOptionsPushOptionPushOptionChoicePushOptionChoicePushOptionChoicePushOptionChoicePushValidationInfo)
  validation?: GetBankAccountPushOptionsPushOptionPushOptionChoicePushOptionChoicePushOptionChoicePushOptionChoicePushValidationInfo;

  @SpeakeasyMetadata()
  @Expose({ name: "value" })
  value: string;
}
export enum GetBankAccountPushOptionsPushOptionPushOptionChoicePushOptionChoicePushOptionChoiceOptionTypeEnum {
    Array = "Array",
    Object = "Object",
    String = "String",
    Number = "Number",
    Boolean = "Boolean",
    DateTime = "DateTime",
    File = "File",
    MultiPart = "MultiPart"
}

export class GetBankAccountPushOptionsPushOptionPushOptionChoicePushOptionChoicePushOptionChoicePushValidationInfoPushFieldValidation extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "details" })
  details: string;

  @SpeakeasyMetadata()
  @Expose({ name: "field" })
  field: string;

  @SpeakeasyMetadata()
  @Expose({ name: "ref" })
  ref?: string;
}

export class GetBankAccountPushOptionsPushOptionPushOptionChoicePushOptionChoicePushOptionChoicePushValidationInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: GetBankAccountPushOptionsPushOptionPushOptionChoicePushOptionChoicePushOptionChoicePushValidationInfoPushFieldValidation })
  @Expose({ name: "information" })
  @Type(() => GetBankAccountPushOptionsPushOptionPushOptionChoicePushOptionChoicePushOptionChoicePushValidationInfoPushFieldValidation)
  information?: GetBankAccountPushOptionsPushOptionPushOptionChoicePushOptionChoicePushOptionChoicePushValidationInfoPushFieldValidation[];

  @SpeakeasyMetadata({ elemType: GetBankAccountPushOptionsPushOptionPushOptionChoicePushOptionChoicePushOptionChoicePushValidationInfoPushFieldValidation })
  @Expose({ name: "warnings" })
  @Type(() => GetBankAccountPushOptionsPushOptionPushOptionChoicePushOptionChoicePushOptionChoicePushValidationInfoPushFieldValidation)
  warnings?: GetBankAccountPushOptionsPushOptionPushOptionChoicePushOptionChoicePushOptionChoicePushValidationInfoPushFieldValidation[];
}

export class GetBankAccountPushOptionsPushOptionPushOptionChoicePushOptionChoicePushOptionChoice extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description: string;

  @SpeakeasyMetadata()
  @Expose({ name: "displayName" })
  displayName: string;

  @SpeakeasyMetadata({ elemType: GetBankAccountPushOptionsPushOptionPushOptionChoicePushOptionChoicePushOptionChoicePushOptionChoice })
  @Expose({ name: "options" })
  @Type(() => GetBankAccountPushOptionsPushOptionPushOptionChoicePushOptionChoicePushOptionChoicePushOptionChoice)
  options?: GetBankAccountPushOptionsPushOptionPushOptionChoicePushOptionChoicePushOptionChoicePushOptionChoice[];

  @SpeakeasyMetadata()
  @Expose({ name: "rel" })
  rel?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "required" })
  required: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: GetBankAccountPushOptionsPushOptionPushOptionChoicePushOptionChoicePushOptionChoiceOptionTypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "validation" })
  @Type(() => GetBankAccountPushOptionsPushOptionPushOptionChoicePushOptionChoicePushOptionChoicePushValidationInfo)
  validation?: GetBankAccountPushOptionsPushOptionPushOptionChoicePushOptionChoicePushOptionChoicePushValidationInfo;

  @SpeakeasyMetadata()
  @Expose({ name: "value" })
  value: string;
}
export enum GetBankAccountPushOptionsPushOptionPushOptionChoicePushOptionChoiceOptionTypeEnum {
    Array = "Array",
    Object = "Object",
    String = "String",
    Number = "Number",
    Boolean = "Boolean",
    DateTime = "DateTime",
    File = "File",
    MultiPart = "MultiPart"
}

export class GetBankAccountPushOptionsPushOptionPushOptionChoicePushOptionChoicePushValidationInfoPushFieldValidation extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "details" })
  details: string;

  @SpeakeasyMetadata()
  @Expose({ name: "field" })
  field: string;

  @SpeakeasyMetadata()
  @Expose({ name: "ref" })
  ref?: string;
}

export class GetBankAccountPushOptionsPushOptionPushOptionChoicePushOptionChoicePushValidationInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: GetBankAccountPushOptionsPushOptionPushOptionChoicePushOptionChoicePushValidationInfoPushFieldValidation })
  @Expose({ name: "information" })
  @Type(() => GetBankAccountPushOptionsPushOptionPushOptionChoicePushOptionChoicePushValidationInfoPushFieldValidation)
  information?: GetBankAccountPushOptionsPushOptionPushOptionChoicePushOptionChoicePushValidationInfoPushFieldValidation[];

  @SpeakeasyMetadata({ elemType: GetBankAccountPushOptionsPushOptionPushOptionChoicePushOptionChoicePushValidationInfoPushFieldValidation })
  @Expose({ name: "warnings" })
  @Type(() => GetBankAccountPushOptionsPushOptionPushOptionChoicePushOptionChoicePushValidationInfoPushFieldValidation)
  warnings?: GetBankAccountPushOptionsPushOptionPushOptionChoicePushOptionChoicePushValidationInfoPushFieldValidation[];
}

export class GetBankAccountPushOptionsPushOptionPushOptionChoicePushOptionChoice extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description: string;

  @SpeakeasyMetadata()
  @Expose({ name: "displayName" })
  displayName: string;

  @SpeakeasyMetadata({ elemType: GetBankAccountPushOptionsPushOptionPushOptionChoicePushOptionChoicePushOptionChoice })
  @Expose({ name: "options" })
  @Type(() => GetBankAccountPushOptionsPushOptionPushOptionChoicePushOptionChoicePushOptionChoice)
  options?: GetBankAccountPushOptionsPushOptionPushOptionChoicePushOptionChoicePushOptionChoice[];

  @SpeakeasyMetadata()
  @Expose({ name: "rel" })
  rel?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "required" })
  required: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: GetBankAccountPushOptionsPushOptionPushOptionChoicePushOptionChoiceOptionTypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "validation" })
  @Type(() => GetBankAccountPushOptionsPushOptionPushOptionChoicePushOptionChoicePushValidationInfo)
  validation?: GetBankAccountPushOptionsPushOptionPushOptionChoicePushOptionChoicePushValidationInfo;

  @SpeakeasyMetadata()
  @Expose({ name: "value" })
  value: string;
}
export enum GetBankAccountPushOptionsPushOptionPushOptionChoiceOptionTypeEnum {
    Array = "Array",
    Object = "Object",
    String = "String",
    Number = "Number",
    Boolean = "Boolean",
    DateTime = "DateTime",
    File = "File",
    MultiPart = "MultiPart"
}

export class GetBankAccountPushOptionsPushOptionPushOptionChoicePushValidationInfoPushFieldValidation extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "details" })
  details: string;

  @SpeakeasyMetadata()
  @Expose({ name: "field" })
  field: string;

  @SpeakeasyMetadata()
  @Expose({ name: "ref" })
  ref?: string;
}

export class GetBankAccountPushOptionsPushOptionPushOptionChoicePushValidationInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: GetBankAccountPushOptionsPushOptionPushOptionChoicePushValidationInfoPushFieldValidation })
  @Expose({ name: "information" })
  @Type(() => GetBankAccountPushOptionsPushOptionPushOptionChoicePushValidationInfoPushFieldValidation)
  information?: GetBankAccountPushOptionsPushOptionPushOptionChoicePushValidationInfoPushFieldValidation[];

  @SpeakeasyMetadata({ elemType: GetBankAccountPushOptionsPushOptionPushOptionChoicePushValidationInfoPushFieldValidation })
  @Expose({ name: "warnings" })
  @Type(() => GetBankAccountPushOptionsPushOptionPushOptionChoicePushValidationInfoPushFieldValidation)
  warnings?: GetBankAccountPushOptionsPushOptionPushOptionChoicePushValidationInfoPushFieldValidation[];
}

export class GetBankAccountPushOptionsPushOptionPushOptionChoice extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description: string;

  @SpeakeasyMetadata()
  @Expose({ name: "displayName" })
  displayName: string;

  @SpeakeasyMetadata({ elemType: GetBankAccountPushOptionsPushOptionPushOptionChoicePushOptionChoice })
  @Expose({ name: "options" })
  @Type(() => GetBankAccountPushOptionsPushOptionPushOptionChoicePushOptionChoice)
  options?: GetBankAccountPushOptionsPushOptionPushOptionChoicePushOptionChoice[];

  @SpeakeasyMetadata()
  @Expose({ name: "rel" })
  rel?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "required" })
  required: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: GetBankAccountPushOptionsPushOptionPushOptionChoiceOptionTypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "validation" })
  @Type(() => GetBankAccountPushOptionsPushOptionPushOptionChoicePushValidationInfo)
  validation?: GetBankAccountPushOptionsPushOptionPushOptionChoicePushValidationInfo;

  @SpeakeasyMetadata()
  @Expose({ name: "value" })
  value: string;
}
export enum GetBankAccountPushOptionsPushOptionOptionTypeEnum {
    Array = "Array",
    Object = "Object",
    String = "String",
    Number = "Number",
    Boolean = "Boolean",
    DateTime = "DateTime",
    File = "File",
    MultiPart = "MultiPart"
}

export class GetBankAccountPushOptionsPushOptionPushValidationInfoPushFieldValidation extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "details" })
  details: string;

  @SpeakeasyMetadata()
  @Expose({ name: "field" })
  field: string;

  @SpeakeasyMetadata()
  @Expose({ name: "ref" })
  ref?: string;
}

export class GetBankAccountPushOptionsPushOptionPushValidationInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: GetBankAccountPushOptionsPushOptionPushValidationInfoPushFieldValidation })
  @Expose({ name: "information" })
  @Type(() => GetBankAccountPushOptionsPushOptionPushValidationInfoPushFieldValidation)
  information?: GetBankAccountPushOptionsPushOptionPushValidationInfoPushFieldValidation[];

  @SpeakeasyMetadata({ elemType: GetBankAccountPushOptionsPushOptionPushValidationInfoPushFieldValidation })
  @Expose({ name: "warnings" })
  @Type(() => GetBankAccountPushOptionsPushOptionPushValidationInfoPushFieldValidation)
  warnings?: GetBankAccountPushOptionsPushOptionPushValidationInfoPushFieldValidation[];
}

export class GetBankAccountPushOptionsPushOption extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description: string;

  @SpeakeasyMetadata()
  @Expose({ name: "displayName" })
  displayName: string;

  @SpeakeasyMetadata({ elemType: GetBankAccountPushOptionsPushOptionPushOptionChoice })
  @Expose({ name: "options" })
  @Type(() => GetBankAccountPushOptionsPushOptionPushOptionChoice)
  options?: GetBankAccountPushOptionsPushOptionPushOptionChoice[];

  @SpeakeasyMetadata()
  @Expose({ name: "rel" })
  rel?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "required" })
  required: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: GetBankAccountPushOptionsPushOptionOptionTypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "validation" })
  @Type(() => GetBankAccountPushOptionsPushOptionPushValidationInfo)
  validation?: GetBankAccountPushOptionsPushOptionPushValidationInfo;
}

export class GetBankAccountPushOptionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  pushOption?: GetBankAccountPushOptionsPushOption;

  @SpeakeasyMetadata()
  statusCode: number;
}