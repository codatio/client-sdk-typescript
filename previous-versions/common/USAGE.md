<!-- Start SDK Example Usage -->


```typescript
import { CodatCommon } from "@codat/common";

(async () => {
    const sdk = new CodatCommon({
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