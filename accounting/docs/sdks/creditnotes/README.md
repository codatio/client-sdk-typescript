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
    additionalTaxAmount: 6319.04,
    additionalTaxPercentage: 8377.39,
    allocatedOnDate: "2022-10-23T00:00:00.000Z",
    creditNoteNumber: "ad",
    currency: "USD",
    currencyRate: 3831.96,
    customerRef: {
      companyName: "reiciendis",
      id: "df1ad837-ae80-4c1c-99c9-5ba998678fa3",
    },
    discountPercentage: 9409.51,
    id: "696991af-388c-4e03-a144-48c7977a0ef2",
    issueDate: "2022-10-23T00:00:00.000Z",
    lineItems: [
      {
        accountRef: {
          id: "36028efe-ef93-4415-aed7-e253f4c157de",
          name: "Ms. Ernesto King DVM",
        },
        description: "incidunt",
        discountAmount: 2930.23,
        discountPercentage: 3626.93,
        isDirectIncome: false,
        itemRef: {
          id: "accf667a-af9b-4bad-985f-e431d6bf5c83",
          name: "Emilio Ratke",
        },
        quantity: 7992.36,
        subTotal: 1330.76,
        taxAmount: 538.69,
        taxRateRef: {
          effectiveTaxRate: 7734.55,
          id: "b67fc4b4-25e9-49e6-a34c-9f7b79dfeb77",
          name: "Tommy Schmidt",
        },
        totalAmount: 8736.81,
        tracking: {
          categoryRefs: [
            {
              id: "baf91e50-6ef8-490a-94b4-75f16f56d385",
              name: "Earl Schoen",
            },
            {
              id: "c631b99e-26ce-4d8f-9fdb-9410f63bbf81",
              name: "Kay Frami",
            },
          ],
          customerRef: {
            companyName: "aperiam",
            id: "1afdd788-6241-489e-b448-73f5033f19db",
          },
          isBilledTo: BilledToType1.Project,
          isRebilledTo: BilledToType1.Unknown,
          projectRef: {
            id: "25ce4152-eab9-4cd7-a522-4a6a0e123b78",
            name: "Tamara Terry",
          },
        },
        trackingCategoryRefs: [
          {
            id: "e1f67f3c-4cce-44b6-9769-6ff3c5747501",
            name: "Stacy Kovacek",
          },
          {
            id: "4f51f8b0-84c3-4197-a193-a245467f9487",
            name: "Rachael Corkery",
          },
          {
            id: "cc497223-3e66-4bd8-be5d-00b979ef2038",
            name: "Mrs. Gladys Collins",
          },
        ],
        unitAmount: 155.63,
      },
      {
        accountRef: {
          id: "ccc10964-0031-43b3-a504-4f65fe72dc40",
          name: "Miss Constance Shanahan",
        },
        description: "adipisci",
        discountAmount: 9504.86,
        discountPercentage: 2527.17,
        isDirectIncome: false,
        itemRef: {
          id: "08efc15c-eb4d-46e1-aae0-f75aedf2acab",
          name: "Tracey Rodriguez",
        },
        quantity: 912.7,
        subTotal: 7863.19,
        taxAmount: 6004.71,
        taxRateRef: {
          effectiveTaxRate: 1535.13,
          id: "6ddb5894-61e7-4421-8be6-d9502f0ea930",
          name: "Hector Mayer",
        },
        totalAmount: 6813.31,
        tracking: {
          categoryRefs: [
            {
              id: "2f72f885-0090-4491-9608-207888ec6618",
              name: "Latoya West",
            },
            {
              id: "659eb40e-c16f-4af7-9b0b-532a4da37cba",
              name: "Tommie Gutkowski",
            },
            {
              id: "2c4842c9-b2ad-432d-afe8-1a88f4444573",
              name: "Alonzo Schmidt",
            },
            {
              id: "7353f63c-8209-4379-aa69-cd5fbcf79da1",
              name: "Blake Kuhic",
            },
          ],
          customerRef: {
            companyName: "eos",
            id: "bf95894e-6861-4adb-95f9-e5d751c9fe8f",
          },
          isBilledTo: BilledToType1.NotApplicable,
          isRebilledTo: BilledToType1.NotApplicable,
          projectRef: {
            id: "02bfdc34-5084-41f1-b644-56379f3fb27e",
            name: "Stephanie Yundt",
          },
        },
        trackingCategoryRefs: [
          {
            id: "657b36fc-6b9f-4587-8e52-5c67641a8312",
            name: "Jerome Berge",
          },
        ],
        unitAmount: 7303.7,
      },
    ],
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "2022-10-23T00:00:00.000Z",
    note: "cumque",
    paymentAllocations: [
      {
        allocation: {
          allocatedOnDate: "2022-10-23T00:00:00.000Z",
          currency: "EUR",
          currencyRate: 7678.8,
          totalAmount: 7149.33,
        },
        payment: {
          accountRef: {
            id: "423abcdc-91fa-4abd-988e-71f6c48252d7",
            name: "Delores Bosco",
          },
          currency: "EUR",
          currencyRate: 8719.69,
          id: "074009ef-8d29-4de1-9d70-97b5da08c57f",
          note: "id",
          paidOnDate: "2022-10-23T00:00:00.000Z",
          reference: "cumque",
          totalAmount: 4846.96,
        },
      },
    ],
    remainingCredit: 5395.02,
    sourceModifiedDate: "2022-10-23T00:00:00.000Z",
    status: CreditNoteStatus.Unknown,
    subTotal: 991.6,
    supplementalData: {
      content: {
        "accusamus": {
          "excepturi": "harum",
        },
        "laborum": {
          "repudiandae": "minus",
          "officia": "laboriosam",
          "illo": "cupiditate",
          "veritatis": "aliquam",
        },
      },
    },
    totalAmount: 5682.31,
    totalDiscount: 5410.46,
    totalTaxAmount: 1166.65,
    withholdingTax: [
      {
        amount: 428.84,
        name: "Sam Gerlach",
      },
      {
        amount: 5497.1,
        name: "Erick Bernhard DVM",
      },
    ],
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  timeoutInMinutes: 997047,
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
  creditNoteId: "voluptatem",
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
  query: "dolor",
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
    additionalTaxAmount: 7194.5,
    additionalTaxPercentage: 3125.63,
    allocatedOnDate: "2022-10-23T00:00:00.000Z",
    creditNoteNumber: "neque",
    currency: "USD",
    currencyRate: 9281.02,
    customerRef: {
      companyName: "numquam",
      id: "aa868555-9667-432a-a5dc-b6682cb70f8c",
    },
    discountPercentage: 9497.96,
    id: "d5fb6e91-b9a9-4f74-846e-2c3309db0536",
    issueDate: "2022-10-23T00:00:00.000Z",
    lineItems: [
      {
        accountRef: {
          id: "e75ca006-f539-42c1-9a25-a8bf92f97428",
          name: "Al Mills",
        },
        description: "hic",
        discountAmount: 5458.54,
        discountPercentage: 7433.13,
        isDirectIncome: false,
        itemRef: {
          id: "f8221125-359d-4983-87f7-a79cd72cd248",
          name: "Krystal Pagac IV",
        },
        quantity: 1794.33,
        subTotal: 6090.79,
        taxAmount: 9701.08,
        taxRateRef: {
          effectiveTaxRate: 1847.74,
          id: "ac41ef57-25f1-4169-ac1e-41d8a23c23e3",
          name: "Kristie Daugherty",
        },
        totalAmount: 6505.38,
        tracking: {
          categoryRefs: [
            {
              id: "a197f6de-9221-451f-a171-2099853e9f54",
              name: "Meredith Langosh",
            },
            {
              id: "439ee224-4604-443b-8154-188c2f56e85d",
              name: "Jessie Larkin",
            },
          ],
          customerRef: {
            companyName: "officiis",
            id: "abd617c3-b0d5-41a4-8bf0-1bad8706d460",
          },
          isBilledTo: BilledToType1.NotApplicable,
          isRebilledTo: BilledToType1.Unknown,
          projectRef: {
            id: "bfbdc41f-f5d4-4e2a-a4fb-5cb35d17638f",
            name: "Delia Schuppe",
          },
        },
        trackingCategoryRefs: [
          {
            id: "359ecc5c-b860-4f8c-9580-ba73810e4fe4",
            name: "Megan Kling",
          },
          {
            id: "7cd3b1dd-3bbc-4e24-bb76-84eff50126d7",
            name: "Vicky Wolf",
          },
          {
            id: "d0eb74b8-4219-453b-84bd-3c43159d33e5",
            name: "Gordon Ernser Jr.",
          },
        ],
        unitAmount: 1167.42,
      },
      {
        accountRef: {
          id: "139863aa-41e6-4c31-8c2f-1fcb51c9a41f",
          name: "Rudy Waters",
        },
        description: "quidem",
        discountAmount: 8383.74,
        discountPercentage: 4379.79,
        isDirectIncome: false,
        itemRef: {
          id: "95ee65e0-76cc-47ab-b616-ea5c71641934",
          name: "Tracy Bahringer",
        },
        quantity: 8851.03,
        subTotal: 252.1,
        taxAmount: 5776.72,
        taxRateRef: {
          effectiveTaxRate: 8573.88,
          id: "19d2fc2f-9e2e-4105-944b-935d237a72f9",
          name: "Mattie Gutkowski",
        },
        totalAmount: 3849.39,
        tracking: {
          categoryRefs: [
            {
              id: "ed4aecb7-537c-4d92-a2c9-ff57491aabfa",
              name: "Eula Kuhic DVM",
            },
            {
              id: "0ca4d456-ef10-431e-a899-f0c2001e22cd",
              name: "June Schmeler III",
            },
            {
              id: "84a184d7-6d97-41fc-820c-65b037bb8e0c",
              name: "Byron MacGyver V",
            },
          ],
          customerRef: {
            companyName: "molestiae",
            id: "e4de04af-28c5-4ddd-b46a-a1cfd6d828da",
          },
          isBilledTo: BilledToType1.Unknown,
          isRebilledTo: BilledToType1.Unknown,
          projectRef: {
            id: "31911296-4664-45c1-981f-29042f569b7a",
            name: "Randal Altenwerth",
          },
        },
        trackingCategoryRefs: [
          {
            id: "216cbe07-1bc1-463e-a79a-3b084da99257",
            name: "Gary Gorczany",
          },
        ],
        unitAmount: 572.07,
      },
      {
        accountRef: {
          id: "847a742d-8449-46cb-9eec-f6b99bc63562",
          name: "Jonathon Zboncak",
        },
        description: "enim",
        discountAmount: 3686.58,
        discountPercentage: 7835.08,
        isDirectIncome: false,
        itemRef: {
          id: "294c060b-06a1-4287-b64e-ef6d0c6d6ed9",
          name: "Arnold Dooley",
        },
        quantity: 4337.98,
        subTotal: 2479.27,
        taxAmount: 2855.44,
        taxRateRef: {
          effectiveTaxRate: 3419.34,
          id: "71509a8e-870d-43c5-a1f9-c242c7b66a1f",
          name: "Michelle Schmeler",
        },
        totalAmount: 8150.46,
        tracking: {
          categoryRefs: [
            {
              id: "5b671989-0f42-4a4b-b438-d85b260591d7",
              name: "Geraldine Von",
            },
            {
              id: "2059c9c3-f567-4e0e-a527-65b1d62fcdac",
              name: "Mr. Joe Wisozk",
            },
            {
              id: "16ce2239-e8f2-45cd-8d19-d959f439e392",
              name: "Gertrude Runte",
            },
            {
              id: "95f7aa2b-2411-4369-9d1e-6698fcc45962",
              name: "Minnie Schneider",
            },
          ],
          customerRef: {
            companyName: "quam",
            id: "76763342-5403-48bf-b597-1e9819055738",
          },
          isBilledTo: BilledToType1.NotApplicable,
          isRebilledTo: BilledToType1.Project,
          projectRef: {
            id: "edbac7fd-a395-494d-a6bc-2ae480632b99",
            name: "Hazel Renner",
          },
        },
        trackingCategoryRefs: [
          {
            id: "22063698-2855-43cb-9000-6bef4921ec20",
            name: "Robin Rempel",
          },
          {
            id: "9366ac8e-e0f2-4bf1-9588-d40d03f3deba",
            name: "Faye Kreiger",
          },
          {
            id: "3e90bc40-df86-48fd-9240-5cb331d492f4",
            name: "Douglas Denesik",
          },
        ],
        unitAmount: 6941.48,
      },
    ],
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "2022-10-23T00:00:00.000Z",
    note: "saepe",
    paymentAllocations: [
      {
        allocation: {
          allocatedOnDate: "2022-10-23T00:00:00.000Z",
          currency: "EUR",
          currencyRate: 1087.18,
          totalAmount: 9623.97,
        },
        payment: {
          accountRef: {
            id: "8217978d-0acc-4a77-aeb7-b7021a52046b",
            name: "Michele Waelchi",
          },
          currency: "EUR",
          currencyRate: 7063.51,
          id: "0e67e094-fdfe-4d55-80ef-53a34a1b8fe9",
          note: "natus",
          paidOnDate: "2022-10-23T00:00:00.000Z",
          reference: "dolorem",
          totalAmount: 1243.81,
        },
      },
    ],
    remainingCredit: 6824.3,
    sourceModifiedDate: "2022-10-23T00:00:00.000Z",
    status: CreditNoteStatus.Void,
    subTotal: 442.64,
    supplementalData: {
      content: {
        "fugiat": {
          "quis": "fuga",
          "eveniet": "consequuntur",
          "illum": "delectus",
        },
        "rerum": {
          "perferendis": "maiores",
          "harum": "ratione",
        },
      },
    },
    totalAmount: 5618.25,
    totalDiscount: 4837.74,
    totalTaxAmount: 2521.83,
    withholdingTax: [
      {
        amount: 5768.7,
        name: "Desiree Ferry",
      },
    ],
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  creditNoteId: "quis",
  forceUpdate: false,
  timeoutInMinutes: 431131,
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

