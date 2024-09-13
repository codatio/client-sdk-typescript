# BillCreditNotes
(*billCreditNotes*)

## Overview

Get, create, and update Bill credit notes.

### Available Operations

* [list](#list) - List bill credit notes
* [get](#get) - Get bill credit note
* [getCreateUpdateModel](#getcreateupdatemodel) - Get create/update bill credit note model
* [create](#create) - Create bill credit note
* [update](#update) - Update bill credit note

## list

The *List bill credit notes* endpoint returns a list of [bill credit notes](https://docs.codat.io/sync-for-payables-api#/schemas/BillCreditNote) for a given company's connection.

[Bill credit notes](https://docs.codat.io/sync-for-payables-api#/schemas/BillCreditNote) are issued by a supplier for the purpose of recording credit.

Before using this endpoint, you must have [retrieved data for the company](https://docs.codat.io/sync-for-payables-api#/operations/refresh-company-data).
    

### Example Usage

```typescript
import { CodatSyncPayables } from "@codat/sync-for-payables-version-1";

const codatSyncPayables = new CodatSyncPayables({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatSyncPayables.billCreditNotes.list({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    page: 1,
    pageSize: 100,
    query: "id=e3334455-1aed-4e71-ab43-6bccf12092ee",
    orderBy: "-modifiedDate",
  });
  
  // Handle the result
  console.log(result)
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CodatSyncPayablesCore } from "@codat/sync-for-payables-version-1/core.js";
import { billCreditNotesList } from "@codat/sync-for-payables-version-1/funcs/billCreditNotesList.js";

// Use `CodatSyncPayablesCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatSyncPayables = new CodatSyncPayablesCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await billCreditNotesList(codatSyncPayables, {
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    page: 1,
    pageSize: 100,
    query: "id=e3334455-1aed-4e71-ab43-6bccf12092ee",
    orderBy: "-modifiedDate",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListBillCreditNotesRequest](../../sdk/models/operations/listbillcreditnotesrequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.BillCreditNotes](../../sdk/models/shared/billcreditnotes.md)\>**

### Errors

| Error Object                        | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.ErrorMessage                 | 400,401,402,403,404,409,429,500,503 | application/json                    |
| errors.SDKError                     | 4xx-5xx                             | */*                                 |


## get

The *Get bill credit note* endpoint returns a single bill credit note for a given `billCreditNoteId`.

[Bill credit notes](https://docs.codat.io/sync-for-payables-api#/schemas/BillCreditNote) are issued by a supplier for the purpose of recording credit.

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=billCreditNotes) for integrations that support getting a specific bill credit note.

Before using this endpoint, you must have [retrieved data for the company](https://docs.codat.io/sync-for-payables-api#/operations/refresh-company-data).


### Example Usage

```typescript
import { CodatSyncPayables } from "@codat/sync-for-payables-version-1";

const codatSyncPayables = new CodatSyncPayables({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatSyncPayables.billCreditNotes.get({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    billCreditNoteId: "<value>",
  });
  
  // Handle the result
  console.log(result)
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CodatSyncPayablesCore } from "@codat/sync-for-payables-version-1/core.js";
import { billCreditNotesGet } from "@codat/sync-for-payables-version-1/funcs/billCreditNotesGet.js";

// Use `CodatSyncPayablesCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatSyncPayables = new CodatSyncPayablesCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await billCreditNotesGet(codatSyncPayables, {
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    billCreditNoteId: "<value>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetBillCreditNoteRequest](../../sdk/models/operations/getbillcreditnoterequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.BillCreditNote](../../sdk/models/shared/billcreditnote.md)\>**

### Errors

| Error Object                    | Status Code                     | Content Type                    |
| ------------------------------- | ------------------------------- | ------------------------------- |
| errors.ErrorMessage             | 401,402,403,404,409,429,500,503 | application/json                |
| errors.SDKError                 | 4xx-5xx                         | */*                             |


## getCreateUpdateModel

The *Get create/update bill credit note model* endpoint returns the expected data for the request payload when creating and updating a [bill credit note](https://docs.codat.io/sync-for-payables-api#/schemas/BillCreditNote) for a given company and integration.

[Bill credit notes](https://docs.codat.io/sync-for-payables-api#/schemas/BillCreditNote) are issued by a supplier for the purpose of recording credit.

**Integration-specific behaviour**

See the *response examples* for integration-specific indicative models.

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=billCreditNotes) for integrations that support creating and updating a bill credit note.


### Example Usage

```typescript
import { CodatSyncPayables } from "@codat/sync-for-payables-version-1";

const codatSyncPayables = new CodatSyncPayables({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatSyncPayables.billCreditNotes.getCreateUpdateModel({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  });
  
  // Handle the result
  console.log(result)
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CodatSyncPayablesCore } from "@codat/sync-for-payables-version-1/core.js";
import { billCreditNotesGetCreateUpdateModel } from "@codat/sync-for-payables-version-1/funcs/billCreditNotesGetCreateUpdateModel.js";

// Use `CodatSyncPayablesCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatSyncPayables = new CodatSyncPayablesCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await billCreditNotesGetCreateUpdateModel(codatSyncPayables, {
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetCreateUpdateBillCreditNoteModelRequest](../../sdk/models/operations/getcreateupdatebillcreditnotemodelrequest.md)                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.PushOption](../../sdk/models/shared/pushoption.md)\>**

### Errors

| Error Object                | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.ErrorMessage         | 401,402,403,404,429,500,503 | application/json            |
| errors.SDKError             | 4xx-5xx                     | */*                         |


## create

The *Create bill credit note* endpoint creates a new [bill credit note](https://docs.codat.io/sync-for-payables-api#/schemas/BillCreditNote) for a given company's connection.

[Bill credit notes](https://docs.codat.io/sync-for-payables-api#/schemas/BillCreditNote) are issued by a supplier for the purpose of recording credit.

**Integration-specific behaviour**

Required data may vary by integration. To see what data to post, first call [Get create/update bill credit note model](https://docs.codat.io/sync-for-payables-api#/operations/get-create-update-billCreditNotes-model).

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=billCreditNotes) for integrations that support creating a bill credit note.


### Example Usage

```typescript
import { CodatSyncPayables } from "@codat/sync-for-payables-version-1";
import { Decimal } from "@codat/sync-for-payables-version-1/sdk/types";

const codatSyncPayables = new CodatSyncPayables({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatSyncPayables.billCreditNotes.create({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
    billCreditNote: {
      modifiedDate: "2022-10-23T00:00:00Z",
      sourceModifiedDate: "2022-10-23T00:00:00Z",
      id: "1509398f-98e2-436d-8a5d-c042e0c74ffc",
      billCreditNoteNumber: "309",
      supplierRef: {
        id: "87",
        supplierName: "Ankunding Inc",
      },
      withholdingTax: [
        {
          name: "<value>",
          amount: new Decimal("4865.89"),
        },
      ],
      totalAmount: new Decimal("100"),
      totalDiscount: new Decimal("0"),
      subTotal: new Decimal("100"),
      totalTaxAmount: new Decimal("0"),
      discountPercentage: new Decimal("0"),
      remainingCredit: new Decimal("100"),
      status: "Submitted",
      issueDate: "2023-04-20T00:00:00",
      allocatedOnDate: "2022-10-23T00:00:00Z",
      currency: "GBP",
      currencyRate: new Decimal("1.242097"),
      lineItems: [
  
      ],
      paymentAllocations: [
        {
          payment: {
            currency: "USD",
            paidOnDate: "2022-10-23T00:00:00Z",
          },
          allocation: {
            currency: "GBP",
            allocatedOnDate: "2022-10-23T00:00:00Z",
          },
        },
      ],
      createdFromRefs: [
        {
          dataType: "transfer",
        },
      ],
      note: "Bill Credit Note with 1 line items, totaling 805.78",
    },
  });
  
  // Handle the result
  console.log(result)
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CodatSyncPayablesCore } from "@codat/sync-for-payables-version-1/core.js";
import { billCreditNotesCreate } from "@codat/sync-for-payables-version-1/funcs/billCreditNotesCreate.js";
import { Decimal } from "@codat/sync-for-payables-version-1/sdk/types";

// Use `CodatSyncPayablesCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatSyncPayables = new CodatSyncPayablesCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await billCreditNotesCreate(codatSyncPayables, {
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
    billCreditNote: {
      modifiedDate: "2022-10-23T00:00:00Z",
      sourceModifiedDate: "2022-10-23T00:00:00Z",
      id: "1509398f-98e2-436d-8a5d-c042e0c74ffc",
      billCreditNoteNumber: "309",
      supplierRef: {
        id: "87",
        supplierName: "Ankunding Inc",
      },
      withholdingTax: [
        {
          name: "<value>",
          amount: new Decimal("8165.88"),
        },
      ],
      totalAmount: new Decimal("100"),
      totalDiscount: new Decimal("0"),
      subTotal: new Decimal("100"),
      totalTaxAmount: new Decimal("0"),
      discountPercentage: new Decimal("0"),
      remainingCredit: new Decimal("100"),
      status: "Submitted",
      issueDate: "2023-04-20T00:00:00",
      allocatedOnDate: "2022-10-23T00:00:00Z",
      currency: "GBP",
      currencyRate: new Decimal("1.242097"),
      lineItems: [
  
      ],
      paymentAllocations: [
        {
          payment: {
            currency: "USD",
            paidOnDate: "2022-10-23T00:00:00Z",
          },
          allocation: {
            currency: "EUR",
            allocatedOnDate: "2022-10-23T00:00:00Z",
          },
        },
      ],
      createdFromRefs: [
        {
          dataType: "invoice",
        },
      ],
      note: "Bill Credit Note with 1 line items, totaling 805.78",
    },
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateBillCreditNoteRequest](../../sdk/models/operations/createbillcreditnoterequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.CreateBillCreditNoteResponse](../../sdk/models/shared/createbillcreditnoteresponse.md)\>**

### Errors

| Error Object                    | Status Code                     | Content Type                    |
| ------------------------------- | ------------------------------- | ------------------------------- |
| errors.ErrorMessage             | 400,401,402,403,404,429,500,503 | application/json                |
| errors.SDKError                 | 4xx-5xx                         | */*                             |


## update

The *Update bill credit note* endpoint updates an existing [bill credit note](https://docs.codat.io/sync-for-payables-api#/schemas/BillCreditNote) for a given company's connection.

[Bill credit notes](https://docs.codat.io/sync-for-payables-api#/schemas/BillCreditNote) are issued by a supplier for the purpose of recording credit.

**Integration-specific behaviour**

Required data may vary by integration. To see what data to post, first call [Get create/update bill credit note model](https://docs.codat.io/sync-for-payables-api#/operations/get-create-update-billCreditNotes-model).

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=billCreditNotes) for integrations that support creating a bill credit note.


### Example Usage

```typescript
import { CodatSyncPayables } from "@codat/sync-for-payables-version-1";
import { Decimal } from "@codat/sync-for-payables-version-1/sdk/types";

const codatSyncPayables = new CodatSyncPayables({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatSyncPayables.billCreditNotes.update({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
    billCreditNoteId: "<value>",
    billCreditNote: {
      modifiedDate: "2022-10-23T00:00:00Z",
      sourceModifiedDate: "2022-10-23T00:00:00Z",
      id: "6a0e9dfb-87b0-47d3-aaaf-9753ae9e757d",
      billCreditNoteNumber: "14763237",
      supplierRef: {
        id: "67C6A7A1-5E84-4AC4-B950-24A114E379D0",
        supplierName: "Chin's Gas and Oil",
      },
      totalAmount: new Decimal("693"),
      totalDiscount: new Decimal("0"),
      subTotal: new Decimal("805.78"),
      totalTaxAmount: new Decimal("0"),
      discountPercentage: new Decimal("0"),
      remainingCredit: new Decimal("693"),
      status: "Submitted",
      issueDate: "2019-02-18T16:03:07.268Z",
      allocatedOnDate: "2022-10-23T00:00:00Z",
      currency: "USD",
      lineItems: [
  
      ],
      paymentAllocations: [
        {
          payment: {
            currency: "GBP",
            paidOnDate: "2022-10-23T00:00:00Z",
          },
          allocation: {
            currency: "EUR",
            allocatedOnDate: "2022-10-23T00:00:00Z",
          },
        },
      ],
      createdFromRefs: [
        {
          dataType: "accountTransaction",
        },
      ],
      note: "Track separately",
    },
  });
  
  // Handle the result
  console.log(result)
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CodatSyncPayablesCore } from "@codat/sync-for-payables-version-1/core.js";
import { billCreditNotesUpdate } from "@codat/sync-for-payables-version-1/funcs/billCreditNotesUpdate.js";
import { Decimal } from "@codat/sync-for-payables-version-1/sdk/types";

// Use `CodatSyncPayablesCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatSyncPayables = new CodatSyncPayablesCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await billCreditNotesUpdate(codatSyncPayables, {
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
    billCreditNoteId: "<value>",
    billCreditNote: {
      modifiedDate: "2022-10-23T00:00:00Z",
      sourceModifiedDate: "2022-10-23T00:00:00Z",
      id: "6a0e9dfb-87b0-47d3-aaaf-9753ae9e757d",
      billCreditNoteNumber: "14763237",
      supplierRef: {
        id: "67C6A7A1-5E84-4AC4-B950-24A114E379D0",
        supplierName: "Chin's Gas and Oil",
      },
      totalAmount: new Decimal("693"),
      totalDiscount: new Decimal("0"),
      subTotal: new Decimal("805.78"),
      totalTaxAmount: new Decimal("0"),
      discountPercentage: new Decimal("0"),
      remainingCredit: new Decimal("693"),
      status: "Submitted",
      issueDate: "2019-02-18T16:03:07.268Z",
      allocatedOnDate: "2022-10-23T00:00:00Z",
      currency: "USD",
      lineItems: [
  
      ],
      paymentAllocations: [
        {
          payment: {
            currency: "EUR",
            paidOnDate: "2022-10-23T00:00:00Z",
          },
          allocation: {
            currency: "USD",
            allocatedOnDate: "2022-10-23T00:00:00Z",
          },
        },
      ],
      createdFromRefs: [
        {
          dataType: "invoice",
        },
      ],
      note: "Track separately",
    },
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateBillCreditNoteRequest](../../sdk/models/operations/updatebillcreditnoterequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.UpdateBillCreditNoteResponse](../../sdk/models/shared/updatebillcreditnoteresponse.md)\>**

### Errors

| Error Object                    | Status Code                     | Content Type                    |
| ------------------------------- | ------------------------------- | ------------------------------- |
| errors.ErrorMessage             | 400,401,402,403,404,429,500,503 | application/json                |
| errors.SDKError                 | 4xx-5xx                         | */*                             |
