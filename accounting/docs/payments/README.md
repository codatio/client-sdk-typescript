# payments

## Overview

Payments

### Available Operations

* [createPayment](#createpayment) - Create payment
* [getCreatePaymentsModel](#getcreatepaymentsmodel) - Get create payment model
* [getPayment](#getpayment) - Get payment
* [listPayments](#listpayments) - List payments

## createPayment

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
      id: "cf63b215-186a-4b5e-ba02-2614315d1568",
      name: "Violet McClure",
    },
    currency: "architecto",
    currencyRate: 6396.52,
    customerRef: {
      companyName: "reiciendis",
      id: "c7186ff2-0b7a-473d-b40c-a0d7657c1641",
    },
    date: "distinctio",
    id: "bf055271-b251-41dd-a06d-d1b28272bc9c",
    lines: [
      {
        allocatedOnDate: "magni",
        amount: 1257.69,
        links: [
          {
            amount: 4058.4,
            currencyRate: 5724.81,
            id: "7b1880fc-bb2b-493c-95f6-70bd17848316",
            type: PaymentLinkTypeEnum.CreditNote,
          },
        ],
      },
    ],
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "dolor",
    note: "debitis",
    paymentMethodRef: {
      id: "eb3b6e24-1c31-4099-8366-3c66dcbb7df6",
      name: "Gerardo Baumbach",
    },
    reference: "totam",
    sourceModifiedDate: "distinctio",
    supplementalData: {
      content: {
        "aperiam": {
          "recusandae": "eaque",
          "nihil": "dicta",
          "adipisci": "molestiae",
        },
        "in": {
          "repellendus": "saepe",
          "non": "a",
        },
      },
    },
    totalAmount: 9140.93,
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  timeoutInMinutes: 878742,
};

sdk.payments.createPayment(req).then((res: CreatePaymentResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## getCreatePaymentsModel

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

sdk.payments.getCreatePaymentsModel(req).then((res: GetCreatePaymentsModelResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## getPayment

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
  paymentId: "quae",
};

sdk.payments.getPayment(req).then((res: GetPaymentResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## listPayments

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
  query: "doloremque",
};

sdk.payments.listPayments(req).then((res: ListPaymentsResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```
