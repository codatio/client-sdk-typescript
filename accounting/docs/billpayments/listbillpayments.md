# listBillPayments
Available in: `billPayments`

Gets the latest billPayments for a company, with pagination

## Example Usage
```typescript
import { CodatAccounting } from "@codat/accounting";
import { ListBillPaymentsRequest, ListBillPaymentsResponse } from "@codat/accounting/dist/sdk/models/operations";
import { BillPaymentLineLinkTypeEnum } from "@codat/accounting/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: ListBillPaymentsRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  orderBy: "-modifiedDate",
  page: 1,
  pageSize: 100,
  query: "nemo",
};

sdk.billPayments.listBillPayments(req).then((res: ListBillPaymentsResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```