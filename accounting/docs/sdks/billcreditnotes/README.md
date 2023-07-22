# billCreditNotes

## Overview

Bill credit notes

### Available Operations

* [create](#create) - Create bill credit note
* [get](#get) - Get bill credit note
* [getCreateUpdateModel](#getcreateupdatemodel) - Get create/update bill credit note model
* [list](#list) - List bill credit notes
* [update](#update) - Update bill credit note
* [uploadAttachment](#uploadattachment) - Push invoice attachment

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
    currency: "EUR",
    currencyRate: 9654.17,
    discountPercentage: 0,
    id: "1509398f-98e2-436d-8a5d-c042e0c74ffc",
    issueDate: "2022-10-23T00:00:00.000Z",
    lineItems: [
      {
        accountRef: {
          id: "ba88f3a6-6997-4074-ba44-69b6e2141959",
          name: "Kirk Bartoletti",
        },
        description: "mollitia",
        discountAmount: 3209.97,
        discountPercentage: 4314.18,
        itemRef: {
          id: "3e2516fe-4c8b-4711-a5b7-fd2ed028921c",
          name: "Ervin Schoen",
        },
        quantity: 1399.72,
        subTotal: 4071.83,
        taxAmount: 332.22,
        taxRateRef: {
          effectiveTaxRate: 691.67,
          id: "fb576b0d-5f0d-430c-9fbb-2587053202c7",
          name: "Eula Hegmann",
        },
        totalAmount: 6082.53,
        tracking: {
          categoryRefs: [
            {
              id: "90c28909-b3fe-449a-8d9c-bf48633323f9",
              name: "Adrian Kuhn",
            },
            {
              id: "a4100674-ebf6-4928-8d1b-a77a89ebf737",
              name: "Elbert Gislason I",
            },
            {
              id: "ce5e6a95-d8a0-4d44-ace2-af7a73cf3be4",
              name: "Florence Will",
            },
          ],
          customerRef: {
            companyName: "sit",
            id: "b326b5a7-3429-4cdb-9a84-22bb679d2322",
          },
          isBilledTo: BilledToType.NotApplicable,
          isRebilledTo: BilledToType.Unknown,
          projectRef: {
            id: "5bf0cbb1-e31b-48b9-8f34-43a1108e0adc",
            name: "Alexander Prosacco",
          },
        },
        trackingCategoryRefs: [
          {
            id: "879fce95-3f73-4ef7-bbc7-abd74dd39c0f",
            name: "Freda Cormier",
          },
        ],
        unitAmount: 9850.33,
      },
      {
        accountRef: {
          id: "7c70a456-26d4-4368-93f1-6d9f5fce6c55",
          name: "Stephanie Gutkowski",
        },
        description: "consectetur",
        discountAmount: 9262.13,
        discountPercentage: 1324.87,
        itemRef: {
          id: "50fb008c-42e1-441a-ac36-6c8dd6b14429",
          name: "Minnie Gutkowski",
        },
        quantity: 4585.15,
        subTotal: 4561.41,
        taxAmount: 5245.93,
        taxRateRef: {
          effectiveTaxRate: 6832.82,
          id: "7bd466d2-8c10-4ab3-8dca-4251904e523c",
          name: "Sophie Bayer",
        },
        totalAmount: 4908.19,
        tracking: {
          categoryRefs: [
            {
              id: "78e4796f-2a70-4c68-8282-aa482562f222",
              name: "Ms. Marion Little",
            },
          ],
          customerRef: {
            companyName: "accusamus",
            id: "17cbe61e-6b7b-495b-80ab-3c20c4f3789f",
          },
          isBilledTo: BilledToType.Project,
          isRebilledTo: BilledToType.Customer,
          projectRef: {
            id: "71f99dd2-efd1-421a-a6f1-e674bdb04f15",
            name: "Ms. Dana Huel",
          },
        },
        trackingCategoryRefs: [
          {
            id: "68ea19f1-d170-4513-b9d0-8086a1840394",
            name: "Ms. Benjamin Hirthe DVM",
          },
          {
            id: "93f5f064-2dac-47af-915c-c413aa63aae8",
            name: "Chester Kuphal",
          },
          {
            id: "4dbb675f-d5e6-40b3-b5ed-4f6fbee41f33",
            name: "Heather Kuhn",
          },
          {
            id: "35b60eb1-ea42-4655-9ba3-c28744ed53b8",
            name: "Moses Douglas",
          },
        ],
        unitAmount: 8672.9,
      },
      {
        accountRef: {
          id: "8f5c0b2f-2fb7-4b19-8a27-6b26916fe1f0",
          name: "Emilio Goodwin",
        },
        description: "eius",
        discountAmount: 8967.62,
        discountPercentage: 2155.29,
        itemRef: {
          id: "698f447f-603e-48b4-85e8-0ca55efd20e4",
          name: "Ms. Pearl Towne",
        },
        quantity: 5106.29,
        subTotal: 7400.98,
        taxAmount: 3868.27,
        taxRateRef: {
          effectiveTaxRate: 6805.15,
          id: "89fbe3a5-aa8e-4482-8d0a-b4075088e518",
          name: "Jane Bailey",
        },
        totalAmount: 9061.72,
        tracking: {
          categoryRefs: [
            {
              id: "04f3b119-4b8a-4bf6-83a7-9f9dfe0ab7da",
              name: "Miss Hubert Hartmann",
            },
            {
              id: "187f86bc-173d-4689-aee9-526f8d986e88",
              name: "Delia Parisian",
            },
            {
              id: "f0e10125-63f9-44e2-9e97-3e922a57a15b",
              name: "Ms. Melvin Thiel IV",
            },
          ],
          customerRef: {
            companyName: "quae",
            id: "7e2b6e3a-b884-45f0-997a-60ff2a54a31e",
          },
          isBilledTo: BilledToType.Customer,
          isRebilledTo: BilledToType.NotApplicable,
          projectRef: {
            id: "764a3e86-5e79-456f-9251-a5a9da660ff5",
            name: "Antoinette Wehner",
          },
        },
        trackingCategoryRefs: [
          {
            id: "4f9efc1b-4512-4c10-b264-8dc2f615199e",
            name: "Dr. Terrell Stanton",
          },
          {
            id: "fe6c632c-a3ae-4d01-9799-6312fde04771",
            name: "Tamara Lang",
          },
          {
            id: "61d01747-6360-4a15-9b6a-660659a1adea",
            name: "Wm Hane",
          },
          {
            id: "1d6c645b-08b6-4189-9baa-0fe1ade008e6",
            name: "Ian Schinner",
          },
        ],
        unitAmount: 1905.67,
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
          currencyRate: 7706.75,
          totalAmount: 8427.77,
        },
        payment: {
          accountRef: {
            id: "b5a34181-4301-4042-9813-d5208ece7e25",
            name: "Lula Kemmer",
          },
          currency: "GBP",
          currencyRate: 3494.4,
          id: "1c6c6e20-5e16-4dea-b3fe-c9578a645842",
          note: "ducimus",
          paidOnDate: "2022-10-23T00:00:00.000Z",
          reference: "fuga",
          totalAmount: 5140.54,
        },
      },
    ],
    remainingCredit: 0,
    sourceModifiedDate: "2022-10-23T00:00:00.000Z",
    status: BillCreditNoteStatus.Paid,
    subTotal: 805.78,
    supplementalData: {
      content: {
        "rem": {
          "dicta": "nisi",
          "consequuntur": "consectetur",
          "aperiam": "cupiditate",
          "reiciendis": "soluta",
        },
      },
    },
    supplierRef: {
      id: "0929921a-efb9-4f58-84d8-6e68e4be0560",
      supplierName: "quasi",
    },
    totalAmount: 805.78,
    totalDiscount: 0,
    totalTaxAmount: 0,
    withholdingTax: [
      {
        amount: 9785.48,
        name: "Bobbie Stokes",
      },
    ],
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  timeoutInMinutes: 364463,
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
  billCreditNoteId: "reprehenderit",
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
  query: "est",
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
    currency: "USD",
    currencyRate: 8806.79,
    discountPercentage: 0,
    id: "1509398f-98e2-436d-8a5d-c042e0c74ffc",
    issueDate: "2022-10-23T00:00:00.000Z",
    lineItems: [
      {
        accountRef: {
          id: "ef66ef1c-aa33-483c-abeb-477373c8d72f",
          name: "Dr. Megan Spinka",
        },
        description: "architecto",
        discountAmount: 9754.25,
        discountPercentage: 1563.83,
        itemRef: {
          id: "c4310661-e963-449e-9cf9-e06e3a437000",
          name: "Clay Jast",
        },
        quantity: 7051.48,
        subTotal: 8093.65,
        taxAmount: 5960.65,
        taxRateRef: {
          effectiveTaxRate: 7090.36,
          id: "8f759eac-55a9-4741-9311-352965bb8a72",
          name: "Mr. Anne Kautzer",
        },
        totalAmount: 2082.53,
        tracking: {
          categoryRefs: [
            {
              id: "e139dbc2-259b-41ab-9a8c-070e1084cb06",
              name: "Miss Wanda Shanahan",
            },
            {
              id: "879eeb96-65b8-45ef-bd02-bae0be2d7822",
              name: "Natasha Wehner",
            },
          ],
          customerRef: {
            companyName: "similique",
            id: "4b5197f9-2443-4da7-8e52-b895c537c645",
          },
          isBilledTo: BilledToType.NotApplicable,
          isRebilledTo: BilledToType.Project,
          projectRef: {
            id: "fb0b3489-6c3c-4a5a-8fbe-2fd570757792",
            name: "Peter Kuphal",
          },
        },
        trackingCategoryRefs: [
          {
            id: "ac646ecb-5734-409e-beb1-e5a2b12eb07f",
            name: "Joyce Howe",
          },
          {
            id: "99545fc9-5fa8-4897-8e18-9dbb30fcb33e",
            name: "Anthony Hayes",
          },
          {
            id: "197cd44e-2f52-4d82-9351-3bb6f48b656b",
            name: "Carroll Purdy",
          },
          {
            id: "ff2e4b27-537a-48cd-9e73-19c177d525f7",
            name: "Mrs. Pam Bins",
          },
        ],
        unitAmount: 9025.81,
      },
      {
        accountRef: {
          id: "b52ff785-fc37-4814-94c9-8e0c2bb89eb7",
          name: "Cristina Murphy",
        },
        description: "dolorem",
        discountAmount: 4138.01,
        discountPercentage: 7712.26,
        itemRef: {
          id: "600503d8-bb31-4180-b739-ae9e057eb809",
          name: "Mr. Craig Leannon",
        },
        quantity: 2244.13,
        subTotal: 1242.89,
        taxAmount: 9536.76,
        taxRateRef: {
          effectiveTaxRate: 2232.91,
          id: "981d4c70-0b60-47f3-893c-73b9da3f2ced",
          name: "Cody Terry",
        },
        totalAmount: 9958.16,
        tracking: {
          categoryRefs: [
            {
              id: "257411fa-f4b7-4544-a472-e802857a5b40",
              name: "Natalie Dooley",
            },
          ],
          customerRef: {
            companyName: "fugiat",
            id: "575f1400-e764-4ad7-b34e-c1b781b36a08",
          },
          isBilledTo: BilledToType.Unknown,
          isRebilledTo: BilledToType.Customer,
          projectRef: {
            id: "8d100efa-da20-40ef-8422-eb2164cf9ab8",
            name: "Beth Jenkins",
          },
        },
        trackingCategoryRefs: [
          {
            id: "3ffda9e0-6bee-4482-9c1f-c0e115c80bff",
            name: "Keith Lueilwitz",
          },
        ],
        unitAmount: 2662.84,
      },
      {
        accountRef: {
          id: "ec42defc-ce8f-4197-b773-e63562a7b408",
          name: "Steven Harris",
        },
        description: "facere",
        discountAmount: 3071.73,
        discountPercentage: 5525.81,
        itemRef: {
          id: "fdaf313a-1f5f-4d94-a59c-0b36f25ea944",
          name: "Travis Rempel",
        },
        quantity: 4031.47,
        subTotal: 7917.62,
        taxAmount: 688.8,
        taxRateRef: {
          effectiveTaxRate: 1081.65,
          id: "f6c37a51-2624-4383-9bbc-05a23a45cefc",
          name: "Ora Shields Jr.",
        },
        totalAmount: 6339.82,
        tracking: {
          categoryRefs: [
            {
              id: "ce2169e5-1001-49c6-9c5e-34762799bfbb",
              name: "Brent Mills",
            },
          ],
          customerRef: {
            companyName: "hic",
            id: "b2bb4eca-e6c3-4d5d-b3ad-ebd5daea4c50",
          },
          isBilledTo: BilledToType.NotApplicable,
          isRebilledTo: BilledToType.Customer,
          projectRef: {
            id: "8aa94c02-644c-4f5e-9d9a-4578adc1ac60",
            name: "Ernestine Turcotte Jr.",
          },
        },
        trackingCategoryRefs: [
          {
            id: "ac802e2e-c09f-4f8f-8f81-6ff3477c13e9",
            name: "Mrs. Phyllis Russel Sr.",
          },
        ],
        unitAmount: 3576.39,
      },
      {
        accountRef: {
          id: "b0960a66-8151-4a47-aaf9-23c5949f83f3",
          name: "Angela Schaefer",
        },
        description: "molestiae",
        discountAmount: 3956.34,
        discountPercentage: 9890.33,
        itemRef: {
          id: "fb901c6e-cbb4-4e24-bcf7-89ffafeda53e",
          name: "Brandi Turner",
        },
        quantity: 357.42,
        subTotal: 6378.4,
        taxAmount: 7701.28,
        taxRateRef: {
          effectiveTaxRate: 978.96,
          id: "84c2b9c2-47c8-4837-ba40-e1942f32e550",
          name: "Lynn Kovacek",
        },
        totalAmount: 9468.08,
        tracking: {
          categoryRefs: [
            {
              id: "d56d0bd0-af2d-4fe1-bdb4-f62cba3f8941",
              name: "Erick Pfeffer MD",
            },
            {
              id: "80a6924d-3b2e-4cfc-88f8-95010f5dd3d6",
              name: "Shaun Bergnaum I",
            },
          ],
          customerRef: {
            companyName: "voluptates",
            id: "54c82f16-8a36-43c8-873e-484380b1f6b8",
          },
          isBilledTo: BilledToType.Project,
          isRebilledTo: BilledToType.Customer,
          projectRef: {
            id: "275a60a0-4c49-45cc-a991-71b51c1bdb1c",
            name: "Leroy Ratke",
          },
        },
        trackingCategoryRefs: [
          {
            id: "ebdfc4cc-ca99-4bc7-bc0b-2dce10873e42",
            name: "Brian Bartell",
          },
          {
            id: "678878ba-8581-4a58-a08c-54fefa9c95f2",
            name: "Angelo Runolfsdottir",
          },
          {
            id: "65d307cf-ee81-4206-a281-3fa4a41c480d",
            name: "Mr. Kristie Cole",
          },
        ],
        unitAmount: 6854.67,
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
          currencyRate: 449.29,
          totalAmount: 1341.73,
        },
        payment: {
          accountRef: {
            id: "d514f4cc-6f18-4bf9-a21a-6a4f77a87ee3",
            name: "Ray Prosacco",
          },
          currency: "USD",
          currencyRate: 1316.87,
          id: "c65b3441-8e3b-4b91-88d9-75e0e8419d8f",
          note: "deleniti",
          paidOnDate: "2022-10-23T00:00:00.000Z",
          reference: "earum",
          totalAmount: 1013.74,
        },
      },
    ],
    remainingCredit: 0,
    sourceModifiedDate: "2022-10-23T00:00:00.000Z",
    status: BillCreditNoteStatus.Paid,
    subTotal: 805.78,
    supplementalData: {
      content: {
        "maiores": {
          "saepe": "consequatur",
        },
        "esse": {
          "facere": "quisquam",
          "cumque": "aliquam",
          "dolorum": "deserunt",
          "ad": "reiciendis",
        },
      },
    },
    supplierRef: {
      id: "3cabd905-a972-4e05-a728-227b2d309470",
      supplierName: "distinctio",
    },
    totalAmount: 805.78,
    totalDiscount: 0,
    totalTaxAmount: 0,
    withholdingTax: [
      {
        amount: 4630.5,
        name: "Tom Wintheiser",
      },
      {
        amount: 4826.28,
        name: "Jan Hirthe",
      },
      {
        amount: 6750.58,
        name: "Ora Okuneva",
      },
      {
        amount: 2525.67,
        name: "Preston Wyman DDS",
      },
    ],
  },
  billCreditNoteId: "sequi",
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  forceUpdate: false,
  timeoutInMinutes: 125707,
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


## uploadAttachment

---
stoplight-id: c26f5b1b19168
---

The *Upload bill credit note attachment* endpoint uploads an attachment and assigns it against a specific `billCreditNoteId`.

[Bill Credit Notes](https://docs.codat.io/accounting-api#/schemas/BillCreditNote) are issued by a supplier for the purpose of recording credit.

**Integration-specific behaviour**

For more details on supported file types by integration see [Attachments](https://docs.codat.io/accounting-api#/schemas/Attachment).

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=billCreditNotes) for integrations that support uploading a bill credit note attachment.


### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { UploadBillCreditNoteAttachmentResponse } from "@codat/accounting/dist/sdk/models/operations";

const sdk = new CodatAccounting({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.billCreditNotes.uploadAttachment({
  requestBody: {
    content: "vitae".encode(),
    requestBody: "voluptatibus",
  },
  billCreditNoteId: "doloremque",
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
}).then((res: UploadBillCreditNoteAttachmentResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                            | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                            | [operations.UploadBillCreditNoteAttachmentRequest](../../models/operations/uploadbillcreditnoteattachmentrequest.md) | :heavy_check_mark:                                                                                                   | The request object to use for the request.                                                                           |
| `retries`                                                                                                            | [utils.RetryConfig](../../models/utils/retryconfig.md)                                                               | :heavy_minus_sign:                                                                                                   | Configuration to override the default retry behavior of the client.                                                  |
| `config`                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                         | :heavy_minus_sign:                                                                                                   | Available config options for making requests.                                                                        |


### Response

**Promise<[operations.UploadBillCreditNoteAttachmentResponse](../../models/operations/uploadbillcreditnoteattachmentresponse.md)>**

