# getBillPayments
Available in: `billPayments`

Get a bill payment

## Example Usage
```typescript
import { CodatAccounting } from "@codat/accounting";
import { GetBillPaymentsRequest, GetBillPaymentsResponse } from "@codat/accounting/dist/sdk/models/operations";
import { BillPaymentLineLinkTypeEnum } from "@codat/accounting/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: GetBillPaymentsRequest = {
  billPaymentId: "illum",
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
};

sdk.billPayments.getBillPayments(req).then((res: GetBillPaymentsResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```