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
import { CodatCommon } from "@codat/common";
import { CreateCompanyResponse } from "@codat/common/dist/sdk/models/operations";
import { DataConnectionStatus, SourceType } from "@codat/common/dist/sdk/models/shared";

const sdk = new CodatCommon({
  security: {
    authHeader: "",
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
import { CodatCommon } from "@codat/common";
import { DeleteCompanyResponse } from "@codat/common/dist/sdk/models/operations";

const sdk = new CodatCommon({
  security: {
    authHeader: "",
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
import { CodatCommon } from "@codat/common";
import { GetCompanyResponse } from "@codat/common/dist/sdk/models/operations";
import { DataConnectionStatus, SourceType } from "@codat/common/dist/sdk/models/shared";

const sdk = new CodatCommon({
  security: {
    authHeader: "",
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
import { CodatCommon } from "@codat/common";
import { ListCompaniesResponse } from "@codat/common/dist/sdk/models/operations";
import { DataConnectionStatus, SourceType } from "@codat/common/dist/sdk/models/shared";

const sdk = new CodatCommon({
  security: {
    authHeader: "",
  },
});

sdk.companies.list({
  orderBy: "-modifiedDate",
  page: 1,
  pageSize: 100,
  query: "corrupti",
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
import { CodatCommon } from "@codat/common";
import { UpdateCompanyResponse } from "@codat/common/dist/sdk/models/operations";
import { DataConnectionStatus, SourceType } from "@codat/common/dist/sdk/models/shared";

const sdk = new CodatCommon({
  security: {
    authHeader: "",
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
