# deleteCompany
Available in: `companies`

Delete the given company from Codat.
This operation is not reversible.

## Example Usage
```typescript
import { CodatCommon } from "@codat/common";
import { DeleteCompanyRequest, DeleteCompanyResponse } from "@codat/common/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new CodatCommon({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: DeleteCompanyRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
};

sdk.companies.deleteCompany(req).then((res: DeleteCompanyResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```