# getIntegrationsBranding
Available in: `integrations`

Get branding for platform.

## Example Usage
```typescript
import { CodatCommon } from "@codat/common";
import { GetIntegrationsBrandingRequest, GetIntegrationsBrandingResponse } from "@codat/common/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new CodatCommon({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: GetIntegrationsBrandingRequest = {
  platformKey: "gbol",
};

sdk.integrations.getIntegrationsBranding(req).then((res: GetIntegrationsBrandingResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```