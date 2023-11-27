<!-- Start SDK Example Usage -->
```typescript
import { CodatSyncCommerce } from "@codat/sync-for-commerce";

(async () => {
    const sdk = new CodatSyncCommerce({
        security: {
            authHeader: "Basic BASE_64_ENCODED(API_KEY)",
        },
    });

    const res = await sdk.syncFlowSettings.getConfigTextSyncFlow();

    if (res.statusCode == 200) {
        // handle response
    }
})();

```
<!-- End SDK Example Usage -->