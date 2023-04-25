# getBankFeeds
Available in: `bankFeedAccounts`

Get BankFeed BankAccounts for a single data source connected to a single company.

## Example Usage
```typescript
import { CodatBankFeeds } from "@codat/bank-feeds";
import { GetBankFeedsRequest, GetBankFeedsResponse } from "@codat/bank-feeds/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new CodatBankFeeds({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: GetBankFeedsRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
};

sdk.bankFeedAccounts.getBankFeeds(req).then((res: GetBankFeedsResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```