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
import { DataConnectionStatusEnum, SourceTypeEnum } from "@codat/common/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatCommon({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.companies.create({
  description: "corrupti",
  name: "Ben Mueller",
}).then((res: CreateCompanyResponse | AxiosError) => {
  if (res instanceof CreateCompanyResponse && res.statusCode == 200) {
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
import { AxiosError } from "axios";

const sdk = new CodatCommon({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.companies.delete({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
}).then((res: DeleteCompanyResponse | AxiosError) => {
  if (res instanceof DeleteCompanyResponse && res.statusCode == 200) {
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
import { DataConnectionStatusEnum, SourceTypeEnum } from "@codat/common/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatCommon({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.companies.get({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
}).then((res: GetCompanyResponse | AxiosError) => {
  if (res instanceof GetCompanyResponse && res.statusCode == 200) {
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
import { DataConnectionStatusEnum, SourceTypeEnum } from "@codat/common/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatCommon({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.companies.list({
  orderBy: "-modifiedDate",
  page: 1,
  pageSize: 100,
  query: "iure",
}).then((res: ListCompaniesResponse | AxiosError) => {
  if (res instanceof ListCompaniesResponse && res.statusCode == 200) {
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
import { DataConnectionStatusEnum, SourceTypeEnum } from "@codat/common/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatCommon({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.companies.update({
  companyRequestBody: {
    description: "magnam",
    name: "Larry Windler",
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
}).then((res: UpdateCompanyResponse | AxiosError) => {
  if (res instanceof UpdateCompanyResponse && res.statusCode == 200) {
    // handle response
  }
});
```
