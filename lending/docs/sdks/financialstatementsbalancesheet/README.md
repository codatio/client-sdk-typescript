# FinancialStatements.BalanceSheet

### Available Operations

* [get](#get) - Get balance sheet
* [getCategorizedAccounts](#getcategorizedaccounts) - Get categorized balance sheet statement

## get

Gets the latest balance sheet for a company.

### Example Usage

```typescript
import { CodatLending } from "@codat/lending";
import { GetAccountingBalanceSheetResponse } from "@codat/lending/dist/sdk/models/operations";

const sdk = new CodatLending({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.financialStatements.balanceSheet.get({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  periodLength: 4,
  periodsToCompare: 20,
  startMonth: "2022-10-23T00:00:00.000Z",
}).then((res: GetAccountingBalanceSheetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                  | [operations.GetAccountingBalanceSheetRequest](../../models/operations/getaccountingbalancesheetrequest.md) | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `retries`                                                                                                  | [utils.RetryConfig](../../models/utils/retryconfig.md)                                                     | :heavy_minus_sign:                                                                                         | Configuration to override the default retry behavior of the client.                                        |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.GetAccountingBalanceSheetResponse](../../models/operations/getaccountingbalancesheetresponse.md)>**


## getCategorizedAccounts

The *Get categorized balance sheet statement* endpoint returns a list of categorized accounts that appear on a company’s Balance Sheet along with a balance per financial statement date.

Codat suggests a category for each account automatically, but you can [change it](https://docs.codat.io/lending/enhanced-financials/overview#categorize-accounts) to a more suitable one.

### Example Usage

```typescript
import { CodatLending } from "@codat/lending";
import { GetCategorizedBalanceSheetStatementResponse } from "@codat/lending/dist/sdk/models/operations";

const sdk = new CodatLending({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.financialStatements.balanceSheet.getCategorizedAccounts({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  numberOfPeriods: 135218,
  reportDate: "29-09-2020",
}).then((res: GetCategorizedBalanceSheetStatementResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                      | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                      | [operations.GetCategorizedBalanceSheetStatementRequest](../../models/operations/getcategorizedbalancesheetstatementrequest.md) | :heavy_check_mark:                                                                                                             | The request object to use for the request.                                                                                     |
| `retries`                                                                                                                      | [utils.RetryConfig](../../models/utils/retryconfig.md)                                                                         | :heavy_minus_sign:                                                                                                             | Configuration to override the default retry behavior of the client.                                                            |
| `config`                                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                   | :heavy_minus_sign:                                                                                                             | Available config options for making requests.                                                                                  |


### Response

**Promise<[operations.GetCategorizedBalanceSheetStatementResponse](../../models/operations/getcategorizedbalancesheetstatementresponse.md)>**

