import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


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
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeAPIKey;
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
  @SpeakeasyMetadata({ data: "json, name=details" })
  details: string;

  @SpeakeasyMetadata({ data: "json, name=field" })
  field: string;

  @SpeakeasyMetadata({ data: "json, name=ref" })
  ref?: string;
}

export class GetBankAccountPushOptionsPushOptionPushOptionChoicePushOptionChoicePushOptionChoicePushOptionChoicePushValidationInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=information", elemType: GetBankAccountPushOptionsPushOptionPushOptionChoicePushOptionChoicePushOptionChoicePushOptionChoicePushValidationInfoPushFieldValidation })
  information?: GetBankAccountPushOptionsPushOptionPushOptionChoicePushOptionChoicePushOptionChoicePushOptionChoicePushValidationInfoPushFieldValidation[];

  @SpeakeasyMetadata({ data: "json, name=warnings", elemType: GetBankAccountPushOptionsPushOptionPushOptionChoicePushOptionChoicePushOptionChoicePushOptionChoicePushValidationInfoPushFieldValidation })
  warnings?: GetBankAccountPushOptionsPushOptionPushOptionChoicePushOptionChoicePushOptionChoicePushOptionChoicePushValidationInfoPushFieldValidation[];
}

export class GetBankAccountPushOptionsPushOptionPushOptionChoicePushOptionChoicePushOptionChoicePushOptionChoice extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName: string;

  @SpeakeasyMetadata({ data: "json, name=rel" })
  rel?: string;

  @SpeakeasyMetadata({ data: "json, name=required" })
  required: boolean;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: GetBankAccountPushOptionsPushOptionPushOptionChoicePushOptionChoicePushOptionChoicePushOptionChoiceOptionTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=validation" })
  validation?: GetBankAccountPushOptionsPushOptionPushOptionChoicePushOptionChoicePushOptionChoicePushOptionChoicePushValidationInfo;

  @SpeakeasyMetadata({ data: "json, name=value" })
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
  @SpeakeasyMetadata({ data: "json, name=details" })
  details: string;

  @SpeakeasyMetadata({ data: "json, name=field" })
  field: string;

  @SpeakeasyMetadata({ data: "json, name=ref" })
  ref?: string;
}

export class GetBankAccountPushOptionsPushOptionPushOptionChoicePushOptionChoicePushOptionChoicePushValidationInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=information", elemType: GetBankAccountPushOptionsPushOptionPushOptionChoicePushOptionChoicePushOptionChoicePushValidationInfoPushFieldValidation })
  information?: GetBankAccountPushOptionsPushOptionPushOptionChoicePushOptionChoicePushOptionChoicePushValidationInfoPushFieldValidation[];

  @SpeakeasyMetadata({ data: "json, name=warnings", elemType: GetBankAccountPushOptionsPushOptionPushOptionChoicePushOptionChoicePushOptionChoicePushValidationInfoPushFieldValidation })
  warnings?: GetBankAccountPushOptionsPushOptionPushOptionChoicePushOptionChoicePushOptionChoicePushValidationInfoPushFieldValidation[];
}

export class GetBankAccountPushOptionsPushOptionPushOptionChoicePushOptionChoicePushOptionChoice extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName: string;

  @SpeakeasyMetadata({ data: "json, name=options", elemType: GetBankAccountPushOptionsPushOptionPushOptionChoicePushOptionChoicePushOptionChoicePushOptionChoice })
  options?: GetBankAccountPushOptionsPushOptionPushOptionChoicePushOptionChoicePushOptionChoicePushOptionChoice[];

  @SpeakeasyMetadata({ data: "json, name=rel" })
  rel?: string;

  @SpeakeasyMetadata({ data: "json, name=required" })
  required: boolean;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: GetBankAccountPushOptionsPushOptionPushOptionChoicePushOptionChoicePushOptionChoiceOptionTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=validation" })
  validation?: GetBankAccountPushOptionsPushOptionPushOptionChoicePushOptionChoicePushOptionChoicePushValidationInfo;

  @SpeakeasyMetadata({ data: "json, name=value" })
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
  @SpeakeasyMetadata({ data: "json, name=details" })
  details: string;

  @SpeakeasyMetadata({ data: "json, name=field" })
  field: string;

  @SpeakeasyMetadata({ data: "json, name=ref" })
  ref?: string;
}

export class GetBankAccountPushOptionsPushOptionPushOptionChoicePushOptionChoicePushValidationInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=information", elemType: GetBankAccountPushOptionsPushOptionPushOptionChoicePushOptionChoicePushValidationInfoPushFieldValidation })
  information?: GetBankAccountPushOptionsPushOptionPushOptionChoicePushOptionChoicePushValidationInfoPushFieldValidation[];

  @SpeakeasyMetadata({ data: "json, name=warnings", elemType: GetBankAccountPushOptionsPushOptionPushOptionChoicePushOptionChoicePushValidationInfoPushFieldValidation })
  warnings?: GetBankAccountPushOptionsPushOptionPushOptionChoicePushOptionChoicePushValidationInfoPushFieldValidation[];
}

export class GetBankAccountPushOptionsPushOptionPushOptionChoicePushOptionChoice extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName: string;

  @SpeakeasyMetadata({ data: "json, name=options", elemType: GetBankAccountPushOptionsPushOptionPushOptionChoicePushOptionChoicePushOptionChoice })
  options?: GetBankAccountPushOptionsPushOptionPushOptionChoicePushOptionChoicePushOptionChoice[];

  @SpeakeasyMetadata({ data: "json, name=rel" })
  rel?: string;

  @SpeakeasyMetadata({ data: "json, name=required" })
  required: boolean;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: GetBankAccountPushOptionsPushOptionPushOptionChoicePushOptionChoiceOptionTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=validation" })
  validation?: GetBankAccountPushOptionsPushOptionPushOptionChoicePushOptionChoicePushValidationInfo;

  @SpeakeasyMetadata({ data: "json, name=value" })
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
  @SpeakeasyMetadata({ data: "json, name=details" })
  details: string;

  @SpeakeasyMetadata({ data: "json, name=field" })
  field: string;

  @SpeakeasyMetadata({ data: "json, name=ref" })
  ref?: string;
}

export class GetBankAccountPushOptionsPushOptionPushOptionChoicePushValidationInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=information", elemType: GetBankAccountPushOptionsPushOptionPushOptionChoicePushValidationInfoPushFieldValidation })
  information?: GetBankAccountPushOptionsPushOptionPushOptionChoicePushValidationInfoPushFieldValidation[];

  @SpeakeasyMetadata({ data: "json, name=warnings", elemType: GetBankAccountPushOptionsPushOptionPushOptionChoicePushValidationInfoPushFieldValidation })
  warnings?: GetBankAccountPushOptionsPushOptionPushOptionChoicePushValidationInfoPushFieldValidation[];
}

export class GetBankAccountPushOptionsPushOptionPushOptionChoice extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName: string;

  @SpeakeasyMetadata({ data: "json, name=options", elemType: GetBankAccountPushOptionsPushOptionPushOptionChoicePushOptionChoice })
  options?: GetBankAccountPushOptionsPushOptionPushOptionChoicePushOptionChoice[];

  @SpeakeasyMetadata({ data: "json, name=rel" })
  rel?: string;

  @SpeakeasyMetadata({ data: "json, name=required" })
  required: boolean;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: GetBankAccountPushOptionsPushOptionPushOptionChoiceOptionTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=validation" })
  validation?: GetBankAccountPushOptionsPushOptionPushOptionChoicePushValidationInfo;

  @SpeakeasyMetadata({ data: "json, name=value" })
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
  @SpeakeasyMetadata({ data: "json, name=details" })
  details: string;

  @SpeakeasyMetadata({ data: "json, name=field" })
  field: string;

  @SpeakeasyMetadata({ data: "json, name=ref" })
  ref?: string;
}

export class GetBankAccountPushOptionsPushOptionPushValidationInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=information", elemType: GetBankAccountPushOptionsPushOptionPushValidationInfoPushFieldValidation })
  information?: GetBankAccountPushOptionsPushOptionPushValidationInfoPushFieldValidation[];

  @SpeakeasyMetadata({ data: "json, name=warnings", elemType: GetBankAccountPushOptionsPushOptionPushValidationInfoPushFieldValidation })
  warnings?: GetBankAccountPushOptionsPushOptionPushValidationInfoPushFieldValidation[];
}

export class GetBankAccountPushOptionsPushOption extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName: string;

  @SpeakeasyMetadata({ data: "json, name=options", elemType: GetBankAccountPushOptionsPushOptionPushOptionChoice })
  options?: GetBankAccountPushOptionsPushOptionPushOptionChoice[];

  @SpeakeasyMetadata({ data: "json, name=rel" })
  rel?: string;

  @SpeakeasyMetadata({ data: "json, name=required" })
  required: boolean;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: GetBankAccountPushOptionsPushOptionOptionTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=validation" })
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