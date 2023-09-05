# manageData

## Overview

Asynchronously retrieve data from an integration to refresh data in Codat.

### Available Operations

* [getDataStatus](#getdatastatus) - Get data status
* [getPullOperation](#getpulloperation) - Get pull operation
* [getPushOperation](#getpushoperation) - Get push operation
* [list](#list) - List push operations
* [listPullOperations](#listpulloperations) - List pull operations
* [refreshAllDataTypes](#refreshalldatatypes) - Refresh all data
* [refreshDataType](#refreshdatatype) - Refresh data type

## getDataStatus

Get the state of each data type for a company

### Example Usage

```typescript
import { CodatSyncPayroll } from "@codat/sync-for-payroll";
import { GetDataStatusResponse } from "@codat/sync-for-payroll/dist/sdk/models/operations";

const sdk = new CodatSyncPayroll({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.manageData.getDataStatus({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
}).then((res: GetDataStatusResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.GetDataStatusRequest](../../models/operations/getdatastatusrequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `retries`                                                                          | [utils.RetryConfig](../../models/utils/retryconfig.md)                             | :heavy_minus_sign:                                                                 | Configuration to override the default retry behavior of the client.                |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.GetDataStatusResponse](../../models/operations/getdatastatusresponse.md)>**


## getPullOperation

Retrieve information about a single dataset or pull operation.

### Example Usage

```typescript
import { CodatSyncPayroll } from "@codat/sync-for-payroll";
import { GetPullOperationResponse } from "@codat/sync-for-payroll/dist/sdk/models/operations";

const sdk = new CodatSyncPayroll({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.manageData.getPullOperation({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  datasetId: "eaed9f0f-e77b-4bc9-a58f-ab8b4b99ab18",
}).then((res: GetPullOperationResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.GetPullOperationRequest](../../models/operations/getpulloperationrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `retries`                                                                                | [utils.RetryConfig](../../models/utils/retryconfig.md)                                   | :heavy_minus_sign:                                                                       | Configuration to override the default retry behavior of the client.                      |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.GetPullOperationResponse](../../models/operations/getpulloperationresponse.md)>**


## getPushOperation

Retrieve push operation.

### Example Usage

```typescript
import { CodatSyncPayroll } from "@codat/sync-for-payroll";
import { GetPushOperationResponse } from "@codat/sync-for-payroll/dist/sdk/models/operations";

const sdk = new CodatSyncPayroll({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.manageData.getPushOperation({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  pushOperationKey: "25870532-02c7-43d5-be9b-90c28909b3fe",
}).then((res: GetPushOperationResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.GetPushOperationRequest](../../models/operations/getpushoperationrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `retries`                                                                                | [utils.RetryConfig](../../models/utils/retryconfig.md)                                   | :heavy_minus_sign:                                                                       | Configuration to override the default retry behavior of the client.                      |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.GetPushOperationResponse](../../models/operations/getpushoperationresponse.md)>**


## list

List push operation records.

### Example Usage

```typescript
import { CodatSyncPayroll } from "@codat/sync-for-payroll";
import { ListPushOperationsResponse } from "@codat/sync-for-payroll/dist/sdk/models/operations";

const sdk = new CodatSyncPayroll({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.manageData.list({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  orderBy: "-modifiedDate",
  page: 1,
  pageSize: 100,
  query: "modi",
}).then((res: ListPushOperationsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.ListPushOperationsRequest](../../models/operations/listpushoperationsrequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `retries`                                                                                    | [utils.RetryConfig](../../models/utils/retryconfig.md)                                       | :heavy_minus_sign:                                                                           | Configuration to override the default retry behavior of the client.                          |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.ListPushOperationsResponse](../../models/operations/listpushoperationsresponse.md)>**


## listPullOperations

Gets the pull operation history (datasets) for a given company.

### Example Usage

```typescript
import { CodatSyncPayroll } from "@codat/sync-for-payroll";
import { ListPullOperationsResponse } from "@codat/sync-for-payroll/dist/sdk/models/operations";

const sdk = new CodatSyncPayroll({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.manageData.listPullOperations({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  orderBy: "-modifiedDate",
  page: 1,
  pageSize: 100,
  query: "iste",
}).then((res: ListPullOperationsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.ListPullOperationsRequest](../../models/operations/listpulloperationsrequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `retries`                                                                                    | [utils.RetryConfig](../../models/utils/retryconfig.md)                                       | :heavy_minus_sign:                                                                           | Configuration to override the default retry behavior of the client.                          |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.ListPullOperationsResponse](../../models/operations/listpulloperationsresponse.md)>**


## refreshAllDataTypes

Refreshes all data types with `fetch on first link` set to `true` for a given company.

This is an asynchronous operation, and will bring updated data into Codat from the linked integration for you to view.

[Read more](https://docs.codat.io/core-concepts/data-type-settings) about data type settings and `fetch on first link`.

### Example Usage

```typescript
import { CodatSyncPayroll } from "@codat/sync-for-payroll";
import { RefreshAllDataTypesResponse } from "@codat/sync-for-payroll/dist/sdk/models/operations";

const sdk = new CodatSyncPayroll({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.manageData.refreshAllDataTypes({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
}).then((res: RefreshAllDataTypesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.RefreshAllDataTypesRequest](../../models/operations/refreshalldatatypesrequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `retries`                                                                                      | [utils.RetryConfig](../../models/utils/retryconfig.md)                                         | :heavy_minus_sign:                                                                             | Configuration to override the default retry behavior of the client.                            |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.RefreshAllDataTypesResponse](../../models/operations/refreshalldatatypesresponse.md)>**


## refreshDataType

Refreshes a given data type for a given company.

This is an asynchronous operation, and will bring updated data into Codat from the linked integration for you to view.

### Example Usage

```typescript
import { CodatSyncPayroll } from "@codat/sync-for-payroll";
import { RefreshDataTypeResponse } from "@codat/sync-for-payroll/dist/sdk/models/operations";
import { DataType } from "@codat/sync-for-payroll/dist/sdk/models/shared";

const sdk = new CodatSyncPayroll({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.manageData.refreshDataType({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "a8d9cbf4-8633-4323-b9b7-7f3a4100674e",
  dataType: DataType.Invoices,
}).then((res: RefreshDataTypeResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.RefreshDataTypeRequest](../../models/operations/refreshdatatyperequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `retries`                                                                              | [utils.RetryConfig](../../models/utils/retryconfig.md)                                 | :heavy_minus_sign:                                                                     | Configuration to override the default retry behavior of the client.                    |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.RefreshDataTypeResponse](../../models/operations/refreshdatatyperesponse.md)>**

