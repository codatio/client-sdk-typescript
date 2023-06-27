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

The *Create credit note* endpoint creates a new [credit note](https://docs.codat.io/accounting-api#/schemas/CreditNote) for a given company's connection.

[Credit notes](https://docs.codat.io/accounting-api#/schemas/CreditNote) are issued to a customer to indicate debt, typically with reference to a previously issued invoice and/or purchase.

**Integration-specific behaviour**

Required data may vary by integration. To see what data to post, first call [Get create/update credit note model](https://docs.codat.io/accounting-api#/operations/get-create-update-creditNotes-model).

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=creditNotes) for integrations that support creating an account.


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
    additionalTaxAmount: 5321.1,
    additionalTaxPercentage: 8172.49,
    allocatedOnDate: "2022-10-23T00:00:00.000Z",
    creditNoteNumber: "natus",
    currency: "EUR",
    currencyRate: 9143.99,
    customerRef: {
      companyName: "illo",
      id: "dd7097b5-da08-4c57-ba6c-78a216e19baf",
    },
    discountPercentage: 9226.4,
    id: "ca619149-8140-4b64-bf8a-e170ef03b5f3",
    issueDate: "2022-10-23T00:00:00.000Z",
    lineItems: [
      {
        accountRef: {
          id: "4aa86855-5966-4732-aa5d-cb6682cb70f8",
          name: "Roman Shanahan",
        },
        description: "tempore",
        discountAmount: 3888.51,
        discountPercentage: 9347.07,
        isDirectIncome: false,
        itemRef: {
          id: "91b9a9f7-4846-4e2c-b309-db0536d9e75c",
          name: "Robert Balistreri",
        },
        quantity: 3375.81,
        subTotal: 2117.56,
        taxAmount: 6091.64,
        taxRateRef: {
          effectiveTaxRate: 1500.91,
          id: "c11a25a8-bf92-4f97-828a-d9a9f8bf8221",
          name: "Lori Hammes",
        },
        totalAmount: 5929.46,
        tracking: {
          categoryRefs: [
            {
              id: "98387f7a-79cd-472c-9248-4da21729f2ac",
              name: "Amanda Tromp",
            },
            {
              id: "725f1169-ac1e-441d-8a23-c23e34f2dfa4",
              name: "Lawrence Metz",
            },
            {
              id: "6de92215-1fe1-4712-8998-53e9f543d854",
              name: "Rosa Metz",
            },
            {
              id: "22446044-3bc1-4541-88c2-f56e85da7832",
              name: "Hubert Rempel",
            },
          ],
          customerRef: {
            companyName: "et",
            id: "7c3b0d51-a44b-4f01-bad8-706d46082bfb",
          },
          isBilledTo: BilledToType1.Project,
          isRebilledTo: BilledToType1.Project,
          projectRef: {
            id: "41ff5d4e-2ae4-4fb5-8b35-d17638f1edb7",
            name: "Jeffery Hilll",
          },
        },
        trackingCategoryRefs: [
          {
            id: "c5cb860f-8cd5-480b-a738-10e4fe444729",
            name: "Erma Streich",
          },
          {
            id: "1dd3bbce-247b-4768-8eff-50126d71cffb",
            name: "David Waters",
          },
          {
            id: "4b842195-3b44-4bd3-8431-59d33e5953c0",
            name: "Cheryl Bins",
          },
          {
            id: "863aa41e-6c31-4cc2-b1fc-b51c9a41ffbe",
            name: "Forrest Powlowski",
          },
        ],
        unitAmount: 6205.2,
      },
      {
        accountRef: {
          id: "5ee65e07-6cc7-4abf-a16e-a5c71641934b",
          name: "Daniel Zemlak",
        },
        description: "sit",
        discountAmount: 5776.72,
        discountPercentage: 8573.88,
        isDirectIncome: false,
        itemRef: {
          id: "19d2fc2f-9e2e-4105-944b-935d237a72f9",
          name: "Mattie Gutkowski",
        },
        quantity: 3849.39,
        subTotal: 6596.96,
        taxAmount: 9303.06,
        taxRateRef: {
          effectiveTaxRate: 8266.83,
          id: "4aecb753-7cd9-4222-89ff-57491aabfa2e",
          name: "Agnes Boyle DDS",
        },
        totalAmount: 6645.01,
        tracking: {
          categoryRefs: [
            {
              id: "d456ef10-31e6-4899-b0c2-001e22cd55cc",
              name: "Ida MacGyver",
            },
            {
              id: "184d76d9-71fc-4820-865b-037bb8e0cc88",
              name: "Carolyn Macejkovic",
            },
          ],
          customerRef: {
            companyName: "labore",
            id: "de04af28-c5dd-4db4-aaa1-cfd6d828da01",
          },
          isBilledTo: BilledToType1.Unknown,
          isRebilledTo: BilledToType1.Unknown,
          projectRef: {
            id: "91129646-645c-41d8-9f29-042f569b7aff",
            name: "Tasha Pagac",
          },
        },
        trackingCategoryRefs: [
          {
            id: "6cbe071b-c163-4e27-9a3b-084da99257d0",
            name: "Ms. Ollie Gibson",
          },
        ],
        unitAmount: 4782.16,
      },
      {
        accountRef: {
          id: "a742d844-96cb-4dee-8f6b-99bc63562ebf",
          name: "Van Halvorson",
        },
        description: "dolores",
        discountAmount: 6102.13,
        discountPercentage: 2859.22,
        isDirectIncome: false,
        itemRef: {
          id: "c060b06a-1287-4764-aef6-d0c6d6ed9c73",
          name: "Lionel Kerluke",
        },
        quantity: 3419.34,
        subTotal: 4922.27,
        taxAmount: 768.18,
        taxRateRef: {
          effectiveTaxRate: 3613.31,
          id: "09a8e870-d3c5-4a1f-9c24-2c7b66a1f30c",
          name: "Ethel Schultz",
        },
        totalAmount: 6939.88,
        tracking: {
          categoryRefs: [
            {
              id: "719890f4-2a4b-4b43-8d85-b260591d745e",
              name: "Mrs. Sheri Cruickshank",
            },
            {
              id: "c9c3f567-e0e2-4527-a5b1-d62fcdace1f0",
              name: "Christina Bode",
            },
          ],
          customerRef: {
            companyName: "repudiandae",
            id: "2239e8f2-5cd0-4d19-9959-f439e39266cb",
          },
          isBilledTo: BilledToType1.Project,
          isRebilledTo: BilledToType1.NotApplicable,
          projectRef: {
            id: "5f7aa2b2-4113-4695-91e6-698fcc459621",
            name: "Kendra D'Amore",
          },
        },
        trackingCategoryRefs: [
          {
            id: "67633425-4038-4bfb-9971-e98190557389",
            name: "Percy Swaniawski",
          },
          {
            id: "c7fda395-94d6-46bc-aae4-80632b9954b6",
            name: "Mr. Alfonso Dibbert",
          },
        ],
        unitAmount: 2026.42,
      },
      {
        accountRef: {
          id: "69828553-cb10-4006-bef4-921ec2053b74",
          name: "Marvin Jacobson",
        },
        description: "quisquam",
        discountAmount: 5223.27,
        discountPercentage: 9109.84,
        isDirectIncome: false,
        itemRef: {
          id: "e0f2bf19-588d-440d-83f3-deba297be3e9",
          name: "Maryann Rolfson PhD",
        },
        quantity: 9843.02,
        subTotal: 5544.17,
        taxAmount: 4169.67,
        taxRateRef: {
          effectiveTaxRate: 5023.8,
          id: "fd52405c-b331-4d49-af4f-127fb0e0bf1f",
          name: "Steve Block",
        },
        totalAmount: 4940.93,
        tracking: {
          categoryRefs: [
            {
              id: "d0acca77-aeb7-4b70-a1a5-2046b64e99fb",
              name: "Gretchen Huels",
            },
            {
              id: "094fdfed-5540-4ef5-ba34-a1b8fe99731a",
              name: "Rodolfo Baumbach",
            },
            {
              id: "85ae2dfb-70fb-4387-8290-d336561eca16",
              name: "Santos Langosh",
            },
          ],
          customerRef: {
            companyName: "ad",
            id: "1bd76eee-b518-4c4d-a1fa-d35512f06d4e",
          },
          isBilledTo: BilledToType1.Unknown,
          isRebilledTo: BilledToType1.Project,
          projectRef: {
            id: "72f0f548-568a-4042-8e00-a1d6eb943464",
            name: "Cristina Beer V",
          },
        },
        trackingCategoryRefs: [
          {
            id: "fbba5cce-ff5c-4b01-be51-e528a45ac82b",
            name: "Derrick Wunsch",
          },
          {
            id: "c2caba8d-a412-47dd-997f-f4711aa1bc74",
            name: "Alberto Hyatt",
          },
        ],
        unitAmount: 7880.36,
      },
    ],
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "2022-10-23T00:00:00.000Z",
    note: "ducimus",
    paymentAllocations: [
      {
        allocation: {
          allocatedOnDate: "2022-10-23T00:00:00.000Z",
          currency: "USD",
          currencyRate: 4976.33,
          totalAmount: 7222,
        },
        payment: {
          accountRef: {
            id: "4848bd6a-6f04-441d-ac3b-808094373e06",
            name: "Lucille Hermiston",
          },
          currency: "EUR",
          currencyRate: 7001.12,
          id: "bad02f25-86bc-4f15-a558-daa95be6cd02",
          note: "in",
          paidOnDate: "2022-10-23T00:00:00.000Z",
          reference: "vel",
          totalAmount: 7736.78,
        },
      },
      {
        allocation: {
          allocatedOnDate: "2022-10-23T00:00:00.000Z",
          currency: "USD",
          currencyRate: 2817.53,
          totalAmount: 6681.55,
        },
        payment: {
          accountRef: {
            id: "a432b47e-1763-4c52-88c2-3e9802d82f0d",
            name: "Dolores Waelchi",
          },
          currency: "EUR",
          currencyRate: 5034.79,
          id: "b674ee5c-fc18-4edc-bf78-7e32e04b3d3e",
          note: "facere",
          paidOnDate: "2022-10-23T00:00:00.000Z",
          reference: "cumque",
          totalAmount: 3532.32,
        },
      },
    ],
    remainingCredit: 4271.07,
    sourceModifiedDate: "2022-10-23T00:00:00.000Z",
    status: CreditNoteStatus.Unknown,
    subTotal: 9262.25,
    supplementalData: {
      content: {
        "dolore": {
          "harum": "illum",
        },
        "dolor": {
          "iste": "earum",
          "vitae": "impedit",
          "eligendi": "veniam",
          "aperiam": "consectetur",
        },
        "repellat": {
          "quod": "nesciunt",
          "iste": "distinctio",
        },
        "cumque": {
          "alias": "deserunt",
          "vel": "qui",
          "perspiciatis": "accusantium",
          "voluptatibus": "occaecati",
        },
      },
    },
    totalAmount: 3658.63,
    totalDiscount: 4626.73,
    totalTaxAmount: 9704.91,
    withholdingTax: [
      {
        amount: 5155.49,
        name: "Virginia Littel",
      },
    ],
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  timeoutInMinutes: 822084,
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
import { BilledToType1, CreditNoteStatus } from "@codat/accounting/dist/sdk/models/shared";

const sdk = new CodatAccounting({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.creditNotes.get({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  creditNoteId: "molestiae",
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
  query: "officiis",
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
import { BilledToType1, CreditNoteStatus, DataType, PushChangeType, PushOperationStatus } from "@codat/accounting/dist/sdk/models/shared";

const sdk = new CodatAccounting({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.creditNotes.update({
  creditNote: {
    additionalTaxAmount: 9713.93,
    additionalTaxPercentage: 5288.35,
    allocatedOnDate: "2022-10-23T00:00:00.000Z",
    creditNoteNumber: "reprehenderit",
    currency: "USD",
    currencyRate: 6380.92,
    customerRef: {
      companyName: "eveniet",
      id: "03f33ca7-9fb9-4de4-832b-a26fd368ba92",
    },
    discountPercentage: 1199.03,
    id: "6bcb4158-35c7-4364-9723-133edc046bc5",
    issueDate: "2022-10-23T00:00:00.000Z",
    lineItems: [
      {
        accountRef: {
          id: "3bbca492-27c4-42c2-ac55-350495c5dbb3",
          name: "Derek Kihn DVM",
        },
        description: "tempora",
        discountAmount: 6128.36,
        discountPercentage: 5607.36,
        isDirectIncome: false,
        itemRef: {
          id: "1e8aa257-ddc1-4912-abde-64bfcc5469d4",
          name: "Diane Hayes",
        },
        quantity: 6658.07,
        subTotal: 4582.2,
        taxAmount: 6140.01,
        taxRateRef: {
          effectiveTaxRate: 4054.19,
          id: "206bef2b-0a3e-442c-9aa0-10e9aac2e913",
          name: "Erica Luettgen",
        },
        totalAmount: 1161.94,
        tracking: {
          categoryRefs: [
            {
              id: "f9f97a4b-fad2-4bf7-967c-a84ad99b41d6",
              name: "Sara Funk",
            },
            {
              id: "31870cf6-8b03-4ad4-a1bd-43d1f0cb0a00",
              name: "Carmen Weber",
            },
            {
              id: "2d9b3a70-d94f-4aa7-81c5-7d1fedc2050d",
              name: "Olga Stracke",
            },
          ],
          customerRef: {
            companyName: "quo",
            id: "e185472f-9ee6-4916-aa8b-e3444eac8b3a",
          },
          isBilledTo: BilledToType1.Unknown,
          isRebilledTo: BilledToType1.NotApplicable,
          projectRef: {
            id: "75c6c1fe-606d-407d-aa9c-87ae50c16661",
            name: "Harold Smith I",
          },
        },
        trackingCategoryRefs: [
          {
            id: "a7e8d532-13f3-4f65-8752-db764c59f0a5",
            name: "Nichole Treutel",
          },
          {
            id: "ada29ca7-9181-4c95-a716-63c530b56651",
            name: "Carmen Nicolas",
          },
        ],
        unitAmount: 2274.7,
      },
      {
        accountRef: {
          id: "8512ab25-21b9-4f2e-8724-67b8a40bc05f",
          name: "Wm Bartoletti",
        },
        description: "quis",
        discountAmount: 196.1,
        discountPercentage: 9319.91,
        isDirectIncome: false,
        itemRef: {
          id: "df22a94d-20ec-490e-a41d-1f465e85156f",
          name: "Randal Kris",
        },
        quantity: 8372.02,
        subTotal: 9459.21,
        taxAmount: 3424.58,
        taxRateRef: {
          effectiveTaxRate: 2726.64,
          id: "fdd5ea95-4339-48da-bb42-a8d63388e4d8",
          name: "Peggy Muller",
        },
        totalAmount: 3381.03,
        tracking: {
          categoryRefs: [
            {
              id: "9b18a244-fd61-4903-9dac-d38ed0dc671d",
              name: "Dr. Jamie Wintheiser",
            },
            {
              id: "af15920c-90d1-4b49-81f2-bd89c8a32639",
              name: "Donnie Hauck",
            },
            {
              id: "b6902b88-1a94-4f64-b664-a8f0af8c691d",
              name: "Carmen Crist",
            },
            {
              id: "fbaf9476-a2ae-48dc-850c-8a3512c73784",
              name: "Ms. Eduardo Effertz",
            },
          ],
          customerRef: {
            companyName: "eaque",
            id: "a00e966e-c736-4d43-9943-98c783c92398",
          },
          isBilledTo: BilledToType1.Project,
          isRebilledTo: BilledToType1.Project,
          projectRef: {
            id: "3d3ab7ca-3c5c-4a86-89a7-0cfd5d6989b7",
            name: "Betty Hirthe",
          },
        },
        trackingCategoryRefs: [
          {
            id: "077d19ea-83d4-492e-914b-8a2c1954545e",
            name: "Derrick Halvorson",
          },
        ],
        unitAmount: 7659,
      },
    ],
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "2022-10-23T00:00:00.000Z",
    note: "praesentium",
    paymentAllocations: [
      {
        allocation: {
          allocatedOnDate: "2022-10-23T00:00:00.000Z",
          currency: "EUR",
          currencyRate: 3007.59,
          totalAmount: 6029.32,
        },
        payment: {
          accountRef: {
            id: "01c7c43a-d2da-4a78-8aba-3d230edf7381",
            name: "Mrs. Maggie Breitenberg",
          },
          currency: "USD",
          currencyRate: 1641.54,
          id: "bd7ed565-0762-41c5-8f4d-7396564c20a0",
          note: "reprehenderit",
          paidOnDate: "2022-10-23T00:00:00.000Z",
          reference: "veritatis",
          totalAmount: 6283.25,
        },
      },
      {
        allocation: {
          allocatedOnDate: "2022-10-23T00:00:00.000Z",
          currency: "USD",
          currencyRate: 1166.35,
          totalAmount: 8489.26,
        },
        payment: {
          accountRef: {
            id: "24a7dbb8-f532-4d89-acf7-812cb512c878",
            name: "Monica Bashirian",
          },
          currency: "USD",
          currencyRate: 2743.68,
          id: "8f88f8f1-bf0b-4c8e-9f20-6d5d831d0081",
          note: "voluptatem",
          paidOnDate: "2022-10-23T00:00:00.000Z",
          reference: "ipsa",
          totalAmount: 9652.07,
        },
      },
    ],
    remainingCredit: 3763.41,
    sourceModifiedDate: "2022-10-23T00:00:00.000Z",
    status: CreditNoteStatus.Unknown,
    subTotal: 3777.59,
    supplementalData: {
      content: {
        "ducimus": {
          "doloribus": "ratione",
        },
        "id": {
          "quos": "dicta",
          "minus": "exercitationem",
        },
      },
    },
    totalAmount: 4741.06,
    totalDiscount: 4348.74,
    totalTaxAmount: 5007,
    withholdingTax: [
      {
        amount: 7742.94,
        name: "Clinton Hackett",
      },
      {
        amount: 334.24,
        name: "Mrs. Gerard Collins",
      },
      {
        amount: 532.16,
        name: "Mrs. Shane Armstrong",
      },
      {
        amount: 5831.69,
        name: "Darrell Yost",
      },
    ],
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  creditNoteId: "debitis",
  forceUpdate: false,
  timeoutInMinutes: 207202,
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

