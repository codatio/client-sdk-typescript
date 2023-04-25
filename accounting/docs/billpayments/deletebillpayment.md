# deleteBillPayment
Available in: `billPayments`

Deletes a bill payment from the accounting package for a given company.

> **Supported Integrations**
> 
> This functionality is currently only supported for our Oracle NetSuite integration. Check out our [public roadmap](https://portal.productboard.com/codat/7-public-product-roadmap/tabs/46-accounting-api) to see what we're building next, and to submit ideas for new features.

## Example Usage
```typescript
import { CodatAccounting } from "@codat/accounting";
import { DeleteBillPaymentRequest, DeleteBillPaymentResponse } from "@codat/accounting/dist/sdk/models/operations";
import { DataTypeEnum, PushChangeTypeEnum, PushOperationStatusEnum } from "@codat/accounting/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: DeleteBillPaymentRequest = {
  billPaymentId: "autem",
  companyId: "quo",
  connectionId: "nesciunt",
};

sdk.billPayments.deleteBillPayment(req).then((res: DeleteBillPaymentResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```