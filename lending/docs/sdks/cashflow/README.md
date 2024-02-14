# CashFlow
(*financialStatements.cashFlow*)

### Available Operations

* [get](#get) - Get cash flow statement

## get

Gets the latest cash flow statement for a company.

### Example Usage

```typescript
import { CodatLending } from "@codat/lending";

async function run() {
  const sdk = new CodatLending({
    security: {
      authHeader: "Basic BASE_64_ENCODED(API_KEY)",
    },
  });

  const res = await sdk.financialStatements.cashFlow.get({
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

| Parameter                                                                                                                | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                | [operations.GetAccountingCashFlowStatementRequest](../../sdk/models/operations/getaccountingcashflowstatementrequest.md) | :heavy_check_mark:                                                                                                       | The request object to use for the request.                                                                               |
| `retries`                                                                                                                | [utils.RetryConfig](../../internal/utils/retryconfig.md)                                                                 | :heavy_minus_sign:                                                                                                       | Configuration to override the default retry behavior of the client.                                                      |
| `config`                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                             | :heavy_minus_sign:                                                                                                       | Available config options for making requests.                                                                            |


### Response

**Promise<[operations.GetAccountingCashFlowStatementResponse](../../sdk/models/operations/getaccountingcashflowstatementresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
