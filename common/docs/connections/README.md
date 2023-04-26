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
import { CreateDataConnectionRequest, CreateDataConnectionResponse } from "@codat/common/dist/sdk/models/operations";
import { DataConnectionStatusEnum, SourceTypeEnum } from "@codat/common/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatCommon({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: CreateDataConnectionRequest = {
  requestBody: {
    platformKey: "molestiae",
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
};

sdk.connections.create(req).then((res: CreateDataConnectionResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
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
import { DeleteCompanyConnectionRequest, DeleteCompanyConnectionResponse } from "@codat/common/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new CodatCommon({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: DeleteCompanyConnectionRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
};

sdk.connections.delete(req).then((res: DeleteCompanyConnectionResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## get

Get a single connection for a company

### Example Usage

```typescript
import { CodatCommon } from "@codat/common";
import { GetCompanyConnectionRequest, GetCompanyConnectionResponse } from "@codat/common/dist/sdk/models/operations";
import { DataConnectionStatusEnum, SourceTypeEnum } from "@codat/common/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatCommon({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: GetCompanyConnectionRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
};

sdk.connections.get(req).then((res: GetCompanyConnectionResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## list

List the connections for a company

### Example Usage

```typescript
import { CodatCommon } from "@codat/common";
import { ListCompanyConnectionsRequest, ListCompanyConnectionsResponse } from "@codat/common/dist/sdk/models/operations";
import { DataConnectionStatusEnum, SourceTypeEnum } from "@codat/common/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatCommon({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: ListCompanyConnectionsRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  orderBy: "-modifiedDate",
  page: 1,
  pageSize: 100,
  query: "minus",
};

sdk.connections.list(req).then((res: ListCompanyConnectionsResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## unlinkConnection

This allows you to deauthorize a connection, without deleting it from Codat. This means you can still view any data that has previously been pulled into Codat, and also lets you re-authorize in future if your customer wishes to resume sharing their data.

### Example Usage

```typescript
import { CodatCommon } from "@codat/common";
import { UnlinkConnectionRequest, UnlinkConnectionResponse } from "@codat/common/dist/sdk/models/operations";
import { DataConnectionStatusEnum, SourceTypeEnum } from "@codat/common/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatCommon({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: UnlinkConnectionRequest = {
  requestBody: {
    status: "placeat",
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
};

sdk.connections.unlinkConnection(req).then((res: UnlinkConnectionResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## updateAuthorization

Update data connection's authorization.

### Example Usage

```typescript
import { CodatCommon } from "@codat/common";
import { UpdateConnectionAuthorizationRequest, UpdateConnectionAuthorizationResponse } from "@codat/common/dist/sdk/models/operations";
import { DataConnectionStatusEnum, SourceTypeEnum } from "@codat/common/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatCommon({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: UpdateConnectionAuthorizationRequest = {
  requestBody: {
    "iusto": "excepturi",
    "nisi": "recusandae",
    "temporibus": "ab",
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
};

sdk.connections.updateAuthorization(req).then((res: UpdateConnectionAuthorizationResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```
