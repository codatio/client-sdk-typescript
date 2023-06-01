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
      id: "8502a55e-7f73-4bc8-85e3-20a319f4badf",
      name: "Jesus Kreiger",
    },
    currency: "animi",
    currencyRate: 5287.42,
    date: "aliquid",
    id: "3d5a8e00-d108-4045-8823-7f342676cffa",
    lines: [
      {
        allocatedOnDate: "facilis",
        amount: 7594.51,
        links: [
          {
            amount: 1782.01,
            currencyRate: 2993.79,
            id: "26665816-ddca-48ef-91fc-b4c593ec12cd",
            type: BillPaymentLineLinkType.PaymentOnAccount,
          },
          {
            amount: 6615.78,
            currencyRate: 8409.92,
            id: "0ec7afed-bd80-4df4-88a4-7f9390c58880",
            type: BillPaymentLineLinkType.BillPayment,
          },
        ],
      },
      {
        allocatedOnDate: "quas",
        amount: 2184.13,
        links: [
          {
            amount: 6834.9,
            currencyRate: 7047.32,
            id: "f9ef3ffd-d9f7-4f07-9af4-d35724cdb0f4",
            type: BillPaymentLineLinkType.ManualJournal,
          },
          {
            amount: 1776.51,
            currencyRate: 5556.63,
            id: "1187d568-44ed-4ed8-9a90-65e628bdfc20",
            type: BillPaymentLineLinkType.Bill,
          },
          {
            amount: 1553.71,
            currencyRate: 6937.24,
            id: "6c879923-b7e1-4358-8f7a-e12c6891f82c",
            type: BillPaymentLineLinkType.Discount,
          },
          {
            amount: 1171.42,
            currencyRate: 810.53,
            id: "57172305-377d-4cfa-89df-975e35668609",
            type: BillPaymentLineLinkType.Unlinked,
          },
        ],
      },
    ],
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "itaque",
    note: "Bill Payment against bill c13e37b6-dfaa-4894-b3be-9fe97bda9f44",
    paymentMethodRef: {
      id: "9c3ddc5f-111d-4ea1-826d-541a4d190feb",
      name: "Evelyn Kuhlman MD",
    },
    reference: "placeat",
    sourceModifiedDate: "quod",
    supplementalData: {
      content: {
        "sit": {
          "distinctio": "distinctio",
          "assumenda": "illum",
          "soluta": "magnam",
          "laudantium": "tempora",
        },
        "esse": {
          "corrupti": "reiciendis",
        },
        "facilis": {
          "repudiandae": "amet",
          "natus": "ab",
        },
        "officiis": {
          "rerum": "placeat",
          "ab": "ad",
        },
      },
    },
    supplierRef: {
      id: "8c4c4e54-599e-4a34-a260-e9b200ce78a1",
      supplierName: "expedita",
    },
    totalAmount: 1329.54,
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  timeoutInMinutes: 842921,
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
  billPaymentId: "quos",
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
  billPaymentId: "maiores",
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
  query: "quidem",
}).then((res: ListBillPaymentsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
