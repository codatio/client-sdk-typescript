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
      id: "aa558a65-e208-4301-aca3-4bb87d4f6212",
      name: "Ms. Kristi Jast",
    },
    currency: "architecto",
    currencyRate: 3766.39,
    customerRef: {
      companyName: "voluptatem",
      id: "6294514c-3db9-4ca9-b38b-d2be87870349",
    },
    date: "adipisci",
    id: "f49aa846-5a32-4832-b9b7-19d1cea673d8",
    lines: [
      {
        allocatedOnDate: "itaque",
        amount: 1984.56,
        links: [
          {
            amount: 1976.2,
            currencyRate: 3400.87,
            id: "e49a3135-778c-4e54-8acb-0e3ea975045b",
            type: PaymentLinkType.Payment,
          },
          {
            amount: 7977.88,
            currencyRate: 9916.87,
            id: "63b21518-6ab5-4e3a-8226-14315d156829",
            type: PaymentLinkType.Refund,
          },
          {
            amount: 9207.5,
            currencyRate: 3778.77,
            id: "1afc7186-ff20-4b7a-b3df-40ca0d7657c1",
            type: PaymentLinkType.Other,
          },
        ],
      },
      {
        allocatedOnDate: "eius",
        amount: 698.78,
        links: [
          {
            amount: 7083.87,
            currencyRate: 9823,
            id: "055271b2-511d-4d60-add1-b28272bc9c32",
            type: PaymentLinkType.Unlinked,
          },
          {
            amount: 1125.17,
            currencyRate: 4058.4,
            id: "97b1880f-cbb2-4b93-815f-670bd1784831",
            type: PaymentLinkType.Other,
          },
          {
            amount: 3516.07,
            currencyRate: 2234.48,
            id: "eeb3b6e2-41c3-4109-9836-63c66dcbb7df",
            type: PaymentLinkType.CreditNote,
          },
        ],
      },
    ],
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "porro",
    note: "soluta",
    paymentMethodRef: {
      id: "09c8b408-e071-4377-8de4-fee101d9780a",
      name: "Laura Schimmel",
    },
    reference: "rerum",
    sourceModifiedDate: "provident",
    supplementalData: {
      content: {
        "perferendis": {
          "accusantium": "possimus",
          "vel": "minus",
        },
        "blanditiis": {
          "quia": "similique",
          "ipsam": "a",
          "alias": "perferendis",
        },
      },
    },
    totalAmount: 1333.46,
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  timeoutInMinutes: 152643,
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
  paymentId: "sit",
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
  query: "esse",
}).then((res: ListPaymentsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
