# listPayments
Available in: `payments`

List commerce payments for the given company & data connection.

## Example Usage
```typescript
import { CodatCommerce } from "@codat/commerce";
import { ListPaymentsRequest, ListPaymentsResponse } from "@codat/commerce/dist/sdk/models/operations";
import { PaymentStatusEnum } from "@codat/commerce/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatCommerce({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: ListPaymentsRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  orderBy: "-modifiedDate",
  page: 1,
  pageSize: 100,
  query: "unde",
};

sdk.payments.listPayments(req).then((res: ListPaymentsResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```