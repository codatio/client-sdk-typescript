# deleteJournalEntry
Available in: `journalEntries`

Deletes a journal entry from the accounting package for a given company.

> **Supported Integrations**
> 
> This functionality is currently only supported for our QuickBooks Online integration. Check out our [public roadmap](https://portal.productboard.com/codat/7-public-product-roadmap/tabs/46-accounting-api) to see what we're building next, and to submit ideas for new features.

## Example Usage
```typescript
import { CodatAccounting } from "@codat/accounting";
import { DeleteJournalEntryRequest, DeleteJournalEntryResponse } from "@codat/accounting/dist/sdk/models/operations";
import { DataTypeEnum, PushChangeTypeEnum, PushOperationStatusEnum } from "@codat/accounting/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: DeleteJournalEntryRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  journalEntryId: "8a210b68-6988-11ed-a1eb-0242ac120002",
};

sdk.journalEntries.deleteJournalEntry(req).then((res: DeleteJournalEntryResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```