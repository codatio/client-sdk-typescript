# listJournals
Available in: `journals`

Gets the latest journals for a company, with pagination

## Example Usage
```typescript
import { CodatAccounting } from "@codat/accounting";
import { ListJournalsRequest, ListJournalsResponse } from "@codat/accounting/dist/sdk/models/operations";
import { JournalStatusEnum } from "@codat/accounting/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: ListJournalsRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  orderBy: "-modifiedDate",
  page: 1,
  pageSize: 100,
  query: "facere",
};

sdk.journals.listJournals(req).then((res: ListJournalsResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```