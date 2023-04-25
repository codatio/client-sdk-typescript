# listPaymentMethods
Available in: `payments`

Retrieve a list of payment methods, such as card, cash or other online payment methods, as held in the linked commerce platform.

## Example Usage
```typescript
import { CodatCommerce } from "@codat/commerce";
import { ListPaymentMethodsRequest, ListPaymentMethodsResponse } from "@codat/commerce/dist/sdk/models/operations";
import { PaymentMethodStatusEnum } from "@codat/commerce/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatCommerce({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: ListPaymentMethodsRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  orderBy: "-modifiedDate",
  page: 1,
  pageSize: 100,
  query: "quibusdam",
};

sdk.payments.listPaymentMethods(req).then((res: ListPaymentMethodsResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```