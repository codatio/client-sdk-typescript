# dataStatus

## Overview

Understand the state of data within Codat.

### Available Operations

* [getCompanyDataHistory](#getcompanydatahistory) - Get pull operations
* [getCompanyDataStatus](#getcompanydatastatus) - Get data status
* [getPullOperation](#getpulloperation) - Get pull operation

## getCompanyDataHistory

Gets the pull operation history (datasets) for a given company.

### Example Usage

```typescript
import { CodatCommon } from "@codat/common";
import { GetCompanyDataHistoryRequest, GetCompanyDataHistoryResponse } from "@codat/common/dist/sdk/models/operations";
import { PullOperationStatusEnum } from "@codat/common/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatCommon({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: GetCompanyDataHistoryRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  orderBy: "-modifiedDate",
  page: 1,
  pageSize: 100,
  query: "quis",
};

sdk.dataStatus.getCompanyDataHistory(req).then((res: GetCompanyDataHistoryResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## getCompanyDataStatus

Get the state of each data type for a company

### Example Usage

```typescript
import { CodatCommon } from "@codat/common";
import { GetCompanyDataStatusRequest, GetCompanyDataStatusResponse } from "@codat/common/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new CodatCommon({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: GetCompanyDataStatusRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
};

sdk.dataStatus.getCompanyDataStatus(req).then((res: GetCompanyDataStatusResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## getPullOperation

Retrieve information about a single dataset or pull operation.

### Example Usage

```typescript
import { CodatCommon } from "@codat/common";
import { GetPullOperationRequest, GetPullOperationResponse } from "@codat/common/dist/sdk/models/operations";
import { PullOperationStatusEnum } from "@codat/common/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatCommon({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: GetPullOperationRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  datasetId: "eaed9f0f-e77b-4bc9-a58f-ab8b4b99ab18",
};

sdk.dataStatus.getPullOperation(req).then((res: GetPullOperationResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```
