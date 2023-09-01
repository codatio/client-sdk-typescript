# accountingDirectIncomes

## Overview

Direct incomes

### Available Operations

* [createAccountingDirectIncome](#createaccountingdirectincome) - Create direct income

## createAccountingDirectIncome

The *Create direct income* endpoint creates a new [direct income](https://docs.codat.io/accounting-api#/schemas/DirectIncome) for a given company's connection.

[Direct incomes](https://docs.codat.io/accounting-api#/schemas/DirectIncome) are sales of items directly to a customer where payment is received at the point of the sale. For example, cash sales of items to a customer, referral commissions, and service fee refunds are considered direct incomes.

**Integration-specific behaviour**

Required data may vary by integration. To see what data to post, first call [Get create direct income model](https://docs.codat.io/accounting-api#/operations/get-create-directIncomes-model).

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=directIncomes) for integrations that support creating an account.


### Example Usage

```typescript
import { CodatSyncCommerce } from "@codat/sync-for-commerce-version-1";
import { CreateAccountingDirectIncomeResponse } from "@codat/sync-for-commerce-version-1/dist/sdk/models/operations";

const sdk = new CodatSyncCommerce({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.accountingDirectIncomes.createAccountingDirectIncome({
  accountingDirectIncome: {
    contactRef: {
      dataType: "nisi",
      id: "f48b656b-cdb3-45ff-ae4b-27537a8cd9e7",
    },
    currency: "GBP",
    currencyRate: 1180.41,
    id: "9c177d52-5f77-4b11-8eeb-52ff785fc378",
    issueDate: "2022-10-23T00:00:00.000Z",
    lineItems: [
      {
        accountRef: {
          id: "d4c98e0c-2bb8-49eb-b5da-d636c600503d",
          name: "Willis Rippin Sr.",
        },
        description: "laudantium",
        discountAmount: 407.1,
        discountPercentage: 9384.12,
        itemRef: {
          id: "739ae9e0-57eb-4809-a281-0331f3981d4c",
          name: "Donna Aufderhar",
        },
        quantity: 467.91,
        subTotal: 4894.59,
        taxAmount: 9980.26,
        taxRateRef: {
          effectiveTaxRate: 2436.78,
          id: "c93c73b9-da3f-42ce-9a7e-23f2257411fa",
          name: "Kyle Reichel",
        },
        totalAmount: 2883,
        trackingCategoryRefs: [
          {
            id: "e472e802-857a-45b4-8463-a7d575f1400e",
            name: "Gertrude Gerhold",
          },
          {
            id: "7334ec1b-781b-436a-8808-8d100efada20",
            name: "Mrs. Olive Weissnat",
          },
        ],
        unitAmount: 1858.97,
      },
      {
        accountRef: {
          id: "eb2164cf-9ab8-4366-8723-ffda9e06bee4",
          name: "Howard Hermann DVM",
        },
        description: "eligendi",
        discountAmount: 620.35,
        discountPercentage: 8850.22,
        itemRef: {
          id: "115c80bf-f918-4544-ac42-defcce8f1977",
          name: "Lydia Douglas",
        },
        quantity: 2086.83,
        subTotal: 3577.58,
        taxAmount: 3753.5,
        taxRateRef: {
          effectiveTaxRate: 1636.84,
          id: "a7b408f0-5e3d-448f-9af3-13a1f5fd9425",
          name: "Lucas Abbott",
        },
        totalAmount: 4124.33,
        trackingCategoryRefs: [
          {
            id: "25ea944f-3b75-46c1-9f6c-37a512624383",
            name: "Kristy Quigley II",
          },
          {
            id: "a23a45ce-fc5f-4de1-8a0c-e2169e510019",
            name: "Elmer Spinka",
          },
          {
            id: "e3476279-9bfb-4be6-949f-b2bb4ecae6c3",
            name: "Maurice Stanton",
          },
          {
            id: "adebd5da-ea4c-4506-a8aa-94c02644cf5e",
            name: "Drew Mraz",
          },
        ],
        unitAmount: 3442.89,
      },
    ],
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "2022-10-23T00:00:00.000Z",
    note: "corrupti",
    paymentAllocations: [
      {
        allocation: {
          allocatedOnDate: "2022-10-23T00:00:00.000Z",
          currency: "EUR",
          currencyRate: 986.1,
          totalAmount: 6472.18,
        },
        payment: {
          accountRef: {
            id: "c600dec0-01ac-4802-a2ec-09ff8f0f816f",
            name: "Lee Gibson",
          },
          currency: "EUR",
          currencyRate: 946.97,
          id: "3e902c14-125b-4096-8a66-8151a472af92",
          note: "nesciunt",
          paidOnDate: "2022-10-23T00:00:00.000Z",
          reference: "quis",
          totalAmount: 5861.08,
        },
      },
      {
        allocation: {
          allocatedOnDate: "2022-10-23T00:00:00.000Z",
          currency: "USD",
          currencyRate: 9804.1,
          totalAmount: 5120.81,
        },
        payment: {
          accountRef: {
            id: "3f350cf8-76ff-4b90-9c6e-cbb4e243cf78",
            name: "Jerald Wilkinson",
          },
          currency: "EUR",
          currencyRate: 8615.91,
          id: "a53e5ae6-e0ac-4184-82b9-c247c88373a4",
          note: "perferendis",
          paidOnDate: "2022-10-23T00:00:00.000Z",
          reference: "architecto",
          totalAmount: 5646.27,
        },
      },
      {
        allocation: {
          allocatedOnDate: "2022-10-23T00:00:00.000Z",
          currency: "GBP",
          currencyRate: 9829.91,
          totalAmount: 2050.11,
        },
        payment: {
          accountRef: {
            id: "2e550557-56f5-4d56-90bd-0af2dfe13db4",
            name: "Elmer Champlin",
          },
          currency: "EUR",
          currencyRate: 2425.31,
          id: "f8941aeb-c0b8-40a6-924d-3b2ecfcc8f89",
          note: "corporis",
          paidOnDate: "2022-10-23T00:00:00.000Z",
          reference: "illo",
          totalAmount: 142.51,
        },
      },
    ],
    reference: "doloribus",
    sourceModifiedDate: "2022-10-23T00:00:00.000Z",
    subTotal: 8698.48,
    supplementalData: {
      content: {
        "neque": {
          "vel": "sapiente",
          "mollitia": "quae",
          "quos": "aperiam",
          "non": "voluptates",
        },
        "ad": {
          "quisquam": "quas",
          "consequuntur": "maiores",
        },
        "inventore": {
          "laudantium": "est",
          "dolor": "aliquid",
        },
        "consectetur": {
          "rem": "voluptatum",
          "ducimus": "adipisci",
          "recusandae": "tempora",
          "blanditiis": "numquam",
        },
      },
    },
    taxAmount: 1963.74,
    totalAmount: 5323.2,
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  timeoutInMinutes: 27078,
}).then((res: CreateAccountingDirectIncomeResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                        | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                        | [operations.CreateAccountingDirectIncomeRequest](../../models/operations/createaccountingdirectincomerequest.md) | :heavy_check_mark:                                                                                               | The request object to use for the request.                                                                       |
| `retries`                                                                                                        | [utils.RetryConfig](../../models/utils/retryconfig.md)                                                           | :heavy_minus_sign:                                                                                               | Configuration to override the default retry behavior of the client.                                              |
| `config`                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                     | :heavy_minus_sign:                                                                                               | Available config options for making requests.                                                                    |


### Response

**Promise<[operations.CreateAccountingDirectIncomeResponse](../../models/operations/createaccountingdirectincomeresponse.md)>**

