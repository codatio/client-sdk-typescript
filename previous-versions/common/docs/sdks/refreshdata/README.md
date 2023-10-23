# RefreshData
(*refreshData*)

## Overview

Asynchronously retrieve data from an integration to refresh data in Codat.

### Available Operations

* [all](#all) - Refresh all data
* [byDataType](#bydatatype) - Refresh data type
* [get](#get) - Get data status
* [getPullOperation](#getpulloperation) - Get pull operation
* [listPullOperations](#listpulloperations) - List pull operations

## all

Refreshes all data types with `fetch on first link` set to `true` for a given company.

This is an asynchronous operation, and will bring updated data into Codat from the linked integration for you to view.

[Read more](https://docs.codat.io/core-concepts/data-type-settings) about data type settings and `fetch on first link`.

### Example Usage

```typescript
import { CodatCommon } from "@codat/common";

(async() => {
  const sdk = new CodatCommon({
    security: {
      authHeader: "",
    },
  });

  const res = await sdk.refreshData.all({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.RefreshCompanyDataRequest](../../models/operations/refreshcompanydatarequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `retries`                                                                                    | [utils.RetryConfig](../../models/utils/retryconfig.md)                                       | :heavy_minus_sign:                                                                           | Configuration to override the default retry behavior of the client.                          |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.RefreshCompanyDataResponse](../../models/operations/refreshcompanydataresponse.md)>**


## byDataType

Refreshes a given data type for a given company.

This is an asynchronous operation, and will bring updated data into Codat from the linked integration for you to view.

### Example Usage

```typescript
import { CodatCommon } from "@codat/common";
import { DataType } from "@codat/common/dist/sdk/models/shared";

(async() => {
  const sdk = new CodatCommon({
    security: {
      authHeader: "",
    },
  });

  const res = await sdk.refreshData.byDataType({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    dataType: DataType.Invoices,
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.RefreshDataTypeRequest](../../models/operations/refreshdatatyperequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `retries`                                                                              | [utils.RetryConfig](../../models/utils/retryconfig.md)                                 | :heavy_minus_sign:                                                                     | Configuration to override the default retry behavior of the client.                    |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.RefreshDataTypeResponse](../../models/operations/refreshdatatyperesponse.md)>**


## get

Get the state of each data type for a company

### Example Usage

```typescript
import { CodatCommon } from "@codat/common";

(async() => {
  const sdk = new CodatCommon({
    security: {
      authHeader: "",
    },
  });

  const res = await sdk.refreshData.get({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.GetCompanyDataStatusRequest](../../models/operations/getcompanydatastatusrequest.md) | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `retries`                                                                                        | [utils.RetryConfig](../../models/utils/retryconfig.md)                                           | :heavy_minus_sign:                                                                               | Configuration to override the default retry behavior of the client.                              |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.GetCompanyDataStatusResponse](../../models/operations/getcompanydatastatusresponse.md)>**


## getPullOperation

Retrieve information about a single dataset or pull operation.

### Example Usage

```typescript
import { CodatCommon } from "@codat/common";

(async() => {
  const sdk = new CodatCommon({
    security: {
      authHeader: "",
    },
  });

  const res = await sdk.refreshData.getPullOperation({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    datasetId: "7911a54a-c808-4f4b-b87e-b195f52b4da5",
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


## listPullOperations

﻿The *List pull operations* endpoint returns a list of [pull operations](https://docs.codat.io/platform-api#/schemas/PullOperation) made by your client.

A [pull operation](https://docs.codat.io/platform-api#/schemas/PullOperation) is a request to retrieve a specific data type from an integration.

### Tips and traps

- The *List pull operations* endpoint does not support querying the `isCompleted` property. You can filter failed pull operations by querying `status!=Complete&&status!=NotSupported` instead.



### Example Usage

```typescript
import { CodatCommon } from "@codat/common";

(async() => {
  const sdk = new CodatCommon({
    security: {
      authHeader: "",
    },
  });

  const res = await sdk.refreshData.listPullOperations({
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

