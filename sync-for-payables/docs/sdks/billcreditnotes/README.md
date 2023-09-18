# BillCreditNotes

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
    currencyRate: 3834.41,
    discountPercentage: 0,
    id: "1509398f-98e2-436d-8a5d-c042e0c74ffc",
    issueDate: "2022-10-23T00:00:00.000Z",
    lineItems: [
      {
        accountRef: {
          id: "cc8796ed-151a-405d-bc2d-df7cc78ca1ba",
          name: "Wayne Lind",
        },
        description: "totam",
        discountAmount: 1059.07,
        discountPercentage: 4146.62,
        itemRef: {
          id: "742cb739-2059-4293-96fe-a7596eb10faa",
          name: "Ernest Ebert",
        },
        quantity: 7506.86,
        subTotal: 3154.28,
        taxAmount: 6078.31,
        taxRateRef: {
          effectiveTaxRate: 3637.11,
          id: "5907aff1-a3a2-4fa9-8677-39251aa52c3f",
          name: "Mr. Alberta Schuster",
        },
        totalAmount: 8379.45,
        tracking: {
          categoryRefs: [
            {
              id: "a1ffe78f-097b-4007-8f15-471b5e6e13b9",
              name: "Ervin Gleason",
            },
          ],
          customerRef: {
            companyName: "voluptates",
            id: "1e91e450-ad2a-4bd4-8269-802d502a94bb",
          },
          isBilledTo: BilledToType.NotApplicable,
          isRebilledTo: BilledToType.Project,
          projectRef: {
            id: "63c969e9-a3ef-4a77-9fb1-4cd66ae395ef",
            name: "Rene Reinger",
          },
        },
        trackingCategoryRefs: [
          {
            id: "8f3a6699-7074-4ba4-869b-6e2141959890",
            name: "Abel O'Hara",
          },
        ],
        unitAmount: 2212.62,
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
          currency: "USD",
          currencyRate: 972.6,
          totalAmount: 4358.65,
        },
        payment: {
          accountRef: {
            id: "fe4c8b71-1e5b-47fd-aed0-28921cddc692",
            name: "Donna Bernhard",
          },
          currency: "USD",
          currencyRate: 4535.43,
          id: "6b0d5f0d-30c5-4fbb-a587-053202c73d5f",
          note: "recusandae",
          paidOnDate: "2022-10-23T00:00:00.000Z",
          reference: "facilis",
          totalAmount: 5966.56,
        },
      },
    ],
    remainingCredit: 0,
    sourceModifiedDate: "2022-10-23T00:00:00.000Z",
    status: BillCreditNoteStatus.Paid,
    subTotal: 805.78,
    supplementalData: {
      content: {
        "porro": {
          "consequuntur": "blanditiis",
        },
      },
    },
    supplierRef: {
      id: "909b3fe4-9a8d-49cb-b486-33323f9b77f3",
      supplierName: "dolorum",
    },
    totalAmount: 805.78,
    totalDiscount: 0,
    totalTaxAmount: 0,
    withholdingTax: [
      {
        amount: 2543.56,
        name: "Melissa Bednar",
      },
    ],
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  timeoutInMinutes: 311796,
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
  billCreditNoteId: "accusamus",
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
  query: "quidem",
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
    currencyRate: 6176.58,
    discountPercentage: 0,
    id: "1509398f-98e2-436d-8a5d-c042e0c74ffc",
    issueDate: "2022-10-23T00:00:00.000Z",
    lineItems: [
      {
        accountRef: {
          id: "80d1ba77-a89e-4bf7-b7ae-4203ce5e6a95",
          name: "Dr. Jimmie Murphy",
        },
        description: "tempora",
        discountAmount: 4254.51,
        discountPercentage: 7980.47,
        itemRef: {
          id: "e2af7a73-cf3b-4e45-bf87-0b326b5a7342",
          name: "Simon Stracke MD",
        },
        quantity: 5173.79,
        subTotal: 2768.94,
        taxAmount: 1320.68,
        taxRateRef: {
          effectiveTaxRate: 1749.09,
          id: "bb679d23-2271-45bf-8cbb-1e31b8b90f34",
          name: "Mr. Josephine Pagac V",
        },
        totalAmount: 9295.3,
        tracking: {
          categoryRefs: [
            {
              id: "0adcf4b9-2187-49fc-a953-f73ef7fbc7ab",
              name: "Allan Greenholt",
            },
          ],
          customerRef: {
            companyName: "sequi",
            id: "9c0f5d2c-ff7c-470a-8562-6d436813f16d",
          },
          isBilledTo: BilledToType.Customer,
          isRebilledTo: BilledToType.Project,
          projectRef: {
            id: "5fce6c55-6146-4c3e-a50f-b008c42e141a",
            name: "Clark Franecki",
          },
        },
        trackingCategoryRefs: [
          {
            id: "c8dd6b14-4290-4747-8778-a7bd466d28c1",
            name: "Amelia Predovic",
          },
        ],
        unitAmount: 8472.76,
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
          currencyRate: 1783.67,
          totalAmount: 3738.13,
        },
        payment: {
          accountRef: {
            id: "1904e523-c7e0-4bc7-978e-4796f2a70c68",
            name: "Eugene Leuschke",
          },
          currency: "USD",
          currencyRate: 2775.96,
          id: "82562f22-2e98-417e-a17c-be61e6b7b95b",
          note: "eligendi",
          paidOnDate: "2022-10-23T00:00:00.000Z",
          reference: "culpa",
          totalAmount: 7313.98,
        },
      },
    ],
    remainingCredit: 0,
    sourceModifiedDate: "2022-10-23T00:00:00.000Z",
    status: BillCreditNoteStatus.Paid,
    subTotal: 805.78,
    supplementalData: {
      content: {
        "cumque": {
          "consequuntur": "consequatur",
        },
      },
    },
    supplierRef: {
      id: "c4f3789f-d871-4f99-9d2e-fd121aa6f1e6",
      supplierName: "in",
    },
    totalAmount: 805.78,
    totalDiscount: 0,
    totalTaxAmount: 0,
    withholdingTax: [
      {
        amount: 2586.84,
        name: "Mrs. Gilberto Roberts",
      },
    ],
  },
  billCreditNoteId: "dicta",
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  forceUpdate: false,
  timeoutInMinutes: 355369,
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

