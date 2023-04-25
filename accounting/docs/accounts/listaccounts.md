# listAccounts
Available in: `accounts`

Gets the latest accounts for a company

## Example Usage
```typescript
import { CodatAccounting } from "@codat/accounting";
import { ListAccountsRequest, ListAccountsResponse } from "@codat/accounting/dist/sdk/models/operations";
import { AccountStatusEnum, AccountTypeEnum } from "@codat/accounting/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: ListAccountsRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  orderBy: "-modifiedDate",
  page: 1,
  pageSize: 100,
  query: "impedit",
};

sdk.accounts.listAccounts(req).then((res: ListAccountsResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```