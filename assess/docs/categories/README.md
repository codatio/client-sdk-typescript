# categories

## Overview

Categorisation

### Available Operations

* [getAccountCategory](#getaccountcategory) - Get suggested and/or confirmed category for a specific account
* [listAccountsCategories](#listaccountscategories) - List suggested and confirmed account categories
* [listAvailableAccountCategories](#listavailableaccountcategories) - List account categories
* [updateAccountCategory](#updateaccountcategory) - Patch account categories
* [updateAccountsCategories](#updateaccountscategories) - Confirm categories for accounts

## getAccountCategory

Get category for specific nominal account.

### Example Usage

```typescript
import { CodatAssess } from "@codat/assess";
import { GetAccountCategoryRequest, GetAccountCategoryResponse } from "@codat/assess/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new CodatAssess({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: GetAccountCategoryRequest = {
  accountId: "provident",
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
};

sdk.categories.getAccountCategory(req).then((res: GetAccountCategoryResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## listAccountsCategories

Lists suggested and confirmed chart of account categories for the given company and data connection.

### Example Usage

```typescript
import { CodatAssess } from "@codat/assess";
import { ListAccountsCategoriesRequest, ListAccountsCategoriesResponse } from "@codat/assess/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new CodatAssess({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: ListAccountsCategoriesRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  orderBy: "-modifiedDate",
  page: 1,
  pageSize: 100,
  query: "distinctio",
};

sdk.categories.listAccountsCategories(req).then((res: ListAccountsCategoriesResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## listAvailableAccountCategories

Lists available account categories Codat's categorisation engine can provide. 

### Example Usage

```typescript
import { CodatAssess } from "@codat/assess";
import { ListAvailableAccountCategoriesResponse } from "@codat/assess/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new CodatAssess({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.categories.listAvailableAccountCategories().then((res: ListAvailableAccountCategoriesResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## updateAccountCategory

Update category for a specific nominal account

### Example Usage

```typescript
import { CodatAssess } from "@codat/assess";
import { UpdateAccountCategoryRequest, UpdateAccountCategoryResponse } from "@codat/assess/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new CodatAssess({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: UpdateAccountCategoryRequest = {
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
};

sdk.categories.updateAccountCategory(req).then((res: UpdateAccountCategoryResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## updateAccountsCategories

Comfirms the categories for all or a batch of accounts for a specific connection.

### Example Usage

```typescript
import { CodatAssess } from "@codat/assess";
import { UpdateAccountsCategoriesRequest, UpdateAccountsCategoriesResponse } from "@codat/assess/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new CodatAssess({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: UpdateAccountsCategoriesRequest = {
  confirmCategories: {
    categories: [
      {
        accountRef: {
          id: "69a674e0-f467-4cc8-b96e-d151a05dfc2d",
        },
        confirmed: {
          detailType: "at",
          subtype: "maiores",
          type: "molestiae",
        },
      },
      {
        accountRef: {
          id: "cc78ca1b-a928-4fc8-9674-2cb739205929",
        },
        confirmed: {
          detailType: "dolor",
          subtype: "natus",
          type: "laboriosam",
        },
      },
      {
        accountRef: {
          id: "fea7596e-b10f-4aaa-a352-c5955907aff1",
        },
        confirmed: {
          detailType: "mollitia",
          subtype: "dolorem",
          type: "culpa",
        },
      },
      {
        accountRef: {
          id: "2fa94677-3925-41aa-92c3-f5ad019da1ff",
        },
        confirmed: {
          detailType: "vero",
          subtype: "nihil",
          type: "praesentium",
        },
      },
    ],
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
};

sdk.categories.updateAccountsCategories(req).then((res: UpdateAccountsCategoriesResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```
