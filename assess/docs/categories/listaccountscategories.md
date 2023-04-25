# listAccountsCategories
Available in: `categories`

Lists suggested and confirmed chart of account categories for the given company and data connection.

## Example Usage
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