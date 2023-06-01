# payments

## Overview

Payments

### Available Operations

* [create](#create) - Create payment
* [get](#get) - Get payment
* [getCreateModel](#getcreatemodel) - Get create payment model
* [list](#list) - List payments

## create

Posts a new payment to the accounting package for a given company.

Required data may vary by integration. To see what data to post, first call [Get create payment model](https://docs.codat.io/accounting-api#/operations/get-create-payments-model).

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=payments) to see which integrations support this endpoint.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { CreatePaymentResponse } from "@codat/accounting/dist/sdk/models/operations";
import { DataType, PaymentLinkType, PushChangeType, PushOperationStatus } from "@codat/accounting/dist/sdk/models/shared";

const sdk = new CodatAccounting({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.payments.create({
  payment: {
    accountRef: {
      id: "61e91500-323b-42c0-9b92-4771f5669e5b",
      name: "Tricia Sawayn",
    },
    currency: "magni",
    currencyRate: 4374.89,
    customerRef: {
      companyName: "ea",
      id: "49d84eb9-e4cf-4d22-b6e0-b88fb87d6fa5",
    },
    date: "cum",
    id: "6e8dbf81-2f83-4b1c-a6a9-ffc561929cca",
    lines: [
      {
        allocatedOnDate: "nemo",
        amount: 3864.41,
        links: [
          {
            amount: 6814.58,
            currencyRate: 977.35,
            id: "395918da-1d48-4e78-a3cf-8e1143da9308",
            type: PaymentLinkType.PaymentOnAccount,
          },
        ],
      },
      {
        allocatedOnDate: "magni",
        amount: 4682.52,
        links: [
          {
            amount: 137,
            currencyRate: 5312.36,
            id: "af221844-39b3-4de8-b56c-cce470cd2147",
            type: PaymentLinkType.Payment,
          },
          {
            amount: 4308.75,
            currencyRate: 9267.48,
            id: "6152cf01-d0d8-4c3a-8b9a-5bf935dfe974",
            type: PaymentLinkType.Discount,
          },
          {
            amount: 6309.83,
            currencyRate: 2828,
            id: "b1e9c097-eda6-4234-82e1-a9237e9984c8",
            type: PaymentLinkType.Unknown,
          },
        ],
      },
      {
        allocatedOnDate: "facilis",
        amount: 2810.64,
        links: [
          {
            amount: 5745.91,
            currencyRate: 9051.54,
            id: "891923c1-8ca8-4d69-8568-9214fa20207e",
            type: PaymentLinkType.Invoice,
          },
          {
            amount: 9643.29,
            currencyRate: 6295.82,
            id: "e038cd7f-1bc2-4cab-af7f-c2ccba4bef0d",
            type: PaymentLinkType.Discount,
          },
        ],
      },
    ],
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "nisi",
    note: "voluptatum",
    paymentMethodRef: {
      id: "eaedb2ee-70be-4069-bb36-add704080e0a",
      name: "Lorene Schneider",
    },
    reference: "animi",
    sourceModifiedDate: "ullam",
    supplementalData: {
      content: {
        "aperiam": {
          "aliquam": "soluta",
        },
        "inventore": {
          "ut": "sint",
        },
        "sint": {
          "eius": "ratione",
        },
      },
    },
    totalAmount: 6253.92,
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  timeoutInMinutes: 979832,
}).then((res: CreatePaymentResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## get

Get payment

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { GetPaymentResponse } from "@codat/accounting/dist/sdk/models/operations";
import { PaymentLinkType } from "@codat/accounting/dist/sdk/models/shared";

const sdk = new CodatAccounting({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.payments.get({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  paymentId: "mollitia",
}).then((res: GetPaymentResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getCreateModel

Get create payment model. Returns the expected data for the request payload.

See the examples for integration-specific indicative models.

> **Supported Integrations**
> 
> Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=payments) for integrations that support creating payments.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { GetCreatePaymentsModelResponse } from "@codat/accounting/dist/sdk/models/operations";
import { PushOptionType } from "@codat/accounting/dist/sdk/models/shared";

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

## list

Gets the latest payments for a company, with pagination

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
  query: "suscipit",
}).then((res: ListPaymentsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
