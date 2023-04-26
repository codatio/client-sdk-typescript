# trackingCategories

## Overview

Tracking categories

### Available Operations

* [get](#get) - Get tracking categories
* [list](#list) - List tracking categories

## get

Gets the specified tracking categories for a given company.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { GetTrackingCategoryRequest, GetTrackingCategoryResponse } from "@codat/accounting/dist/sdk/models/operations";
import { StatusEnum } from "@codat/accounting/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: GetTrackingCategoryRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  trackingCategoryId: "animi",
};

sdk.trackingCategories.get(req).then((res: GetTrackingCategoryResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## list

Gets the latest tracking categories for a given company.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { ListTrackingCategoriesRequest, ListTrackingCategoriesResponse } from "@codat/accounting/dist/sdk/models/operations";
import { StatusEnum } from "@codat/accounting/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: ListTrackingCategoriesRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  orderBy: "-modifiedDate",
  page: 1,
  pageSize: 100,
  query: "autem",
};

sdk.trackingCategories.list(req).then((res: ListTrackingCategoriesResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```
