# companyManagement

## Overview

Create new and manage existing Sync for Commerce companies.

### Available Operations

* [createCompany](#createcompany) - Create Sync for Commerce company
* [createConnection](#createconnection) - Create connection
* [listCompanies](#listcompanies) - List companies
* [listConnections](#listconnections) - List data connections
* [updateConnection](#updateconnection) - Update data connection

## createCompany

Creates a Codat company with a commerce partner data connection.

### Example Usage

```typescript
import { CodatSyncCommerce } from "@codat/sync-for-commerce";
import { CreateCompanyResponse } from "@codat/sync-for-commerce/dist/sdk/models/operations";
import { ConnectionSourceTypeEnum, CreateCompany, DataConnectionStatusEnum } from "@codat/sync-for-commerce/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatSyncCommerce({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: shared.CreateCompany = {
  name: "Bob's Burgers",
};

sdk.companyManagement.createCompany(req).then((res: CreateCompanyResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## createConnection

Create a data connection for company.

### Example Usage

```typescript
import { CodatSyncCommerce } from "@codat/sync-for-commerce";
import { CreateConnectionRequest, CreateConnectionResponse } from "@codat/sync-for-commerce/dist/sdk/models/operations";
import { ConnectionSourceTypeEnum, DataConnectionStatusEnum } from "@codat/sync-for-commerce/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatSyncCommerce({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: CreateConnectionRequest = {
  requestBody: "corrupti",
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
};

sdk.companyManagement.createConnection(req).then((res: CreateConnectionResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## listCompanies

Retrieve a list of all companies the client has created.

### Example Usage

```typescript
import { CodatSyncCommerce } from "@codat/sync-for-commerce";
import { ListCompaniesRequest, ListCompaniesResponse } from "@codat/sync-for-commerce/dist/sdk/models/operations";
import { ConnectionSourceTypeEnum, DataConnectionStatusEnum } from "@codat/sync-for-commerce/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatSyncCommerce({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: ListCompaniesRequest = {
  orderBy: "-modifiedDate",
  page: 1,
  pageSize: 100,
  query: "provident",
};

sdk.companyManagement.listCompanies(req).then((res: ListCompaniesResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## listConnections

Retrieve previously created data connections.

### Example Usage

```typescript
import { CodatSyncCommerce } from "@codat/sync-for-commerce";
import { ListConnectionsRequest, ListConnectionsResponse } from "@codat/sync-for-commerce/dist/sdk/models/operations";
import { ConnectionSourceTypeEnum, DataConnectionStatusEnum } from "@codat/sync-for-commerce/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatSyncCommerce({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: ListConnectionsRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  orderBy: "-modifiedDate",
  page: 1,
  pageSize: 100,
  query: "distinctio",
};

sdk.companyManagement.listConnections(req).then((res: ListConnectionsResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## updateConnection

Update a data connection

### Example Usage

```typescript
import { CodatSyncCommerce } from "@codat/sync-for-commerce";
import { UpdateConnectionRequest, UpdateConnectionResponse } from "@codat/sync-for-commerce/dist/sdk/models/operations";
import { ConnectionSourceTypeEnum, DataConnectionStatusEnum } from "@codat/sync-for-commerce/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatSyncCommerce({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: UpdateConnectionRequest = {
  updateConnection: {
    status: "Linked",
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
};

sdk.companyManagement.updateConnection(req).then((res: UpdateConnectionResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```
