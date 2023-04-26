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

> **Supported Integrations**
> 
> Check out our [Knowledge UI](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=payments) for integrations that support creating payments.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { CreatePaymentRequest, CreatePaymentResponse } from "@codat/accounting/dist/sdk/models/operations";
import { DataTypeEnum, PaymentLinkTypeEnum, PushChangeTypeEnum, PushOperationStatusEnum } from "@codat/accounting/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: CreatePaymentRequest = {
  payment: {
    accountRef: {
      id: "2de7b356-2201-4a6a-ab4a-e7b1a5b908d4",
      name: "Jeffery Aufderhar",
    },
    currency: "quae",
    currencyRate: 6765.76,
    customerRef: {
      companyName: "fuga",
      id: "35d4a839-f03b-4ab7-bb91-8f0313984507",
    },
    date: "officiis",
    id: "0e39c7e2-3ecb-4060-8652-e23a3d6c657e",
    lines: [
      {
        allocatedOnDate: "quibusdam",
        amount: 8936.05,
        links: [
          {
            amount: 9387.2,
            currencyRate: 4758.76,
            id: "f002d198-6aa9-49d3-a1d3-2329e45837e8",
            type: PaymentLinkTypeEnum.Discount,
          },
          {
            amount: 1859.89,
            currencyRate: 6377.7,
            id: "d6bb10e2-55fd-4c48-8d6e-3308675cbf18",
            type: PaymentLinkTypeEnum.CreditNote,
          },
          {
            amount: 5604.72,
            currencyRate: 3424.33,
            id: "6a7e82cd-f9d0-4fc2-82c6-66af3c3f5589",
            type: PaymentLinkTypeEnum.PaymentOnAccount,
          },
        ],
      },
      {
        allocatedOnDate: "accusamus",
        amount: 6668.05,
        links: [
          {
            amount: 8213.45,
            currencyRate: 1736.08,
            id: "64e41e2c-a848-422e-913f-6d9d2ad37c30",
            type: PaymentLinkTypeEnum.Payment,
          },
          {
            amount: 5821.15,
            currencyRate: 328.36,
            id: "77c10b68-7921-463e-a7d4-8860543c0a30",
            type: PaymentLinkTypeEnum.Invoice,
          },
        ],
      },
      {
        allocatedOnDate: "excepturi",
        amount: 7879.41,
        links: [
          {
            amount: 8004.56,
            currencyRate: 9757.5,
            id: "6c0276e7-b21b-4ad9-8d27-43fd6c2a10e6",
            type: PaymentLinkTypeEnum.ManualJournal,
          },
        ],
      },
    ],
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "odit",
    note: "natus",
    paymentMethodRef: {
      id: "78ec256a-5b09-4227-bcc4-7996c977bbc5",
      name: "Jeannie Dibbert",
    },
    reference: "eos",
    sourceModifiedDate: "quos",
    supplementalData: {
      content: {
        "blanditiis": {
          "ipsa": "eaque",
          "quo": "ad",
        },
        "atque": {
          "eum": "iusto",
          "facere": "ea",
          "sequi": "voluptates",
          "tempora": "similique",
        },
        "officia": {
          "laboriosam": "quos",
          "aliquam": "vel",
        },
      },
    },
    totalAmount: 2546.16,
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  timeoutInMinutes: 321921,
};

sdk.payments.create(req).then((res: CreatePaymentResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## get

Get payment

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { GetPaymentRequest, GetPaymentResponse } from "@codat/accounting/dist/sdk/models/operations";
import { PaymentLinkTypeEnum } from "@codat/accounting/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: GetPaymentRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  paymentId: "odio",
};

sdk.payments.get(req).then((res: GetPaymentResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## getCreateModel

Get create payment model. Returns the expected data for the request payload.

See the examples for integration-specific indicative models.

> **Supported Integrations**
> 
> Check out our [Knowledge UI](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=payments) for integrations that support creating payments.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { GetCreatePaymentsModelRequest, GetCreatePaymentsModelResponse } from "@codat/accounting/dist/sdk/models/operations";
import { PushOptionTypeEnum } from "@codat/accounting/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: GetCreatePaymentsModelRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
};

sdk.payments.getCreateModel(req).then((res: GetCreatePaymentsModelResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## list

Gets the latest payments for a company, with pagination

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { ListPaymentsRequest, ListPaymentsResponse } from "@codat/accounting/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: ListPaymentsRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  orderBy: "-modifiedDate",
  page: 1,
  pageSize: 100,
  query: "omnis",
};

sdk.payments.list(req).then((res: ListPaymentsResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```
