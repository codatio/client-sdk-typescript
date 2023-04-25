# listIntegrations
Available in: `integrations`

List your available integrations

## Example Usage
```typescript
import { CodatCommon } from "@codat/common";
import { ListIntegrationsRequest, ListIntegrationsResponse } from "@codat/common/dist/sdk/models/operations";
import { DataTypeEnum, FeatureStateEnum, FeatureTypeEnum, SourceTypeEnum } from "@codat/common/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatCommon({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: ListIntegrationsRequest = {
  orderBy: "-modifiedDate",
  page: 1,
  pageSize: 100,
  query: "veritatis",
};

sdk.integrations.listIntegrations(req).then((res: ListIntegrationsResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```