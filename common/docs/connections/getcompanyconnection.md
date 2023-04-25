# getCompanyConnection
Available in: `connections`

Get a single connection for a company

## Example Usage
```typescript
import { CodatCommon } from "@codat/common";
import { GetCompanyConnectionRequest, GetCompanyConnectionResponse } from "@codat/common/dist/sdk/models/operations";
import { DataConnectionStatusEnum, SourceTypeEnum } from "@codat/common/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatCommon({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: GetCompanyConnectionRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
};

sdk.connections.getCompanyConnection(req).then((res: GetCompanyConnectionResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```