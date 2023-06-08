# categories

## Overview

Categorisation

### Available Operations

* [~~getAccountCategory~~](#getaccountcategory) - Get suggested and/or confirmed category for a specific account :warning: **Deprecated**
* [~~listAccountsCategories~~](#listaccountscategories) - List suggested and confirmed account categories :warning: **Deprecated**
* [~~listAvailableAccountCategories~~](#listavailableaccountcategories) - List account categories :warning: **Deprecated**
* [~~updateAccountCategory~~](#updateaccountcategory) - Update account categories :warning: **Deprecated**
* [~~updateAccountsCategories~~](#updateaccountscategories) - Confirm categories for accounts :warning: **Deprecated**

## ~~getAccountCategory~~

Get category for specific nominal account.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { CodatAssess } from "@codat/assess";
import { GetAccountCategoryResponse } from "@codat/assess/dist/sdk/models/operations";

const sdk = new CodatAssess({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.categories.getAccountCategory({
  accountId: "provident",
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
}).then((res: GetAccountCategoryResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## ~~listAccountsCategories~~

Lists suggested and confirmed chart of account categories for the given company and data connection.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { CodatAssess } from "@codat/assess";
import { ListAccountsCategoriesResponse } from "@codat/assess/dist/sdk/models/operations";

const sdk = new CodatAssess({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.categories.listAccountsCategories({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  orderBy: "-modifiedDate",
  page: 1,
  pageSize: 100,
  query: "distinctio",
}).then((res: ListAccountsCategoriesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## ~~listAvailableAccountCategories~~

Lists available account categories Codat's categorisation engine can provide. 

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { CodatAssess } from "@codat/assess";
import { ListAvailableAccountCategoriesResponse } from "@codat/assess/dist/sdk/models/operations";

const sdk = new CodatAssess({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.categories.listAvailableAccountCategories().then((res: ListAvailableAccountCategoriesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## ~~updateAccountCategory~~

Update category for a specific nominal account

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { CodatAssess } from "@codat/assess";
import { UpdateAccountCategoryResponse } from "@codat/assess/dist/sdk/models/operations";

const sdk = new CodatAssess({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.categories.updateAccountCategory({
  confirmCategory: {
    confirmed: {
      detailType: "quibusdam",
      subtype: "unde",
      type: "nulla",
    },
  },
  accountId: "corrupti",
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
}).then((res: UpdateAccountCategoryResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## ~~updateAccountsCategories~~

Comfirms the categories for all or a batch of accounts for a specific connection.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { CodatAssess } from "@codat/assess";
import { UpdateAccountsCategoriesResponse } from "@codat/assess/dist/sdk/models/operations";

const sdk = new CodatAssess({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.categories.updateAccountsCategories({
  confirmCategories: {
    categories: [
      {
        accountRef: {
          id: "9wg4lep4ush5cxs79pl8sozmsndbaukll3ind4g7buqbm1h2",
        },
        confirmed: {
          detailType: "error",
          subtype: "deserunt",
          type: "suscipit",
        },
      },
      {
        accountRef: {
          id: "9wg4lep4ush5cxs79pl8sozmsndbaukll3ind4g7buqbm1h2",
        },
        confirmed: {
          detailType: "magnam",
          subtype: "debitis",
          type: "ipsa",
        },
      },
      {
        accountRef: {
          id: "EILBDVJVNUAGVKRQ",
        },
        confirmed: {
          detailType: "tempora",
          subtype: "suscipit",
          type: "molestiae",
        },
      },
      {
        accountRef: {
          id: "EILBDVJVNUAGVKRQ",
        },
        confirmed: {
          detailType: "placeat",
          subtype: "voluptatum",
          type: "iusto",
        },
      },
    ],
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
}).then((res: UpdateAccountsCategoriesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
