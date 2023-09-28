# AccountingPayments
(*accountingPayments*)

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
      id: "e96349e1-cf9e-406e-ba43-7000ae6b6bc9",
      name: "Alfredo Wilkinson",
    },
    currency: "USD",
    currencyRate: 8975.43,
    customerRef: {
      companyName: "animi",
      id: "c55a9741-d311-4352-965b-b8a720261143",
    },
    date: "2022-10-23T00:00:00.000Z",
    id: "e139dbc2-259b-41ab-9a8c-070e1084cb06",
    lines: [
      {
        allocatedOnDate: "2022-10-23T00:00:00.000Z",
        amount: 1729.51,
        links: [
          {
            amount: 8247.98,
            currencyRate: 1072.1,
            id: "ad879eeb-9665-4b85-afbd-02bae0be2d78",
            type: PaymentLinkType.Unlinked,
          },
        ],
      },
    ],
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "2022-10-23T00:00:00.000Z",
    note: "corporis",
    paymentMethodRef: "error",
    reference: "earum",
    sourceModifiedDate: "2022-10-23T00:00:00.000Z",
    supplementalData: {
      content: {
        "recusandae": {
          "similique": "ut",
        },
      },
    },
    totalAmount: 6937.46,
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  timeoutInMinutes: 339631,
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

