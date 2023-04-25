# getPurchaseOrder
Available in: `purchaseOrders`

Get purchase order

## Example Usage
```typescript
import { CodatAccounting } from "@codat/accounting";
import { GetPurchaseOrderRequest, GetPurchaseOrderResponse } from "@codat/accounting/dist/sdk/models/operations";
import { AddressTypeEnum, PurchaseOrderStatusEnum } from "@codat/accounting/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: GetPurchaseOrderRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  purchaseOrderId: "provident",
};

sdk.purchaseOrders.getPurchaseOrder(req).then((res: GetPurchaseOrderResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```