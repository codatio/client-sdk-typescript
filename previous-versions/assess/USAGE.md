<!-- Start SDK Example Usage -->


```typescript
import { CodatAssess } from "@codat/assess";
import { DataIntegrityDataType } from "@codat/assess/dist/sdk/models/shared";

(async () => {
    const sdk = new CodatAssess({
        security: {
            authHeader: "Basic BASE_64_ENCODED(API_KEY)",
        },
    });

    const res = await sdk.dataIntegrity.details({
        companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
        dataType: DataIntegrityDataType.BankingAccounts,
        orderBy: "-modifiedDate",
        page: 1,
        pageSize: 100,
    });

    if (res.statusCode == 200) {
        // handle response
    }
})();

```
<!-- End SDK Example Usage -->