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

Posts a new billCreditNote to the accounting package for a given company.

Required data may vary by integration. To see what data to post, first call [Get create/update bill credit note model](https://docs.codat.io/accounting-api#/operations/get-create-update-billCreditNotes-model).

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=billCreditNotes) to see which integrations support this endpoint.


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
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.billCreditNotes.create({
  billCreditNote: {
    allocatedOnDate: "molestias",
    billCreditNoteNumber: "91fe2a83-e161-4c21-929d-c5c10c4b07e5",
    currency: "excepturi",
    currencyRate: 8651.03,
    discountPercentage: 2653.89,
    id: "1509398f-98e2-436d-8a5d-c042e0c74ffc",
    issueDate: "praesentium",
    lineItems: [
      {
        accountRef: {
          id: "e1e91e45-0ad2-4abd-8426-9802d502a94b",
          name: "Francisco Windler",
        },
        description: "eligendi",
        discountAmount: 5761.57,
        discountPercentage: 3960.98,
        itemRef: {
          id: "9e9a3efa-77df-4b14-8d66-ae395efb9ba8",
          name: "Timmy Feeney",
        },
        quantity: 4238.55,
        subTotal: 6188.09,
        taxAmount: 6063.93,
        taxRateRef: {
          effectiveTaxRate: 4748.67,
          id: "074ba446-9b6e-4214-9959-890afa563e25",
          name: "Vera Wyman",
        },
        totalAmount: 8061.94,
        tracking: {
          categoryRefs: [
            {
              id: "b711e5b7-fd2e-4d02-8921-cddc692601fb",
              name: "Colleen Johnston PhD",
            },
            {
              id: "5f0d30c5-fbb2-4587-8532-02c73d5fe9b9",
              name: "Robyn Cruickshank",
            },
            {
              id: "09b3fe49-a8d9-4cbf-8863-3323f9b77f3a",
              name: "Ms. Christine Beer",
            },
          ],
          customerRef: {
            companyName: "quaerat",
            id: "ebf69280-d1ba-477a-89eb-f737ae4203ce",
          },
          isBilledTo: BilledToType.NotApplicable,
          isRebilledTo: BilledToType.Project,
          projectRef: {
            id: "6a95d8a0-d446-4ce2-af7a-73cf3be453f8",
            name: "Karen Rath",
          },
        },
        trackingCategoryRefs: [
          {
            id: "b5a73429-cdb1-4a84-a2bb-679d2322715b",
            name: "George Runolfsdottir",
          },
          {
            id: "1e31b8b9-0f34-443a-9108-e0adcf4b9218",
            name: "Toni Wolff",
          },
        ],
        unitAmount: 6064.76,
      },
      {
        accountRef: {
          id: "53f73ef7-fbc7-4abd-b4dd-39c0f5d2cff7",
          name: "Kurt Abernathy",
        },
        description: "ipsam",
        discountAmount: 4104.92,
        discountPercentage: 1369,
        itemRef: {
          id: "6d436813-f16d-49f5-bce6-c556146c3e25",
          name: "Mr. Elsa Reinger",
        },
        quantity: 7705.81,
        subTotal: 3045.82,
        taxAmount: 1469.46,
        taxRateRef: {
          effectiveTaxRate: 8828.6,
          id: "141aac36-6c8d-4d6b-9442-907474778a7b",
          name: "Bernard Kerluke",
        },
        totalAmount: 1811.51,
        tracking: {
          categoryRefs: [
            {
              id: "c10ab3cd-ca42-4519-84e5-23c7e0bc7178",
              name: "Tom Kuhn",
            },
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
    ],
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "ex",
    note: "Bill Credit Note with 1 line items, totaling 805.78",
    paymentAllocations: [
      {
        allocation: {
          allocatedOnDate: "ad",
          currency: "expedita",
          currencyRate: 299.5,
          totalAmount: 5615.77,
        },
        payment: {
          accountRef: {
            id: "b61891ba-a0fe-41ad-a008-e6f8c5f350d8",
            name: "Taylor Reichel",
          },
          currency: "dolor",
          currencyRate: 3073.76,
          id: "18143010-4218-413d-9208-ece7e253b668",
          note: "magnam",
          paidOnDate: "exercitationem",
          reference: "ab",
          totalAmount: 7814.8,
        },
      },
      {
        allocation: {
          allocatedOnDate: "autem",
          currency: "nobis",
          currencyRate: 3883.19,
          totalAmount: 9272.12,
        },
        payment: {
          accountRef: {
            id: "205e16de-ab3f-4ec9-978a-64584273a841",
            name: "Clint Carroll",
          },
          currency: "consectetur",
          currencyRate: 468.06,
          id: "9fb09299-21ae-4fb9-b58c-4d86e68e4be0",
          note: "ipsam",
          paidOnDate: "vel",
          reference: "alias",
          totalAmount: 938.94,
        },
      },
    ],
    remainingCredit: 2476.85,
    sourceModifiedDate: "maiores",
    status: BillCreditNoteStatus.Paid,
    subTotal: 805.78,
    supplementalData: {
      content: {
        "sint": {
          "deserunt": "esse",
          "nemo": "reprehenderit",
          "est": "quis",
          "sint": "accusamus",
        },
        "impedit": {
          "necessitatibus": "asperiores",
          "ex": "voluptas",
          "debitis": "delectus",
          "quae": "minus",
        },
      },
    },
    supplierRef: {
      id: "aa3383c2-beb4-4773-b3c8-d72f64d1db1f",
      supplierName: "quia",
    },
    totalAmount: 805.78,
    totalDiscount: 7820.9,
    totalTaxAmount: 3041.98,
    withholdingTax: [
      {
        amount: 753.59,
        name: "Dr. Gina Jaskolski",
      },
    ],
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  timeoutInMinutes: 431994,
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
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.billCreditNotes.get({
  billCreditNoteId: "velit",
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
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
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
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.billCreditNotes.list({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  orderBy: "-modifiedDate",
  page: 1,
  pageSize: 100,
  query: "ut",
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
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.billCreditNotes.update({
  billCreditNote: {
    allocatedOnDate: "perspiciatis",
    billCreditNoteNumber: "91fe2a83-e161-4c21-929d-c5c10c4b07e5",
    currency: "earum",
    currencyRate: 1175.25,
    discountPercentage: 7722.66,
    id: "1509398f-98e2-436d-8a5d-c042e0c74ffc",
    issueDate: "voluptatibus",
    lineItems: [
      {
        accountRef: {
          id: "e06e3a43-7000-4ae6-b6bc-9b8f759eac55",
          name: "Jeremiah Koch PhD",
        },
        description: "consectetur",
        discountAmount: 1124.27,
        discountPercentage: 813.71,
        itemRef: {
          id: "352965bb-8a72-4026-9143-5e139dbc2259",
          name: "Gerald Ondricka",
        },
        quantity: 6374.62,
        subTotal: 5546.03,
        taxAmount: 8119.39,
        taxRateRef: {
          effectiveTaxRate: 257.56,
          id: "70e1084c-b067-42d1-ad87-9eeb9665b85e",
          name: "Mr. Jonathon Swaniawski",
        },
        totalAmount: 6841.26,
        tracking: {
          categoryRefs: [
            {
              id: "0be2d782-259e-43ea-8b51-97f92443da7c",
              name: "Lewis Denesik",
            },
            {
              id: "95c537c6-454e-4fb0-b348-96c3ca5acfbe",
              name: "Winifred Streich",
            },
            {
              id: "07577929-177d-4eac-a46e-cb573409e3eb",
              name: "Lila Harvey",
            },
            {
              id: "b12eb07f-116d-4b99-945f-c95fa88970e1",
              name: "Nick Shields",
            },
          ],
          customerRef: {
            companyName: "velit",
            id: "0fcb33ea-055b-4197-8d44-e2f52d82d351",
          },
          isBilledTo: BilledToType.Unknown,
          isRebilledTo: BilledToType.Customer,
          projectRef: {
            id: "b6f48b65-6bcd-4b35-bf2e-4b27537a8cd9",
            name: "Miss Kelly Ernser",
          },
        },
        trackingCategoryRefs: [
          {
            id: "77d525f7-7b11-44ee-b52f-f785fc37814d",
            name: "Alexandra McLaughlin",
          },
        ],
        unitAmount: 96.83,
      },
      {
        accountRef: {
          id: "c2bb89eb-75da-4d63-ac60-0503d8bb3118",
          name: "Lana Kris",
        },
        description: "dolorum",
        discountAmount: 8979.56,
        discountPercentage: 5928.8,
        itemRef: {
          id: "e057eb80-9e28-4103-b1f3-981d4c700b60",
          name: "Kristie Frami",
        },
        quantity: 2313.82,
        subTotal: 7532.4,
        taxAmount: 4901.1,
        taxRateRef: {
          effectiveTaxRate: 2358.34,
          id: "b9da3f2c-eda7-4e23-b225-7411faf4b754",
          name: "Casey Gleason PhD",
        },
        totalAmount: 5258.09,
        tracking: {
          categoryRefs: [
            {
              id: "2857a5b4-0463-4a7d-975f-1400e764ad73",
              name: "Bertha Ward MD",
            },
          ],
          customerRef: {
            companyName: "iusto",
            id: "81b36a08-088d-4100-afad-a200ef0422eb",
          },
          isBilledTo: BilledToType.Unknown,
          isRebilledTo: BilledToType.Unknown,
          projectRef: {
            id: "64cf9ab8-366c-4723-bfda-9e06bee4825c",
            name: "Dr. Shari Roob Sr.",
          },
        },
        trackingCategoryRefs: [
          {
            id: "c80bff91-8544-4ec4-adef-cce8f1977773",
            name: "Ben Durgan",
          },
          {
            id: "2a7b408f-05e3-4d48-bdaf-313a1f5fd942",
            name: "Miss Misty Ruecker",
          },
        ],
        unitAmount: 4124.33,
      },
      {
        accountRef: {
          id: "f25ea944-f3b7-456c-91f6-c37a51262438",
          name: "Annette Quitzon",
        },
        description: "sit",
        discountAmount: 3634.82,
        discountPercentage: 6339.87,
        itemRef: {
          id: "23a45cef-c5fd-4e10-a0ce-2169e510019c",
          name: "Doreen Schmeler",
        },
        quantity: 2467.72,
        subTotal: 2991.53,
        taxAmount: 4935.91,
        taxRateRef: {
          effectiveTaxRate: 3884.04,
          id: "2799bfbb-e694-49fb-abb4-ecae6c3d5db3",
          name: "Kristopher Walter",
        },
        totalAmount: 3233.65,
        tracking: {
          categoryRefs: [
            {
              id: "aea4c506-a8aa-494c-8264-4cf5e9d9a457",
              name: "Grant Schultz MD",
            },
            {
              id: "c600dec0-01ac-4802-a2ec-09ff8f0f816f",
              name: "Lee Gibson",
            },
            {
              id: "c13e902c-1412-45b0-960a-668151a472af",
              name: "Jeremy Douglas",
            },
            {
              id: "949f83f3-50cf-4876-bfb9-01c6ecbb4e24",
              name: "Marianne Zemlak",
            },
          ],
          customerRef: {
            companyName: "sint",
            id: "ffafeda5-3e5a-4e6e-8ac1-84c2b9c247c8",
          },
          isBilledTo: BilledToType.Customer,
          isRebilledTo: BilledToType.Unknown,
          projectRef: {
            id: "73a40e19-42f3-42e5-9055-756f5d56d0bd",
            name: "Amelia Williamson",
          },
        },
        trackingCategoryRefs: [
          {
            id: "e13db4f6-2cba-43f8-941a-ebc0b80a6924",
            name: "Rodney Prohaska",
          },
          {
            id: "cfcc8f89-5010-4f5d-93d6-fa1804e54c82",
            name: "Walter Jacobs",
          },
          {
            id: "363c8873-e484-4380-b1f6-b8ca275a60a0",
            name: "Jody Gutmann",
          },
          {
            id: "cc699171-b51c-41bd-b1cf-4b888ebdfc4c",
            name: "Lowell Olson",
          },
        ],
        unitAmount: 7268.51,
      },
    ],
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "quo",
    note: "Bill Credit Note with 1 line items, totaling 805.78",
    paymentAllocations: [
      {
        allocation: {
          allocatedOnDate: "hic",
          currency: "maxime",
          currencyRate: 366.91,
          totalAmount: 7435.31,
        },
        payment: {
          accountRef: {
            id: "2dce1087-3e42-4b00-ad67-8878ba8581a5",
            name: "Martin Berge",
          },
          currency: "enim",
          currencyRate: 2864.53,
          id: "fefa9c95-f2ea-4c55-a5d3-07cfee81206e",
          note: "sed",
          paidOnDate: "deleniti",
          reference: "sunt",
          totalAmount: 2001.9,
        },
      },
      {
        allocation: {
          allocatedOnDate: "delectus",
          currency: "laborum",
          currencyRate: 3034.21,
          totalAmount: 6442.23,
        },
        payment: {
          accountRef: {
            id: "41c480d3-f213-42af-8310-2d514f4cc6f1",
            name: "Rudolph Welch",
          },
          currency: "sed",
          currencyRate: 1066.82,
          id: "a6a4f77a-87ee-43e4-be75-2c65b34418e3",
          note: "expedita",
          paidOnDate: "libero",
          reference: "iste",
          totalAmount: 749.21,
        },
      },
    ],
    remainingCredit: 7924.99,
    sourceModifiedDate: "quos",
    status: BillCreditNoteStatus.Paid,
    subTotal: 805.78,
    supplementalData: {
      content: {
        "sint": {
          "enim": "accusamus",
          "aperiam": "voluptates",
        },
        "laudantium": {
          "quae": "omnis",
          "illum": "rem",
        },
        "tenetur": {
          "modi": "earum",
          "architecto": "aliquam",
          "labore": "maiores",
        },
        "sequi": {
          "consequatur": "esse",
          "debitis": "facere",
          "quisquam": "cumque",
          "aliquam": "dolorum",
        },
      },
    },
    supplierRef: {
      id: "a5f3cabd-905a-4972-a056-728227b2d309",
      supplierName: "dolore",
    },
    totalAmount: 805.78,
    totalDiscount: 4570.63,
    totalTaxAmount: 380.44,
    withholdingTax: [
      {
        amount: 9565.45,
        name: "Monique Hackett",
      },
      {
        amount: 5314.94,
        name: "Jody Wolff",
      },
      {
        amount: 3538.19,
        name: "Shane Yundt",
      },
    ],
  },
  billCreditNoteId: "corporis",
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  forceUpdate: false,
  timeoutInMinutes: 252567,
}).then((res: UpdateBillCreditNoteResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
