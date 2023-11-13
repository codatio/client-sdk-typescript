<!-- Start SDK Example Usage -->
```typescript
import { CodatPlatform } from "@codat/platform";

(async () => {
    const sdk = new CodatPlatform({
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