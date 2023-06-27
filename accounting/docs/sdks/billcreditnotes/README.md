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
import {
  BillCreditNoteStatus,
  BilledToType,
  DataType,
  PushChangeType,
  PushOperationStatus,
} from "@codat/accounting/dist/sdk/models/shared";

const sdk = new CodatAccounting({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.billCreditNotes.create({
  billCreditNote: {
    allocatedOnDate: "2022-10-23T00:00:00.000Z",
    billCreditNoteNumber: "91fe2a83-e161-4c21-929d-c5c10c4b07e5",
    currency: "USD",
    currencyRate: 201.07,
    discountPercentage: 0,
    id: "1509398f-98e2-436d-8a5d-c042e0c74ffc",
    issueDate: "2022-10-23T00:00:00.000Z",
    lineItems: [
      {
        accountRef: {
          id: "502a94bb-4f63-4c96-9e9a-3efa77dfb14c",
          name: "Nathaniel Hyatt",
        },
        description: "non",
        discountAmount: 5812.73,
        discountPercentage: 3132.18,
        itemRef: {
          id: "efb9ba88-f3a6-4699-b074-ba4469b6e214",
          name: "Miriam Hermann",
        },
        quantity: 5743.25,
        subTotal: 336.25,
        taxAmount: 6532.01,
        taxRateRef: {
          effectiveTaxRate: 9689.62,
          id: "a563e251-6fe4-4c8b-b11e-5b7fd2ed0289",
          name: "Joan Satterfield",
        },
        totalAmount: 8073.19,
        tracking: {
          categoryRefs: [
            {
              id: "92601fb5-76b0-4d5f-8d30-c5fbb2587053",
              name: "Dorothy Dach",
            },
            {
              id: "3d5fe9b9-0c28-4909-b3fe-49a8d9cbf486",
              name: "Dawn Fadel",
            },
          ],
          customerRef: {
            companyName: "hic",
            id: "9b77f3a4-1006-474e-bf69-280d1ba77a89",
          },
          isBilledTo: BilledToType.Project,
          isRebilledTo: BilledToType.Customer,
          projectRef: {
            id: "f737ae42-03ce-45e6-a95d-8a0d446ce2af",
            name: "Fannie Kub",
          },
        },
        trackingCategoryRefs: [
          {
            id: "3be453f8-70b3-426b-9a73-429cdb1a8422",
            name: "Cesar Hyatt",
          },
          {
            id: "d2322715-bf0c-4bb1-a31b-8b90f3443a11",
            name: "Miss Billie Ward",
          },
          {
            id: "cf4b9218-79fc-4e95-bf73-ef7fbc7abd74",
            name: "Gilberto Dickinson",
          },
          {
            id: "0f5d2cff-7c70-4a45-a26d-436813f16d9f",
            name: "Dixie Schamberger",
          },
        ],
        unitAmount: 7740.48,
      },
      {
        accountRef: {
          id: "556146c3-e250-4fb0-88c4-2e141aac366c",
          name: "Mack Stoltenberg",
        },
        description: "quasi",
        discountAmount: 2703.28,
        discountPercentage: 2561.39,
        itemRef: {
          id: "29074747-78a7-4bd4-a6d2-8c10ab3cdca4",
          name: "Brittany Bernier II",
        },
        quantity: 8920.5,
        subTotal: 3708.53,
        taxAmount: 1334.65,
        taxRateRef: {
          effectiveTaxRate: 1970.54,
          id: "c7e0bc71-78e4-4796-b2a7-0c688282aa48",
          name: "Cathy Huel",
        },
        totalAmount: 1598.7,
        tracking: {
          categoryRefs: [
            {
              id: "2e9817ee-17cb-4e61-a6b7-b95bc0ab3c20",
              name: "Calvin Williamson",
            },
          ],
          customerRef: {
            companyName: "blanditiis",
            id: "9fd871f9-9dd2-4efd-921a-a6f1e674bdb0",
          },
          isBilledTo: BilledToType.NotApplicable,
          isRebilledTo: BilledToType.Project,
          projectRef: {
            id: "15756082-d68e-4a19-b1d1-7051339d0808",
            name: "Iris Bernhard",
          },
        },
        trackingCategoryRefs: [
          {
            id: "394c2607-1f93-4f5f-8642-dac7af515cc4",
            name: "Josephine Paucek",
          },
        ],
        unitAmount: 2460.63,
      },
      {
        accountRef: {
          id: "aae8d678-64db-4b67-9fd5-e60b375ed4f6",
          name: "Rickey Ullrich",
        },
        description: "sunt",
        discountAmount: 9920.12,
        discountPercentage: 2415.45,
        itemRef: {
          id: "3317fe35-b60e-4b1e-a426-555ba3c28744",
          name: "Lionel Herman",
        },
        quantity: 5023.89,
        subTotal: 5553.61,
        taxAmount: 9425.84,
        taxRateRef: {
          effectiveTaxRate: 2015.17,
          id: "a8d8f5c0-b2f2-4fb7-b194-a276b26916fe",
          name: "Faith Aufderhar",
        },
        totalAmount: 2748.23,
        tracking: {
          categoryRefs: [
            {
              id: "94e3698f-447f-4603-a8b4-45e80ca55efd",
              name: "Deborah Turcotte",
            },
          ],
          customerRef: {
            companyName: "in",
            id: "e1858b6a-89fb-4e3a-9aa8-e4824d0ab407",
          },
          isBilledTo: BilledToType.NotApplicable,
          isRebilledTo: BilledToType.Unknown,
          projectRef: {
            id: "88e51862-065e-4904-b3b1-194b8abf603a",
            name: "Lindsey Witting",
          },
        },
        trackingCategoryRefs: [
          {
            id: "e0ab7da8-a50c-4e18-bf86-bc173d689eee",
            name: "Darrell Collier",
          },
          {
            id: "8d986e88-1ead-44f0-a101-2563f94e29e9",
            name: "Sylvia Upton",
          },
          {
            id: "2a57a15b-e3e0-4608-87e2-b6e3ab8845f0",
            name: "Katrina Kovacek",
          },
          {
            id: "0ff2a54a-31e9-4476-8a3e-865e7956f925",
            name: "Lynda Heathcote",
          },
        ],
        unitAmount: 8217.19,
      },
      {
        accountRef: {
          id: "a660ff57-bfaa-4d4f-9efc-1b4512c10326",
          name: "Deanna Swaniawski",
        },
        description: "sapiente",
        discountAmount: 4332.79,
        discountPercentage: 1173.2,
        itemRef: {
          id: "5199ebfd-0e9f-4e6c-a32c-a3aed0117996",
          name: "Joyce Cummings",
        },
        quantity: 8965.82,
        subTotal: 585.34,
        taxAmount: 2711.13,
        taxRateRef: {
          effectiveTaxRate: 4706.21,
          id: "71778ff6-1d01-4747-a360-a15db6a66065",
          name: "Alfonso Bernier",
        },
        totalAmount: 9139.92,
        tracking: {
          categoryRefs: [
            {
              id: "ab5851d6-c645-4b08-b618-91baa0fe1ade",
              name: "Mary Leuschke",
            },
            {
              id: "f8c5f350-d8cd-4b5a-b418-143010421813",
              name: "Ms. Vernon Crooks",
            },
            {
              id: "ce7e253b-6684-451c-ac6e-205e16deab3f",
              name: "Earnest McClure",
            },
          ],
          customerRef: {
            companyName: "blanditiis",
            id: "a6458427-3a84-418d-9623-09fb0929921a",
          },
          isBilledTo: BilledToType.Project,
          isRebilledTo: BilledToType.Project,
          projectRef: {
            id: "b9f58c4d-86e6-48e4-be05-6013f59da757",
            name: "Alvin Marquardt",
          },
        },
        trackingCategoryRefs: [
          {
            id: "ef66ef1c-aa33-483c-abeb-477373c8d72f",
            name: "Dr. Megan Spinka",
          },
          {
            id: "1f2c4310-661e-4963-89e1-cf9e06e3a437",
            name: "Sharon Adams",
          },
          {
            id: "6b6bc9b8-f759-4eac-95a9-741d31135296",
            name: "Patty Reinger",
          },
          {
            id: "72026114-35e1-439d-bc22-59b1abda8c07",
            name: "Ms. Tasha Block",
          },
        ],
        unitAmount: 7551.06,
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
          currencyRate: 1729.51,
          totalAmount: 8247.98,
        },
        payment: {
          accountRef: {
            id: "1ad879ee-b966-45b8-9efb-d02bae0be2d7",
            name: "Fred Champlin",
          },
          currency: "EUR",
          currencyRate: 2393.37,
          id: "ea4b5197-f924-443d-a7ce-52b895c537c6",
          note: "modi",
          paidOnDate: "2022-10-23T00:00:00.000Z",
          reference: "magnam",
          totalAmount: 9149.71,
        },
      },
    ],
    remainingCredit: 0,
    sourceModifiedDate: "2022-10-23T00:00:00.000Z",
    status: BillCreditNoteStatus.Paid,
    subTotal: 805.78,
    supplementalData: {
      content: {
        "aperiam": {
          "ratione": "labore",
          "totam": "occaecati",
          "voluptas": "quo",
        },
        "velit": {
          "fuga": "nostrum",
          "est": "impedit",
          "delectus": "tempore",
          "vero": "odit",
        },
        "repellat": {
          "nemo": "reprehenderit",
          "aperiam": "odio",
          "minima": "in",
          "ducimus": "excepturi",
        },
      },
    },
    supplierRef: {
      id: "29177dea-c646-4ecb-9734-09e3eb1e5a2b",
      supplierName: "dicta",
    },
    totalAmount: 805.78,
    totalDiscount: 0,
    totalTaxAmount: 0,
    withholdingTax: [
      {
        amount: 8998.67,
        name: "Larry Kuphal Sr.",
      },
    ],
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  timeoutInMinutes: 386447,
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
import { BillCreditNoteStatus, BilledToType } from "@codat/accounting/dist/sdk/models/shared";

const sdk = new CodatAccounting({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.billCreditNotes.get({
  billCreditNoteId: "pariatur",
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
import { PushOptionType } from "@codat/accounting/dist/sdk/models/shared";

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
import { BillCreditNoteStatus, BilledToType } from "@codat/accounting/dist/sdk/models/shared";

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

The *Update bill credit note* endpoint updates an existing [bill credit note](https://docs.codat.io/accounting-api#/schemas/BillCreditNote) for a given company's connection.

[Bill credit notes](https://docs.codat.io/accounting-api#/schemas/BillCreditNote) are issued by a supplier for the purpose of recording credit.

**Integration-specific behaviour**

Required data may vary by integration. To see what data to post, first call [Get create/update bill credit note model](https://docs.codat.io/accounting-api#/operations/get-create-update-billCreditNotes-model).

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=billCreditNotes) for integrations that support creating an account.


### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { UpdateBillCreditNoteResponse } from "@codat/accounting/dist/sdk/models/operations";
import {
  BillCreditNoteStatus,
  BilledToType,
  DataType,
  PushChangeType,
  PushOperationStatus,
} from "@codat/accounting/dist/sdk/models/shared";

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
    currencyRate: 3679.17,
    discountPercentage: 0,
    id: "1509398f-98e2-436d-8a5d-c042e0c74ffc",
    issueDate: "2022-10-23T00:00:00.000Z",
    lineItems: [
      {
        accountRef: {
          id: "fc95fa88-970e-4189-9bb3-0fcb33ea055b",
          name: "Mae Krajcik",
        },
        description: "non",
        discountAmount: 2981.87,
        discountPercentage: 9322.96,
        itemRef: {
          id: "2f52d82d-3513-4bb6-b48b-656bcdb35ff2",
          name: "Marcus Prohaska",
        },
        quantity: 3455.06,
        subTotal: 2072.96,
        taxAmount: 4800.61,
        taxRateRef: {
          effectiveTaxRate: 6649.65,
          id: "8cd9e731-9c17-47d5-a5f7-7b114eeb52ff",
          name: "Maxine Hilll",
        },
        totalAmount: 1972.59,
        tracking: {
          categoryRefs: [
            {
              id: "814d4c98-e0c2-4bb8-9eb7-5dad636c6005",
              name: "Wendy Stanton",
            },
            {
              id: "b31180f7-39ae-49e0-97eb-809e2810331f",
              name: "Dr. Misty Lindgren",
            },
          ],
          customerRef: {
            companyName: "minus",
            id: "700b607f-3c93-4c73-b9da-3f2ceda7e23f",
          },
          isBilledTo: BilledToType.Unknown,
          isRebilledTo: BilledToType.Unknown,
          projectRef: {
            id: "57411faf-4b75-444e-872e-802857a5b404",
            name: "Robin O'Hara",
          },
        },
        trackingCategoryRefs: [
          {
            id: "75f1400e-764a-4d73-b4ec-1b781b36a080",
            name: "Mr. Dwayne Sipes PhD",
          },
          {
            id: "fada200e-f042-42eb-a164-cf9ab8366c72",
            name: "Faith Zulauf",
          },
        ],
        unitAmount: 6176.57,
      },
      {
        accountRef: {
          id: "e06bee48-25c1-4fc0-a115-c80bff918544",
          name: "Simon Gleason",
        },
        description: "vero",
        discountAmount: 9851.09,
        discountPercentage: 7737.11,
        itemRef: {
          id: "ce8f1977-773e-4635-a2a7-b408f05e3d48",
          name: "Clint Ortiz",
        },
        quantity: 1105.22,
        subTotal: 2010.96,
        taxAmount: 6308.32,
        taxRateRef: {
          effectiveTaxRate: 748.95,
          id: "f5fd9425-9c0b-436f-a5ea-944f3b756c11",
          name: "Charlie Schaefer",
        },
        totalAmount: 6837.27,
        tracking: {
          categoryRefs: [
            {
              id: "12624383-5bbc-405a-a3a4-5cefc5fde10a",
              name: "Della Treutel III",
            },
            {
              id: "9e510019-c6dc-45e3-8762-799bfbbe6949",
              name: "Jonathon Collins",
            },
          ],
          customerRef: {
            companyName: "incidunt",
            id: "ecae6c3d-5db3-4ade-bd5d-aea4c506a8aa",
          },
          isBilledTo: BilledToType.Customer,
          isRebilledTo: BilledToType.NotApplicable,
          projectRef: {
            id: "c02644cf-5e9d-49a4-978a-dc1ac600dec0",
            name: "Julie Murazik",
          },
        },
        trackingCategoryRefs: [
          {
            id: "2e2ec09f-f8f0-4f81-aff3-477c13e902c1",
            name: "Cheryl Conn",
          },
        ],
        unitAmount: 46.54,
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
          currencyRate: 3881.69,
          totalAmount: 4016.88,
        },
        payment: {
          accountRef: {
            id: "8151a472-af92-43c5-949f-83f350cf876f",
            name: "Mr. Robin Miller",
          },
          currency: "USD",
          currencyRate: 9087.34,
          id: "cbb4e243-cf78-49ff-afed-a53e5ae6e0ac",
          note: "quasi",
          paidOnDate: "2022-10-23T00:00:00.000Z",
          reference: "eius",
          totalAmount: 7861.89,
        },
      },
      {
        allocation: {
          allocatedOnDate: "2022-10-23T00:00:00.000Z",
          currency: "EUR",
          currencyRate: 6200.54,
          totalAmount: 7935.68,
        },
        payment: {
          accountRef: {
            id: "247c8837-3a40-4e19-82f3-2e55055756f5",
            name: "Maurice Hoppe MD",
          },
          currency: "EUR",
          currencyRate: 177.68,
          id: "af2dfe13-db4f-462c-ba3f-8941aebc0b80",
          note: "deserunt",
          paidOnDate: "2022-10-23T00:00:00.000Z",
          reference: "excepturi",
          totalAmount: 1674.35,
        },
      },
    ],
    remainingCredit: 0,
    sourceModifiedDate: "2022-10-23T00:00:00.000Z",
    status: BillCreditNoteStatus.Paid,
    subTotal: 805.78,
    supplementalData: {
      content: {
        "dolor": {
          "sed": "accusamus",
          "optio": "delectus",
          "minus": "quo",
        },
        "quos": {
          "voluptatum": "iste",
          "corporis": "accusantium",
          "illo": "aut",
          "doloribus": "nostrum",
        },
        "at": {
          "neque": "pariatur",
          "vel": "sapiente",
          "mollitia": "quae",
          "quos": "aperiam",
        },
        "non": {
          "ad": "aliquam",
          "quisquam": "quas",
          "consequuntur": "maiores",
          "inventore": "aliquid",
        },
      },
    },
    supplierRef: {
      id: "8a363c88-73e4-4843-80b1-f6b8ca275a60",
      supplierName: "fuga",
    },
    totalAmount: 805.78,
    totalDiscount: 0,
    totalTaxAmount: 0,
    withholdingTax: [
      {
        amount: 2958.92,
        name: "Jay Morar",
      },
    ],
  },
  billCreditNoteId: "placeat",
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  forceUpdate: false,
  timeoutInMinutes: 378403,
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

