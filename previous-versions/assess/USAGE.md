<!-- Start SDK Example Usage -->


```typescript
import { CodatAssess } from "@codat/assess";
import { ListDataTypeDataIntegrityDetailsResponse } from "@codat/assess/dist/sdk/models/operations";
import { DataIntegrityDataType } from "@codat/assess/dist/sdk/models/shared";

const sdk = new CodatAssess({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.dataIntegrity.details({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  dataType: DataIntegrityDataType.BankingAccounts,
  orderBy: "-modifiedDate",
  page: 1,
  pageSize: 100,
  query: "Savings",
}).then((res: ListDataTypeDataIntegrityDetailsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
<!-- End SDK Example Usage -->