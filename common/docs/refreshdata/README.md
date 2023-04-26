# refreshData

## Overview

Queue pull operations to refresh data in Codat.

### Available Operations

* [createPullOperation](#createpulloperation) - Queue pull operation
* [refreshCompanyData](#refreshcompanydata) - Queue pull operations

## createPullOperation

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

sdk.refreshData.createPullOperation(req).then((res: CreatePullOperationResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## refreshCompanyData

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

sdk.refreshData.refreshCompanyData(req).then((res: RefreshCompanyDataResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```
