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
import { GetTrackingCategoryResponse } from "@codat/accounting/dist/sdk/models/operations";
import { Status } from "@codat/accounting/dist/sdk/models/shared";

const sdk = new CodatAccounting({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.trackingCategories.get({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  trackingCategoryId: "consectetur",
}).then((res: GetTrackingCategoryResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## list

Gets the latest tracking categories for a given company.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { ListTrackingCategoriesResponse } from "@codat/accounting/dist/sdk/models/operations";
import { Status } from "@codat/accounting/dist/sdk/models/shared";

const sdk = new CodatAccounting({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.trackingCategories.list({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  orderBy: "-modifiedDate",
  page: 1,
  pageSize: 100,
  query: "aliquam",
}).then((res: ListTrackingCategoriesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
