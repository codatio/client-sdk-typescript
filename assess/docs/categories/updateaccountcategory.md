# updateAccountCategory
Available in: `categories`

Update category for a specific nominal account

## Example Usage
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