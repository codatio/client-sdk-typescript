# creditNotes

## Overview

Credit notes

### Available Operations

* [createCreditNote](#createcreditnote) - Create credit note
* [getCreateUpdateCreditNotesModel](#getcreateupdatecreditnotesmodel) - Get create/update credit note model
* [getCreditNote](#getcreditnote) - Get credit note
* [listCreditNotes](#listcreditnotes) - List credit notes
* [updateCreditNote](#updatecreditnote) - Update creditNote

## createCreditNote

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
    additionalTaxAmount: 8282.67,
    additionalTaxPercentage: 4716.93,
    allocatedOnDate: "sed",
    creditNoteNumber: "optio",
    currency: "nulla",
    currencyRate: 1664.81,
    customerRef: {
      companyName: "modi",
      id: "84da2172-9f2a-4c41-af57-25f1169ac1e4",
    },
    discountPercentage: 1100.31,
    id: "d8a23c23-e34f-42df-a4a1-97f6de922151",
    issueDate: "delectus",
    lineItems: [
      {
        accountRef: {
          id: "17120998-53e9-4f54-bd85-4439ee224460",
          name: "Alicia Ebert",
        },
        description: "architecto",
        discountAmount: 3290.16,
        discountPercentage: 2991.66,
        isDirectIncome: false,
        itemRef: {
          id: "188c2f56-e85d-4a78-b2ea-bd617c3b0d51",
          name: "Jim Grady",
        },
        quantity: 220.18,
        subTotal: 1013.18,
        taxAmount: 7340.76,
        taxRateRef: {
          effectiveTaxRate: 6450.47,
          id: "d8706d46-082b-4fbd-841f-f5d4e2ae4fb5",
          name: "Andres Fay",
        },
        totalAmount: 1049.9,
        tracking: {
          categoryRefs: [
            {
              id: "638f1edb-7835-49ec-85cb-860f8cd580ba",
              name: "Mr. Emily Macejkovic",
            },
            {
              id: "4fe44472-97cd-43b1-9d3b-bce247b7684e",
              name: "Mr. Emmett Heidenreich",
            },
          ],
          customerRef: {
            companyName: "laboriosam",
            id: "d71cffbd-0eb7-44b8-8219-53b44bd3c431",
          },
          isBilledTo: BilledToTypeEnum1.Unknown,
          isRebilledTo: BilledToTypeEnum1.NotApplicable,
          projectRef: {
            id: "d33e5953-c001-4139-863a-a41e6c31cc2f",
            name: "May Sauer",
          },
        },
        trackingCategoryRefs: [
          {
            id: "c9a41ffb-e9cb-4d79-9ee6-5e076cc7abf6",
            name: "Jeanette Veum",
          },
        ],
        unitAmount: 7817.77,
      },
      {
        accountRef: {
          id: "71641934-b90f-42e0-9d19-d2fc2f9e2e10",
          name: "Daisy Fritsch",
        },
        description: "molestias",
        discountAmount: 2261.98,
        discountPercentage: 3180.3,
        isDirectIncome: false,
        itemRef: {
          id: "d237a72f-9084-49d6-aed4-aecb7537cd92",
          name: "Lori Schneider",
        },
        quantity: 9816.77,
        subTotal: 3461.64,
        taxAmount: 4998.74,
        taxRateRef: {
          effectiveTaxRate: 2935.12,
          id: "91aabfa2-e761-4f0c-a4d4-56ef1031e689",
          name: "Terrell Bashirian Jr.",
        },
        totalAmount: 557.9,
        tracking: {
          categoryRefs: [
            {
              id: "e22cd55c-c058-44a1-84d7-6d971fc820c6",
              name: "Maryann Ankunding",
            },
          ],
          customerRef: {
            companyName: "rerum",
            id: "b8e0cc88-5187-4e4d-a04a-f28c5dddb46a",
          },
          isBilledTo: BilledToTypeEnum1.NotApplicable,
          isRebilledTo: BilledToTypeEnum1.Unknown,
          projectRef: {
            id: "cfd6d828-da01-4319-9129-646645c1d81f",
            name: "Margarita Auer",
          },
        },
        trackingCategoryRefs: [
          {
            id: "569b7aff-0ea2-4216-8be0-71bc163e279a",
            name: "Kelli Beier",
          },
          {
            id: "da99257d-04f4-4084-ba74-2d84496cbdee",
            name: "Dominick Jakubowski",
          },
          {
            id: "9bc63562-ebfd-4f55-8294-c060b06a1287",
            name: "Stacey Fritsch",
          },
          {
            id: "f6d0c6d6-ed9c-473d-9634-571509a8e870",
            name: "Jeff Schimmel",
          },
        ],
        unitAmount: 1021.82,
      },
      {
        accountRef: {
          id: "f9c242c7-b66a-41f3-8c73-df5b6719890f",
          name: "Andrea Orn",
        },
        description: "expedita",
        discountAmount: 2678.39,
        discountPercentage: 2398.58,
        isDirectIncome: false,
        itemRef: {
          id: "8d85b260-591d-4745-a3c2-059c9c3f567e",
          name: "Kellie Cormier",
        },
        quantity: 4884.47,
        subTotal: 3792.36,
        taxAmount: 3395.03,
        taxRateRef: {
          effectiveTaxRate: 7473.58,
          id: "1d62fcda-ce1f-4012-96ce-2239e8f25cd0",
          name: "Dennis Moen",
        },
        totalAmount: 3460.81,
        tracking: {
          categoryRefs: [
            {
              id: "f439e392-66cb-4d95-b7aa-2b24113695d1",
              name: "Charlie Jacobs",
            },
            {
              id: "fcc45962-17c2-4977-a763-34254038bfb5",
              name: "Clinton Bosco",
            },
            {
              id: "81905573-89ce-4dba-87fd-a39594d66bc2",
              name: "Erick Haag III",
            },
          ],
          customerRef: {
            companyName: "dolorem",
            id: "2b9954b6-fa22-4063-a982-8553cb10006b",
          },
          isBilledTo: BilledToTypeEnum1.Project,
          isRebilledTo: BilledToTypeEnum1.Project,
          projectRef: {
            id: "4921ec20-53b7-4493-a6ac-8ee0f2bf1958",
            name: "Dr. Irving Gislason I",
          },
        },
        trackingCategoryRefs: [
          {
            id: "3deba297-be3e-490b-840d-f868fd52405c",
            name: "Dr. Rodney Dooley",
          },
          {
            id: "92f4f127-fb0e-40bf-9f82-17978d0acca7",
            name: "Iris VonRueden",
          },
          {
            id: "b7021a52-046b-464e-99fb-0e67e094fdfe",
            name: "Dustin Heidenreich DVM",
          },
          {
            id: "f53a34a1-b8fe-4997-b1ad-c05d85ae2dfb",
            name: "Lisa Wuckert",
          },
        ],
        unitAmount: 5618.25,
      },
      {
        accountRef: {
          id: "74290d33-6561-4eca-96ef-89451bd76eee",
          name: "Maurice Boehm",
        },
        description: "modi",
        discountAmount: 8226.31,
        discountPercentage: 6266.37,
        isDirectIncome: false,
        itemRef: {
          id: "1fad3551-2f06-4d4e-9b72-f0f548568a04",
          name: "Mr. Lucille Weber",
        },
        quantity: 1009.76,
        subTotal: 8459.84,
        taxAmount: 4206.47,
        taxRateRef: {
          effectiveTaxRate: 9162.43,
          id: "b9434645-d030-484f-bba5-cceff5cb01fe",
          name: "Joyce Torp",
        },
        totalAmount: 5425.06,
        tracking: {
          categoryRefs: [
            {
              id: "45ac82b8-5f8b-4c2c-aba8-da4127dd597f",
              name: "Mr. Ray Koch",
            },
            {
              id: "a1bc74b8-6cec-4c74-b77b-4848bd6a6f04",
              name: "Diane Stokes",
            },
            {
              id: "3b808094-373e-4060-859b-ebbad02f2586",
              name: "Mrs. Forrest Wilkinson",
            },
          ],
          customerRef: {
            companyName: "exercitationem",
            id: "58daa95b-e6cd-4027-96c3-54aa432b47e1",
          },
          isBilledTo: BilledToTypeEnum1.NotApplicable,
          isRebilledTo: BilledToTypeEnum1.NotApplicable,
          projectRef: {
            id: "3c5208c2-3e98-402d-82f0-d45eb4a8b674",
            name: "Clay Hintz",
          },
        },
        trackingCategoryRefs: [
          {
            id: "18edc7f7-87e3-42e0-8b3d-3ed0c5670ef4",
            name: "Maryann Stark",
          },
          {
            id: "9f1cc503-f6c3-49bc-90a6-290f957f3851",
            name: "Luther Nader",
          },
          {
            id: "ef807aae-03f3-43ca-b9fb-9de4032ba26f",
            name: "Jimmy Keebler",
          },
          {
            id: "a9216bcb-4158-435c-b364-1723133edc04",
            name: "Luz Schmidt III",
          },
        ],
        unitAmount: 2277.13,
      },
    ],
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "facilis",
    note: "libero",
    paymentAllocations: [
      {
        allocation: {
          allocatedOnDate: "deserunt",
          currency: "eius",
          currencyRate: 5630.24,
          totalAmount: 1737.52,
        },
        payment: {
          accountRef: {
            id: "27c42c22-c553-4504-95c5-dbb3c57c1e49",
            name: "Jack Ward",
          },
          currency: "similique",
          currencyRate: 1847.97,
          id: "57ddc191-2ebd-4e64-bfcc-5469d4015dfa",
          note: "esse",
          paidOnDate: "iste",
          reference: "ex",
          totalAmount: 1421.73,
        },
      },
      {
        allocation: {
          allocatedOnDate: "voluptatem",
          currency: "voluptas",
          currencyRate: 7288.49,
          totalAmount: 8766.36,
        },
        payment: {
          accountRef: {
            id: "f2b0a3e4-2c1a-4a01-8e9a-ac2e9135586d",
            name: "Billie Windler",
          },
          currency: "sint",
          currencyRate: 4450.02,
          id: "a4bfad2b-f7d6-47ca-84ad-99b41d612435",
          note: "nesciunt",
          paidOnDate: "sunt",
          reference: "blanditiis",
          totalAmount: 4643.01,
        },
      },
      {
        allocation: {
          allocatedOnDate: "perferendis",
          currency: "cumque",
          currencyRate: 9639.68,
          totalAmount: 4071.82,
        },
        payment: {
          accountRef: {
            id: "8b03ad42-1bd4-43d1-b0cb-0a0003eb22d9",
            name: "Leonard Padberg PhD",
          },
          currency: "excepturi",
          currencyRate: 3025.96,
          id: "faa741c5-7d1f-4edc-a050-d38dc3ce1854",
          note: "iusto",
          paidOnDate: "sunt",
          reference: "tenetur",
          totalAmount: 5799.52,
        },
      },
      {
        allocation: {
          allocatedOnDate: "necessitatibus",
          currency: "necessitatibus",
          currencyRate: 4230.32,
          totalAmount: 6203.63,
        },
        payment: {
          accountRef: {
            id: "166a8be3-444e-4ac8-b3a2-875c6c1fe606",
            name: "James Klocko",
          },
          currency: "deserunt",
          currencyRate: 6229.89,
          id: "c87ae50c-1666-41a1-9913-6a7e8d53213f",
          note: "velit",
          paidOnDate: "asperiores",
          reference: "commodi",
          totalAmount: 3744.95,
        },
      },
    ],
    remainingCredit: 5538.05,
    sourceModifiedDate: "esse",
    status: CreditNoteStatusEnum.Draft,
    subTotal: 1453.33,
    supplementalData: {
      content: {
        "expedita": {
          "autem": "aliquam",
          "maxime": "nostrum",
        },
        "occaecati": {
          "doloremque": "id",
          "veniam": "ea",
          "placeat": "necessitatibus",
          "harum": "cumque",
        },
        "culpa": {
          "laborum": "consequuntur",
          "omnis": "maxime",
          "officia": "iusto",
          "natus": "ab",
        },
        "deleniti": {
          "eligendi": "sint",
        },
      },
    },
    totalAmount: 3694.92,
    totalDiscount: 3887.15,
    totalTaxAmount: 4752.38,
    withholdingTax: [
      {
        amount: 4014.49,
        name: "Dawn Schiller",
      },
    ],
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  timeoutInMinutes: 55015,
};

sdk.creditNotes.createCreditNote(req).then((res: CreateCreditNoteResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## getCreateUpdateCreditNotesModel

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

sdk.creditNotes.getCreateUpdateCreditNotesModel(req).then((res: GetCreateUpdateCreditNotesModelResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## getCreditNote

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
  creditNoteId: "nam",
};

sdk.creditNotes.getCreditNote(req).then((res: GetCreditNoteResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## listCreditNotes

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
  query: "minima",
};

sdk.creditNotes.listCreditNotes(req).then((res: ListCreditNotesResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## updateCreditNote

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
    additionalTaxAmount: 4263.08,
    additionalTaxPercentage: 3905.83,
    allocatedOnDate: "minima",
    creditNoteNumber: "et",
    currency: "autem",
    currencyRate: 2204.55,
    customerRef: {
      companyName: "culpa",
      id: "3638512a-b252-41b9-b2e0-72467b8a40bc",
    },
    discountPercentage: 240.78,
    id: "5fab0d65-0edf-422a-94d2-0ec90ea41d1f",
    issueDate: "labore",
    lineItems: [
      {
        accountRef: {
          id: "5e85156f-ff73-4fdf-94fd-d5ea9543398d",
          name: "Timmy Robel",
        },
        description: "dolorum",
        discountAmount: 5358.88,
        discountPercentage: 8253.69,
        isDirectIncome: false,
        itemRef: {
          id: "63388e4d-8039-4ea5-b9b1-8a244fd61903",
          name: "Drew Padberg",
        },
        quantity: 2456.35,
        subTotal: 5302.25,
        taxAmount: 9110.49,
        taxRateRef: {
          effectiveTaxRate: 8423.7,
          id: "0dc671dc-7f1e-43af-9592-0c90d1b4901f",
          name: "Opal Sporer",
        },
        totalAmount: 8051.67,
        tracking: {
          categoryRefs: [
            {
              id: "a32639da-5b7b-4690-ab88-1a94f643664a",
              name: "Irvin Baumbach",
            },
            {
              id: "8c691d73-2d9f-4baf-9476-a2ae8dcc50c8",
              name: "Mr. Jeffery Hegmann",
            },
            {
              id: "73784893-0750-4a00-a966-ec736d431943",
              name: "Sidney Ruecker",
            },
          ],
          customerRef: {
            companyName: "dolor",
            id: "c92398ed-3d3a-4b7c-a3c5-ca8649a70cfd",
          },
          isBilledTo: BilledToTypeEnum1.Unknown,
          isRebilledTo: BilledToTypeEnum1.Project,
          projectRef: {
            id: "6989b720-6451-4077-919e-a83d492ed14b",
            name: "Blake Connelly V",
          },
        },
        trackingCategoryRefs: [
          {
            id: "4545e955-dcc1-485e-a490-1c7c43ad2daa",
            name: "Christy Gorczany",
          },
          {
            id: "a3d230ed-f738-411a-9153-82bd7ed56507",
            name: "Judy Bogan",
          },
        ],
        unitAmount: 5330.96,
      },
      {
        accountRef: {
          id: "f4d73965-64c2-40a0-b11a-961d24a7dbb8",
          name: "Bill Frami",
        },
        description: "atque",
        discountAmount: 5968.02,
        discountPercentage: 1421.56,
        isDirectIncome: false,
        itemRef: {
          id: "cf7812cb-512c-4878-a40b-f548f88f8f1b",
          name: "James Reynolds",
        },
        quantity: 8881.27,
        subTotal: 1202.57,
        taxAmount: 9822.77,
        taxRateRef: {
          effectiveTaxRate: 1756.76,
          id: "06d5d831-d008-4109-8f67-06673f3a681c",
          name: "Nellie Kerluke",
        },
        totalAmount: 7742.94,
        tracking: {
          categoryRefs: [
            {
              id: "742409a2-15e0-4860-9489-a5f63e3af3dd",
              name: "Marty Spencer",
            },
            {
              id: "3dcd6348-3e4a-47a9-8e4d-f37e45b8955d",
              name: "Gloria Emard I",
            },
            {
              id: "a4823109-07bd-4354-8092-bd734f02449d",
              name: "Cecil Wintheiser",
            },
            {
              id: "b20fe5d9-11cb-4fe7-89ca-f45a27f69e2c",
              name: "Merle Keebler Jr.",
            },
          ],
          customerRef: {
            companyName: "debitis",
            id: "9db3ad4c-6b03-4108-99c3-37473082b94f",
          },
          isBilledTo: BilledToTypeEnum1.Unknown,
          isRebilledTo: BilledToTypeEnum1.NotApplicable,
          projectRef: {
            id: "b1fd5671-e9c3-4263-90a4-67143789ce0e",
            name: "Evan Buckridge",
          },
        },
        trackingCategoryRefs: [
          {
            id: "d93a74c0-252f-4e3b-8b4d-b8b778ebb6e1",
            name: "Brandon Rutherford",
          },
          {
            id: "02bafb2c-bc46-435d-9e65-da028c3e951a",
            name: "Dr. Leigh Dickens",
          },
        ],
        unitAmount: 6458.29,
      },
    ],
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "sint",
    note: "eum",
    paymentAllocations: [
      {
        allocation: {
          allocatedOnDate: "magnam",
          currency: "rem",
          currencyRate: 5808.35,
          totalAmount: 8240.62,
        },
        payment: {
          accountRef: {
            id: "7b78673e-13a1-42a6-b992-494594487f5c",
            name: "Mario Fay",
          },
          currency: "ex",
          currencyRate: 7339.99,
          id: "86b3cdf6-415b-4044-9f9d-f13f4eedbe78",
          note: "tempore",
          paidOnDate: "reiciendis",
          reference: "commodi",
          totalAmount: 261.97,
        },
      },
      {
        allocation: {
          allocatedOnDate: "ea",
          currency: "molestias",
          currencyRate: 1564.16,
          totalAmount: 3730.95,
        },
        payment: {
          accountRef: {
            id: "894ea763-d5c7-4279-9b78-5148d6d549e5",
            name: "Kim Hegmann",
          },
          currency: "dolorem",
          currencyRate: 7110.04,
          id: "c0f970c4-2fc9-4f48-8422-5e75b796065c",
          note: "eaque",
          paidOnDate: "earum",
          reference: "earum",
          totalAmount: 6367.75,
        },
      },
    ],
    remainingCredit: 4254.84,
    sourceModifiedDate: "sapiente",
    status: CreditNoteStatusEnum.Paid,
    subTotal: 1904.44,
    supplementalData: {
      content: {
        "molestias": {
          "fuga": "beatae",
        },
        "distinctio": {
          "eligendi": "unde",
          "veniam": "nam",
          "accusamus": "vitae",
        },
        "explicabo": {
          "incidunt": "soluta",
          "nihil": "adipisci",
        },
      },
    },
    totalAmount: 5919.98,
    totalDiscount: 9674.76,
    totalTaxAmount: 2952.84,
    withholdingTax: [
      {
        amount: 9078.26,
        name: "Mr. Maureen Christiansen",
      },
      {
        amount: 1182.21,
        name: "Hector Hegmann",
      },
      {
        amount: 7728.04,
        name: "Marshall Schmitt",
      },
      {
        amount: 1411.42,
        name: "Billy Reichert DVM",
      },
    ],
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  creditNoteId: "excepturi",
  forceUpdate: false,
  timeoutInMinutes: 256890,
};

sdk.creditNotes.updateCreditNote(req).then((res: UpdateCreditNoteResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```
