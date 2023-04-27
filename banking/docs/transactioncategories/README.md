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
import { GetTransactionCategoryRequest, GetTransactionCategoryResponse } from "@codat/banking/dist/sdk/models/operations";
import { TransactionCategoryStatusEnum } from "@codat/banking/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatBanking({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: GetTransactionCategoryRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  transactionCategoryId: "quibusdam",
};

sdk.transactionCategories.get(req).then((res: GetTransactionCategoryResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## list

Gets a list of hierarchical categories associated with a transaction for greater contextual meaning to transactionactivity.

### Example Usage

```typescript
import { CodatBanking } from "@codat/banking";
import { ListTransactionCategoriesRequest, ListTransactionCategoriesResponse } from "@codat/banking/dist/sdk/models/operations";
import { TransactionCategoryStatusEnum } from "@codat/banking/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatBanking({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: ListTransactionCategoriesRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  orderBy: "-modifiedDate",
  page: 1,
  pageSize: 100,
  query: "unde",
};

sdk.transactionCategories.list(req).then((res: ListTransactionCategoriesResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```