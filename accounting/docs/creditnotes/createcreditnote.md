# createCreditNote
Available in: `creditNotes`

Push credit note


Required data may vary by integration. To see what data to post, first call [Get create/update credit note model](https://docs.codat.io/accounting-api#/operations/get-create-update-creditNotes-model).

> **Supported Integrations**
> 
> Check out our [Knowledge UI](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=creditNotes) for integrations that support creating a credit note.

## Example Usage
```typescript
import { CodatAccounting } from "@codat/accounting";
import { CreateCreditNoteRequest, CreateCreditNoteResponse } from "@codat/accounting/dist/sdk/models/operations";
import {
  BilledToTypeEnum1,
  CreditNoteStatusEnum,
  DataTypeEnum,
  PushChangeTypeEnum,
  PushOperationStatusEnum,
} from "@codat/accounting/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: CreateCreditNoteRequest = {
  creditNote: {
    additionalTaxAmount: 4884.33,
    additionalTaxPercentage: 3427.72,
    allocatedOnDate: "2022-10-23T00:00:00Z",
    creditNoteNumber: "maiores",
    currency: "veritatis",
    currencyRate: 4226.1,
    customerRef: {
      companyName: "earum",
      id: "56d385a3-c4ac-4631-b99e-26ced8f9fdb9",
    },
    discountPercentage: 2913.44,
    id: "10f63bbf-8178-437b-81af-dd788624189e",
    issueDate: "2022-10-23T00:00:00Z",
    lineItems: [
      {
        accountRef: {
          id: "44873f50-33f1-49db-b125-ce4152eab9cd",
          name: "Sonja Hansen",
        },
        description: "eius",
        discountAmount: 6253.78,
        discountPercentage: 4274.61,
        isDirectIncome: false,
        itemRef: {
          id: "a0e123b7-847e-4c59-a1f6-7f3c4cce4b6d",
          name: "Vicki Mayer",
        },
        quantity: 9570.32,
        subTotal: 2322.09,
        taxAmount: 7574.94,
        taxRateRef: {
          effectiveTaxRate: 3534.24,
          id: "74750135-7e44-4f51-b8b0-84c3197e193a",
          name: "Eva Hettinger",
        },
        totalAmount: 4990.05,
        tracking: {
          categoryRefs: [
            {
              id: "94874c2d-5cc4-4972-a33e-66bd8fe5d00b",
              name: "Darren Monahan",
            },
            {
              id: "20387320-590c-4cc1-8964-00313b3e5044",
              name: "Gene Herman",
            },
            {
              id: "72dc4077-d0cc-43f4-88ef-c15ceb4d6e1e",
              name: "Alonzo Bartell",
            },
            {
              id: "5aedf2ac-ab58-4b99-9c92-6ddb589461e7",
              name: "Beverly Block",
            },
          ],
          customerRef: {
            companyName: "recusandae",
            id: "6d9502f0-ea93-40b6-9f7a-c2f72f885009",
          },
          isBilledTo: BilledToTypeEnum1.Unknown,
          isRebilledTo: BilledToTypeEnum1.Unknown,
          projectRef: {
            id: "91160820-7888-4ec6-a183-bfe9659eb40e",
            name: "Willie Hodkiewicz",
          },
        },
        trackingCategoryRefs: [
          {
            id: "75b0b532-a4da-437c-baaf-4452c4842c9b",
            name: "Jodi Stroman",
          },
          {
            id: "dafe81a8-8f44-4445-b3fe-cd47353f63c8",
            name: "Cynthia Morissette",
          },
          {
            id: "9aa69cd5-fbcf-479d-a18a-7822bf95894e",
            name: "Miss Maxine Kemmer",
          },
          {
            id: "b55f9e5d-751c-49fe-8f75-02bfdc345084",
            name: "Josefina Borer",
          },
        ],
        unitAmount: 2943.14,
      },
      {
        accountRef: {
          id: "456379f3-fb27-4e21-b862-657b36fc6b9f",
          name: "Nina Kshlerin",
        },
        description: "ad",
        discountAmount: 1676.13,
        discountPercentage: 3457.46,
        isDirectIncome: false,
        itemRef: {
          id: "c67641a8-312e-4504-bb4c-21ccb423abcd",
          name: "Arturo Bosco",
        },
        quantity: 6654.27,
        subTotal: 7160.24,
        taxAmount: 8546.46,
        taxRateRef: {
          effectiveTaxRate: 8621.67,
          id: "88e71f6c-4825-42d7-b71e-7fd074009ef8",
          name: "Carlos Morissette",
        },
        totalAmount: 717.41,
        tracking: {
          categoryRefs: [
            {
              id: "d7097b5d-a08c-457f-a6c7-8a216e19bafe",
              name: "Ms. Gerard Hudson II",
            },
            {
              id: "98140b64-ff8a-4e17-8ef0-3b5f37e4aa86",
              name: "Tim Hamill",
            },
            {
              id: "66732aa5-dcb6-4682-8b70-f8cfd5fb6e91",
              name: "Alejandro Pacocha",
            },
            {
              id: "74846e2c-3309-4db0-936d-9e75ca006f53",
              name: "Mr. Jeremy Sanford",
            },
          ],
          customerRef: {
            companyName: "quia",
            id: "5a8bf92f-9742-48ad-9a9f-8bf822112535",
          },
          isBilledTo: BilledToTypeEnum1.NotApplicable,
          isRebilledTo: BilledToTypeEnum1.Project,
          projectRef: {
            id: "98387f7a-79cd-472c-9248-4da21729f2ac",
            name: "Amanda Tromp",
          },
        },
        trackingCategoryRefs: [
          {
            id: "25f1169a-c1e4-41d8-a23c-23e34f2dfa4a",
            name: "Claire Koepp",
          },
          {
            id: "de922151-fe17-4120-9985-3e9f543d8544",
            name: "Katrina Thompson",
          },
        ],
        unitAmount: 1351.1,
      },
      {
        accountRef: {
          id: "4460443b-c154-4188-82f5-6e85da7832ea",
          name: "Ms. Ismael Hodkiewicz",
        },
        description: "nesciunt",
        discountAmount: 6902.11,
        discountPercentage: 454.45,
        isDirectIncome: false,
        itemRef: {
          id: "d51a44bf-01ba-4d87-86d4-6082bfbdc41f",
          name: "Maurice Strosin",
        },
        quantity: 1528.07,
        subTotal: 6511.36,
        taxAmount: 9016.11,
        taxRateRef: {
          effectiveTaxRate: 2893.73,
          id: "fb5cb35d-1763-48f1-adb7-8359ecc5cb86",
          name: "Marta Macejkovic",
        },
        totalAmount: 3563.51,
        tracking: {
          categoryRefs: [
            {
              id: "0ba73810-e4fe-4444-b297-cd3b1dd3bbce",
              name: "Debbie Kozey",
            },
            {
              id: "684eff50-126d-471c-bfbd-0eb74b842195",
              name: "Melody Grady",
            },
            {
              id: "d3c43159-d33e-4595-bc00-1139863aa41e",
              name: "Dr. Kara Feil",
            },
          ],
          customerRef: {
            companyName: "explicabo",
            id: "f1fcb51c-9a41-4ffb-a9cb-d795ee65e076",
          },
          isBilledTo: BilledToTypeEnum1.Project,
          isRebilledTo: BilledToTypeEnum1.Project,
          projectRef: {
            id: "7abf616e-a5c7-4164-9934-b90f2e09d19d",
            name: "Dr. Lorene Runte",
          },
        },
        trackingCategoryRefs: [
          {
            id: "2e105944-b935-4d23-ba72-f90849d6aed4",
            name: "Ramiro Rowe",
          },
          {
            id: "537cd922-2c9f-4f57-891a-abfa2e761f0c",
            name: "Troy Stroman",
          },
          {
            id: "6ef1031e-6899-4f0c-a001-e22cd55cc058",
            name: "Hattie Botsford",
          },
          {
            id: "d76d971f-c820-4c65-b037-bb8e0cc88518",
            name: "Rochelle Grant",
          },
        ],
        unitAmount: 96.87,
      },
    ],
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "2022-10-23T00:00:00Z",
    note: "ut",
    paymentAllocations: [
      {
        allocation: {
          allocatedOnDate: "2022-10-23T00:00:00Z",
          currency: "hic",
          currencyRate: 1531.31,
          totalAmount: 5461.33,
        },
        payment: {
          accountRef: {
            id: "c5dddb46-aa1c-4fd6-9828-da0131911296",
            name: "Beth Keeling",
          },
          currency: "cumque",
          currencyRate: 701.73,
          id: "d81f2904-2f56-49b7-aff0-ea2216cbe071",
          note: "harum",
          paidOnDate: "2022-10-23T00:00:00Z",
          reference: "cumque",
          totalAmount: 697.88,
        },
      },
      {
        allocation: {
          allocatedOnDate: "2022-10-23T00:00:00Z",
          currency: "ex",
          currencyRate: 2198.04,
          totalAmount: 8847.04,
        },
        payment: {
          accountRef: {
            id: "279a3b08-4da9-4925-bd04-f40847a742d8",
            name: "Charlotte McGlynn",
          },
          currency: "tempore",
          currencyRate: 8142.92,
          id: "eecf6b99-bc63-4562-abfd-f55c294c060b",
          note: "accusantium",
          paidOnDate: "2022-10-23T00:00:00Z",
          reference: "ea",
          totalAmount: 6715.04,
        },
      },
      {
        allocation: {
          allocatedOnDate: "2022-10-23T00:00:00Z",
          currency: "et",
          currencyRate: 1448.56,
          totalAmount: 5505.79,
        },
        payment: {
          accountRef: {
            id: "7764eef6-d0c6-4d6e-99c7-3dd634571509",
            name: "Nelson Walker",
          },
          currency: "doloremque",
          currencyRate: 8440.94,
          id: "3c5a1f9c-242c-47b6-aa1f-30c73df5b671",
          note: "excepturi",
          paidOnDate: "2022-10-23T00:00:00Z",
          reference: "voluptatum",
          totalAmount: 6108.73,
        },
      },
    ],
    remainingCredit: 509.03,
    sourceModifiedDate: "2022-10-23T00:00:00Z",
    status: CreditNoteStatusEnum.PartiallyPaid,
    subTotal: 3021.47,
    supplementalData: {
      content: {
        "est": {
          "nobis": "expedita",
          "modi": "adipisci",
        },
      },
    },
    totalAmount: 5401.92,
    totalDiscount: 8712.98,
    totalTaxAmount: 5236.07,
    withholdingTax: [
      {
        amount: 7311.86,
        name: "Vanessa Beahan",
      },
      {
        amount: 1195.43,
        name: "Ron Goodwin",
      },
    ],
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  timeoutInMinutes: 195946,
};

sdk.creditNotes.createCreditNote(req).then((res: CreateCreditNoteResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```