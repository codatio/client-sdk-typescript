# billCreditNotes

## Overview

Bill credit notes

### Available Operations

* [create](#create) - Create bill credit note
* [get](#get) - Get bill credit note
* [getCreateUpdateModel](#getcreateupdatemodel) - Get create/update bill credit note model
* [list](#list) - List bill credit notes
* [update](#update) - Update bill credit note

## create

﻿Posts a new billCreditNote to the accounting package for a given company.

Required data may vary by integration. To see what data to post, first call [Get create/update bill credit note model](https://docs.codat.io/accounting-api#/operations/get-create-update-billCreditNotes-model).

> **Supported Integrations**
> 
> Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=billCreditNotes) for integrations that support creating bill credit notes.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { CreateBillCreditNoteResponse } from "@codat/accounting/dist/sdk/models/operations";
import {
  BillCreditNoteStatus,
  BilledToType,
  DataType,
  PushChangeType,
  PushOperationStatus,
} from "@codat/accounting/dist/sdk/models/shared";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.billCreditNotes.create({
  billCreditNote: {
    allocatedOnDate: "quae",
    billCreditNoteNumber: "91fe2a83-e161-4c21-929d-c5c10c4b07e5",
    currency: "ipsum",
    currencyRate: 6924.72,
    discountPercentage: 5651.89,
    id: "1509398f-98e2-436d-8a5d-c042e0c74ffc",
    issueDate: "excepturi",
    lineItems: [
      {
        accountRef: {
          id: "488e1e91-e450-4ad2-abd4-4269802d502a",
          name: "Eddie Prosacco",
        },
        description: "delectus",
        discountAmount: 4332.88,
        discountPercentage: 2487.53,
        itemRef: {
          id: "c969e9a3-efa7-47df-b14c-d66ae395efb9",
          name: "Lynn Kuvalis",
        },
        quantity: 2305.33,
        subTotal: 6439.9,
        taxAmount: 3948.69,
        taxRateRef: {
          effectiveTaxRate: 4238.55,
          id: "997074ba-4469-4b6e-a141-959890afa563",
          name: "Ms. Fred Hilll",
        },
        totalAmount: 8919.24,
        tracking: {
          categoryRefs: [
            {
              id: "c8b711e5-b7fd-42ed-8289-21cddc692601",
              name: "Rickey Hintz",
            },
            {
              id: "b0d5f0d3-0c5f-4bb2-9870-53202c73d5fe",
              name: "Miss Cesar Metz",
            },
          ],
          customerRef: {
            companyName: "blanditiis",
            id: "909b3fe4-9a8d-49cb-b486-33323f9b77f3",
          },
          isBilledTo: BilledToType.Customer,
          isRebilledTo: BilledToType.NotApplicable,
          projectRef: {
            id: "100674eb-f692-480d-9ba7-7a89ebf737ae",
            name: "Judy Aufderhar",
          },
        },
        trackingCategoryRefs: [
          {
            id: "5e6a95d8-a0d4-446c-a2af-7a73cf3be453",
            name: "Miss Jimmie Kozey",
          },
          {
            id: "26b5a734-29cd-4b1a-8422-bb679d232271",
            name: "Miss Candice Weimann",
          },
          {
            id: "b1e31b8b-90f3-4443-a110-8e0adcf4b921",
            name: "Darren McClure",
          },
          {
            id: "e953f73e-f7fb-4c7a-bd74-dd39c0f5d2cf",
            name: "Ted Romaguera MD",
          },
        ],
        unitAmount: 2694.79,
      },
      {
        accountRef: {
          id: "5626d436-813f-416d-9f5f-ce6c556146c3",
          name: "Dr. Bruce Hane",
        },
        description: "aut",
        discountAmount: 114.27,
        discountPercentage: 5334.66,
        itemRef: {
          id: "c42e141a-ac36-46c8-9d6b-144290747477",
          name: "Blake Kihn",
        },
        quantity: 2835.19,
        subTotal: 4334.39,
        taxAmount: 3799.27,
        taxRateRef: {
          effectiveTaxRate: 8268.71,
          id: "28c10ab3-cdca-4425-9904-e523c7e0bc71",
          name: "Christy Tillman",
        },
        totalAmount: 5775.43,
        tracking: {
          categoryRefs: [
            {
              id: "f2a70c68-8282-4aa4-8256-2f222e9817ee",
              name: "Joy Schmidt",
            },
            {
              id: "61e6b7b9-5bc0-4ab3-820c-4f3789fd871f",
              name: "Kirk Stracke",
            },
          ],
          customerRef: {
            companyName: "eveniet",
            id: "fd121aa6-f1e6-474b-9b04-f15756082d68",
          },
          isBilledTo: BilledToType.Project,
          isRebilledTo: BilledToType.Customer,
          projectRef: {
            id: "19f1d170-5133-49d0-8086-a1840394c260",
            name: "Jean Wunsch",
          },
        },
        trackingCategoryRefs: [
          {
            id: "5f0642da-c7af-4515-8c41-3aa63aae8d67",
            name: "Cecil Grant",
          },
          {
            id: "b675fd5e-60b3-475e-94f6-fbee41f33317",
            name: "Doyle Feest",
          },
          {
            id: "60eb1ea4-2655-45ba-bc28-744ed53b88f3",
            name: "Byron Stroman",
          },
          {
            id: "5c0b2f2f-b7b1-494a-a76b-26916fe1f08f",
            name: "Tammy Medhurst",
          },
        ],
        unitAmount: 2155.29,
      },
      {
        accountRef: {
          id: "698f447f-603e-48b4-85e8-0ca55efd20e4",
          name: "Ms. Pearl Towne",
        },
        description: "praesentium",
        discountAmount: 7400.98,
        discountPercentage: 3868.27,
        itemRef: {
          id: "a89fbe3a-5aa8-4e48-a4d0-ab4075088e51",
          name: "Ms. Ruben Cremin",
        },
        quantity: 9061.72,
        subTotal: 6222.31,
        taxAmount: 85.11,
        taxRateRef: {
          effectiveTaxRate: 2790.68,
          id: "f3b1194b-8abf-4603-a79f-9dfe0ab7da8a",
          name: "Helen Schiller IV",
        },
        totalAmount: 4420.36,
        tracking: {
          categoryRefs: [
            {
              id: "86bc173d-689e-4ee9-926f-8d986e881ead",
              name: "Lela Baumbach Jr.",
            },
            {
              id: "12563f94-e29e-4973-a922-a57a15be3e06",
              name: "Lena Beier",
            },
            {
              id: "2b6e3ab8-845f-4059-ba60-ff2a54a31e94",
              name: "Carla Graham",
            },
            {
              id: "e865e795-6f92-451a-9a9d-a660ff57bfaa",
              name: "Edwin Wolf",
            },
          ],
          customerRef: {
            companyName: "sapiente",
            id: "c1b4512c-1032-4648-9c2f-615199ebfd0e",
          },
          isBilledTo: BilledToType.Customer,
          isRebilledTo: BilledToType.Project,
          projectRef: {
            id: "e6c632ca-3aed-4011-b996-312fde047717",
            name: "Irma Wuckert",
          },
        },
        trackingCategoryRefs: [
          {
            id: "d0174763-60a1-45db-aa66-0659a1adeaab",
            name: "Dr. Cassandra Halvorson",
          },
        ],
        unitAmount: 7758.03,
      },
      {
        accountRef: {
          id: "645b08b6-1891-4baa-8fe1-ade008e6f8c5",
          name: "Dr. Chris Hermiston",
        },
        description: "impedit",
        discountAmount: 8427.77,
        discountPercentage: 7205.28,
        itemRef: {
          id: "5a341814-3010-4421-813d-5208ece7e253",
          name: "Andre Kautzer",
        },
        quantity: 3494.4,
        subTotal: 704.1,
        taxAmount: 7814.8,
        taxRateRef: {
          effectiveTaxRate: 4218.44,
          id: "c6e205e1-6dea-4b3f-ac95-78a64584273a",
          name: "Randall Boyle",
        },
        totalAmount: 1173.8,
        tracking: {
          categoryRefs: [
            {
              id: "2309fb09-2992-41ae-bb9f-58c4d86e68e4",
              name: "Ignacio Bartoletti",
            },
            {
              id: "013f59da-757a-459e-8fef-66ef1caa3383",
              name: "Victor Rogahn",
            },
          ],
          customerRef: {
            companyName: "dolore",
            id: "77373c8d-72f6-44d1-9b1f-2c4310661e96",
          },
          isBilledTo: BilledToType.Unknown,
          isRebilledTo: BilledToType.NotApplicable,
          projectRef: {
            id: "9e1cf9e0-6e3a-4437-800a-e6b6bc9b8f75",
            name: "Terence O'Keefe",
          },
        },
        trackingCategoryRefs: [
          {
            id: "a9741d31-1352-4965-bb8a-7202611435e1",
            name: "Lindsay Stiedemann",
          },
          {
            id: "2259b1ab-da8c-4070-a108-4cb0672d1ad8",
            name: "Daisy Tillman",
          },
        ],
        unitAmount: 5750.78,
      },
    ],
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "ea",
    note: "Bill Credit Note with 1 line items, totaling 805.78",
    paymentAllocations: [
      {
        allocation: {
          allocatedOnDate: "ipsam",
          currency: "rerum",
          currencyRate: 5156.38,
          totalAmount: 3572.07,
        },
        payment: {
          accountRef: {
            id: "efbd02ba-e0be-42d7-8225-9e3ea4b5197f",
            name: "Steve Fritsch",
          },
          currency: "at",
          currencyRate: 6378.56,
          id: "7ce52b89-5c53-47c6-854e-fb0b34896c3c",
          note: "fuga",
          paidOnDate: "nostrum",
          reference: "est",
          totalAmount: 7708.73,
        },
      },
      {
        allocation: {
          allocatedOnDate: "delectus",
          currency: "tempore",
          currencyRate: 8786.01,
          totalAmount: 1415.06,
        },
        payment: {
          accountRef: {
            id: "fd570757-7929-4177-9eac-646ecb573409",
            name: "Earl VonRueden DVM",
          },
          currency: "veniam",
          currencyRate: 6592.68,
          id: "2b12eb07-f116-4db9-9545-fc95fa88970e",
          note: "architecto",
          paidOnDate: "quos",
          reference: "iste",
          totalAmount: 8268.62,
        },
      },
    ],
    remainingCredit: 7316.34,
    sourceModifiedDate: "libero",
    status: BillCreditNoteStatus.Paid,
    subTotal: 805.78,
    supplementalData: {
      content: {
        "doloremque": {
          "impedit": "cum",
          "ipsum": "adipisci",
          "saepe": "deserunt",
          "doloremque": "quis",
        },
      },
    },
    supplierRef: {
      id: "5b197cd4-4e2f-452d-82d3-513bb6f48b65",
      supplierName: "nisi",
    },
    totalAmount: 805.78,
    totalDiscount: 7277.71,
    totalTaxAmount: 7945.07,
    withholdingTax: [
      {
        amount: 7060.61,
        name: "Erin Wiza",
      },
      {
        amount: 8915.81,
        name: "Susie Davis",
      },
      {
        amount: 2072.96,
        name: "Genevieve Lebsack",
      },
      {
        amount: 6040.78,
        name: "Miss Kelly Ernser",
      },
    ],
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  timeoutInMinutes: 111496,
}).then((res: CreateBillCreditNoteResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## get

﻿Gets a single billCreditNote corresponding to the given ID.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { GetBillCreditNoteResponse } from "@codat/accounting/dist/sdk/models/operations";
import { BillCreditNoteStatus, BilledToType } from "@codat/accounting/dist/sdk/models/shared";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.billCreditNotes.get({
  billCreditNoteId: "dignissimos",
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
}).then((res: GetBillCreditNoteResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getCreateUpdateModel

﻿Get create/update bill credit note model.

> **Supported Integrations**
> 
> Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=billCreditNotes) for integrations that support creating and updating bill credit notes.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { GetCreateUpdateBillCreditNotesModelResponse } from "@codat/accounting/dist/sdk/models/operations";
import { PushOptionType } from "@codat/accounting/dist/sdk/models/shared";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.billCreditNotes.getCreateUpdateModel({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
}).then((res: GetCreateUpdateBillCreditNotesModelResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## list

﻿Gets a list of all bill credit notes for a company, with pagination.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { ListBillCreditNotesResponse } from "@codat/accounting/dist/sdk/models/operations";
import { BillCreditNoteStatus, BilledToType } from "@codat/accounting/dist/sdk/models/shared";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.billCreditNotes.list({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  orderBy: "-modifiedDate",
  page: 1,
  pageSize: 100,
  query: "esse",
}).then((res: ListBillCreditNotesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## update

﻿Posts an updated billCreditNote to the accounting package for a given company.

Required data may vary by integration. To see what data to post, first call [Get create/update bill credit note model](https://docs.codat.io/accounting-api#/operations/get-create-update-billCreditNotes-model).

> **Supported Integrations**
> 
> Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=billCreditNotes) for integrations that support updating bill credit notes.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { UpdateBillCreditNoteResponse } from "@codat/accounting/dist/sdk/models/operations";
import {
  BillCreditNoteStatus,
  BilledToType,
  DataType,
  PushChangeType,
  PushOperationStatus,
} from "@codat/accounting/dist/sdk/models/shared";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.billCreditNotes.update({
  billCreditNote: {
    allocatedOnDate: "fugiat",
    billCreditNoteNumber: "91fe2a83-e161-4c21-929d-c5c10c4b07e5",
    currency: "ad",
    currencyRate: 1348.18,
    discountPercentage: 3165.01,
    id: "1509398f-98e2-436d-8a5d-c042e0c74ffc",
    issueDate: "delectus",
    lineItems: [
      {
        accountRef: {
          id: "7b114eeb-52ff-4785-bc37-814d4c98e0c2",
          name: "Rudolph Macejkovic",
        },
        description: "rerum",
        discountAmount: 4923.61,
        discountPercentage: 3609.34,
        itemRef: {
          id: "dad636c6-0050-43d8-bb31-180f739ae9e0",
          name: "Nellie Waters",
        },
        quantity: 439.75,
        subTotal: 5740.92,
        taxAmount: 8795.22,
        taxRateRef: {
          effectiveTaxRate: 1786.35,
          id: "810331f3-981d-44c7-80b6-07f3c93c73b9",
          name: "Luke Fay",
        },
        totalAmount: 7782.76,
        tracking: {
          categoryRefs: [
            {
              id: "da7e23f2-2574-411f-af4b-7544e472e802",
              name: "Bill Kling",
            },
            {
              id: "b40463a7-d575-4f14-80e7-64ad7334ec1b",
              name: "Tracey Bosco",
            },
            {
              id: "6a08088d-100e-4fad-a200-ef0422eb2164",
              name: "Courtney Maggio",
            },
            {
              id: "8366c723-ffda-49e0-abee-4825c1fc0e11",
              name: "Miss Marianne Leffler",
            },
          ],
          customerRef: {
            companyName: "a",
            id: "918544ec-42de-4fcc-a8f1-977773e63562",
          },
          isBilledTo: BilledToType.Customer,
          isRebilledTo: BilledToType.NotApplicable,
          projectRef: {
            id: "b408f05e-3d48-4fda-b313-a1f5fd94259c",
            name: "Yvette Dooley",
          },
        },
        trackingCategoryRefs: [
          {
            id: "5ea944f3-b756-4c11-b6c3-7a5126243835",
            name: "Mrs. Johnathan Russel",
          },
        ],
        unitAmount: 1593.93,
      },
      {
        accountRef: {
          id: "3a45cefc-5fde-410a-8ce2-169e510019c6",
          name: "Jermaine Hettinger",
        },
        description: "magnam",
        discountAmount: 4935.91,
        discountPercentage: 3884.04,
        itemRef: {
          id: "2799bfbb-e694-49fb-abb4-ecae6c3d5db3",
          name: "Kristopher Walter",
        },
        quantity: 3233.65,
        subTotal: 8161.51,
        taxAmount: 6746.83,
        taxRateRef: {
          effectiveTaxRate: 9114.51,
          id: "a4c506a8-aa94-4c02-a44c-f5e9d9a4578a",
          name: "Edmund Boyle",
        },
        totalAmount: 3857.39,
        tracking: {
          categoryRefs: [
            {
              id: "0dec001a-c802-4e2e-809f-f8f0f816ff34",
              name: "Mrs. Pearl Rosenbaum",
            },
          ],
          customerRef: {
            companyName: "excepturi",
            id: "02c14125-b096-40a6-a815-1a472af923c5",
          },
          isBilledTo: BilledToType.Customer,
          isRebilledTo: BilledToType.NotApplicable,
          projectRef: {
            id: "9f83f350-cf87-46ff-b901-c6ecbb4e243c",
            name: "Claude Kutch",
          },
        },
        trackingCategoryRefs: [
          {
            id: "afeda53e-5ae6-4e0a-8184-c2b9c247c883",
            name: "Grace Padberg PhD",
          },
          {
            id: "1942f32e-5505-4575-af5d-56d0bd0af2df",
            name: "Joe Fisher",
          },
          {
            id: "4f62cba3-f894-41ae-bc0b-80a6924d3b2e",
            name: "Van Schiller",
          },
          {
            id: "f895010f-5dd3-4d6f-a180-4e54c82f168a",
            name: "Vicki Feeney",
          },
        ],
        unitAmount: 5277.15,
      },
    ],
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "ducimus",
    note: "Bill Credit Note with 1 line items, totaling 805.78",
    paymentAllocations: [
      {
        allocation: {
          allocatedOnDate: "recusandae",
          currency: "tempora",
          currencyRate: 5034.49,
          totalAmount: 2580.59,
        },
        payment: {
          accountRef: {
            id: "380b1f6b-8ca2-475a-a0a0-4c495cc69917",
            name: "Miss Juana Hilpert MD",
          },
          currency: "facere",
          currencyRate: 7079.83,
          id: "1cf4b888-ebdf-4c4c-8ca9-9bc7fc0b2dce",
          note: "veritatis",
          paidOnDate: "aut",
          reference: "laudantium",
          totalAmount: 4804.21,
        },
      },
    ],
    remainingCredit: 2198.6,
    sourceModifiedDate: "voluptates",
    status: BillCreditNoteStatus.Paid,
    subTotal: 805.78,
    supplementalData: {
      content: {
        "magni": {
          "doloremque": "voluptatem",
          "eum": "at",
          "eum": "reprehenderit",
        },
        "voluptatum": {
          "nihil": "atque",
          "rerum": "deserunt",
          "atque": "nostrum",
        },
      },
    },
    supplierRef: {
      id: "81a58208-c54f-4efa-9c95-f2eac5565d30",
      supplierName: "odio",
    },
    totalAmount: 805.78,
    totalDiscount: 7943.06,
    totalTaxAmount: 9903.69,
    withholdingTax: [
      {
        amount: 9121.51,
        name: "Mrs. Samuel Considine",
      },
      {
        amount: 1489.75,
        name: "Ralph Dooley",
      },
      {
        amount: 3034.21,
        name: "Edwin Cartwright",
      },
      {
        amount: 5283.2,
        name: "Cristina Ebert",
      },
    ],
  },
  billCreditNoteId: "inventore",
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  forceUpdate: false,
  timeoutInMinutes: 193236,
}).then((res: UpdateBillCreditNoteResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
