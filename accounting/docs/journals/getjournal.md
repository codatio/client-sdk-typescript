# getJournal
Available in: `journals`

Gets a single journal corresponding to the given ID.

## Example Usage
```typescript
import { CodatAccounting } from "@codat/accounting";
import { GetJournalRequest, GetJournalResponse } from "@codat/accounting/dist/sdk/models/operations";
import { JournalStatusEnum } from "@codat/accounting/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: GetJournalRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  journalId: "mollitia",
};

sdk.journals.getJournal(req).then((res: GetJournalResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```