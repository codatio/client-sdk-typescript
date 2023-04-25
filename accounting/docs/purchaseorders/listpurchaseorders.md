# listPurchaseOrders
Available in: `purchaseOrders`

Get purchase orders

## Example Usage
```typescript
import { CodatAccounting } from "@codat/accounting";
import { ListPurchaseOrdersRequest, ListPurchaseOrdersResponse } from "@codat/accounting/dist/sdk/models/operations";
import { AddressTypeEnum, PurchaseOrderStatusEnum } from "@codat/accounting/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: ListPurchaseOrdersRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  orderBy: "-modifiedDate",
  page: 1,
  pageSize: 100,
  query: "quod",
};

sdk.purchaseOrders.listPurchaseOrders(req).then((res: ListPurchaseOrdersResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```