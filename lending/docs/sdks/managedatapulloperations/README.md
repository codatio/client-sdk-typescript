# ManageDataPullOperations
(*manageData.pullOperations*)

### Available Operations

* [get](#get) - Get pull operation
* [list](#list) - List pull operations

## get

Retrieve information about a single dataset or pull operation.

### Example Usage

```typescript
import { CodatLending } from "@codat/lending";

(async() => {
  const sdk = new CodatLending({
    security: {
      authHeader: "Basic BASE_64_ENCODED(API_KEY)",
    },
  });

  const res = await sdk.manageData.pullOperations.get({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    datasetId: "b18d8d81-fd7b-4764-a31e-475cb1f36591",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.GetPullOperationRequest](../../models/operations/getpulloperationrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `retries`                                                                                | [utils.RetryConfig](../../models/utils/retryconfig.md)                                   | :heavy_minus_sign:                                                                       | Configuration to override the default retry behavior of the client.                      |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.GetPullOperationResponse](../../models/operations/getpulloperationresponse.md)>**


## list

﻿The *List pull operations* endpoint returns a list of [pull operations](https://docs.codat.io/lending-api#/schemas/PullOperation) made by your client.

A [pull operation](https://docs.codat.io/lending-api#/schemas/PullOperation) is a request to retrieve a specific data type from an integration.

### Tips and traps

- The *List pull operations* endpoint does not support querying the `isCompleted` property. You can filter failed pull operations by querying `status!=Complete&&status!=NotSupported` instead.



### Example Usage

```typescript
import { CodatLending } from "@codat/lending";

(async() => {
  const sdk = new CodatLending({
    security: {
      authHeader: "Basic BASE_64_ENCODED(API_KEY)",
    },
  });

  const res = await sdk.manageData.pullOperations.list({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    orderBy: "-modifiedDate",
    page: 1,
    pageSize: 100,
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.ListPullOperationsRequest](../../models/operations/listpulloperationsrequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `retries`                                                                                    | [utils.RetryConfig](../../models/utils/retryconfig.md)                                       | :heavy_minus_sign:                                                                           | Configuration to override the default retry behavior of the client.                          |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.ListPullOperationsResponse](../../models/operations/listpulloperationsresponse.md)>**

