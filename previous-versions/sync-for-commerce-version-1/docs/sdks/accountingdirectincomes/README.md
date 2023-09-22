# AccountingDirectIncomes

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
      dataType: "nostrum",
      id: "fce6c556-146c-43e2-90fb-008c42e141aa",
    },
    currency: "EUR",
    currencyRate: 2453.67,
    id: "66c8dd6b-1442-4907-8747-78a7bd466d28",
    issueDate: "2022-10-23T00:00:00.000Z",
    lineItems: [
      {
        accountRef: {
          id: "10ab3cdc-a425-4190-8e52-3c7e0bc7178e",
          name: "Courtney Mayert",
        },
        description: "dolores",
        discountAmount: 6455.7,
        discountPercentage: 4752.89,
        itemRef: {
          id: "0c688282-aa48-4256-af22-2e9817ee17cb",
          name: "Gene Botsford",
        },
        quantity: 6900.25,
        subTotal: 4732.21,
        taxAmount: 6996.22,
        taxRateRef: {
          effectiveTaxRate: 5801.97,
          id: "5bc0ab3c-20c4-4f37-89fd-871f99dd2efd",
          name: "Marilyn Botsford",
        },
        totalAmount: 3984.34,
        trackingCategoryRefs: [
          {
            id: "f1e674bd-b04f-4157-9608-2d68ea19f1d1",
            name: "Mrs. Cynthia Hansen",
          },
        ],
        unitAmount: 6144.65,
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
          currencyRate: 5130.75,
          totalAmount: 4287.96,
        },
        payment: {
          accountRef: {
            id: "a1840394-c260-471f-93f5-f0642dac7af5",
            name: "Darlene Sawayn",
          },
          currency: "GBP",
          currencyRate: 2414.18,
          id: "aa63aae8-d678-464d-bb67-5fd5e60b375e",
          note: "facere",
          paidOnDate: "2022-10-23T00:00:00.000Z",
          reference: "doloribus",
          totalAmount: 3817.6,
        },
      },
    ],
    reference: "reiciendis",
    sourceModifiedDate: "2022-10-23T00:00:00.000Z",
    subTotal: 9049.49,
    supplementalData: {
      content: {
        "necessitatibus": {
          "dolore": "sunt",
        },
      },
    },
    taxAmount: 9920.12,
    totalAmount: 2415.45,
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  timeoutInMinutes: 249420,
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

