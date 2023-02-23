import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class GetSyncOptionsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;
}

export class GetSyncOptionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSyncOptionsPathParams;
}

export class GetSyncOptions200ApplicationJSONConfigurationFeesAccountsAccountOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=classification" })
  classification?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=nominalCode" })
  nominalCode?: string;
}

export class GetSyncOptions200ApplicationJSONConfigurationFeesAccounts extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountOptions", elemType: GetSyncOptions200ApplicationJSONConfigurationFeesAccountsAccountOptions })
  accountOptions?: GetSyncOptions200ApplicationJSONConfigurationFeesAccountsAccountOptions[];

  @SpeakeasyMetadata({ data: "json, name=descriptionText" })
  descriptionText?: string;

  @SpeakeasyMetadata({ data: "json, name=labelText" })
  labelText?: string;

  @SpeakeasyMetadata({ data: "json, name=required" })
  required?: boolean;

  @SpeakeasyMetadata({ data: "json, name=selectedAccountId" })
  selectedAccountId?: string;
}

export class GetSyncOptions200ApplicationJSONConfigurationFeesFeesSupplierSupplierOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}

export class GetSyncOptions200ApplicationJSONConfigurationFeesFeesSupplier extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=selectedSupplierId" })
  selectedSupplierId?: string;

  @SpeakeasyMetadata({ data: "json, name=supplierOptions", elemType: GetSyncOptions200ApplicationJSONConfigurationFeesFeesSupplierSupplierOptions })
  supplierOptions?: GetSyncOptions200ApplicationJSONConfigurationFeesFeesSupplierSupplierOptions[];
}

export class GetSyncOptions200ApplicationJSONConfigurationFees extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accounts", elemType: GetSyncOptions200ApplicationJSONConfigurationFeesAccounts })
  accounts?: Record<string, GetSyncOptions200ApplicationJSONConfigurationFeesAccounts>;

  @SpeakeasyMetadata({ data: "json, name=feesSupplier" })
  feesSupplier?: GetSyncOptions200ApplicationJSONConfigurationFeesFeesSupplier;

  @SpeakeasyMetadata({ data: "json, name=syncFees" })
  syncFees?: boolean;
}

export class GetSyncOptions200ApplicationJSONConfigurationNewPaymentsAccountsAccountOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=classification" })
  classification?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=nominalCode" })
  nominalCode?: string;
}

export class GetSyncOptions200ApplicationJSONConfigurationNewPaymentsAccounts extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountOptions", elemType: GetSyncOptions200ApplicationJSONConfigurationNewPaymentsAccountsAccountOptions })
  accountOptions?: GetSyncOptions200ApplicationJSONConfigurationNewPaymentsAccountsAccountOptions[];

  @SpeakeasyMetadata({ data: "json, name=descriptionText" })
  descriptionText?: string;

  @SpeakeasyMetadata({ data: "json, name=labelText" })
  labelText?: string;

  @SpeakeasyMetadata({ data: "json, name=required" })
  required?: boolean;

  @SpeakeasyMetadata({ data: "json, name=selectedAccountId" })
  selectedAccountId?: string;
}

export class GetSyncOptions200ApplicationJSONConfigurationNewPayments extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accounts", elemType: GetSyncOptions200ApplicationJSONConfigurationNewPaymentsAccounts })
  accounts?: Record<string, GetSyncOptions200ApplicationJSONConfigurationNewPaymentsAccounts>;

  @SpeakeasyMetadata({ data: "json, name=syncPayments" })
  syncPayments?: boolean;
}

export class GetSyncOptions200ApplicationJSONConfigurationPaymentsAccountsAccountOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=classification" })
  classification?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=nominalCode" })
  nominalCode?: string;
}

export class GetSyncOptions200ApplicationJSONConfigurationPaymentsAccounts extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountOptions", elemType: GetSyncOptions200ApplicationJSONConfigurationPaymentsAccountsAccountOptions })
  accountOptions?: GetSyncOptions200ApplicationJSONConfigurationPaymentsAccountsAccountOptions[];

  @SpeakeasyMetadata({ data: "json, name=descriptionText" })
  descriptionText?: string;

  @SpeakeasyMetadata({ data: "json, name=labelText" })
  labelText?: string;

  @SpeakeasyMetadata({ data: "json, name=required" })
  required?: boolean;

  @SpeakeasyMetadata({ data: "json, name=selectedAccountId" })
  selectedAccountId?: string;
}

export class GetSyncOptions200ApplicationJSONConfigurationPayments extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accounts", elemType: GetSyncOptions200ApplicationJSONConfigurationPaymentsAccounts })
  accounts?: Record<string, GetSyncOptions200ApplicationJSONConfigurationPaymentsAccounts>;

  @SpeakeasyMetadata({ data: "json, name=syncPayments" })
  syncPayments?: boolean;
}

export class GetSyncOptions200ApplicationJSONConfigurationSalesAccountsAccountOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=classification" })
  classification?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=nominalCode" })
  nominalCode?: string;
}

export class GetSyncOptions200ApplicationJSONConfigurationSalesAccounts extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountOptions", elemType: GetSyncOptions200ApplicationJSONConfigurationSalesAccountsAccountOptions })
  accountOptions?: GetSyncOptions200ApplicationJSONConfigurationSalesAccountsAccountOptions[];

  @SpeakeasyMetadata({ data: "json, name=descriptionText" })
  descriptionText?: string;

  @SpeakeasyMetadata({ data: "json, name=labelText" })
  labelText?: string;

  @SpeakeasyMetadata({ data: "json, name=required" })
  required?: boolean;

  @SpeakeasyMetadata({ data: "json, name=selectedAccountId" })
  selectedAccountId?: string;
}

export class GetSyncOptions200ApplicationJSONConfigurationSalesGroupingGroupingLevelsInvoiceLevel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=groupByOptions" })
  groupByOptions?: string[];

  @SpeakeasyMetadata({ data: "json, name=selectedGroupByOptions" })
  selectedGroupByOptions?: string[];
}

export class GetSyncOptions200ApplicationJSONConfigurationSalesGroupingGroupingLevelsInvoiceLineLevel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=groupByOptions" })
  groupByOptions?: string[];

  @SpeakeasyMetadata({ data: "json, name=selectedGroupByOptions" })
  selectedGroupByOptions?: string[];
}

export class GetSyncOptions200ApplicationJSONConfigurationSalesGroupingGroupingLevels extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=invoiceLevel" })
  invoiceLevel?: GetSyncOptions200ApplicationJSONConfigurationSalesGroupingGroupingLevelsInvoiceLevel;

  @SpeakeasyMetadata({ data: "json, name=invoiceLineLevel" })
  invoiceLineLevel?: GetSyncOptions200ApplicationJSONConfigurationSalesGroupingGroupingLevelsInvoiceLineLevel;
}

export class GetSyncOptions200ApplicationJSONConfigurationSalesGroupingGroupingPeriod extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=groupingPeriodOptions" })
  groupingPeriodOptions?: string[];

  @SpeakeasyMetadata({ data: "json, name=selectedGroupingPeriod" })
  selectedGroupingPeriod?: string;
}

export class GetSyncOptions200ApplicationJSONConfigurationSalesGrouping extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=groupingLevels" })
  groupingLevels?: GetSyncOptions200ApplicationJSONConfigurationSalesGroupingGroupingLevels;

  @SpeakeasyMetadata({ data: "json, name=groupingPeriod" })
  groupingPeriod?: GetSyncOptions200ApplicationJSONConfigurationSalesGroupingGroupingPeriod;
}

export class GetSyncOptions200ApplicationJSONConfigurationSalesInvoiceStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=invoiceStatusOptions" })
  invoiceStatusOptions?: string[];

  @SpeakeasyMetadata({ data: "json, name=selectedInvoiceStatus" })
  selectedInvoiceStatus?: string;
}

export class GetSyncOptions200ApplicationJSONConfigurationSalesNewTaxRatesAccountingTaxRateOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}

export class GetSyncOptions200ApplicationJSONConfigurationSalesNewTaxRatesCommerceTaxRateOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}

export class GetSyncOptions200ApplicationJSONConfigurationSalesNewTaxRatesDefaultZeroTaxRateOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}

export class GetSyncOptions200ApplicationJSONConfigurationSalesNewTaxRatesTaxRateMappings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=selectedAccountingTaxRateId" })
  selectedAccountingTaxRateId?: string;

  @SpeakeasyMetadata({ data: "json, name=selectedCommerceTaxRateIds" })
  selectedCommerceTaxRateIds?: string[];
}

export class GetSyncOptions200ApplicationJSONConfigurationSalesNewTaxRates extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountingTaxRateOptions", elemType: GetSyncOptions200ApplicationJSONConfigurationSalesNewTaxRatesAccountingTaxRateOptions })
  accountingTaxRateOptions?: GetSyncOptions200ApplicationJSONConfigurationSalesNewTaxRatesAccountingTaxRateOptions[];

  @SpeakeasyMetadata({ data: "json, name=commerceTaxRateOptions", elemType: GetSyncOptions200ApplicationJSONConfigurationSalesNewTaxRatesCommerceTaxRateOptions })
  commerceTaxRateOptions?: GetSyncOptions200ApplicationJSONConfigurationSalesNewTaxRatesCommerceTaxRateOptions[];

  @SpeakeasyMetadata({ data: "json, name=defaultZeroTaxRateOptions", elemType: GetSyncOptions200ApplicationJSONConfigurationSalesNewTaxRatesDefaultZeroTaxRateOptions })
  defaultZeroTaxRateOptions?: GetSyncOptions200ApplicationJSONConfigurationSalesNewTaxRatesDefaultZeroTaxRateOptions[];

  @SpeakeasyMetadata({ data: "json, name=selectedDefaultZeroTaxRateId" })
  selectedDefaultZeroTaxRateId?: string;

  @SpeakeasyMetadata({ data: "json, name=taxRateMappings", elemType: GetSyncOptions200ApplicationJSONConfigurationSalesNewTaxRatesTaxRateMappings })
  taxRateMappings?: GetSyncOptions200ApplicationJSONConfigurationSalesNewTaxRatesTaxRateMappings[];
}

export class GetSyncOptions200ApplicationJSONConfigurationSalesSalesCustomerCustomerOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}

export class GetSyncOptions200ApplicationJSONConfigurationSalesSalesCustomer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=customerOptions", elemType: GetSyncOptions200ApplicationJSONConfigurationSalesSalesCustomerCustomerOptions })
  customerOptions?: GetSyncOptions200ApplicationJSONConfigurationSalesSalesCustomerCustomerOptions[];

  @SpeakeasyMetadata({ data: "json, name=selectedCustomerId" })
  selectedCustomerId?: string;
}

export class GetSyncOptions200ApplicationJSONConfigurationSalesTaxRatesTaxRateOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}

export class GetSyncOptions200ApplicationJSONConfigurationSalesTaxRates extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=selectedTaxRateId" })
  selectedTaxRateId?: string;

  @SpeakeasyMetadata({ data: "json, name=taxRateOptions", elemType: GetSyncOptions200ApplicationJSONConfigurationSalesTaxRatesTaxRateOptions })
  taxRateOptions?: GetSyncOptions200ApplicationJSONConfigurationSalesTaxRatesTaxRateOptions[];
}

export class GetSyncOptions200ApplicationJSONConfigurationSales extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accounts", elemType: GetSyncOptions200ApplicationJSONConfigurationSalesAccounts })
  accounts?: Record<string, GetSyncOptions200ApplicationJSONConfigurationSalesAccounts>;

  @SpeakeasyMetadata({ data: "json, name=grouping" })
  grouping?: GetSyncOptions200ApplicationJSONConfigurationSalesGrouping;

  @SpeakeasyMetadata({ data: "json, name=invoiceStatus" })
  invoiceStatus?: GetSyncOptions200ApplicationJSONConfigurationSalesInvoiceStatus;

  @SpeakeasyMetadata({ data: "json, name=newTaxRates" })
  newTaxRates?: GetSyncOptions200ApplicationJSONConfigurationSalesNewTaxRates;

  @SpeakeasyMetadata({ data: "json, name=salesCustomer" })
  salesCustomer?: GetSyncOptions200ApplicationJSONConfigurationSalesSalesCustomer;

  @SpeakeasyMetadata({ data: "json, name=syncSales" })
  syncSales?: boolean;

  @SpeakeasyMetadata({ data: "json, name=taxRates", elemType: GetSyncOptions200ApplicationJSONConfigurationSalesTaxRates })
  taxRates?: Record<string, GetSyncOptions200ApplicationJSONConfigurationSalesTaxRates>;
}

export class GetSyncOptions200ApplicationJSONConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fees" })
  fees?: GetSyncOptions200ApplicationJSONConfigurationFees;

  @SpeakeasyMetadata({ data: "json, name=newPayments" })
  newPayments?: GetSyncOptions200ApplicationJSONConfigurationNewPayments;

  @SpeakeasyMetadata({ data: "json, name=payments" })
  payments?: GetSyncOptions200ApplicationJSONConfigurationPayments;

  @SpeakeasyMetadata({ data: "json, name=sales" })
  sales?: GetSyncOptions200ApplicationJSONConfigurationSales;
}

export class GetSyncOptions200ApplicationJSONSchedule extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=frequencyOptions" })
  frequencyOptions?: string[];

  @SpeakeasyMetadata({ data: "json, name=selectedFrequency" })
  selectedFrequency?: string;

  @SpeakeasyMetadata({ data: "json, name=startDate" })
  startDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=syncHourUtc" })
  syncHourUtc?: number;

  @SpeakeasyMetadata({ data: "json, name=timeZone" })
  timeZone?: string;
}

export class GetSyncOptions200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountingSoftwareCompanyName" })
  accountingSoftwareCompanyName?: string;

  @SpeakeasyMetadata({ data: "json, name=companyId" })
  companyId?: string;

  @SpeakeasyMetadata({ data: "json, name=configuration" })
  configuration?: GetSyncOptions200ApplicationJSONConfiguration;

  @SpeakeasyMetadata({ data: "json, name=configured" })
  configured?: boolean;

  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=schedule" })
  schedule?: GetSyncOptions200ApplicationJSONSchedule;
}

export class GetSyncOptionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getSyncOptions200ApplicationJSONObject?: GetSyncOptions200ApplicationJSON;
}