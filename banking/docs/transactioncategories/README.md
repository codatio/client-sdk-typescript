# transactionCategories

## Overview

Hierarchical categories associated with a transaction for greater contextual meaning to transaction activity.

### Available Operations

* [get](#get) - Get transaction category
* [list](#list) - List all transaction categories

## get

Gets a specified bank transaction category for a given company

### Example Usage

```typescript
import { CodatBanking } from "@codat/banking";
import { GetTransactionCategoryResponse } from "@codat/banking/dist/sdk/models/operations";
import { TransactionCategoryStatusEnum } from "@codat/banking/dist/sdk/models/shared";

const sdk = new CodatBanking({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.transactionCategories.get({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  transactionCategoryId: "quibusdam",
}).then((res: GetTransactionCategoryResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## list

Gets a list of hierarchical categories associated with a transaction for greater contextual meaning to transactionactivity.

### Example Usage

```typescript
import { CodatBanking } from "@codat/banking";
import { ListTransactionCategoriesResponse } from "@codat/banking/dist/sdk/models/operations";
import { TransactionCategoryStatusEnum } from "@codat/banking/dist/sdk/models/shared";

const sdk = new CodatBanking({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.transactionCategories.list({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  orderBy: "-modifiedDate",
  page: 1,
  pageSize: 100,
  query: "unde",
}).then((res: ListTransactionCategoriesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
