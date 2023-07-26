# connections

## Overview

Manage your companies' data connections.

### Available Operations

* [create](#create) - Create connection
* [delete](#delete) - Delete connection
* [get](#get) - Get connection
* [list](#list) - List connections
* [proxy](#proxy) - Proxy
* [unlinkConnection](#unlinkconnection) - Unlink connection

## create

﻿Creates a connection for the company by providing a valid `platformKey`. 

Use the [List Integrations](https://docs.codat.io/codat-api#/operations/list-integrations) endpoint to access valid platform keys. 

### Example Usage

```typescript
import { CodatBankFeeds } from "@codat/bank-feeds";
import { CreateDataConnectionResponse } from "@codat/bank-feeds/dist/sdk/models/operations";

const sdk = new CodatBankFeeds({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.connections.create({
  requestBody: {
    platformKey: "ad",
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
}).then((res: CreateDataConnectionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.CreateDataConnectionRequest](../../models/operations/createdataconnectionrequest.md) | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `retries`                                                                                        | [utils.RetryConfig](../../models/utils/retryconfig.md)                                           | :heavy_minus_sign:                                                                               | Configuration to override the default retry behavior of the client.                              |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.CreateDataConnectionResponse](../../models/operations/createdataconnectionresponse.md)>**


## delete

﻿Revoke and remove a connection from a company.
This operation is not reversible. The end user would need to reauthorize a new data connection if you wish to view new data for this company.

### Example Usage

```typescript
import { CodatBankFeeds } from "@codat/bank-feeds";
import { DeleteCompanyConnectionResponse } from "@codat/bank-feeds/dist/sdk/models/operations";

const sdk = new CodatBankFeeds({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.connections.delete({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
}).then((res: DeleteCompanyConnectionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `request`                                                                                              | [operations.DeleteCompanyConnectionRequest](../../models/operations/deletecompanyconnectionrequest.md) | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `retries`                                                                                              | [utils.RetryConfig](../../models/utils/retryconfig.md)                                                 | :heavy_minus_sign:                                                                                     | Configuration to override the default retry behavior of the client.                                    |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.DeleteCompanyConnectionResponse](../../models/operations/deletecompanyconnectionresponse.md)>**


## get

﻿Returns a specific connection for a company when valid identifiers are provided. If the identifiers are for a deleted company and/or connection, a not found response is returned.

### Example Usage

```typescript
import { CodatBankFeeds } from "@codat/bank-feeds";
import { GetCompanyConnectionResponse } from "@codat/bank-feeds/dist/sdk/models/operations";

const sdk = new CodatBankFeeds({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.connections.get({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
}).then((res: GetCompanyConnectionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.GetCompanyConnectionRequest](../../models/operations/getcompanyconnectionrequest.md) | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `retries`                                                                                        | [utils.RetryConfig](../../models/utils/retryconfig.md)                                           | :heavy_minus_sign:                                                                               | Configuration to override the default retry behavior of the client.                              |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.GetCompanyConnectionResponse](../../models/operations/getcompanyconnectionresponse.md)>**


## list

﻿List the connections for a company.

### Example Usage

```typescript
import { CodatBankFeeds } from "@codat/bank-feeds";
import { ListCompanyConnectionsResponse } from "@codat/bank-feeds/dist/sdk/models/operations";

const sdk = new CodatBankFeeds({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.connections.list({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  orderBy: "-modifiedDate",
  page: 1,
  pageSize: 100,
  query: "eum",
}).then((res: ListCompanyConnectionsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.ListCompanyConnectionsRequest](../../models/operations/listcompanyconnectionsrequest.md) | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `retries`                                                                                            | [utils.RetryConfig](../../models/utils/retryconfig.md)                                               | :heavy_minus_sign:                                                                                   | Configuration to override the default retry behavior of the client.                                  |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.ListCompanyConnectionsResponse](../../models/operations/listcompanyconnectionsresponse.md)>**


## proxy

﻿The *Proxy* endpoint can be used to generate credentials from QuickBooks Online for authentication of the Bank Feed in their portal.

See the example provided for the `endpoint` query parameter when generating credentials for QuickBooks Online.

### Example Usage

```typescript
import { CodatBankFeeds } from "@codat/bank-feeds";
import { ProxyResponse } from "@codat/bank-feeds/dist/sdk/models/operations";

const sdk = new CodatBankFeeds({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.connections.proxy({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  endpoint: "generatecredentials?dataconnectionid={connectionId}",
}).then((res: ProxyResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `request`                                                           | [operations.ProxyRequest](../../models/operations/proxyrequest.md)  | :heavy_check_mark:                                                  | The request object to use for the request.                          |
| `retries`                                                           | [utils.RetryConfig](../../models/utils/retryconfig.md)              | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |
| `config`                                                            | [AxiosRequestConfig](https://axios-http.com/docs/req_config)        | :heavy_minus_sign:                                                  | Available config options for making requests.                       |


### Response

**Promise<[operations.ProxyResponse](../../models/operations/proxyresponse.md)>**


## unlinkConnection

﻿This allows you to deauthorize a connection, without deleting it from Codat. This means you can still view any data that has previously been pulled into Codat, and also lets you re-authorize in future if your customer wishes to resume sharing their data.

### Example Usage

```typescript
import { CodatBankFeeds } from "@codat/bank-feeds";
import { UnlinkConnectionResponse } from "@codat/bank-feeds/dist/sdk/models/operations";

const sdk = new CodatBankFeeds({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.connections.unlinkConnection({
  requestBody: {
    status: "dolor",
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
}).then((res: UnlinkConnectionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.UnlinkConnectionRequest](../../models/operations/unlinkconnectionrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `retries`                                                                                | [utils.RetryConfig](../../models/utils/retryconfig.md)                                   | :heavy_minus_sign:                                                                       | Configuration to override the default retry behavior of the client.                      |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.UnlinkConnectionResponse](../../models/operations/unlinkconnectionresponse.md)>**

