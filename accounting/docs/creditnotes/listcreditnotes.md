# listCreditNotes
Available in: `creditNotes`

Gets a list of all credit notes for a company, with pagination

## Example Usage
```typescript
import { CodatAccounting } from "@codat/accounting";
import { ListCreditNotesRequest, ListCreditNotesResponse } from "@codat/accounting/dist/sdk/models/operations";
import { BilledToTypeEnum1, CreditNoteStatusEnum } from "@codat/accounting/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: ListCreditNotesRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  orderBy: "-modifiedDate",
  page: 1,
  pageSize: 100,
  query: "consequuntur",
};

sdk.creditNotes.listCreditNotes(req).then((res: ListCreditNotesResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```