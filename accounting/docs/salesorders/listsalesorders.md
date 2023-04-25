# listSalesOrders
Available in: `salesOrders`

Get sales orders

## Example Usage
```typescript
import { CodatAccounting } from "@codat/accounting";
import { ListSalesOrdersRequest, ListSalesOrdersResponse } from "@codat/accounting/dist/sdk/models/operations";
import { AddressTypeEnum, SalesOrderInvoiceStatusEnum, SalesOrderStatusEnum } from "@codat/accounting/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: ListSalesOrdersRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  orderBy: "-modifiedDate",
  page: 1,
  pageSize: 100,
  query: "ipsa",
};

sdk.salesOrders.listSalesOrders(req).then((res: ListSalesOrdersResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```