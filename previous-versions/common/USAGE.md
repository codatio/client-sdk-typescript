<!-- Start SDK Example Usage -->
```typescript
import { CodatCommon } from "@codat/common";

(async () => {
    const sdk = new CodatCommon({
        security: {
            authHeader: "",
        },
    });

    const res = await sdk.settings.createApiKey({
        name: "azure-invoice-finance-processor",
    });

    if (res.statusCode == 200) {
        // handle response
    }
})();

```
<!-- End SDK Example Usage -->