<!-- Start SDK Example Usage [usage] -->
```typescript
import { CodatSyncCommerce } from "@codat/sync-for-commerce";
import { Locale } from "@codat/sync-for-commerce/dist/sdk/models/shared";

async function run() {
    const sdk = new CodatSyncCommerce({
        security: {
            authHeader: "Basic BASE_64_ENCODED(API_KEY)",
        },
    });

    const res = await sdk.syncFlowSettings.getConfigTextSyncFlow({
        locale: Locale.EnUs,
    });

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```
<!-- End SDK Example Usage [usage] -->