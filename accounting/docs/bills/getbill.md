# getBill
Available in: `bills`

Get bill

## Example Usage
```typescript
import { CodatAccounting } from "@codat/accounting";
import { GetBillRequest, GetBillResponse } from "@codat/accounting/dist/sdk/models/operations";
import { BilledToTypeEnum, BillStatusEnum } from "@codat/accounting/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: GetBillRequest = {
  billId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
};

sdk.bills.getBill(req).then((res: GetBillResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```