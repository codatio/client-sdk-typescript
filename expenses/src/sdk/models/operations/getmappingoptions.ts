import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class GetMappingOptionsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;
}

export class GetMappingOptionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetMappingOptionsPathParams;
}
export enum GetMappingOptions200TextJSONAccountsAccountTypeEnum {
    Asset = "Asset",
    Liability = "Liability",
    Income = "Income",
    Expense = "Expense",
    Equity = "Equity"
}
export enum GetMappingOptions200TextJSONAccountsValidTransactionTypesEnum {
    Payment = "Payment",
    Refund = "Refund",
    Reward = "Reward",
    Chargeback = "Chargeback",
    TransferIn = "TransferIn",
    TransferOut = "TransferOut",
    AdjustmentIn = "AdjustmentIn",
    AdjustmentOut = "AdjustmentOut"
}

export class GetMappingOptions200TextJSONAccounts extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountType" })
  accountType?: GetMappingOptions200TextJSONAccountsAccountTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=validTransactionTypes" })
  validTransactionTypes?: GetMappingOptions200TextJSONAccountsValidTransactionTypesEnum[];
}
export enum GetMappingOptions200TextJSONTaxRatesValidTransactionTypesEnum {
    Payment = "Payment",
    Refund = "Refund",
    Reward = "Reward",
    Chargeback = "Chargeback",
    TransferIn = "TransferIn",
    TransferOut = "TransferOut",
    AdjustmentIn = "AdjustmentIn",
    AdjustmentOut = "AdjustmentOut"
}

export class GetMappingOptions200TextJSONTaxRates extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=effectiveTaxRate" })
  effectiveTaxRate?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=totalTaxRate" })
  totalTaxRate?: number;

  @SpeakeasyMetadata({ data: "json, name=validTransactionTypes" })
  validTransactionTypes?: GetMappingOptions200TextJSONTaxRatesValidTransactionTypesEnum[];
}

export class GetMappingOptions200TextJSONTrackingCategories extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=hasChildren" })
  hasChildren?: boolean;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=modifiedDate" })
  modifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=parentId" })
  parentId?: string;
}

export class GetMappingOptions200TextJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accounts", elemType: GetMappingOptions200TextJSONAccounts })
  accounts?: GetMappingOptions200TextJSONAccounts[];

  @SpeakeasyMetadata({ data: "json, name=expenseProvider" })
  expenseProvider?: string;

  @SpeakeasyMetadata({ data: "json, name=taxRates", elemType: GetMappingOptions200TextJSONTaxRates })
  taxRates?: GetMappingOptions200TextJSONTaxRates[];

  @SpeakeasyMetadata({ data: "json, name=trackingCategories", elemType: GetMappingOptions200TextJSONTrackingCategories })
  trackingCategories?: GetMappingOptions200TextJSONTrackingCategories[];
}
export enum GetMappingOptions200ApplicationJSONAccountsAccountTypeEnum {
    Asset = "Asset",
    Liability = "Liability",
    Income = "Income",
    Expense = "Expense",
    Equity = "Equity"
}
export enum GetMappingOptions200ApplicationJSONAccountsValidTransactionTypesEnum {
    Payment = "Payment",
    Refund = "Refund",
    Reward = "Reward",
    Chargeback = "Chargeback",
    TransferIn = "TransferIn",
    TransferOut = "TransferOut",
    AdjustmentIn = "AdjustmentIn",
    AdjustmentOut = "AdjustmentOut"
}

export class GetMappingOptions200ApplicationJSONAccounts extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountType" })
  accountType?: GetMappingOptions200ApplicationJSONAccountsAccountTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=validTransactionTypes" })
  validTransactionTypes?: GetMappingOptions200ApplicationJSONAccountsValidTransactionTypesEnum[];
}
export enum GetMappingOptions200ApplicationJSONTaxRatesValidTransactionTypesEnum {
    Payment = "Payment",
    Refund = "Refund",
    Reward = "Reward",
    Chargeback = "Chargeback",
    TransferIn = "TransferIn",
    TransferOut = "TransferOut",
    AdjustmentIn = "AdjustmentIn",
    AdjustmentOut = "AdjustmentOut"
}

export class GetMappingOptions200ApplicationJSONTaxRates extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=effectiveTaxRate" })
  effectiveTaxRate?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=totalTaxRate" })
  totalTaxRate?: number;

  @SpeakeasyMetadata({ data: "json, name=validTransactionTypes" })
  validTransactionTypes?: GetMappingOptions200ApplicationJSONTaxRatesValidTransactionTypesEnum[];
}

export class GetMappingOptions200ApplicationJSONTrackingCategories extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=hasChildren" })
  hasChildren?: boolean;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=modifiedDate" })
  modifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=parentId" })
  parentId?: string;
}

export class GetMappingOptions200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accounts", elemType: GetMappingOptions200ApplicationJSONAccounts })
  accounts?: GetMappingOptions200ApplicationJSONAccounts[];

  @SpeakeasyMetadata({ data: "json, name=expenseProvider" })
  expenseProvider?: string;

  @SpeakeasyMetadata({ data: "json, name=taxRates", elemType: GetMappingOptions200ApplicationJSONTaxRates })
  taxRates?: GetMappingOptions200ApplicationJSONTaxRates[];

  @SpeakeasyMetadata({ data: "json, name=trackingCategories", elemType: GetMappingOptions200ApplicationJSONTrackingCategories })
  trackingCategories?: GetMappingOptions200ApplicationJSONTrackingCategories[];
}

export class GetMappingOptionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getMappingOptions200ApplicationJSONObject?: GetMappingOptions200ApplicationJSON;

  @SpeakeasyMetadata()
  getMappingOptions200TextJSONObject?: GetMappingOptions200TextJSON;

  @SpeakeasyMetadata()
  getMappingOptions200TextPlainObject?: string;
}