# getSupplier
Available in: `suppliers`

Gets a single supplier corresponding to the given ID.

## Example Usage
```typescript
import { CodatAccounting } from "@codat/accounting";
import { GetSupplierRequest, GetSupplierResponse } from "@codat/accounting/dist/sdk/models/operations";
import { AddressTypeEnum, SupplierStatusEnum } from "@codat/accounting/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: GetSupplierRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  supplierId: "8a210b68-6988-11ed-a1eb-0242ac120002",
};

sdk.suppliers.getSupplier(req).then((res: GetSupplierResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```