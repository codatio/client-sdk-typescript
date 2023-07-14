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

The *Create bill credit note* endpoint creates a new [bill credit note](https://docs.codat.io/accounting-api#/schemas/BillCreditNote) for a given company's connection.

[Bill credit notes](https://docs.codat.io/accounting-api#/schemas/BillCreditNote) are issued by a supplier for the purpose of recording credit.

**Integration-specific behaviour**

Required data may vary by integration. To see what data to post, first call [Get create/update bill credit note model](https://docs.codat.io/accounting-api#/operations/get-create-update-billCreditNotes-model).

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=billCreditNotes) for integrations that support creating an account.


### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { CreateBillCreditNoteResponse } from "@codat/accounting/dist/sdk/models/operations";
import { BillCreditNoteStatus, BilledToType } from "@codat/accounting/dist/sdk/models/shared";

const sdk = new CodatAccounting({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.billCreditNotes.create({
  billCreditNote: {
    allocatedOnDate: "2022-10-23T00:00:00.000Z",
    billCreditNoteNumber: "91fe2a83-e161-4c21-929d-c5c10c4b07e5",
    currency: "GBP",
    currencyRate: 8289.4,
    discountPercentage: 0,
    id: "1509398f-98e2-436d-8a5d-c042e0c74ffc",
    issueDate: "2022-10-23T00:00:00.000Z",
    lineItems: [
      {
        accountRef: {
          id: "2a94bb4f-63c9-469e-9a3e-fa77dfb14cd6",
          name: "Kayla Thompson",
        },
        description: "enim",
        discountAmount: 8817.36,
        discountPercentage: 9654.17,
        itemRef: {
          id: "b9ba88f3-a669-4970-b4ba-4469b6e21419",
          name: "Ramona Lueilwitz MD",
        },
        quantity: 9689.62,
        subTotal: 6521.03,
        taxAmount: 3209.97,
        taxRateRef: {
          effectiveTaxRate: 4314.18,
          id: "3e2516fe-4c8b-4711-a5b7-fd2ed028921c",
          name: "Ervin Schoen",
        },
        totalAmount: 1399.72,
        tracking: {
          categoryRefs: [
            {
              id: "01fb576b-0d5f-40d3-8c5f-bb2587053202",
              name: "Darryl Fadel",
            },
            {
              id: "fe9b90c2-8909-4b3f-a49a-8d9cbf486333",
              name: "Tiffany Welch",
            },
          ],
          customerRef: {
            companyName: "voluptate",
            id: "7f3a4100-674e-4bf6-9280-d1ba77a89ebf",
          },
          isBilledTo: BilledToType.NotApplicable,
          isRebilledTo: BilledToType.Unknown,
          projectRef: {
            id: "7ae4203c-e5e6-4a95-98a0-d446ce2af7a7",
            name: "Rosalie White",
          },
        },
        trackingCategoryRefs: [
          {
            id: "453f870b-326b-45a7-b429-cdb1a8422bb6",
            name: "Felicia Spencer",
          },
          {
            id: "22715bf0-cbb1-4e31-b8b9-0f3443a1108e",
            name: "Jodi Skiles",
          },
          {
            id: "4b921879-fce9-453f-b3ef-7fbc7abd74dd",
            name: "Dr. Faye Rutherford",
          },
          {
            id: "d2cff7c7-0a45-4626-9436-813f16d9f5fc",
            name: "Nathaniel Ryan",
          },
        ],
        unitAmount: 3994.99,
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
          currencyRate: 2322.34,
          totalAmount: 9262.13,
        },
        payment: {
          accountRef: {
            id: "250fb008-c42e-4141-aac3-66c8dd6b1442",
            name: "Jose Kreiger",
          },
          currency: "GBP",
          currencyRate: 4585.15,
          id: "78a7bd46-6d28-4c10-ab3c-dca4251904e5",
          note: "aspernatur",
          paidOnDate: "2022-10-23T00:00:00.000Z",
          reference: "quo",
          totalAmount: 4598.56,
        },
      },
      {
        allocation: {
          allocatedOnDate: "2022-10-23T00:00:00.000Z",
          currency: "GBP",
          currencyRate: 7151.79,
          totalAmount: 7997.96,
        },
        payment: {
          accountRef: {
            id: "7178e479-6f2a-470c-a882-82aa482562f2",
            name: "Rose Turner",
          },
          currency: "GBP",
          currencyRate: 4569.11,
          id: "ee17cbe6-1e6b-47b9-9bc0-ab3c20c4f378",
          note: "provident",
          paidOnDate: "2022-10-23T00:00:00.000Z",
          reference: "nulla",
          totalAmount: 5578.11,
        },
      },
    ],
    remainingCredit: 0,
    sourceModifiedDate: "2022-10-23T00:00:00.000Z",
    status: BillCreditNoteStatus.Paid,
    subTotal: 805.78,
    supplementalData: {
      content: {
        "a": {
          "sint": "pariatur",
          "possimus": "quia",
          "eveniet": "asperiores",
        },
      },
    },
    supplierRef: {
      id: "d121aa6f-1e67-44bd-b04f-15756082d68e",
      supplierName: "dolorum",
    },
    totalAmount: 805.78,
    totalDiscount: 0,
    totalTaxAmount: 0,
    withholdingTax: [
      {
        amount: 6091.78,
        name: "Ms. Roger Strosin II",
      },
    ],
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  timeoutInMinutes: 86532,
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

The *Get bill credit note* endpoint returns a single bill credit note for a given billCreditNoteId.

[Bill credit notes](https://docs.codat.io/accounting-api#/schemas/BillCreditNote) are issued by a supplier for the purpose of recording credit.

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=billCreditNotes) for integrations that support getting a specific bill credit note.

Before using this endpoint, you must have [retrieved data for the company](https://docs.codat.io/codat-api#/operations/refresh-company-data).


### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { GetBillCreditNoteResponse } from "@codat/accounting/dist/sdk/models/operations";

const sdk = new CodatAccounting({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.billCreditNotes.get({
  billCreditNoteId: "consectetur",
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

The *Get create/update bill credit note model* endpoint returns the expected data for the request payload when creating and updating a [bill credit note](https://docs.codat.io/accounting-api#/schemas/BillCreditNote) for a given company and integration.

[Bill credit notes](https://docs.codat.io/accounting-api#/schemas/BillCreditNote) are issued by a supplier for the purpose of recording credit.

**Integration-specific behaviour**

See the *response examples* for integration-specific indicative models.

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=billCreditNotes) for integrations that support creating and updating a bill credit note.


### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { GetCreateUpdateBillCreditNotesModelResponse } from "@codat/accounting/dist/sdk/models/operations";

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

### Parameters

| Parameter                                                                                                                      | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                      | [operations.GetCreateUpdateBillCreditNotesModelRequest](../../models/operations/getcreateupdatebillcreditnotesmodelrequest.md) | :heavy_check_mark:                                                                                                             | The request object to use for the request.                                                                                     |
| `retries`                                                                                                                      | [utils.RetryConfig](../../models/utils/retryconfig.md)                                                                         | :heavy_minus_sign:                                                                                                             | Configuration to override the default retry behavior of the client.                                                            |
| `config`                                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                   | :heavy_minus_sign:                                                                                                             | Available config options for making requests.                                                                                  |


### Response

**Promise<[operations.GetCreateUpdateBillCreditNotesModelResponse](../../models/operations/getcreateupdatebillcreditnotesmodelresponse.md)>**


## list

The *List bill credit notes* endpoint returns a list of [bill credit notes](https://docs.codat.io/accounting-api#/schemas/BillCreditNote) for a given company's connection.

[Bill credit notes](https://docs.codat.io/accounting-api#/schemas/BillCreditNote) are issued by a supplier for the purpose of recording credit.

Before using this endpoint, you must have [retrieved data for the company](https://docs.codat.io/codat-api#/operations/refresh-company-data).
    

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { ListBillCreditNotesResponse } from "@codat/accounting/dist/sdk/models/operations";

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
  query: "adipisci",
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

The *Update bill credit note* endpoint updates an existing [bill credit note](https://docs.codat.io/accounting-api#/schemas/BillCreditNote) for a given company's connection.

[Bill credit notes](https://docs.codat.io/accounting-api#/schemas/BillCreditNote) are issued by a supplier for the purpose of recording credit.

**Integration-specific behaviour**

Required data may vary by integration. To see what data to post, first call [Get create/update bill credit note model](https://docs.codat.io/accounting-api#/operations/get-create-update-billCreditNotes-model).

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=billCreditNotes) for integrations that support creating an account.


### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { UpdateBillCreditNoteResponse } from "@codat/accounting/dist/sdk/models/operations";
import { BillCreditNoteStatus, BilledToType } from "@codat/accounting/dist/sdk/models/shared";

const sdk = new CodatAccounting({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.billCreditNotes.update({
  billCreditNote: {
    allocatedOnDate: "2022-10-23T00:00:00.000Z",
    billCreditNoteNumber: "91fe2a83-e161-4c21-929d-c5c10c4b07e5",
    currency: "EUR",
    currencyRate: 330.74,
    discountPercentage: 0,
    id: "1509398f-98e2-436d-8a5d-c042e0c74ffc",
    issueDate: "2022-10-23T00:00:00.000Z",
    lineItems: [
      {
        accountRef: {
          id: "86a18403-94c2-4607-9f93-f5f0642dac7a",
          name: "Vernon Bergnaum",
        },
        description: "quod",
        discountAmount: 2883.98,
        discountPercentage: 704.47,
        itemRef: {
          id: "3aa63aae-8d67-4864-9bb6-75fd5e60b375",
          name: "Carroll Gerhold",
        },
        quantity: 9689.72,
        subTotal: 6971.42,
        taxAmount: 9049.49,
        taxRateRef: {
          effectiveTaxRate: 8970.71,
          id: "41f33317-fe35-4b60-ab1e-a426555ba3c2",
          name: "Harvey Gulgowski",
        },
        totalAmount: 8391.89,
        tracking: {
          categoryRefs: [
            {
              id: "3b88f3a8-d8f5-4c0b-af2f-b7b194a276b2",
              name: "Geneva Bradtke",
            },
            {
              id: "e1f08f42-94e3-4698-b447-f603e8b445e8",
              name: "Della Muller",
            },
          ],
          customerRef: {
            companyName: "recusandae",
            id: "fd20e457-e185-48b6-a89f-be3a5aa8e482",
          },
          isBilledTo: BilledToType.NotApplicable,
          isRebilledTo: BilledToType.Project,
          projectRef: {
            id: "0ab40750-88e5-4186-a065-e904f3b1194b",
            name: "Cameron Reilly",
          },
        },
        trackingCategoryRefs: [
          {
            id: "3a79f9df-e0ab-47da-8a50-ce187f86bc17",
            name: "Angelina Jenkins",
          },
        ],
        unitAmount: 8872.65,
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
          currencyRate: 1334.61,
          totalAmount: 4044.25,
        },
        payment: {
          accountRef: {
            id: "f8d986e8-81ea-4d4f-8e10-12563f94e29e",
            name: "Arnold Ferry",
          },
          currency: "GBP",
          currencyRate: 1458.7,
          id: "a57a15be-3e06-4080-be2b-6e3ab8845f05",
          note: "perspiciatis",
          paidOnDate: "2022-10-23T00:00:00.000Z",
          reference: "mollitia",
          totalAmount: 3782.45,
        },
      },
      {
        allocation: {
          allocatedOnDate: "2022-10-23T00:00:00.000Z",
          currency: "EUR",
          currencyRate: 9702.22,
          totalAmount: 1746.58,
        },
        payment: {
          accountRef: {
            id: "a54a31e9-4764-4a3e-865e-7956f9251a5a",
            name: "Rufus Okuneva",
          },
          currency: "GBP",
          currencyRate: 9992.78,
          id: "f57bfaad-4f9e-4fc1-b451-2c1032648dc2",
          note: "sapiente",
          paidOnDate: "2022-10-23T00:00:00.000Z",
          reference: "dicta",
          totalAmount: 3251.18,
        },
      },
      {
        allocation: {
          allocatedOnDate: "2022-10-23T00:00:00.000Z",
          currency: "USD",
          currencyRate: 5896.95,
          totalAmount: 9364.69,
        },
        payment: {
          accountRef: {
            id: "bfd0e9fe-6c63-42ca-baed-0117996312fd",
            name: "Jeffrey Goldner",
          },
          currency: "GBP",
          currencyRate: 4797.54,
          id: "78ff61d0-1747-4636-8a15-db6a660659a1",
          note: "error",
          paidOnDate: "2022-10-23T00:00:00.000Z",
          reference: "voluptates",
          totalAmount: 6534.21,
        },
      },
      {
        allocation: {
          allocatedOnDate: "2022-10-23T00:00:00.000Z",
          currency: "EUR",
          currencyRate: 3240.83,
          totalAmount: 5369.23,
        },
        payment: {
          accountRef: {
            id: "51d6c645-b08b-4618-91ba-a0fe1ade008e",
            name: "Miranda Ledner",
          },
          currency: "EUR",
          currencyRate: 1905.67,
          id: "50d8cdb5-a341-4814-b010-421813d5208e",
          note: "impedit",
          paidOnDate: "2022-10-23T00:00:00.000Z",
          reference: "esse",
          totalAmount: 8972.77,
        },
      },
    ],
    remainingCredit: 0,
    sourceModifiedDate: "2022-10-23T00:00:00.000Z",
    status: BillCreditNoteStatus.Paid,
    subTotal: 805.78,
    supplementalData: {
      content: {
        "nesciunt": {
          "eum": "vel",
          "voluptatum": "magnam",
          "exercitationem": "ab",
        },
        "porro": {
          "nobis": "laboriosam",
          "recusandae": "consequuntur",
        },
      },
    },
    supplierRef: {
      id: "05e16dea-b3fe-4c95-b8a6-4584273a8418",
      supplierName: "fugiat",
    },
    totalAmount: 805.78,
    totalDiscount: 0,
    totalTaxAmount: 0,
    withholdingTax: [
      {
        amount: 3955.44,
        name: "Edith Beahan",
      },
    ],
  },
  billCreditNoteId: "soluta",
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  forceUpdate: false,
  timeoutInMinutes: 3860,
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

