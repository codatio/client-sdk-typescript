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

> **Supported Integrations**
> 
> Check out our [Knowledge UI](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=billPayments) for integrations that support creating bill payments.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { CreateBillPaymentResponse } from "@codat/accounting/dist/sdk/models/operations";
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

sdk.billPayments.create({
  billPayment: {
    accountRef: {
      id: "57eb809e-2810-4331-b398-1d4c700b607f",
      name: "Francis McKenzie",
    },
    currency: "dignissimos",
    currencyRate: 2358.34,
    date: "soluta",
    id: "3d5a8e00-d108-4045-8823-7f342676cffa",
    lines: [
      {
        allocatedOnDate: "temporibus",
        amount: 6396.22,
        links: [
          {
            amount: 9485.41,
            currencyRate: 1339.49,
            id: "ceda7e23-f225-4741-9faf-4b7544e472e8",
            type: BillPaymentLineLinkTypeEnum.Unknown,
          },
        ],
      },
      {
        allocatedOnDate: "odit",
        amount: 5358.02,
        links: [
          {
            amount: 4527.3,
            currencyRate: 6267.07,
            id: "5b40463a-7d57-45f1-800e-764ad7334ec1",
            type: BillPaymentLineLinkTypeEnum.Refund,
          },
          {
            amount: 4813.75,
            currencyRate: 5580.51,
            id: "1b36a080-88d1-400e-bada-200ef0422eb2",
            type: BillPaymentLineLinkTypeEnum.Unlinked,
          },
        ],
      },
      {
        allocatedOnDate: "aliquid",
        amount: 2646.49,
        links: [
          {
            amount: 9750.95,
            currencyRate: 5629.48,
            id: "ab8366c7-23ff-4da9-a06b-ee4825c1fc0e",
            type: BillPaymentLineLinkTypeEnum.Unlinked,
          },
          {
            amount: 1002.51,
            currencyRate: 3178.98,
            id: "c80bff91-8544-4ec4-adef-cce8f1977773",
            type: BillPaymentLineLinkTypeEnum.ManualJournal,
          },
          {
            amount: 4235.88,
            currencyRate: 2086.83,
            id: "562a7b40-8f05-4e3d-88fd-af313a1f5fd9",
            type: BillPaymentLineLinkTypeEnum.Bill,
          },
          {
            amount: 1280.21,
            currencyRate: 3684.91,
            id: "9c0b36f2-5ea9-444f-bb75-6c11f6c37a51",
            type: BillPaymentLineLinkTypeEnum.Unlinked,
          },
        ],
      },
    ],
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "aliquid",
    note: "Bill Payment against bill c13e37b6-dfaa-4894-b3be-9fe97bda9f44",
    paymentMethodRef: {
      id: "243835bb-c05a-423a-85ce-fc5fde10a0ce",
      name: "Mildred Kautzer",
    },
    reference: "ullam",
    sourceModifiedDate: "architecto",
    supplementalData: {
      content: {
        "perferendis": {
          "provident": "cumque",
        },
      },
    },
    supplierRef: {
      id: "6dc5e347-6279-49bf-bbe6-949fb2bb4eca",
      supplierName: "saepe",
    },
    totalAmount: 1329.54,
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  timeoutInMinutes: 423054,
}).then((res: CreateBillPaymentResponse | AxiosError) => {
  if (res instanceof CreateBillPaymentResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## delete

Deletes a bill payment from the accounting package for a given company.

> **Supported Integrations**
> 
> This functionality is currently only supported for our Oracle NetSuite integration. Check out our [public roadmap](https://portal.productboard.com/codat/7-public-product-roadmap/tabs/46-accounting-api) to see what we're building next, and to submit ideas for new features.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { DeleteBillPaymentResponse } from "@codat/accounting/dist/sdk/models/operations";
import { DataTypeEnum, PushChangeTypeEnum, PushOperationStatusEnum } from "@codat/accounting/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.billPayments.delete({
  billPaymentId: "quo",
  companyId: "nesciunt",
  connectionId: "illum",
}).then((res: DeleteBillPaymentResponse | AxiosError) => {
  if (res instanceof DeleteBillPaymentResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## get

Get a bill payment

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { GetBillPaymentsResponse } from "@codat/accounting/dist/sdk/models/operations";
import { BillPaymentLineLinkTypeEnum } from "@codat/accounting/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.billPayments.get({
  billPaymentId: "nemo",
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
}).then((res: GetBillPaymentsResponse | AxiosError) => {
  if (res instanceof GetBillPaymentsResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## getCreateModel

Get create bill payment model.

> **Supported Integrations**
> 
> Check out our [Knowledge UI](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=billPayments) for integrations that support creating and deleting bill payments.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { GetCreateBillPaymentsModelResponse } from "@codat/accounting/dist/sdk/models/operations";
import { PushOptionTypeEnum } from "@codat/accounting/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.billPayments.getCreateModel({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
}).then((res: GetCreateBillPaymentsModelResponse | AxiosError) => {
  if (res instanceof GetCreateBillPaymentsModelResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## list

Gets the latest billPayments for a company, with pagination

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { ListBillPaymentsResponse } from "@codat/accounting/dist/sdk/models/operations";
import { BillPaymentLineLinkTypeEnum } from "@codat/accounting/dist/sdk/models/shared";
import { AxiosError } from "axios";

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
  query: "illum",
}).then((res: ListBillPaymentsResponse | AxiosError) => {
  if (res instanceof ListBillPaymentsResponse && res.statusCode == 200) {
    // handle response
  }
});
```
