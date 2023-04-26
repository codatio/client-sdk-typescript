# disputes

## Overview

Retrieve standardized data from linked commerce platforms.

### Available Operations

* [list](#list) - List disputes

## list

List commerce disputes

### Example Usage

```typescript
import { CodatCommerce } from "@codat/commerce";
import { ListDisputesRequest, ListDisputesResponse } from "@codat/commerce/dist/sdk/models/operations";
import { DisputeStatusEnum, TransactionSourceTypeEnum } from "@codat/commerce/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatCommerce({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: ListDisputesRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  orderBy: "-modifiedDate",
  page: 1,
  pageSize: 100,
  query: "provident",
};

sdk.disputes.list(req).then((res: ListDisputesResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```
