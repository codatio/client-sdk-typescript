# getProfile
Available in: `settings`

Fetch your Codat profile.

## Example Usage
```typescript
import { CodatCommon } from "@codat/common";
import { GetProfileResponse } from "@codat/common/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new CodatCommon({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.settings.getProfile().then((res: GetProfileResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```