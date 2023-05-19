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
import { RefreshCompanyDataResponse } from "@codat/common/dist/sdk/models/operations";

const sdk = new CodatCommon({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
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

Queue a single pull operation for the given company and data type.

This will bring updated data into Codat from the linked integration for you to view.

### Example Usage

```typescript
import { CodatCommon } from "@codat/common";
import { CreatePullOperationResponse } from "@codat/common/dist/sdk/models/operations";
import { DataType, PullOperationStatus } from "@codat/common/dist/sdk/models/shared";

const sdk = new CodatCommon({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.refreshData.byDataType({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "8ca1ba92-8fc8-4167-82cb-739205929396",
  dataType: DataType.Invoices,
}).then((res: CreatePullOperationResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
