<!-- Start SDK Example Usage -->


```typescript
import { CodatBankFeeds } from "@codat/bank-feeds";
import { CreateBankAccountMappingResponse } from "@codat/bank-feeds/dist/sdk/models/operations";

const sdk = new CodatBankFeeds({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.accountMapping.create({
  bankFeedAccountMapping: {
    feedStartDate: "2022-10-23T00:00:00.000Z",
    sourceAccountId: "provident",
    targetAccountId: "distinctio",
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
}).then((res: CreateBankAccountMappingResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
<!-- End SDK Example Usage -->