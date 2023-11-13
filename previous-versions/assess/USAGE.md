<!-- Start SDK Example Usage -->
```typescript
import { CodatAssess } from "@codat/assess";
import { SourceType } from "@codat/assess/dist/sdk/models/operations";

(async () => {
    const sdk = new CodatAssess({
        security: {
            authHeader: "Basic BASE_64_ENCODED(API_KEY)",
        },
    });

    const res = await sdk.reports.generateLoanSummary({
        companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
        sourceType: SourceType.Accounting,
    });

    if (res.statusCode == 200) {
        // handle response
    }
})();

```
<!-- End SDK Example Usage -->