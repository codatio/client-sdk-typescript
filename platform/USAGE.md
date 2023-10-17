<!-- Start SDK Example Usage -->


```typescript
import { CodatPlatform } from "@codat/platform";

(async () => {
    const sdk = new CodatPlatform({
        security: {
            authHeader: "",
        },
    });

    const res = await sdk.companies.create({
        description: "Requested early access to the new financing scheme.",
        name: "Bank of Dave",
    });

    if (res.statusCode == 200) {
        // handle response
    }
})();

```
<!-- End SDK Example Usage -->