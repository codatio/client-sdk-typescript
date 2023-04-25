# listRules
Available in: `webhooks`

List webhooks that you are subscribed to.

## Example Usage
```typescript
import { CodatCommon } from "@codat/common";
import { ListRulesRequest, ListRulesResponse } from "@codat/common/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new CodatCommon({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: ListRulesRequest = {
  orderBy: "-modifiedDate",
  page: 1,
  pageSize: 100,
  query: "architecto",
};

sdk.webhooks.listRules(req).then((res: ListRulesResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```