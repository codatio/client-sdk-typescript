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
import { CompanyRequestBody, CreateCompanyResponse } from "@codat/common/dist/sdk/models/operations";
import { DataConnectionStatusEnum, SourceTypeEnum } from "@codat/common/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatCommon({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: shared.CompanyRequestBody = {
  description: "corrupti",
  name: "Ben Mueller",
};

sdk.companies.create(req).then((res: CreateCompanyResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
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
import { DeleteCompanyRequest, DeleteCompanyResponse } from "@codat/common/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new CodatCommon({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: DeleteCompanyRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
};

sdk.companies.delete(req).then((res: DeleteCompanyResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## get

Get metadata for a single company

### Example Usage

```typescript
import { CodatCommon } from "@codat/common";
import { GetCompanyRequest, GetCompanyResponse } from "@codat/common/dist/sdk/models/operations";
import { DataConnectionStatusEnum, SourceTypeEnum } from "@codat/common/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatCommon({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: GetCompanyRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
};

sdk.companies.get(req).then((res: GetCompanyResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## list

List all companies that you have created in Codat.

### Example Usage

```typescript
import { CodatCommon } from "@codat/common";
import { ListCompaniesRequest, ListCompaniesResponse } from "@codat/common/dist/sdk/models/operations";
import { DataConnectionStatusEnum, SourceTypeEnum } from "@codat/common/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatCommon({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: ListCompaniesRequest = {
  orderBy: "-modifiedDate",
  page: 1,
  pageSize: 100,
  query: "iure",
};

sdk.companies.list(req).then((res: ListCompaniesResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## update

Updates the given company with a new name and description

### Example Usage

```typescript
import { CodatCommon } from "@codat/common";
import { UpdateCompanyRequest, UpdateCompanyResponse } from "@codat/common/dist/sdk/models/operations";
import { DataConnectionStatusEnum, SourceTypeEnum } from "@codat/common/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatCommon({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: UpdateCompanyRequest = {
  companyRequestBody: {
    description: "magnam",
    name: "Larry Windler",
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
};

sdk.companies.update(req).then((res: UpdateCompanyResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```
