<!-- Start SDK Example Usage -->


```typescript
import { CodatBankFeeds } from "@codat/bank-feeds";

(async () => {
    const sdk = new CodatBankFeeds({
        security: {
            authHeader: "Basic BASE_64_ENCODED(API_KEY)",
        },
    });

    const res = await sdk.accountMapping.create({
        zero: {
            feedStartDate: "2022-10-23T00:00:00.000Z",
        },
        companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
        connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
    });

    if (res.statusCode == 200) {
        // handle response
    }
})();

```
<!-- End SDK Example Usage -->