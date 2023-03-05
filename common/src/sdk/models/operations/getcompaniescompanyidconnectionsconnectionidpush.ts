import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

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

export class GetCompaniesCompanyIdConnectionsConnectionIdPushPushOptionPushOptionChoicePushOptionChoicePushOptionChoicePushOptionChoicePushValidationInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: GetCompaniesCompanyIdConnectionsConnectionIdPushPushOptionPushOptionChoicePushOptionChoicePushOptionChoicePushOptionChoicePushValidationInfoPushFieldValidation })
  @Expose({ name: "information" })
  @Type(() => GetCompaniesCompanyIdConnectionsConnectionIdPushPushOptionPushOptionChoicePushOptionChoicePushOptionChoicePushOptionChoicePushValidationInfoPushFieldValidation)
  information?: GetCompaniesCompanyIdConnectionsConnectionIdPushPushOptionPushOptionChoicePushOptionChoicePushOptionChoicePushOptionChoicePushValidationInfoPushFieldValidation[];

  @SpeakeasyMetadata({ elemType: GetCompaniesCompanyIdConnectionsConnectionIdPushPushOptionPushOptionChoicePushOptionChoicePushOptionChoicePushOptionChoicePushValidationInfoPushFieldValidation })
  @Expose({ name: "warnings" })
  @Type(() => GetCompaniesCompanyIdConnectionsConnectionIdPushPushOptionPushOptionChoicePushOptionChoicePushOptionChoicePushOptionChoicePushValidationInfoPushFieldValidation)
  warnings?: GetCompaniesCompanyIdConnectionsConnectionIdPushPushOptionPushOptionChoicePushOptionChoicePushOptionChoicePushOptionChoicePushValidationInfoPushFieldValidation[];
}

export class GetCompaniesCompanyIdConnectionsConnectionIdPushPushOptionPushOptionChoicePushOptionChoicePushOptionChoicePushOptionChoice extends SpeakeasyBase {
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
  type: GetCompaniesCompanyIdConnectionsConnectionIdPushPushOptionPushOptionChoicePushOptionChoicePushOptionChoicePushOptionChoiceOptionTypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "validation" })
  @Type(() => GetCompaniesCompanyIdConnectionsConnectionIdPushPushOptionPushOptionChoicePushOptionChoicePushOptionChoicePushOptionChoicePushValidationInfo)
  validation?: GetCompaniesCompanyIdConnectionsConnectionIdPushPushOptionPushOptionChoicePushOptionChoicePushOptionChoicePushOptionChoicePushValidationInfo;

  @SpeakeasyMetadata()
  @Expose({ name: "value" })
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

export class GetCompaniesCompanyIdConnectionsConnectionIdPushPushOptionPushOptionChoicePushOptionChoicePushOptionChoicePushValidationInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: GetCompaniesCompanyIdConnectionsConnectionIdPushPushOptionPushOptionChoicePushOptionChoicePushOptionChoicePushValidationInfoPushFieldValidation })
  @Expose({ name: "information" })
  @Type(() => GetCompaniesCompanyIdConnectionsConnectionIdPushPushOptionPushOptionChoicePushOptionChoicePushOptionChoicePushValidationInfoPushFieldValidation)
  information?: GetCompaniesCompanyIdConnectionsConnectionIdPushPushOptionPushOptionChoicePushOptionChoicePushOptionChoicePushValidationInfoPushFieldValidation[];

  @SpeakeasyMetadata({ elemType: GetCompaniesCompanyIdConnectionsConnectionIdPushPushOptionPushOptionChoicePushOptionChoicePushOptionChoicePushValidationInfoPushFieldValidation })
  @Expose({ name: "warnings" })
  @Type(() => GetCompaniesCompanyIdConnectionsConnectionIdPushPushOptionPushOptionChoicePushOptionChoicePushOptionChoicePushValidationInfoPushFieldValidation)
  warnings?: GetCompaniesCompanyIdConnectionsConnectionIdPushPushOptionPushOptionChoicePushOptionChoicePushOptionChoicePushValidationInfoPushFieldValidation[];
}

export class GetCompaniesCompanyIdConnectionsConnectionIdPushPushOptionPushOptionChoicePushOptionChoicePushOptionChoice extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description: string;

  @SpeakeasyMetadata()
  @Expose({ name: "displayName" })
  displayName: string;

  @SpeakeasyMetadata({ elemType: GetCompaniesCompanyIdConnectionsConnectionIdPushPushOptionPushOptionChoicePushOptionChoicePushOptionChoicePushOptionChoice })
  @Expose({ name: "options" })
  @Type(() => GetCompaniesCompanyIdConnectionsConnectionIdPushPushOptionPushOptionChoicePushOptionChoicePushOptionChoicePushOptionChoice)
  options?: GetCompaniesCompanyIdConnectionsConnectionIdPushPushOptionPushOptionChoicePushOptionChoicePushOptionChoicePushOptionChoice[];

  @SpeakeasyMetadata()
  @Expose({ name: "rel" })
  rel?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "required" })
  required: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: GetCompaniesCompanyIdConnectionsConnectionIdPushPushOptionPushOptionChoicePushOptionChoicePushOptionChoiceOptionTypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "validation" })
  @Type(() => GetCompaniesCompanyIdConnectionsConnectionIdPushPushOptionPushOptionChoicePushOptionChoicePushOptionChoicePushValidationInfo)
  validation?: GetCompaniesCompanyIdConnectionsConnectionIdPushPushOptionPushOptionChoicePushOptionChoicePushOptionChoicePushValidationInfo;

  @SpeakeasyMetadata()
  @Expose({ name: "value" })
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

export class GetCompaniesCompanyIdConnectionsConnectionIdPushPushOptionPushOptionChoicePushOptionChoicePushValidationInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: GetCompaniesCompanyIdConnectionsConnectionIdPushPushOptionPushOptionChoicePushOptionChoicePushValidationInfoPushFieldValidation })
  @Expose({ name: "information" })
  @Type(() => GetCompaniesCompanyIdConnectionsConnectionIdPushPushOptionPushOptionChoicePushOptionChoicePushValidationInfoPushFieldValidation)
  information?: GetCompaniesCompanyIdConnectionsConnectionIdPushPushOptionPushOptionChoicePushOptionChoicePushValidationInfoPushFieldValidation[];

  @SpeakeasyMetadata({ elemType: GetCompaniesCompanyIdConnectionsConnectionIdPushPushOptionPushOptionChoicePushOptionChoicePushValidationInfoPushFieldValidation })
  @Expose({ name: "warnings" })
  @Type(() => GetCompaniesCompanyIdConnectionsConnectionIdPushPushOptionPushOptionChoicePushOptionChoicePushValidationInfoPushFieldValidation)
  warnings?: GetCompaniesCompanyIdConnectionsConnectionIdPushPushOptionPushOptionChoicePushOptionChoicePushValidationInfoPushFieldValidation[];
}

export class GetCompaniesCompanyIdConnectionsConnectionIdPushPushOptionPushOptionChoicePushOptionChoice extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description: string;

  @SpeakeasyMetadata()
  @Expose({ name: "displayName" })
  displayName: string;

  @SpeakeasyMetadata({ elemType: GetCompaniesCompanyIdConnectionsConnectionIdPushPushOptionPushOptionChoicePushOptionChoicePushOptionChoice })
  @Expose({ name: "options" })
  @Type(() => GetCompaniesCompanyIdConnectionsConnectionIdPushPushOptionPushOptionChoicePushOptionChoicePushOptionChoice)
  options?: GetCompaniesCompanyIdConnectionsConnectionIdPushPushOptionPushOptionChoicePushOptionChoicePushOptionChoice[];

  @SpeakeasyMetadata()
  @Expose({ name: "rel" })
  rel?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "required" })
  required: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: GetCompaniesCompanyIdConnectionsConnectionIdPushPushOptionPushOptionChoicePushOptionChoiceOptionTypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "validation" })
  @Type(() => GetCompaniesCompanyIdConnectionsConnectionIdPushPushOptionPushOptionChoicePushOptionChoicePushValidationInfo)
  validation?: GetCompaniesCompanyIdConnectionsConnectionIdPushPushOptionPushOptionChoicePushOptionChoicePushValidationInfo;

  @SpeakeasyMetadata()
  @Expose({ name: "value" })
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

export class GetCompaniesCompanyIdConnectionsConnectionIdPushPushOptionPushOptionChoicePushValidationInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: GetCompaniesCompanyIdConnectionsConnectionIdPushPushOptionPushOptionChoicePushValidationInfoPushFieldValidation })
  @Expose({ name: "information" })
  @Type(() => GetCompaniesCompanyIdConnectionsConnectionIdPushPushOptionPushOptionChoicePushValidationInfoPushFieldValidation)
  information?: GetCompaniesCompanyIdConnectionsConnectionIdPushPushOptionPushOptionChoicePushValidationInfoPushFieldValidation[];

  @SpeakeasyMetadata({ elemType: GetCompaniesCompanyIdConnectionsConnectionIdPushPushOptionPushOptionChoicePushValidationInfoPushFieldValidation })
  @Expose({ name: "warnings" })
  @Type(() => GetCompaniesCompanyIdConnectionsConnectionIdPushPushOptionPushOptionChoicePushValidationInfoPushFieldValidation)
  warnings?: GetCompaniesCompanyIdConnectionsConnectionIdPushPushOptionPushOptionChoicePushValidationInfoPushFieldValidation[];
}

export class GetCompaniesCompanyIdConnectionsConnectionIdPushPushOptionPushOptionChoice extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description: string;

  @SpeakeasyMetadata()
  @Expose({ name: "displayName" })
  displayName: string;

  @SpeakeasyMetadata({ elemType: GetCompaniesCompanyIdConnectionsConnectionIdPushPushOptionPushOptionChoicePushOptionChoice })
  @Expose({ name: "options" })
  @Type(() => GetCompaniesCompanyIdConnectionsConnectionIdPushPushOptionPushOptionChoicePushOptionChoice)
  options?: GetCompaniesCompanyIdConnectionsConnectionIdPushPushOptionPushOptionChoicePushOptionChoice[];

  @SpeakeasyMetadata()
  @Expose({ name: "rel" })
  rel?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "required" })
  required: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: GetCompaniesCompanyIdConnectionsConnectionIdPushPushOptionPushOptionChoiceOptionTypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "validation" })
  @Type(() => GetCompaniesCompanyIdConnectionsConnectionIdPushPushOptionPushOptionChoicePushValidationInfo)
  validation?: GetCompaniesCompanyIdConnectionsConnectionIdPushPushOptionPushOptionChoicePushValidationInfo;

  @SpeakeasyMetadata()
  @Expose({ name: "value" })
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

export class GetCompaniesCompanyIdConnectionsConnectionIdPushPushOptionPushValidationInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: GetCompaniesCompanyIdConnectionsConnectionIdPushPushOptionPushValidationInfoPushFieldValidation })
  @Expose({ name: "information" })
  @Type(() => GetCompaniesCompanyIdConnectionsConnectionIdPushPushOptionPushValidationInfoPushFieldValidation)
  information?: GetCompaniesCompanyIdConnectionsConnectionIdPushPushOptionPushValidationInfoPushFieldValidation[];

  @SpeakeasyMetadata({ elemType: GetCompaniesCompanyIdConnectionsConnectionIdPushPushOptionPushValidationInfoPushFieldValidation })
  @Expose({ name: "warnings" })
  @Type(() => GetCompaniesCompanyIdConnectionsConnectionIdPushPushOptionPushValidationInfoPushFieldValidation)
  warnings?: GetCompaniesCompanyIdConnectionsConnectionIdPushPushOptionPushValidationInfoPushFieldValidation[];
}

export class GetCompaniesCompanyIdConnectionsConnectionIdPushPushOption extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description: string;

  @SpeakeasyMetadata()
  @Expose({ name: "displayName" })
  displayName: string;

  @SpeakeasyMetadata({ elemType: GetCompaniesCompanyIdConnectionsConnectionIdPushPushOptionPushOptionChoice })
  @Expose({ name: "options" })
  @Type(() => GetCompaniesCompanyIdConnectionsConnectionIdPushPushOptionPushOptionChoice)
  options?: GetCompaniesCompanyIdConnectionsConnectionIdPushPushOptionPushOptionChoice[];

  @SpeakeasyMetadata()
  @Expose({ name: "rel" })
  rel?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "required" })
  required: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: GetCompaniesCompanyIdConnectionsConnectionIdPushPushOptionOptionTypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "validation" })
  @Type(() => GetCompaniesCompanyIdConnectionsConnectionIdPushPushOptionPushValidationInfo)
  validation?: GetCompaniesCompanyIdConnectionsConnectionIdPushPushOptionPushValidationInfo;
}

export class GetCompaniesCompanyIdConnectionsConnectionIdPushResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  pushOption?: GetCompaniesCompanyIdConnectionsConnectionIdPushPushOption;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}