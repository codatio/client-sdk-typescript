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
    allocatedOnDate: "omnis",
    billCreditNoteNumber: "91fe2a83-e161-4c21-929d-c5c10c4b07e5",
    currency: "molestiae",
    currencyRate: 191.93,
    discountPercentage: 4701.32,
    id: "1509398f-98e2-436d-8a5d-c042e0c74ffc",
    issueDate: "magnam",
    lineItems: [
      {
        accountRef: {
          id: "a4469b6e-2141-4959-890a-fa563e2516fe",
          name: "Jasmine Lind",
        },
        description: "architecto",
        discountAmount: 995.69,
        discountPercentage: 9194.83,
        itemRef: {
          id: "5b7fd2ed-0289-421c-9dc6-92601fb576b0",
          name: "Dr. Herman Wolf",
        },
        quantity: 117.14,
        subTotal: 7649.12,
        taxAmount: 3599.78,
        taxRateRef: {
          effectiveTaxRate: 9441.24,
          id: "bb258705-3202-4c73-95fe-9b90c28909b3",
          name: "Merle Gleichner",
        },
        totalAmount: 5356.33,
        tracking: {
          categoryRefs: [
            {
              id: "9cbf4863-3323-4f9b-b7f3-a4100674ebf6",
              name: "Dr. Craig Littel DDS",
            },
            {
              id: "a77a89eb-f737-4ae4-a03c-e5e6a95d8a0d",
              name: "Rhonda Kautzer",
            },
            {
              id: "2af7a73c-f3be-4453-b870-b326b5a73429",
              name: "Miss Jody Rogahn",
            },
            {
              id: "422bb679-d232-4271-9bf0-cbb1e31b8b90",
              name: "Mike Greenholt",
            },
          ],
          customerRef: {
            companyName: "dolorum",
            id: "1108e0ad-cf4b-4921-879f-ce953f73ef7f",
          },
          isBilledTo: BilledToType.Customer,
          isRebilledTo: BilledToType.Project,
          projectRef: {
            id: "7abd74dd-39c0-4f5d-acff-7c70a45626d4",
            name: "Mrs. Vicki Langosh",
          },
        },
        trackingCategoryRefs: [
          {
            id: "6d9f5fce-6c55-4614-ac3e-250fb008c42e",
            name: "Ellen Borer",
          },
        ],
        unitAmount: 8104.24,
      },
      {
        accountRef: {
          id: "366c8dd6-b144-4290-b474-778a7bd466d2",
          name: "Miss Devin Bogan",
        },
        description: "neque",
        discountAmount: 7786.96,
        discountPercentage: 8472.76,
        itemRef: {
          id: "ca425190-4e52-43c7-a0bc-7178e4796f2a",
          name: "Carol Sawayn",
        },
        quantity: 5100.17,
        subTotal: 1598.67,
        taxAmount: 5361.78,
        taxRateRef: {
          effectiveTaxRate: 1438.29,
          id: "aa482562-f222-4e98-97ee-17cbe61e6b7b",
          name: "Warren Rau V",
        },
        totalAmount: 7313.98,
        tracking: {
          categoryRefs: [
            {
              id: "c20c4f37-89fd-4871-b99d-d2efd121aa6f",
              name: "Lila Kassulke",
            },
          ],
          customerRef: {
            companyName: "libero",
            id: "db04f157-5608-42d6-8ea1-9f1d17051339",
          },
          isBilledTo: BilledToType.Project,
          isRebilledTo: BilledToType.Unknown,
          projectRef: {
            id: "8086a184-0394-4c26-871f-93f5f0642dac",
            name: "Blanche Yundt II",
          },
        },
        trackingCategoryRefs: [
          {
            id: "c413aa63-aae8-4d67-864d-bb675fd5e60b",
            name: "Arlene Heidenreich",
          },
          {
            id: "4f6fbee4-1f33-4317-be35-b60eb1ea4265",
            name: "Cathy Rohan",
          },
          {
            id: "c28744ed-53b8-48f3-a8d8-f5c0b2f2fb7b",
            name: "Margarita Greenholt",
          },
          {
            id: "76b26916-fe1f-408f-8294-e3698f447f60",
            name: "Cecelia Lakin",
          },
        ],
        unitAmount: 2777.73,
      },
      {
        accountRef: {
          id: "5e80ca55-efd2-40e4-97e1-858b6a89fbe3",
          name: "Wesley Nikolaus",
        },
        description: "accusamus",
        discountAmount: 2726.83,
        discountPercentage: 5436.78,
        itemRef: {
          id: "24d0ab40-7508-48e5-9862-065e904f3b11",
          name: "Francisco Powlowski",
        },
        quantity: 7241.48,
        subTotal: 9488.61,
        taxAmount: 3888.67,
        taxRateRef: {
          effectiveTaxRate: 27.03,
          id: "3a79f9df-e0ab-47da-8a50-ce187f86bc17",
          name: "Angelina Jenkins",
        },
        totalAmount: 8872.65,
        tracking: {
          categoryRefs: [
            {
              id: "e9526f8d-986e-4881-aad4-f0e1012563f9",
              name: "Tricia Cronin",
            },
            {
              id: "973e922a-57a1-45be-be06-0807e2b6e3ab",
              name: "Jordan Haag",
            },
            {
              id: "0597a60f-f2a5-44a3-9e94-764a3e865e79",
              name: "Natalie Witting",
            },
            {
              id: "51a5a9da-660f-4f57-bfaa-d4f9efc1b451",
              name: "Mrs. Erma Berge",
            },
          ],
          customerRef: {
            companyName: "eum",
            id: "48dc2f61-5199-4ebf-90e9-fe6c632ca3ae",
          },
          isBilledTo: BilledToType.Project,
          isRebilledTo: BilledToType.Unknown,
          projectRef: {
            id: "11799631-2fde-4047-b177-8ff61d017476",
            name: "Jeanne Beer II",
          },
        },
        trackingCategoryRefs: [
          {
            id: "b6a66065-9a1a-4dea-ab58-51d6c645b08b",
            name: "Doris Lemke MD",
          },
          {
            id: "aa0fe1ad-e008-4e6f-8c5f-350d8cdb5a34",
            name: "Cassandra Bogan",
          },
          {
            id: "01042181-3d52-408e-8e7e-253b668451c6",
            name: "Brent Walter II",
          },
          {
            id: "e16deab3-fec9-4578-a645-84273a8418d1",
            name: "Ms. Marilyn Feest",
          },
        ],
        unitAmount: 7468.37,
      },
    ],
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "alias",
    note: "Bill Credit Note with 1 line items, totaling 805.78",
    paymentAllocations: [
      {
        allocation: {
          allocatedOnDate: "eos",
          currency: "occaecati",
          currencyRate: 6128.67,
          totalAmount: 1700.99,
        },
        payment: {
          accountRef: {
            id: "1aefb9f5-8c4d-486e-a8e4-be056013f59d",
            name: "Claude Hickle",
          },
          currency: "quis",
          currencyRate: 5718.44,
          id: "ecfef66e-f1ca-4a33-83c2-beb477373c8d",
          note: "iure",
          paidOnDate: "odit",
          reference: "voluptatibus",
          totalAmount: 4269.04,
        },
      },
      {
        allocation: {
          allocatedOnDate: "magnam",
          currency: "quibusdam",
          currencyRate: 789.69,
          totalAmount: 8180.34,
        },
        payment: {
          accountRef: {
            id: "b1f2c431-0661-4e96-b49e-1cf9e06e3a43",
            name: "Miss Karen Batz",
          },
          currency: "ea",
          currencyRate: 6931.53,
          id: "6bc9b8f7-59ea-4c55-a974-1d311352965b",
          note: "libero",
          paidOnDate: "rem",
          reference: "dolorum",
          totalAmount: 4876.76,
        },
      },
      {
        allocation: {
          allocatedOnDate: "fugit",
          currency: "alias",
          currencyRate: 1680.42,
          totalAmount: 4254.02,
        },
        payment: {
          accountRef: {
            id: "11435e13-9dbc-4225-9b1a-bda8c070e108",
            name: "Ms. Lynne Rau",
          },
          currency: "dolores",
          currencyRate: 8247.98,
          id: "1ad879ee-b966-45b8-9efb-d02bae0be2d7",
          note: "praesentium",
          paidOnDate: "odit",
          reference: "explicabo",
          totalAmount: 3589.95,
        },
      },
    ],
    remainingCredit: 6214.73,
    sourceModifiedDate: "earum",
    status: BillCreditNoteStatus.Paid,
    subTotal: 805.78,
    supplementalData: {
      content: {
        "recusandae": {
          "ut": "quidem",
          "quis": "beatae",
          "unde": "molestiae",
        },
      },
    },
    supplierRef: {
      id: "f92443da-7ce5-42b8-95c5-37c6454efb0b",
      supplierName: "ratione",
    },
    totalAmount: 805.78,
    totalDiscount: 2899.13,
    totalTaxAmount: 5208.75,
    withholdingTax: [
      {
        amount: 3759.94,
        name: "Jacob Schinner",
      },
      {
        amount: 6692.37,
        name: "Brendan Rippin",
      },
      {
        amount: 9974.37,
        name: "Ms. Corey Kiehn",
      },
    ],
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  timeoutInMinutes: 448369,
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
  billCreditNoteId: "ducimus",
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
  query: "excepturi",
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
    allocatedOnDate: "dolores",
    billCreditNoteNumber: "91fe2a83-e161-4c21-929d-c5c10c4b07e5",
    currency: "error",
    currencyRate: 850.76,
    discountPercentage: 4981.8,
    id: "1509398f-98e2-436d-8a5d-c042e0c74ffc",
    issueDate: "voluptate",
    lineItems: [
      {
        accountRef: {
          id: "eac646ec-b573-4409-a3eb-1e5a2b12eb07",
          name: "Harold Boyer",
        },
        description: "libero",
        discountAmount: 5665.06,
        discountPercentage: 5782.1,
        itemRef: {
          id: "545fc95f-a889-470e-989d-bb30fcb33ea0",
          name: "Ms. Sally Rempel",
        },
        quantity: 7566.54,
        subTotal: 8200.23,
        taxAmount: 2514.64,
        taxRateRef: {
          effectiveTaxRate: 2981.87,
          id: "e2f52d82-d351-43bb-af48-b656bcdb35ff",
          name: "Raquel Greenfelder",
        },
        totalAmount: 4407.77,
        tracking: {
          categoryRefs: [
            {
              id: "37a8cd9e-7319-4c17-bd52-5f77b114eeb5",
              name: "Johanna Weimann",
            },
            {
              id: "5fc37814-d4c9-48e0-82bb-89eb75dad636",
              name: "Mrs. Leslie Anderson I",
            },
          ],
          customerRef: {
            companyName: "illum",
            id: "8bb31180-f739-4ae9-a057-eb809e281033",
          },
          isBilledTo: BilledToType.Unknown,
          isRebilledTo: BilledToType.Project,
          projectRef: {
            id: "3981d4c7-00b6-407f-bc93-c73b9da3f2ce",
            name: "Cameron Kuhn",
          },
        },
        trackingCategoryRefs: [
          {
            id: "f2257411-faf4-4b75-84e4-72e802857a5b",
            name: "Karen Gleichner",
          },
        ],
        unitAmount: 6521.25,
      },
      {
        accountRef: {
          id: "7d575f14-00e7-464a-9733-4ec1b781b36a",
          name: "Gwendolyn Anderson",
        },
        description: "repellendus",
        discountAmount: 832.91,
        discountPercentage: 607.78,
        itemRef: {
          id: "0efada20-0ef0-4422-ab21-64cf9ab8366c",
          name: "Kathy Frami",
        },
        quantity: 8611.23,
        subTotal: 6711.16,
        taxAmount: 6176.57,
        taxRateRef: {
          effectiveTaxRate: 8837.8,
          id: "06bee482-5c1f-4c0e-915c-80bff918544e",
          name: "Joel Cruickshank",
        },
        totalAmount: 9851.09,
        tracking: {
          categoryRefs: [
            {
              id: "ce8f1977-773e-4635-a2a7-b408f05e3d48",
              name: "Clint Ortiz",
            },
            {
              id: "13a1f5fd-9425-49c0-b36f-25ea944f3b75",
              name: "Dr. Alexandra Bernhard",
            },
            {
              id: "c37a5126-2438-435b-bc05-a23a45cefc5f",
              name: "Miss Frankie Braun DDS",
            },
            {
              id: "e2169e51-0019-4c6d-85e3-4762799bfbbe",
              name: "Lindsey Gislason",
            },
          ],
          customerRef: {
            companyName: "cum",
            id: "2bb4ecae-6c3d-45db-bade-bd5daea4c506",
          },
          isBilledTo: BilledToType.Customer,
          isRebilledTo: BilledToType.Customer,
          projectRef: {
            id: "aa94c026-44cf-45e9-99a4-578adc1ac600",
            name: "Mr. Alonzo Schoen V",
          },
        },
        trackingCategoryRefs: [
          {
            id: "802e2ec0-9ff8-4f0f-816f-f3477c13e902",
            name: "Mr. Jack Gottlieb",
          },
          {
            id: "b0960a66-8151-4a47-aaf9-23c5949f83f3",
            name: "Angela Schaefer",
          },
          {
            id: "76ffb901-c6ec-4bb4-a243-cf789ffafeda",
            name: "Sheila Torphy",
          },
          {
            id: "e6e0ac18-4c2b-49c2-87c8-8373a40e1942",
            name: "Tony Connelly",
          },
        ],
        unitAmount: 3731.06,
      },
      {
        accountRef: {
          id: "055756f5-d56d-40bd-8af2-dfe13db4f62c",
          name: "Lorenzo Flatley",
        },
        description: "error",
        discountAmount: 2524.73,
        discountPercentage: 978.1,
        itemRef: {
          id: "aebc0b80-a692-44d3-b2ec-fcc8f895010f",
          name: "Lynette Senger",
        },
        quantity: 4248.53,
        subTotal: 9608.13,
        taxAmount: 6525.15,
        taxRateRef: {
          effectiveTaxRate: 651.21,
          id: "804e54c8-2f16-48a3-a3c8-873e484380b1",
          name: "Milton Powlowski",
        },
        totalAmount: 6464.91,
        tracking: {
          categoryRefs: [
            {
              id: "75a60a04-c495-4cc6-9917-1b51c1bdb1cf",
              name: "Lula Lowe",
            },
          ],
          customerRef: {
            companyName: "officiis",
            id: "bdfc4ccc-a99b-4c7f-80b2-dce10873e42b",
          },
          isBilledTo: BilledToType.Unknown,
          isRebilledTo: BilledToType.Unknown,
          projectRef: {
            id: "6d678878-ba85-481a-9820-8c54fefa9c95",
            name: "Howard Torphy",
          },
        },
        trackingCategoryRefs: [
          {
            id: "565d307c-fee8-4120-ae28-13fa4a41c480",
            name: "Mike Zulauf I",
          },
          {
            id: "2af03102-d514-4f4c-86f1-8bf9621a6a4f",
            name: "Tamara O'Kon",
          },
        ],
        unitAmount: 9085.39,
      },
      {
        accountRef: {
          id: "e3e4be75-2c65-4b34-818e-3bb91c8d975e",
          name: "Silvia Langworth V",
        },
        description: "illum",
        discountAmount: 5265.84,
        discountPercentage: 9493.7,
        itemRef: {
          id: "84f144f3-e07e-4dcc-8aa5-f3cabd905a97",
          name: "Kelley Bashirian",
        },
        quantity: 4741.85,
        subTotal: 1541.3,
        taxAmount: 5147.67,
        taxRateRef: {
          effectiveTaxRate: 1527.42,
          id: "27b2d309-470b-4f7a-8fa8-7cf535a6fae5",
          name: "Gwen Reichel",
        },
        totalAmount: 304.26,
        tracking: {
          categoryRefs: [
            {
              id: "321f023b-75d2-4367-be1a-0cc8df79f0a3",
              name: "Ruben Sipes DDS",
            },
            {
              id: "364b7c15-dfba-4ce1-88b1-c4ee2c8c6ce6",
              name: "Marie Wunsch",
            },
            {
              id: "b1c7cbdb-6eec-4743-b8ba-25317747dc91",
              name: "Janie Stanton",
            },
            {
              id: "af5dd672-3dc0-4f5a-a2f3-a6b700878756",
              name: "Gail Fay",
            },
          ],
          customerRef: {
            companyName: "est",
            id: "6c98b555-5408-40d4-8bca-cc6cbd6b5f3e",
          },
          isBilledTo: BilledToType.Project,
          isRebilledTo: BilledToType.Customer,
          projectRef: {
            id: "09304f92-6bad-4255-b819-b474b0ed20e5",
            name: "Ruby Haag",
          },
        },
        trackingCategoryRefs: [
          {
            id: "f639a910-abdc-4ab6-a676-696e1ec00221",
            name: "Johnny Farrell",
          },
          {
            id: "89acb3ec-fda8-4d0c-949e-f03004978a61",
            name: "Neal Boehm",
          },
          {
            id: "20688f77-c1ff-4c71-9ca1-63f2a3c80a97",
            name: "Darrin Flatley",
          },
          {
            id: "cddf857a-9e61-4876-86ab-21d29dfc94d6",
            name: "Clay Schaefer",
          },
        ],
        unitAmount: 6143.46,
      },
    ],
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "provident",
    note: "Bill Credit Note with 1 line items, totaling 805.78",
    paymentAllocations: [
      {
        allocation: {
          allocatedOnDate: "sint",
          currency: "aperiam",
          currencyRate: 494.56,
          totalAmount: 4312.58,
        },
        payment: {
          accountRef: {
            id: "6a6d2d00-0355-4338-8ec0-86fa21e9152c",
            name: "Ms. Melvin Brekke III",
          },
          currency: "ducimus",
          currencyRate: 7284.74,
          id: "8e3c8db0-3408-4d6d-b64f-fd455906d126",
          note: "neque",
          paidOnDate: "quibusdam",
          reference: "numquam",
          totalAmount: 5231.09,
        },
      },
    ],
    remainingCredit: 8846.22,
    sourceModifiedDate: "omnis",
    status: BillCreditNoteStatus.Paid,
    subTotal: 805.78,
    supplementalData: {
      content: {
        "corporis": {
          "dolores": "placeat",
          "excepturi": "recusandae",
          "quos": "dicta",
          "sapiente": "ipsum",
        },
      },
    },
    supplierRef: {
      id: "0be3e432-02d7-4216-9765-06641870d9d2",
      supplierName: "inventore",
    },
    totalAmount: 805.78,
    totalDiscount: 9764.03,
    totalTaxAmount: 6012.28,
    withholdingTax: [
      {
        amount: 8345.87,
        name: "Sherry Batz",
      },
      {
        amount: 8907.65,
        name: "Miss Simon Bosco V",
      },
      {
        amount: 1917.24,
        name: "Anita Dare III",
      },
    ],
  },
  billCreditNoteId: "laudantium",
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  forceUpdate: false,
  timeoutInMinutes: 703407,
}).then((res: UpdateBillCreditNoteResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
