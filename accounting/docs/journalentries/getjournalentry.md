# getJournalEntry
Available in: `journalEntries`

Gets a single JournalEntry corresponding to the given ID.

## Example Usage
```typescript
import { CodatAccounting } from "@codat/accounting";
import { GetJournalEntryRequest, GetJournalEntryResponse } from "@codat/accounting/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: GetJournalEntryRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  journalEntryId: "voluptatum",
};

sdk.journalEntries.getJournalEntry(req).then((res: GetJournalEntryResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```