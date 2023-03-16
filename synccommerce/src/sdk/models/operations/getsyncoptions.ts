import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, plainToInstance, Transform, Type } from "class-transformer";

export class GetSyncOptionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=companyId",
  })
  companyId: string;
}

export class GetSyncOptions200ApplicationJSONConfigurationFeesAccountsAccountOptions extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "classification" })
  classification?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "nominalCode" })
  nominalCode?: string;
}

export class GetSyncOptions200ApplicationJSONConfigurationFeesAccounts extends SpeakeasyBase {
  @SpeakeasyMetadata({
    elemType:
      GetSyncOptions200ApplicationJSONConfigurationFeesAccountsAccountOptions,
  })
  @Expose({ name: "accountOptions" })
  @Type(
    () =>
      GetSyncOptions200ApplicationJSONConfigurationFeesAccountsAccountOptions
  )
  accountOptions?: GetSyncOptions200ApplicationJSONConfigurationFeesAccountsAccountOptions[];

  @SpeakeasyMetadata()
  @Expose({ name: "descriptionText" })
  descriptionText?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "labelText" })
  labelText?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "required" })
  required?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "selectedAccountId" })
  selectedAccountId?: string;
}

export class GetSyncOptions200ApplicationJSONConfigurationFeesFeesSupplierSupplierOptions extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

export class GetSyncOptions200ApplicationJSONConfigurationFeesFeesSupplier extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "selectedSupplierId" })
  selectedSupplierId?: string;

  @SpeakeasyMetadata({
    elemType:
      GetSyncOptions200ApplicationJSONConfigurationFeesFeesSupplierSupplierOptions,
  })
  @Expose({ name: "supplierOptions" })
  @Type(
    () =>
      GetSyncOptions200ApplicationJSONConfigurationFeesFeesSupplierSupplierOptions
  )
  supplierOptions?: GetSyncOptions200ApplicationJSONConfigurationFeesFeesSupplierSupplierOptions[];
}

export class GetSyncOptions200ApplicationJSONConfigurationFees extends SpeakeasyBase {
  @SpeakeasyMetadata({
    elemType: GetSyncOptions200ApplicationJSONConfigurationFeesAccounts,
  })
  @Expose({ name: "accounts" })
  @Transform(
    ({ value }) => {
      const obj: Record<
        string,
        GetSyncOptions200ApplicationJSONConfigurationFeesAccounts
      > = {};
      for (const key in value) {
        obj[key] = plainToInstance(
          GetSyncOptions200ApplicationJSONConfigurationFeesAccounts,
          value[
            key
          ] as GetSyncOptions200ApplicationJSONConfigurationFeesAccounts,
          { excludeExtraneousValues: true }
        );
      }
      return obj;
    },
    { toClassOnly: true }
  )
  accounts?: Record<
    string,
    GetSyncOptions200ApplicationJSONConfigurationFeesAccounts
  >;

  @SpeakeasyMetadata()
  @Expose({ name: "feesSupplier" })
  @Type(() => GetSyncOptions200ApplicationJSONConfigurationFeesFeesSupplier)
  feesSupplier?: GetSyncOptions200ApplicationJSONConfigurationFeesFeesSupplier;

  @SpeakeasyMetadata()
  @Expose({ name: "syncFees" })
  syncFees?: boolean;
}

export class GetSyncOptions200ApplicationJSONConfigurationNewPaymentsAccountsAccountOptions extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "classification" })
  classification?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "nominalCode" })
  nominalCode?: string;
}

export class GetSyncOptions200ApplicationJSONConfigurationNewPaymentsAccounts extends SpeakeasyBase {
  @SpeakeasyMetadata({
    elemType:
      GetSyncOptions200ApplicationJSONConfigurationNewPaymentsAccountsAccountOptions,
  })
  @Expose({ name: "accountOptions" })
  @Type(
    () =>
      GetSyncOptions200ApplicationJSONConfigurationNewPaymentsAccountsAccountOptions
  )
  accountOptions?: GetSyncOptions200ApplicationJSONConfigurationNewPaymentsAccountsAccountOptions[];

  @SpeakeasyMetadata()
  @Expose({ name: "descriptionText" })
  descriptionText?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "labelText" })
  labelText?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "required" })
  required?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "selectedAccountId" })
  selectedAccountId?: string;
}

export class GetSyncOptions200ApplicationJSONConfigurationNewPayments extends SpeakeasyBase {
  @SpeakeasyMetadata({
    elemType: GetSyncOptions200ApplicationJSONConfigurationNewPaymentsAccounts,
  })
  @Expose({ name: "accounts" })
  @Transform(
    ({ value }) => {
      const obj: Record<
        string,
        GetSyncOptions200ApplicationJSONConfigurationNewPaymentsAccounts
      > = {};
      for (const key in value) {
        obj[key] = plainToInstance(
          GetSyncOptions200ApplicationJSONConfigurationNewPaymentsAccounts,
          value[
            key
          ] as GetSyncOptions200ApplicationJSONConfigurationNewPaymentsAccounts,
          { excludeExtraneousValues: true }
        );
      }
      return obj;
    },
    { toClassOnly: true }
  )
  accounts?: Record<
    string,
    GetSyncOptions200ApplicationJSONConfigurationNewPaymentsAccounts
  >;

  @SpeakeasyMetadata()
  @Expose({ name: "syncPayments" })
  syncPayments?: boolean;
}

export class GetSyncOptions200ApplicationJSONConfigurationPaymentsAccountsAccountOptions extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "classification" })
  classification?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "nominalCode" })
  nominalCode?: string;
}

export class GetSyncOptions200ApplicationJSONConfigurationPaymentsAccounts extends SpeakeasyBase {
  @SpeakeasyMetadata({
    elemType:
      GetSyncOptions200ApplicationJSONConfigurationPaymentsAccountsAccountOptions,
  })
  @Expose({ name: "accountOptions" })
  @Type(
    () =>
      GetSyncOptions200ApplicationJSONConfigurationPaymentsAccountsAccountOptions
  )
  accountOptions?: GetSyncOptions200ApplicationJSONConfigurationPaymentsAccountsAccountOptions[];

  @SpeakeasyMetadata()
  @Expose({ name: "descriptionText" })
  descriptionText?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "labelText" })
  labelText?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "required" })
  required?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "selectedAccountId" })
  selectedAccountId?: string;
}

export class GetSyncOptions200ApplicationJSONConfigurationPayments extends SpeakeasyBase {
  @SpeakeasyMetadata({
    elemType: GetSyncOptions200ApplicationJSONConfigurationPaymentsAccounts,
  })
  @Expose({ name: "accounts" })
  @Transform(
    ({ value }) => {
      const obj: Record<
        string,
        GetSyncOptions200ApplicationJSONConfigurationPaymentsAccounts
      > = {};
      for (const key in value) {
        obj[key] = plainToInstance(
          GetSyncOptions200ApplicationJSONConfigurationPaymentsAccounts,
          value[
            key
          ] as GetSyncOptions200ApplicationJSONConfigurationPaymentsAccounts,
          { excludeExtraneousValues: true }
        );
      }
      return obj;
    },
    { toClassOnly: true }
  )
  accounts?: Record<
    string,
    GetSyncOptions200ApplicationJSONConfigurationPaymentsAccounts
  >;

  @SpeakeasyMetadata()
  @Expose({ name: "syncPayments" })
  syncPayments?: boolean;
}

export class GetSyncOptions200ApplicationJSONConfigurationSalesAccountsAccountOptions extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "classification" })
  classification?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "nominalCode" })
  nominalCode?: string;
}

export class GetSyncOptions200ApplicationJSONConfigurationSalesAccounts extends SpeakeasyBase {
  @SpeakeasyMetadata({
    elemType:
      GetSyncOptions200ApplicationJSONConfigurationSalesAccountsAccountOptions,
  })
  @Expose({ name: "accountOptions" })
  @Type(
    () =>
      GetSyncOptions200ApplicationJSONConfigurationSalesAccountsAccountOptions
  )
  accountOptions?: GetSyncOptions200ApplicationJSONConfigurationSalesAccountsAccountOptions[];

  @SpeakeasyMetadata()
  @Expose({ name: "descriptionText" })
  descriptionText?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "labelText" })
  labelText?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "required" })
  required?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "selectedAccountId" })
  selectedAccountId?: string;
}

export class GetSyncOptions200ApplicationJSONConfigurationSalesGroupingGroupingLevelsInvoiceLevel extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "groupByOptions" })
  groupByOptions?: string[];

  @SpeakeasyMetadata()
  @Expose({ name: "selectedGroupByOptions" })
  selectedGroupByOptions?: string[];
}

export class GetSyncOptions200ApplicationJSONConfigurationSalesGroupingGroupingLevelsInvoiceLineLevel extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "groupByOptions" })
  groupByOptions?: string[];

  @SpeakeasyMetadata()
  @Expose({ name: "selectedGroupByOptions" })
  selectedGroupByOptions?: string[];
}

export class GetSyncOptions200ApplicationJSONConfigurationSalesGroupingGroupingLevels extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "invoiceLevel" })
  @Type(
    () =>
      GetSyncOptions200ApplicationJSONConfigurationSalesGroupingGroupingLevelsInvoiceLevel
  )
  invoiceLevel?: GetSyncOptions200ApplicationJSONConfigurationSalesGroupingGroupingLevelsInvoiceLevel;

  @SpeakeasyMetadata()
  @Expose({ name: "invoiceLineLevel" })
  @Type(
    () =>
      GetSyncOptions200ApplicationJSONConfigurationSalesGroupingGroupingLevelsInvoiceLineLevel
  )
  invoiceLineLevel?: GetSyncOptions200ApplicationJSONConfigurationSalesGroupingGroupingLevelsInvoiceLineLevel;
}

export class GetSyncOptions200ApplicationJSONConfigurationSalesGroupingGroupingPeriod extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "groupingPeriodOptions" })
  groupingPeriodOptions?: string[];

  @SpeakeasyMetadata()
  @Expose({ name: "selectedGroupingPeriod" })
  selectedGroupingPeriod?: string;
}

export class GetSyncOptions200ApplicationJSONConfigurationSalesGrouping extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "groupingLevels" })
  @Type(
    () =>
      GetSyncOptions200ApplicationJSONConfigurationSalesGroupingGroupingLevels
  )
  groupingLevels?: GetSyncOptions200ApplicationJSONConfigurationSalesGroupingGroupingLevels;

  @SpeakeasyMetadata()
  @Expose({ name: "groupingPeriod" })
  @Type(
    () =>
      GetSyncOptions200ApplicationJSONConfigurationSalesGroupingGroupingPeriod
  )
  groupingPeriod?: GetSyncOptions200ApplicationJSONConfigurationSalesGroupingGroupingPeriod;
}

export class GetSyncOptions200ApplicationJSONConfigurationSalesInvoiceStatus extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "invoiceStatusOptions" })
  invoiceStatusOptions?: string[];

  @SpeakeasyMetadata()
  @Expose({ name: "selectedInvoiceStatus" })
  selectedInvoiceStatus?: string;
}

export class GetSyncOptions200ApplicationJSONConfigurationSalesNewTaxRatesAccountingTaxRateOptions extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

export class GetSyncOptions200ApplicationJSONConfigurationSalesNewTaxRatesCommerceTaxRateOptions extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

export class GetSyncOptions200ApplicationJSONConfigurationSalesNewTaxRatesDefaultZeroTaxRateOptions extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

export class GetSyncOptions200ApplicationJSONConfigurationSalesNewTaxRatesTaxRateMappings extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "selectedAccountingTaxRateId" })
  selectedAccountingTaxRateId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "selectedCommerceTaxRateIds" })
  selectedCommerceTaxRateIds?: string[];
}

export class GetSyncOptions200ApplicationJSONConfigurationSalesNewTaxRates extends SpeakeasyBase {
  @SpeakeasyMetadata({
    elemType:
      GetSyncOptions200ApplicationJSONConfigurationSalesNewTaxRatesAccountingTaxRateOptions,
  })
  @Expose({ name: "accountingTaxRateOptions" })
  @Type(
    () =>
      GetSyncOptions200ApplicationJSONConfigurationSalesNewTaxRatesAccountingTaxRateOptions
  )
  accountingTaxRateOptions?: GetSyncOptions200ApplicationJSONConfigurationSalesNewTaxRatesAccountingTaxRateOptions[];

  @SpeakeasyMetadata({
    elemType:
      GetSyncOptions200ApplicationJSONConfigurationSalesNewTaxRatesCommerceTaxRateOptions,
  })
  @Expose({ name: "commerceTaxRateOptions" })
  @Type(
    () =>
      GetSyncOptions200ApplicationJSONConfigurationSalesNewTaxRatesCommerceTaxRateOptions
  )
  commerceTaxRateOptions?: GetSyncOptions200ApplicationJSONConfigurationSalesNewTaxRatesCommerceTaxRateOptions[];

  @SpeakeasyMetadata({
    elemType:
      GetSyncOptions200ApplicationJSONConfigurationSalesNewTaxRatesDefaultZeroTaxRateOptions,
  })
  @Expose({ name: "defaultZeroTaxRateOptions" })
  @Type(
    () =>
      GetSyncOptions200ApplicationJSONConfigurationSalesNewTaxRatesDefaultZeroTaxRateOptions
  )
  defaultZeroTaxRateOptions?: GetSyncOptions200ApplicationJSONConfigurationSalesNewTaxRatesDefaultZeroTaxRateOptions[];

  @SpeakeasyMetadata()
  @Expose({ name: "selectedDefaultZeroTaxRateId" })
  selectedDefaultZeroTaxRateId?: string;

  @SpeakeasyMetadata({
    elemType:
      GetSyncOptions200ApplicationJSONConfigurationSalesNewTaxRatesTaxRateMappings,
  })
  @Expose({ name: "taxRateMappings" })
  @Type(
    () =>
      GetSyncOptions200ApplicationJSONConfigurationSalesNewTaxRatesTaxRateMappings
  )
  taxRateMappings?: GetSyncOptions200ApplicationJSONConfigurationSalesNewTaxRatesTaxRateMappings[];
}

export class GetSyncOptions200ApplicationJSONConfigurationSalesSalesCustomerCustomerOptions extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

export class GetSyncOptions200ApplicationJSONConfigurationSalesSalesCustomer extends SpeakeasyBase {
  @SpeakeasyMetadata({
    elemType:
      GetSyncOptions200ApplicationJSONConfigurationSalesSalesCustomerCustomerOptions,
  })
  @Expose({ name: "customerOptions" })
  @Type(
    () =>
      GetSyncOptions200ApplicationJSONConfigurationSalesSalesCustomerCustomerOptions
  )
  customerOptions?: GetSyncOptions200ApplicationJSONConfigurationSalesSalesCustomerCustomerOptions[];

  @SpeakeasyMetadata()
  @Expose({ name: "selectedCustomerId" })
  selectedCustomerId?: string;
}

export class GetSyncOptions200ApplicationJSONConfigurationSalesTaxRatesTaxRateOptions extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

export class GetSyncOptions200ApplicationJSONConfigurationSalesTaxRates extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "selectedTaxRateId" })
  selectedTaxRateId?: string;

  @SpeakeasyMetadata({
    elemType:
      GetSyncOptions200ApplicationJSONConfigurationSalesTaxRatesTaxRateOptions,
  })
  @Expose({ name: "taxRateOptions" })
  @Type(
    () =>
      GetSyncOptions200ApplicationJSONConfigurationSalesTaxRatesTaxRateOptions
  )
  taxRateOptions?: GetSyncOptions200ApplicationJSONConfigurationSalesTaxRatesTaxRateOptions[];
}

export class GetSyncOptions200ApplicationJSONConfigurationSales extends SpeakeasyBase {
  @SpeakeasyMetadata({
    elemType: GetSyncOptions200ApplicationJSONConfigurationSalesAccounts,
  })
  @Expose({ name: "accounts" })
  @Transform(
    ({ value }) => {
      const obj: Record<
        string,
        GetSyncOptions200ApplicationJSONConfigurationSalesAccounts
      > = {};
      for (const key in value) {
        obj[key] = plainToInstance(
          GetSyncOptions200ApplicationJSONConfigurationSalesAccounts,
          value[
            key
          ] as GetSyncOptions200ApplicationJSONConfigurationSalesAccounts,
          { excludeExtraneousValues: true }
        );
      }
      return obj;
    },
    { toClassOnly: true }
  )
  accounts?: Record<
    string,
    GetSyncOptions200ApplicationJSONConfigurationSalesAccounts
  >;

  @SpeakeasyMetadata()
  @Expose({ name: "grouping" })
  @Type(() => GetSyncOptions200ApplicationJSONConfigurationSalesGrouping)
  grouping?: GetSyncOptions200ApplicationJSONConfigurationSalesGrouping;

  @SpeakeasyMetadata()
  @Expose({ name: "invoiceStatus" })
  @Type(() => GetSyncOptions200ApplicationJSONConfigurationSalesInvoiceStatus)
  invoiceStatus?: GetSyncOptions200ApplicationJSONConfigurationSalesInvoiceStatus;

  @SpeakeasyMetadata()
  @Expose({ name: "newTaxRates" })
  @Type(() => GetSyncOptions200ApplicationJSONConfigurationSalesNewTaxRates)
  newTaxRates?: GetSyncOptions200ApplicationJSONConfigurationSalesNewTaxRates;

  @SpeakeasyMetadata()
  @Expose({ name: "salesCustomer" })
  @Type(() => GetSyncOptions200ApplicationJSONConfigurationSalesSalesCustomer)
  salesCustomer?: GetSyncOptions200ApplicationJSONConfigurationSalesSalesCustomer;

  @SpeakeasyMetadata()
  @Expose({ name: "syncSales" })
  syncSales?: boolean;

  @SpeakeasyMetadata({
    elemType: GetSyncOptions200ApplicationJSONConfigurationSalesTaxRates,
  })
  @Expose({ name: "taxRates" })
  @Transform(
    ({ value }) => {
      const obj: Record<
        string,
        GetSyncOptions200ApplicationJSONConfigurationSalesTaxRates
      > = {};
      for (const key in value) {
        obj[key] = plainToInstance(
          GetSyncOptions200ApplicationJSONConfigurationSalesTaxRates,
          value[
            key
          ] as GetSyncOptions200ApplicationJSONConfigurationSalesTaxRates,
          { excludeExtraneousValues: true }
        );
      }
      return obj;
    },
    { toClassOnly: true }
  )
  taxRates?: Record<
    string,
    GetSyncOptions200ApplicationJSONConfigurationSalesTaxRates
  >;
}

export class GetSyncOptions200ApplicationJSONConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "fees" })
  @Type(() => GetSyncOptions200ApplicationJSONConfigurationFees)
  fees?: GetSyncOptions200ApplicationJSONConfigurationFees;

  @SpeakeasyMetadata()
  @Expose({ name: "newPayments" })
  @Type(() => GetSyncOptions200ApplicationJSONConfigurationNewPayments)
  newPayments?: GetSyncOptions200ApplicationJSONConfigurationNewPayments;

  @SpeakeasyMetadata()
  @Expose({ name: "payments" })
  @Type(() => GetSyncOptions200ApplicationJSONConfigurationPayments)
  payments?: GetSyncOptions200ApplicationJSONConfigurationPayments;

  @SpeakeasyMetadata()
  @Expose({ name: "sales" })
  @Type(() => GetSyncOptions200ApplicationJSONConfigurationSales)
  sales?: GetSyncOptions200ApplicationJSONConfigurationSales;
}

export class GetSyncOptions200ApplicationJSONSchedule extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "frequencyOptions" })
  frequencyOptions?: string[];

  @SpeakeasyMetadata()
  @Expose({ name: "selectedFrequency" })
  selectedFrequency?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "startDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  startDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "syncHourUtc" })
  syncHourUtc?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "timeZone" })
  timeZone?: string;
}

export class GetSyncOptions200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "accountingSoftwareCompanyName" })
  accountingSoftwareCompanyName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "companyId" })
  companyId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "configuration" })
  @Type(() => GetSyncOptions200ApplicationJSONConfiguration)
  configuration?: GetSyncOptions200ApplicationJSONConfiguration;

  @SpeakeasyMetadata()
  @Expose({ name: "configured" })
  configured?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "schedule" })
  @Type(() => GetSyncOptions200ApplicationJSONSchedule)
  schedule?: GetSyncOptions200ApplicationJSONSchedule;
}

export class GetSyncOptionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  getSyncOptions200ApplicationJSONObject?: GetSyncOptions200ApplicationJSON;
}
