# getAllBankAccount
Available in: `bankAccounts`

Gets the bank account for given account ID.

## Example Usage
```typescript
import { CodatAccounting } from "@codat/accounting";
import { GetAllBankAccountRequest, GetAllBankAccountResponse } from "@codat/accounting/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: GetAllBankAccountRequest = {
  accountId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  query: "deserunt",
};

sdk.bankAccounts.getAllBankAccount(req).then((res: GetAllBankAccountResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```