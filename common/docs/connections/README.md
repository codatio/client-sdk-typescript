# connections

## Overview

Manage your companies' data connections.

### Available Operations

* [create](#create) - Create connection
* [delete](#delete) - Delete connection
* [get](#get) - Get connection
* [list](#list) - List connections
* [unlinkConnection](#unlinkconnection) - Unlink connection
* [updateAuthorization](#updateauthorization) - Update authorization

## create

Create a data connection for a company

### Example Usage

```typescript
import { CodatCommon } from "@codat/common";
import { CreateDataConnectionResponse } from "@codat/common/dist/sdk/models/operations";
import { DataConnectionStatusEnum, SourceTypeEnum } from "@codat/common/dist/sdk/models/shared";

const sdk = new CodatCommon({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.connections.create({
  requestBody: {
    platformKey: "molestiae",
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
import { CodatCommon } from "@codat/common";
import { DeleteCompanyConnectionResponse } from "@codat/common/dist/sdk/models/operations";

const sdk = new CodatCommon({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
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
import { CodatCommon } from "@codat/common";
import { GetCompanyConnectionResponse } from "@codat/common/dist/sdk/models/operations";
import { DataConnectionStatusEnum, SourceTypeEnum } from "@codat/common/dist/sdk/models/shared";

const sdk = new CodatCommon({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
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
import { CodatCommon } from "@codat/common";
import { ListCompanyConnectionsResponse } from "@codat/common/dist/sdk/models/operations";
import { DataConnectionStatusEnum, SourceTypeEnum } from "@codat/common/dist/sdk/models/shared";

const sdk = new CodatCommon({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.connections.list({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  orderBy: "-modifiedDate",
  page: 1,
  pageSize: 100,
  query: "minus",
}).then((res: ListCompanyConnectionsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## unlinkConnection

This allows you to deauthorize a connection, without deleting it from Codat. This means you can still view any data that has previously been pulled into Codat, and also lets you re-authorize in future if your customer wishes to resume sharing their data.

### Example Usage

```typescript
import { CodatCommon } from "@codat/common";
import { UnlinkConnectionResponse } from "@codat/common/dist/sdk/models/operations";
import { DataConnectionStatusEnum, SourceTypeEnum } from "@codat/common/dist/sdk/models/shared";

const sdk = new CodatCommon({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.connections.unlinkConnection({
  requestBody: {
    status: "placeat",
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
}).then((res: UnlinkConnectionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## updateAuthorization

Update data connection's authorization.

### Example Usage

```typescript
import { CodatCommon } from "@codat/common";
import { UpdateConnectionAuthorizationResponse } from "@codat/common/dist/sdk/models/operations";
import { DataConnectionStatusEnum, SourceTypeEnum } from "@codat/common/dist/sdk/models/shared";

const sdk = new CodatCommon({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.connections.updateAuthorization({
  requestBody: {
    "iusto": "excepturi",
    "nisi": "recusandae",
    "temporibus": "ab",
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
}).then((res: UpdateConnectionAuthorizationResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
