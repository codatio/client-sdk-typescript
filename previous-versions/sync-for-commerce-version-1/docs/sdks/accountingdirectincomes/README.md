# AccountingDirectIncomes
(*accountingDirectIncomes*)

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
import { DataType } from "@codat/sync-for-commerce-version-1/dist/sdk/models/shared";

const sdk = new CodatSyncCommerce({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.accountingDirectIncomes.createAccountingDirectIncome({
  accountingDirectIncome: {
    contactRef: {
      dataType: DataType.Invoices,
      id: "<ID>",
    },
    currency: "GBP",
    currencyRate: 6548.38,
    id: "<ID>",
    issueDate: "2022-10-23T00:00:00.000Z",
    lineItems: [
      {
        accountRef: {
          id: "<ID>",
          name: "Meitnerium watt Assistant",
        },
        description: "Organized directional moratorium",
        discountAmount: 6259.31,
        discountPercentage: 3251.14,
        itemRef: {
          id: "<ID>",
          name: "Supervisor virtual sadly",
        },
        quantity: 7605.88,
        subTotal: 2695.32,
        taxAmount: 3396.83,
        taxRateRef: {
          effectiveTaxRate: 2606.73,
          id: "<ID>",
          name: "Pensacola Som Northwest",
        },
        totalAmount: 6880.22,
        trackingCategoryRefs: [
          {
            id: "<ID>",
            name: "Pickup",
          },
        ],
        unitAmount: 8819.46,
      },
    ],
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "2022-10-23T00:00:00.000Z",
    note: "magni",
    paymentAllocations: [
      {
        allocation: {
          allocatedOnDate: "2022-10-23T00:00:00.000Z",
          currency: "USD",
          currencyRate: 2449.75,
          totalAmount: 6540.35,
        },
        payment: {
          accountRef: {
            id: "<ID>",
            name: "Officer mobile Infrastructure",
          },
          currency: "EUR",
          currencyRate: 4022.79,
          id: "<ID>",
          note: "Tools Dynamic Industrial",
          paidOnDate: "2022-10-23T00:00:00.000Z",
          reference: "parallelism",
          totalAmount: 9002.17,
        },
      },
    ],
    reference: "Man Cotton virtual",
    sourceModifiedDate: "2022-10-23T00:00:00.000Z",
    subTotal: 4300.87,
    supplementalData: {
      content: {
        "eos": {
          "facere": "TLS",
        },
      },
    },
    taxAmount: 356.06,
    totalAmount: 9132.9,
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  timeoutInMinutes: 156594,
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

