import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";

export enum GetCompaniesCompanyIdConnectionsConnectionIdPushDataTypeEnum {
    Invoices = "invoices",
    Accounts = "accounts",
    CommercePayments = "commerce-payments",
    BankingAccounts = "banking-accounts",
    Company = "company",
    ProfitAndLoss = "profitAndLoss",
    CommerceTransactions = "commerce-transactions",
    Bills = "bills",
    Customers = "customers"
}

export class GetCompaniesCompanyIdConnectionsConnectionIdPushPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=connectionId" })
  connectionId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=dataType" })
  dataType: GetCompaniesCompanyIdConnectionsConnectionIdPushDataTypeEnum;
}

export class GetCompaniesCompanyIdConnectionsConnectionIdPushRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCompaniesCompanyIdConnectionsConnectionIdPushPathParams;
}
export enum GetCompaniesCompanyIdConnectionsConnectionIdPushPushOptionPushOptionChoicePushOptionChoicePushOptionChoicePushOptionChoiceOptionTypeEnum {
    Array = "Array",
    Object = "Object",
    String = "String",
    Number = "Number",
    Boolean = "Boolean",
    DateTime = "DateTime",
    File = "File",
    MultiPart = "MultiPart"
}

export class GetCompaniesCompanyIdConnectionsConnectionIdPushPushOptionPushOptionChoicePushOptionChoicePushOptionChoicePushOptionChoicePushValidationInfoPushFieldValidation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=details" })
  details: string;

  @SpeakeasyMetadata({ data: "json, name=field" })
  field: string;

  @SpeakeasyMetadata({ data: "json, name=ref" })
  ref?: string;
}

export class GetCompaniesCompanyIdConnectionsConnectionIdPushPushOptionPushOptionChoicePushOptionChoicePushOptionChoicePushOptionChoicePushValidationInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=information", elemType: GetCompaniesCompanyIdConnectionsConnectionIdPushPushOptionPushOptionChoicePushOptionChoicePushOptionChoicePushOptionChoicePushValidationInfoPushFieldValidation })
  information?: GetCompaniesCompanyIdConnectionsConnectionIdPushPushOptionPushOptionChoicePushOptionChoicePushOptionChoicePushOptionChoicePushValidationInfoPushFieldValidation[];

  @SpeakeasyMetadata({ data: "json, name=warnings", elemType: GetCompaniesCompanyIdConnectionsConnectionIdPushPushOptionPushOptionChoicePushOptionChoicePushOptionChoicePushOptionChoicePushValidationInfoPushFieldValidation })
  warnings?: GetCompaniesCompanyIdConnectionsConnectionIdPushPushOptionPushOptionChoicePushOptionChoicePushOptionChoicePushOptionChoicePushValidationInfoPushFieldValidation[];
}

export class GetCompaniesCompanyIdConnectionsConnectionIdPushPushOptionPushOptionChoicePushOptionChoicePushOptionChoicePushOptionChoice extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName: string;

  @SpeakeasyMetadata({ data: "json, name=rel" })
  rel?: string;

  @SpeakeasyMetadata({ data: "json, name=required" })
  required: boolean;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: GetCompaniesCompanyIdConnectionsConnectionIdPushPushOptionPushOptionChoicePushOptionChoicePushOptionChoicePushOptionChoiceOptionTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=validation" })
  validation?: GetCompaniesCompanyIdConnectionsConnectionIdPushPushOptionPushOptionChoicePushOptionChoicePushOptionChoicePushOptionChoicePushValidationInfo;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value: string;
}
export enum GetCompaniesCompanyIdConnectionsConnectionIdPushPushOptionPushOptionChoicePushOptionChoicePushOptionChoiceOptionTypeEnum {
    Array = "Array",
    Object = "Object",
    String = "String",
    Number = "Number",
    Boolean = "Boolean",
    DateTime = "DateTime",
    File = "File",
    MultiPart = "MultiPart"
}

export class GetCompaniesCompanyIdConnectionsConnectionIdPushPushOptionPushOptionChoicePushOptionChoicePushOptionChoicePushValidationInfoPushFieldValidation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=details" })
  details: string;

  @SpeakeasyMetadata({ data: "json, name=field" })
  field: string;

  @SpeakeasyMetadata({ data: "json, name=ref" })
  ref?: string;
}

export class GetCompaniesCompanyIdConnectionsConnectionIdPushPushOptionPushOptionChoicePushOptionChoicePushOptionChoicePushValidationInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=information", elemType: GetCompaniesCompanyIdConnectionsConnectionIdPushPushOptionPushOptionChoicePushOptionChoicePushOptionChoicePushValidationInfoPushFieldValidation })
  information?: GetCompaniesCompanyIdConnectionsConnectionIdPushPushOptionPushOptionChoicePushOptionChoicePushOptionChoicePushValidationInfoPushFieldValidation[];

  @SpeakeasyMetadata({ data: "json, name=warnings", elemType: GetCompaniesCompanyIdConnectionsConnectionIdPushPushOptionPushOptionChoicePushOptionChoicePushOptionChoicePushValidationInfoPushFieldValidation })
  warnings?: GetCompaniesCompanyIdConnectionsConnectionIdPushPushOptionPushOptionChoicePushOptionChoicePushOptionChoicePushValidationInfoPushFieldValidation[];
}

export class GetCompaniesCompanyIdConnectionsConnectionIdPushPushOptionPushOptionChoicePushOptionChoicePushOptionChoice extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName: string;

  @SpeakeasyMetadata({ data: "json, name=options", elemType: GetCompaniesCompanyIdConnectionsConnectionIdPushPushOptionPushOptionChoicePushOptionChoicePushOptionChoicePushOptionChoice })
  options?: GetCompaniesCompanyIdConnectionsConnectionIdPushPushOptionPushOptionChoicePushOptionChoicePushOptionChoicePushOptionChoice[];

  @SpeakeasyMetadata({ data: "json, name=rel" })
  rel?: string;

  @SpeakeasyMetadata({ data: "json, name=required" })
  required: boolean;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: GetCompaniesCompanyIdConnectionsConnectionIdPushPushOptionPushOptionChoicePushOptionChoicePushOptionChoiceOptionTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=validation" })
  validation?: GetCompaniesCompanyIdConnectionsConnectionIdPushPushOptionPushOptionChoicePushOptionChoicePushOptionChoicePushValidationInfo;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value: string;
}
export enum GetCompaniesCompanyIdConnectionsConnectionIdPushPushOptionPushOptionChoicePushOptionChoiceOptionTypeEnum {
    Array = "Array",
    Object = "Object",
    String = "String",
    Number = "Number",
    Boolean = "Boolean",
    DateTime = "DateTime",
    File = "File",
    MultiPart = "MultiPart"
}

export class GetCompaniesCompanyIdConnectionsConnectionIdPushPushOptionPushOptionChoicePushOptionChoicePushValidationInfoPushFieldValidation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=details" })
  details: string;

  @SpeakeasyMetadata({ data: "json, name=field" })
  field: string;

  @SpeakeasyMetadata({ data: "json, name=ref" })
  ref?: string;
}

export class GetCompaniesCompanyIdConnectionsConnectionIdPushPushOptionPushOptionChoicePushOptionChoicePushValidationInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=information", elemType: GetCompaniesCompanyIdConnectionsConnectionIdPushPushOptionPushOptionChoicePushOptionChoicePushValidationInfoPushFieldValidation })
  information?: GetCompaniesCompanyIdConnectionsConnectionIdPushPushOptionPushOptionChoicePushOptionChoicePushValidationInfoPushFieldValidation[];

  @SpeakeasyMetadata({ data: "json, name=warnings", elemType: GetCompaniesCompanyIdConnectionsConnectionIdPushPushOptionPushOptionChoicePushOptionChoicePushValidationInfoPushFieldValidation })
  warnings?: GetCompaniesCompanyIdConnectionsConnectionIdPushPushOptionPushOptionChoicePushOptionChoicePushValidationInfoPushFieldValidation[];
}

export class GetCompaniesCompanyIdConnectionsConnectionIdPushPushOptionPushOptionChoicePushOptionChoice extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName: string;

  @SpeakeasyMetadata({ data: "json, name=options", elemType: GetCompaniesCompanyIdConnectionsConnectionIdPushPushOptionPushOptionChoicePushOptionChoicePushOptionChoice })
  options?: GetCompaniesCompanyIdConnectionsConnectionIdPushPushOptionPushOptionChoicePushOptionChoicePushOptionChoice[];

  @SpeakeasyMetadata({ data: "json, name=rel" })
  rel?: string;

  @SpeakeasyMetadata({ data: "json, name=required" })
  required: boolean;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: GetCompaniesCompanyIdConnectionsConnectionIdPushPushOptionPushOptionChoicePushOptionChoiceOptionTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=validation" })
  validation?: GetCompaniesCompanyIdConnectionsConnectionIdPushPushOptionPushOptionChoicePushOptionChoicePushValidationInfo;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value: string;
}
export enum GetCompaniesCompanyIdConnectionsConnectionIdPushPushOptionPushOptionChoiceOptionTypeEnum {
    Array = "Array",
    Object = "Object",
    String = "String",
    Number = "Number",
    Boolean = "Boolean",
    DateTime = "DateTime",
    File = "File",
    MultiPart = "MultiPart"
}

export class GetCompaniesCompanyIdConnectionsConnectionIdPushPushOptionPushOptionChoicePushValidationInfoPushFieldValidation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=details" })
  details: string;

  @SpeakeasyMetadata({ data: "json, name=field" })
  field: string;

  @SpeakeasyMetadata({ data: "json, name=ref" })
  ref?: string;
}

export class GetCompaniesCompanyIdConnectionsConnectionIdPushPushOptionPushOptionChoicePushValidationInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=information", elemType: GetCompaniesCompanyIdConnectionsConnectionIdPushPushOptionPushOptionChoicePushValidationInfoPushFieldValidation })
  information?: GetCompaniesCompanyIdConnectionsConnectionIdPushPushOptionPushOptionChoicePushValidationInfoPushFieldValidation[];

  @SpeakeasyMetadata({ data: "json, name=warnings", elemType: GetCompaniesCompanyIdConnectionsConnectionIdPushPushOptionPushOptionChoicePushValidationInfoPushFieldValidation })
  warnings?: GetCompaniesCompanyIdConnectionsConnectionIdPushPushOptionPushOptionChoicePushValidationInfoPushFieldValidation[];
}

export class GetCompaniesCompanyIdConnectionsConnectionIdPushPushOptionPushOptionChoice extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName: string;

  @SpeakeasyMetadata({ data: "json, name=options", elemType: GetCompaniesCompanyIdConnectionsConnectionIdPushPushOptionPushOptionChoicePushOptionChoice })
  options?: GetCompaniesCompanyIdConnectionsConnectionIdPushPushOptionPushOptionChoicePushOptionChoice[];

  @SpeakeasyMetadata({ data: "json, name=rel" })
  rel?: string;

  @SpeakeasyMetadata({ data: "json, name=required" })
  required: boolean;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: GetCompaniesCompanyIdConnectionsConnectionIdPushPushOptionPushOptionChoiceOptionTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=validation" })
  validation?: GetCompaniesCompanyIdConnectionsConnectionIdPushPushOptionPushOptionChoicePushValidationInfo;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value: string;
}
export enum GetCompaniesCompanyIdConnectionsConnectionIdPushPushOptionOptionTypeEnum {
    Array = "Array",
    Object = "Object",
    String = "String",
    Number = "Number",
    Boolean = "Boolean",
    DateTime = "DateTime",
    File = "File",
    MultiPart = "MultiPart"
}

export class GetCompaniesCompanyIdConnectionsConnectionIdPushPushOptionPushValidationInfoPushFieldValidation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=details" })
  details: string;

  @SpeakeasyMetadata({ data: "json, name=field" })
  field: string;

  @SpeakeasyMetadata({ data: "json, name=ref" })
  ref?: string;
}

export class GetCompaniesCompanyIdConnectionsConnectionIdPushPushOptionPushValidationInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=information", elemType: GetCompaniesCompanyIdConnectionsConnectionIdPushPushOptionPushValidationInfoPushFieldValidation })
  information?: GetCompaniesCompanyIdConnectionsConnectionIdPushPushOptionPushValidationInfoPushFieldValidation[];

  @SpeakeasyMetadata({ data: "json, name=warnings", elemType: GetCompaniesCompanyIdConnectionsConnectionIdPushPushOptionPushValidationInfoPushFieldValidation })
  warnings?: GetCompaniesCompanyIdConnectionsConnectionIdPushPushOptionPushValidationInfoPushFieldValidation[];
}

export class GetCompaniesCompanyIdConnectionsConnectionIdPushPushOption extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName: string;

  @SpeakeasyMetadata({ data: "json, name=options", elemType: GetCompaniesCompanyIdConnectionsConnectionIdPushPushOptionPushOptionChoice })
  options?: GetCompaniesCompanyIdConnectionsConnectionIdPushPushOptionPushOptionChoice[];

  @SpeakeasyMetadata({ data: "json, name=rel" })
  rel?: string;

  @SpeakeasyMetadata({ data: "json, name=required" })
  required: boolean;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: GetCompaniesCompanyIdConnectionsConnectionIdPushPushOptionOptionTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=validation" })
  validation?: GetCompaniesCompanyIdConnectionsConnectionIdPushPushOptionPushValidationInfo;
}

export class GetCompaniesCompanyIdConnectionsConnectionIdPushResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  pushOption?: GetCompaniesCompanyIdConnectionsConnectionIdPushPushOption;

  @SpeakeasyMetadata()
  statusCode: number;
}