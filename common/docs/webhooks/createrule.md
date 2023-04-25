# createRule
Available in: `webhooks`

Create a new webhook configuration

## Example Usage
```typescript
import { CodatCommon } from "@codat/common";
import { CreateRuleResponse, Rule } from "@codat/common/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new CodatCommon({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: shared.Rule = {
  companyId: "39b73b17-cc2e-429e-915d-71654e9dcd1e",
  id: "ff89c50e-a719-4ef5-a182-9917e53927b6",
  notifiers: {
    emails: [
      "info@client.com",
      "info@client.com",
      "info@client.com",
      "info@client.com",
    ],
    webhook: "https://webhook.client.com",
  },
  type: "sapiente",
};

sdk.webhooks.createRule(req).then((res: CreateRuleResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```