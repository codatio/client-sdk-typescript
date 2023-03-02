import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Transform, Type } from "class-transformer";


export class GetMappingOptionsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;
}

export class GetMappingOptionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetMappingOptionsPathParams;
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
  @SpeakeasyMetadata()
  @Expose({ name: "accountType" })
  accountType?: GetMappingOptions200ApplicationJSONAccountsAccountTypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "currency" })
  currency?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "validTransactionTypes" })
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
  @SpeakeasyMetadata()
  @Expose({ name: "code" })
  code?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "effectiveTaxRate" })
  effectiveTaxRate?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "totalTaxRate" })
  totalTaxRate?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "validTransactionTypes" })
  validTransactionTypes?: GetMappingOptions200ApplicationJSONTaxRatesValidTransactionTypesEnum[];
}

export class GetMappingOptions200ApplicationJSONTrackingCategories extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "hasChildren" })
  hasChildren?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "modifiedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  modifiedDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "parentId" })
  parentId?: string;
}

export class GetMappingOptions200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: GetMappingOptions200ApplicationJSONAccounts })
  @Expose({ name: "accounts" })
  @Type(() => GetMappingOptions200ApplicationJSONAccounts)
  accounts?: GetMappingOptions200ApplicationJSONAccounts[];

  @SpeakeasyMetadata()
  @Expose({ name: "expenseProvider" })
  expenseProvider?: string;

  @SpeakeasyMetadata({ elemType: GetMappingOptions200ApplicationJSONTaxRates })
  @Expose({ name: "taxRates" })
  @Type(() => GetMappingOptions200ApplicationJSONTaxRates)
  taxRates?: GetMappingOptions200ApplicationJSONTaxRates[];

  @SpeakeasyMetadata({ elemType: GetMappingOptions200ApplicationJSONTrackingCategories })
  @Expose({ name: "trackingCategories" })
  @Type(() => GetMappingOptions200ApplicationJSONTrackingCategories)
  trackingCategories?: GetMappingOptions200ApplicationJSONTrackingCategories[];
}

export class GetMappingOptionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getMappingOptions200ApplicationJSONObject?: GetMappingOptions200ApplicationJSON;
}