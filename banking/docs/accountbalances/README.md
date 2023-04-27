# accountBalances

## Overview

Balances for a bank account including end-of-day batch balance or running balances per transaction.

### Available Operations

* [list](#list) - List account balances

## list

Gets a list of balances for a bank account including end-of-day batch balance or running balances per transaction.

### Example Usage

```typescript
import { CodatBanking } from "@codat/banking";
import { ListAccountBalancesResponse } from "@codat/banking/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new CodatBanking({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.accountBalances.list({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  orderBy: "-modifiedDate",
  page: 1,
  pageSize: 100,
  query: "provident",
}).then((res: ListAccountBalancesResponse | AxiosError) => {
  if (res instanceof ListAccountBalancesResponse && res.statusCode == 200) {
    // handle response
  }
});
```
