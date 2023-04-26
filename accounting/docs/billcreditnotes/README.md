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
    allocatedOnDate: "ipsum",
    billCreditNoteNumber: "91fe2a83-e161-4c21-929d-c5c10c4b07e5",
    currency: "quidem",
    currencyRate: 5651.89,
    discountPercentage: 5666.02,
    id: "1509398f-98e2-436d-8a5d-c042e0c74ffc",
    issueDate: "pariatur",
    lineItems: [
      {
        accountRef: {
          id: "88e1e91e-450a-4d2a-bd44-269802d502a9",
          name: "Olivia Rice",
        },
        description: "eum",
        discountAmount: 2487.53,
        discountPercentage: 7561.07,
        itemRef: {
          id: "969e9a3e-fa77-4dfb-94cd-66ae395efb9b",
          name: "Nelson Lesch",
        },
        quantity: 6439.9,
        subTotal: 3948.69,
        taxAmount: 4238.55,
        taxRateRef: {
          effectiveTaxRate: 6188.09,
          id: "97074ba4-469b-46e2-9419-59890afa563e",
          name: "Vivian Boyle",
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
          isBilledTo: BilledToTypeEnum.Customer,
          isRebilledTo: BilledToTypeEnum.NotApplicable,
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
          isBilledTo: BilledToTypeEnum.Project,
          isRebilledTo: BilledToTypeEnum.Customer,
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
    ],
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "ea",
    note: "Bill Credit Note with 1 line items, totaling 805.78",
    paymentAllocations: [
      {
        allocation: {
          allocatedOnDate: "quos",
          currency: "voluptatibus",
          currencyRate: 2716.53,
          totalAmount: 2730.09,
        },
        payment: {
          accountRef: {
            id: "7f603e8b-445e-480c-a55e-fd20e457e185",
            name: "Bennie Howe",
          },
          currency: "error",
          currencyRate: 9447.08,
          id: "be3a5aa8-e482-44d0-ab40-75088e518620",
          note: "vel",
          paidOnDate: "nostrum",
          reference: "saepe",
          totalAmount: 6222.31,
        },
      },
      {
        allocation: {
          allocatedOnDate: "consequatur",
          currency: "incidunt",
          currencyRate: 9688.65,
          totalAmount: 2097.5,
        },
        payment: {
          accountRef: {
            id: "b1194b8a-bf60-43a7-9f9d-fe0ab7da8a50",
            name: "Phil Boyer",
          },
          currency: "asperiores",
          currencyRate: 5199.52,
          id: "6bc173d6-89ee-4e95-a6f8-d986e881ead4",
          note: "reiciendis",
          paidOnDate: "doloremque",
          reference: "repudiandae",
          totalAmount: 1160.98,
        },
      },
      {
        allocation: {
          allocatedOnDate: "accusantium",
          currency: "beatae",
          currencyRate: 1747.72,
          totalAmount: 3164.88,
        },
        payment: {
          accountRef: {
            id: "63f94e29-e973-4e92-aa57-a15be3e06080",
            name: "Tricia Denesik",
          },
          currency: "necessitatibus",
          currencyRate: 1875.52,
          id: "ab8845f0-597a-460f-b2a5-4a31e94764a3",
          note: "debitis",
          paidOnDate: "laudantium",
          reference: "eum",
          totalAmount: 3679.27,
        },
      },
    ],
    remainingCredit: 9282.19,
    sourceModifiedDate: "esse",
    status: BillCreditNoteStatusEnum.Paid,
    subTotal: 805.78,
    supplementalData: {
      content: {
        "quis": {
          "reiciendis": "provident",
          "aspernatur": "ullam",
        },
        "quasi": {
          "nostrum": "mollitia",
          "provident": "possimus",
          "animi": "ex",
        },
        "aliquid": {
          "repellat": "doloribus",
        },
      },
    },
    supplierRef: {
      id: "57bfaad4-f9ef-4c1b-8512-c1032648dc2f",
      supplierName: "eum",
    },
    totalAmount: 805.78,
    totalDiscount: 1173.2,
    totalTaxAmount: 3251.18,
    withholdingTax: [
      {
        amount: 5834.04,
        name: "Darin Rodriguez",
      },
    ],
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  timeoutInMinutes: 52508,
};

sdk.billCreditNotes.create(req).then((res: CreateBillCreditNoteResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## get

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
  billCreditNoteId: "earum",
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
};

sdk.billCreditNotes.get(req).then((res: GetBillCreditNoteResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## getCreateUpdateModel

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

sdk.billCreditNotes.getCreateUpdateModel(req).then((res: GetCreateUpdateBillCreditNotesModelResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## list

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
  query: "perspiciatis",
};

sdk.billCreditNotes.list(req).then((res: ListBillCreditNotesResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## update

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
    allocatedOnDate: "maiores",
    billCreditNoteNumber: "91fe2a83-e161-4c21-929d-c5c10c4b07e5",
    currency: "debitis",
    currencyRate: 3998.02,
    discountPercentage: 7809.31,
    id: "1509398f-98e2-436d-8a5d-c042e0c74ffc",
    issueDate: "suscipit",
    lineItems: [
      {
        accountRef: {
          id: "2ca3aed0-1179-4963-92fd-e04771778ff6",
          name: "Ms. Janis Batz",
        },
        description: "esse",
        discountAmount: 4037.93,
        discountPercentage: 2352.63,
        itemRef: {
          id: "60a15db6-a660-4659-a1ad-eaab5851d6c6",
          name: "Ms. Geraldine Ratke",
        },
        quantity: 3996.6,
        subTotal: 1097.84,
        taxAmount: 5308.6,
        taxRateRef: {
          effectiveTaxRate: 6063.08,
          id: "1baa0fe1-ade0-408e-af8c-5f350d8cdb5a",
          name: "Michele Bode II",
        },
        totalAmount: 2213.96,
        tracking: {
          categoryRefs: [
            {
              id: "10421813-d520-48ec-a7e2-53b668451c6c",
              name: "Mrs. Kate Cronin",
            },
          ],
          customerRef: {
            companyName: "quasi",
            id: "6deab3fe-c957-48a6-8584-273a8418d162",
          },
          isBilledTo: BilledToTypeEnum.Unknown,
          isRebilledTo: BilledToTypeEnum.Unknown,
          projectRef: {
            id: "9fb09299-21ae-4fb9-b58c-4d86e68e4be0",
            name: "Mrs. Gina Abbott",
          },
        },
        trackingCategoryRefs: [
          {
            id: "9da757a5-9ecf-4ef6-aef1-caa3383c2beb",
            name: "Glenda Kling",
          },
          {
            id: "3c8d72f6-4d1d-4b1f-ac43-10661e96349e",
            name: "Pat Wolf",
          },
        ],
        unitAmount: 26.77,
      },
    ],
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "nisi",
    note: "Bill Credit Note with 1 line items, totaling 805.78",
    paymentAllocations: [
      {
        allocation: {
          allocatedOnDate: "velit",
          currency: "laborum",
          currencyRate: 2503.98,
          totalAmount: 2244.67,
        },
        payment: {
          accountRef: {
            id: "7000ae6b-6bc9-4b8f-b59e-ac55a9741d31",
            name: "Florence Hand",
          },
          currency: "ex",
          currencyRate: 3676.26,
          id: "bb8a7202-6114-435e-939d-bc2259b1abda",
          note: "quos",
          paidOnDate: "placeat",
          reference: "sit",
          totalAmount: 4793.85,
        },
      },
      {
        allocation: {
          allocatedOnDate: "ipsa",
          currency: "voluptates",
          currencyRate: 800.61,
          totalAmount: 493.48,
        },
        payment: {
          accountRef: {
            id: "84cb0672-d1ad-4879-aeb9-665b85efbd02",
            name: "Miss Grant VonRueden",
          },
          currency: "eos",
          currencyRate: 8448.54,
          id: "782259e3-ea4b-4519-bf92-443da7ce52b8",
          note: "cupiditate",
          paidOnDate: "minima",
          reference: "placeat",
          totalAmount: 3165.42,
        },
      },
      {
        allocation: {
          allocatedOnDate: "neque",
          currency: "in",
          currencyRate: 7963.97,
          totalAmount: 4330.77,
        },
        payment: {
          accountRef: {
            id: "454efb0b-3489-46c3-8a5a-cfbe2fd57075",
            name: "Dora Mante",
          },
          currency: "veritatis",
          currencyRate: 4981.8,
          id: "7deac646-ecb5-4734-89e3-eb1e5a2b12eb",
          note: "ipsa",
          paidOnDate: "ducimus",
          reference: "maiores",
          totalAmount: 873.82,
        },
      },
      {
        allocation: {
          allocatedOnDate: "quasi",
          currency: "laboriosam",
          currencyRate: 8634.71,
          totalAmount: 7294.48,
        },
        payment: {
          accountRef: {
            id: "99545fc9-5fa8-4897-8e18-9dbb30fcb33e",
            name: "Anthony Hayes",
          },
          currency: "architecto",
          currencyRate: 5845.93,
          id: "7cd44e2f-52d8-42d3-913b-b6f48b656bcd",
          note: "facilis",
          paidOnDate: "ipsum",
          reference: "ad",
          totalAmount: 9738.19,
        },
      },
    ],
    remainingCredit: 9745.89,
    sourceModifiedDate: "consequuntur",
    status: BillCreditNoteStatusEnum.Paid,
    subTotal: 805.78,
    supplementalData: {
      content: {
        "labore": {
          "eos": "reprehenderit",
          "nostrum": "neque",
          "iusto": "est",
        },
        "rem": {
          "fugiat": "unde",
          "officiis": "ducimus",
          "dolor": "dicta",
          "error": "porro",
        },
        "vitae": {
          "esse": "fugiat",
          "ad": "aspernatur",
        },
        "enim": {
          "iusto": "dignissimos",
          "libero": "illo",
          "ab": "incidunt",
          "accusamus": "saepe",
        },
      },
    },
    supplierRef: {
      id: "b52ff785-fc37-4814-94c9-8e0c2bb89eb7",
      supplierName: "corporis",
    },
    totalAmount: 805.78,
    totalDiscount: 8738.33,
    totalTaxAmount: 6293.77,
    withholdingTax: [
      {
        amount: 4348.27,
        name: "Gertrude Russel Jr.",
      },
      {
        amount: 3228.29,
        name: "Wendy Stanton",
      },
      {
        amount: 7368.53,
        name: "Joyce Carroll DVM",
      },
      {
        amount: 4797.07,
        name: "Shelly Pagac",
      },
    ],
  },
  billCreditNoteId: "repudiandae",
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  forceUpdate: false,
  timeoutInMinutes: 10063,
};

sdk.billCreditNotes.update(req).then((res: UpdateBillCreditNoteResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```
