# getAccount
Available in: `accounts`

Gets a single account corresponding to the given ID.

## Example Usage
```typescript
import { CodatAccounting } from "@codat/accounting";
import { GetAccountRequest, GetAccountResponse } from "@codat/accounting/dist/sdk/models/operations";
import { AccountStatusEnum, AccountTypeEnum } from "@codat/accounting/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: GetAccountRequest = {
  accountId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
};

sdk.accounts.getAccount(req).then((res: GetAccountResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```