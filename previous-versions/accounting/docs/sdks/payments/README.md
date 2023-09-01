# payments

## Overview

Payments

### Available Operations

* [create](#create) - Create payment
* [get](#get) - Get payment
* [getCreateModel](#getcreatemodel) - Get create payment model
* [list](#list) - List payments

## create

The *Create payment* endpoint creates a new [payment](https://docs.codat.io/accounting-api#/schemas/Payment) for a given company's connection.

[Payments](https://docs.codat.io/accounting-api#/schemas/Payment) represent an allocation of money within any customer accounts receivable account.

**Integration-specific behaviour**

Required data may vary by integration. To see what data to post, first call [Get create payment model](https://docs.codat.io/accounting-api#/operations/get-create-payments-model).

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=payments) for integrations that support creating an account.


### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { CreatePaymentResponse } from "@codat/accounting/dist/sdk/models/operations";
import { PaymentLinkType } from "@codat/accounting/dist/sdk/models/shared";

const sdk = new CodatAccounting({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.payments.create({
  payment: {
    accountRef: {
      id: "871a88ed-72a2-4d4a-b415-8ac2d0f0f58c",
      name: "Pam Leannon",
    },
    currency: "GBP",
    currencyRate: 4766.68,
    customerRef: {
      companyName: "eaque",
      id: "40d0d98e-9d82-4c5e-b06f-5576f5cdeb02",
    },
    date: "2022-10-23T00:00:00.000Z",
    id: "6d0bc43b-18ab-4378-b2fc-ff81ddf7e088",
    lines: [
      {
        allocatedOnDate: "2022-10-23T00:00:00.000Z",
        amount: 2892.95,
        links: [
          {
            amount: 9630.72,
            currencyRate: 3403.92,
            id: "4c9216e8-9263-413b-b6fc-2c8d2701096b",
            type: PaymentLinkType.Other,
          },
          {
            amount: 4190.01,
            currencyRate: 6641.93,
            id: "d6e3e1d9-d3b6-4603-b4a1-1aa1d5d2247d",
            type: PaymentLinkType.ManualJournal,
          },
          {
            amount: 5974.19,
            currencyRate: 7299.26,
            id: "3d46170e-768a-496b-b398-788398eba1bb",
            type: PaymentLinkType.Discount,
          },
          {
            amount: 4939.36,
            currencyRate: 676.61,
            id: "43356f63-49a1-4642-89b2-11ce46b95165",
            type: PaymentLinkType.Unlinked,
          },
        ],
      },
      {
        allocatedOnDate: "2022-10-23T00:00:00.000Z",
        amount: 1068.42,
        links: [
          {
            amount: 5418.42,
            currencyRate: 7604.45,
            id: "a9142f05-2632-4b31-8ad6-92ffc8745005",
            type: PaymentLinkType.Discount,
          },
          {
            amount: 6124.56,
            currencyRate: 8634.66,
            id: "3d934e03-6f5c-4388-a64f-6985530a2e2a",
            type: PaymentLinkType.Discount,
          },
        ],
      },
      {
        allocatedOnDate: "2022-10-23T00:00:00.000Z",
        amount: 4284.76,
        links: [
          {
            amount: 6672.29,
            currencyRate: 9471.82,
            id: "863c28d0-40c6-49a3-9906-f6ebd5ad7ec7",
            type: PaymentLinkType.Invoice,
          },
          {
            amount: 5908.32,
            currencyRate: 2922.91,
            id: "f25f634b-3730-4714-a6be-8c3e09c64d34",
            type: PaymentLinkType.Unlinked,
          },
          {
            amount: 6784.76,
            currencyRate: 8087.97,
            id: "299a6e5e-7aef-4134-82e9-45f53743efde",
            type: PaymentLinkType.Unknown,
          },
        ],
      },
      {
        allocatedOnDate: "2022-10-23T00:00:00.000Z",
        amount: 5754.71,
        links: [
          {
            amount: 1577.51,
            currencyRate: 1756.68,
            id: "1f9b1f7d-9aff-4e69-a82a-ceefb04f8c51",
            type: PaymentLinkType.Unlinked,
          },
          {
            amount: 8001.68,
            currencyRate: 6586.25,
            id: "abea708e-d579-48d3-85d4-60599d5c3349",
            type: PaymentLinkType.CreditNote,
          },
          {
            amount: 4904.31,
            currencyRate: 4326.34,
            id: "d55209e9-a225-43b6-9765-886eeae5fd4b",
            type: PaymentLinkType.Invoice,
          },
        ],
      },
    ],
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "2022-10-23T00:00:00.000Z",
    note: "voluptatibus",
    paymentMethodRef: "totam",
    reference: "mollitia",
    sourceModifiedDate: "2022-10-23T00:00:00.000Z",
    supplementalData: {
      content: {
        "provident": {
          "aliquid": "in",
        },
        "quos": {
          "sunt": "dolor",
          "quisquam": "commodi",
          "laudantium": "laboriosam",
          "repellendus": "quos",
        },
      },
    },
    totalAmount: 2068.12,
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  timeoutInMinutes: 608738,
}).then((res: CreatePaymentResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.CreatePaymentRequest](../../models/operations/createpaymentrequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `retries`                                                                          | [utils.RetryConfig](../../models/utils/retryconfig.md)                             | :heavy_minus_sign:                                                                 | Configuration to override the default retry behavior of the client.                |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.CreatePaymentResponse](../../models/operations/createpaymentresponse.md)>**


## get

The *Get payment* endpoint returns a single payment for a given paymentId.

[Payments](https://docs.codat.io/accounting-api#/schemas/Payment) represent an allocation of money within any customer accounts receivable account.

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=payments) for integrations that support getting a specific payment.

Before using this endpoint, you must have [retrieved data for the company](https://docs.codat.io/codat-api#/operations/refresh-company-data).


### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { GetPaymentResponse } from "@codat/accounting/dist/sdk/models/operations";

const sdk = new CodatAccounting({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.payments.get({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  paymentId: "earum",
}).then((res: GetPaymentResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                    | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `request`                                                                    | [operations.GetPaymentRequest](../../models/operations/getpaymentrequest.md) | :heavy_check_mark:                                                           | The request object to use for the request.                                   |
| `retries`                                                                    | [utils.RetryConfig](../../models/utils/retryconfig.md)                       | :heavy_minus_sign:                                                           | Configuration to override the default retry behavior of the client.          |
| `config`                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                 | :heavy_minus_sign:                                                           | Available config options for making requests.                                |


### Response

**Promise<[operations.GetPaymentResponse](../../models/operations/getpaymentresponse.md)>**


## getCreateModel

The *Get create payment model* endpoint returns the expected data for the request payload when creating a [payment](https://docs.codat.io/accounting-api#/schemas/Payment) for a given company and integration.

[Payments](https://docs.codat.io/accounting-api#/schemas/Payment) represent an allocation of money within any customer accounts receivable account.

**Integration-specific behaviour**

See the *response examples* for integration-specific indicative models.

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=payments) for integrations that support creating a payment.


### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { GetCreatePaymentsModelResponse } from "@codat/accounting/dist/sdk/models/operations";

const sdk = new CodatAccounting({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.payments.getCreateModel({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
}).then((res: GetCreatePaymentsModelResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.GetCreatePaymentsModelRequest](../../models/operations/getcreatepaymentsmodelrequest.md) | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `retries`                                                                                            | [utils.RetryConfig](../../models/utils/retryconfig.md)                                               | :heavy_minus_sign:                                                                                   | Configuration to override the default retry behavior of the client.                                  |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.GetCreatePaymentsModelResponse](../../models/operations/getcreatepaymentsmodelresponse.md)>**


## list

The *List payments* endpoint returns a list of [payments](https://docs.codat.io/accounting-api#/schemas/Payment) for a given company's connection.

[Payments](https://docs.codat.io/accounting-api#/schemas/Payment) represent an allocation of money within any customer accounts receivable account.

Before using this endpoint, you must have [retrieved data for the company](https://docs.codat.io/codat-api#/operations/refresh-company-data).
    

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { ListPaymentsResponse } from "@codat/accounting/dist/sdk/models/operations";

const sdk = new CodatAccounting({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.payments.list({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  orderBy: "-modifiedDate",
  page: 1,
  pageSize: 100,
  query: "eligendi",
}).then((res: ListPaymentsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [operations.ListPaymentsRequest](../../models/operations/listpaymentsrequest.md) | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `retries`                                                                        | [utils.RetryConfig](../../models/utils/retryconfig.md)                           | :heavy_minus_sign:                                                               | Configuration to override the default retry behavior of the client.              |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.ListPaymentsResponse](../../models/operations/listpaymentsresponse.md)>**

