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
import { ConnectionSourceTypeEnum, DataConnectionStatusEnum } from "@codat/sync-for-commerce/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatSyncCommerce({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.companyManagement.createCompany({
  name: "Bob's Burgers",
}).then((res: CreateCompanyResponse | AxiosError) => {
  if (res instanceof CreateCompanyResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## createConnection

Create a data connection for company.

### Example Usage

```typescript
import { CodatSyncCommerce } from "@codat/sync-for-commerce";
import { CreateConnectionResponse } from "@codat/sync-for-commerce/dist/sdk/models/operations";
import { ConnectionSourceTypeEnum, DataConnectionStatusEnum } from "@codat/sync-for-commerce/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatSyncCommerce({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.companyManagement.createConnection({
  requestBody: "corrupti",
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
}).then((res: CreateConnectionResponse | AxiosError) => {
  if (res instanceof CreateConnectionResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## listCompanies

Retrieve a list of all companies the client has created.

### Example Usage

```typescript
import { CodatSyncCommerce } from "@codat/sync-for-commerce";
import { ListCompaniesResponse } from "@codat/sync-for-commerce/dist/sdk/models/operations";
import { ConnectionSourceTypeEnum, DataConnectionStatusEnum } from "@codat/sync-for-commerce/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatSyncCommerce({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.companyManagement.listCompanies({
  orderBy: "-modifiedDate",
  page: 1,
  pageSize: 100,
  query: "provident",
}).then((res: ListCompaniesResponse | AxiosError) => {
  if (res instanceof ListCompaniesResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## listConnections

Retrieve previously created data connections.

### Example Usage

```typescript
import { CodatSyncCommerce } from "@codat/sync-for-commerce";
import { ListConnectionsResponse } from "@codat/sync-for-commerce/dist/sdk/models/operations";
import { ConnectionSourceTypeEnum, DataConnectionStatusEnum } from "@codat/sync-for-commerce/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatSyncCommerce({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.companyManagement.listConnections({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  orderBy: "-modifiedDate",
  page: 1,
  pageSize: 100,
  query: "distinctio",
}).then((res: ListConnectionsResponse | AxiosError) => {
  if (res instanceof ListConnectionsResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## updateConnection

Update a data connection

### Example Usage

```typescript
import { CodatSyncCommerce } from "@codat/sync-for-commerce";
import { UpdateConnectionResponse } from "@codat/sync-for-commerce/dist/sdk/models/operations";
import { ConnectionSourceTypeEnum, DataConnectionStatusEnum } from "@codat/sync-for-commerce/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatSyncCommerce({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.companyManagement.updateConnection({
  updateConnection: {
    status: "Linked",
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
}).then((res: UpdateConnectionResponse | AxiosError) => {
  if (res instanceof UpdateConnectionResponse && res.statusCode == 200) {
    // handle response
  }
});
```
