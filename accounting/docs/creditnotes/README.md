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
    additionalTaxAmount: 922.79,
    additionalTaxPercentage: 9391.31,
    allocatedOnDate: "fuga",
    creditNoteNumber: "est",
    currency: "distinctio",
    currencyRate: 8546.46,
    customerRef: {
      companyName: "nulla",
      id: "88e71f6c-4825-42d7-b71e-7fd074009ef8",
    },
    discountPercentage: 8172.49,
    id: "29de1dd7-097b-45da-88c5-7fa6c78a216e",
    issueDate: "illo",
    lineItems: [
      {
        accountRef: {
          id: "bafeca61-9149-4814-8b64-ff8ae170ef03",
          name: "Jon Wilkinson",
        },
        description: "recusandae",
        discountAmount: 2538.55,
        discountPercentage: 6520.13,
        isDirectIncome: false,
        itemRef: {
          id: "a8685559-6673-42aa-9dcb-6682cb70f8cf",
          name: "Dustin Wilkinson",
        },
        quantity: 9347.07,
        subTotal: 5800.8,
        taxAmount: 1161.7,
        taxRateRef: {
          effectiveTaxRate: 6935.92,
          id: "9a9f7484-6e2c-4330-9db0-536d9e75ca00",
          name: "Lana Hauck",
        },
        totalAmount: 1500.91,
        tracking: {
          categoryRefs: [
            {
              id: "11a25a8b-f92f-4974-a8ad-9a9f8bf82211",
              name: "Erin Frami",
            },
            {
              id: "d98387f7-a79c-4d72-8d24-84da21729f2a",
              name: "Francis Block",
            },
            {
              id: "5725f116-9ac1-4e41-98a2-3c23e34f2dfa",
              name: "Blanche Cassin",
            },
            {
              id: "f6de9221-51fe-4171-a099-853e9f543d85",
              name: "Elaine Fadel",
            },
          ],
          customerRef: {
            companyName: "voluptates",
            id: "22446044-3bc1-4541-88c2-f56e85da7832",
          },
          isBilledTo: BilledToType1.Project,
          isRebilledTo: BilledToType1.NotApplicable,
          projectRef: {
            id: "bd617c3b-0d51-4a44-bf01-bad8706d4608",
            name: "Juana Wuckert",
          },
        },
        trackingCategoryRefs: [
          {
            id: "41ff5d4e-2ae4-4fb5-8b35-d17638f1edb7",
            name: "Jeffery Hilll",
          },
          {
            id: "cc5cb860-f8cd-4580-ba73-810e4fe44472",
            name: "Cory Runolfsson",
          },
          {
            id: "b1dd3bbc-e247-4b76-84ef-f50126d71cff",
            name: "Bryant Anderson",
          },
          {
            id: "74b84219-53b4-44bd-bc43-159d33e5953c",
            name: "Mrs. Ruth Carroll",
          },
        ],
        unitAmount: 5525.12,
      },
      {
        accountRef: {
          id: "63aa41e6-c31c-4c2f-9fcb-51c9a41ffbe9",
          name: "Willis Smitham",
        },
        description: "ipsam",
        discountAmount: 9200.57,
        discountPercentage: 9358,
        isDirectIncome: false,
        itemRef: {
          id: "65e076cc-7abf-4616-aa5c-71641934b90f",
          name: "Rochelle Bailey",
        },
        quantity: 683,
        subTotal: 6173.25,
        taxAmount: 8228.62,
        taxRateRef: {
          effectiveTaxRate: 1699.28,
          id: "fc2f9e2e-1059-444b-935d-237a72f90849",
          name: "Rick Olson",
        },
        totalAmount: 3105.08,
        tracking: {
          categoryRefs: [
            {
              id: "ecb7537c-d922-42c9-bf57-491aabfa2e76",
              name: "Essie Barton",
            },
            {
              id: "4d456ef1-031e-4689-9f0c-2001e22cd55c",
              name: "Robert Hickle",
            },
            {
              id: "a184d76d-971f-4c82-8c65-b037bb8e0cc8",
              name: "Dan Boehm",
            },
          ],
          customerRef: {
            companyName: "officiis",
            id: "4de04af2-8c5d-4ddb-86aa-1cfd6d828da0",
          },
          isBilledTo: BilledToType1.Unknown,
          isRebilledTo: BilledToType1.Unknown,
          projectRef: {
            id: "19112964-6645-4c1d-81f2-9042f569b7af",
            name: "David Volkman",
          },
        },
        trackingCategoryRefs: [
          {
            id: "16cbe071-bc16-43e2-b9a3-b084da99257d",
            name: "Amber Ziemann V",
          },
        ],
        unitAmount: 2756.61,
      },
      {
        accountRef: {
          id: "7a742d84-496c-4bde-acf6-b99bc63562eb",
          name: "Lionel Wisoky",
        },
        description: "porro",
        discountAmount: 1748.97,
        discountPercentage: 6102.13,
        isDirectIncome: false,
        itemRef: {
          id: "4c060b06-a128-4776-8eef-6d0c6d6ed9c7",
          name: "Paulette Smitham",
        },
        quantity: 2855.44,
        subTotal: 3419.34,
        taxAmount: 4922.27,
        taxRateRef: {
          effectiveTaxRate: 768.18,
          id: "509a8e87-0d3c-45a1-b9c2-42c7b66a1f30",
          name: "Cody Franey",
        },
        totalAmount: 3480.56,
        tracking: {
          categoryRefs: [
            {
              id: "6719890f-42a4-4bb4-b8d8-5b260591d745",
              name: "Earl Rosenbaum II",
            },
            {
              id: "9c9c3f56-7e0e-4252-b65b-1d62fcdace1f",
              name: "Mrs. Ashley Connelly",
            },
            {
              id: "e2239e8f-25cd-40d1-9d95-9f439e39266c",
              name: "Lionel Mraz",
            },
          ],
          customerRef: {
            companyName: "molestiae",
            id: "aa2b2411-3695-4d1e-a698-fcc4596217c2",
          },
          isBilledTo: BilledToType1.NotApplicable,
          isRebilledTo: BilledToType1.NotApplicable,
          projectRef: {
            id: "76763342-5403-48bf-b597-1e9819055738",
            name: "Benny Ward",
          },
        },
        trackingCategoryRefs: [
          {
            id: "c7fda395-94d6-46bc-aae4-80632b9954b6",
            name: "Mr. Alfonso Dibbert",
          },
          {
            id: "36982855-3cb1-4000-abef-4921ec2053b7",
            name: "Claire Fay",
          },
          {
            id: "ac8ee0f2-bf19-4588-940d-03f3deba297b",
            name: "Nathan Watsica MD",
          },
        ],
        unitAmount: 7524.92,
      },
    ],
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "numquam",
    note: "consequatur",
    paymentAllocations: [
      {
        allocation: {
          allocatedOnDate: "doloribus",
          currency: "quos",
          currencyRate: 4169.67,
          totalAmount: 5023.8,
        },
        payment: {
          accountRef: {
            id: "fd52405c-b331-4d49-af4f-127fb0e0bf1f",
            name: "Steve Block",
          },
          currency: "dignissimos",
          currencyRate: 5283.5,
          id: "d0acca77-aeb7-4b70-a1a5-2046b64e99fb",
          note: "doloremque",
          paidOnDate: "officiis",
          reference: "nisi",
          totalAmount: 4421.29,
        },
      },
      {
        allocation: {
          allocatedOnDate: "necessitatibus",
          currency: "alias",
          currencyRate: 5898.68,
          totalAmount: 2853.36,
        },
        payment: {
          accountRef: {
            id: "fdfed554-0ef5-43a3-8a1b-8fe99731adc0",
            name: "Hope Macejkovic",
          },
          currency: "eveniet",
          currencyRate: 1603.53,
          id: "dfb70fb3-8742-490d-b365-61eca16ef894",
          note: "ad",
          paidOnDate: "ab",
          reference: "harum",
          totalAmount: 8177.91,
        },
      },
      {
        allocation: {
          allocatedOnDate: "ducimus",
          currency: "nisi",
          currencyRate: 8811.68,
          totalAmount: 8848.3,
        },
        payment: {
          accountRef: {
            id: "eb518c4d-a1fa-4d35-912f-06d4e5b72f0f",
            name: "Valerie Little",
          },
          currency: "laudantium",
          currencyRate: 6675.59,
          id: "0424e00a-1d6e-4b94-b464-5d03084fbba5",
          note: "cumque",
          paidOnDate: "cumque",
          reference: "vero",
          totalAmount: 9539.16,
        },
      },
      {
        allocation: {
          allocatedOnDate: "tenetur",
          currency: "ipsam",
          currencyRate: 7981.22,
          totalAmount: 7080.11,
        },
        payment: {
          accountRef: {
            id: "01fe51e5-28a4-45ac-82b8-5f8bc2caba8d",
            name: "Clifford Bogisich",
          },
          currency: "illum",
          currencyRate: 8601.44,
          id: "597ff471-1aa1-4bc7-8b86-cecc74f77b48",
          note: "aliquam",
          paidOnDate: "totam",
          reference: "soluta",
          totalAmount: 8425.39,
        },
      },
    ],
    remainingCredit: 4371.07,
    sourceModifiedDate: "mollitia",
    status: CreditNoteStatus.Submitted,
    subTotal: 9404.72,
    supplementalData: {
      content: {
        "tempora": {
          "architecto": "nulla",
          "qui": "maxime",
        },
      },
    },
    totalAmount: 1898.27,
    totalDiscount: 7465.11,
    totalTaxAmount: 5541.99,
    withholdingTax: [
      {
        amount: 5119.21,
        name: "Erika Hahn",
      },
    ],
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  timeoutInMinutes: 239283,
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
  creditNoteId: "eveniet",
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
  query: "ipsa",
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
    additionalTaxAmount: 3846.3,
    additionalTaxPercentage: 253.21,
    allocatedOnDate: "labore",
    creditNoteNumber: "ullam",
    currency: "excepturi",
    currencyRate: 7463.15,
    customerRef: {
      companyName: "voluptates",
      id: "bbad02f2-586b-4cf1-9255-8daa95be6cd0",
    },
    discountPercentage: 1829.75,
    id: "756c354a-a432-4b47-a176-3c5208c23e98",
    issueDate: "sit",
    lineItems: [
      {
        accountRef: {
          id: "d82f0d45-eb4a-48b6-b4ee-5cfc18edc7f7",
          name: "Julio Wehner",
        },
        description: "recusandae",
        discountAmount: 298.97,
        discountPercentage: 2587.5,
        isDirectIncome: false,
        itemRef: {
          id: "b3d3ed0c-5670-4ef4-abd3-c9f1cc503f6c",
          name: "Sheryl Reichel",
        },
        quantity: 30.26,
        subTotal: 6464.39,
        taxAmount: 4283.95,
        taxRateRef: {
          effectiveTaxRate: 1860.92,
          id: "90f957f3-8518-49ad-bef8-07aae03f33ca",
          name: "Lindsay Zemlak",
        },
        totalAmount: 8535.32,
        tracking: {
          categoryRefs: [
            {
              id: "4032ba26-fd36-48ba-9216-bcb415835c73",
              name: "Anita Braun",
            },
            {
              id: "3133edc0-46bc-4516-bbbc-a49227c42c22",
              name: "Warren Hills",
            },
            {
              id: "0495c5db-b3c5-47c1-a498-1e8aa257ddc1",
              name: "Dennis Considine",
            },
            {
              id: "de64bfcc-5469-4d40-95df-a796206bef2b",
              name: "Lynda Dicki",
            },
          ],
          customerRef: {
            companyName: "quia",
            id: "c1aa010e-9aac-42e9-9355-86d18f9f97a4",
          },
          isBilledTo: BilledToType1.Project,
          isRebilledTo: BilledToType1.Project,
          projectRef: {
            id: "ad2bf7d6-7ca8-44ad-99b4-1d6124353187",
            name: "Erma Windler",
          },
        },
        trackingCategoryRefs: [
          {
            id: "03ad421b-d43d-41f0-8b0a-0003eb22d9b3",
            name: "Harvey Beahan",
          },
          {
            id: "4faa741c-57d1-4fed-8205-0d38dc3ce185",
            name: "Marlene Cassin",
          },
          {
            id: "ee69166a-8be3-4444-aac8-b3a2875c6c1f",
            name: "Sam Aufderhar",
          },
        ],
        unitAmount: 18.19,
      },
    ],
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "voluptate",
    note: "repellendus",
    paymentAllocations: [
      {
        allocation: {
          allocatedOnDate: "deserunt",
          currency: "error",
          currencyRate: 7699.22,
          totalAmount: 5131.41,
        },
        payment: {
          accountRef: {
            id: "7ae50c16-661a-41d9-936a-7e8d53213f3f",
            name: "Melanie Lueilwitz",
          },
          currency: "fugit",
          currencyRate: 8256.43,
          id: "b764c59f-0a56-4ceb-8ada-29ca79181c95",
          note: "laboriosam",
          paidOnDate: "molestiae",
          reference: "ab",
          totalAmount: 4014.49,
        },
      },
    ],
    remainingCredit: 4363.67,
    sourceModifiedDate: "dolorem",
    status: CreditNoteStatus.Void,
    subTotal: 3218.89,
    supplementalData: {
      content: {
        "ipsa": {
          "minima": "vel",
          "nisi": "minima",
          "et": "autem",
        },
      },
    },
    totalAmount: 2204.55,
    totalDiscount: 6359.03,
    totalTaxAmount: 2495.41,
    withholdingTax: [
      {
        amount: 2274.7,
        name: "Dustin Blanda",
      },
      {
        amount: 7315.02,
        name: "Miss Bernice Cummings",
      },
    ],
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  creditNoteId: "asperiores",
  forceUpdate: false,
  timeoutInMinutes: 179648,
}).then((res: UpdateCreditNoteResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
