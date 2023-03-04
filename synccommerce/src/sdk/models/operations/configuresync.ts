import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, plainToInstance, Transform, Type } from "class-transformer";


export class ConfigureSyncPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;
}

export class ConfigureSyncRequestBodyConfigurationFeesAccountsAccountOptions extends SpeakeasyBase {
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

export class ConfigureSyncRequestBodyConfigurationFeesAccounts extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: ConfigureSyncRequestBodyConfigurationFeesAccountsAccountOptions })
  @Expose({ name: "accountOptions" })
  @Type(() => ConfigureSyncRequestBodyConfigurationFeesAccountsAccountOptions)
  accountOptions?: ConfigureSyncRequestBodyConfigurationFeesAccountsAccountOptions[];

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

export class ConfigureSyncRequestBodyConfigurationFeesFeesSupplierSupplierOptions extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

export class ConfigureSyncRequestBodyConfigurationFeesFeesSupplier extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "selectedSupplierId" })
  selectedSupplierId?: string;

  @SpeakeasyMetadata({ elemType: ConfigureSyncRequestBodyConfigurationFeesFeesSupplierSupplierOptions })
  @Expose({ name: "supplierOptions" })
  @Type(() => ConfigureSyncRequestBodyConfigurationFeesFeesSupplierSupplierOptions)
  supplierOptions?: ConfigureSyncRequestBodyConfigurationFeesFeesSupplierSupplierOptions[];
}

export class ConfigureSyncRequestBodyConfigurationFees extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: ConfigureSyncRequestBodyConfigurationFeesAccounts })
  @Expose({ name: "accounts" })
  @Transform(({ value }) => {
    const obj: Record<string, ConfigureSyncRequestBodyConfigurationFeesAccounts> = {};
    for (const key in value) {
      obj[key] = plainToInstance(ConfigureSyncRequestBodyConfigurationFeesAccounts,
        value[key] as ConfigureSyncRequestBodyConfigurationFeesAccounts,
        { excludeExtraneousValues: true }
      );
    }
    return obj;
  }, { toClassOnly: true })
  accounts?: Record<string, ConfigureSyncRequestBodyConfigurationFeesAccounts>;

  @SpeakeasyMetadata()
  @Expose({ name: "feesSupplier" })
  @Type(() => ConfigureSyncRequestBodyConfigurationFeesFeesSupplier)
  feesSupplier?: ConfigureSyncRequestBodyConfigurationFeesFeesSupplier;

  @SpeakeasyMetadata()
  @Expose({ name: "syncFees" })
  syncFees?: boolean;
}

export class ConfigureSyncRequestBodyConfigurationNewPaymentsAccountsAccountOptions extends SpeakeasyBase {
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

export class ConfigureSyncRequestBodyConfigurationNewPaymentsAccounts extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: ConfigureSyncRequestBodyConfigurationNewPaymentsAccountsAccountOptions })
  @Expose({ name: "accountOptions" })
  @Type(() => ConfigureSyncRequestBodyConfigurationNewPaymentsAccountsAccountOptions)
  accountOptions?: ConfigureSyncRequestBodyConfigurationNewPaymentsAccountsAccountOptions[];

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

export class ConfigureSyncRequestBodyConfigurationNewPayments extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: ConfigureSyncRequestBodyConfigurationNewPaymentsAccounts })
  @Expose({ name: "accounts" })
  @Transform(({ value }) => {
    const obj: Record<string, ConfigureSyncRequestBodyConfigurationNewPaymentsAccounts> = {};
    for (const key in value) {
      obj[key] = plainToInstance(ConfigureSyncRequestBodyConfigurationNewPaymentsAccounts,
        value[key] as ConfigureSyncRequestBodyConfigurationNewPaymentsAccounts,
        { excludeExtraneousValues: true }
      );
    }
    return obj;
  }, { toClassOnly: true })
  accounts?: Record<string, ConfigureSyncRequestBodyConfigurationNewPaymentsAccounts>;

  @SpeakeasyMetadata()
  @Expose({ name: "syncPayments" })
  syncPayments?: boolean;
}

export class ConfigureSyncRequestBodyConfigurationPaymentsAccountsAccountOptions extends SpeakeasyBase {
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

export class ConfigureSyncRequestBodyConfigurationPaymentsAccounts extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: ConfigureSyncRequestBodyConfigurationPaymentsAccountsAccountOptions })
  @Expose({ name: "accountOptions" })
  @Type(() => ConfigureSyncRequestBodyConfigurationPaymentsAccountsAccountOptions)
  accountOptions?: ConfigureSyncRequestBodyConfigurationPaymentsAccountsAccountOptions[];

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

export class ConfigureSyncRequestBodyConfigurationPayments extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: ConfigureSyncRequestBodyConfigurationPaymentsAccounts })
  @Expose({ name: "accounts" })
  @Transform(({ value }) => {
    const obj: Record<string, ConfigureSyncRequestBodyConfigurationPaymentsAccounts> = {};
    for (const key in value) {
      obj[key] = plainToInstance(ConfigureSyncRequestBodyConfigurationPaymentsAccounts,
        value[key] as ConfigureSyncRequestBodyConfigurationPaymentsAccounts,
        { excludeExtraneousValues: true }
      );
    }
    return obj;
  }, { toClassOnly: true })
  accounts?: Record<string, ConfigureSyncRequestBodyConfigurationPaymentsAccounts>;

  @SpeakeasyMetadata()
  @Expose({ name: "syncPayments" })
  syncPayments?: boolean;
}

export class ConfigureSyncRequestBodyConfigurationSalesAccountsAccountOptions extends SpeakeasyBase {
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

export class ConfigureSyncRequestBodyConfigurationSalesAccounts extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: ConfigureSyncRequestBodyConfigurationSalesAccountsAccountOptions })
  @Expose({ name: "accountOptions" })
  @Type(() => ConfigureSyncRequestBodyConfigurationSalesAccountsAccountOptions)
  accountOptions?: ConfigureSyncRequestBodyConfigurationSalesAccountsAccountOptions[];

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

export class ConfigureSyncRequestBodyConfigurationSalesGroupingGroupingLevelsInvoiceLevel extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "groupByOptions" })
  groupByOptions?: string[];

  @SpeakeasyMetadata()
  @Expose({ name: "selectedGroupByOptions" })
  selectedGroupByOptions?: string[];
}

export class ConfigureSyncRequestBodyConfigurationSalesGroupingGroupingLevelsInvoiceLineLevel extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "groupByOptions" })
  groupByOptions?: string[];

  @SpeakeasyMetadata()
  @Expose({ name: "selectedGroupByOptions" })
  selectedGroupByOptions?: string[];
}

export class ConfigureSyncRequestBodyConfigurationSalesGroupingGroupingLevels extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "invoiceLevel" })
  @Type(() => ConfigureSyncRequestBodyConfigurationSalesGroupingGroupingLevelsInvoiceLevel)
  invoiceLevel?: ConfigureSyncRequestBodyConfigurationSalesGroupingGroupingLevelsInvoiceLevel;

  @SpeakeasyMetadata()
  @Expose({ name: "invoiceLineLevel" })
  @Type(() => ConfigureSyncRequestBodyConfigurationSalesGroupingGroupingLevelsInvoiceLineLevel)
  invoiceLineLevel?: ConfigureSyncRequestBodyConfigurationSalesGroupingGroupingLevelsInvoiceLineLevel;
}

export class ConfigureSyncRequestBodyConfigurationSalesGroupingGroupingPeriod extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "groupingPeriodOptions" })
  groupingPeriodOptions?: string[];

  @SpeakeasyMetadata()
  @Expose({ name: "selectedGroupingPeriod" })
  selectedGroupingPeriod?: string;
}

export class ConfigureSyncRequestBodyConfigurationSalesGrouping extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "groupingLevels" })
  @Type(() => ConfigureSyncRequestBodyConfigurationSalesGroupingGroupingLevels)
  groupingLevels?: ConfigureSyncRequestBodyConfigurationSalesGroupingGroupingLevels;

  @SpeakeasyMetadata()
  @Expose({ name: "groupingPeriod" })
  @Type(() => ConfigureSyncRequestBodyConfigurationSalesGroupingGroupingPeriod)
  groupingPeriod?: ConfigureSyncRequestBodyConfigurationSalesGroupingGroupingPeriod;
}

export class ConfigureSyncRequestBodyConfigurationSalesInvoiceStatus extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "invoiceStatusOptions" })
  invoiceStatusOptions?: string[];

  @SpeakeasyMetadata()
  @Expose({ name: "selectedInvoiceStatus" })
  selectedInvoiceStatus?: string;
}

export class ConfigureSyncRequestBodyConfigurationSalesNewTaxRatesAccountingTaxRateOptions extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

export class ConfigureSyncRequestBodyConfigurationSalesNewTaxRatesCommerceTaxRateOptions extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

export class ConfigureSyncRequestBodyConfigurationSalesNewTaxRatesDefaultZeroTaxRateOptions extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

export class ConfigureSyncRequestBodyConfigurationSalesNewTaxRatesTaxRateMappings extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "selectedAccountingTaxRateId" })
  selectedAccountingTaxRateId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "selectedCommerceTaxRateIds" })
  selectedCommerceTaxRateIds?: string[];
}

export class ConfigureSyncRequestBodyConfigurationSalesNewTaxRates extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: ConfigureSyncRequestBodyConfigurationSalesNewTaxRatesAccountingTaxRateOptions })
  @Expose({ name: "accountingTaxRateOptions" })
  @Type(() => ConfigureSyncRequestBodyConfigurationSalesNewTaxRatesAccountingTaxRateOptions)
  accountingTaxRateOptions?: ConfigureSyncRequestBodyConfigurationSalesNewTaxRatesAccountingTaxRateOptions[];

  @SpeakeasyMetadata({ elemType: ConfigureSyncRequestBodyConfigurationSalesNewTaxRatesCommerceTaxRateOptions })
  @Expose({ name: "commerceTaxRateOptions" })
  @Type(() => ConfigureSyncRequestBodyConfigurationSalesNewTaxRatesCommerceTaxRateOptions)
  commerceTaxRateOptions?: ConfigureSyncRequestBodyConfigurationSalesNewTaxRatesCommerceTaxRateOptions[];

  @SpeakeasyMetadata({ elemType: ConfigureSyncRequestBodyConfigurationSalesNewTaxRatesDefaultZeroTaxRateOptions })
  @Expose({ name: "defaultZeroTaxRateOptions" })
  @Type(() => ConfigureSyncRequestBodyConfigurationSalesNewTaxRatesDefaultZeroTaxRateOptions)
  defaultZeroTaxRateOptions?: ConfigureSyncRequestBodyConfigurationSalesNewTaxRatesDefaultZeroTaxRateOptions[];

  @SpeakeasyMetadata()
  @Expose({ name: "selectedDefaultZeroTaxRateId" })
  selectedDefaultZeroTaxRateId?: string;

  @SpeakeasyMetadata({ elemType: ConfigureSyncRequestBodyConfigurationSalesNewTaxRatesTaxRateMappings })
  @Expose({ name: "taxRateMappings" })
  @Type(() => ConfigureSyncRequestBodyConfigurationSalesNewTaxRatesTaxRateMappings)
  taxRateMappings?: ConfigureSyncRequestBodyConfigurationSalesNewTaxRatesTaxRateMappings[];
}

export class ConfigureSyncRequestBodyConfigurationSalesSalesCustomerCustomerOptions extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

export class ConfigureSyncRequestBodyConfigurationSalesSalesCustomer extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: ConfigureSyncRequestBodyConfigurationSalesSalesCustomerCustomerOptions })
  @Expose({ name: "customerOptions" })
  @Type(() => ConfigureSyncRequestBodyConfigurationSalesSalesCustomerCustomerOptions)
  customerOptions?: ConfigureSyncRequestBodyConfigurationSalesSalesCustomerCustomerOptions[];

  @SpeakeasyMetadata()
  @Expose({ name: "selectedCustomerId" })
  selectedCustomerId?: string;
}

export class ConfigureSyncRequestBodyConfigurationSalesTaxRatesTaxRateOptions extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

export class ConfigureSyncRequestBodyConfigurationSalesTaxRates extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "selectedTaxRateId" })
  selectedTaxRateId?: string;

  @SpeakeasyMetadata({ elemType: ConfigureSyncRequestBodyConfigurationSalesTaxRatesTaxRateOptions })
  @Expose({ name: "taxRateOptions" })
  @Type(() => ConfigureSyncRequestBodyConfigurationSalesTaxRatesTaxRateOptions)
  taxRateOptions?: ConfigureSyncRequestBodyConfigurationSalesTaxRatesTaxRateOptions[];
}

export class ConfigureSyncRequestBodyConfigurationSales extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: ConfigureSyncRequestBodyConfigurationSalesAccounts })
  @Expose({ name: "accounts" })
  @Transform(({ value }) => {
    const obj: Record<string, ConfigureSyncRequestBodyConfigurationSalesAccounts> = {};
    for (const key in value) {
      obj[key] = plainToInstance(ConfigureSyncRequestBodyConfigurationSalesAccounts,
        value[key] as ConfigureSyncRequestBodyConfigurationSalesAccounts,
        { excludeExtraneousValues: true }
      );
    }
    return obj;
  }, { toClassOnly: true })
  accounts?: Record<string, ConfigureSyncRequestBodyConfigurationSalesAccounts>;

  @SpeakeasyMetadata()
  @Expose({ name: "grouping" })
  @Type(() => ConfigureSyncRequestBodyConfigurationSalesGrouping)
  grouping?: ConfigureSyncRequestBodyConfigurationSalesGrouping;

  @SpeakeasyMetadata()
  @Expose({ name: "invoiceStatus" })
  @Type(() => ConfigureSyncRequestBodyConfigurationSalesInvoiceStatus)
  invoiceStatus?: ConfigureSyncRequestBodyConfigurationSalesInvoiceStatus;

  @SpeakeasyMetadata()
  @Expose({ name: "newTaxRates" })
  @Type(() => ConfigureSyncRequestBodyConfigurationSalesNewTaxRates)
  newTaxRates?: ConfigureSyncRequestBodyConfigurationSalesNewTaxRates;

  @SpeakeasyMetadata()
  @Expose({ name: "salesCustomer" })
  @Type(() => ConfigureSyncRequestBodyConfigurationSalesSalesCustomer)
  salesCustomer?: ConfigureSyncRequestBodyConfigurationSalesSalesCustomer;

  @SpeakeasyMetadata()
  @Expose({ name: "syncSales" })
  syncSales?: boolean;

  @SpeakeasyMetadata({ elemType: ConfigureSyncRequestBodyConfigurationSalesTaxRates })
  @Expose({ name: "taxRates" })
  @Transform(({ value }) => {
    const obj: Record<string, ConfigureSyncRequestBodyConfigurationSalesTaxRates> = {};
    for (const key in value) {
      obj[key] = plainToInstance(ConfigureSyncRequestBodyConfigurationSalesTaxRates,
        value[key] as ConfigureSyncRequestBodyConfigurationSalesTaxRates,
        { excludeExtraneousValues: true }
      );
    }
    return obj;
  }, { toClassOnly: true })
  taxRates?: Record<string, ConfigureSyncRequestBodyConfigurationSalesTaxRates>;
}

export class ConfigureSyncRequestBodyConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "fees" })
  @Type(() => ConfigureSyncRequestBodyConfigurationFees)
  fees?: ConfigureSyncRequestBodyConfigurationFees;

  @SpeakeasyMetadata()
  @Expose({ name: "newPayments" })
  @Type(() => ConfigureSyncRequestBodyConfigurationNewPayments)
  newPayments?: ConfigureSyncRequestBodyConfigurationNewPayments;

  @SpeakeasyMetadata()
  @Expose({ name: "payments" })
  @Type(() => ConfigureSyncRequestBodyConfigurationPayments)
  payments?: ConfigureSyncRequestBodyConfigurationPayments;

  @SpeakeasyMetadata()
  @Expose({ name: "sales" })
  @Type(() => ConfigureSyncRequestBodyConfigurationSales)
  sales?: ConfigureSyncRequestBodyConfigurationSales;
}

export class ConfigureSyncRequestBodySchedule extends SpeakeasyBase {
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

export class ConfigureSyncRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "accountingSoftwareCompanyName" })
  accountingSoftwareCompanyName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "companyId" })
  companyId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "configuration" })
  @Type(() => ConfigureSyncRequestBodyConfiguration)
  configuration?: ConfigureSyncRequestBodyConfiguration;

  @SpeakeasyMetadata()
  @Expose({ name: "configured" })
  configured?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "schedule" })
  @Type(() => ConfigureSyncRequestBodySchedule)
  schedule?: ConfigureSyncRequestBodySchedule;
}

export class ConfigureSyncRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ConfigureSyncPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: ConfigureSyncRequestBody;
}

export class ConfigureSync200ApplicationJSONConfigurationFeesAccountsAccountOptions extends SpeakeasyBase {
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

export class ConfigureSync200ApplicationJSONConfigurationFeesAccounts extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: ConfigureSync200ApplicationJSONConfigurationFeesAccountsAccountOptions })
  @Expose({ name: "accountOptions" })
  @Type(() => ConfigureSync200ApplicationJSONConfigurationFeesAccountsAccountOptions)
  accountOptions?: ConfigureSync200ApplicationJSONConfigurationFeesAccountsAccountOptions[];

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

export class ConfigureSync200ApplicationJSONConfigurationFeesFeesSupplierSupplierOptions extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

export class ConfigureSync200ApplicationJSONConfigurationFeesFeesSupplier extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "selectedSupplierId" })
  selectedSupplierId?: string;

  @SpeakeasyMetadata({ elemType: ConfigureSync200ApplicationJSONConfigurationFeesFeesSupplierSupplierOptions })
  @Expose({ name: "supplierOptions" })
  @Type(() => ConfigureSync200ApplicationJSONConfigurationFeesFeesSupplierSupplierOptions)
  supplierOptions?: ConfigureSync200ApplicationJSONConfigurationFeesFeesSupplierSupplierOptions[];
}

export class ConfigureSync200ApplicationJSONConfigurationFees extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: ConfigureSync200ApplicationJSONConfigurationFeesAccounts })
  @Expose({ name: "accounts" })
  @Transform(({ value }) => {
    const obj: Record<string, ConfigureSync200ApplicationJSONConfigurationFeesAccounts> = {};
    for (const key in value) {
      obj[key] = plainToInstance(ConfigureSync200ApplicationJSONConfigurationFeesAccounts,
        value[key] as ConfigureSync200ApplicationJSONConfigurationFeesAccounts,
        { excludeExtraneousValues: true }
      );
    }
    return obj;
  }, { toClassOnly: true })
  accounts?: Record<string, ConfigureSync200ApplicationJSONConfigurationFeesAccounts>;

  @SpeakeasyMetadata()
  @Expose({ name: "feesSupplier" })
  @Type(() => ConfigureSync200ApplicationJSONConfigurationFeesFeesSupplier)
  feesSupplier?: ConfigureSync200ApplicationJSONConfigurationFeesFeesSupplier;

  @SpeakeasyMetadata()
  @Expose({ name: "syncFees" })
  syncFees?: boolean;
}

export class ConfigureSync200ApplicationJSONConfigurationNewPaymentsAccountsAccountOptions extends SpeakeasyBase {
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

export class ConfigureSync200ApplicationJSONConfigurationNewPaymentsAccounts extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: ConfigureSync200ApplicationJSONConfigurationNewPaymentsAccountsAccountOptions })
  @Expose({ name: "accountOptions" })
  @Type(() => ConfigureSync200ApplicationJSONConfigurationNewPaymentsAccountsAccountOptions)
  accountOptions?: ConfigureSync200ApplicationJSONConfigurationNewPaymentsAccountsAccountOptions[];

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

export class ConfigureSync200ApplicationJSONConfigurationNewPayments extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: ConfigureSync200ApplicationJSONConfigurationNewPaymentsAccounts })
  @Expose({ name: "accounts" })
  @Transform(({ value }) => {
    const obj: Record<string, ConfigureSync200ApplicationJSONConfigurationNewPaymentsAccounts> = {};
    for (const key in value) {
      obj[key] = plainToInstance(ConfigureSync200ApplicationJSONConfigurationNewPaymentsAccounts,
        value[key] as ConfigureSync200ApplicationJSONConfigurationNewPaymentsAccounts,
        { excludeExtraneousValues: true }
      );
    }
    return obj;
  }, { toClassOnly: true })
  accounts?: Record<string, ConfigureSync200ApplicationJSONConfigurationNewPaymentsAccounts>;

  @SpeakeasyMetadata()
  @Expose({ name: "syncPayments" })
  syncPayments?: boolean;
}

export class ConfigureSync200ApplicationJSONConfigurationPaymentsAccountsAccountOptions extends SpeakeasyBase {
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

export class ConfigureSync200ApplicationJSONConfigurationPaymentsAccounts extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: ConfigureSync200ApplicationJSONConfigurationPaymentsAccountsAccountOptions })
  @Expose({ name: "accountOptions" })
  @Type(() => ConfigureSync200ApplicationJSONConfigurationPaymentsAccountsAccountOptions)
  accountOptions?: ConfigureSync200ApplicationJSONConfigurationPaymentsAccountsAccountOptions[];

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

export class ConfigureSync200ApplicationJSONConfigurationPayments extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: ConfigureSync200ApplicationJSONConfigurationPaymentsAccounts })
  @Expose({ name: "accounts" })
  @Transform(({ value }) => {
    const obj: Record<string, ConfigureSync200ApplicationJSONConfigurationPaymentsAccounts> = {};
    for (const key in value) {
      obj[key] = plainToInstance(ConfigureSync200ApplicationJSONConfigurationPaymentsAccounts,
        value[key] as ConfigureSync200ApplicationJSONConfigurationPaymentsAccounts,
        { excludeExtraneousValues: true }
      );
    }
    return obj;
  }, { toClassOnly: true })
  accounts?: Record<string, ConfigureSync200ApplicationJSONConfigurationPaymentsAccounts>;

  @SpeakeasyMetadata()
  @Expose({ name: "syncPayments" })
  syncPayments?: boolean;
}

export class ConfigureSync200ApplicationJSONConfigurationSalesAccountsAccountOptions extends SpeakeasyBase {
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

export class ConfigureSync200ApplicationJSONConfigurationSalesAccounts extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: ConfigureSync200ApplicationJSONConfigurationSalesAccountsAccountOptions })
  @Expose({ name: "accountOptions" })
  @Type(() => ConfigureSync200ApplicationJSONConfigurationSalesAccountsAccountOptions)
  accountOptions?: ConfigureSync200ApplicationJSONConfigurationSalesAccountsAccountOptions[];

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

export class ConfigureSync200ApplicationJSONConfigurationSalesGroupingGroupingLevelsInvoiceLevel extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "groupByOptions" })
  groupByOptions?: string[];

  @SpeakeasyMetadata()
  @Expose({ name: "selectedGroupByOptions" })
  selectedGroupByOptions?: string[];
}

export class ConfigureSync200ApplicationJSONConfigurationSalesGroupingGroupingLevelsInvoiceLineLevel extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "groupByOptions" })
  groupByOptions?: string[];

  @SpeakeasyMetadata()
  @Expose({ name: "selectedGroupByOptions" })
  selectedGroupByOptions?: string[];
}

export class ConfigureSync200ApplicationJSONConfigurationSalesGroupingGroupingLevels extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "invoiceLevel" })
  @Type(() => ConfigureSync200ApplicationJSONConfigurationSalesGroupingGroupingLevelsInvoiceLevel)
  invoiceLevel?: ConfigureSync200ApplicationJSONConfigurationSalesGroupingGroupingLevelsInvoiceLevel;

  @SpeakeasyMetadata()
  @Expose({ name: "invoiceLineLevel" })
  @Type(() => ConfigureSync200ApplicationJSONConfigurationSalesGroupingGroupingLevelsInvoiceLineLevel)
  invoiceLineLevel?: ConfigureSync200ApplicationJSONConfigurationSalesGroupingGroupingLevelsInvoiceLineLevel;
}

export class ConfigureSync200ApplicationJSONConfigurationSalesGroupingGroupingPeriod extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "groupingPeriodOptions" })
  groupingPeriodOptions?: string[];

  @SpeakeasyMetadata()
  @Expose({ name: "selectedGroupingPeriod" })
  selectedGroupingPeriod?: string;
}

export class ConfigureSync200ApplicationJSONConfigurationSalesGrouping extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "groupingLevels" })
  @Type(() => ConfigureSync200ApplicationJSONConfigurationSalesGroupingGroupingLevels)
  groupingLevels?: ConfigureSync200ApplicationJSONConfigurationSalesGroupingGroupingLevels;

  @SpeakeasyMetadata()
  @Expose({ name: "groupingPeriod" })
  @Type(() => ConfigureSync200ApplicationJSONConfigurationSalesGroupingGroupingPeriod)
  groupingPeriod?: ConfigureSync200ApplicationJSONConfigurationSalesGroupingGroupingPeriod;
}

export class ConfigureSync200ApplicationJSONConfigurationSalesInvoiceStatus extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "invoiceStatusOptions" })
  invoiceStatusOptions?: string[];

  @SpeakeasyMetadata()
  @Expose({ name: "selectedInvoiceStatus" })
  selectedInvoiceStatus?: string;
}

export class ConfigureSync200ApplicationJSONConfigurationSalesNewTaxRatesAccountingTaxRateOptions extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

export class ConfigureSync200ApplicationJSONConfigurationSalesNewTaxRatesCommerceTaxRateOptions extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

export class ConfigureSync200ApplicationJSONConfigurationSalesNewTaxRatesDefaultZeroTaxRateOptions extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

export class ConfigureSync200ApplicationJSONConfigurationSalesNewTaxRatesTaxRateMappings extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "selectedAccountingTaxRateId" })
  selectedAccountingTaxRateId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "selectedCommerceTaxRateIds" })
  selectedCommerceTaxRateIds?: string[];
}

export class ConfigureSync200ApplicationJSONConfigurationSalesNewTaxRates extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: ConfigureSync200ApplicationJSONConfigurationSalesNewTaxRatesAccountingTaxRateOptions })
  @Expose({ name: "accountingTaxRateOptions" })
  @Type(() => ConfigureSync200ApplicationJSONConfigurationSalesNewTaxRatesAccountingTaxRateOptions)
  accountingTaxRateOptions?: ConfigureSync200ApplicationJSONConfigurationSalesNewTaxRatesAccountingTaxRateOptions[];

  @SpeakeasyMetadata({ elemType: ConfigureSync200ApplicationJSONConfigurationSalesNewTaxRatesCommerceTaxRateOptions })
  @Expose({ name: "commerceTaxRateOptions" })
  @Type(() => ConfigureSync200ApplicationJSONConfigurationSalesNewTaxRatesCommerceTaxRateOptions)
  commerceTaxRateOptions?: ConfigureSync200ApplicationJSONConfigurationSalesNewTaxRatesCommerceTaxRateOptions[];

  @SpeakeasyMetadata({ elemType: ConfigureSync200ApplicationJSONConfigurationSalesNewTaxRatesDefaultZeroTaxRateOptions })
  @Expose({ name: "defaultZeroTaxRateOptions" })
  @Type(() => ConfigureSync200ApplicationJSONConfigurationSalesNewTaxRatesDefaultZeroTaxRateOptions)
  defaultZeroTaxRateOptions?: ConfigureSync200ApplicationJSONConfigurationSalesNewTaxRatesDefaultZeroTaxRateOptions[];

  @SpeakeasyMetadata()
  @Expose({ name: "selectedDefaultZeroTaxRateId" })
  selectedDefaultZeroTaxRateId?: string;

  @SpeakeasyMetadata({ elemType: ConfigureSync200ApplicationJSONConfigurationSalesNewTaxRatesTaxRateMappings })
  @Expose({ name: "taxRateMappings" })
  @Type(() => ConfigureSync200ApplicationJSONConfigurationSalesNewTaxRatesTaxRateMappings)
  taxRateMappings?: ConfigureSync200ApplicationJSONConfigurationSalesNewTaxRatesTaxRateMappings[];
}

export class ConfigureSync200ApplicationJSONConfigurationSalesSalesCustomerCustomerOptions extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

export class ConfigureSync200ApplicationJSONConfigurationSalesSalesCustomer extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: ConfigureSync200ApplicationJSONConfigurationSalesSalesCustomerCustomerOptions })
  @Expose({ name: "customerOptions" })
  @Type(() => ConfigureSync200ApplicationJSONConfigurationSalesSalesCustomerCustomerOptions)
  customerOptions?: ConfigureSync200ApplicationJSONConfigurationSalesSalesCustomerCustomerOptions[];

  @SpeakeasyMetadata()
  @Expose({ name: "selectedCustomerId" })
  selectedCustomerId?: string;
}

export class ConfigureSync200ApplicationJSONConfigurationSalesTaxRatesTaxRateOptions extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

export class ConfigureSync200ApplicationJSONConfigurationSalesTaxRates extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "selectedTaxRateId" })
  selectedTaxRateId?: string;

  @SpeakeasyMetadata({ elemType: ConfigureSync200ApplicationJSONConfigurationSalesTaxRatesTaxRateOptions })
  @Expose({ name: "taxRateOptions" })
  @Type(() => ConfigureSync200ApplicationJSONConfigurationSalesTaxRatesTaxRateOptions)
  taxRateOptions?: ConfigureSync200ApplicationJSONConfigurationSalesTaxRatesTaxRateOptions[];
}

export class ConfigureSync200ApplicationJSONConfigurationSales extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: ConfigureSync200ApplicationJSONConfigurationSalesAccounts })
  @Expose({ name: "accounts" })
  @Transform(({ value }) => {
    const obj: Record<string, ConfigureSync200ApplicationJSONConfigurationSalesAccounts> = {};
    for (const key in value) {
      obj[key] = plainToInstance(ConfigureSync200ApplicationJSONConfigurationSalesAccounts,
        value[key] as ConfigureSync200ApplicationJSONConfigurationSalesAccounts,
        { excludeExtraneousValues: true }
      );
    }
    return obj;
  }, { toClassOnly: true })
  accounts?: Record<string, ConfigureSync200ApplicationJSONConfigurationSalesAccounts>;

  @SpeakeasyMetadata()
  @Expose({ name: "grouping" })
  @Type(() => ConfigureSync200ApplicationJSONConfigurationSalesGrouping)
  grouping?: ConfigureSync200ApplicationJSONConfigurationSalesGrouping;

  @SpeakeasyMetadata()
  @Expose({ name: "invoiceStatus" })
  @Type(() => ConfigureSync200ApplicationJSONConfigurationSalesInvoiceStatus)
  invoiceStatus?: ConfigureSync200ApplicationJSONConfigurationSalesInvoiceStatus;

  @SpeakeasyMetadata()
  @Expose({ name: "newTaxRates" })
  @Type(() => ConfigureSync200ApplicationJSONConfigurationSalesNewTaxRates)
  newTaxRates?: ConfigureSync200ApplicationJSONConfigurationSalesNewTaxRates;

  @SpeakeasyMetadata()
  @Expose({ name: "salesCustomer" })
  @Type(() => ConfigureSync200ApplicationJSONConfigurationSalesSalesCustomer)
  salesCustomer?: ConfigureSync200ApplicationJSONConfigurationSalesSalesCustomer;

  @SpeakeasyMetadata()
  @Expose({ name: "syncSales" })
  syncSales?: boolean;

  @SpeakeasyMetadata({ elemType: ConfigureSync200ApplicationJSONConfigurationSalesTaxRates })
  @Expose({ name: "taxRates" })
  @Transform(({ value }) => {
    const obj: Record<string, ConfigureSync200ApplicationJSONConfigurationSalesTaxRates> = {};
    for (const key in value) {
      obj[key] = plainToInstance(ConfigureSync200ApplicationJSONConfigurationSalesTaxRates,
        value[key] as ConfigureSync200ApplicationJSONConfigurationSalesTaxRates,
        { excludeExtraneousValues: true }
      );
    }
    return obj;
  }, { toClassOnly: true })
  taxRates?: Record<string, ConfigureSync200ApplicationJSONConfigurationSalesTaxRates>;
}

export class ConfigureSync200ApplicationJSONConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "fees" })
  @Type(() => ConfigureSync200ApplicationJSONConfigurationFees)
  fees?: ConfigureSync200ApplicationJSONConfigurationFees;

  @SpeakeasyMetadata()
  @Expose({ name: "newPayments" })
  @Type(() => ConfigureSync200ApplicationJSONConfigurationNewPayments)
  newPayments?: ConfigureSync200ApplicationJSONConfigurationNewPayments;

  @SpeakeasyMetadata()
  @Expose({ name: "payments" })
  @Type(() => ConfigureSync200ApplicationJSONConfigurationPayments)
  payments?: ConfigureSync200ApplicationJSONConfigurationPayments;

  @SpeakeasyMetadata()
  @Expose({ name: "sales" })
  @Type(() => ConfigureSync200ApplicationJSONConfigurationSales)
  sales?: ConfigureSync200ApplicationJSONConfigurationSales;
}

export class ConfigureSync200ApplicationJSONSchedule extends SpeakeasyBase {
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

export class ConfigureSync200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "accountingSoftwareCompanyName" })
  accountingSoftwareCompanyName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "companyId" })
  companyId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "configuration" })
  @Type(() => ConfigureSync200ApplicationJSONConfiguration)
  configuration?: ConfigureSync200ApplicationJSONConfiguration;

  @SpeakeasyMetadata()
  @Expose({ name: "configured" })
  configured?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "schedule" })
  @Type(() => ConfigureSync200ApplicationJSONSchedule)
  schedule?: ConfigureSync200ApplicationJSONSchedule;
}

export class ConfigureSyncResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  configureSync200ApplicationJSONObject?: ConfigureSync200ApplicationJSON;
}