# creditNotes

## Overview

Credit notes

### Available Operations

* [create](#create) - Create credit note
* [get](#get) - Get credit note
* [getCreateUpdateModel](#getcreateupdatemodel) - Get create/update credit note model
* [list](#list) - List credit notes
* [update](#update) - Update creditNote

## create

Push credit note


Required data may vary by integration. To see what data to post, first call [Get create/update credit note model](https://docs.codat.io/accounting-api#/operations/get-create-update-creditNotes-model).

> **Supported Integrations**
> 
> Check out our [Knowledge UI](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=creditNotes) for integrations that support creating a credit note.

### Example Usage

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
    additionalTaxAmount: 4618.53,
    additionalTaxPercentage: 5345.09,
    allocatedOnDate: "rem",
    creditNoteNumber: "vel",
    currency: "eos",
    currencyRate: 2864.64,
    customerRef: {
      companyName: "sunt",
      id: "89eb4487-3f50-433f-99db-f125ce4152ea",
    },
    discountPercentage: 7125.23,
    id: "9cd7e522-4a6a-40e1-a3b7-847ec59e1f67",
    issueDate: "repellat",
    lineItems: [
      {
        accountRef: {
          id: "c4cce4b6-d769-46ff-bc57-47501357e44f",
          name: "Jean Welch",
        },
        description: "consequatur",
        discountAmount: 5167.39,
        discountPercentage: 2725.18,
        isDirectIncome: false,
        itemRef: {
          id: "c3197e19-3a24-4546-bf94-874c2d5cc497",
          name: "Norma Feest",
        },
        quantity: 4358.41,
        subTotal: 3961.88,
        taxAmount: 7385.92,
        taxRateRef: {
          effectiveTaxRate: 8537.01,
          id: "8fe5d00b-979e-4f20-b873-20590ccc1096",
          name: "Sarah Bartell I",
        },
        totalAmount: 6992.15,
        tracking: {
          categoryRefs: [
            {
              id: "e5044f65-fe72-4dc4-877d-0cc3f408efc1",
              name: "Pat Upton",
            },
          ],
          customerRef: {
            companyName: "illum",
            id: "6e1eae0f-75ae-4df2-acab-58b991c926dd",
          },
          isBilledTo: BilledToTypeEnum1.Project,
          isRebilledTo: BilledToTypeEnum1.Unknown,
          projectRef: {
            id: "89461e74-21cb-4e6d-9502-f0ea930b69f7",
            name: "Spencer Crooks",
          },
        },
        trackingCategoryRefs: [
          {
            id: "f8850090-4911-4608-a078-88ec66183bfe",
            name: "Ricardo Hermiston",
          },
        ],
        unitAmount: 6946.11,
      },
    ],
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "magnam",
    note: "doloremque",
    paymentAllocations: [
      {
        allocation: {
          allocatedOnDate: "quod",
          currency: "sunt",
          currencyRate: 3774.3,
          totalAmount: 9382.3,
        },
        payment: {
          accountRef: {
            id: "af75b0b5-32a4-4da3-bcba-af4452c4842c",
            name: "Garry Conn",
          },
          currency: "ipsum",
          currencyRate: 1292.7,
          id: "dafe81a8-8f44-4445-b3fe-cd47353f63c8",
          note: "sed",
          paidOnDate: "eaque",
          reference: "natus",
          totalAmount: 1912.02,
        },
      },
      {
        allocation: {
          allocatedOnDate: "nihil",
          currency: "unde",
          currencyRate: 6463.21,
          totalAmount: 6621.84,
        },
        payment: {
          accountRef: {
            id: "69cd5fbc-f79d-4a18-a782-2bf95894e686",
            name: "Lynda Schuppe",
          },
          currency: "quaerat",
          currencyRate: 9830.67,
          id: "9e5d751c-9fe8-4f75-82bf-dc3450841f17",
          note: "autem",
          paidOnDate: "dolore",
          reference: "eius",
          totalAmount: 3423.93,
        },
      },
      {
        allocation: {
          allocatedOnDate: "ex",
          currency: "amet",
          currencyRate: 4543.86,
          totalAmount: 5653.04,
        },
        payment: {
          accountRef: {
            id: "f3fb27e2-1f86-4265-bb36-fc6b9f587ce5",
            name: "Audrey Schimmel",
          },
          currency: "ea",
          currencyRate: 2569.41,
          id: "1a8312e5-047b-44c2-9ccb-423abcdc91fa",
          note: "est",
          paidOnDate: "distinctio",
          reference: "fugiat",
          totalAmount: 8621.67,
        },
      },
      {
        allocation: {
          allocatedOnDate: "totam",
          currency: "praesentium",
          currencyRate: 8857.21,
          totalAmount: 4610.94,
        },
        payment: {
          accountRef: {
            id: "1f6c4825-2d77-471e-bfd0-74009ef8d29d",
            name: "Raymond Schulist",
          },
          currency: "aut",
          currencyRate: 5912.2,
          id: "7b5da08c-57fa-46c7-8a21-6e19bafeca61",
          note: "cupiditate",
          paidOnDate: "veritatis",
          reference: "aliquam",
          totalAmount: 5682.31,
        },
      },
    ],
    remainingCredit: 5410.46,
    sourceModifiedDate: "dicta",
    status: CreditNoteStatusEnum.Draft,
    subTotal: 428.84,
    supplementalData: {
      content: {
        "suscipit": {
          "maiores": "delectus",
          "quos": "id",
        },
        "officiis": {
          "voluptate": "consequatur",
        },
        "itaque": {
          "voluptatem": "dolor",
          "distinctio": "quaerat",
          "a": "neque",
          "nihil": "recusandae",
        },
      },
    },
    totalAmount: 2538.55,
    totalDiscount: 6520.13,
    totalTaxAmount: 6515.04,
    withholdingTax: [
      {
        amount: 3819.74,
        name: "Tim Hamill",
      },
      {
        amount: 4116.69,
        name: "Maureen Dooley",
      },
      {
        amount: 6762.74,
        name: "Mona Schaden",
      },
    ],
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  timeoutInMinutes: 419585,
};

sdk.creditNotes.create(req).then((res: CreateCreditNoteResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## get

Gets a single creditNote corresponding to the given ID.

### Example Usage

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
  creditNoteId: "praesentium",
};

sdk.creditNotes.get(req).then((res: GetCreditNoteResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## getCreateUpdateModel

Get create/update credit note model. Returns the expected data for the request payload.

See the examples for integration-specific indicative models.

> **Supported Integrations**
> 
> Check out our [Knowledge UI](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=creditNotes) for integrations that support creating and updating a credit note.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { GetCreateUpdateCreditNotesModelRequest, GetCreateUpdateCreditNotesModelResponse } from "@codat/accounting/dist/sdk/models/operations";
import { PushOptionTypeEnum } from "@codat/accounting/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: GetCreateUpdateCreditNotesModelRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
};

sdk.creditNotes.getCreateUpdateModel(req).then((res: GetCreateUpdateCreditNotesModelResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## list

Gets a list of all credit notes for a company, with pagination

### Example Usage

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
  query: "magni",
};

sdk.creditNotes.list(req).then((res: ListCreditNotesResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## update

Posts an updated credit note to the accounting package for a given company.

Required data may vary by integration. To see what data to post, first call [Get create/update credit note model](https://docs.codat.io/accounting-api#/operations/get-create-update-creditNotes-model).

> **Supported Integrations**
> 
> Check out our [Knowledge UI](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=creditNotes) for integrations that support updating a credit note.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { UpdateCreditNoteRequest, UpdateCreditNoteResponse } from "@codat/accounting/dist/sdk/models/operations";
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

const req: UpdateCreditNoteRequest = {
  creditNote: {
    additionalTaxAmount: 7874.67,
    additionalTaxPercentage: 7118.19,
    allocatedOnDate: "in",
    creditNoteNumber: "eaque",
    currency: "delectus",
    currencyRate: 5019.46,
    customerRef: {
      companyName: "minus",
      id: "fd5fb6e9-1b9a-49f7-8846-e2c3309db053",
    },
    discountPercentage: 4343.82,
    id: "d9e75ca0-06f5-4392-811a-25a8bf92f974",
    issueDate: "aspernatur",
    lineItems: [
      {
        accountRef: {
          id: "ad9a9f8b-f822-4112-9359-d98387f7a79c",
          name: "Christian Corwin",
        },
        description: "magni",
        discountAmount: 2657.08,
        discountPercentage: 5319.67,
        isDirectIncome: false,
        itemRef: {
          id: "4da21729-f2ac-441e-b572-5f1169ac1e41",
          name: "Wallace Oberbrunner",
        },
        quantity: 7720.48,
        subTotal: 1609.09,
        taxAmount: 2042.92,
        taxRateRef: {
          effectiveTaxRate: 9044.85,
          id: "34f2dfa4-a197-4f6d-a922-151fe1712099",
          name: "Ronnie Donnelly",
        },
        totalAmount: 9711.55,
        tracking: {
          categoryRefs: [
            {
              id: "43d85443-9ee2-4244-a044-3bc154188c2f",
              name: "Kristin Tillman",
            },
            {
              id: "da7832ea-bd61-47c3-b0d5-1a44bf01bad8",
              name: "Patricia Kerluke",
            },
          ],
          customerRef: {
            companyName: "ea",
            id: "082bfbdc-41ff-45d4-a2ae-4fb5cb35d176",
          },
          isBilledTo: BilledToTypeEnum1.Unknown,
          isRebilledTo: BilledToTypeEnum1.NotApplicable,
          projectRef: {
            id: "f1edb783-59ec-4c5c-b860-f8cd580ba738",
            name: "Kimberly Waters",
          },
        },
        trackingCategoryRefs: [
          {
            id: "4447297c-d3b1-4dd3-bbce-247b7684eff5",
            name: "Teresa Denesik",
          },
          {
            id: "71cffbd0-eb74-4b84-a195-3b44bd3c4315",
            name: "Sammy Fisher",
          },
          {
            id: "5953c001-1398-463a-a41e-6c31cc2f1fcb",
            name: "Joan Schaefer",
          },
          {
            id: "41ffbe9c-bd79-45ee-a5e0-76cc7abf616e",
            name: "Vernon Sauer III",
          },
        ],
        unitAmount: 2640.9,
      },
      {
        accountRef: {
          id: "1934b90f-2e09-4d19-92fc-2f9e2e105944",
          name: "Virgil Fahey",
        },
        description: "sed",
        discountAmount: 2405.55,
        discountPercentage: 4444.94,
        isDirectIncome: false,
        itemRef: {
          id: "a72f9084-9d6a-4ed4-aecb-7537cd9222c9",
          name: "Elijah Hegmann",
        },
        quantity: 6152.06,
        subTotal: 817.75,
        taxAmount: 6258.15,
        taxRateRef: {
          effectiveTaxRate: 6644.91,
          id: "bfa2e761-f0ca-44d4-96ef-1031e6899f0c",
          name: "Dr. Sharon Bednar",
        },
        totalAmount: 1347.95,
        tracking: {
          categoryRefs: [
            {
              id: "d55cc058-4a18-44d7-ad97-1fc820c65b03",
              name: "Luz Rau",
            },
            {
              id: "0cc88518-7e4d-4e04-af28-c5dddb46aa1c",
              name: "Clint Jast",
            },
            {
              id: "28da0131-9112-4964-a645-c1d81f29042f",
              name: "Vanessa Monahan",
            },
            {
              id: "aff0ea22-16cb-4e07-9bc1-63e279a3b084",
              name: "Lorenzo Monahan",
            },
          ],
          customerRef: {
            companyName: "veniam",
            id: "7d04f408-47a7-442d-8449-6cbdeecf6b99",
          },
          isBilledTo: BilledToTypeEnum1.Project,
          isRebilledTo: BilledToTypeEnum1.Project,
          projectRef: {
            id: "63562ebf-df55-4c29-8c06-0b06a1287764",
            name: "Darrel Wehner",
          },
        },
        trackingCategoryRefs: [
          {
            id: "c6d6ed9c-73dd-4634-9715-09a8e870d3c5",
            name: "Juan Wolff",
          },
        ],
        unitAmount: 1690.72,
      },
      {
        accountRef: {
          id: "42c7b66a-1f30-4c73-9f5b-6719890f42a4",
          name: "Malcolm Gleichner",
        },
        description: "at",
        discountAmount: 5236.07,
        discountPercentage: 3465.34,
        isDirectIncome: false,
        itemRef: {
          id: "b260591d-745e-43c2-859c-9c3f567e0e25",
          name: "Courtney Hoeger",
        },
        quantity: 1074.24,
        subTotal: 8313.04,
        taxAmount: 4021.21,
        taxRateRef: {
          effectiveTaxRate: 1628.49,
          id: "fcdace1f-0121-46ce-a239-e8f25cd0d19d",
          name: "Greg Mayer",
        },
        totalAmount: 2363.72,
        tracking: {
          categoryRefs: [
            {
              id: "e39266cb-d95f-47aa-ab24-113695d1e669",
              name: "Jerald Schowalter",
            },
            {
              id: "596217c2-9776-4763-b425-4038bfb5971e",
              name: "Casey Block II",
            },
            {
              id: "57389ced-bac7-4fda-b959-4d66bc2ae480",
              name: "Dawn Cole",
            },
          ],
          customerRef: {
            companyName: "occaecati",
            id: "54b6fa22-0636-4982-8553-cb10006bef49",
          },
          isBilledTo: BilledToTypeEnum1.Unknown,
          isRebilledTo: BilledToTypeEnum1.Unknown,
          projectRef: {
            id: "ec2053b7-4936-46ac-8ee0-f2bf19588d40",
            name: "Richard Dietrich",
          },
        },
        trackingCategoryRefs: [
          {
            id: "eba297be-3e90-4bc4-8df8-68fd52405cb3",
            name: "Evelyn Stracke",
          },
          {
            id: "2f4f127f-b0e0-4bf1-b821-7978d0acca77",
            name: "Phil Rice",
          },
          {
            id: "7021a520-46b6-44e9-9fb0-e67e094fdfed",
            name: "Dr. Yvonne Grimes",
          },
          {
            id: "53a34a1b-8fe9-4973-9adc-05d85ae2dfb7",
            name: "Shawna Pouros",
          },
        ],
        unitAmount: 4837.74,
      },
    ],
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "non",
    note: "magni",
    paymentAllocations: [
      {
        allocation: {
          allocatedOnDate: "consequatur",
          currency: "illum",
          currencyRate: 2378.75,
          totalAmount: 2106.51,
        },
        payment: {
          accountRef: {
            id: "6561eca1-6ef8-4945-9bd7-6eeeb518c4da",
            name: "Ollie Osinski",
          },
          currency: "nemo",
          currencyRate: 3353.52,
          id: "12f06d4e-5b72-4f0f-9485-68a0424e00a1",
          note: "quibusdam",
          paidOnDate: "autem",
          reference: "voluptates",
          totalAmount: 7314.5,
        },
      },
      {
        allocation: {
          allocatedOnDate: "cupiditate",
          currency: "modi",
          currencyRate: 1916.53,
          totalAmount: 3059.65,
        },
        payment: {
          accountRef: {
            id: "645d0308-4fbb-4a5c-8eff-5cb01fe51e52",
            name: "Lyle Gislason",
          },
          currency: "minus",
          currencyRate: 5544.29,
          id: "2b85f8bc-2cab-4a8d-a412-7dd597ff4711",
          note: "similique",
          paidOnDate: "id",
          reference: "et",
          totalAmount: 7167.79,
        },
      },
      {
        allocation: {
          allocatedOnDate: "porro",
          currency: "nihil",
          currencyRate: 2567.42,
          totalAmount: 7030.15,
        },
        payment: {
          accountRef: {
            id: "86cecc74-f77b-4484-8bd6-a6f0441d2c3b",
            name: "Ms. Daniel Langworth",
          },
          currency: "nesciunt",
          currencyRate: 4744.53,
          id: "3e060459-bebb-4ad0-af25-86bcf152558d",
          note: "fuga",
          paidOnDate: "fuga",
          reference: "excepturi",
          totalAmount: 3583.94,
        },
      },
    ],
    remainingCredit: 7230.31,
    sourceModifiedDate: "itaque",
    status: CreditNoteStatusEnum.Submitted,
    subTotal: 7837.02,
    supplementalData: {
      content: {
        "consequatur": {
          "in": "enim",
        },
        "vel": {
          "consectetur": "quis",
          "ut": "est",
          "fuga": "labore",
          "adipisci": "ratione",
        },
        "cum": {
          "nihil": "officiis",
          "inventore": "esse",
        },
        "ex": {
          "minus": "ad",
        },
      },
    },
    totalAmount: 1292.57,
    totalDiscount: 27.7,
    totalTaxAmount: 5026.86,
    withholdingTax: [
      {
        amount: 1863.18,
        name: "Kate Metz Sr.",
      },
      {
        amount: 8344.99,
        name: "Dr. Sean Williamson",
      },
      {
        amount: 3401.07,
        name: "Gerardo Gislason",
      },
      {
        amount: 7482.66,
        name: "Glenda Grimes",
      },
    ],
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  creditNoteId: "ipsam",
  forceUpdate: false,
  timeoutInMinutes: 788995,
};

sdk.creditNotes.update(req).then((res: UpdateCreditNoteResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```
