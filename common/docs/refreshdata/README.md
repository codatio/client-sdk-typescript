# refreshData

## Overview

Asynchronously retrieve data from an integration to refresh data in Codat.

### Available Operations

* [all](#all) - Refresh all data
* [byDataType](#bydatatype) - Refresh data type
* [get](#get) - Get data status
* [getPullOperation](#getpulloperation) - Get pull operation
* [listPullOperations](#listpulloperations) - List pull operations

## all

Refreshes all data types with `fetch on first link` set to `true` for a given company.

This is an asynchronous operation, and will bring updated data into Codat from the linked integration for you to view.

[Read more](https://docs.codat.io/core-concepts/data-type-settings) about data type settings and `fetch on first link`.

### Example Usage

```typescript
import { CodatCommon } from "@codat/common";
import { RefreshCompanyDataResponse } from "@codat/common/dist/sdk/models/operations";

const sdk = new CodatCommon({
  security: {
    authHeader: "",
  },
});

sdk.refreshData.all({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
}).then((res: RefreshCompanyDataResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## byDataType

Refreshes a given data type for a given company.

This is an asynchronous operation, and will bring updated data into Codat from the linked integration for you to view.

### Example Usage

```typescript
import { CodatCommon } from "@codat/common";
import { RefreshDataTypeResponse } from "@codat/common/dist/sdk/models/operations";
import { DataType, PullOperationStatus } from "@codat/common/dist/sdk/models/shared";

const sdk = new CodatCommon({
  security: {
    authHeader: "",
  },
});

sdk.refreshData.byDataType({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "78ca1ba9-28fc-4816-b42c-b73920592939",
  dataType: DataType.Invoices,
}).then((res: RefreshDataTypeResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## get

Get the state of each data type for a company

### Example Usage

```typescript
import { CodatCommon } from "@codat/common";
import { GetCompanyDataStatusResponse } from "@codat/common/dist/sdk/models/operations";

const sdk = new CodatCommon({
  security: {
    authHeader: "",
  },
});

sdk.refreshData.get({
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
import { PullOperationStatus } from "@codat/common/dist/sdk/models/shared";

const sdk = new CodatCommon({
  security: {
    authHeader: "",
  },
});

sdk.refreshData.getPullOperation({
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
import { PullOperationStatus } from "@codat/common/dist/sdk/models/shared";

const sdk = new CodatCommon({
  security: {
    authHeader: "",
  },
});

sdk.refreshData.listPullOperations({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  orderBy: "-modifiedDate",
  page: 1,
  pageSize: 100,
  query: "laboriosam",
}).then((res: ListPullOperationsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
