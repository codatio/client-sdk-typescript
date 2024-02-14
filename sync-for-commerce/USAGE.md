<!-- Start SDK Example Usage [usage] -->
```typescript
import { CodatSyncCommerce } from "@codat/sync-for-commerce";
import { Locale } from "@codat/sync-for-commerce/sdk/models/shared";

async function run() {
    const sdk = new CodatSyncCommerce({
        security: {
            authHeader: "Basic BASE_64_ENCODED(API_KEY)",
        },
    });

    const result = await sdk.syncFlowSettings.getConfigTextSyncFlow({
        locale: Locale.EnUs,
    });

    // Handle the result
    console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->