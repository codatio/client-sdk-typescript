<!-- Start SDK Example Usage [usage] -->
```typescript
import { CodatSyncPayroll } from "@codat/sync-for-payroll";

async function run() {
    const sdk = new CodatSyncPayroll({
        security: {
            authHeader: "Basic BASE_64_ENCODED(API_KEY)",
        },
    });

    const res = await sdk.companies.create({
        description: "Requested early access to the new financing scheme.",
        name: "Bank of Dave",
    });

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```
<!-- End SDK Example Usage [usage] -->