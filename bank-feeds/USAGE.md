<!-- Start SDK Example Usage [usage] -->
```typescript
import { CodatBankFeeds } from "@codat/bank-feeds";

async function run() {
    const sdk = new CodatBankFeeds({
        security: {
            authHeader: "Basic BASE_64_ENCODED(API_KEY)",
        },
    });

    const res = await sdk.companies.create({
        description: "Requested early access to the new financing scheme.",
        groups: [
            {
                id: "60d2fa12-8a04-11ee-b9d1-0242ac120002",
            },
        ],
        name: "Bank of Dave",
    });

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```
<!-- End SDK Example Usage [usage] -->