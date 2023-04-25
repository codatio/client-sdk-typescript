# updateConnectionAuthorization
Available in: `connections`

Update data connection's authorization.

## Example Usage
```typescript
import { CodatCommon } from "@codat/common";
import { UpdateConnectionAuthorizationRequest, UpdateConnectionAuthorizationResponse } from "@codat/common/dist/sdk/models/operations";
import { DataConnectionStatusEnum, SourceTypeEnum } from "@codat/common/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatCommon({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: UpdateConnectionAuthorizationRequest = {
  requestBody: {
    "iusto": "excepturi",
    "nisi": "recusandae",
    "temporibus": "ab",
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
};

sdk.connections.updateConnectionAuthorization(req).then((res: UpdateConnectionAuthorizationResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```