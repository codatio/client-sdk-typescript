# connections

## Overview

Create and manage partner expense connection.

### Available Operations

* [createPartnerExpenseConnection](#createpartnerexpenseconnection) - Create Partner Expense connection

## createPartnerExpenseConnection

Creates a Partner Expense data connection

### Example Usage

```typescript
import { CodatSyncExpenses } from "@codat/sync-for-expenses";
import { CreatePartnerExpenseConnectionResponse } from "@codat/sync-for-expenses/dist/sdk/models/operations";
import { DataConnectionSourceType, DataConnectionStatus } from "@codat/sync-for-expenses/dist/sdk/models/shared";

const sdk = new CodatSyncExpenses({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.connections.createPartnerExpenseConnection({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
}).then((res: CreatePartnerExpenseConnectionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                            | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                            | [operations.CreatePartnerExpenseConnectionRequest](../../models/operations/createpartnerexpenseconnectionrequest.md) | :heavy_check_mark:                                                                                                   | The request object to use for the request.                                                                           |
| `retries`                                                                                                            | [utils.RetryConfig](../../models/utils/retryconfig.md)                                                               | :heavy_minus_sign:                                                                                                   | Configuration to override the default retry behavior of the client.                                                  |
| `config`                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                         | :heavy_minus_sign:                                                                                                   | Available config options for making requests.                                                                        |


### Response

**Promise<[operations.CreatePartnerExpenseConnectionResponse](../../models/operations/createpartnerexpenseconnectionresponse.md)>**

