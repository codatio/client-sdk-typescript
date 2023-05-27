# billPayments

## Overview

Bill payments

### Available Operations

* [create](#create) - Create bill payments
* [delete](#delete) - Delete bill payment
* [get](#get) - Get bill payment
* [getCreateModel](#getcreatemodel) - Get create bill payment model
* [list](#list) - List bill payments

## create

Posts a new bill payment to the accounting package for a given company.

Required data may vary by integration. To see what data to post, first call [Get create bill payment model](https://docs.codat.io/accounting-api#/operations/get-create-billPayments-model).

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=billPayments) to see which integrations support this endpoint.


### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { CreateBillPaymentResponse } from "@codat/accounting/dist/sdk/models/operations";
import { BillPaymentLineLinkType, DataType, PushChangeType, PushOperationStatus } from "@codat/accounting/dist/sdk/models/shared";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.billPayments.create({
  billPayment: {
    accountRef: {
      id: "2af03102-d514-4f4c-86f1-8bf9621a6a4f",
      name: "Tamara O'Kon",
    },
    currency: "eveniet",
    currencyRate: 9351.61,
    date: "velit",
    id: "3d5a8e00-d108-4045-8823-7f342676cffa",
    lines: [
      {
        allocatedOnDate: "eius",
        amount: 7019.78,
        links: [
          {
            amount: 4896.85,
            currencyRate: 3734.49,
            id: "2c65b344-18e3-4bb9-9c8d-975e0e8419d8",
            type: BillPaymentLineLinkType.Discount,
          },
          {
            amount: 5379.46,
            currencyRate: 2649.58,
            id: "f144f3e0-7edc-4c4a-a5f3-cabd905a972e",
            type: BillPaymentLineLinkType.Unknown,
          },
          {
            amount: 3214.73,
            currencyRate: 3927.52,
            id: "728227b2-d309-4470-bf7a-4fa87cf535a6",
            type: BillPaymentLineLinkType.Discount,
          },
          {
            amount: 6578.62,
            currencyRate: 9259.94,
            id: "54ebf60c-321f-4023-b75d-2367fe1a0cc8",
            type: BillPaymentLineLinkType.ManualJournal,
          },
        ],
      },
      {
        allocatedOnDate: "maiores",
        amount: 4857.95,
        links: [
          {
            amount: 9609.33,
            currencyRate: 455.1,
            id: "a396d90c-364b-47c1-9dfb-ace188b1c4ee",
            type: BillPaymentLineLinkType.Unlinked,
          },
          {
            amount: 7726.28,
            currencyRate: 5582.83,
            id: "c6ce611f-eeb1-4c7c-bdb6-eec74378ba25",
            type: BillPaymentLineLinkType.Unlinked,
          },
          {
            amount: 1068.06,
            currencyRate: 4810.42,
            id: "747dc915-ad2c-4af5-9d67-23dc0f5ae2f3",
            type: BillPaymentLineLinkType.PaymentOnAccount,
          },
        ],
      },
      {
        allocatedOnDate: "suscipit",
        amount: 6886.49,
        links: [
          {
            amount: 424.54,
            currencyRate: 201.41,
            id: "87875614-3f5a-46c9-8b55-554080d40bca",
            type: BillPaymentLineLinkType.Refund,
          },
          {
            amount: 7697.89,
            currencyRate: 3947.24,
            id: "cbd6b5f3-ec90-4930-8f92-6bad2553819b",
            type: BillPaymentLineLinkType.Bill,
          },
        ],
      },
      {
        allocatedOnDate: "voluptate",
        amount: 2611.7,
        links: [
          {
            amount: 463.84,
            currencyRate: 9154.08,
            id: "d20e5624-8fff-4639-a910-abdcab626766",
            type: BillPaymentLineLinkType.BillPayment,
          },
          {
            amount: 3857.6,
            currencyRate: 8815.68,
            id: "1ec00221-b335-4d89-acb3-ecfda8d0c549",
            type: BillPaymentLineLinkType.ManualJournal,
          },
          {
            amount: 9380.94,
            currencyRate: 427.63,
            id: "3004978a-61fa-41cf-a068-8f77c1ffc71d",
            type: BillPaymentLineLinkType.ManualJournal,
          },
        ],
      },
    ],
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "fuga",
    note: "Bill Payment against bill c13e37b6-dfaa-4894-b3be-9fe97bda9f44",
    paymentMethodRef: {
      id: "163f2a3c-80a9-47ff-b34c-ddf857a9e618",
      name: "Tonya Sauer",
    },
    reference: "quidem",
    sourceModifiedDate: "explicabo",
    supplementalData: {
      content: {
        "nulla": {
          "natus": "illum",
        },
      },
    },
    supplierRef: {
      id: "fc94d6fe-cd79-4939-8066-a6d2d0003553",
      supplierName: "ratione",
    },
    totalAmount: 1329.54,
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  timeoutInMinutes: 555386,
}).then((res: CreateBillPaymentResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## delete

﻿The _Delete Bill Payments_ endpoint allows you to delete a specified Bill Payment from an accounting platform.

### Process
1. Pass the `{billPaymentId}` to the _Delete Bill Payments_ endpoint and store the `pushOperationKey` returned.
2. Check the status of the delete operation by checking the status of push operation either via
    1. [Push operation webhook](/introduction/webhooks/core-rules-types#push-operation-status-has-changed) (advised),
    2. [Push operation status endpoint](https://docs.codat.io/codat-api#/operations/get-push-operation).

   A `Success` status indicates that the Bill Payment object was deleted from the accounting platform.
3. (Optional) Check that the Bill Payment was deleted from the accounting platform.

### Effect on related objects
Be aware that deleting a Bill Payment from an accounting platform might cause related objects to be modified.

## Integration specifics
Integrations that support soft delete do not permanently delete the object in the accounting platform.

| Integration | Soft Delete | Details                                                                                             |  
|-------------|-------------|-----------------------------------------------------------------------------------------------------|
| Oracle NetSuite   | No          | See [here](/integrations/accounting/netsuite/how-deleting-bill-payments-works) to learn more. |

> **Supported Integrations**
>
> This functionality is currently only supported for our QuickBooks Online abd Oracle NetSuite integrations. Check out our [public roadmap](https://portal.productboard.com/codat/7-public-product-roadmap/tabs/46-accounting-api) to see what we're building next, and to submit ideas for new features.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { DeleteBillPaymentResponse } from "@codat/accounting/dist/sdk/models/operations";
import { DataType, PushChangeType, PushOperationStatus } from "@codat/accounting/dist/sdk/models/shared";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.billPayments.delete({
  billPaymentId: "maxime",
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
}).then((res: DeleteBillPaymentResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## get

﻿Get a bill payment.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { GetBillPaymentsResponse } from "@codat/accounting/dist/sdk/models/operations";
import { BillPaymentLineLinkType } from "@codat/accounting/dist/sdk/models/shared";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.billPayments.get({
  billPaymentId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
}).then((res: GetBillPaymentsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getCreateModel

﻿Get create bill payment model.

> **Supported Integrations**
> 
> Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=billPayments) for integrations that support creating and deleting bill payments.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { GetCreateBillPaymentsModelResponse } from "@codat/accounting/dist/sdk/models/operations";
import { PushOptionType } from "@codat/accounting/dist/sdk/models/shared";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.billPayments.getCreateModel({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
}).then((res: GetCreateBillPaymentsModelResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## list

﻿Gets the latest billPayments for a company, with pagination.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { ListBillPaymentsResponse } from "@codat/accounting/dist/sdk/models/operations";
import { BillPaymentLineLinkType } from "@codat/accounting/dist/sdk/models/shared";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.billPayments.list({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  orderBy: "-modifiedDate",
  page: 1,
  pageSize: 100,
  query: "recusandae",
}).then((res: ListBillPaymentsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
