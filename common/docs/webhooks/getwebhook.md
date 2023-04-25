# getWebhook
Available in: `webhooks`

Get a single webhook

## Example Usage
```typescript
import { CodatCommon } from "@codat/common";
import { GetWebhookRequest, GetWebhookResponse } from "@codat/common/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new CodatCommon({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: GetWebhookRequest = {
  ruleId: "7318949f-c008-4936-a8ff-10d7ab563fa6",
};

sdk.webhooks.getWebhook(req).then((res: GetWebhookResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```