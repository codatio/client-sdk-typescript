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
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.billPayments.create({
  billPayment: {
    accountRef: {
      id: "ebf60c32-1f02-43b7-9d23-67fe1a0cc8df",
      name: "Miss Daisy Willms",
    },
    currency: "provident",
    currencyRate: 4047.74,
    date: "repellendus",
    id: "3d5a8e00-d108-4045-8823-7f342676cffa",
    lines: [
      {
        allocatedOnDate: "alias",
        amount: 7719.31,
        links: [
          {
            amount: 4130.86,
            currencyRate: 2871.41,
            id: "b7c15dfb-ace1-488b-9c4e-e2c8c6ce611f",
            type: BillPaymentLineLinkType.Discount,
          },
        ],
      },
      {
        allocatedOnDate: "vero",
        amount: 6943.94,
        links: [
          {
            amount: 7782.42,
            currencyRate: 4909.66,
            id: "cbdb6eec-7437-48ba-a531-7747dc915ad2",
            type: BillPaymentLineLinkType.ManualJournal,
          },
        ],
      },
      {
        allocatedOnDate: "dolorum",
        amount: 9983.55,
        links: [
          {
            amount: 8473.08,
            currencyRate: 8450.86,
            id: "6723dc0f-5ae2-4f3a-ab70-0878756143f5",
            type: BillPaymentLineLinkType.PaymentOnAccount,
          },
          {
            amount: 4351.42,
            currencyRate: 7876.29,
            id: "98b55554-080d-440b-8acc-6cbd6b5f3ec9",
            type: BillPaymentLineLinkType.Unknown,
          },
        ],
      },
    ],
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "provident",
    note: "Bill Payment against bill c13e37b6-dfaa-4894-b3be-9fe97bda9f44",
    paymentMethodRef: {
      id: "304f926b-ad25-4538-99b4-74b0ed20e562",
      name: "Vickie Welch",
    },
    reference: "autem",
    sourceModifiedDate: "nesciunt",
    supplementalData: {
      content: {
        "animi": {
          "beatae": "ipsa",
          "mollitia": "nam",
          "assumenda": "quo",
        },
        "fuga": {
          "commodi": "fugit",
          "suscipit": "voluptate",
          "nisi": "aliquid",
        },
        "provident": {
          "accusamus": "ab",
          "itaque": "quisquam",
        },
      },
    },
    supplierRef: {
      id: "00221b33-5d89-4acb-becf-da8d0c549ef0",
      supplierName: "ipsum",
    },
    totalAmount: 1329.54,
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  timeoutInMinutes: 367,
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
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.billPayments.delete({
  billPaymentId: "doloremque",
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
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.billPayments.get({
  billPaymentId: "tempora",
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
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
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
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.billPayments.list({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  orderBy: "-modifiedDate",
  page: 1,
  pageSize: 100,
  query: "perspiciatis",
}).then((res: ListBillPaymentsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
