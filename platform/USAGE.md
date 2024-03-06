<!-- Start SDK Example Usage [usage] -->
```typescript
import { CodatPlatform } from "@codat/platform";

async function run() {
    const sdk = new CodatPlatform({
        security: {
            authHeader: "Basic BASE_64_ENCODED(API_KEY)",
        },
    });

    const res = await sdk.settings.createApiKey({
        name: "azure-invoice-finance-processor",
    });

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```
<!-- End SDK Example Usage [usage] -->