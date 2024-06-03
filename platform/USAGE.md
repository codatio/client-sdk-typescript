<!-- Start SDK Example Usage [usage] -->
```typescript
import { CodatPlatform } from "@codat/platform";

const codatPlatform = new CodatPlatform({
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
    const result = await codatPlatform.settings.createApiKey({
        name: "azure-invoice-finance-processor",
    });

    // Handle the result
    console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->