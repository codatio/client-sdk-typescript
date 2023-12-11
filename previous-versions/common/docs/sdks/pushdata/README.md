# PushData
(*pushData*)

## Overview

View push options and get push statuses.

### Available Operations

* [getModelOptions](#getmodeloptions) - Get push options
* [getOperation](#getoperation) - Get push operation
* [listOperations](#listoperations) - List push operations

## getModelOptions

This is the generic documentation for creation and updating of data. See the equivalent endpoint for a given data type for more specific information. 

Before pushing data into accounting software, it is often necessary to collect some details from the user as to how they would like the data to be inserted. This includes names and amounts on transactional entities, but also factors such as categorisation of entities, which is often handled differently between different accounting packages. A good example of this is specifying where on the balance sheet/profit and loss reports the user would like a newly-created nominal account to appear.

Codat tries not to limit users to pushing to a very limited number of standard categories, so we have implemented "options" endpoints, which allow us to expose to our clients the fields which are required to be pushed for a specific linked company, and the options which may be selected for each field.


> **Supported Integrations**
> 
> Check out our [coverage explorer](https://knowledge.codat.io/) for integrations that support push (POST/PUT methods).

### Example Usage

```typescript
import { CodatCommon } from "@codat/common";
import { SchemaDataType } from "@codat/common/dist/sdk/models/shared";

async function run() {
  const sdk = new CodatCommon({
    security: {
      authHeader: "",
    },
  });

  const res = await sdk.pushData.getModelOptions({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
    dataType: SchemaDataType.Invoices,
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                                              | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                              | [operations.GetCreateUpdateModelOptionsByDataTypeRequest](../../sdk/models/operations/getcreateupdatemodeloptionsbydatatyperequest.md) | :heavy_check_mark:                                                                                                                     | The request object to use for the request.                                                                                             |
| `retries`                                                                                                                              | [utils.RetryConfig](../../internal/utils/retryconfig.md)                                                                               | :heavy_minus_sign:                                                                                                                     | Configuration to override the default retry behavior of the client.                                                                    |
| `config`                                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                           | :heavy_minus_sign:                                                                                                                     | Available config options for making requests.                                                                                          |


### Response

**Promise<[operations.GetCreateUpdateModelOptionsByDataTypeResponse](../../sdk/models/operations/getcreateupdatemodeloptionsbydatatyperesponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getOperation

Retrieve push operation.

### Example Usage

```typescript
import { CodatCommon } from "@codat/common";

async function run() {
  const sdk = new CodatCommon({
    security: {
      authHeader: "",
    },
  });

  const res = await sdk.pushData.getOperation({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    pushOperationKey: "59acd79e-29d3-4138-91d3-91d4641bf7ed",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.GetPushOperationRequest](../../sdk/models/operations/getpushoperationrequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `retries`                                                                                    | [utils.RetryConfig](../../internal/utils/retryconfig.md)                                     | :heavy_minus_sign:                                                                           | Configuration to override the default retry behavior of the client.                          |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.GetPushOperationResponse](../../sdk/models/operations/getpushoperationresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## listOperations

List push operation records.

### Example Usage

```typescript
import { CodatCommon } from "@codat/common";

async function run() {
  const sdk = new CodatCommon({
    security: {
      authHeader: "",
    },
  });

  const res = await sdk.pushData.listOperations({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    orderBy: "-modifiedDate",
    page: 1,
    pageSize: 100,
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `request`                                                                                              | [operations.GetCompanyPushHistoryRequest](../../sdk/models/operations/getcompanypushhistoryrequest.md) | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `retries`                                                                                              | [utils.RetryConfig](../../internal/utils/retryconfig.md)                                               | :heavy_minus_sign:                                                                                     | Configuration to override the default retry behavior of the client.                                    |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.GetCompanyPushHistoryResponse](../../sdk/models/operations/getcompanypushhistoryresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |
