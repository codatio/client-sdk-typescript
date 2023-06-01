# companies

## Overview

Create and manage your Codat companies.

### Available Operations

* [create](#create) - Create company
* [delete](#delete) - Delete a company
* [get](#get) - Get company
* [list](#list) - List companies
* [update](#update) - Update company

## create

Create a new company

### Example Usage

```typescript
import { CodatBankFeeds } from "@codat/bank-feeds";
import { CreateCompanyResponse } from "@codat/bank-feeds/dist/sdk/models/operations";
import { ConnectionSourceType, DataConnectionStatus } from "@codat/bank-feeds/dist/sdk/models/shared";

const sdk = new CodatBankFeeds({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.companies.create({
  description: "Requested early access to the new financing scheme.",
  name: "Bank of Dave",
}).then((res: CreateCompanyResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## delete

Delete the given company from Codat.
This operation is not reversible.

### Example Usage

```typescript
import { CodatBankFeeds } from "@codat/bank-feeds";
import { DeleteCompanyResponse } from "@codat/bank-feeds/dist/sdk/models/operations";

const sdk = new CodatBankFeeds({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.companies.delete({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
}).then((res: DeleteCompanyResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## get

Get metadata for a single company

### Example Usage

```typescript
import { CodatBankFeeds } from "@codat/bank-feeds";
import { GetCompanyResponse } from "@codat/bank-feeds/dist/sdk/models/operations";
import { ConnectionSourceType, DataConnectionStatus } from "@codat/bank-feeds/dist/sdk/models/shared";

const sdk = new CodatBankFeeds({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.companies.get({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
}).then((res: GetCompanyResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## list

List all companies that you have created in Codat.

### Example Usage

```typescript
import { CodatBankFeeds } from "@codat/bank-feeds";
import { ListCompaniesResponse } from "@codat/bank-feeds/dist/sdk/models/operations";
import { ConnectionSourceType, DataConnectionStatus } from "@codat/bank-feeds/dist/sdk/models/shared";

const sdk = new CodatBankFeeds({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.companies.list({
  orderBy: "-modifiedDate",
  page: 1,
  pageSize: 100,
  query: "molestias",
}).then((res: ListCompaniesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## update

Updates the given company with a new name and description

### Example Usage

```typescript
import { CodatBankFeeds } from "@codat/bank-feeds";
import { UpdateCompanyResponse } from "@codat/bank-feeds/dist/sdk/models/operations";
import { ConnectionSourceType, DataConnectionStatus } from "@codat/bank-feeds/dist/sdk/models/shared";

const sdk = new CodatBankFeeds({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.companies.update({
  companyRequestBody: {
    description: "Requested early access to the new financing scheme.",
    name: "Bank of Dave",
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
}).then((res: UpdateCompanyResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
