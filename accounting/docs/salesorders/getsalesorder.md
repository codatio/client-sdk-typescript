# getSalesOrder
Available in: `salesOrders`

Get sales order

## Example Usage
```typescript
import { CodatAccounting } from "@codat/accounting";
import { GetSalesOrderRequest, GetSalesOrderResponse } from "@codat/accounting/dist/sdk/models/operations";
import { AddressTypeEnum, SalesOrderInvoiceStatusEnum, SalesOrderStatusEnum } from "@codat/accounting/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: GetSalesOrderRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  salesOrderId: "voluptatibus",
};

sdk.salesOrders.getSalesOrder(req).then((res: GetSalesOrderResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```