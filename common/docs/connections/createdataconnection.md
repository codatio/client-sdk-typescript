# createDataConnection
Available in: `connections`

Create a data connection for a company

## Example Usage
```typescript
import { CodatCommon } from "@codat/common";
import { CreateDataConnectionRequest, CreateDataConnectionResponse } from "@codat/common/dist/sdk/models/operations";
import { DataConnectionStatusEnum, SourceTypeEnum } from "@codat/common/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatCommon({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: CreateDataConnectionRequest = {
  requestBody: {
    platformKey: "molestiae",
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
};

sdk.connections.createDataConnection(req).then((res: CreateDataConnectionResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```