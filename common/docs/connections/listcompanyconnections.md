# listCompanyConnections
Available in: `connections`

List the connections for a company

## Example Usage
```typescript
import { CodatCommon } from "@codat/common";
import { ListCompanyConnectionsRequest, ListCompanyConnectionsResponse } from "@codat/common/dist/sdk/models/operations";
import { DataConnectionStatusEnum, SourceTypeEnum } from "@codat/common/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatCommon({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: ListCompanyConnectionsRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  orderBy: "-modifiedDate",
  page: 1,
  pageSize: 100,
  query: "minus",
};

sdk.connections.listCompanyConnections(req).then((res: ListCompanyConnectionsResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```