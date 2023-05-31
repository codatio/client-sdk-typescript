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

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=creditNotes) to see which integrations support this endpoint.


### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { CreateCreditNoteResponse } from "@codat/accounting/dist/sdk/models/operations";
import { BilledToType1, CreditNoteStatus, DataType, PushChangeType, PushOperationStatus } from "@codat/accounting/dist/sdk/models/shared";

const sdk = new CodatAccounting({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.creditNotes.create({
  creditNote: {
    additionalTaxAmount: 4169.63,
    additionalTaxPercentage: 5118.07,
    allocatedOnDate: "est",
    creditNoteNumber: "consequatur",
    currency: "incidunt",
    currencyRate: 1748.36,
    customerRef: {
      companyName: "labore",
      id: "e00a1d6e-b943-4464-9d03-084fbba5ccef",
    },
    discountPercentage: 9488.1,
    id: "5cb01fe5-1e52-48a4-9ac8-2b85f8bc2cab",
    issueDate: "laborum",
    lineItems: [
      {
        accountRef: {
          id: "da4127dd-597f-4f47-91aa-1bc74b86cecc",
          name: "Eva Wolf",
        },
        description: "nam",
        discountAmount: 2787.91,
        discountPercentage: 5341.75,
        isDirectIncome: false,
        itemRef: {
          id: "48bd6a6f-0441-4d2c-bb80-8094373e0604",
          name: "Velma Rogahn",
        },
        quantity: 7386.39,
        subTotal: 6653.11,
        taxAmount: 8566.67,
        taxRateRef: {
          effectiveTaxRate: 214.7,
          id: "2f2586bc-f152-4558-9aa9-5be6cd02756c",
          name: "Regina Grady",
        },
        totalAmount: 2877.97,
        tracking: {
          categoryRefs: [
            {
              id: "2b47e176-3c52-408c-a3e9-802d82f0d45e",
              name: "Ray Pfannerstill",
            },
          ],
          customerRef: {
            companyName: "ea",
            id: "74ee5cfc-18ed-4c7f-b87e-32e04b3d3ed0",
          },
          isBilledTo: BilledToType1.Project,
          isRebilledTo: BilledToType1.NotApplicable,
          projectRef: {
            id: "670ef42b-d3c9-4f1c-8503-f6c39bcd0a62",
            name: "Edward Wolf",
          },
        },
        trackingCategoryRefs: [
          {
            id: "f385189a-d7ef-4807-aae0-3f33ca79fb9d",
            name: "Francis Anderson",
          },
          {
            id: "ba26fd36-8ba9-4216-bcb4-15835c736417",
            name: "Diana Bogisich",
          },
        ],
        unitAmount: 9262.29,
      },
      {
        accountRef: {
          id: "dc046bc5-163b-4bca-8922-7c42c22c5535",
          name: "Eva McDermott",
        },
        description: "quis",
        discountAmount: 8177.29,
        discountPercentage: 6963.68,
        isDirectIncome: false,
        itemRef: {
          id: "b3c57c1e-4981-4e8a-a257-ddc1912ebde6",
          name: "Juana Williamson",
        },
        quantity: 3303.58,
        subTotal: 3003.21,
        taxAmount: 4362.35,
        taxRateRef: {
          effectiveTaxRate: 6168.21,
          id: "d4015dfa-7962-406b-af2b-0a3e42c1aa01",
          name: "Laverne Mante",
        },
        totalAmount: 7755.85,
        tracking: {
          categoryRefs: [
            {
              id: "e9135586-d18f-49f9-ba4b-fad2bf7d67ca",
              name: "Edwin Olson",
            },
          ],
          customerRef: {
            companyName: "unde",
            id: "b41d6124-3531-4870-8f68-b03ad421bd43",
          },
          isBilledTo: BilledToType1.Project,
          isRebilledTo: BilledToType1.Unknown,
          projectRef: {
            id: "f0cb0a00-03eb-422d-9b3a-70d94faa741c",
            name: "Dr. Lydia Spencer",
          },
        },
        trackingCategoryRefs: [
          {
            id: "c2050d38-dc3c-4e18-9472-f9ee69166a8b",
            name: "Jeff Grimes",
          },
          {
            id: "eac8b3a2-875c-46c1-be60-6d07d2a9c87a",
            name: "Herman Barrows III",
          },
          {
            id: "661a1d91-36a7-4e8d-9321-3f3f658752db",
            name: "Stacey Haag",
          },
          {
            id: "9f0a56ce-bcad-4a29-8a79-181c95671663",
            name: "Miss Tommy Emard",
          },
        ],
        unitAmount: 4263.08,
      },
      {
        accountRef: {
          id: "65163a36-3851-42ab-a521-b9f2e072467b",
          name: "Miss Homer Gislason",
        },
        description: "sit",
        discountAmount: 3356.88,
        discountPercentage: 9426.04,
        isDirectIncome: false,
        itemRef: {
          id: "ab0d650e-df22-4a94-920e-c90ea41d1f46",
          name: "Jenna Lakin II",
        },
        quantity: 3916.67,
        subTotal: 9957.33,
        taxAmount: 9573.95,
        taxRateRef: {
          effectiveTaxRate: 9524.11,
          id: "73fdf54f-dd5e-4a95-8339-8dafb42a8d63",
          name: "Marsha Lueilwitz",
        },
        totalAmount: 8648.87,
        tracking: {
          categoryRefs: [
            {
              id: "039ea5f9-b18a-4244-bd61-9039dacd38ed",
              name: "Krystal Rolfson",
            },
            {
              id: "1dc7f1e3-af15-4920-890d-1b4901f2bd89",
              name: "Everett Ondricka",
            },
            {
              id: "639da5b7-b690-42b8-81a9-4f643664a8f0",
              name: "Marlon Leffler",
            },
          ],
          customerRef: {
            companyName: "natus",
            id: "1d732d9f-baf9-4476-a2ae-8dcc50c8a351",
          },
          isBilledTo: BilledToType1.Unknown,
          isRebilledTo: BilledToType1.Project,
          projectRef: {
            id: "73784893-0750-4a00-a966-ec736d431943",
            name: "Sidney Ruecker",
          },
        },
        trackingCategoryRefs: [
          {
            id: "c92398ed-3d3a-4b7c-a3c5-ca8649a70cfd",
            name: "Freda Johnson",
          },
        ],
        unitAmount: 6125.84,
      },
    ],
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "distinctio",
    note: "in",
    paymentAllocations: [
      {
        allocation: {
          allocatedOnDate: "voluptatem",
          currency: "voluptas",
          currencyRate: 2991.8,
          totalAmount: 3189,
        },
        payment: {
          accountRef: {
            id: "1077d19e-a83d-4492-ad14-b8a2c1954545",
            name: "Austin Hermann",
          },
          currency: "cumque",
          currencyRate: 7659,
          id: "185ea490-1c7c-443a-92da-a784aba3d230",
          note: "voluptates",
          paidOnDate: "nulla",
          reference: "tenetur",
          totalAmount: 4923.66,
        },
      },
    ],
    remainingCredit: 2200.49,
    sourceModifiedDate: "totam",
    status: CreditNoteStatus.Unknown,
    subTotal: 1147.62,
    supplementalData: {
      content: {
        "beatae": {
          "veniam": "non",
        },
        "laudantium": {
          "rerum": "nulla",
        },
        "ducimus": {
          "repellendus": "enim",
          "voluptas": "veniam",
          "voluptatem": "quam",
          "vel": "aspernatur",
        },
      },
    },
    totalAmount: 850.02,
    totalDiscount: 7810.03,
    totalTaxAmount: 3220.54,
    withholdingTax: [
      {
        amount: 9851.55,
        name: "Janis Kshlerin",
      },
      {
        amount: 3759.62,
        name: "Natalie Gleichner",
      },
      {
        amount: 334.57,
        name: "Mr. Brian Kihn",
      },
    ],
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  timeoutInMinutes: 608208,
}).then((res: CreateCreditNoteResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## get

﻿Gets a single creditNote corresponding to the given ID.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { GetCreditNoteResponse } from "@codat/accounting/dist/sdk/models/operations";
import { BilledToType1, CreditNoteStatus } from "@codat/accounting/dist/sdk/models/shared";

const sdk = new CodatAccounting({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.creditNotes.get({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  creditNoteId: "commodi",
}).then((res: GetCreditNoteResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getCreateUpdateModel

﻿Get create/update credit note model. Returns the expected data for the request payload.

See the examples for integration-specific indicative models.

> **Supported Integrations**
> 
> Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=creditNotes) for integrations that support creating and updating a credit note.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { GetCreateUpdateCreditNotesModelResponse } from "@codat/accounting/dist/sdk/models/operations";
import { PushOptionType } from "@codat/accounting/dist/sdk/models/shared";

const sdk = new CodatAccounting({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.creditNotes.getCreateUpdateModel({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
}).then((res: GetCreateUpdateCreditNotesModelResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## list

﻿Gets a list of all credit notes for a company, with pagination.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { ListCreditNotesResponse } from "@codat/accounting/dist/sdk/models/operations";
import { BilledToType1, CreditNoteStatus } from "@codat/accounting/dist/sdk/models/shared";

const sdk = new CodatAccounting({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.creditNotes.list({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  orderBy: "-modifiedDate",
  page: 1,
  pageSize: 100,
  query: "dicta",
}).then((res: ListCreditNotesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## update

﻿Posts an updated credit note to the accounting package for a given company.

Required data may vary by integration. To see what data to post, first call [Get create/update credit note model](https://docs.codat.io/accounting-api#/operations/get-create-update-creditNotes-model).

> **Supported Integrations**
> 
> Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=creditNotes) for integrations that support updating a credit note.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { UpdateCreditNoteResponse } from "@codat/accounting/dist/sdk/models/operations";
import { BilledToType1, CreditNoteStatus, DataType, PushChangeType, PushOperationStatus } from "@codat/accounting/dist/sdk/models/shared";

const sdk = new CodatAccounting({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.creditNotes.update({
  creditNote: {
    additionalTaxAmount: 8489.26,
    additionalTaxPercentage: 1334.52,
    allocatedOnDate: "ut",
    creditNoteNumber: "deserunt",
    currency: "dignissimos",
    currencyRate: 8604.11,
    customerRef: {
      companyName: "facilis",
      id: "b8f532d8-92cf-4781-acb5-12c878240bf5",
    },
    discountPercentage: 2743.68,
    id: "8f88f8f1-bf0b-4c8e-9f20-6d5d831d0081",
    issueDate: "voluptatem",
    lineItems: [
      {
        accountRef: {
          id: "0f670667-3f3a-4681-8576-8dce742409a2",
          name: "Ms. Annette Towne",
        },
        description: "aut",
        discountAmount: 1141.51,
        discountPercentage: 2710.98,
        isDirectIncome: false,
        itemRef: {
          id: "89a5f63e-3af3-4dd9-9da3-3dcd63483e4a",
          name: "Amelia Morissette",
        },
        quantity: 2688.31,
        subTotal: 8278.13,
        taxAmount: 9784.16,
        taxRateRef: {
          effectiveTaxRate: 2045.17,
          id: "7e45b895-5d41-43e1-ba48-2310907bd354",
          name: "Charles McGlynn",
        },
        totalAmount: 8744.46,
        tracking: {
          categoryRefs: [
            {
              id: "34f02449-d86f-44bb-a0fe-5d911cbfe749",
              name: "Omar Wolf",
            },
            {
              id: "a27f69e2-c9e6-4d10-a9db-3ad4c6b03108",
              name: "Seth Schaefer",
            },
          ],
          customerRef: {
            companyName: "in",
            id: "473082b9-4f2a-4b1f-9567-1e9c326350a4",
          },
          isBilledTo: BilledToType1.NotApplicable,
          isRebilledTo: BilledToType1.NotApplicable,
          projectRef: {
            id: "143789ce-0e99-4159-8d93-a74c0252fe3b",
            name: "Bridget Greenholt",
          },
        },
        trackingCategoryRefs: [
          {
            id: "b778ebb6-e1d2-4cf5-82ba-fb2cbc4635d5",
            name: "Andre Heidenreich",
          },
          {
            id: "028c3e95-1a1e-430f-9a96-6489d7b78673",
            name: "Peter Feeney Sr.",
          },
          {
            id: "a6b99249-4594-4487-b5c8-43836b86b3cd",
            name: "Mrs. Marc Grimes",
          },
        ],
        unitAmount: 223.76,
      },
      {
        accountRef: {
          id: "449f9df1-3f4e-4edb-a78b-f606825894ea",
          name: "Jeanne Farrell",
        },
        description: "impedit",
        discountAmount: 4457.32,
        discountPercentage: 1479.33,
        isDirectIncome: false,
        itemRef: {
          id: "795b7851-48d6-4d54-9e56-35b33bc0f970",
          name: "Micheal Cummings",
        },
        quantity: 5918.35,
        subTotal: 9624.68,
        taxAmount: 2930.13,
        taxRateRef: {
          effectiveTaxRate: 5170.23,
          id: "44225e75-b796-4065-80ef-a6f93b90a1b8",
          name: "Austin Hartmann",
        },
        totalAmount: 1147.52,
        tracking: {
          categoryRefs: [
            {
              id: "54b739f4-fe77-4210-91f6-558c99c722d2",
              name: "Lucas Barton",
            },
          ],
          customerRef: {
            companyName: "numquam",
            id: "087d9caa-e042-4dd7-8aac-9b4caa1cfe9e",
          },
          isBilledTo: BilledToType1.Unknown,
          isRebilledTo: BilledToType1.Unknown,
          projectRef: {
            id: "df903907-f378-4319-83d4-2e54a8546659",
            name: "Mr. Kara Hintz",
          },
        },
        trackingCategoryRefs: [
          {
            id: "c1471d51-aaa6-4ddf-9abd-6487c5fc2b86",
            name: "Miss Monique Bartell",
          },
        ],
        unitAmount: 9832.72,
      },
      {
        accountRef: {
          id: "69e10015-7630-4bda-bafd-ed84a35a4123",
          name: "Stewart Bode",
        },
        description: "sequi",
        discountAmount: 3217.24,
        discountPercentage: 6847.17,
        isDirectIncome: false,
        itemRef: {
          id: "c26ae33b-ef97-41a8-b46b-ca1106fe965b",
          name: "Evelyn Braun IV",
        },
        quantity: 7565.71,
        subTotal: 9475.73,
        taxAmount: 5358.76,
        taxRateRef: {
          effectiveTaxRate: 5373.21,
          id: "ec9f7b99-a550-4a65-aed3-33bb0ce8aa65",
          name: "Victoria Denesik",
        },
        totalAmount: 5250.89,
        tracking: {
          categoryRefs: [
            {
              id: "eb7e14ca-5640-4891-9009-7019a48f88ec",
              name: "Ron Ratke",
            },
            {
              id: "04e01105-d389-4081-a2c6-beb68a0f657b",
              name: "Teri Abshire",
            },
          ],
          customerRef: {
            companyName: "beatae",
            id: "480f8de3-0f06-49d8-9061-8d97e1522975",
          },
          isBilledTo: BilledToType1.Unknown,
          isRebilledTo: BilledToType1.Unknown,
          projectRef: {
            id: "da803122-92cc-461c-aa70-2bb97ee102da",
            name: "Hope Walsh",
          },
        },
        trackingCategoryRefs: [
          {
            id: "8e01bf33-eaab-4454-82ac-1704bf1cc9fc",
            name: "Katherine Oberbrunner",
          },
          {
            id: "5eb5f0c4-92b5-4744-908a-2267aaee79e3",
            name: "Fernando Blanda",
          },
          {
            id: "31becb83-d237-48ae-bbfc-23d9450a986a",
            name: "Faye Hammes",
          },
          {
            id: "c707f06b-28ec-4c86-8923-86f62c969c4c",
            name: "Rick Predovic",
          },
        ],
        unitAmount: 5207.16,
      },
    ],
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "error",
    note: "alias",
    paymentAllocations: [
      {
        allocation: {
          allocatedOnDate: "sequi",
          currency: "sapiente",
          currencyRate: 8471.37,
          totalAmount: 2026.93,
        },
        payment: {
          accountRef: {
            id: "c81da10f-8c23-4df9-b1da-3edb51fad94a",
            name: "Roosevelt Marvin",
          },
          currency: "ullam",
          currencyRate: 1158.79,
          id: "37726d15-321b-4832-a56d-69180ff60eb9",
          note: "fuga",
          paidOnDate: "ex",
          reference: "autem",
          totalAmount: 3460.72,
        },
      },
      {
        allocation: {
          allocatedOnDate: "atque",
          currency: "saepe",
          currencyRate: 4320.55,
          totalAmount: 5652.45,
        },
        payment: {
          accountRef: {
            id: "a4b843d3-82db-4ec7-9c68-c60659468ce3",
            name: "Anita Spinka",
          },
          currency: "magnam",
          currencyRate: 5876.67,
          id: "bf8214c3-37f9-46bb-8c69-e372db1344ba",
          note: "error",
          paidOnDate: "doloribus",
          reference: "reprehenderit",
          totalAmount: 5256.79,
        },
      },
      {
        allocation: {
          allocatedOnDate: "est",
          currency: "quis",
          currencyRate: 7709.69,
          totalAmount: 343.42,
        },
        payment: {
          accountRef: {
            id: "ed7aab62-e972-461f-b0c5-8d27b51996b5",
            name: "Joel Rath DVM",
          },
          currency: "saepe",
          currencyRate: 9596.73,
          id: "712b7a7a-b034-44b1-b106-88deebef897f",
          note: "velit",
          paidOnDate: "fugiat",
          reference: "pariatur",
          totalAmount: 276.76,
        },
      },
    ],
    remainingCredit: 7998.57,
    sourceModifiedDate: "minus",
    status: CreditNoteStatus.PartiallyPaid,
    subTotal: 2232.35,
    supplementalData: {
      content: {
        "tenetur": {
          "dicta": "rerum",
        },
      },
    },
    totalAmount: 2054.73,
    totalDiscount: 9131.52,
    totalTaxAmount: 3033.65,
    withholdingTax: [
      {
        amount: 30.91,
        name: "Richard Nitzsche Jr.",
      },
      {
        amount: 2752.88,
        name: "Cassandra Kerluke",
      },
      {
        amount: 4841.4,
        name: "Mr. Sherri Torphy",
      },
      {
        amount: 2244.51,
        name: "Laura Cronin",
      },
    ],
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  creditNoteId: "cumque",
  forceUpdate: false,
  timeoutInMinutes: 513307,
}).then((res: UpdateCreditNoteResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
