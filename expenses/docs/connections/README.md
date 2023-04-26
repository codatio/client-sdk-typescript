# connections

## Overview

Create and manage partner expense connection.

### Available Operations

* [createPartnerExpenseConnection](#createpartnerexpenseconnection) - Create Partner Expense connection

## createPartnerExpenseConnection

Creates a Partner Expense data connection

### Example Usage

```typescript
import { CodatSyncExpenses } from "@codat/sync-for-expenses";
import { CreatePartnerExpenseConnectionRequest, CreatePartnerExpenseConnectionResponse } from "@codat/sync-for-expenses/dist/sdk/models/operations";
import { DataConnectionSourceTypeEnum, DataConnectionStatusEnum } from "@codat/sync-for-expenses/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatSyncExpenses({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: CreatePartnerExpenseConnectionRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
};

sdk.connections.createPartnerExpenseConnection(req).then((res: CreatePartnerExpenseConnectionResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```
