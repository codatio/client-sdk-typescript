# listPayments
Available in: `payments`

Gets the latest payments for a company, with pagination

## Example Usage
```typescript
import { CodatAccounting } from "@codat/accounting";
import { ListPaymentsRequest, ListPaymentsResponse } from "@codat/accounting/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: ListPaymentsRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  orderBy: "-modifiedDate",
  page: 1,
  pageSize: 100,
  query: "aspernatur",
};

sdk.payments.listPayments(req).then((res: ListPaymentsResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```