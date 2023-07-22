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
    additionalTaxAmount: 6522.45,
    additionalTaxPercentage: 2425.82,
    allocatedOnDate: "2022-10-23T00:00:00.000Z",
    creditNoteNumber: "est",
    currency: "GBP",
    currencyRate: 7021.83,
    customerRef: {
      companyName: "blanditiis",
      id: "fe99731a-dc05-4d85-ae2d-fb70fb387429",
    },
    discountPercentage: 101.8,
    id: "d336561e-ca16-4ef8-9451-bd76eeeb518c",
    issueDate: "2022-10-23T00:00:00.000Z",
    lineItems: [
      {
        accountRef: {
          id: "a1fad355-12f0-46d4-a5b7-2f0f548568a0",
          name: "Bonnie Greenfelder Jr.",
        },
        description: "officia",
        discountAmount: 1009.76,
        discountPercentage: 8459.84,
        isDirectIncome: false,
        itemRef: {
          id: "6eb94346-45d0-4308-8fbb-a5cceff5cb01",
          name: "Dr. Rogelio Haley",
        },
        quantity: 1344.12,
        subTotal: 5425.06,
        taxAmount: 6556.94,
        taxRateRef: {
          effectiveTaxRate: 2635.77,
          id: "5ac82b85-f8bc-42ca-ba8d-a4127dd597ff",
          name: "Miss Joy Boyer",
        },
        totalAmount: 909.26,
        tracking: {
          categoryRefs: [
            {
              id: "c74b86ce-cc74-4f77-b484-8bd6a6f0441d",
              name: "Jody Dickens",
            },
            {
              id: "08094373-e060-4459-bebb-ad02f2586bcf",
              name: "Holly Dare",
            },
            {
              id: "8daa95be-6cd0-4275-ac35-4aa432b47e17",
              name: "Cindy Schiller",
            },
          ],
          customerRef: {
            companyName: "alias",
            id: "8c23e980-2d82-4f0d-85eb-4a8b674ee5cf",
          },
          isBilledTo: BilledToType1.Project,
          isRebilledTo: BilledToType1.Unknown,
          projectRef: {
            id: "8edc7f78-7e32-4e04-b3d3-ed0c5670ef42",
            name: "Clint Ernser",
          },
          recordRef: {
            dataType: "transfer",
            id: "1cc503f6-c39b-4cd0-a629-0f957f385189",
          },
        },
        trackingCategoryRefs: [
          {
            id: "d7ef807a-ae03-4f33-8a79-fb9de4032ba2",
            name: "Jeannie Smith",
          },
          {
            id: "8ba9216b-cb41-4583-9c73-641723133edc",
            name: "Juanita Kemmer",
          },
          {
            id: "5163bbca-4922-47c4-ac22-c55350495c5d",
            name: "Roderick Fisher",
          },
        ],
        unitAmount: 4435.65,
      },
      {
        accountRef: {
          id: "c1e4981e-8aa2-457d-9c19-12ebde64bfcc",
          name: "Megan Kertzmann",
        },
        description: "quaerat",
        discountAmount: 133.69,
        discountPercentage: 994.67,
        isDirectIncome: false,
        itemRef: {
          id: "5dfa7962-06be-4f2b-8a3e-42c1aa010e9a",
          name: "Garrett Cassin",
        },
        quantity: 826.45,
        subTotal: 2403.52,
        taxAmount: 3369.7,
        taxRateRef: {
          effectiveTaxRate: 3367.21,
          id: "86d18f9f-97a4-4bfa-92bf-7d67ca84ad99",
          name: "Ray Botsford",
        },
        totalAmount: 984.52,
        tracking: {
          categoryRefs: [
            {
              id: "43531870-cf68-4b03-ad42-1bd43d1f0cb0",
              name: "Mrs. Brian Adams",
            },
          ],
          customerRef: {
            companyName: "facilis",
            id: "22d9b3a7-0d94-4faa-b41c-57d1fedc2050",
          },
          isBilledTo: BilledToType1.Project,
          isRebilledTo: BilledToType1.Unknown,
          projectRef: {
            id: "8dc3ce18-5472-4f9e-a691-66a8be3444ea",
            name: "Clayton Reinger",
          },
          recordRef: {
            dataType: "journalEntry",
            id: "875c6c1f-e606-4d07-92a9-c87ae50c1666",
          },
        },
        trackingCategoryRefs: [
          {
            id: "a1d9136a-7e8d-4532-93f3-f658752db764",
            name: "Dean Mayert MD",
          },
        ],
        unitAmount: 3349.54,
      },
      {
        accountRef: {
          id: "6cebcada-29ca-4791-81c9-5671663c530b",
          name: "Kristin Hudson III",
        },
        description: "dolor",
        discountAmount: 6359.03,
        discountPercentage: 2495.41,
        isDirectIncome: false,
        itemRef: {
          id: "638512ab-2521-4b9f-ae07-2467b8a40bc0",
          name: "May Parisian PhD",
        },
        quantity: 3937.88,
        subTotal: 3385.42,
        taxAmount: 196.1,
        taxRateRef: {
          effectiveTaxRate: 9319.91,
          id: "df22a94d-20ec-490e-a41d-1f465e85156f",
          name: "Randal Kris",
        },
        totalAmount: 8372.02,
        tracking: {
          categoryRefs: [
            {
              id: "54fdd5ea-9543-4398-9afb-42a8d63388e4",
              name: "Casey Anderson",
            },
            {
              id: "ea5f9b18-a244-4fd6-9903-9dacd38ed0dc",
              name: "Tamara Borer",
            },
            {
              id: "7f1e3af1-5920-4c90-91b4-901f2bd89c8a",
              name: "Wanda Kassulke",
            },
            {
              id: "da5b7b69-02b8-481a-94f6-43664a8f0af8",
              name: "Dr. Edgar Mosciski",
            },
          ],
          customerRef: {
            companyName: "dolor",
            id: "2d9fbaf9-476a-42ae-8dcc-50c8a3512c73",
          },
          isBilledTo: BilledToType1.NotApplicable,
          isRebilledTo: BilledToType1.NotApplicable,
          projectRef: {
            id: "48930750-a00e-4966-ac73-6d43194398c7",
            name: "Curtis Rosenbaum",
          },
          recordRef: {
            dataType: "journalEntry",
            id: "98ed3d3a-b7ca-43c5-8a86-49a70cfd5d69",
          },
        },
        trackingCategoryRefs: [
          {
            id: "9b720645-1077-4d19-aa83-d492ed14b8a2",
            name: "Ralph Marquardt",
          },
          {
            id: "545e955d-cc18-45ea-8901-c7c43ad2daa7",
            name: "Troy Murphy",
          },
          {
            id: "3d230edf-7381-41a1-9538-2bd7ed565076",
            name: "Christine Sauer",
          },
        ],
        unitAmount: 9851.55,
      },
      {
        accountRef: {
          id: "4d739656-4c20-4a07-91a9-61d24a7dbb8f",
          name: "Shannon Cremin",
        },
        description: "perspiciatis",
        discountAmount: 1421.56,
        discountPercentage: 7540.53,
        isDirectIncome: false,
        itemRef: {
          id: "f7812cb5-12c8-4782-80bf-548f88f8f1bf",
          name: "Hannah Schmidt",
        },
        quantity: 1202.57,
        subTotal: 9822.77,
        taxAmount: 1756.76,
        taxRateRef: {
          effectiveTaxRate: 195.51,
          id: "6d5d831d-0081-4090-b670-6673f3a681c5",
          name: "Vera Kutch",
        },
        totalAmount: 9328.07,
        tracking: {
          categoryRefs: [
            {
              id: "42409a21-5e08-4601-889a-5f63e3af3dd9",
              name: "Marty Nikolaus",
            },
            {
              id: "dcd63483-e4a7-4a98-a4df-37e45b8955d4",
              name: "Mrs. Tracy Walker",
            },
          ],
          customerRef: {
            companyName: "numquam",
            id: "82310907-bd35-44c0-92bd-734f02449d86",
          },
          isBilledTo: BilledToType1.Project,
          isRebilledTo: BilledToType1.Unknown,
          projectRef: {
            id: "bb20fe5d-911c-4bfe-b49c-af45a27f69e2",
            name: "Tracy Weber",
          },
          recordRef: {
            dataType: "journalEntry",
            id: "0e9db3ad-4c6b-4031-88d9-c337473082b9",
          },
        },
        trackingCategoryRefs: [
          {
            id: "f2ab1fd5-671e-49c3-a635-0a467143789c",
            name: "William Walker",
          },
          {
            id: "1594d93a-74c0-4252-be3b-4b4db8b778eb",
            name: "Dr. Ramon Towne",
          },
        ],
        unitAmount: 7725.93,
      },
    ],
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "2022-10-23T00:00:00.000Z",
    note: "ad",
    paymentAllocations: [
      {
        allocation: {
          allocatedOnDate: "2022-10-23T00:00:00.000Z",
          currency: "EUR",
          currencyRate: 6732.9,
          totalAmount: 9436.82,
        },
        payment: {
          accountRef: {
            id: "b2cbc463-5d5e-465d-a028-c3e951a1e30f",
            name: "Doug Marquardt",
          },
          currency: "GBP",
          currencyRate: 5226.16,
          id: "9d7b7867-3e13-4a12-a6b9-92494594487f",
          note: "veniam",
          paidOnDate: "2022-10-23T00:00:00.000Z",
          reference: "praesentium",
          totalAmount: 2852.56,
        },
      },
    ],
    remainingCredit: 2293.64,
    sourceModifiedDate: "2022-10-23T00:00:00.000Z",
    status: CreditNoteStatus.Draft,
    subTotal: 4060.7,
    supplementalData: {
      content: {
        "rem": {
          "harum": "consectetur",
          "quisquam": "nulla",
        },
        "a": {
          "dolore": "dicta",
          "minima": "facilis",
        },
        "sit": {
          "magnam": "molestias",
          "hic": "error",
        },
      },
    },
    totalAmount: 8334,
    totalDiscount: 9625.75,
    totalTaxAmount: 1189.86,
    withholdingTax: [
      {
        amount: 9646.4,
        name: "Gretchen Waters",
      },
    ],
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  timeoutInMinutes: 923982,
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
  creditNoteId: "in",
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
  query: "deleniti",
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
    additionalTaxAmount: 7347.74,
    additionalTaxPercentage: 9709.57,
    allocatedOnDate: "2022-10-23T00:00:00.000Z",
    creditNoteNumber: "sit",
    currency: "USD",
    currencyRate: 5624.3,
    customerRef: {
      companyName: "quia",
      id: "5894ea76-3d5c-4727-95b7-85148d6d549e",
    },
    discountPercentage: 3248.72,
    id: "635b33bc-0f97-40c4-afc9-f4844225e75b",
    issueDate: "2022-10-23T00:00:00.000Z",
    lineItems: [
      {
        accountRef: {
          id: "6065c0ef-a6f9-43b9-8a1b-8c95be1254b7",
          name: "Ramona Wisoky",
        },
        description: "eveniet",
        discountAmount: 4855.06,
        discountPercentage: 4518.47,
        isDirectIncome: false,
        itemRef: {
          id: "210d1f65-58c9-49c7-a2d2-bc0f94087d9c",
          name: "Mrs. Gerard Walter",
        },
        quantity: 8445.66,
        subTotal: 8404.68,
        taxAmount: 4522.21,
        taxRateRef: {
          effectiveTaxRate: 8119.81,
          id: "aac9b4ca-a1cf-4e9e-95df-903907f37831",
          name: "Isaac Dickinson",
        },
        totalAmount: 1409.72,
        tracking: {
          categoryRefs: [
            {
              id: "54a85466-597c-4502-b3c1-471d51aaa6dd",
              name: "Corey Pacocha",
            },
            {
              id: "6487c5fc-2b86-42a0-8bef-69e100157630",
              name: "Taylor Paucek",
            },
            {
              id: "fded84a3-5a41-4238-a1a7-35ac26ae33be",
              name: "Miss Terrence Kulas",
            },
            {
              id: "f46bca11-06fe-4965-b711-d08cf88ec9f7",
              name: "Freddie Mayert",
            },
          ],
          customerRef: {
            companyName: "quis",
            id: "0a656ed3-33bb-40ce-8aa6-5432a986eb7e",
          },
          isBilledTo: BilledToType1.Unknown,
          isRebilledTo: BilledToType1.Unknown,
          projectRef: {
            id: "ca564089-1500-4970-99a4-8f88ece7bf90",
            name: "Mr. Kerry Adams II",
          },
          recordRef: {
            dataType: "transfer",
            id: "38908162-c6be-4b68-a0f6-57b7d03a1480",
          },
        },
        trackingCategoryRefs: [
          {
            id: "8de30f06-9d81-4061-8d97-e152297510da",
            name: "Mr. Kenneth Fay",
          },
          {
            id: "92cc61c2-a702-4bb9-bee1-02da2de35f8e",
            name: "Diane Rempel",
          },
          {
            id: "3eaab454-02ac-4170-8bf1-cc9fc61aae5e",
            name: "Miss Jon Willms",
          },
          {
            id: "92b5744d-08a2-4267-aaee-79e3c71ad31b",
            name: "Benny Raynor",
          },
        ],
        unitAmount: 8588.02,
      },
      {
        accountRef: {
          id: "2378ae3b-fc23-4d94-90a9-86a495bac707",
          name: "Timothy Jaskolski",
        },
        description: "laudantium",
        discountAmount: 9219.81,
        discountPercentage: 7954.89,
        isDirectIncome: false,
        itemRef: {
          id: "c8649238-6f62-4c96-9c4c-c6b78890a3fd",
          name: "Dr. Kara Lowe",
        },
        quantity: 1194.73,
        subTotal: 207.35,
        taxAmount: 9901.69,
        taxRateRef: {
          effectiveTaxRate: 5342.04,
          id: "c23df931-da3e-4db5-9fad-94acc9435137",
          name: "Sara Jast II",
        },
        totalAmount: 2426.06,
        tracking: {
          categoryRefs: [
            {
              id: "1b832a56-d691-480f-b60e-b9a6658e69a4",
              name: "Jimmie Grady",
            },
          ],
          customerRef: {
            companyName: "adipisci",
            id: "82dbec75-c68c-4606-9946-8ce304d8849b",
          },
          isBilledTo: BilledToType1.Project,
          isRebilledTo: BilledToType1.NotApplicable,
          projectRef: {
            id: "214c337f-96bb-40c6-9e37-2db1344ba9f7",
            name: "Ernesto Heaney PhD",
          },
          recordRef: {
            dataType: "transfer",
            id: "7aab62e9-7261-4fb0-858d-27b51996b5b4",
          },
        },
        trackingCategoryRefs: [
          {
            id: "50eef712-b7a7-4ab0-b44b-1710688deebe",
            name: "Wallace Medhurst",
          },
          {
            id: "3dd0ccd3-3f11-4b3e-8e08-0aa104186ec7",
            name: "Mr. Sherri Torphy",
          },
          {
            id: "3702c5c8-e2d3-40ea-9310-4fa44707bf37",
            name: "Jeannette Graham",
          },
        ],
        unitAmount: 5596.68,
      },
      {
        accountRef: {
          id: "2821fdb2-f69e-4592-a7c7-1cc8d3cd4258",
          name: "Anthony Fahey",
        },
        description: "laborum",
        discountAmount: 5588.69,
        discountPercentage: 1387.08,
        isDirectIncome: false,
        itemRef: {
          id: "c808fe27-51a2-4047-8044-9e143f9619bb",
          name: "Dr. Estelle Goyette",
        },
        quantity: 6731.58,
        subTotal: 640.7,
        taxAmount: 641.84,
        taxRateRef: {
          effectiveTaxRate: 9726.54,
          id: "a436e625-9233-4f95-89d2-37397c785b5d",
          name: "Miguel Wuckert Jr.",
        },
        totalAmount: 1104.36,
        tracking: {
          categoryRefs: [
            {
              id: "3febdf67-6b72-406d-ab75-0052a5647edc",
              name: "Annie Morissette",
            },
            {
              id: "8c4320f4-1240-4d44-87ac-693b94c3b9d2",
              name: "Leah Kuvalis",
            },
            {
              id: "95aa42fc-4056-469f-a9a0-06d212494508",
              name: "Natasha Stark",
            },
          ],
          customerRef: {
            companyName: "ipsum",
            id: "b1b41844-060e-4003-90d0-23dc901f5afd",
          },
          isBilledTo: BilledToType1.Unknown,
          isRebilledTo: BilledToType1.NotApplicable,
          projectRef: {
            id: "6c44846a-e9d8-4925-bc89-62f4896bf51e",
            name: "Eileen Hegmann",
          },
          recordRef: {
            dataType: "journalEntry",
            id: "c343d617-78af-4491-a477-25e621909e91",
          },
        },
        trackingCategoryRefs: [
          {
            id: "44a5de59-ac77-4066-b0cf-1cf593260525",
            name: "Elvira Jacobson",
          },
        ],
        unitAmount: 7414,
      },
    ],
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "2022-10-23T00:00:00.000Z",
    note: "quia",
    paymentAllocations: [
      {
        allocation: {
          allocatedOnDate: "2022-10-23T00:00:00.000Z",
          currency: "USD",
          currencyRate: 4937.34,
          totalAmount: 8134.63,
        },
        payment: {
          accountRef: {
            id: "99a2d335-670e-493e-a6cf-59f358aaeaca",
            name: "Philip Crooks",
          },
          currency: "GBP",
          currencyRate: 799.07,
          id: "bf7ba1cc-9771-46c8-82cc-9e0c7d9d323f",
          note: "quae",
          paidOnDate: "2022-10-23T00:00:00.000Z",
          reference: "est",
          totalAmount: 4209.27,
        },
      },
      {
        allocation: {
          allocatedOnDate: "2022-10-23T00:00:00.000Z",
          currency: "EUR",
          currencyRate: 8610.9,
          totalAmount: 5823.51,
        },
        payment: {
          accountRef: {
            id: "cf1c856b-cba5-41ef-a454-a47facf116cd",
            name: "Jorge Grady",
          },
          currency: "USD",
          currencyRate: 4413.58,
          id: "562873c7-dd9e-4faf-83dc-623620f3138f",
          note: "nesciunt",
          paidOnDate: "2022-10-23T00:00:00.000Z",
          reference: "at",
          totalAmount: 9458.52,
        },
      },
    ],
    remainingCredit: 1945.26,
    sourceModifiedDate: "2022-10-23T00:00:00.000Z",
    status: CreditNoteStatus.Void,
    subTotal: 224.79,
    supplementalData: {
      content: {
        "aspernatur": {
          "similique": "id",
          "exercitationem": "commodi",
          "nostrum": "delectus",
          "quidem": "rem",
        },
      },
    },
    totalAmount: 9947.56,
    totalDiscount: 3840.74,
    totalTaxAmount: 3327.12,
    withholdingTax: [
      {
        amount: 9230.44,
        name: "Pete Metz",
      },
    ],
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  creditNoteId: "praesentium",
  forceUpdate: false,
  timeoutInMinutes: 249962,
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

