# getItem
Available in: `items`

Gets the specified item for a given company.

## Example Usage
```typescript
import { CodatAccounting } from "@codat/accounting";
import { GetItemRequest, GetItemResponse } from "@codat/accounting/dist/sdk/models/operations";
import { ItemStatusEnum } from "@codat/accounting/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: GetItemRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  itemId: "assumenda",
};

sdk.items.getItem(req).then((res: GetItemResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```