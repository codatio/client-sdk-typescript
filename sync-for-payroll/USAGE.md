<!-- Start SDK Example Usage [usage] -->
```typescript
import { CodatSyncPayroll } from "@codat/sync-for-payroll";

async function run() {
    const sdk = new CodatSyncPayroll({
        security: {
            authHeader: "Basic BASE_64_ENCODED(API_KEY)",
        },
    });

    const result = await sdk.companies.create({
        description: "Requested early access to the new financing scheme.",
        groups: [
            {
                id: "60d2fa12-8a04-11ee-b9d1-0242ac120002",
            },
        ],
        name: "Bank of Dave",
    });

    // Handle the result
    console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->