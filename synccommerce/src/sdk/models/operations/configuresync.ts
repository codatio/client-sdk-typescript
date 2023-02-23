import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class ConfigureSyncPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;
}

export class ConfigureSyncRequestBodyConfigurationFeesAccountsAccountOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=classification" })
  classification?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=nominalCode" })
  nominalCode?: string;
}

export class ConfigureSyncRequestBodyConfigurationFeesAccounts extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountOptions", elemType: ConfigureSyncRequestBodyConfigurationFeesAccountsAccountOptions })
  accountOptions?: ConfigureSyncRequestBodyConfigurationFeesAccountsAccountOptions[];

  @SpeakeasyMetadata({ data: "json, name=descriptionText" })
  descriptionText?: string;

  @SpeakeasyMetadata({ data: "json, name=labelText" })
  labelText?: string;

  @SpeakeasyMetadata({ data: "json, name=required" })
  required?: boolean;

  @SpeakeasyMetadata({ data: "json, name=selectedAccountId" })
  selectedAccountId?: string;
}

export class ConfigureSyncRequestBodyConfigurationFeesFeesSupplierSupplierOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}

export class ConfigureSyncRequestBodyConfigurationFeesFeesSupplier extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=selectedSupplierId" })
  selectedSupplierId?: string;

  @SpeakeasyMetadata({ data: "json, name=supplierOptions", elemType: ConfigureSyncRequestBodyConfigurationFeesFeesSupplierSupplierOptions })
  supplierOptions?: ConfigureSyncRequestBodyConfigurationFeesFeesSupplierSupplierOptions[];
}

export class ConfigureSyncRequestBodyConfigurationFees extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accounts", elemType: ConfigureSyncRequestBodyConfigurationFeesAccounts })
  accounts?: Record<string, ConfigureSyncRequestBodyConfigurationFeesAccounts>;

  @SpeakeasyMetadata({ data: "json, name=feesSupplier" })
  feesSupplier?: ConfigureSyncRequestBodyConfigurationFeesFeesSupplier;

  @SpeakeasyMetadata({ data: "json, name=syncFees" })
  syncFees?: boolean;
}

export class ConfigureSyncRequestBodyConfigurationNewPaymentsAccountsAccountOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=classification" })
  classification?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=nominalCode" })
  nominalCode?: string;
}

export class ConfigureSyncRequestBodyConfigurationNewPaymentsAccounts extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountOptions", elemType: ConfigureSyncRequestBodyConfigurationNewPaymentsAccountsAccountOptions })
  accountOptions?: ConfigureSyncRequestBodyConfigurationNewPaymentsAccountsAccountOptions[];

  @SpeakeasyMetadata({ data: "json, name=descriptionText" })
  descriptionText?: string;

  @SpeakeasyMetadata({ data: "json, name=labelText" })
  labelText?: string;

  @SpeakeasyMetadata({ data: "json, name=required" })
  required?: boolean;

  @SpeakeasyMetadata({ data: "json, name=selectedAccountId" })
  selectedAccountId?: string;
}

export class ConfigureSyncRequestBodyConfigurationNewPayments extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accounts", elemType: ConfigureSyncRequestBodyConfigurationNewPaymentsAccounts })
  accounts?: Record<string, ConfigureSyncRequestBodyConfigurationNewPaymentsAccounts>;

  @SpeakeasyMetadata({ data: "json, name=syncPayments" })
  syncPayments?: boolean;
}

export class ConfigureSyncRequestBodyConfigurationPaymentsAccountsAccountOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=classification" })
  classification?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=nominalCode" })
  nominalCode?: string;
}

export class ConfigureSyncRequestBodyConfigurationPaymentsAccounts extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountOptions", elemType: ConfigureSyncRequestBodyConfigurationPaymentsAccountsAccountOptions })
  accountOptions?: ConfigureSyncRequestBodyConfigurationPaymentsAccountsAccountOptions[];

  @SpeakeasyMetadata({ data: "json, name=descriptionText" })
  descriptionText?: string;

  @SpeakeasyMetadata({ data: "json, name=labelText" })
  labelText?: string;

  @SpeakeasyMetadata({ data: "json, name=required" })
  required?: boolean;

  @SpeakeasyMetadata({ data: "json, name=selectedAccountId" })
  selectedAccountId?: string;
}

export class ConfigureSyncRequestBodyConfigurationPayments extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accounts", elemType: ConfigureSyncRequestBodyConfigurationPaymentsAccounts })
  accounts?: Record<string, ConfigureSyncRequestBodyConfigurationPaymentsAccounts>;

  @SpeakeasyMetadata({ data: "json, name=syncPayments" })
  syncPayments?: boolean;
}

export class ConfigureSyncRequestBodyConfigurationSalesAccountsAccountOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=classification" })
  classification?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=nominalCode" })
  nominalCode?: string;
}

export class ConfigureSyncRequestBodyConfigurationSalesAccounts extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountOptions", elemType: ConfigureSyncRequestBodyConfigurationSalesAccountsAccountOptions })
  accountOptions?: ConfigureSyncRequestBodyConfigurationSalesAccountsAccountOptions[];

  @SpeakeasyMetadata({ data: "json, name=descriptionText" })
  descriptionText?: string;

  @SpeakeasyMetadata({ data: "json, name=labelText" })
  labelText?: string;

  @SpeakeasyMetadata({ data: "json, name=required" })
  required?: boolean;

  @SpeakeasyMetadata({ data: "json, name=selectedAccountId" })
  selectedAccountId?: string;
}

export class ConfigureSyncRequestBodyConfigurationSalesGroupingGroupingLevelsInvoiceLevel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=groupByOptions" })
  groupByOptions?: string[];

  @SpeakeasyMetadata({ data: "json, name=selectedGroupByOptions" })
  selectedGroupByOptions?: string[];
}

export class ConfigureSyncRequestBodyConfigurationSalesGroupingGroupingLevelsInvoiceLineLevel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=groupByOptions" })
  groupByOptions?: string[];

  @SpeakeasyMetadata({ data: "json, name=selectedGroupByOptions" })
  selectedGroupByOptions?: string[];
}

export class ConfigureSyncRequestBodyConfigurationSalesGroupingGroupingLevels extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=invoiceLevel" })
  invoiceLevel?: ConfigureSyncRequestBodyConfigurationSalesGroupingGroupingLevelsInvoiceLevel;

  @SpeakeasyMetadata({ data: "json, name=invoiceLineLevel" })
  invoiceLineLevel?: ConfigureSyncRequestBodyConfigurationSalesGroupingGroupingLevelsInvoiceLineLevel;
}

export class ConfigureSyncRequestBodyConfigurationSalesGroupingGroupingPeriod extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=groupingPeriodOptions" })
  groupingPeriodOptions?: string[];

  @SpeakeasyMetadata({ data: "json, name=selectedGroupingPeriod" })
  selectedGroupingPeriod?: string;
}

export class ConfigureSyncRequestBodyConfigurationSalesGrouping extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=groupingLevels" })
  groupingLevels?: ConfigureSyncRequestBodyConfigurationSalesGroupingGroupingLevels;

  @SpeakeasyMetadata({ data: "json, name=groupingPeriod" })
  groupingPeriod?: ConfigureSyncRequestBodyConfigurationSalesGroupingGroupingPeriod;
}

export class ConfigureSyncRequestBodyConfigurationSalesInvoiceStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=invoiceStatusOptions" })
  invoiceStatusOptions?: string[];

  @SpeakeasyMetadata({ data: "json, name=selectedInvoiceStatus" })
  selectedInvoiceStatus?: string;
}

export class ConfigureSyncRequestBodyConfigurationSalesNewTaxRatesAccountingTaxRateOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}

export class ConfigureSyncRequestBodyConfigurationSalesNewTaxRatesCommerceTaxRateOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}

export class ConfigureSyncRequestBodyConfigurationSalesNewTaxRatesDefaultZeroTaxRateOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}

export class ConfigureSyncRequestBodyConfigurationSalesNewTaxRatesTaxRateMappings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=selectedAccountingTaxRateId" })
  selectedAccountingTaxRateId?: string;

  @SpeakeasyMetadata({ data: "json, name=selectedCommerceTaxRateIds" })
  selectedCommerceTaxRateIds?: string[];
}

export class ConfigureSyncRequestBodyConfigurationSalesNewTaxRates extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountingTaxRateOptions", elemType: ConfigureSyncRequestBodyConfigurationSalesNewTaxRatesAccountingTaxRateOptions })
  accountingTaxRateOptions?: ConfigureSyncRequestBodyConfigurationSalesNewTaxRatesAccountingTaxRateOptions[];

  @SpeakeasyMetadata({ data: "json, name=commerceTaxRateOptions", elemType: ConfigureSyncRequestBodyConfigurationSalesNewTaxRatesCommerceTaxRateOptions })
  commerceTaxRateOptions?: ConfigureSyncRequestBodyConfigurationSalesNewTaxRatesCommerceTaxRateOptions[];

  @SpeakeasyMetadata({ data: "json, name=defaultZeroTaxRateOptions", elemType: ConfigureSyncRequestBodyConfigurationSalesNewTaxRatesDefaultZeroTaxRateOptions })
  defaultZeroTaxRateOptions?: ConfigureSyncRequestBodyConfigurationSalesNewTaxRatesDefaultZeroTaxRateOptions[];

  @SpeakeasyMetadata({ data: "json, name=selectedDefaultZeroTaxRateId" })
  selectedDefaultZeroTaxRateId?: string;

  @SpeakeasyMetadata({ data: "json, name=taxRateMappings", elemType: ConfigureSyncRequestBodyConfigurationSalesNewTaxRatesTaxRateMappings })
  taxRateMappings?: ConfigureSyncRequestBodyConfigurationSalesNewTaxRatesTaxRateMappings[];
}

export class ConfigureSyncRequestBodyConfigurationSalesSalesCustomerCustomerOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}

export class ConfigureSyncRequestBodyConfigurationSalesSalesCustomer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=customerOptions", elemType: ConfigureSyncRequestBodyConfigurationSalesSalesCustomerCustomerOptions })
  customerOptions?: ConfigureSyncRequestBodyConfigurationSalesSalesCustomerCustomerOptions[];

  @SpeakeasyMetadata({ data: "json, name=selectedCustomerId" })
  selectedCustomerId?: string;
}

export class ConfigureSyncRequestBodyConfigurationSalesTaxRatesTaxRateOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}

export class ConfigureSyncRequestBodyConfigurationSalesTaxRates extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=selectedTaxRateId" })
  selectedTaxRateId?: string;

  @SpeakeasyMetadata({ data: "json, name=taxRateOptions", elemType: ConfigureSyncRequestBodyConfigurationSalesTaxRatesTaxRateOptions })
  taxRateOptions?: ConfigureSyncRequestBodyConfigurationSalesTaxRatesTaxRateOptions[];
}

export class ConfigureSyncRequestBodyConfigurationSales extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accounts", elemType: ConfigureSyncRequestBodyConfigurationSalesAccounts })
  accounts?: Record<string, ConfigureSyncRequestBodyConfigurationSalesAccounts>;

  @SpeakeasyMetadata({ data: "json, name=grouping" })
  grouping?: ConfigureSyncRequestBodyConfigurationSalesGrouping;

  @SpeakeasyMetadata({ data: "json, name=invoiceStatus" })
  invoiceStatus?: ConfigureSyncRequestBodyConfigurationSalesInvoiceStatus;

  @SpeakeasyMetadata({ data: "json, name=newTaxRates" })
  newTaxRates?: ConfigureSyncRequestBodyConfigurationSalesNewTaxRates;

  @SpeakeasyMetadata({ data: "json, name=salesCustomer" })
  salesCustomer?: ConfigureSyncRequestBodyConfigurationSalesSalesCustomer;

  @SpeakeasyMetadata({ data: "json, name=syncSales" })
  syncSales?: boolean;

  @SpeakeasyMetadata({ data: "json, name=taxRates", elemType: ConfigureSyncRequestBodyConfigurationSalesTaxRates })
  taxRates?: Record<string, ConfigureSyncRequestBodyConfigurationSalesTaxRates>;
}

export class ConfigureSyncRequestBodyConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fees" })
  fees?: ConfigureSyncRequestBodyConfigurationFees;

  @SpeakeasyMetadata({ data: "json, name=newPayments" })
  newPayments?: ConfigureSyncRequestBodyConfigurationNewPayments;

  @SpeakeasyMetadata({ data: "json, name=payments" })
  payments?: ConfigureSyncRequestBodyConfigurationPayments;

  @SpeakeasyMetadata({ data: "json, name=sales" })
  sales?: ConfigureSyncRequestBodyConfigurationSales;
}

export class ConfigureSyncRequestBodySchedule extends SpeakeasyBase {
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

export class ConfigureSyncRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountingSoftwareCompanyName" })
  accountingSoftwareCompanyName?: string;

  @SpeakeasyMetadata({ data: "json, name=companyId" })
  companyId?: string;

  @SpeakeasyMetadata({ data: "json, name=configuration" })
  configuration?: ConfigureSyncRequestBodyConfiguration;

  @SpeakeasyMetadata({ data: "json, name=configured" })
  configured?: boolean;

  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=schedule" })
  schedule?: ConfigureSyncRequestBodySchedule;
}

export class ConfigureSyncRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ConfigureSyncPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: ConfigureSyncRequestBody;
}

export class ConfigureSync200ApplicationJSONConfigurationFeesAccountsAccountOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=classification" })
  classification?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=nominalCode" })
  nominalCode?: string;
}

export class ConfigureSync200ApplicationJSONConfigurationFeesAccounts extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountOptions", elemType: ConfigureSync200ApplicationJSONConfigurationFeesAccountsAccountOptions })
  accountOptions?: ConfigureSync200ApplicationJSONConfigurationFeesAccountsAccountOptions[];

  @SpeakeasyMetadata({ data: "json, name=descriptionText" })
  descriptionText?: string;

  @SpeakeasyMetadata({ data: "json, name=labelText" })
  labelText?: string;

  @SpeakeasyMetadata({ data: "json, name=required" })
  required?: boolean;

  @SpeakeasyMetadata({ data: "json, name=selectedAccountId" })
  selectedAccountId?: string;
}

export class ConfigureSync200ApplicationJSONConfigurationFeesFeesSupplierSupplierOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}

export class ConfigureSync200ApplicationJSONConfigurationFeesFeesSupplier extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=selectedSupplierId" })
  selectedSupplierId?: string;

  @SpeakeasyMetadata({ data: "json, name=supplierOptions", elemType: ConfigureSync200ApplicationJSONConfigurationFeesFeesSupplierSupplierOptions })
  supplierOptions?: ConfigureSync200ApplicationJSONConfigurationFeesFeesSupplierSupplierOptions[];
}

export class ConfigureSync200ApplicationJSONConfigurationFees extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accounts", elemType: ConfigureSync200ApplicationJSONConfigurationFeesAccounts })
  accounts?: Record<string, ConfigureSync200ApplicationJSONConfigurationFeesAccounts>;

  @SpeakeasyMetadata({ data: "json, name=feesSupplier" })
  feesSupplier?: ConfigureSync200ApplicationJSONConfigurationFeesFeesSupplier;

  @SpeakeasyMetadata({ data: "json, name=syncFees" })
  syncFees?: boolean;
}

export class ConfigureSync200ApplicationJSONConfigurationNewPaymentsAccountsAccountOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=classification" })
  classification?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=nominalCode" })
  nominalCode?: string;
}

export class ConfigureSync200ApplicationJSONConfigurationNewPaymentsAccounts extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountOptions", elemType: ConfigureSync200ApplicationJSONConfigurationNewPaymentsAccountsAccountOptions })
  accountOptions?: ConfigureSync200ApplicationJSONConfigurationNewPaymentsAccountsAccountOptions[];

  @SpeakeasyMetadata({ data: "json, name=descriptionText" })
  descriptionText?: string;

  @SpeakeasyMetadata({ data: "json, name=labelText" })
  labelText?: string;

  @SpeakeasyMetadata({ data: "json, name=required" })
  required?: boolean;

  @SpeakeasyMetadata({ data: "json, name=selectedAccountId" })
  selectedAccountId?: string;
}

export class ConfigureSync200ApplicationJSONConfigurationNewPayments extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accounts", elemType: ConfigureSync200ApplicationJSONConfigurationNewPaymentsAccounts })
  accounts?: Record<string, ConfigureSync200ApplicationJSONConfigurationNewPaymentsAccounts>;

  @SpeakeasyMetadata({ data: "json, name=syncPayments" })
  syncPayments?: boolean;
}

export class ConfigureSync200ApplicationJSONConfigurationPaymentsAccountsAccountOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=classification" })
  classification?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=nominalCode" })
  nominalCode?: string;
}

export class ConfigureSync200ApplicationJSONConfigurationPaymentsAccounts extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountOptions", elemType: ConfigureSync200ApplicationJSONConfigurationPaymentsAccountsAccountOptions })
  accountOptions?: ConfigureSync200ApplicationJSONConfigurationPaymentsAccountsAccountOptions[];

  @SpeakeasyMetadata({ data: "json, name=descriptionText" })
  descriptionText?: string;

  @SpeakeasyMetadata({ data: "json, name=labelText" })
  labelText?: string;

  @SpeakeasyMetadata({ data: "json, name=required" })
  required?: boolean;

  @SpeakeasyMetadata({ data: "json, name=selectedAccountId" })
  selectedAccountId?: string;
}

export class ConfigureSync200ApplicationJSONConfigurationPayments extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accounts", elemType: ConfigureSync200ApplicationJSONConfigurationPaymentsAccounts })
  accounts?: Record<string, ConfigureSync200ApplicationJSONConfigurationPaymentsAccounts>;

  @SpeakeasyMetadata({ data: "json, name=syncPayments" })
  syncPayments?: boolean;
}

export class ConfigureSync200ApplicationJSONConfigurationSalesAccountsAccountOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=classification" })
  classification?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=nominalCode" })
  nominalCode?: string;
}

export class ConfigureSync200ApplicationJSONConfigurationSalesAccounts extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountOptions", elemType: ConfigureSync200ApplicationJSONConfigurationSalesAccountsAccountOptions })
  accountOptions?: ConfigureSync200ApplicationJSONConfigurationSalesAccountsAccountOptions[];

  @SpeakeasyMetadata({ data: "json, name=descriptionText" })
  descriptionText?: string;

  @SpeakeasyMetadata({ data: "json, name=labelText" })
  labelText?: string;

  @SpeakeasyMetadata({ data: "json, name=required" })
  required?: boolean;

  @SpeakeasyMetadata({ data: "json, name=selectedAccountId" })
  selectedAccountId?: string;
}

export class ConfigureSync200ApplicationJSONConfigurationSalesGroupingGroupingLevelsInvoiceLevel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=groupByOptions" })
  groupByOptions?: string[];

  @SpeakeasyMetadata({ data: "json, name=selectedGroupByOptions" })
  selectedGroupByOptions?: string[];
}

export class ConfigureSync200ApplicationJSONConfigurationSalesGroupingGroupingLevelsInvoiceLineLevel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=groupByOptions" })
  groupByOptions?: string[];

  @SpeakeasyMetadata({ data: "json, name=selectedGroupByOptions" })
  selectedGroupByOptions?: string[];
}

export class ConfigureSync200ApplicationJSONConfigurationSalesGroupingGroupingLevels extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=invoiceLevel" })
  invoiceLevel?: ConfigureSync200ApplicationJSONConfigurationSalesGroupingGroupingLevelsInvoiceLevel;

  @SpeakeasyMetadata({ data: "json, name=invoiceLineLevel" })
  invoiceLineLevel?: ConfigureSync200ApplicationJSONConfigurationSalesGroupingGroupingLevelsInvoiceLineLevel;
}

export class ConfigureSync200ApplicationJSONConfigurationSalesGroupingGroupingPeriod extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=groupingPeriodOptions" })
  groupingPeriodOptions?: string[];

  @SpeakeasyMetadata({ data: "json, name=selectedGroupingPeriod" })
  selectedGroupingPeriod?: string;
}

export class ConfigureSync200ApplicationJSONConfigurationSalesGrouping extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=groupingLevels" })
  groupingLevels?: ConfigureSync200ApplicationJSONConfigurationSalesGroupingGroupingLevels;

  @SpeakeasyMetadata({ data: "json, name=groupingPeriod" })
  groupingPeriod?: ConfigureSync200ApplicationJSONConfigurationSalesGroupingGroupingPeriod;
}

export class ConfigureSync200ApplicationJSONConfigurationSalesInvoiceStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=invoiceStatusOptions" })
  invoiceStatusOptions?: string[];

  @SpeakeasyMetadata({ data: "json, name=selectedInvoiceStatus" })
  selectedInvoiceStatus?: string;
}

export class ConfigureSync200ApplicationJSONConfigurationSalesNewTaxRatesAccountingTaxRateOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}

export class ConfigureSync200ApplicationJSONConfigurationSalesNewTaxRatesCommerceTaxRateOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}

export class ConfigureSync200ApplicationJSONConfigurationSalesNewTaxRatesDefaultZeroTaxRateOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}

export class ConfigureSync200ApplicationJSONConfigurationSalesNewTaxRatesTaxRateMappings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=selectedAccountingTaxRateId" })
  selectedAccountingTaxRateId?: string;

  @SpeakeasyMetadata({ data: "json, name=selectedCommerceTaxRateIds" })
  selectedCommerceTaxRateIds?: string[];
}

export class ConfigureSync200ApplicationJSONConfigurationSalesNewTaxRates extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountingTaxRateOptions", elemType: ConfigureSync200ApplicationJSONConfigurationSalesNewTaxRatesAccountingTaxRateOptions })
  accountingTaxRateOptions?: ConfigureSync200ApplicationJSONConfigurationSalesNewTaxRatesAccountingTaxRateOptions[];

  @SpeakeasyMetadata({ data: "json, name=commerceTaxRateOptions", elemType: ConfigureSync200ApplicationJSONConfigurationSalesNewTaxRatesCommerceTaxRateOptions })
  commerceTaxRateOptions?: ConfigureSync200ApplicationJSONConfigurationSalesNewTaxRatesCommerceTaxRateOptions[];

  @SpeakeasyMetadata({ data: "json, name=defaultZeroTaxRateOptions", elemType: ConfigureSync200ApplicationJSONConfigurationSalesNewTaxRatesDefaultZeroTaxRateOptions })
  defaultZeroTaxRateOptions?: ConfigureSync200ApplicationJSONConfigurationSalesNewTaxRatesDefaultZeroTaxRateOptions[];

  @SpeakeasyMetadata({ data: "json, name=selectedDefaultZeroTaxRateId" })
  selectedDefaultZeroTaxRateId?: string;

  @SpeakeasyMetadata({ data: "json, name=taxRateMappings", elemType: ConfigureSync200ApplicationJSONConfigurationSalesNewTaxRatesTaxRateMappings })
  taxRateMappings?: ConfigureSync200ApplicationJSONConfigurationSalesNewTaxRatesTaxRateMappings[];
}

export class ConfigureSync200ApplicationJSONConfigurationSalesSalesCustomerCustomerOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}

export class ConfigureSync200ApplicationJSONConfigurationSalesSalesCustomer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=customerOptions", elemType: ConfigureSync200ApplicationJSONConfigurationSalesSalesCustomerCustomerOptions })
  customerOptions?: ConfigureSync200ApplicationJSONConfigurationSalesSalesCustomerCustomerOptions[];

  @SpeakeasyMetadata({ data: "json, name=selectedCustomerId" })
  selectedCustomerId?: string;
}

export class ConfigureSync200ApplicationJSONConfigurationSalesTaxRatesTaxRateOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}

export class ConfigureSync200ApplicationJSONConfigurationSalesTaxRates extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=selectedTaxRateId" })
  selectedTaxRateId?: string;

  @SpeakeasyMetadata({ data: "json, name=taxRateOptions", elemType: ConfigureSync200ApplicationJSONConfigurationSalesTaxRatesTaxRateOptions })
  taxRateOptions?: ConfigureSync200ApplicationJSONConfigurationSalesTaxRatesTaxRateOptions[];
}

export class ConfigureSync200ApplicationJSONConfigurationSales extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accounts", elemType: ConfigureSync200ApplicationJSONConfigurationSalesAccounts })
  accounts?: Record<string, ConfigureSync200ApplicationJSONConfigurationSalesAccounts>;

  @SpeakeasyMetadata({ data: "json, name=grouping" })
  grouping?: ConfigureSync200ApplicationJSONConfigurationSalesGrouping;

  @SpeakeasyMetadata({ data: "json, name=invoiceStatus" })
  invoiceStatus?: ConfigureSync200ApplicationJSONConfigurationSalesInvoiceStatus;

  @SpeakeasyMetadata({ data: "json, name=newTaxRates" })
  newTaxRates?: ConfigureSync200ApplicationJSONConfigurationSalesNewTaxRates;

  @SpeakeasyMetadata({ data: "json, name=salesCustomer" })
  salesCustomer?: ConfigureSync200ApplicationJSONConfigurationSalesSalesCustomer;

  @SpeakeasyMetadata({ data: "json, name=syncSales" })
  syncSales?: boolean;

  @SpeakeasyMetadata({ data: "json, name=taxRates", elemType: ConfigureSync200ApplicationJSONConfigurationSalesTaxRates })
  taxRates?: Record<string, ConfigureSync200ApplicationJSONConfigurationSalesTaxRates>;
}

export class ConfigureSync200ApplicationJSONConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fees" })
  fees?: ConfigureSync200ApplicationJSONConfigurationFees;

  @SpeakeasyMetadata({ data: "json, name=newPayments" })
  newPayments?: ConfigureSync200ApplicationJSONConfigurationNewPayments;

  @SpeakeasyMetadata({ data: "json, name=payments" })
  payments?: ConfigureSync200ApplicationJSONConfigurationPayments;

  @SpeakeasyMetadata({ data: "json, name=sales" })
  sales?: ConfigureSync200ApplicationJSONConfigurationSales;
}

export class ConfigureSync200ApplicationJSONSchedule extends SpeakeasyBase {
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

export class ConfigureSync200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountingSoftwareCompanyName" })
  accountingSoftwareCompanyName?: string;

  @SpeakeasyMetadata({ data: "json, name=companyId" })
  companyId?: string;

  @SpeakeasyMetadata({ data: "json, name=configuration" })
  configuration?: ConfigureSync200ApplicationJSONConfiguration;

  @SpeakeasyMetadata({ data: "json, name=configured" })
  configured?: boolean;

  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=schedule" })
  schedule?: ConfigureSync200ApplicationJSONSchedule;
}

export class ConfigureSyncResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  configureSync200ApplicationJSONObject?: ConfigureSync200ApplicationJSON;
}