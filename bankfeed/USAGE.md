<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetBankFeedRequest, GetBankFeedResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    apiKey: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: GetBankFeedRequest = {
  security: {
    apiKey: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  },
  pathParams: {
    bankAccountId: "unde",
    companyId: "deserunt",
    connectionId: "porro",
  },
  request: {
    accountName: "nulla",
    accountNumber: "id",
    accountType: "vero",
    balance: 5448.83,
    currency: "nulla",
    feedStartDate: "2022-09-21T20:04:46.705Z",
    id: "fuga",
    modifiedDate: "2022-07-02T17:15:47.785Z",
    sortCode: "eum",
    status: "iusto",
  },
};

sdk.bankFeeds.getBankFeed(req).then((res: GetBankFeedResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->