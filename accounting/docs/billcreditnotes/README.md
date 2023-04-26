# billCreditNotes

## Overview

Bill credit notes

### Available Operations

* [createBillCreditNote](#createbillcreditnote) - Create bill credit note
* [getBillCreditNote](#getbillcreditnote) - Get bill credit note
* [getCreateUpdateBillCreditNotesModel](#getcreateupdatebillcreditnotesmodel) - Get create/update bill credit note model
* [listBillCreditNotes](#listbillcreditnotes) - List bill credit notes
* [updateBillCreditNote](#updatebillcreditnote) - Update bill credit note

## createBillCreditNote

Posts a new billCreditNote to the accounting package for a given company.

Required data may vary by integration. To see what data to post, first call [Get create/update bill credit note model](https://docs.codat.io/accounting-api#/operations/get-create-update-billCreditNotes-model).

> **Supported Integrations**
> 
> Check out our [Knowledge UI](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=billCreditNotes) for integrations that support creating bill credit notes.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { CreateBillCreditNoteRequest, CreateBillCreditNoteResponse } from "@codat/accounting/dist/sdk/models/operations";
import {
  BillCreditNoteStatusEnum,
  BilledToTypeEnum,
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

const req: CreateBillCreditNoteRequest = {
  billCreditNote: {
    allocatedOnDate: "facilis",
    billCreditNoteNumber: "tempore",
    currency: "labore",
    currencyRate: 9621.89,
    discountPercentage: 4332.88,
    id: "3c969e9a-3efa-477d-bb14-cd66ae395efb",
    issueDate: "provident",
    lineItems: [
      {
        accountRef: {
          id: "a88f3a66-9970-474b-a446-9b6e21419598",
          name: "Kenneth O'Hara",
        },
        description: "ad",
        discountAmount: 4314.18,
        discountPercentage: 2212.62,
        itemRef: {
          id: "e2516fe4-c8b7-411e-9b7f-d2ed028921cd",
          name: "Simon Jenkins",
        },
        quantity: 4071.83,
        subTotal: 332.22,
        taxAmount: 691.67,
        taxRateRef: {
          effectiveTaxRate: 9825.75,
          id: "b576b0d5-f0d3-40c5-bbb2-587053202c73",
          name: "Dean Welch",
        },
        totalAmount: 7044.15,
        tracking: {
          categoryRefs: [
            {
              id: "0c28909b-3fe4-49a8-99cb-f48633323f9b",
              name: "Marian Wisozk",
            },
            {
              id: "4100674e-bf69-4280-91ba-77a89ebf737a",
              name: "Mrs. Ray Collins",
            },
            {
              id: "e5e6a95d-8a0d-4446-8e2a-f7a73cf3be45",
              name: "Jeannie Leannon MD",
            },
          ],
          customerRef: {
            companyName: "neque",
            id: "26b5a734-29cd-4b1a-8422-bb679d232271",
          },
          isBilledTo: BilledToTypeEnum.NotApplicable,
          isRebilledTo: BilledToTypeEnum.Customer,
          projectRef: {
            id: "f0cbb1e3-1b8b-490f-b443-a1108e0adcf4",
            name: "Ms. Terrance Davis",
          },
        },
        trackingCategoryRefs: [
          {
            id: "fce953f7-3ef7-4fbc-babd-74dd39c0f5d2",
            name: "Elijah Wyman",
          },
          {
            id: "70a45626-d436-4813-b16d-9f5fce6c5561",
            name: "Rosemary Ryan",
          },
          {
            id: "250fb008-c42e-4141-aac3-66c8dd6b1442",
            name: "Jose Kreiger",
          },
        ],
        unitAmount: 2621.18,
      },
      {
        accountRef: {
          id: "778a7bd4-66d2-48c1-8ab3-cdca4251904e",
          name: "Kelly Donnelly",
        },
        description: "recusandae",
        discountAmount: 446.12,
        discountPercentage: 7151.79,
        itemRef: {
          id: "c7178e47-96f2-4a70-8688-282aa482562f",
          name: "Norma Christiansen",
        },
        quantity: 5438.06,
        subTotal: 922.6,
        taxAmount: 4569.11,
        taxRateRef: {
          effectiveTaxRate: 9105.45,
          id: "e17cbe61-e6b7-4b95-bc0a-b3c20c4f3789",
          name: "Ismael Lynch DVM",
        },
        totalAmount: 6216.79,
        tracking: {
          categoryRefs: [
            {
              id: "dd2efd12-1aa6-4f1e-a74b-db04f1575608",
              name: "Rosemarie Jacobs",
            },
            {
              id: "a19f1d17-0513-439d-8808-6a1840394c26",
              name: "Marian Buckridge",
            },
            {
              id: "3f5f0642-dac7-4af5-95cc-413aa63aae8d",
              name: "Dora Luettgen",
            },
          ],
          customerRef: {
            companyName: "possimus",
            id: "bb675fd5-e60b-4375-ad4f-6fbee41f3331",
          },
          isBilledTo: BilledToTypeEnum.NotApplicable,
          isRebilledTo: BilledToTypeEnum.Project,
          projectRef: {
            id: "e35b60eb-1ea4-4265-95ba-3c28744ed53b",
            name: "Morris Weissnat",
          },
        },
        trackingCategoryRefs: [
          {
            id: "d8f5c0b2-f2fb-47b1-94a2-76b26916fe1f",
            name: "Naomi Wuckert",
          },
          {
            id: "94e3698f-447f-4603-a8b4-45e80ca55efd",
            name: "Deborah Turcotte",
          },
          {
            id: "7e1858b6-a89f-4be3-a5aa-8e4824d0ab40",
            name: "Brittany Bailey",
          },
        ],
        unitAmount: 9221.12,
      },
      {
        accountRef: {
          id: "51862065-e904-4f3b-9194-b8abf603a79f",
          name: "Marcos Windler MD",
        },
        description: "quidem",
        discountAmount: 4406.66,
        discountPercentage: 8136.79,
        itemRef: {
          id: "a8a50ce1-87f8-46bc-973d-689eee9526f8",
          name: "Jeremiah Kuvalis",
        },
        quantity: 5421.29,
        subTotal: 5413.81,
        taxAmount: 1209.19,
        taxRateRef: {
          effectiveTaxRate: 9233.06,
          id: "ad4f0e10-1256-43f9-8e29-e973e922a57a",
          name: "Ana Predovic",
        },
        totalAmount: 8784.93,
        tracking: {
          categoryRefs: [
            {
              id: "60807e2b-6e3a-4b88-85f0-597a60ff2a54",
              name: "Danny Berge",
            },
          ],
          customerRef: {
            companyName: "quaerat",
            id: "764a3e86-5e79-456f-9251-a5a9da660ff5",
          },
          isBilledTo: BilledToTypeEnum.NotApplicable,
          isRebilledTo: BilledToTypeEnum.Customer,
          projectRef: {
            id: "faad4f9e-fc1b-4451-ac10-32648dc2f615",
            name: "Misty McKenzie",
          },
        },
        trackingCategoryRefs: [
          {
            id: "d0e9fe6c-632c-4a3a-ad01-17996312fde0",
            name: "Ms. Marcia Kozey",
          },
          {
            id: "8ff61d01-7476-4360-a15d-b6a660659a1a",
            name: "Pat O'Keefe",
          },
          {
            id: "5851d6c6-45b0-48b6-9891-baa0fe1ade00",
            name: "Darin Jakubowski",
          },
          {
            id: "c5f350d8-cdb5-4a34-9814-3010421813d5",
            name: "Cynthia Macejkovic",
          },
        ],
        unitAmount: 8849.52,
      },
    ],
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "esse",
    note: "necessitatibus",
    paymentAllocations: [
      {
        allocation: {
          allocatedOnDate: "veniam",
          currency: "nesciunt",
          currencyRate: 7129.27,
          totalAmount: 4329.84,
        },
        payment: {
          accountRef: {
            id: "68451c6c-6e20-45e1-adea-b3fec9578a64",
            name: "Brandy Gibson",
          },
          currency: "nesciunt",
          currencyRate: 6817.4,
          id: "8418d162-309f-4b09-a992-1aefb9f58c4d",
          note: "quos",
          paidOnDate: "commodi",
          reference: "itaque",
          totalAmount: 4156.08,
        },
      },
    ],
    remainingCredit: 5207.61,
    sourceModifiedDate: "earum",
    status: BillCreditNoteStatusEnum.Draft,
    subTotal: 7221.84,
    supplementalData: {
      content: {
        "voluptatem": {
          "vel": "alias",
          "quasi": "non",
        },
        "maiores": {
          "sint": "nulla",
          "deserunt": "esse",
        },
        "nemo": {
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
    totalAmount: 7820.9,
    totalDiscount: 3041.98,
    totalTaxAmount: 2470.45,
    withholdingTax: [
      {
        amount: 365.61,
        name: "Rosemary Breitenberg",
      },
    ],
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  timeoutInMinutes: 431994,
};

sdk.billCreditNotes.createBillCreditNote(req).then((res: CreateBillCreditNoteResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## getBillCreditNote

Gets a single billCreditNote corresponding to the given ID.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { GetBillCreditNoteRequest, GetBillCreditNoteResponse } from "@codat/accounting/dist/sdk/models/operations";
import { BillCreditNoteStatusEnum, BilledToTypeEnum } from "@codat/accounting/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: GetBillCreditNoteRequest = {
  billCreditNoteId: "velit",
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
};

sdk.billCreditNotes.getBillCreditNote(req).then((res: GetBillCreditNoteResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## getCreateUpdateBillCreditNotesModel

Get create/update bill credit note model.

> **Supported Integrations**
> 
> Check out our [Knowledge UI](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=billCreditNotes) for integrations that support creating and updating bill credit notes.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import {
  GetCreateUpdateBillCreditNotesModelRequest,
  GetCreateUpdateBillCreditNotesModelResponse,
} from "@codat/accounting/dist/sdk/models/operations";
import { PushOptionTypeEnum } from "@codat/accounting/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: GetCreateUpdateBillCreditNotesModelRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
};

sdk.billCreditNotes.getCreateUpdateBillCreditNotesModel(req).then((res: GetCreateUpdateBillCreditNotesModelResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## listBillCreditNotes

Gets a list of all bill credit notes for a company, with pagination

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { ListBillCreditNotesRequest, ListBillCreditNotesResponse } from "@codat/accounting/dist/sdk/models/operations";
import { BillCreditNoteStatusEnum, BilledToTypeEnum } from "@codat/accounting/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: ListBillCreditNotesRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  orderBy: "-modifiedDate",
  page: 1,
  pageSize: 100,
  query: "ut",
};

sdk.billCreditNotes.listBillCreditNotes(req).then((res: ListBillCreditNotesResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## updateBillCreditNote

Posts an updated billCreditNote to the accounting package for a given company.

Required data may vary by integration. To see what data to post, first call [Get create/update bill credit note model](https://docs.codat.io/accounting-api#/operations/get-create-update-billCreditNotes-model).

> **Supported Integrations**
> 
> Check out our [Knowledge UI](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=billCreditNotes) for integrations that support updating bill credit notes.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { UpdateBillCreditNoteRequest, UpdateBillCreditNoteResponse } from "@codat/accounting/dist/sdk/models/operations";
import {
  BillCreditNoteStatusEnum,
  BilledToTypeEnum,
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

const req: UpdateBillCreditNoteRequest = {
  billCreditNote: {
    allocatedOnDate: "perspiciatis",
    billCreditNoteNumber: "earum",
    currency: "dicta",
    currencyRate: 7722.66,
    discountPercentage: 9758.84,
    id: "9e06e3a4-3700-40ae-ab6b-c9b8f759eac5",
    issueDate: "corporis",
    lineItems: [
      {
        accountRef: {
          id: "9741d311-3529-465b-b8a7-202611435e13",
          name: "Orville Ratke",
        },
        description: "quia",
        discountAmount: 3421.37,
        discountPercentage: 6057.12,
        itemRef: {
          id: "b1abda8c-070e-4108-8cb0-672d1ad879ee",
          name: "Kirk Jast",
        },
        quantity: 7029.52,
        subTotal: 5156.38,
        taxAmount: 3572.07,
        taxRateRef: {
          effectiveTaxRate: 8890.6,
          id: "fbd02bae-0be2-4d78-a259-e3ea4b5197f9",
          name: "Elaine Gerhold",
        },
        totalAmount: 6378.56,
        tracking: {
          categoryRefs: [
            {
              id: "ce52b895-c537-4c64-94ef-b0b34896c3ca",
              name: "Jodi Russel",
            },
            {
              id: "e2fd5707-5779-4291-b7de-ac646ecb5734",
              name: "Bobbie Terry",
            },
          ],
          customerRef: {
            companyName: "cum",
            id: "1e5a2b12-eb07-4f11-adb9-9545fc95fa88",
          },
          isBilledTo: BilledToTypeEnum.Customer,
          isRebilledTo: BilledToTypeEnum.NotApplicable,
          projectRef: {
            id: "0e189dbb-30fc-4b33-aa05-5b197cd44e2f",
            name: "Louise Schulist",
          },
        },
        trackingCategoryRefs: [
          {
            id: "3513bb6f-48b6-456b-8db3-5ff2e4b27537",
            name: "Jordan Romaguera",
          },
          {
            id: "e7319c17-7d52-45f7-bb11-4eeb52ff785f",
            name: "Jimmy Konopelski II",
          },
          {
            id: "d4c98e0c-2bb8-49eb-b5da-d636c600503d",
            name: "Willis Rippin Sr.",
          },
          {
            id: "80f739ae-9e05-47eb-809e-2810331f3981",
            name: "Leroy Schinner Jr.",
          },
        ],
        unitAmount: 6985.58,
      },
      {
        accountRef: {
          id: "607f3c93-c73b-49da-bf2c-eda7e23f2257",
          name: "Virginia Bins",
        },
        description: "delectus",
        discountAmount: 2512.12,
        discountPercentage: 7193.89,
        itemRef: {
          id: "7544e472-e802-4857-a5b4-0463a7d575f1",
          name: "Maria Ankunding",
        },
        quantity: 4137.58,
        subTotal: 2561.14,
        taxAmount: 6770.45,
        taxRateRef: {
          effectiveTaxRate: 8237.18,
          id: "7334ec1b-781b-436a-8808-8d100efada20",
          name: "Mrs. Olive Weissnat",
        },
        totalAmount: 1858.97,
        tracking: {
          categoryRefs: [
            {
              id: "b2164cf9-ab83-466c-b23f-fda9e06bee48",
              name: "Dr. Marion Schaefer",
            },
            {
              id: "0e115c80-bff9-4185-84ec-42defcce8f19",
              name: "Joy Kessler",
            },
            {
              id: "e63562a7-b408-4f05-a3d4-8fdaf313a1f5",
              name: "Woodrow Mitchell III",
            },
            {
              id: "9c0b36f2-5ea9-444f-bb75-6c11f6c37a51",
              name: "Beth Cummerata",
            },
          ],
          customerRef: {
            companyName: "praesentium",
            id: "35bbc05a-23a4-45ce-bc5f-de10a0ce2169",
          },
          isBilledTo: BilledToTypeEnum.Project,
          isRebilledTo: BilledToTypeEnum.NotApplicable,
          projectRef: {
            id: "10019c6d-c5e3-4476-a799-bfbbe6949fb2",
            name: "Alton Goyette",
          },
        },
        trackingCategoryRefs: [
          {
            id: "e6c3d5db-3ade-4bd5-9aea-4c506a8aa94c",
            name: "Theresa Jacobi",
          },
          {
            id: "cf5e9d9a-4578-4adc-9ac6-00dec001ac80",
            name: "Rochelle Cormier",
          },
          {
            id: "09ff8f0f-816f-4f34-b7c1-3e902c14125b",
            name: "Miss Isabel Kassulke",
          },
        ],
        unitAmount: 4016.88,
      },
      {
        accountRef: {
          id: "8151a472-af92-43c5-949f-83f350cf876f",
          name: "Mr. Robin Miller",
        },
        description: "commodi",
        discountAmount: 9087.34,
        discountPercentage: 7815.82,
        itemRef: {
          id: "bb4e243c-f789-4ffa-beda-53e5ae6e0ac1",
          name: "Frederick Schaden",
        },
        quantity: 6200.54,
        subTotal: 7935.68,
        taxAmount: 1543.89,
        taxRateRef: {
          effectiveTaxRate: 3006.51,
          id: "7c88373a-40e1-4942-b32e-55055756f5d5",
          name: "Meredith Bailey",
        },
        totalAmount: 177.68,
        tracking: {
          categoryRefs: [
            {
              id: "f2dfe13d-b4f6-42cb-a3f8-941aebc0b80a",
              name: "Velma Cummings",
            },
            {
              id: "3b2ecfcc-8f89-4501-8f5d-d3d6fa1804e5",
              name: "Rosalie Lynch",
            },
            {
              id: "168a363c-8873-4e48-8380-b1f6b8ca275a",
              name: "Mrs. Mary Pfannerstill",
            },
          ],
          customerRef: {
            companyName: "aliquam",
            id: "95cc6991-71b5-41c1-bdb1-cf4b888ebdfc",
          },
          isBilledTo: BilledToTypeEnum.NotApplicable,
          isRebilledTo: BilledToTypeEnum.Project,
          projectRef: {
            id: "cca99bc7-fc0b-42dc-a108-73e42b006d67",
            name: "Guy Kovacek",
          },
        },
        trackingCategoryRefs: [
          {
            id: "8581a582-08c5-44fe-ba9c-95f2eac5565d",
            name: "Nancy Kuhlman",
          },
          {
            id: "ee81206e-2813-4fa4-a41c-480d3f2132af",
            name: "Mr. Connie Brakus",
          },
          {
            id: "514f4cc6-f18b-4f96-a1a6-a4f77a87ee3e",
            name: "Susie Ward",
          },
        ],
        unitAmount: 1316.87,
      },
    ],
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "impedit",
    note: "aliquid",
    paymentAllocations: [
      {
        allocation: {
          allocatedOnDate: "facilis",
          currency: "ipsum",
          currencyRate: 2848.85,
          totalAmount: 3088.19,
        },
        payment: {
          accountRef: {
            id: "18e3bb91-c8d9-475e-8e84-19d8f84f144f",
            name: "Kerry Altenwerth",
          },
          currency: "facere",
          currencyRate: 7890.16,
          id: "c4aa5f3c-abd9-405a-972e-056728227b2d",
          note: "nesciunt",
          paidOnDate: "ipsa",
          reference: "sint",
          totalAmount: 2913.89,
        },
      },
      {
        allocation: {
          allocatedOnDate: "esse",
          currency: "accusantium",
          currencyRate: 7181.19,
          totalAmount: 9565.45,
        },
        payment: {
          accountRef: {
            id: "7a4fa87c-f535-4a6f-ae54-ebf60c321f02",
            name: "Luz King",
          },
          currency: "ratione",
          currencyRate: 2218.24,
          id: "67fe1a0c-c8df-479f-8a39-6d90c364b7c1",
          note: "enim",
          paidOnDate: "nulla",
          reference: "maiores",
          totalAmount: 7156.22,
        },
      },
    ],
    remainingCredit: 6496.57,
    sourceModifiedDate: "impedit",
    status: BillCreditNoteStatusEnum.PartiallyPaid,
    subTotal: 911.2,
    supplementalData: {
      content: {
        "blanditiis": {
          "dicta": "impedit",
          "tempora": "eveniet",
          "repudiandae": "sed",
        },
        "impedit": {
          "impedit": "vel",
          "eligendi": "recusandae",
          "ex": "beatae",
        },
        "veritatis": {
          "itaque": "vero",
          "quidem": "illo",
          "quo": "dignissimos",
          "minus": "distinctio",
        },
      },
    },
    supplierRef: {
      id: "db6eec74-378b-4a25-b177-47dc915ad2ca",
      supplierName: "repellat",
    },
    totalAmount: 3419.83,
    totalDiscount: 8473.08,
    totalTaxAmount: 8450.86,
    withholdingTax: [
      {
        amount: 4563.71,
        name: "Edith Spencer DVM",
      },
      {
        amount: 3502.71,
        name: "Phil Collier",
      },
    ],
  },
  billCreditNoteId: "officia",
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  forceUpdate: false,
  timeoutInMinutes: 379661,
};

sdk.billCreditNotes.updateBillCreditNote(req).then((res: UpdateBillCreditNoteResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```
