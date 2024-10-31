# GetDataStatusDataStatuses

OK

## Example Usage

```typescript
import { GetDataStatusDataStatuses } from "@codat/sync-for-payables-version-1/sdk/models/operations";

let value: GetDataStatusDataStatuses = {
  accountTransactions: {
    dataType: "accountTransactions",
    lastSuccessfulSync: "2022-01-01T13:00:00.000Z",
    currentStatus: "ProcessingError",
    latestSyncId: "ad474a37-2003-478e-baee-9af9f1ec2fe3",
    latestSuccessfulSyncId: "8220fc90-55b6-47bc-9417-48ac6ea93101",
  },
  balanceSheet: {
    dataType: "commerce-transactions",
    lastSuccessfulSync: "2022-01-01T13:00:00.000Z",
    currentStatus: "Complete",
    latestSyncId: "ad474a37-2003-478e-baee-9af9f1ec2fe3",
    latestSuccessfulSyncId: "8220fc90-55b6-47bc-9417-48ac6ea93101",
  },
  bankAccounts: {
    dataType: "bills",
    lastSuccessfulSync: "2022-01-01T13:00:00.000Z",
    currentStatus: "ValidationQueued",
    latestSyncId: "ad474a37-2003-478e-baee-9af9f1ec2fe3",
    latestSuccessfulSyncId: "8220fc90-55b6-47bc-9417-48ac6ea93101",
  },
  bankTransactions: {
    dataType: "customers",
    lastSuccessfulSync: "2022-01-01T13:00:00.000Z",
    currentStatus: "RateLimitError",
    latestSyncId: "ad474a37-2003-478e-baee-9af9f1ec2fe3",
    latestSuccessfulSyncId: "8220fc90-55b6-47bc-9417-48ac6ea93101",
  },
  billCreditNotes: {
    dataType: "company",
    lastSuccessfulSync: "2022-01-01T13:00:00.000Z",
    currentStatus: "InternalError",
    latestSyncId: "ad474a37-2003-478e-baee-9af9f1ec2fe3",
    latestSuccessfulSyncId: "8220fc90-55b6-47bc-9417-48ac6ea93101",
  },
  billPayments: {
    dataType: "suppliers",
    lastSuccessfulSync: "2022-01-01T13:00:00.000Z",
    currentStatus: "ProcessingError",
    latestSyncId: "ad474a37-2003-478e-baee-9af9f1ec2fe3",
    latestSuccessfulSyncId: "8220fc90-55b6-47bc-9417-48ac6ea93101",
  },
  bills: {
    dataType: "commerce-taxComponents",
    lastSuccessfulSync: "2022-01-01T13:00:00.000Z",
    currentStatus: "Complete",
    latestSyncId: "ad474a37-2003-478e-baee-9af9f1ec2fe3",
    latestSuccessfulSyncId: "8220fc90-55b6-47bc-9417-48ac6ea93101",
  },
  cashFlowStatement: {
    dataType: "customers",
    lastSuccessfulSync: "2022-01-01T13:00:00.000Z",
    currentStatus: "ProcessingQueued",
    latestSyncId: "ad474a37-2003-478e-baee-9af9f1ec2fe3",
    latestSuccessfulSyncId: "8220fc90-55b6-47bc-9417-48ac6ea93101",
  },
  chartOfAccounts: {
    dataType: "commerce-taxComponents",
    lastSuccessfulSync: "2022-01-01T13:00:00.000Z",
    currentStatus: "InternalError",
    latestSyncId: "ad474a37-2003-478e-baee-9af9f1ec2fe3",
    latestSuccessfulSyncId: "8220fc90-55b6-47bc-9417-48ac6ea93101",
  },
  company: {
    dataType: "balanceSheet",
    lastSuccessfulSync: "2022-01-01T13:00:00.000Z",
    currentStatus: "Complete",
    latestSyncId: "ad474a37-2003-478e-baee-9af9f1ec2fe3",
    latestSuccessfulSyncId: "8220fc90-55b6-47bc-9417-48ac6ea93101",
  },
  creditNotes: {
    dataType: "commerce-payments",
    lastSuccessfulSync: "2022-01-01T13:00:00.000Z",
    currentStatus: "Processing",
    latestSyncId: "ad474a37-2003-478e-baee-9af9f1ec2fe3",
    latestSuccessfulSyncId: "8220fc90-55b6-47bc-9417-48ac6ea93101",
  },
  customers: {
    dataType: "banking-transactionCategories",
    lastSuccessfulSync: "2022-01-01T13:00:00.000Z",
    currentStatus: "FetchError",
    latestSyncId: "ad474a37-2003-478e-baee-9af9f1ec2fe3",
    latestSuccessfulSyncId: "8220fc90-55b6-47bc-9417-48ac6ea93101",
  },
  directCosts: {
    dataType: "customers",
    lastSuccessfulSync: "2022-01-01T13:00:00.000Z",
    currentStatus: "MapError",
    latestSyncId: "ad474a37-2003-478e-baee-9af9f1ec2fe3",
    latestSuccessfulSyncId: "8220fc90-55b6-47bc-9417-48ac6ea93101",
  },
  directIncomes: {
    dataType: "commerce-payments",
    lastSuccessfulSync: "2022-01-01T13:00:00.000Z",
    currentStatus: "ProcessingError",
    latestSyncId: "ad474a37-2003-478e-baee-9af9f1ec2fe3",
    latestSuccessfulSyncId: "8220fc90-55b6-47bc-9417-48ac6ea93101",
  },
  invoices: {
    dataType: "balanceSheet",
    lastSuccessfulSync: "2022-01-01T13:00:00.000Z",
    currentStatus: "AuthError",
    latestSyncId: "ad474a37-2003-478e-baee-9af9f1ec2fe3",
    latestSuccessfulSyncId: "8220fc90-55b6-47bc-9417-48ac6ea93101",
  },
  itemReceipts: {
    dataType: "trackingCategories",
    lastSuccessfulSync: "2022-01-01T13:00:00.000Z",
    currentStatus: "MapError",
    latestSyncId: "ad474a37-2003-478e-baee-9af9f1ec2fe3",
    latestSuccessfulSyncId: "8220fc90-55b6-47bc-9417-48ac6ea93101",
  },
  items: {
    dataType: "invoices",
    lastSuccessfulSync: "2022-01-01T13:00:00.000Z",
    currentStatus: "PermissionsError",
    latestSyncId: "ad474a37-2003-478e-baee-9af9f1ec2fe3",
    latestSuccessfulSyncId: "8220fc90-55b6-47bc-9417-48ac6ea93101",
  },
  journalEntries: {
    dataType: "commerce-taxComponents",
    lastSuccessfulSync: "2022-01-01T13:00:00.000Z",
    currentStatus: "RateLimitError",
    latestSyncId: "ad474a37-2003-478e-baee-9af9f1ec2fe3",
    latestSuccessfulSyncId: "8220fc90-55b6-47bc-9417-48ac6ea93101",
  },
  journals: {
    dataType: "cashFlowStatement",
    lastSuccessfulSync: "2022-01-01T13:00:00.000Z",
    currentStatus: "Queued",
    latestSyncId: "ad474a37-2003-478e-baee-9af9f1ec2fe3",
    latestSuccessfulSyncId: "8220fc90-55b6-47bc-9417-48ac6ea93101",
  },
  paymentMethods: {
    dataType: "commerce-payments",
    lastSuccessfulSync: "2022-01-01T13:00:00.000Z",
    currentStatus: "Complete",
    latestSyncId: "ad474a37-2003-478e-baee-9af9f1ec2fe3",
    latestSuccessfulSyncId: "8220fc90-55b6-47bc-9417-48ac6ea93101",
  },
  payments: {
    dataType: "invoices",
    lastSuccessfulSync: "2022-01-01T13:00:00.000Z",
    currentStatus: "ProcessingQueued",
    latestSyncId: "ad474a37-2003-478e-baee-9af9f1ec2fe3",
    latestSuccessfulSyncId: "8220fc90-55b6-47bc-9417-48ac6ea93101",
  },
  profitAndLoss: {
    dataType: "commerce-payments",
    lastSuccessfulSync: "2022-01-01T13:00:00.000Z",
    currentStatus: "Fetching",
    latestSyncId: "ad474a37-2003-478e-baee-9af9f1ec2fe3",
    latestSuccessfulSyncId: "8220fc90-55b6-47bc-9417-48ac6ea93101",
  },
  purchaseOrders: {
    dataType: "purchaseOrders",
    lastSuccessfulSync: "2022-01-01T13:00:00.000Z",
    currentStatus: "MapError",
    latestSyncId: "ad474a37-2003-478e-baee-9af9f1ec2fe3",
    latestSuccessfulSyncId: "8220fc90-55b6-47bc-9417-48ac6ea93101",
  },
  salesOrders: {
    dataType: "profitAndLoss",
    lastSuccessfulSync: "2022-01-01T13:00:00.000Z",
    currentStatus: "AuthError",
    latestSyncId: "ad474a37-2003-478e-baee-9af9f1ec2fe3",
    latestSuccessfulSyncId: "8220fc90-55b6-47bc-9417-48ac6ea93101",
  },
  suppliers: {
    dataType: "items",
    lastSuccessfulSync: "2022-01-01T13:00:00.000Z",
    currentStatus: "ValidationError",
    latestSyncId: "ad474a37-2003-478e-baee-9af9f1ec2fe3",
    latestSuccessfulSyncId: "8220fc90-55b6-47bc-9417-48ac6ea93101",
  },
  taxRates: {
    dataType: "purchaseOrders",
    lastSuccessfulSync: "2022-01-01T13:00:00.000Z",
    currentStatus: "Validating",
    latestSyncId: "ad474a37-2003-478e-baee-9af9f1ec2fe3",
    latestSuccessfulSyncId: "8220fc90-55b6-47bc-9417-48ac6ea93101",
  },
  trackingCategories: {
    dataType: "commerce-products",
    lastSuccessfulSync: "2022-01-01T13:00:00.000Z",
    currentStatus: "ValidationError",
    latestSyncId: "ad474a37-2003-478e-baee-9af9f1ec2fe3",
    latestSuccessfulSyncId: "8220fc90-55b6-47bc-9417-48ac6ea93101",
  },
  transfers: {
    dataType: "commerce-payments",
    lastSuccessfulSync: "2022-01-01T13:00:00.000Z",
    currentStatus: "Mapping",
    latestSyncId: "ad474a37-2003-478e-baee-9af9f1ec2fe3",
    latestSuccessfulSyncId: "8220fc90-55b6-47bc-9417-48ac6ea93101",
  },
  bankingAccountBalances: {
    dataType: "banking-accounts",
    lastSuccessfulSync: "2022-01-01T13:00:00.000Z",
    currentStatus: "MapError",
    latestSyncId: "ad474a37-2003-478e-baee-9af9f1ec2fe3",
    latestSuccessfulSyncId: "8220fc90-55b6-47bc-9417-48ac6ea93101",
  },
  bankingAccounts: {
    dataType: "transfers",
    lastSuccessfulSync: "2022-01-01T13:00:00.000Z",
    currentStatus: "ValidationError",
    latestSyncId: "ad474a37-2003-478e-baee-9af9f1ec2fe3",
    latestSuccessfulSyncId: "8220fc90-55b6-47bc-9417-48ac6ea93101",
  },
  bankingTransactionCategories: {
    dataType: "salesOrders",
    lastSuccessfulSync: "2022-01-01T13:00:00.000Z",
    currentStatus: "RateLimitError",
    latestSyncId: "ad474a37-2003-478e-baee-9af9f1ec2fe3",
    latestSuccessfulSyncId: "8220fc90-55b6-47bc-9417-48ac6ea93101",
  },
  bankingTransactions: {
    dataType: "customers",
    lastSuccessfulSync: "2022-01-01T13:00:00.000Z",
    currentStatus: "ProcessingError",
    latestSyncId: "ad474a37-2003-478e-baee-9af9f1ec2fe3",
    latestSuccessfulSyncId: "8220fc90-55b6-47bc-9417-48ac6ea93101",
  },
  commerceCompanyInfo: {
    dataType: "bills",
    lastSuccessfulSync: "2022-01-01T13:00:00.000Z",
    currentStatus: "Complete",
    latestSyncId: "ad474a37-2003-478e-baee-9af9f1ec2fe3",
    latestSuccessfulSyncId: "8220fc90-55b6-47bc-9417-48ac6ea93101",
  },
  commerceCustomers: {
    dataType: "commerce-orders",
    lastSuccessfulSync: "2022-01-01T13:00:00.000Z",
    currentStatus: "Initial",
    latestSyncId: "ad474a37-2003-478e-baee-9af9f1ec2fe3",
    latestSuccessfulSyncId: "8220fc90-55b6-47bc-9417-48ac6ea93101",
  },
  commerceDisputes: {
    dataType: "transfers",
    lastSuccessfulSync: "2022-01-01T13:00:00.000Z",
    currentStatus: "ValidationError",
    latestSyncId: "ad474a37-2003-478e-baee-9af9f1ec2fe3",
    latestSuccessfulSyncId: "8220fc90-55b6-47bc-9417-48ac6ea93101",
  },
  commerceLocations: {
    dataType: "directCosts",
    lastSuccessfulSync: "2022-01-01T13:00:00.000Z",
    currentStatus: "Initial",
    latestSyncId: "ad474a37-2003-478e-baee-9af9f1ec2fe3",
    latestSuccessfulSyncId: "8220fc90-55b6-47bc-9417-48ac6ea93101",
  },
  commerceOrders: {
    dataType: "paymentMethods",
    lastSuccessfulSync: "2022-01-01T13:00:00.000Z",
    currentStatus: "MapError",
    latestSyncId: "ad474a37-2003-478e-baee-9af9f1ec2fe3",
    latestSuccessfulSyncId: "8220fc90-55b6-47bc-9417-48ac6ea93101",
  },
  commercePaymentMethods: {
    dataType: "balanceSheet",
    lastSuccessfulSync: "2022-01-01T13:00:00.000Z",
    currentStatus: "ProcessingError",
    latestSyncId: "ad474a37-2003-478e-baee-9af9f1ec2fe3",
    latestSuccessfulSyncId: "8220fc90-55b6-47bc-9417-48ac6ea93101",
  },
  commercePayments: {
    dataType: "salesOrders",
    lastSuccessfulSync: "2022-01-01T13:00:00.000Z",
    currentStatus: "PermissionsError",
    latestSyncId: "ad474a37-2003-478e-baee-9af9f1ec2fe3",
    latestSuccessfulSyncId: "8220fc90-55b6-47bc-9417-48ac6ea93101",
  },
  commerceProductCategories: {
    dataType: "itemReceipts",
    lastSuccessfulSync: "2022-01-01T13:00:00.000Z",
    currentStatus: "Queued",
    latestSyncId: "ad474a37-2003-478e-baee-9af9f1ec2fe3",
    latestSuccessfulSyncId: "8220fc90-55b6-47bc-9417-48ac6ea93101",
  },
  commerceProducts: {
    dataType: "profitAndLoss",
    lastSuccessfulSync: "2022-01-01T13:00:00.000Z",
    currentStatus: "InternalError",
    latestSyncId: "ad474a37-2003-478e-baee-9af9f1ec2fe3",
    latestSuccessfulSyncId: "8220fc90-55b6-47bc-9417-48ac6ea93101",
  },
  commerceTaxComponents: {
    dataType: "bills",
    lastSuccessfulSync: "2022-01-01T13:00:00.000Z",
    currentStatus: "Initial",
    latestSyncId: "ad474a37-2003-478e-baee-9af9f1ec2fe3",
    latestSuccessfulSyncId: "8220fc90-55b6-47bc-9417-48ac6ea93101",
  },
  commerceTransactions: {
    dataType: "journals",
    lastSuccessfulSync: "2022-01-01T13:00:00.000Z",
    currentStatus: "MapError",
    latestSyncId: "ad474a37-2003-478e-baee-9af9f1ec2fe3",
    latestSuccessfulSyncId: "8220fc90-55b6-47bc-9417-48ac6ea93101",
  },
};
```

## Fields

| Field                                                                                                                                                                                                                           | Type                                                                                                                                                                                                                            | Required                                                                                                                                                                                                                        | Description                                                                                                                                                                                                                     | Example                                                                                                                                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `accountTransactions`                                                                                                                                                                                                           | [shared.DataStatus](../../../sdk/models/shared/datastatus.md)                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                              | Describes the state of data in the Codat cache for a company and data type                                                                                                                                                      | {<br/>"dataType": "string",<br/>"lastSuccessfulSync": "2022-01-01T13:00:00.000Z",<br/>"currentStatus": "string",<br/>"latestSyncId": "ad474a37-2003-478e-baee-9af9f1ec2fe3",<br/>"latestSuccessfulSyncId": "8220fc90-55b6-47bc-9417-48ac6ea93101"<br/>} |
| `balanceSheet`                                                                                                                                                                                                                  | [shared.DataStatus](../../../sdk/models/shared/datastatus.md)                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                              | Describes the state of data in the Codat cache for a company and data type                                                                                                                                                      | {<br/>"dataType": "string",<br/>"lastSuccessfulSync": "2022-01-01T13:00:00.000Z",<br/>"currentStatus": "string",<br/>"latestSyncId": "ad474a37-2003-478e-baee-9af9f1ec2fe3",<br/>"latestSuccessfulSyncId": "8220fc90-55b6-47bc-9417-48ac6ea93101"<br/>} |
| `bankAccounts`                                                                                                                                                                                                                  | [shared.DataStatus](../../../sdk/models/shared/datastatus.md)                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                              | Describes the state of data in the Codat cache for a company and data type                                                                                                                                                      | {<br/>"dataType": "string",<br/>"lastSuccessfulSync": "2022-01-01T13:00:00.000Z",<br/>"currentStatus": "string",<br/>"latestSyncId": "ad474a37-2003-478e-baee-9af9f1ec2fe3",<br/>"latestSuccessfulSyncId": "8220fc90-55b6-47bc-9417-48ac6ea93101"<br/>} |
| `bankTransactions`                                                                                                                                                                                                              | [shared.DataStatus](../../../sdk/models/shared/datastatus.md)                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                              | Describes the state of data in the Codat cache for a company and data type                                                                                                                                                      | {<br/>"dataType": "string",<br/>"lastSuccessfulSync": "2022-01-01T13:00:00.000Z",<br/>"currentStatus": "string",<br/>"latestSyncId": "ad474a37-2003-478e-baee-9af9f1ec2fe3",<br/>"latestSuccessfulSyncId": "8220fc90-55b6-47bc-9417-48ac6ea93101"<br/>} |
| `billCreditNotes`                                                                                                                                                                                                               | [shared.DataStatus](../../../sdk/models/shared/datastatus.md)                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                              | Describes the state of data in the Codat cache for a company and data type                                                                                                                                                      | {<br/>"dataType": "string",<br/>"lastSuccessfulSync": "2022-01-01T13:00:00.000Z",<br/>"currentStatus": "string",<br/>"latestSyncId": "ad474a37-2003-478e-baee-9af9f1ec2fe3",<br/>"latestSuccessfulSyncId": "8220fc90-55b6-47bc-9417-48ac6ea93101"<br/>} |
| `billPayments`                                                                                                                                                                                                                  | [shared.DataStatus](../../../sdk/models/shared/datastatus.md)                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                              | Describes the state of data in the Codat cache for a company and data type                                                                                                                                                      | {<br/>"dataType": "string",<br/>"lastSuccessfulSync": "2022-01-01T13:00:00.000Z",<br/>"currentStatus": "string",<br/>"latestSyncId": "ad474a37-2003-478e-baee-9af9f1ec2fe3",<br/>"latestSuccessfulSyncId": "8220fc90-55b6-47bc-9417-48ac6ea93101"<br/>} |
| `bills`                                                                                                                                                                                                                         | [shared.DataStatus](../../../sdk/models/shared/datastatus.md)                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                              | Describes the state of data in the Codat cache for a company and data type                                                                                                                                                      | {<br/>"dataType": "string",<br/>"lastSuccessfulSync": "2022-01-01T13:00:00.000Z",<br/>"currentStatus": "string",<br/>"latestSyncId": "ad474a37-2003-478e-baee-9af9f1ec2fe3",<br/>"latestSuccessfulSyncId": "8220fc90-55b6-47bc-9417-48ac6ea93101"<br/>} |
| `cashFlowStatement`                                                                                                                                                                                                             | [shared.DataStatus](../../../sdk/models/shared/datastatus.md)                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                              | Describes the state of data in the Codat cache for a company and data type                                                                                                                                                      | {<br/>"dataType": "string",<br/>"lastSuccessfulSync": "2022-01-01T13:00:00.000Z",<br/>"currentStatus": "string",<br/>"latestSyncId": "ad474a37-2003-478e-baee-9af9f1ec2fe3",<br/>"latestSuccessfulSyncId": "8220fc90-55b6-47bc-9417-48ac6ea93101"<br/>} |
| `chartOfAccounts`                                                                                                                                                                                                               | [shared.DataStatus](../../../sdk/models/shared/datastatus.md)                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                              | Describes the state of data in the Codat cache for a company and data type                                                                                                                                                      | {<br/>"dataType": "string",<br/>"lastSuccessfulSync": "2022-01-01T13:00:00.000Z",<br/>"currentStatus": "string",<br/>"latestSyncId": "ad474a37-2003-478e-baee-9af9f1ec2fe3",<br/>"latestSuccessfulSyncId": "8220fc90-55b6-47bc-9417-48ac6ea93101"<br/>} |
| `company`                                                                                                                                                                                                                       | [shared.DataStatus](../../../sdk/models/shared/datastatus.md)                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                              | Describes the state of data in the Codat cache for a company and data type                                                                                                                                                      | {<br/>"dataType": "string",<br/>"lastSuccessfulSync": "2022-01-01T13:00:00.000Z",<br/>"currentStatus": "string",<br/>"latestSyncId": "ad474a37-2003-478e-baee-9af9f1ec2fe3",<br/>"latestSuccessfulSyncId": "8220fc90-55b6-47bc-9417-48ac6ea93101"<br/>} |
| `creditNotes`                                                                                                                                                                                                                   | [shared.DataStatus](../../../sdk/models/shared/datastatus.md)                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                              | Describes the state of data in the Codat cache for a company and data type                                                                                                                                                      | {<br/>"dataType": "string",<br/>"lastSuccessfulSync": "2022-01-01T13:00:00.000Z",<br/>"currentStatus": "string",<br/>"latestSyncId": "ad474a37-2003-478e-baee-9af9f1ec2fe3",<br/>"latestSuccessfulSyncId": "8220fc90-55b6-47bc-9417-48ac6ea93101"<br/>} |
| `customers`                                                                                                                                                                                                                     | [shared.DataStatus](../../../sdk/models/shared/datastatus.md)                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                              | Describes the state of data in the Codat cache for a company and data type                                                                                                                                                      | {<br/>"dataType": "string",<br/>"lastSuccessfulSync": "2022-01-01T13:00:00.000Z",<br/>"currentStatus": "string",<br/>"latestSyncId": "ad474a37-2003-478e-baee-9af9f1ec2fe3",<br/>"latestSuccessfulSyncId": "8220fc90-55b6-47bc-9417-48ac6ea93101"<br/>} |
| `directCosts`                                                                                                                                                                                                                   | [shared.DataStatus](../../../sdk/models/shared/datastatus.md)                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                              | Describes the state of data in the Codat cache for a company and data type                                                                                                                                                      | {<br/>"dataType": "string",<br/>"lastSuccessfulSync": "2022-01-01T13:00:00.000Z",<br/>"currentStatus": "string",<br/>"latestSyncId": "ad474a37-2003-478e-baee-9af9f1ec2fe3",<br/>"latestSuccessfulSyncId": "8220fc90-55b6-47bc-9417-48ac6ea93101"<br/>} |
| `directIncomes`                                                                                                                                                                                                                 | [shared.DataStatus](../../../sdk/models/shared/datastatus.md)                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                              | Describes the state of data in the Codat cache for a company and data type                                                                                                                                                      | {<br/>"dataType": "string",<br/>"lastSuccessfulSync": "2022-01-01T13:00:00.000Z",<br/>"currentStatus": "string",<br/>"latestSyncId": "ad474a37-2003-478e-baee-9af9f1ec2fe3",<br/>"latestSuccessfulSyncId": "8220fc90-55b6-47bc-9417-48ac6ea93101"<br/>} |
| `invoices`                                                                                                                                                                                                                      | [shared.DataStatus](../../../sdk/models/shared/datastatus.md)                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                              | Describes the state of data in the Codat cache for a company and data type                                                                                                                                                      | {<br/>"dataType": "string",<br/>"lastSuccessfulSync": "2022-01-01T13:00:00.000Z",<br/>"currentStatus": "string",<br/>"latestSyncId": "ad474a37-2003-478e-baee-9af9f1ec2fe3",<br/>"latestSuccessfulSyncId": "8220fc90-55b6-47bc-9417-48ac6ea93101"<br/>} |
| `itemReceipts`                                                                                                                                                                                                                  | [shared.DataStatus](../../../sdk/models/shared/datastatus.md)                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                              | Describes the state of data in the Codat cache for a company and data type                                                                                                                                                      | {<br/>"dataType": "string",<br/>"lastSuccessfulSync": "2022-01-01T13:00:00.000Z",<br/>"currentStatus": "string",<br/>"latestSyncId": "ad474a37-2003-478e-baee-9af9f1ec2fe3",<br/>"latestSuccessfulSyncId": "8220fc90-55b6-47bc-9417-48ac6ea93101"<br/>} |
| `items`                                                                                                                                                                                                                         | [shared.DataStatus](../../../sdk/models/shared/datastatus.md)                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                              | Describes the state of data in the Codat cache for a company and data type                                                                                                                                                      | {<br/>"dataType": "string",<br/>"lastSuccessfulSync": "2022-01-01T13:00:00.000Z",<br/>"currentStatus": "string",<br/>"latestSyncId": "ad474a37-2003-478e-baee-9af9f1ec2fe3",<br/>"latestSuccessfulSyncId": "8220fc90-55b6-47bc-9417-48ac6ea93101"<br/>} |
| `journalEntries`                                                                                                                                                                                                                | [shared.DataStatus](../../../sdk/models/shared/datastatus.md)                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                              | Describes the state of data in the Codat cache for a company and data type                                                                                                                                                      | {<br/>"dataType": "string",<br/>"lastSuccessfulSync": "2022-01-01T13:00:00.000Z",<br/>"currentStatus": "string",<br/>"latestSyncId": "ad474a37-2003-478e-baee-9af9f1ec2fe3",<br/>"latestSuccessfulSyncId": "8220fc90-55b6-47bc-9417-48ac6ea93101"<br/>} |
| `journals`                                                                                                                                                                                                                      | [shared.DataStatus](../../../sdk/models/shared/datastatus.md)                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                              | Describes the state of data in the Codat cache for a company and data type                                                                                                                                                      | {<br/>"dataType": "string",<br/>"lastSuccessfulSync": "2022-01-01T13:00:00.000Z",<br/>"currentStatus": "string",<br/>"latestSyncId": "ad474a37-2003-478e-baee-9af9f1ec2fe3",<br/>"latestSuccessfulSyncId": "8220fc90-55b6-47bc-9417-48ac6ea93101"<br/>} |
| `paymentMethods`                                                                                                                                                                                                                | [shared.DataStatus](../../../sdk/models/shared/datastatus.md)                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                              | Describes the state of data in the Codat cache for a company and data type                                                                                                                                                      | {<br/>"dataType": "string",<br/>"lastSuccessfulSync": "2022-01-01T13:00:00.000Z",<br/>"currentStatus": "string",<br/>"latestSyncId": "ad474a37-2003-478e-baee-9af9f1ec2fe3",<br/>"latestSuccessfulSyncId": "8220fc90-55b6-47bc-9417-48ac6ea93101"<br/>} |
| `payments`                                                                                                                                                                                                                      | [shared.DataStatus](../../../sdk/models/shared/datastatus.md)                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                              | Describes the state of data in the Codat cache for a company and data type                                                                                                                                                      | {<br/>"dataType": "string",<br/>"lastSuccessfulSync": "2022-01-01T13:00:00.000Z",<br/>"currentStatus": "string",<br/>"latestSyncId": "ad474a37-2003-478e-baee-9af9f1ec2fe3",<br/>"latestSuccessfulSyncId": "8220fc90-55b6-47bc-9417-48ac6ea93101"<br/>} |
| `profitAndLoss`                                                                                                                                                                                                                 | [shared.DataStatus](../../../sdk/models/shared/datastatus.md)                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                              | Describes the state of data in the Codat cache for a company and data type                                                                                                                                                      | {<br/>"dataType": "string",<br/>"lastSuccessfulSync": "2022-01-01T13:00:00.000Z",<br/>"currentStatus": "string",<br/>"latestSyncId": "ad474a37-2003-478e-baee-9af9f1ec2fe3",<br/>"latestSuccessfulSyncId": "8220fc90-55b6-47bc-9417-48ac6ea93101"<br/>} |
| `purchaseOrders`                                                                                                                                                                                                                | [shared.DataStatus](../../../sdk/models/shared/datastatus.md)                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                              | Describes the state of data in the Codat cache for a company and data type                                                                                                                                                      | {<br/>"dataType": "string",<br/>"lastSuccessfulSync": "2022-01-01T13:00:00.000Z",<br/>"currentStatus": "string",<br/>"latestSyncId": "ad474a37-2003-478e-baee-9af9f1ec2fe3",<br/>"latestSuccessfulSyncId": "8220fc90-55b6-47bc-9417-48ac6ea93101"<br/>} |
| `salesOrders`                                                                                                                                                                                                                   | [shared.DataStatus](../../../sdk/models/shared/datastatus.md)                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                              | Describes the state of data in the Codat cache for a company and data type                                                                                                                                                      | {<br/>"dataType": "string",<br/>"lastSuccessfulSync": "2022-01-01T13:00:00.000Z",<br/>"currentStatus": "string",<br/>"latestSyncId": "ad474a37-2003-478e-baee-9af9f1ec2fe3",<br/>"latestSuccessfulSyncId": "8220fc90-55b6-47bc-9417-48ac6ea93101"<br/>} |
| `suppliers`                                                                                                                                                                                                                     | [shared.DataStatus](../../../sdk/models/shared/datastatus.md)                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                              | Describes the state of data in the Codat cache for a company and data type                                                                                                                                                      | {<br/>"dataType": "string",<br/>"lastSuccessfulSync": "2022-01-01T13:00:00.000Z",<br/>"currentStatus": "string",<br/>"latestSyncId": "ad474a37-2003-478e-baee-9af9f1ec2fe3",<br/>"latestSuccessfulSyncId": "8220fc90-55b6-47bc-9417-48ac6ea93101"<br/>} |
| `taxRates`                                                                                                                                                                                                                      | [shared.DataStatus](../../../sdk/models/shared/datastatus.md)                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                              | Describes the state of data in the Codat cache for a company and data type                                                                                                                                                      | {<br/>"dataType": "string",<br/>"lastSuccessfulSync": "2022-01-01T13:00:00.000Z",<br/>"currentStatus": "string",<br/>"latestSyncId": "ad474a37-2003-478e-baee-9af9f1ec2fe3",<br/>"latestSuccessfulSyncId": "8220fc90-55b6-47bc-9417-48ac6ea93101"<br/>} |
| `trackingCategories`                                                                                                                                                                                                            | [shared.DataStatus](../../../sdk/models/shared/datastatus.md)                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                              | Describes the state of data in the Codat cache for a company and data type                                                                                                                                                      | {<br/>"dataType": "string",<br/>"lastSuccessfulSync": "2022-01-01T13:00:00.000Z",<br/>"currentStatus": "string",<br/>"latestSyncId": "ad474a37-2003-478e-baee-9af9f1ec2fe3",<br/>"latestSuccessfulSyncId": "8220fc90-55b6-47bc-9417-48ac6ea93101"<br/>} |
| `transfers`                                                                                                                                                                                                                     | [shared.DataStatus](../../../sdk/models/shared/datastatus.md)                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                              | Describes the state of data in the Codat cache for a company and data type                                                                                                                                                      | {<br/>"dataType": "string",<br/>"lastSuccessfulSync": "2022-01-01T13:00:00.000Z",<br/>"currentStatus": "string",<br/>"latestSyncId": "ad474a37-2003-478e-baee-9af9f1ec2fe3",<br/>"latestSuccessfulSyncId": "8220fc90-55b6-47bc-9417-48ac6ea93101"<br/>} |
| `bankingAccountBalances`                                                                                                                                                                                                        | [shared.DataStatus](../../../sdk/models/shared/datastatus.md)                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                              | Describes the state of data in the Codat cache for a company and data type                                                                                                                                                      | {<br/>"dataType": "string",<br/>"lastSuccessfulSync": "2022-01-01T13:00:00.000Z",<br/>"currentStatus": "string",<br/>"latestSyncId": "ad474a37-2003-478e-baee-9af9f1ec2fe3",<br/>"latestSuccessfulSyncId": "8220fc90-55b6-47bc-9417-48ac6ea93101"<br/>} |
| `bankingAccounts`                                                                                                                                                                                                               | [shared.DataStatus](../../../sdk/models/shared/datastatus.md)                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                              | Describes the state of data in the Codat cache for a company and data type                                                                                                                                                      | {<br/>"dataType": "string",<br/>"lastSuccessfulSync": "2022-01-01T13:00:00.000Z",<br/>"currentStatus": "string",<br/>"latestSyncId": "ad474a37-2003-478e-baee-9af9f1ec2fe3",<br/>"latestSuccessfulSyncId": "8220fc90-55b6-47bc-9417-48ac6ea93101"<br/>} |
| `bankingTransactionCategories`                                                                                                                                                                                                  | [shared.DataStatus](../../../sdk/models/shared/datastatus.md)                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                              | Describes the state of data in the Codat cache for a company and data type                                                                                                                                                      | {<br/>"dataType": "string",<br/>"lastSuccessfulSync": "2022-01-01T13:00:00.000Z",<br/>"currentStatus": "string",<br/>"latestSyncId": "ad474a37-2003-478e-baee-9af9f1ec2fe3",<br/>"latestSuccessfulSyncId": "8220fc90-55b6-47bc-9417-48ac6ea93101"<br/>} |
| `bankingTransactions`                                                                                                                                                                                                           | [shared.DataStatus](../../../sdk/models/shared/datastatus.md)                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                              | Describes the state of data in the Codat cache for a company and data type                                                                                                                                                      | {<br/>"dataType": "string",<br/>"lastSuccessfulSync": "2022-01-01T13:00:00.000Z",<br/>"currentStatus": "string",<br/>"latestSyncId": "ad474a37-2003-478e-baee-9af9f1ec2fe3",<br/>"latestSuccessfulSyncId": "8220fc90-55b6-47bc-9417-48ac6ea93101"<br/>} |
| `commerceCompanyInfo`                                                                                                                                                                                                           | [shared.DataStatus](../../../sdk/models/shared/datastatus.md)                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                              | Describes the state of data in the Codat cache for a company and data type                                                                                                                                                      | {<br/>"dataType": "string",<br/>"lastSuccessfulSync": "2022-01-01T13:00:00.000Z",<br/>"currentStatus": "string",<br/>"latestSyncId": "ad474a37-2003-478e-baee-9af9f1ec2fe3",<br/>"latestSuccessfulSyncId": "8220fc90-55b6-47bc-9417-48ac6ea93101"<br/>} |
| `commerceCustomers`                                                                                                                                                                                                             | [shared.DataStatus](../../../sdk/models/shared/datastatus.md)                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                              | Describes the state of data in the Codat cache for a company and data type                                                                                                                                                      | {<br/>"dataType": "string",<br/>"lastSuccessfulSync": "2022-01-01T13:00:00.000Z",<br/>"currentStatus": "string",<br/>"latestSyncId": "ad474a37-2003-478e-baee-9af9f1ec2fe3",<br/>"latestSuccessfulSyncId": "8220fc90-55b6-47bc-9417-48ac6ea93101"<br/>} |
| `commerceDisputes`                                                                                                                                                                                                              | [shared.DataStatus](../../../sdk/models/shared/datastatus.md)                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                              | Describes the state of data in the Codat cache for a company and data type                                                                                                                                                      | {<br/>"dataType": "string",<br/>"lastSuccessfulSync": "2022-01-01T13:00:00.000Z",<br/>"currentStatus": "string",<br/>"latestSyncId": "ad474a37-2003-478e-baee-9af9f1ec2fe3",<br/>"latestSuccessfulSyncId": "8220fc90-55b6-47bc-9417-48ac6ea93101"<br/>} |
| `commerceLocations`                                                                                                                                                                                                             | [shared.DataStatus](../../../sdk/models/shared/datastatus.md)                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                              | Describes the state of data in the Codat cache for a company and data type                                                                                                                                                      | {<br/>"dataType": "string",<br/>"lastSuccessfulSync": "2022-01-01T13:00:00.000Z",<br/>"currentStatus": "string",<br/>"latestSyncId": "ad474a37-2003-478e-baee-9af9f1ec2fe3",<br/>"latestSuccessfulSyncId": "8220fc90-55b6-47bc-9417-48ac6ea93101"<br/>} |
| `commerceOrders`                                                                                                                                                                                                                | [shared.DataStatus](../../../sdk/models/shared/datastatus.md)                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                              | Describes the state of data in the Codat cache for a company and data type                                                                                                                                                      | {<br/>"dataType": "string",<br/>"lastSuccessfulSync": "2022-01-01T13:00:00.000Z",<br/>"currentStatus": "string",<br/>"latestSyncId": "ad474a37-2003-478e-baee-9af9f1ec2fe3",<br/>"latestSuccessfulSyncId": "8220fc90-55b6-47bc-9417-48ac6ea93101"<br/>} |
| `commercePaymentMethods`                                                                                                                                                                                                        | [shared.DataStatus](../../../sdk/models/shared/datastatus.md)                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                              | Describes the state of data in the Codat cache for a company and data type                                                                                                                                                      | {<br/>"dataType": "string",<br/>"lastSuccessfulSync": "2022-01-01T13:00:00.000Z",<br/>"currentStatus": "string",<br/>"latestSyncId": "ad474a37-2003-478e-baee-9af9f1ec2fe3",<br/>"latestSuccessfulSyncId": "8220fc90-55b6-47bc-9417-48ac6ea93101"<br/>} |
| `commercePayments`                                                                                                                                                                                                              | [shared.DataStatus](../../../sdk/models/shared/datastatus.md)                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                              | Describes the state of data in the Codat cache for a company and data type                                                                                                                                                      | {<br/>"dataType": "string",<br/>"lastSuccessfulSync": "2022-01-01T13:00:00.000Z",<br/>"currentStatus": "string",<br/>"latestSyncId": "ad474a37-2003-478e-baee-9af9f1ec2fe3",<br/>"latestSuccessfulSyncId": "8220fc90-55b6-47bc-9417-48ac6ea93101"<br/>} |
| `commerceProductCategories`                                                                                                                                                                                                     | [shared.DataStatus](../../../sdk/models/shared/datastatus.md)                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                              | Describes the state of data in the Codat cache for a company and data type                                                                                                                                                      | {<br/>"dataType": "string",<br/>"lastSuccessfulSync": "2022-01-01T13:00:00.000Z",<br/>"currentStatus": "string",<br/>"latestSyncId": "ad474a37-2003-478e-baee-9af9f1ec2fe3",<br/>"latestSuccessfulSyncId": "8220fc90-55b6-47bc-9417-48ac6ea93101"<br/>} |
| `commerceProducts`                                                                                                                                                                                                              | [shared.DataStatus](../../../sdk/models/shared/datastatus.md)                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                              | Describes the state of data in the Codat cache for a company and data type                                                                                                                                                      | {<br/>"dataType": "string",<br/>"lastSuccessfulSync": "2022-01-01T13:00:00.000Z",<br/>"currentStatus": "string",<br/>"latestSyncId": "ad474a37-2003-478e-baee-9af9f1ec2fe3",<br/>"latestSuccessfulSyncId": "8220fc90-55b6-47bc-9417-48ac6ea93101"<br/>} |
| `commerceTaxComponents`                                                                                                                                                                                                         | [shared.DataStatus](../../../sdk/models/shared/datastatus.md)                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                              | Describes the state of data in the Codat cache for a company and data type                                                                                                                                                      | {<br/>"dataType": "string",<br/>"lastSuccessfulSync": "2022-01-01T13:00:00.000Z",<br/>"currentStatus": "string",<br/>"latestSyncId": "ad474a37-2003-478e-baee-9af9f1ec2fe3",<br/>"latestSuccessfulSyncId": "8220fc90-55b6-47bc-9417-48ac6ea93101"<br/>} |
| `commerceTransactions`                                                                                                                                                                                                          | [shared.DataStatus](../../../sdk/models/shared/datastatus.md)                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                              | Describes the state of data in the Codat cache for a company and data type                                                                                                                                                      | {<br/>"dataType": "string",<br/>"lastSuccessfulSync": "2022-01-01T13:00:00.000Z",<br/>"currentStatus": "string",<br/>"latestSyncId": "ad474a37-2003-478e-baee-9af9f1ec2fe3",<br/>"latestSuccessfulSyncId": "8220fc90-55b6-47bc-9417-48ac6ea93101"<br/>} |