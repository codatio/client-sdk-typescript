# getPayment
Available in: `payments`

Get payment

## Example Usage
```typescript
import { CodatAccounting } from "@codat/accounting";
import { GetPaymentRequest, GetPaymentResponse } from "@codat/accounting/dist/sdk/models/operations";
import { PaymentLinkTypeEnum } from "@codat/accounting/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: GetPaymentRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  paymentId: "qui",
};

sdk.payments.getPayment(req).then((res: GetPaymentResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```