# listItems
Available in: `items`

Gets the items for a given company.

## Example Usage
```typescript
import { CodatAccounting } from "@codat/accounting";
import { ListItemsRequest, ListItemsResponse } from "@codat/accounting/dist/sdk/models/operations";
import { ItemStatusEnum } from "@codat/accounting/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: ListItemsRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  orderBy: "-modifiedDate",
  page: 1,
  pageSize: 100,
  query: "repellendus",
};

sdk.items.listItems(req).then((res: ListItemsResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```