# deleteCompanyConnection
Available in: `connections`

Revoke and remove a connection from a company.
This operation is not reversible - the end user would need to reauthorize a new data connection if you wish to view new data for this company.

## Example Usage
```typescript
import { CodatCommon } from "@codat/common";
import { DeleteCompanyConnectionRequest, DeleteCompanyConnectionResponse } from "@codat/common/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new CodatCommon({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: DeleteCompanyConnectionRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
};

sdk.connections.deleteCompanyConnection(req).then((res: DeleteCompanyConnectionResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```