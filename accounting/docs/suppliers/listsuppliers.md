# listSuppliers
Available in: `suppliers`

Gets the latest suppliers for a company, with pagination

## Example Usage
```typescript
import { CodatAccounting } from "@codat/accounting";
import { ListSuppliersRequest, ListSuppliersResponse } from "@codat/accounting/dist/sdk/models/operations";
import { AddressTypeEnum, SupplierStatusEnum } from "@codat/accounting/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: ListSuppliersRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  orderBy: "-modifiedDate",
  page: 1,
  pageSize: 100,
  query: "assumenda",
};

sdk.suppliers.listSuppliers(req).then((res: ListSuppliersResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```