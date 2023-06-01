# disputes

## Overview

Retrieve standardized data from linked commerce platforms.

### Available Operations

* [get](#get) - Get dispute
* [list](#list) - List disputes

## get

Get a specific commerce dispute.

### Example Usage

```typescript
import { CodatCommerce } from "@codat/commerce";
import { GetDisputeResponse } from "@codat/commerce/dist/sdk/models/operations";
import { DisputeStatus, TransactionSourceType } from "@codat/commerce/dist/sdk/models/shared";

const sdk = new CodatCommerce({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.disputes.get({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  disputeId: "distinctio",
}).then((res: GetDisputeResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## list

List commerce disputes

### Example Usage

```typescript
import { CodatCommerce } from "@codat/commerce";
import { ListDisputesResponse } from "@codat/commerce/dist/sdk/models/operations";
import { DisputeStatus, TransactionSourceType } from "@codat/commerce/dist/sdk/models/shared";

const sdk = new CodatCommerce({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.disputes.list({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  orderBy: "-modifiedDate",
  page: 1,
  pageSize: 100,
  query: "quibusdam",
}).then((res: ListDisputesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
