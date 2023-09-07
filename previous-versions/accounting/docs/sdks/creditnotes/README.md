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
import { BilledToType1, CreditNoteStatus } from "@codat/accounting/dist/sdk/models/shared";

const sdk = new CodatAccounting({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.creditNotes.create({
  creditNote: {
    additionalTaxAmount: 1363.57,
    additionalTaxPercentage: 7239.42,
    allocatedOnDate: "2022-10-23T00:00:00.000Z",
    creditNoteNumber: "quas",
    currency: "USD",
    currencyRate: 9222.99,
    customerRef: {
      companyName: "rerum",
      id: "75dad636-c600-4503-98bb-31180f739ae9",
    },
    discountPercentage: 9202.72,
    id: "057eb809-e281-4033-9f39-81d4c700b607",
    issueDate: "2022-10-23T00:00:00.000Z",
    lineItems: [
      {
        accountRef: {
          id: "3c93c73b-9da3-4f2c-ada7-e23f2257411f",
          name: "Toby Friesen",
        },
        description: "exercitationem",
        discountAmount: 2883,
        discountPercentage: 2543.82,
        isDirectIncome: false,
        itemRef: {
          id: "e472e802-857a-45b4-8463-a7d575f1400e",
          name: "Gertrude Gerhold",
        },
        quantity: 4523.99,
        subTotal: 2327.72,
        taxAmount: 2006.37,
        taxRateRef: {
          effectiveTaxRate: 3106.29,
          id: "ec1b781b-36a0-4808-8d10-0efada200ef0",
          name: "Phyllis Denesik",
        },
        totalAmount: 1267.27,
        tracking: {
          categoryRefs: [
            {
              id: "164cf9ab-8366-4c72-bffd-a9e06bee4825",
              name: "Willie Wiza PhD",
            },
          ],
          customerRef: {
            companyName: "architecto",
            id: "15c80bff-9185-444e-842d-efcce8f19777",
          },
          isBilledTo: BilledToType1.NotApplicable,
          isRebilledTo: BilledToType1.Unknown,
          projectRef: {
            id: "e63562a7-b408-4f05-a3d4-8fdaf313a1f5",
            name: "Woodrow Mitchell III",
          },
          recordRef: {
            dataType: "accountTransaction",
            id: "c0b36f25-ea94-44f3-b756-c11f6c37a512",
          },
        },
        trackingCategoryRefs: [
          {
            id: "6243835b-bc05-4a23-a45c-efc5fde10a0c",
            name: "Randy Carter",
          },
        ],
        unitAmount: 8927.08,
      },
    ],
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "2022-10-23T00:00:00.000Z",
    note: "architecto",
    paymentAllocations: [
      {
        allocation: {
          allocatedOnDate: "2022-10-23T00:00:00.000Z",
          currency: "GBP",
          currencyRate: 828.76,
          totalAmount: 5905.85,
        },
        payment: {
          accountRef: {
            id: "c6dc5e34-7627-499b-bbbe-6949fb2bb4ec",
            name: "Bert Kassulke",
          },
          currency: "EUR",
          currencyRate: 3674.75,
          id: "db3adebd-5dae-4a4c-906a-8aa94c02644c",
          note: "hic",
          paidOnDate: "2022-10-23T00:00:00.000Z",
          reference: "officiis",
          totalAmount: 6036.5,
        },
      },
    ],
    remainingCredit: 8603.11,
    sourceModifiedDate: "2022-10-23T00:00:00.000Z",
    status: CreditNoteStatus.Paid,
    subTotal: 2986.13,
    supplementalData: {
      content: {
        "nostrum": {
          "esse": "corrupti",
        },
      },
    },
    totalAmount: 6847.99,
    totalDiscount: 8152.25,
    totalTaxAmount: 7736.59,
    withholdingTax: [
      {
        amount: 986.1,
        name: "Mr. Forrest Howe",
      },
    ],
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  timeoutInMinutes: 901008,
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
  creditNoteId: "maxime",
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
  query: "consequatur",
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
    additionalTaxAmount: 510.07,
    additionalTaxPercentage: 1023.9,
    allocatedOnDate: "2022-10-23T00:00:00.000Z",
    creditNoteNumber: "porro",
    currency: "USD",
    currencyRate: 608.92,
    customerRef: {
      companyName: "magni",
      id: "e2ec09ff-8f0f-4816-bf34-77c13e902c14",
    },
    discountPercentage: 1165.58,
    id: "25b0960a-6681-451a-872a-f923c5949f83",
    issueDate: "2022-10-23T00:00:00.000Z",
    lineItems: [
      {
        accountRef: {
          id: "350cf876-ffb9-401c-aecb-b4e243cf789f",
          name: "Lynn Wuckert",
        },
        description: "deserunt",
        discountAmount: 3590.97,
        discountPercentage: 2465.77,
        isDirectIncome: false,
        itemRef: {
          id: "e5ae6e0a-c184-4c2b-9c24-7c88373a40e1",
          name: "Micheal Cassin",
        },
        quantity: 1397.45,
        subTotal: 9368.45,
        taxAmount: 3305.96,
        taxRateRef: {
          effectiveTaxRate: 3731.06,
          id: "055756f5-d56d-40bd-8af2-dfe13db4f62c",
          name: "Lorenzo Flatley",
        },
        totalAmount: 6211.4,
        tracking: {
          categoryRefs: [
            {
              id: "41aebc0b-80a6-4924-93b2-ecfcc8f89501",
              name: "Melba Heaney",
            },
          ],
          customerRef: {
            companyName: "neque",
            id: "d6fa1804-e54c-482f-968a-363c8873e484",
          },
          isBilledTo: BilledToType1.Unknown,
          isRebilledTo: BilledToType1.NotApplicable,
          projectRef: {
            id: "0b1f6b8c-a275-4a60-a04c-495cc699171b",
            name: "Miss Joyce Runolfsson",
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

