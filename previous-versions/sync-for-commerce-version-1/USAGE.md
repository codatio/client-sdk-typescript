<!-- Start SDK Example Usage [usage] -->
```typescript
import { CodatSyncCommerce } from "@codat/sync-for-commerce-version-1";

async function run() {
    const sdk = new CodatSyncCommerce({
        security: {
            authHeader: "Basic BASE_64_ENCODED(API_KEY)",
        },
    });

    const res = await sdk.syncFlowPreferences.getConfigTextSyncFlow();

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```
<!-- End SDK Example Usage [usage] -->