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
      id: "7d56844e-ded8-45a9-865e-628bdfc2032b",
      name: "Angelica Langworth",
    },
    currency: "USD",
    currencyRate: 1443.97,
    customerRef: {
      companyName: "dolorem",
      id: "b7e13584-f7ae-412c-a891-f82ce1157172",
    },
    date: "2022-10-23T00:00:00.000Z",
    id: "05377dcf-a89d-4f97-9e35-6686092e9c3d",
    lines: [
      {
        allocatedOnDate: "2022-10-23T00:00:00.000Z",
        amount: 3269.42,
        links: [
          {
            amount: 1048.34,
            currencyRate: 1142.12,
            id: "1dea1026-d541-4a4d-990f-eb21780bccc0",
            type: PaymentLinkType.ManualJournal,
          },
          {
            amount: 7188.79,
            currencyRate: 7148.35,
            id: "ddb48470-8fb4-4e39-9e6b-c158c4c4e545",
            type: PaymentLinkType.Refund,
          },
          {
            amount: 5786.1,
            currencyRate: 9294.43,
            id: "a342260e-9b20-40ce-b8a1-bd8fb7a0a116",
            type: PaymentLinkType.PaymentOnAccount,
          },
          {
            amount: 8855.23,
            currencyRate: 4909.56,
            id: "23d4097f-a30e-49af-b25b-29122030d83f",
            type: PaymentLinkType.CreditNote,
          },
        ],
      },
      {
        allocatedOnDate: "2022-10-23T00:00:00.000Z",
        amount: 9319.53,
        links: [
          {
            amount: 4802.95,
            currencyRate: 4938.65,
            id: "99d22e8c-1f84-4938-a5fd-c42c876c2c2d",
            type: PaymentLinkType.Discount,
          },
          {
            amount: 6908.71,
            currencyRate: 3049.64,
            id: "cfc1c762-30f8-441f-b1bd-23fdb14db6be",
            type: PaymentLinkType.CreditNote,
          },
          {
            amount: 6422.79,
            currencyRate: 3755.88,
            id: "85998e22-ae20-4da1-afc2-b271a289c57e",
            type: PaymentLinkType.Refund,
          },
        ],
      },
      {
        allocatedOnDate: "2022-10-23T00:00:00.000Z",
        amount: 2505.2,
        links: [
          {
            amount: 6050.43,
            currencyRate: 585.67,
            id: "439d2224-6569-4462-8070-84f7ab37cef0",
            type: PaymentLinkType.Unlinked,
          },
          {
            amount: 1806.6,
            currencyRate: 1622.51,
            id: "5194db55-410a-4dc6-a9af-90a26c7cdc98",
            type: PaymentLinkType.Unknown,
          },
          {
            amount: 9788.57,
            currencyRate: 298.53,
            id: "68981d6b-b33c-4faa-b48c-31bf407ee4fc",
            type: PaymentLinkType.Discount,
          },
          {
            amount: 0.73,
            currencyRate: 7704.67,
            id: "42b78f15-6263-498a-8dc7-66324ccb06c8",
            type: PaymentLinkType.PaymentOnAccount,
          },
        ],
      },
      {
        allocatedOnDate: "2022-10-23T00:00:00.000Z",
        amount: 815.41,
        links: [
          {
            amount: 8310.37,
            currencyRate: 271.97,
            id: "2529270b-8d57-422d-9895-b8bcf24db959",
            type: PaymentLinkType.CreditNote,
          },
        ],
      },
    ],
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "2022-10-23T00:00:00.000Z",
    note: "amet",
    paymentMethodRef: "dolor",
    reference: "nostrum",
    sourceModifiedDate: "2022-10-23T00:00:00.000Z",
    supplementalData: {
      content: {
        "molestiae": {
          "ullam": "velit",
          "adipisci": "cupiditate",
        },
        "occaecati": {
          "fugiat": "molestiae",
          "quas": "repellendus",
        },
        "saepe": {
          "distinctio": "vel",
        },
        "necessitatibus": {
          "nesciunt": "corrupti",
          "cupiditate": "voluptatibus",
          "ullam": "dolorum",
        },
      },
    },
    totalAmount: 7437.05,
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  timeoutInMinutes: 739946,
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

