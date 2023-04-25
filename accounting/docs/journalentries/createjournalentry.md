# createJournalEntry
Available in: `journalEntries`

Posts a new journalEntry to the accounting package for a given company.

Required data may vary by integration. To see what data to post, first call [Get create journal entry model](https://docs.codat.io/accounting-api#/operations/get-create-journalEntries-model).

> **Supported Integrations**
> 
> Check out our [Knowledge UI](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=journalEntries) for integrations that support creating journal entries.

## Example Usage
```typescript
import { CodatAccounting } from "@codat/accounting";
import { CreateJournalEntryRequest, CreateJournalEntryResponse } from "@codat/accounting/dist/sdk/models/operations";
import { DataTypeEnum, PushChangeTypeEnum, PushOperationStatusEnum } from "@codat/accounting/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: CreateJournalEntryRequest = {
  journalEntry: {
    createdOn: "2022-10-23T00:00:00Z",
    description: "mollitia",
    id: "a30b7b91-449a-4e69-8088-d418bb71804f",
    journalLines: [
      {
        accountRef: {
          id: "23d54393-5f37-47ac-9c9b-7e93b6a3c523",
          name: "Sharon Hayes",
        },
        currency: "impedit",
        description: "dolor",
        netAmount: 3078.67,
        tracking: {
          recordRefs: [
            {
              dataType: "deserunt",
              id: "b0ecb812-a661-4489-84a8-e9085075bc25",
            },
            {
              dataType: "dolorem",
              id: "8253343f-b0a4-4e66-aa47-578d171e2941",
            },
            {
              dataType: "totam",
              id: "18fc679b-6b2f-4253-99b8-55d015b62c8b",
            },
            {
              dataType: "praesentium",
              id: "3a38a8a8-8c14-4420-8c2c-aeb1ae1ecf8c",
            },
          ],
        },
      },
      {
        accountRef: {
          id: "34946bba-7a05-4a8b-8a9e-c5b3688cca36",
          name: "Sara Kuhic",
        },
        currency: "iure",
        description: "sit",
        netAmount: 8973.52,
        tracking: {
          recordRefs: [
            {
              dataType: "vel",
              id: "6e97e054-1033-447d-b8ff-2491145fab9e",
            },
            {
              dataType: "veniam",
              id: "9a4af336-664e-4aa6-bf2f-f14e8c1b352a",
            },
            {
              dataType: "porro",
              id: "cedacc52-2781-44ec-a016-bc41ea1342d4",
            },
          ],
        },
      },
    ],
    journalRef: {
      id: "104a25ef-71de-457a-91d6-14a4317692ea",
      name: "Lena Howell",
    },
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "2022-10-23T00:00:00Z",
    postedOn: "2022-10-23T00:00:00Z",
    recordRef: {
      dataType: "vero",
      id: "522b828a-9030-4660-b024-c79b4cc64c2b",
    },
    sourceModifiedDate: "2022-10-23T00:00:00Z",
    supplementalData: {
      content: {
        "culpa": {
          "odit": "optio",
        },
      },
    },
    updatedOn: "2022-10-23T00:00:00Z",
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  timeoutInMinutes: 287244,
};

sdk.journalEntries.createJournalEntry(req).then((res: CreateJournalEntryResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```