<!-- Start SDK Example Usage [usage] -->
```typescript
import { CodatBankFeeds } from "@codat/bank-feeds";

const codatBankFeeds = new CodatBankFeeds({
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
    const result = await codatBankFeeds.companies.create({
        name: "Technicalium",
        description: "Requested early access to the new financing scheme.",
        groups: [
            {
                id: "60d2fa12-8a04-11ee-b9d1-0242ac120002",
            },
        ],
    });

    // Handle the result
    console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->