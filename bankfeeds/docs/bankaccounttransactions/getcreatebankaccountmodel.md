# getCreateBankAccountModel
Available in: `bankAccountTransactions`

Gets the options of pushing bank account transactions.

## Example Usage
```typescript
import { CodatBankFeeds } from "@codat/bank-feeds";
import { GetCreateBankAccountModelRequest, GetCreateBankAccountModelResponse } from "@codat/bank-feeds/dist/sdk/models/operations";
import { PushOptionTypeEnum } from "@codat/bank-feeds/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatBankFeeds({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: GetCreateBankAccountModelRequest = {
  accountId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
};

sdk.bankAccountTransactions.getCreateBankAccountModel(req).then((res: GetCreateBankAccountModelResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```