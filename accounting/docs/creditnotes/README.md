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
    additionalTaxAmount: 7609.42,
    additionalTaxPercentage: 2365.88,
    allocatedOnDate: "ab",
    creditNoteNumber: "maxime",
    currency: "porro",
    currencyRate: 1279.53,
    customerRef: {
      companyName: "reiciendis",
      id: "1fcb51c9-a41f-4fbe-9cbd-795ee65e076c",
    },
    discountPercentage: 7903.41,
    id: "7abf616e-a5c7-4164-9934-b90f2e09d19d",
    issueDate: "magni",
    lineItems: [
      {
        accountRef: {
          id: "c2f9e2e1-0594-44b9-b5d2-37a72f90849d",
          name: "Madeline Waters",
        },
        description: "id",
        discountAmount: 9081.27,
        discountPercentage: 7595.37,
        isDirectIncome: false,
        itemRef: {
          id: "b7537cd9-222c-49ff-9749-1aabfa2e761f",
          name: "Angelica O'Reilly",
        },
        quantity: 2893.42,
        subTotal: 3375.7,
        taxAmount: 3985.78,
        taxRateRef: {
          effectiveTaxRate: 8757.66,
          id: "f1031e68-99f0-4c20-81e2-2cd55cc0584a",
          name: "Lena Goyette",
        },
        totalAmount: 3758.77,
        tracking: {
          categoryRefs: [
            {
              id: "971fc820-c65b-4037-bb8e-0cc885187e4d",
              name: "William Graham",
            },
            {
              id: "28c5dddb-46aa-41cf-96d8-28da01319112",
              name: "Reginald Hackett",
            },
            {
              id: "45c1d81f-2904-42f5-a9b7-aff0ea2216cb",
              name: "Miss Larry Kunde",
            },
            {
              id: "163e279a-3b08-44da-9925-7d04f40847a7",
              name: "Lori Sipes",
            },
          ],
          customerRef: {
            companyName: "eius",
            id: "96cbdeec-f6b9-49bc-a356-2ebfdf55c294",
          },
          isBilledTo: BilledToType1.Project,
          isRebilledTo: BilledToType1.Unknown,
          projectRef: {
            id: "60b06a12-8776-44ee-b6d0-c6d6ed9c73dd",
            name: "Sheila Grant",
          },
        },
        trackingCategoryRefs: [
          {
            id: "509a8e87-0d3c-45a1-b9c2-42c7b66a1f30",
            name: "Cody Franey",
          },
        ],
        unitAmount: 3480.56,
      },
      {
        accountRef: {
          id: "b6719890-f42a-44bb-838d-85b260591d74",
          name: "Silvia Dietrich",
        },
        description: "quae",
        discountAmount: 3298.36,
        discountPercentage: 5726.33,
        isDirectIncome: false,
        itemRef: {
          id: "c9c3f567-e0e2-4527-a5b1-d62fcdace1f0",
          name: "Christina Bode",
        },
        quantity: 9210.86,
        subTotal: 1621.71,
        taxAmount: 1333.6,
        taxRateRef: {
          effectiveTaxRate: 1945.74,
          id: "9e8f25cd-0d19-4d95-9f43-9e39266cbd95",
          name: "Clinton Oberbrunner",
        },
        totalAmount: 6980.88,
        tracking: {
          categoryRefs: [
            {
              id: "4113695d-1e66-498f-8c45-96217c297767",
              name: "Edith Frami",
            },
          ],
          customerRef: {
            companyName: "ad",
            id: "4038bfb5-971e-4981-9055-7389cedbac7f",
          },
          isBilledTo: BilledToType1.Project,
          isRebilledTo: BilledToType1.NotApplicable,
          projectRef: {
            id: "39594d66-bc2a-4e48-8632-b9954b6fa220",
            name: "Crystal Johnson",
          },
        },
        trackingCategoryRefs: [
          {
            id: "8553cb10-006b-4ef4-921e-c2053b749366",
            name: "Wilson Ledner",
          },
        ],
        unitAmount: 312.92,
      },
      {
        accountRef: {
          id: "f2bf1958-8d40-4d03-b3de-ba297be3e90b",
          name: "Jesus Abshire",
        },
        description: "quos",
        discountAmount: 4169.67,
        discountPercentage: 5023.8,
        isDirectIncome: false,
        itemRef: {
          id: "fd52405c-b331-4d49-af4f-127fb0e0bf1f",
          name: "Steve Block",
        },
        quantity: 4940.93,
        subTotal: 5283.5,
        taxAmount: 8602.82,
        taxRateRef: {
          effectiveTaxRate: 65.17,
          id: "acca77ae-b7b7-4021-a520-46b64e99fb0e",
          name: "Ms. Delores Tromp",
        },
        totalAmount: 9417.76,
        tracking: {
          categoryRefs: [
            {
              id: "fed5540e-f53a-434a-9b8f-e99731adc05d",
              name: "Alvin Parker",
            },
            {
              id: "dfb70fb3-8742-490d-b365-61eca16ef894",
              name: "Kathleen Pollich",
            },
            {
              id: "6eeeb518-c4da-41fa-9355-12f06d4e5b72",
              name: "James Yost",
            },
            {
              id: "8568a042-4e00-4a1d-aeb9-434645d03084",
              name: "Malcolm Rempel",
            },
          ],
          customerRef: {
            companyName: "cumque",
            id: "ceff5cb0-1fe5-41e5-a8a4-5ac82b85f8bc",
          },
          isBilledTo: BilledToType1.Unknown,
          isRebilledTo: BilledToType1.Project,
          projectRef: {
            id: "aba8da41-27dd-4597-bf47-11aa1bc74b86",
            name: "Alonzo Schaefer",
          },
        },
        trackingCategoryRefs: [
          {
            id: "f77b4848-bd6a-46f0-841d-2c3b80809437",
            name: "Laverne Bednar II",
          },
          {
            id: "59bebbad-02f2-4586-bcf1-52558daa95be",
            name: "Mr. Robyn Stoltenberg",
          },
        ],
        unitAmount: 3159.04,
      },
      {
        accountRef: {
          id: "6c354aa4-32b4-47e1-b63c-5208c23e9802",
          name: "Willard Dibbert PhD",
        },
        description: "magnam",
        discountAmount: 3401.07,
        discountPercentage: 9204.88,
        isDirectIncome: false,
        itemRef: {
          id: "b4a8b674-ee5c-4fc1-8edc-7f787e32e04b",
          name: "Freda Frami",
        },
        quantity: 614.71,
        subTotal: 7685.46,
        taxAmount: 3532.32,
        taxRateRef: {
          effectiveTaxRate: 4271.07,
          id: "70ef42bd-3c9f-41cc-903f-6c39bcd0a629",
          name: "Tami McClure",
        },
        totalAmount: 9704.91,
        tracking: {
          categoryRefs: [
            {
              id: "85189ad7-ef80-47aa-a03f-33ca79fb9de4",
              name: "Rita Crist",
            },
          ],
          customerRef: {
            companyName: "qui",
            id: "6fd368ba-9216-4bcb-8158-35c736417231",
          },
          isBilledTo: BilledToType1.Unknown,
          isRebilledTo: BilledToType1.Unknown,
          projectRef: {
            id: "edc046bc-5163-4bbc-a492-27c42c22c553",
            name: "Donna Gottlieb",
          },
        },
        trackingCategoryRefs: [
          {
            id: "5dbb3c57-c1e4-4981-a8aa-257ddc1912eb",
            name: "Rogelio Keebler",
          },
          {
            id: "fcc5469d-4015-4dfa-b962-06bef2b0a3e4",
            name: "Robyn Braun",
          },
          {
            id: "010e9aac-2e91-4355-86d1-8f9f97a4bfad",
            name: "Juana Zboncak",
          },
          {
            id: "67ca84ad-99b4-41d6-9243-531870cf68b0",
            name: "Kristine Shields",
          },
        ],
        unitAmount: 1067.67,
      },
    ],
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "rerum",
    note: "repellendus",
    paymentAllocations: [
      {
        allocation: {
          allocatedOnDate: "nesciunt",
          currency: "facere",
          currencyRate: 1047.54,
          totalAmount: 9646.41,
        },
        payment: {
          accountRef: {
            id: "0cb0a000-3eb2-42d9-b3a7-0d94faa741c5",
            name: "Mona Carroll",
          },
          currency: "quibusdam",
          currencyRate: 8045.25,
          id: "2050d38d-c3ce-4185-872f-9ee69166a8be",
          note: "adipisci",
          paidOnDate: "dolore",
          reference: "tempora",
          totalAmount: 3088.64,
        },
      },
      {
        allocation: {
          allocatedOnDate: "debitis",
          currency: "similique",
          currencyRate: 7807.03,
          totalAmount: 5051.92,
        },
        payment: {
          accountRef: {
            id: "b3a2875c-6c1f-4e60-ad07-d2a9c87ae50c",
            name: "Jessie Hirthe V",
          },
          currency: "veritatis",
          currencyRate: 8360.84,
          id: "9136a7e8-d532-413f-bf65-8752db764c59",
          note: "asperiores",
          paidOnDate: "doloremque",
          reference: "id",
          totalAmount: 3349.54,
        },
      },
    ],
    remainingCredit: 4096.77,
    sourceModifiedDate: "placeat",
    status: CreditNoteStatus.PartiallyPaid,
    subTotal: 6881.14,
    supplementalData: {
      content: {
        "culpa": {
          "laborum": "consequuntur",
          "omnis": "maxime",
          "officia": "iusto",
          "natus": "ab",
        },
        "deleniti": {
          "eligendi": "sint",
        },
        "ipsam": {
          "molestiae": "ab",
          "ex": "iure",
        },
        "dolorem": {
          "ad": "ipsum",
          "ipsa": "nam",
          "minima": "vel",
          "nisi": "minima",
        },
      },
    },
    totalAmount: 933.84,
    totalDiscount: 4177.55,
    totalTaxAmount: 2204.55,
    withholdingTax: [
      {
        amount: 2495.41,
        name: "Grace Lesch Sr.",
      },
      {
        amount: 6639.81,
        name: "Billy Heathcote MD",
      },
      {
        amount: 5936,
        name: "Ms. Craig Turner",
      },
    ],
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  timeoutInMinutes: 302814,
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
  creditNoteId: "autem",
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
  query: "reprehenderit",
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
    additionalTaxAmount: 6935.09,
    additionalTaxPercentage: 5597.16,
    allocatedOnDate: "officia",
    creditNoteNumber: "modi",
    currency: "alias",
    currencyRate: 7216.91,
    customerRef: {
      companyName: "minus",
      id: "05fab0d6-50ed-4f22-a94d-20ec90ea41d1",
    },
    discountPercentage: 9416.83,
    id: "465e8515-6fff-473f-9f54-fdd5ea954339",
    issueDate: "voluptatum",
    lineItems: [
      {
        accountRef: {
          id: "afb42a8d-6338-48e4-9803-9ea5f9b18a24",
          name: "Jeannie Schuppe V",
        },
        description: "aut",
        discountAmount: 2158.13,
        discountPercentage: 6113.61,
        isDirectIncome: false,
        itemRef: {
          id: "dacd38ed-0dc6-471d-87f1-e3af15920c90",
          name: "Stephen Robel",
        },
        quantity: 474.01,
        subTotal: 1205.48,
        taxAmount: 9957.13,
        taxRateRef: {
          effectiveTaxRate: 1728.07,
          id: "bd89c8a3-2639-4da5-b7b6-902b881a94f6",
          name: "Annie Huel",
        },
        totalAmount: 6534.92,
        tracking: {
          categoryRefs: [
            {
              id: "f0af8c69-1d73-42d9-bbaf-9476a2ae8dcc",
              name: "Angela Schroeder",
            },
            {
              id: "3512c737-8489-4307-90a0-0e966ec736d4",
              name: "Stephanie Moen",
            },
            {
              id: "98c783c9-2398-4ed3-93ab-7ca3c5ca8649",
              name: "Kurt Auer",
            },
          ],
          customerRef: {
            companyName: "quibusdam",
            id: "5d6989b7-2064-4510-b7d1-9ea83d492ed1",
          },
          isBilledTo: BilledToType1.Unknown,
          isRebilledTo: BilledToType1.Project,
          projectRef: {
            id: "8a2c1954-545e-4955-9cc1-85ea4901c7c4",
            name: "Harriet Schultz",
          },
        },
        trackingCategoryRefs: [
          {
            id: "a784aba3-d230-4edf-b381-1a115382bd7e",
            name: "Jon Hodkiewicz IV",
          },
          {
            id: "621c58f4-d739-4656-8c20-a0711a961d24",
            name: "Lance Stokes",
          },
          {
            id: "8f532d89-2cf7-4812-8b51-2c878240bf54",
            name: "Randal Lockman",
          },
        ],
        unitAmount: 5030.15,
      },
      {
        accountRef: {
          id: "f1bf0bc8-e1f2-406d-9d83-1d0081090f67",
          name: "Loretta Howe",
        },
        description: "doloribus",
        discountAmount: 1877.7,
        discountPercentage: 6638.67,
        isDirectIncome: false,
        itemRef: {
          id: "681c5768-dce7-4424-89a2-15e08601489a",
          name: "Ora Homenick",
        },
        quantity: 2072.02,
        subTotal: 6489.85,
        taxAmount: 9474.2,
        taxRateRef: {
          effectiveTaxRate: 2479.72,
          id: "dd9dda33-dcd6-4348-be4a-7a98e4df37e4",
          name: "Pam Leannon",
        },
        totalAmount: 3422.41,
        tracking: {
          categoryRefs: [
            {
              id: "413e13a4-8231-4090-bbd3-54c092bd734f",
              name: "Louise Funk",
            },
            {
              id: "d86f4bb2-0fe5-4d91-9cbf-e749caf45a27",
              name: "Ruben Muller",
            },
            {
              id: "c9e6d10e-9db3-4ad4-86b0-3108d9c33747",
              name: "Jennifer Ledner",
            },
            {
              id: "94f2ab1f-d567-41e9-8326-350a46714378",
              name: "Dr. Devin Waters",
            },
          ],
          customerRef: {
            companyName: "error",
            id: "1594d93a-74c0-4252-be3b-4b4db8b778eb",
          },
          isBilledTo: BilledToType1.Project,
          isRebilledTo: BilledToType1.NotApplicable,
          projectRef: {
            id: "e1d2cf50-2baf-4b2c-bc46-35d5e65da028",
            name: "Curtis Thompson",
          },
        },
        trackingCategoryRefs: [
          {
            id: "a1e30fda-9664-489d-bb78-673e13a12a6b",
            name: "Marshall Corkery",
          },
        ],
        unitAmount: 2959.53,
      },
      {
        accountRef: {
          id: "594487f5-c843-4836-b86b-3cdf6415b044",
          name: "Terrell Muller",
        },
        description: "dicta",
        discountAmount: 1911.01,
        discountPercentage: 9646.4,
        isDirectIncome: false,
        itemRef: {
          id: "4eedbe78-bf60-4682-9894-ea763d5c7279",
          name: "Lula Koepp",
        },
        quantity: 1139.47,
        subTotal: 3005.84,
        taxAmount: 5032.47,
        taxRateRef: {
          effectiveTaxRate: 8612.36,
          id: "6d549e56-35b3-43bc-8f97-0c42fc9f4844",
          name: "Andrea Harris",
        },
        totalAmount: 3245.72,
        tracking: {
          categoryRefs: [
            {
              id: "796065c0-efa6-4f93-b90a-1b8c95be1254",
              name: "Jessie Fisher",
            },
            {
              id: "4fe77210-d1f6-4558-899c-722d2bc0f940",
              name: "Kurt Schuppe",
            },
            {
              id: "aae042dd-7caa-4c9b-8caa-1cfe9e15df90",
              name: "Faye Bayer",
            },
          ],
          customerRef: {
            companyName: "amet",
            id: "7831983d-42e5-44a8-9466-597c50233c14",
          },
          isBilledTo: BilledToType1.NotApplicable,
          isRebilledTo: BilledToType1.Unknown,
          projectRef: {
            id: "d51aaa6d-df5a-4bd6-887c-5fc2b862a00b",
            name: "Cary Jones",
          },
        },
        trackingCategoryRefs: [
          {
            id: "00157630-bda7-4afd-ad84-a35a41238e1a",
            name: "Emily Hand",
          },
        ],
        unitAmount: 1866.88,
      },
      {
        accountRef: {
          id: "6ae33bef-971a-48f4-abca-1106fe965b71",
          name: "Meredith Barrows",
        },
        description: "tenetur",
        discountAmount: 5358.76,
        discountPercentage: 5373.21,
        isDirectIncome: false,
        itemRef: {
          id: "ec9f7b99-a550-4a65-aed3-33bb0ce8aa65",
          name: "Victoria Denesik",
        },
        quantity: 5250.89,
        subTotal: 4102.39,
        taxAmount: 8917.7,
        taxRateRef: {
          effectiveTaxRate: 7430.23,
          id: "7e14ca56-4089-4150-8970-19a48f88ece7",
          name: "Mrs. Terrell Mayert",
        },
        totalAmount: 81.62,
        tracking: {
          categoryRefs: [
            {
              id: "105d3890-8162-4c6b-ab68-a0f657b7d03a",
              name: "Dr. Carrie Lang",
            },
          ],
          customerRef: {
            companyName: "at",
            id: "e30f069d-8106-418d-97e1-52297510da80",
          },
          isBilledTo: BilledToType1.Unknown,
          isRebilledTo: BilledToType1.Unknown,
          projectRef: {
            id: "2292cc61-c2a7-402b-b97e-e102da2de35f",
            name: "Miss Frankie Bailey",
          },
        },
        trackingCategoryRefs: [
          {
            id: "3eaab454-02ac-4170-8bf1-cc9fc61aae5e",
            name: "Miss Jon Willms",
          },
        ],
        unitAmount: 5655.59,
      },
    ],
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "qui",
    note: "soluta",
    paymentAllocations: [
      {
        allocation: {
          allocatedOnDate: "nihil",
          currency: "ut",
          currencyRate: 2799.45,
          totalAmount: 8430.46,
        },
        payment: {
          accountRef: {
            id: "08a2267a-aee7-49e3-871a-d31becb83d23",
            name: "Cassandra O'Conner",
          },
          currency: "facilis",
          currencyRate: 9571.11,
          id: "c23d9450-a986-4a49-9bac-707f06b28ecc",
          note: "atque",
          paidOnDate: "autem",
          reference: "eius",
          totalAmount: 5999.15,
        },
      },
      {
        allocation: {
          allocatedOnDate: "sunt",
          currency: "amet",
          currencyRate: 5118.79,
          totalAmount: 4131.3,
        },
        payment: {
          accountRef: {
            id: "f62c969c-4cc6-4b78-890a-3fd3c81da10f",
            name: "Earnest Crooks",
          },
          currency: "voluptatibus",
          currencyRate: 6148.15,
          id: "31da3edb-51fa-4d94-acc9-435137726d15",
          note: "velit",
          paidOnDate: "quia",
          reference: "dicta",
          totalAmount: 7214.48,
        },
      },
    ],
    remainingCredit: 5545.08,
    sourceModifiedDate: "velit",
    status: CreditNoteStatus.Draft,
    subTotal: 6851.1,
    supplementalData: {
      content: {
        "aliquid": {
          "laboriosam": "sint",
          "architecto": "totam",
          "alias": "hic",
          "tenetur": "iure",
        },
        "consequatur": {
          "cum": "occaecati",
          "fuga": "ex",
          "autem": "nostrum",
          "atque": "saepe",
        },
      },
    },
    totalAmount: 4320.55,
    totalDiscount: 5652.45,
    totalTaxAmount: 6841.96,
    withholdingTax: [
      {
        amount: 7212.15,
        name: "Alexander Friesen",
      },
      {
        amount: 5197.99,
        name: "Rosemarie Pollich",
      },
    ],
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  creditNoteId: "ducimus",
  forceUpdate: false,
  timeoutInMinutes: 323612,
}).then((res: UpdateCreditNoteResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
