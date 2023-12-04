<!-- Start SDK Example Usage [usage] -->
```typescript
import { CodatCommon } from "@codat/common";

async function run() {
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
}

run();

```
<!-- End SDK Example Usage [usage] -->