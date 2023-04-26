# connections

## Overview

Manage your companies' data connections.

### Available Operations

* [createDataConnection](#createdataconnection) - Create connection
* [deleteCompanyConnection](#deletecompanyconnection) - Delete connection
* [getCompanyConnection](#getcompanyconnection) - Get connection
* [listCompanyConnections](#listcompanyconnections) - List connections
* [unlinkCompanyConnection](#unlinkcompanyconnection) - Unlink connection
* [updateConnectionAuthorization](#updateconnectionauthorization) - Update authorization

## createDataConnection

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

sdk.connections.createDataConnection(req).then((res: CreateDataConnectionResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## deleteCompanyConnection

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

sdk.connections.deleteCompanyConnection(req).then((res: DeleteCompanyConnectionResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## getCompanyConnection

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

sdk.connections.getCompanyConnection(req).then((res: GetCompanyConnectionResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## listCompanyConnections

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

sdk.connections.listCompanyConnections(req).then((res: ListCompanyConnectionsResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## unlinkCompanyConnection

This allows you to deauthorize a connection, without deleting it from Codat. This means you can still view any data that has previously been pulled into Codat, and also lets you re-authorize in future if your customer wishes to resume sharing their data.

### Example Usage

```typescript
import { CodatCommon } from "@codat/common";
import { UnlinkCompanyConnectionRequest, UnlinkCompanyConnectionResponse } from "@codat/common/dist/sdk/models/operations";
import { DataConnectionStatusEnum, SourceTypeEnum } from "@codat/common/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatCommon({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: UnlinkCompanyConnectionRequest = {
  requestBody: {
    status: "placeat",
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
};

sdk.connections.unlinkCompanyConnection(req).then((res: UnlinkCompanyConnectionResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## updateConnectionAuthorization

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

sdk.connections.updateConnectionAuthorization(req).then((res: UpdateConnectionAuthorizationResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```
