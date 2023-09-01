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

The *Create bill credit note* endpoint creates a new [bill credit note](https://docs.codat.io/sync-for-payables-api#/schemas/BillCreditNote) for a given company's connection.

[Bill credit notes](https://docs.codat.io/sync-for-payables-api#/schemas/BillCreditNote) are issued by a supplier for the purpose of recording credit.

**Integration-specific behaviour**

Required data may vary by integration. To see what data to post, first call [Get create/update bill credit note model](https://docs.codat.io/sync-for-payables-api#/operations/get-create-update-billCreditNotes-model).

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=billCreditNotes) for integrations that support creating a bill credit note.


### Example Usage

```typescript
import { CodatSyncPayables } from "@codat/sync-for-payables";
import { CreateBillCreditNoteResponse } from "@codat/sync-for-payables/dist/sdk/models/operations";
import { BillCreditNoteStatus, BilledToType } from "@codat/sync-for-payables/dist/sdk/models/shared";

const sdk = new CodatSyncPayables({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.billCreditNotes.create({
  billCreditNote: {
    allocatedOnDate: "2022-10-23T00:00:00.000Z",
    billCreditNoteNumber: "91fe2a83-e161-4c21-929d-c5c10c4b07e5",
    currency: "GBP",
    currencyRate: 8700.13,
    discountPercentage: 0,
    id: "1509398f-98e2-436d-8a5d-c042e0c74ffc",
    issueDate: "2022-10-23T00:00:00.000Z",
    lineItems: [
      {
        accountRef: {
          id: "7cc78ca1-ba92-48fc-8167-42cb73920592",
          name: "Curtis Morissette",
        },
        description: "saepe",
        discountAmount: 6818.2,
        discountPercentage: 4499.5,
        itemRef: {
          id: "596eb10f-aaa2-4352-8595-5907aff1a3a2",
          name: "Shaun McCullough",
        },
        quantity: 4663.11,
        subTotal: 4746.97,
        taxAmount: 2444.25,
        taxRateRef: {
          effectiveTaxRate: 6235.1,
          id: "251aa52c-3f5a-4d01-9da1-ffe78f097b00",
          name: "Mrs. April Wuckert",
        },
        totalAmount: 4808.94,
        tracking: {
          categoryRefs: [
            {
              id: "b5e6e13b-99d4-488e-9e91-e450ad2abd44",
              name: "Beth McGlynn Sr.",
            },
          ],
          customerRef: {
            companyName: "assumenda",
            id: "502a94bb-4f63-4c96-9e9a-3efa77dfb14c",
          },
          isBilledTo: BilledToType.Project,
          isRebilledTo: BilledToType.NotApplicable,
          projectRef: {
            id: "6ae395ef-b9ba-488f-ba66-997074ba4469",
            name: "Duane Thiel II",
          },
        },
        trackingCategoryRefs: [
          {
            id: "959890af-a563-4e25-96fe-4c8b711e5b7f",
            name: "Louis Turner Sr.",
          },
        ],
        unitAmount: 5083.15,
      },
      {
        accountRef: {
          id: "921cddc6-9260-41fb-976b-0d5f0d30c5fb",
          name: "Ernest Hayes",
        },
        description: "eaque",
        discountAmount: 3389.85,
        discountPercentage: 1999.96,
        itemRef: {
          id: "202c73d5-fe9b-490c-a890-9b3fe49a8d9c",
          name: "Toby Hahn",
        },
        quantity: 2123.9,
        subTotal: 2098.43,
        taxAmount: 2224.43,
        taxRateRef: {
          effectiveTaxRate: 1861.93,
          id: "3f9b77f3-a410-4067-8ebf-69280d1ba77a",
          name: "Arturo Treutel",
        },
        totalAmount: 4694.97,
        tracking: {
          categoryRefs: [
            {
              id: "7ae4203c-e5e6-4a95-98a0-d446ce2af7a7",
              name: "Rosalie White",
            },
          ],
          customerRef: {
            companyName: "accusamus",
            id: "453f870b-326b-45a7-b429-cdb1a8422bb6",
          },
          isBilledTo: BilledToType.NotApplicable,
          isRebilledTo: BilledToType.Customer,
          projectRef: {
            id: "d2322715-bf0c-4bb1-a31b-8b90f3443a11",
            name: "Miss Billie Ward",
          },
        },
        trackingCategoryRefs: [
          {
            id: "f4b92187-9fce-4953-b73e-f7fbc7abd74d",
            name: "Earl Mosciski DVM",
          },
          {
            id: "5d2cff7c-70a4-4562-ad43-6813f16d9f5f",
            name: "Elbert Jenkins",
          },
          {
            id: "56146c3e-250f-4b00-8c42-e141aac366c8",
            name: "Drew Hoeger I",
          },
          {
            id: "42907474-778a-47bd-866d-28c10ab3cdca",
            name: "Ms. Ruby Hintz II",
          },
        ],
        unitAmount: 8920.5,
      },
      {
        accountRef: {
          id: "523c7e0b-c717-48e4-b96f-2a70c688282a",
          name: "Randall Lindgren",
        },
        description: "nisi",
        discountAmount: 1470.14,
        discountPercentage: 9564.06,
        itemRef: {
          id: "222e9817-ee17-4cbe-a1e6-b7b95bc0ab3c",
          name: "Elizabeth Schinner",
        },
        quantity: 2328.65,
        subTotal: 4581.39,
        taxAmount: 5034.27,
        taxRateRef: {
          effectiveTaxRate: 5909.84,
          id: "fd871f99-dd2e-4fd1-a1aa-6f1e674bdb04",
          name: "Samuel Hermiston",
        },
        totalAmount: 3917.74,
        tracking: {
          categoryRefs: [
            {
              id: "82d68ea1-9f1d-4170-9133-9d08086a1840",
              name: "Toni Fritsch",
            },
          ],
          customerRef: {
            companyName: "voluptas",
            id: "071f93f5-f064-42da-87af-515cc413aa63",
          },
          isBilledTo: BilledToType.Customer,
          isRebilledTo: BilledToType.Customer,
          projectRef: {
            id: "e8d67864-dbb6-475f-95e6-0b375ed4f6fb",
            name: "Dr. Terence Gulgowski",
          },
        },
        trackingCategoryRefs: [
          {
            id: "317fe35b-60eb-41ea-8265-55ba3c28744e",
            name: "Dustin Ferry",
          },
        ],
        unitAmount: 5553.61,
      },
      {
        accountRef: {
          id: "f3a8d8f5-c0b2-4f2f-b7b1-94a276b26916",
          name: "Rogelio Bins V",
        },
        description: "maiores",
        discountAmount: 2748.23,
        discountPercentage: 1484.78,
        itemRef: {
          id: "94e3698f-447f-4603-a8b4-45e80ca55efd",
          name: "Deborah Turcotte",
        },
        quantity: 4461.35,
        subTotal: 8892.34,
        taxAmount: 1046.27,
        taxRateRef: {
          effectiveTaxRate: 5124.52,
          id: "58b6a89f-be3a-45aa-8e48-24d0ab407508",
          name: "Ms. Lamar Hessel",
        },
        totalAmount: 1536.27,
        tracking: {
          categoryRefs: [
            {
              id: "65e904f3-b119-44b8-abf6-03a79f9dfe0a",
              name: "Ron Schulist",
            },
          ],
          customerRef: {
            companyName: "mollitia",
            id: "50ce187f-86bc-4173-9689-eee9526f8d98",
          },
          isBilledTo: BilledToType.NotApplicable,
          isRebilledTo: BilledToType.Project,
          projectRef: {
            id: "881ead4f-0e10-4125-a3f9-4e29e973e922",
            name: "Leo Kiehn II",
          },
        },
        trackingCategoryRefs: [
          {
            id: "e3e06080-7e2b-46e3-ab88-45f0597a60ff",
            name: "Alberta Harber",
          },
          {
            id: "31e94764-a3e8-465e-b956-f9251a5a9da6",
            name: "Ruth Zulauf",
          },
          {
            id: "7bfaad4f-9efc-41b4-912c-1032648dc2f6",
            name: "Cathy Breitenberg",
          },
        ],
        unitAmount: 9364.69,
      },
    ],
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "2022-10-23T00:00:00.000Z",
    note: "Bill Credit Note with 1 line items, totaling 805.78",
    paymentAllocations: [
      {
        allocation: {
          allocatedOnDate: "2022-10-23T00:00:00.000Z",
          currency: "GBP",
          currencyRate: 9358.33,
          totalAmount: 5962.11,
        },
        payment: {
          accountRef: {
            id: "fe6c632c-a3ae-4d01-9799-6312fde04771",
            name: "Tamara Lang",
          },
          currency: "USD",
          currencyRate: 999.58,
          id: "d0174763-60a1-45db-aa66-0659a1adeaab",
          note: "ad",
          paidOnDate: "2022-10-23T00:00:00.000Z",
          reference: "enim",
          totalAmount: 1104.77,
        },
      },
      {
        allocation: {
          allocatedOnDate: "2022-10-23T00:00:00.000Z",
          currency: "USD",
          currencyRate: 7758.03,
          totalAmount: 4053.73,
        },
        payment: {
          accountRef: {
            id: "45b08b61-891b-4aa0-be1a-de008e6f8c5f",
            name: "Marion Aufderhar",
          },
          currency: "EUR",
          currencyRate: 8427.77,
          id: "b5a34181-4301-4042-9813-d5208ece7e25",
          note: "nesciunt",
          paidOnDate: "2022-10-23T00:00:00.000Z",
          reference: "eum",
          totalAmount: 4269.43,
        },
      },
      {
        allocation: {
          allocatedOnDate: "2022-10-23T00:00:00.000Z",
          currency: "GBP",
          currencyRate: 3494.4,
          totalAmount: 704.1,
        },
        payment: {
          accountRef: {
            id: "c6c6e205-e16d-4eab-bfec-9578a6458427",
            name: "Lee Larkin IV",
          },
          currency: "EUR",
          currencyRate: 1173.8,
          id: "62309fb0-9299-421a-afb9-f58c4d86e68e",
          note: "modi",
          paidOnDate: "2022-10-23T00:00:00.000Z",
          reference: "vero",
          totalAmount: 329.01,
        },
      },
      {
        allocation: {
          allocatedOnDate: "2022-10-23T00:00:00.000Z",
          currency: "USD",
          currencyRate: 13.83,
          totalAmount: 938.94,
        },
        payment: {
          accountRef: {
            id: "3f59da75-7a59-4ecf-af66-ef1caa3383c2",
            name: "Lamar Reichert",
          },
          currency: "USD",
          currencyRate: 1940.23,
          id: "73c8d72f-64d1-4db1-b2c4-310661e96349",
          note: "earum",
          paidOnDate: "2022-10-23T00:00:00.000Z",
          reference: "impedit",
          totalAmount: 9758.84,
        },
      },
    ],
    remainingCredit: 0,
    sourceModifiedDate: "2022-10-23T00:00:00.000Z",
    status: BillCreditNoteStatus.Paid,
    subTotal: 805.78,
    supplementalData: {
      content: {
        "alias": {
          "itaque": "velit",
          "laborum": "non",
        },
        "dolor": {
          "sit": "doloremque",
          "consequatur": "officia",
        },
        "recusandae": {
          "quidem": "voluptas",
          "facilis": "placeat",
        },
        "perspiciatis": {
          "deleniti": "a",
          "voluptate": "ullam",
          "unde": "necessitatibus",
        },
      },
    },
    supplierRef: {
      id: "ac55a974-1d31-4135-a965-bb8a72026114",
      supplierName: "neque",
    },
    totalAmount: 805.78,
    totalDiscount: 0,
    totalTaxAmount: 0,
    withholdingTax: [
      {
        amount: 9323.94,
        name: "Tracy Mills",
      },
      {
        amount: 8028.94,
        name: "Marilyn Heaney",
      },
    ],
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  timeoutInMinutes: 115661,
}).then((res: CreateBillCreditNoteResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.CreateBillCreditNoteRequest](../../models/operations/createbillcreditnoterequest.md) | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `retries`                                                                                        | [utils.RetryConfig](../../models/utils/retryconfig.md)                                           | :heavy_minus_sign:                                                                               | Configuration to override the default retry behavior of the client.                              |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.CreateBillCreditNoteResponse](../../models/operations/createbillcreditnoteresponse.md)>**


## get

The *Get bill credit note* endpoint returns a single bill credit note for a given `billCreditNoteId`.

[Bill credit notes](https://docs.codat.io/sync-for-payables-api#/schemas/BillCreditNote) are issued by a supplier for the purpose of recording credit.

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=billCreditNotes) for integrations that support getting a specific bill credit note.

Before using this endpoint, you must have [retrieved data for the company](https://docs.codat.io/sync-for-payables-api#/operations/refresh-company-data).


### Example Usage

```typescript
import { CodatSyncPayables } from "@codat/sync-for-payables";
import { GetBillCreditNoteResponse } from "@codat/sync-for-payables/dist/sdk/models/operations";

const sdk = new CodatSyncPayables({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.billCreditNotes.get({
  billCreditNoteId: "id",
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
}).then((res: GetBillCreditNoteResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.GetBillCreditNoteRequest](../../models/operations/getbillcreditnoterequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `retries`                                                                                  | [utils.RetryConfig](../../models/utils/retryconfig.md)                                     | :heavy_minus_sign:                                                                         | Configuration to override the default retry behavior of the client.                        |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.GetBillCreditNoteResponse](../../models/operations/getbillcreditnoteresponse.md)>**


## getCreateUpdateModel

The *Get create/update bill credit note model* endpoint returns the expected data for the request payload when creating and updating a [bill credit note](https://docs.codat.io/sync-for-payables-api#/schemas/BillCreditNote) for a given company and integration.

[Bill credit notes](https://docs.codat.io/sync-for-payables-api#/schemas/BillCreditNote) are issued by a supplier for the purpose of recording credit.

**Integration-specific behaviour**

See the *response examples* for integration-specific indicative models.

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=billCreditNotes) for integrations that support creating and updating a bill credit note.


### Example Usage

```typescript
import { CodatSyncPayables } from "@codat/sync-for-payables";
import { GetCreateUpdateBillCreditNoteModelResponse } from "@codat/sync-for-payables/dist/sdk/models/operations";

const sdk = new CodatSyncPayables({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.billCreditNotes.getCreateUpdateModel({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
}).then((res: GetCreateUpdateBillCreditNoteModelResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                    | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                    | [operations.GetCreateUpdateBillCreditNoteModelRequest](../../models/operations/getcreateupdatebillcreditnotemodelrequest.md) | :heavy_check_mark:                                                                                                           | The request object to use for the request.                                                                                   |
| `retries`                                                                                                                    | [utils.RetryConfig](../../models/utils/retryconfig.md)                                                                       | :heavy_minus_sign:                                                                                                           | Configuration to override the default retry behavior of the client.                                                          |
| `config`                                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                 | :heavy_minus_sign:                                                                                                           | Available config options for making requests.                                                                                |


### Response

**Promise<[operations.GetCreateUpdateBillCreditNoteModelResponse](../../models/operations/getcreateupdatebillcreditnotemodelresponse.md)>**


## list

The *List bill credit notes* endpoint returns a list of [bill credit notes](https://docs.codat.io/sync-for-payables-api#/schemas/BillCreditNote) for a given company's connection.

[Bill credit notes](https://docs.codat.io/sync-for-payables-api#/schemas/BillCreditNote) are issued by a supplier for the purpose of recording credit.

Before using this endpoint, you must have [retrieved data for the company](https://docs.codat.io/sync-for-payables-api#/operations/refresh-company-data).
    

### Example Usage

```typescript
import { CodatSyncPayables } from "@codat/sync-for-payables";
import { ListBillCreditNotesResponse } from "@codat/sync-for-payables/dist/sdk/models/operations";

const sdk = new CodatSyncPayables({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.billCreditNotes.list({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  orderBy: "-modifiedDate",
  page: 1,
  pageSize: 100,
  query: "libero",
}).then((res: ListBillCreditNotesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.ListBillCreditNotesRequest](../../models/operations/listbillcreditnotesrequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `retries`                                                                                      | [utils.RetryConfig](../../models/utils/retryconfig.md)                                         | :heavy_minus_sign:                                                                             | Configuration to override the default retry behavior of the client.                            |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.ListBillCreditNotesResponse](../../models/operations/listbillcreditnotesresponse.md)>**


## update

The *Update bill credit note* endpoint updates an existing [bill credit note](https://docs.codat.io/sync-for-payables-api#/schemas/BillCreditNote) for a given company's connection.

[Bill credit notes](https://docs.codat.io/sync-for-payables-api#/schemas/BillCreditNote) are issued by a supplier for the purpose of recording credit.

**Integration-specific behaviour**

Required data may vary by integration. To see what data to post, first call [Get create/update bill credit note model](https://docs.codat.io/sync-for-payables-api#/operations/get-create-update-billCreditNotes-model).

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=billCreditNotes) for integrations that support creating a bill credit note.


### Example Usage

```typescript
import { CodatSyncPayables } from "@codat/sync-for-payables";
import { UpdateBillCreditNoteResponse } from "@codat/sync-for-payables/dist/sdk/models/operations";
import { BillCreditNoteStatus, BilledToType } from "@codat/sync-for-payables/dist/sdk/models/shared";

const sdk = new CodatSyncPayables({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.billCreditNotes.update({
  billCreditNote: {
    allocatedOnDate: "2022-10-23T00:00:00.000Z",
    billCreditNoteNumber: "91fe2a83-e161-4c21-929d-c5c10c4b07e5",
    currency: "USD",
    currencyRate: 5546.03,
    discountPercentage: 0,
    id: "1509398f-98e2-436d-8a5d-c042e0c74ffc",
    issueDate: "2022-10-23T00:00:00.000Z",
    lineItems: [
      {
        accountRef: {
          id: "70e1084c-b067-42d1-ad87-9eeb9665b85e",
          name: "Mr. Jonathon Swaniawski",
        },
        description: "fuga",
        discountAmount: 9195.08,
        discountPercentage: 340.7,
        itemRef: {
          id: "be2d7822-59e3-4ea4-b519-7f92443da7ce",
          name: "Phyllis Quitzon",
        },
        quantity: 3262.69,
        subTotal: 8095.94,
        taxAmount: 3165.42,
        taxRateRef: {
          effectiveTaxRate: 2040.72,
          id: "7c6454ef-b0b3-4489-ac3c-a5acfbe2fd57",
          name: "Viola Hane",
        },
        totalAmount: 5678.46,
        tracking: {
          categoryRefs: [
            {
              id: "9177deac-646e-4cb5-b340-9e3eb1e5a2b1",
              name: "Ms. Kelley Rogahn",
            },
          ],
          customerRef: {
            companyName: "veritatis",
            id: "16db9954-5fc9-45fa-8897-0e189dbb30fc",
          },
          isBilledTo: BilledToType.Customer,
          isRebilledTo: BilledToType.Unknown,
          projectRef: {
            id: "3ea055b1-97cd-444e-af52-d82d3513bb6f",
            name: "Mattie Raynor",
          },
        },
        trackingCategoryRefs: [
          {
            id: "bcdb35ff-2e4b-4275-b7a8-cd9e7319c177",
            name: "Leon Collier",
          },
          {
            id: "77b114ee-b52f-4f78-9fc3-7814d4c98e0c",
            name: "Candice Rath",
          },
        ],
        unitAmount: 9222.99,
      },
    ],
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "2022-10-23T00:00:00.000Z",
    note: "Bill Credit Note with 1 line items, totaling 805.78",
    paymentAllocations: [
      {
        allocation: {
          allocatedOnDate: "2022-10-23T00:00:00.000Z",
          currency: "EUR",
          currencyRate: 6293.77,
          totalAmount: 8339.82,
        },
        payment: {
          accountRef: {
            id: "636c6005-03d8-4bb3-9180-f739ae9e057e",
            name: "Johnnie Baumbach",
          },
          currency: "GBP",
          currencyRate: 5200.81,
          id: "10331f39-81d4-4c70-8b60-7f3c93c73b9d",
          note: "officia",
          paidOnDate: "2022-10-23T00:00:00.000Z",
          reference: "tenetur",
          totalAmount: 1339.49,
        },
      },
      {
        allocation: {
          allocatedOnDate: "2022-10-23T00:00:00.000Z",
          currency: "EUR",
          currencyRate: 8483.46,
          totalAmount: 6707.62,
        },
        payment: {
          accountRef: {
            id: "7e23f225-7411-4faf-8b75-44e472e80285",
            name: "Marguerite Hansen",
          },
          currency: "GBP",
          currencyRate: 2667.88,
          id: "63a7d575-f140-40e7-a4ad-7334ec1b781b",
          note: "amet",
          paidOnDate: "2022-10-23T00:00:00.000Z",
          reference: "fuga",
          totalAmount: 53.1,
        },
      },
    ],
    remainingCredit: 0,
    sourceModifiedDate: "2022-10-23T00:00:00.000Z",
    status: BillCreditNoteStatus.Paid,
    subTotal: 805.78,
    supplementalData: {
      content: {
        "quos": {
          "repellendus": "veritatis",
          "quae": "eaque",
          "saepe": "delectus",
        },
      },
    },
    supplierRef: {
      id: "ada200ef-0422-4eb2-964c-f9ab8366c723",
      supplierName: "reiciendis",
    },
    totalAmount: 805.78,
    totalDiscount: 0,
    totalTaxAmount: 0,
    withholdingTax: [
      {
        amount: 8611.23,
        name: "Mrs. Luther Torp",
      },
      {
        amount: 9248.4,
        name: "Kyle Leffler",
      },
      {
        amount: 7868.6,
        name: "Dr. Shari Roob Sr.",
      },
      {
        amount: 3178.98,
        name: "Ian Auer",
      },
    ],
  },
  billCreditNoteId: "a",
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  forceUpdate: false,
  timeoutInMinutes: 615058,
}).then((res: UpdateBillCreditNoteResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.UpdateBillCreditNoteRequest](../../models/operations/updatebillcreditnoterequest.md) | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `retries`                                                                                        | [utils.RetryConfig](../../models/utils/retryconfig.md)                                           | :heavy_minus_sign:                                                                               | Configuration to override the default retry behavior of the client.                              |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.UpdateBillCreditNoteResponse](../../models/operations/updatebillcreditnoteresponse.md)>**

