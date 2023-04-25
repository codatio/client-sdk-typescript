# getPaymentMethod
Available in: `paymentMethods`

Gets the specified payment method for a given company.

## Example Usage
```typescript
import { CodatAccounting } from "@codat/accounting";
import { GetPaymentMethodRequest, GetPaymentMethodResponse } from "@codat/accounting/dist/sdk/models/operations";
import { PaymentMethodStatusEnum, PaymentMethodTypeEnum } from "@codat/accounting/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: GetPaymentMethodRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  paymentMethodId: "facere",
};

sdk.paymentMethods.getPaymentMethod(req).then((res: GetPaymentMethodResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```