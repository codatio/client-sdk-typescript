# ProfitAndLoss
(*financialStatements.profitAndLoss*)

### Available Operations

* [get](#get) - Get profit and loss
* [getCategorizedAccounts](#getcategorizedaccounts) - Get categorized profit and loss statement

## get

Gets the latest profit and loss for a company.

### Example Usage

```typescript
import { CodatLending } from "@codat/lending";

async function run() {
  const sdk = new CodatLending({
    security: {
      authHeader: "Basic BASE_64_ENCODED(API_KEY)",
    },
  });

  const res = await sdk.financialStatements.profitAndLoss.get({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    periodLength: 4,
    periodsToCompare: 20,
    startMonth: "2022-10-23T00:00:00Z",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                        | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                        | [operations.GetAccountingProfitAndLossRequest](../../sdk/models/operations/getaccountingprofitandlossrequest.md) | :heavy_check_mark:                                                                                               | The request object to use for the request.                                                                       |
| `retries`                                                                                                        | [utils.RetryConfig](../../internal/utils/retryconfig.md)                                                         | :heavy_minus_sign:                                                                                               | Configuration to override the default retry behavior of the client.                                              |
| `config`                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                     | :heavy_minus_sign:                                                                                               | Available config options for making requests.                                                                    |


### Response

**Promise<[operations.GetAccountingProfitAndLossResponse](../../sdk/models/operations/getaccountingprofitandlossresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getCategorizedAccounts

The *Get categorized profit and loss statement* endpoint returns a list of categorized accounts that appear on a company’s Profit and Loss statement. It also includes a balance as of the financial statement date.

Codat suggests a category for each account automatically, but you can [change it](https://docs.codat.io/lending/enhanced-financials/overview#categorize-accounts) to a more suitable one.

### Example Usage

```typescript
import { CodatLending } from "@codat/lending";

async function run() {
  const sdk = new CodatLending({
    security: {
      authHeader: "Basic BASE_64_ENCODED(API_KEY)",
    },
  });

  const res = await sdk.financialStatements.profitAndLoss.getCategorizedAccounts({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    reportDate: "29-09-2020",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                                            | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                            | [operations.GetCategorizedProfitAndLossStatementRequest](../../sdk/models/operations/getcategorizedprofitandlossstatementrequest.md) | :heavy_check_mark:                                                                                                                   | The request object to use for the request.                                                                                           |
| `retries`                                                                                                                            | [utils.RetryConfig](../../internal/utils/retryconfig.md)                                                                             | :heavy_minus_sign:                                                                                                                   | Configuration to override the default retry behavior of the client.                                                                  |
| `config`                                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                         | :heavy_minus_sign:                                                                                                                   | Available config options for making requests.                                                                                        |


### Response

**Promise<[operations.GetCategorizedProfitAndLossStatementResponse](../../sdk/models/operations/getcategorizedprofitandlossstatementresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |
