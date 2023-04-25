# updateProfile
Available in: `settings`

Update your Codat profile

## Example Usage
```typescript
import { CodatCommon } from "@codat/common";
import { Profile, UpdateProfileResponse } from "@codat/common/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new CodatCommon({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: shared.Profile = {
  alertAuthHeader: "explicabo",
  apiKey: "nobis",
  confirmCompanyName: false,
  iconUrl: "enim",
  logoUrl: "omnis",
  name: "Bob's Burgers",
  redirectUrl: "nemo",
  whiteListUrls: [
    "https://bobs-burgers.com/redirect",
    "https://bobs-burgers.com/redirect",
  ],
};

sdk.settings.updateProfile(req).then((res: UpdateProfileResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```