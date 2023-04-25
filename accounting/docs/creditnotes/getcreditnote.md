# getCreditNote
Available in: `creditNotes`

Gets a single creditNote corresponding to the given ID.

## Example Usage
```typescript
import { CodatAccounting } from "@codat/accounting";
import { GetCreditNoteRequest, GetCreditNoteResponse } from "@codat/accounting/dist/sdk/models/operations";
import { BilledToTypeEnum1, CreditNoteStatusEnum } from "@codat/accounting/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: GetCreditNoteRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  creditNoteId: "eligendi",
};

sdk.creditNotes.getCreditNote(req).then((res: GetCreditNoteResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```