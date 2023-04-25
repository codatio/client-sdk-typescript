# listPaymentMethods
Available in: `paymentMethods`

Gets the payment methods for a given company.

## Example Usage
```typescript
import { CodatAccounting } from "@codat/accounting";
import { ListPaymentMethodsRequest, ListPaymentMethodsResponse } from "@codat/accounting/dist/sdk/models/operations";
import { BilledToTypeEnum, BillStatusEnum } from "@codat/accounting/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: ListPaymentMethodsRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  orderBy: "-modifiedDate",
  page: 1,
  pageSize: 100,
  query: "architecto",
};

sdk.paymentMethods.listPaymentMethods(req).then((res: ListPaymentMethodsResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```