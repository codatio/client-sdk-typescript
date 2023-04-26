# refreshData

## Overview

Queue pull operations to refresh data in Codat.

### Available Operations

* [all](#all) - Queue pull operations
* [byDataType](#bydatatype) - Queue pull operation

## all

Refreshes all data types marked Fetch on first link.

### Example Usage

```typescript
import { CodatCommon } from "@codat/common";
import { RefreshCompanyDataRequest, RefreshCompanyDataResponse } from "@codat/common/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new CodatCommon({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: RefreshCompanyDataRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
};

sdk.refreshData.all(req).then((res: RefreshCompanyDataResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## byDataType

Queue a single pull operation for the given company and data type.

This will bring updated data into Codat from the linked integration for you to view.

### Example Usage

```typescript
import { CodatCommon } from "@codat/common";
import { CreatePullOperationRequest, CreatePullOperationResponse } from "@codat/common/dist/sdk/models/operations";
import { DataTypeEnum, PullOperationStatusEnum } from "@codat/common/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatCommon({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: CreatePullOperationRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "b7392059-2939-46fe-a759-6eb10faaa235",
  dataType: DataTypeEnum.Invoices,
};

sdk.refreshData.byDataType(req).then((res: CreatePullOperationResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```
