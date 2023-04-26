# billPayments

## Overview

Bill payments

### Available Operations

* [createBillPayment](#createbillpayment) - Create bill payments
* [deleteBillPayment](#deletebillpayment) - Delete bill payment
* [getBillPayments](#getbillpayments) - Get bill payment
* [getCreateBillPaymentsModel](#getcreatebillpaymentsmodel) - Get create bill payment model
* [listBillPayments](#listbillpayments) - List bill payments

## createBillPayment

Posts a new bill payment to the accounting package for a given company.

Required data may vary by integration. To see what data to post, first call [Get create bill payment model](https://docs.codat.io/accounting-api#/operations/get-create-billPayments-model).

> **Supported Integrations**
> 
> Check out our [Knowledge UI](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=billPayments) for integrations that support creating bill payments.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { CreateBillPaymentRequest, CreateBillPaymentResponse } from "@codat/accounting/dist/sdk/models/operations";
import {
  BillPaymentLineLinkTypeEnum,
  DataTypeEnum,
  PushChangeTypeEnum,
  PushOperationStatusEnum,
} from "@codat/accounting/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: CreateBillPaymentRequest = {
  billPayment: {
    accountRef: {
      id: "b7008787-5614-43f5-a6c9-8b55554080d4",
      name: "Celia Rolfson",
    },
    currency: "impedit",
    currencyRate: 3947.24,
    date: "cumque",
    id: "bd6b5f3e-c909-4304-b926-bad2553819b4",
    lines: [
      {
        allocatedOnDate: "eius",
        amount: 7137.18,
        links: [
          {
            amount: 9154.08,
            currencyRate: 8227.11,
            id: "20e56248-fff6-439a-910a-bdcab6267669",
            type: BillPaymentLineLinkTypeEnum.Other,
          },
        ],
      },
      {
        allocatedOnDate: "accusamus",
        amount: 682.92,
        links: [
          {
            amount: 7903.05,
            currencyRate: 535.29,
            id: "0221b335-d89a-4cb3-acfd-a8d0c549ef03",
            type: BillPaymentLineLinkTypeEnum.Unknown,
          },
          {
            amount: 437.15,
            currencyRate: 2737.32,
            id: "978a61fa-1cf2-4068-8f77-c1ffc71dca16",
            type: BillPaymentLineLinkTypeEnum.Bill,
          },
          {
            amount: 9824.09,
            currencyRate: 1530.97,
            id: "a3c80a97-ff33-44cd-9f85-7a9e61876c6a",
            type: BillPaymentLineLinkTypeEnum.PaymentOnAccount,
          },
          {
            amount: 1265.12,
            currencyRate: 928.51,
            id: "d29dfc94-d6fe-4cd7-9939-0066a6d2d000",
            type: BillPaymentLineLinkTypeEnum.Bill,
          },
        ],
      },
    ],
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "ullam",
    note: "quis",
    paymentMethodRef: {
      id: "338cec08-6fa2-41e9-952c-b3119167b8e3",
      name: "Julian Stanton I",
    },
    reference: "quaerat",
    sourceModifiedDate: "consequatur",
    supplementalData: {
      content: {
        "repellendus": {
          "quibusdam": "consectetur",
          "voluptas": "quaerat",
        },
        "earum": {
          "assumenda": "dolore",
          "enim": "ullam",
          "perspiciatis": "alias",
          "ex": "quibusdam",
        },
        "dicta": {
          "commodi": "neque",
        },
      },
    },
    supplierRef: {
      id: "d48e935c-2c9e-481f-b0be-3e43202d7216",
      supplierName: "ad",
    },
    totalAmount: 4531.98,
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  timeoutInMinutes: 426594,
};

sdk.billPayments.createBillPayment(req).then((res: CreateBillPaymentResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## deleteBillPayment

Deletes a bill payment from the accounting package for a given company.

> **Supported Integrations**
> 
> This functionality is currently only supported for our Oracle NetSuite integration. Check out our [public roadmap](https://portal.productboard.com/codat/7-public-product-roadmap/tabs/46-accounting-api) to see what we're building next, and to submit ideas for new features.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { DeleteBillPaymentRequest, DeleteBillPaymentResponse } from "@codat/accounting/dist/sdk/models/operations";
import { DataTypeEnum, PushChangeTypeEnum, PushOperationStatusEnum } from "@codat/accounting/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: DeleteBillPaymentRequest = {
  billPaymentId: "minima",
  companyId: "sit",
  connectionId: "vel",
};

sdk.billPayments.deleteBillPayment(req).then((res: DeleteBillPaymentResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## getBillPayments

Get a bill payment

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { GetBillPaymentsRequest, GetBillPaymentsResponse } from "@codat/accounting/dist/sdk/models/operations";
import { BillPaymentLineLinkTypeEnum } from "@codat/accounting/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: GetBillPaymentsRequest = {
  billPaymentId: "laboriosam",
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
};

sdk.billPayments.getBillPayments(req).then((res: GetBillPaymentsResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## getCreateBillPaymentsModel

Get create bill payment model.

> **Supported Integrations**
> 
> Check out our [Knowledge UI](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=billPayments) for integrations that support creating and deleting bill payments.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { GetCreateBillPaymentsModelRequest, GetCreateBillPaymentsModelResponse } from "@codat/accounting/dist/sdk/models/operations";
import { PushOptionTypeEnum } from "@codat/accounting/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: GetCreateBillPaymentsModelRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
};

sdk.billPayments.getCreateBillPaymentsModel(req).then((res: GetCreateBillPaymentsModelResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## listBillPayments

Gets the latest billPayments for a company, with pagination

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { ListBillPaymentsRequest, ListBillPaymentsResponse } from "@codat/accounting/dist/sdk/models/operations";
import { BillPaymentLineLinkTypeEnum } from "@codat/accounting/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: ListBillPaymentsRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  orderBy: "-modifiedDate",
  page: 1,
  pageSize: 100,
  query: "quaerat",
};

sdk.billPayments.listBillPayments(req).then((res: ListBillPaymentsResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```
