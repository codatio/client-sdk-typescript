# dataStatus

## Overview

Understand the state of data within Codat.

### Available Operations

* [get](#get) - Get data status
* [getPullOperation](#getpulloperation) - Get pull operation
* [listPullOperations](#listpulloperations) - Get pull operations

## get

Get the state of each data type for a company

### Example Usage

```typescript
import { CodatCommon } from "@codat/common";
import { GetCompanyDataStatusResponse } from "@codat/common/dist/sdk/models/operations";

const sdk = new CodatCommon({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.dataStatus.get({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
}).then((res: GetCompanyDataStatusResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getPullOperation

Retrieve information about a single dataset or pull operation.

### Example Usage

```typescript
import { CodatCommon } from "@codat/common";
import { GetPullOperationResponse } from "@codat/common/dist/sdk/models/operations";
import { PullOperationStatusEnum } from "@codat/common/dist/sdk/models/shared";

const sdk = new CodatCommon({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.dataStatus.getPullOperation({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  datasetId: "eaed9f0f-e77b-4bc9-a58f-ab8b4b99ab18",
}).then((res: GetPullOperationResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## listPullOperations

Gets the pull operation history (datasets) for a given company.

### Example Usage

```typescript
import { CodatCommon } from "@codat/common";
import { ListPullOperationsResponse } from "@codat/common/dist/sdk/models/operations";
import { PullOperationStatusEnum } from "@codat/common/dist/sdk/models/shared";

const sdk = new CodatCommon({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.dataStatus.listPullOperations({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  orderBy: "-modifiedDate",
  page: 1,
  pageSize: 100,
  query: "quis",
}).then((res: ListPullOperationsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
