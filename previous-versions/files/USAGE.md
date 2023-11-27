<!-- Start SDK Example Usage -->
```typescript
import { CodatFiles } from "@codat/files";

(async () => {
    const sdk = new CodatFiles({
        security: {
            authHeader: "Basic BASE_64_ENCODED(API_KEY)",
        },
    });

    const res = await sdk.files.downloadFiles({
        companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
        date: "2022-10-23T00:00:00.000Z",
    });

    if (res.statusCode == 200) {
        // handle response
    }
})();

```
<!-- End SDK Example Usage -->