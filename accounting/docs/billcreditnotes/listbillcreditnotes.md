# listBillCreditNotes
Available in: `billCreditNotes`

Gets a list of all bill credit notes for a company, with pagination

## Example Usage
```typescript
import { CodatAccounting } from "@codat/accounting";
import { ListBillCreditNotesRequest, ListBillCreditNotesResponse } from "@codat/accounting/dist/sdk/models/operations";
import { BillCreditNoteStatusEnum, BilledToTypeEnum } from "@codat/accounting/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: ListBillCreditNotesRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  orderBy: "-modifiedDate",
  page: 1,
  pageSize: 100,
  query: "voluptatibus",
};

sdk.billCreditNotes.listBillCreditNotes(req).then((res: ListBillCreditNotesResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```