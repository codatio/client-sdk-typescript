<!-- Start SDK Example Usage -->


```typescript
import { CodatBanking } from "@codat/banking";

(async () => {
    const sdk = new CodatBanking({
        security: {
            authHeader: "Basic BASE_64_ENCODED(API_KEY)",
        },
    });

    const res = await sdk.accountBalances.list({
        companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
        connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
        orderBy: "-modifiedDate",
        page: 1,
        pageSize: 100,
    });

    if (res.statusCode == 200) {
        // handle response
    }
})();

```
<!-- End SDK Example Usage -->