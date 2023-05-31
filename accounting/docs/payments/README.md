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
      id: "def9c765-dfd7-4354-a5cb-94977017a262",
      name: "Monica Reinger",
    },
    currency: "eum",
    currencyRate: 7979.17,
    customerRef: {
      companyName: "laborum",
      id: "4e999828-79de-4fc0-b239-606cf90ad989",
    },
    date: "recusandae",
    id: "1a34715a-cda0-444f-aaed-6e13a620e2e9",
    lines: [
      {
        allocatedOnDate: "totam",
        amount: 7539.55,
        links: [
          {
            amount: 3390.23,
            currencyRate: 7169.63,
            id: "0486cf39-8a0b-4374-a17d-d95ce3044be4",
            type: PaymentLinkType.Discount,
          },
          {
            amount: 7139.18,
            currencyRate: 2076.75,
            id: "b31cb503-c314-40d8-b72c-535e1dd6bf64",
            type: PaymentLinkType.PaymentOnAccount,
          },
        ],
      },
    ],
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "non",
    note: "quis",
    paymentMethodRef: {
      id: "4e9831e7-95f0-4e57-b54e-bf2d2b46097e",
      name: "Carlton Grady",
    },
    reference: "voluptatum",
    sourceModifiedDate: "quibusdam",
    supplementalData: {
      content: {
        "earum": {
          "sit": "cumque",
          "quibusdam": "quibusdam",
        },
        "inventore": {
          "enim": "perferendis",
          "soluta": "tenetur",
          "ipsam": "dolorum",
        },
        "ipsa": {
          "soluta": "impedit",
          "quas": "facilis",
          "quam": "blanditiis",
          "commodi": "eaque",
        },
        "similique": {
          "voluptates": "similique",
          "autem": "nobis",
          "laboriosam": "non",
          "corporis": "ab",
        },
      },
    },
    totalAmount: 1991.9,
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  timeoutInMinutes: 179221,
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
  paymentId: "repellendus",
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
  query: "ipsam",
}).then((res: ListPaymentsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
