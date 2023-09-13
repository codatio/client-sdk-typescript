# accountingPayments

## Overview

Payments

### Available Operations

* [createAccountingPayment](#createaccountingpayment) - Create payment

## createAccountingPayment

The *Create payment* endpoint creates a new [payment](https://docs.codat.io/accounting-api#/schemas/Payment) for a given company's connection.

[Payments](https://docs.codat.io/accounting-api#/schemas/Payment) represent an allocation of money within any customer accounts receivable account.

**Integration-specific behaviour**

Required data may vary by integration. To see what data to post, first call [Get create payment model](https://docs.codat.io/accounting-api#/operations/get-create-payments-model).

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=payments) for integrations that support creating an account.


### Example Usage

```typescript
import { CodatSyncCommerce } from "@codat/sync-for-commerce-version-1";
import { CreateAccountingPaymentResponse } from "@codat/sync-for-commerce-version-1/dist/sdk/models/operations";
import { PaymentLinkType } from "@codat/sync-for-commerce-version-1/dist/sdk/models/shared";

const sdk = new CodatSyncCommerce({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.accountingPayments.createAccountingPayment({
  accountingPayment: {
    accountRef: {
      id: "2f64d1db-1f2c-4431-8661-e96349e1cf9e",
      name: "Alma Waters",
    },
    currency: "GBP",
    currencyRate: 2244.67,
    customerRef: {
      companyName: "iusto",
      id: "000ae6b6-bc9b-48f7-99ea-c55a9741d311",
    },
    date: "2022-10-23T00:00:00.000Z",
    id: "52965bb8-a720-4261-9435-e139dbc2259b",
    lines: [
      {
        allocatedOnDate: "2022-10-23T00:00:00.000Z",
        amount: 6633.18,
        links: [
          {
            amount: 7278.88,
            currencyRate: 8544.6,
            id: "a8c070e1-084c-4b06-b2d1-ad879eeb9665",
            type: PaymentLinkType.PaymentOnAccount,
          },
        ],
      },
    ],
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "2022-10-23T00:00:00.000Z",
    note: "corporis",
    paymentMethodRef: "officiis",
    reference: "voluptatibus",
    sourceModifiedDate: "2022-10-23T00:00:00.000Z",
    supplementalData: {
      content: {
        "at": {
          "alias": "quia",
        },
      },
    },
    totalAmount: 6941.58,
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  timeoutInMinutes: 684126,
}).then((res: CreateAccountingPaymentResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `request`                                                                                              | [operations.CreateAccountingPaymentRequest](../../models/operations/createaccountingpaymentrequest.md) | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `retries`                                                                                              | [utils.RetryConfig](../../models/utils/retryconfig.md)                                                 | :heavy_minus_sign:                                                                                     | Configuration to override the default retry behavior of the client.                                    |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.CreateAccountingPaymentResponse](../../models/operations/createaccountingpaymentresponse.md)>**

