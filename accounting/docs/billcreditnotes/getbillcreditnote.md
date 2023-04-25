# getBillCreditNote
Available in: `billCreditNotes`

Gets a single billCreditNote corresponding to the given ID.

## Example Usage
```typescript
import { CodatAccounting } from "@codat/accounting";
import { GetBillCreditNoteRequest, GetBillCreditNoteResponse } from "@codat/accounting/dist/sdk/models/operations";
import { BillCreditNoteStatusEnum, BilledToTypeEnum } from "@codat/accounting/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: GetBillCreditNoteRequest = {
  billCreditNoteId: "velit",
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
};

sdk.billCreditNotes.getBillCreditNote(req).then((res: GetBillCreditNoteResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```