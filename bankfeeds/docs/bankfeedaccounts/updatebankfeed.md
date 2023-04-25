# updateBankFeed
Available in: `bankFeedAccounts`

Update a single BankFeed BankAccount for a single data source connected to a single company.

## Example Usage
```typescript
import { CodatBankFeeds } from "@codat/bank-feeds";
import { UpdateBankFeedRequest, UpdateBankFeedResponse } from "@codat/bank-feeds/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new CodatBankFeeds({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: UpdateBankFeedRequest = {
  bankFeedAccount: {
    accountName: "magni",
    accountNumber: "sunt",
    accountType: "quo",
    balance: 8480.09,
    currency: "pariatur",
    feedStartDate: "2022-10-23T00:00:00Z",
    id: "c692601f-b576-4b0d-9f0d-30c5fbb25870",
    modifiedDate: "2022-10-23T00:00:00Z",
    sortCode: "quis",
    status: "nesciunt",
  },
  accountId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
};

sdk.bankFeedAccounts.updateBankFeed(req).then((res: UpdateBankFeedResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```