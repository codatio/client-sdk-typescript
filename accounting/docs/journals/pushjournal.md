# pushJournal
Available in: `journals`

Posts a new journal to the accounting package for a given company.

Required data may vary by integration. To see what data to post, first call [Get create journal model](https://docs.codat.io/accounting-api#/operations/get-create-journals-model).

> **Supported Integrations**
> 
> Check out our [Knowledge UI](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=journals) for integrations that support creating journals.

## Example Usage
```typescript
import { CodatAccounting } from "@codat/accounting";
import { PushJournalRequest, PushJournalResponse } from "@codat/accounting/dist/sdk/models/operations";
import { DataTypeEnum, JournalStatusEnum, PushChangeTypeEnum, PushOperationStatusEnum } from "@codat/accounting/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: PushJournalRequest = {
  journal: {
    createdOn: "2022-10-23T00:00:00Z",
    hasChildren: false,
    id: "e62f6aa5-58a6-45e2-8830-16ca34bb87d4",
    journalCode: "repellat",
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "2022-10-23T00:00:00Z",
    name: "Lori Bergstrom",
    parentId: "culpa",
    sourceModifiedDate: "2022-10-23T00:00:00Z",
    status: JournalStatusEnum.Active,
    type: "accusantium",
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  timeoutInMinutes: 461123,
};

sdk.journals.pushJournal(req).then((res: PushJournalResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```