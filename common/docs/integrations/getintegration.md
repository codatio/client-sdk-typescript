# getIntegration
Available in: `integrations`

Get single integration, by platformKey

## Example Usage
```typescript
import { CodatCommon } from "@codat/common";
import { GetIntegrationRequest, GetIntegrationResponse } from "@codat/common/dist/sdk/models/operations";
import { DataTypeEnum, FeatureStateEnum, FeatureTypeEnum, SourceTypeEnum } from "@codat/common/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatCommon({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: GetIntegrationRequest = {
  platformKey: "gbol",
};

sdk.integrations.getIntegration(req).then((res: GetIntegrationResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```