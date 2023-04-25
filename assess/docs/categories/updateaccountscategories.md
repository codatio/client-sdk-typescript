# updateAccountsCategories
Available in: `categories`

Comfirms the categories for all or a batch of accounts for a specific connection.

## Example Usage
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