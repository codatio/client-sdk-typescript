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

Create a data connection for a company

### Example Usage

```typescript
import { CodatBankFeeds } from "@codat/bank-feeds";
import { CreateDataConnectionResponse } from "@codat/bank-feeds/dist/sdk/models/operations";
import { ConnectionSourceType, DataConnectionStatus } from "@codat/bank-feeds/dist/sdk/models/shared";

const sdk = new CodatBankFeeds({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.connections.create({
  requestBody: {
    platformKey: "excepturi",
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
}).then((res: CreateDataConnectionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## delete

Revoke and remove a connection from a company.
This operation is not reversible - the end user would need to reauthorize a new data connection if you wish to view new data for this company.

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

## get

Get a single connection for a company

### Example Usage

```typescript
import { CodatBankFeeds } from "@codat/bank-feeds";
import { GetCompanyConnectionResponse } from "@codat/bank-feeds/dist/sdk/models/operations";
import { ConnectionSourceType, DataConnectionStatus } from "@codat/bank-feeds/dist/sdk/models/shared";

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

## list

List the connections for a company

### Example Usage

```typescript
import { CodatBankFeeds } from "@codat/bank-feeds";
import { ListCompanyConnectionsResponse } from "@codat/bank-feeds/dist/sdk/models/operations";
import { ConnectionSourceType, DataConnectionStatus } from "@codat/bank-feeds/dist/sdk/models/shared";

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
  query: "pariatur",
}).then((res: ListCompanyConnectionsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## proxy

A proxy or passthrough endpoint used to query unsupported third party endpoints.

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

## unlinkConnection

This allows you to deauthorize a connection, without deleting it from Codat. This means you can still view any data that has previously been pulled into Codat, and also lets you re-authorize in future if your customer wishes to resume sharing their data.

### Example Usage

```typescript
import { CodatBankFeeds } from "@codat/bank-feeds";
import { UnlinkConnectionResponse } from "@codat/bank-feeds/dist/sdk/models/operations";
import { ConnectionSourceType, DataConnectionStatus } from "@codat/bank-feeds/dist/sdk/models/shared";

const sdk = new CodatBankFeeds({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.connections.unlinkConnection({
  requestBody: {
    status: "modi",
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
}).then((res: UnlinkConnectionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```