# CreditNotes

## Overview

Credit notes

### Available Operations

* [create](#create) - Create credit note
* [get](#get) - Get credit note
* [getCreateUpdateModel](#getcreateupdatemodel) - Get create/update credit note model
* [list](#list) - List credit notes
* [update](#update) - Update creditNote

## create

The *Create credit note* endpoint creates a new [credit note](https://docs.codat.io/accounting-api#/schemas/CreditNote) for a given company's connection.

[Credit notes](https://docs.codat.io/accounting-api#/schemas/CreditNote) are issued to a customer to indicate debt, typically with reference to a previously issued invoice and/or purchase.

**Integration-specific behaviour**

Required data may vary by integration. To see what data to post, first call [Get create/update credit note model](https://docs.codat.io/accounting-api#/operations/get-create-update-creditNotes-model).

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=creditNotes) for integrations that support creating an account.


### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { CreateCreditNoteResponse } from "@codat/accounting/dist/sdk/models/operations";
import { BilledToType1, CreditNoteStatus } from "@codat/accounting/dist/sdk/models/shared";

const sdk = new CodatAccounting({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.creditNotes.create({
  creditNote: {
    additionalTaxAmount: 7239.42,
    additionalTaxPercentage: 7119.91,
    allocatedOnDate: "2022-10-23T00:00:00.000Z",
    creditNoteNumber: "provident",
    currency: "EUR",
    currencyRate: 7000.45,
    customerRef: {
      companyName: "dignissimos",
      id: "5dad636c-6005-403d-8bb3-1180f739ae9e",
    },
    discountPercentage: 100.63,
    id: "57eb809e-2810-4331-b398-1d4c700b607f",
    issueDate: "2022-10-23T00:00:00.000Z",
    lineItems: [
      {
        accountRef: {
          id: "c93c73b9-da3f-42ce-9a7e-23f2257411fa",
          name: "Kyle Reichel",
        },
        description: "labore",
        discountAmount: 2543.82,
        discountPercentage: 9211.93,
        isDirectIncome: false,
        itemRef: {
          id: "472e8028-57a5-4b40-863a-7d575f1400e7",
          name: "Carrie Pagac",
        },
        quantity: 2327.72,
        subTotal: 2006.37,
        taxAmount: 3106.29,
        taxRateRef: {
          effectiveTaxRate: 9294.76,
          id: "c1b781b3-6a08-4088-9100-efada200ef04",
          name: "Phyllis Tremblay Sr.",
        },
        totalAmount: 3979.88,
        tracking: {
          categoryRefs: [
            {
              id: "4cf9ab83-66c7-423f-bda9-e06bee4825c1",
              name: "Colin Berge Sr.",
            },
          ],
          customerRef: {
            companyName: "enim",
            id: "c80bff91-8544-4ec4-adef-cce8f1977773",
          },
          isBilledTo: BilledToType1.Project,
          isRebilledTo: BilledToType1.NotApplicable,
          projectRef: {
            id: "3562a7b4-08f0-45e3-948f-daf313a1f5fd",
            name: "Troy Champlin",
          },
          recordRef: {
            dataType: "transfer",
            id: "0b36f25e-a944-4f3b-b56c-11f6c37a5126",
          },
        },
        trackingCategoryRefs: [
          {
            id: "243835bb-c05a-423a-85ce-fc5fde10a0ce",
            name: "Mildred Kautzer",
          },
        ],
        unitAmount: 3548.21,
      },
    ],
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "2022-10-23T00:00:00.000Z",
    note: "accusantium",
    paymentAllocations: [
      {
        allocation: {
          allocatedOnDate: "2022-10-23T00:00:00.000Z",
          currency: "GBP",
          currencyRate: 5905.85,
          totalAmount: 7658.33,
        },
        payment: {
          accountRef: {
            id: "6dc5e347-6279-49bf-bbe6-949fb2bb4eca",
            name: "Ben Satterfield",
          },
          currency: "USD",
          currencyRate: 8487.22,
          id: "b3adebd5-daea-44c5-86a8-aa94c02644cf",
          note: "nostrum",
          paidOnDate: "2022-10-23T00:00:00.000Z",
          reference: "unde",
          totalAmount: 8603.11,
        },
      },
    ],
    remainingCredit: 6213.93,
    sourceModifiedDate: "2022-10-23T00:00:00.000Z",
    status: CreditNoteStatus.Draft,
    subTotal: 3442.89,
    supplementalData: {
      content: {
        "esse": {
          "corrupti": "fuga",
        },
      },
    },
    totalAmount: 8152.25,
    totalDiscount: 7736.59,
    totalTaxAmount: 986.1,
    withholdingTax: [
      {
        amount: 6472.18,
        name: "Dr. Rick Bauch",
      },
    ],
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  timeoutInMinutes: 807564,
}).then((res: CreateCreditNoteResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.CreateCreditNoteRequest](../../models/operations/createcreditnoterequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `retries`                                                                                | [utils.RetryConfig](../../models/utils/retryconfig.md)                                   | :heavy_minus_sign:                                                                       | Configuration to override the default retry behavior of the client.                      |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.CreateCreditNoteResponse](../../models/operations/createcreditnoteresponse.md)>**


## get

The *Get credit note* endpoint returns a single credit note for a given creditNoteId.

[Credit notes](https://docs.codat.io/accounting-api#/schemas/CreditNote) are issued to a customer to indicate debt, typically with reference to a previously issued invoice and/or purchase.

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=creditNotes) for integrations that support getting a specific credit note.

Before using this endpoint, you must have [retrieved data for the company](https://docs.codat.io/codat-api#/operations/refresh-company-data).


### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { GetCreditNoteResponse } from "@codat/accounting/dist/sdk/models/operations";

const sdk = new CodatAccounting({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.creditNotes.get({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  creditNoteId: "consequatur",
}).then((res: GetCreditNoteResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.GetCreditNoteRequest](../../models/operations/getcreditnoterequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `retries`                                                                          | [utils.RetryConfig](../../models/utils/retryconfig.md)                             | :heavy_minus_sign:                                                                 | Configuration to override the default retry behavior of the client.                |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.GetCreditNoteResponse](../../models/operations/getcreditnoteresponse.md)>**


## getCreateUpdateModel

﻿The *Get create/update credit note model* endpoint returns the expected data for the request payload when creating and updating a [credit note](https://docs.codat.io/accounting-api#/schemas/CreditNote) for a given company and integration.

[Credit notes](https://docs.codat.io/accounting-api#/schemas/CreditNote) are issued to a customer to indicate debt, typically with reference to a previously issued invoice and/or purchase.

**Integration-specific behaviour**

See the *response examples* for integration-specific indicative models.

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=creditNotes) for integrations that support creating and updating a credit note.


### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { GetCreateUpdateCreditNotesModelResponse } from "@codat/accounting/dist/sdk/models/operations";

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

### Parameters

| Parameter                                                                                                              | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                              | [operations.GetCreateUpdateCreditNotesModelRequest](../../models/operations/getcreateupdatecreditnotesmodelrequest.md) | :heavy_check_mark:                                                                                                     | The request object to use for the request.                                                                             |
| `retries`                                                                                                              | [utils.RetryConfig](../../models/utils/retryconfig.md)                                                                 | :heavy_minus_sign:                                                                                                     | Configuration to override the default retry behavior of the client.                                                    |
| `config`                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                           | :heavy_minus_sign:                                                                                                     | Available config options for making requests.                                                                          |


### Response

**Promise<[operations.GetCreateUpdateCreditNotesModelResponse](../../models/operations/getcreateupdatecreditnotesmodelresponse.md)>**


## list

The *List credit notes* endpoint returns a list of [credit notes](https://docs.codat.io/accounting-api#/schemas/CreditNote) for a given company's connection.

[Credit notes](https://docs.codat.io/accounting-api#/schemas/CreditNote) are issued to a customer to indicate debt, typically with reference to a previously issued invoice and/or purchase.

Before using this endpoint, you must have [retrieved data for the company](https://docs.codat.io/codat-api#/operations/refresh-company-data).
    

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { ListCreditNotesResponse } from "@codat/accounting/dist/sdk/models/operations";

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
  query: "eaque",
}).then((res: ListCreditNotesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.ListCreditNotesRequest](../../models/operations/listcreditnotesrequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `retries`                                                                              | [utils.RetryConfig](../../models/utils/retryconfig.md)                                 | :heavy_minus_sign:                                                                     | Configuration to override the default retry behavior of the client.                    |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.ListCreditNotesResponse](../../models/operations/listcreditnotesresponse.md)>**


## update

The *Update credit note* endpoint updates an existing [credit note](https://docs.codat.io/accounting-api#/schemas/CreditNote) for a given company's connection.

[Credit notes](https://docs.codat.io/accounting-api#/schemas/CreditNote) are issued to a customer to indicate debt, typically with reference to a previously issued invoice and/or purchase.

**Integration-specific behaviour**

Required data may vary by integration. To see what data to post, first call [Get create/update credit note model](https://docs.codat.io/accounting-api#/operations/get-create-update-creditNotes-model).

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=creditNotes) for integrations that support creating an account.


### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { UpdateCreditNoteResponse } from "@codat/accounting/dist/sdk/models/operations";
import { BilledToType1, CreditNoteStatus } from "@codat/accounting/dist/sdk/models/shared";

const sdk = new CodatAccounting({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.creditNotes.update({
  creditNote: {
    additionalTaxAmount: 1023.9,
    additionalTaxPercentage: 6271.61,
    allocatedOnDate: "2022-10-23T00:00:00.000Z",
    creditNoteNumber: "blanditiis",
    currency: "GBP",
    currencyRate: 1698.19,
    customerRef: {
      companyName: "officiis",
      id: "2ec09ff8-f0f8-416f-b347-7c13e902c141",
    },
    discountPercentage: 1391.33,
    id: "5b0960a6-6815-41a4-b2af-923c5949f83f",
    issueDate: "2022-10-23T00:00:00.000Z",
    lineItems: [
      {
        accountRef: {
          id: "50cf876f-fb90-41c6-acbb-4e243cf789ff",
          name: "Emilio Waters",
        },
        description: "corporis",
        discountAmount: 2465.77,
        discountPercentage: 8877.01,
        isDirectIncome: false,
        itemRef: {
          id: "5ae6e0ac-184c-42b9-8247-c88373a40e19",
          name: "Ashley Wunsch",
        },
        quantity: 9368.45,
        subTotal: 3305.96,
        taxAmount: 3731.06,
        taxRateRef: {
          effectiveTaxRate: 510.53,
          id: "55756f5d-56d0-4bd0-af2d-fe13db4f62cb",
          name: "Jacob Wehner",
        },
        totalAmount: 2524.73,
        tracking: {
          categoryRefs: [
            {
              id: "1aebc0b8-0a69-424d-bb2e-cfcc8f895010",
              name: "Gordon Strosin",
            },
          ],
          customerRef: {
            companyName: "pariatur",
            id: "6fa1804e-54c8-42f1-a8a3-63c8873e4843",
          },
          isBilledTo: BilledToType1.NotApplicable,
          isRebilledTo: BilledToType1.Unknown,
          projectRef: {
            id: "b1f6b8ca-275a-460a-84c4-95cc699171b5",
            name: "Blanca Carroll",
          },
          recordRef: {
            dataType: "accountTransaction",
            id: "1cf4b888-ebdf-4c4c-8ca9-9bc7fc0b2dce",
          },
        },
        trackingCategoryRefs: [
          {
            id: "10873e42-b006-4d67-8878-ba8581a58208",
            name: "Lloyd Grant",
          },
        ],
        unitAmount: 9657.35,
      },
    ],
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "2022-10-23T00:00:00.000Z",
    note: "natus",
    paymentAllocations: [
      {
        allocation: {
          allocatedOnDate: "2022-10-23T00:00:00.000Z",
          currency: "USD",
          currencyRate: 3125.11,
          totalAmount: 9853.79,
        },
        payment: {
          accountRef: {
            id: "2eac5565-d307-4cfe-a812-06e2813fa4a4",
            name: "Leticia Gerlach PhD",
          },
          currency: "GBP",
          currencyRate: 9998.54,
          id: "2132af03-102d-4514-b4cc-6f18bf9621a6",
          note: "animi",
          paidOnDate: "2022-10-23T00:00:00.000Z",
          reference: "tenetur",
          totalAmount: 4934.07,
        },
      },
    ],
    remainingCredit: 4578.35,
    sourceModifiedDate: "2022-10-23T00:00:00.000Z",
    status: CreditNoteStatus.Paid,
    subTotal: 4610.5,
    supplementalData: {
      content: {
        "eveniet": {
          "earum": "velit",
        },
      },
    },
    totalAmount: 8847.65,
    totalDiscount: 2633.46,
    totalTaxAmount: 7019.78,
    withholdingTax: [
      {
        amount: 9301.11,
        name: "Brittany Cole",
      },
    ],
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  creditNoteId: "quis",
  forceUpdate: false,
  timeoutInMinutes: 704402,
}).then((res: UpdateCreditNoteResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.UpdateCreditNoteRequest](../../models/operations/updatecreditnoterequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `retries`                                                                                | [utils.RetryConfig](../../models/utils/retryconfig.md)                                   | :heavy_minus_sign:                                                                       | Configuration to override the default retry behavior of the client.                      |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.UpdateCreditNoteResponse](../../models/operations/updatecreditnoteresponse.md)>**

