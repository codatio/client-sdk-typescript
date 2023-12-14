<!-- Start SDK Example Usage [usage] -->
```typescript
import { CodatAssess } from "@codat/assess";
import { SourceType } from "@codat/assess/dist/sdk/models/operations";

async function run() {
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
}

run();

```
<!-- End SDK Example Usage [usage] -->