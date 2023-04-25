# createBankFeed
Available in: `bankFeedAccounts`

Put BankFeed BankAccounts for a single data source connected to a single company.

## Example Usage
```typescript
import { CodatBankFeeds } from "@codat/bank-feeds";
import { CreateBankFeedRequest, CreateBankFeedResponse } from "@codat/bank-feeds/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new CodatBankFeeds({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: CreateBankFeedRequest = {
  requestBody: [
    {
      accountName: "quos",
      accountNumber: "perferendis",
      accountType: "magni",
      balance: 8289.4,
      currency: "ipsam",
      feedStartDate: "2022-10-23T00:00:00Z",
      id: "02a94bb4-f63c-4969-a9a3-efa77dfb14cd",
      modifiedDate: "2022-10-23T00:00:00Z",
      sortCode: "ea",
      status: "aliquid",
    },
    {
      accountName: "laborum",
      accountNumber: "accusamus",
      accountType: "non",
      balance: 5812.73,
      currency: "enim",
      feedStartDate: "2022-10-23T00:00:00Z",
      id: "efb9ba88-f3a6-4699-b074-ba4469b6e214",
      modifiedDate: "2022-10-23T00:00:00Z",
      sortCode: "et",
      status: "excepturi",
    },
    {
      accountName: "ullam",
      accountNumber: "provident",
      accountType: "quos",
      balance: 5743.25,
      currency: "accusantium",
      feedStartDate: "2022-10-23T00:00:00Z",
      id: "afa563e2-516f-4e4c-8b71-1e5b7fd2ed02",
      modifiedDate: "2022-10-23T00:00:00Z",
      sortCode: "praesentium",
      status: "natus",
    },
  ],
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
};

sdk.bankFeedAccounts.createBankFeed(req).then((res: CreateBankFeedResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```