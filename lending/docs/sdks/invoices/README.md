# Invoices
(*accountsReceivable.invoices*)

## Overview

### Available Operations

* [listReconciled](#listreconciled) - List reconciled invoices
* [list](#list) - List invoices
* [get](#get) - Get invoice
* [downloadPdf](#downloadpdf) - Get invoice as PDF
* [listAttachments](#listattachments) - List invoice attachments
* [getAttachment](#getattachment) - Get invoice attachment
* [downloadAttachment](#downloadattachment) - Download invoice attachment

## listReconciled

Gets a list of invoices linked to the corresponding banking transaction

### Example Usage

```typescript
import { CodatLending } from "@codat/lending";

const codatLending = new CodatLending({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatLending.accountsReceivable.invoices.listReconciled({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    page: 1,
    pageSize: 100,
    query: "id=e3334455-1aed-4e71-ab43-6bccf12092ee",
  });
  
  // Handle the result
  console.log(result)
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CodatLendingCore } from "@codat/lending/core.js";
import { accountsReceivableInvoicesListReconciled } from "@codat/lending/funcs/accountsReceivableInvoicesListReconciled.js";

// Use `CodatLendingCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatLending = new CodatLendingCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await accountsReceivableInvoicesListReconciled(codatLending, {
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    page: 1,
    pageSize: 100,
    query: "id=e3334455-1aed-4e71-ab43-6bccf12092ee",
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
| `request`                                                                                                                                                                      | [operations.ListReconciledInvoicesRequest](../../sdk/models/operations/listreconciledinvoicesrequest.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.EnhancedInvoicesReport](../../sdk/models/shared/enhancedinvoicesreport.md)\>**

### Errors

| Error Object                    | Status Code                     | Content Type                    |
| ------------------------------- | ------------------------------- | ------------------------------- |
| errors.ErrorMessage             | 400,401,402,403,404,429,500,503 | application/json                |
| errors.SDKError                 | 4xx-5xx                         | */*                             |


## list

The *List invoices* endpoint returns a list of [invoices](https://docs.codat.io/lending-api#/schemas/Invoice) for a given company's connection.

[Invoices](https://docs.codat.io/lending-api#/schemas/Invoice) are itemized records of goods sold or services provided to a customer.

Before using this endpoint, you must have [retrieved data for the company](https://docs.codat.io/lending-api#/operations/refresh-company-data).
    
### Useful queries

- Outstanding invoices - `query = amountDue > 0`
- Invoices due after a certain date: `query = dueDate > 2021-01-28`

[Read more about querying](https://docs.codat.io/using-the-api/querying).

### Tips and traps

To access the `paymentAllocations` property, ensure that the `payments` data type is queued and cached in Codat before retrieving `invoices` from Codat's cache.


### Example Usage

```typescript
import { CodatLending } from "@codat/lending";

const codatLending = new CodatLending({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatLending.accountsReceivable.invoices.list({
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
import { CodatLendingCore } from "@codat/lending/core.js";
import { accountsReceivableInvoicesList } from "@codat/lending/funcs/accountsReceivableInvoicesList.js";

// Use `CodatLendingCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatLending = new CodatLendingCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await accountsReceivableInvoicesList(codatLending, {
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
| `request`                                                                                                                                                                      | [operations.ListAccountingInvoicesRequest](../../sdk/models/operations/listaccountinginvoicesrequest.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.AccountingInvoices](../../sdk/models/shared/accountinginvoices.md)\>**

### Errors

| Error Object                        | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.ErrorMessage                 | 400,401,402,403,404,409,429,500,503 | application/json                    |
| errors.SDKError                     | 4xx-5xx                             | */*                                 |


## get

The *Get invoice* endpoint returns a single invoice for a given invoiceId.

[Invoices](https://docs.codat.io/lending-api#/schemas/Invoice) are itemized records of goods sold or services provided to a customer.

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=invoices) for integrations that support getting a specific invoice.

Before using this endpoint, you must have [retrieved data for the company](https://docs.codat.io/lending-api#/operations/refresh-company-data).

### Tips and traps

To access the `paymentAllocations` property, ensure that the `payments` data type is queued and cached in Codat before retrieving `invoices` from Codat's cache.


### Example Usage

```typescript
import { CodatLending } from "@codat/lending";

const codatLending = new CodatLending({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatLending.accountsReceivable.invoices.get({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    invoiceId: "<value>",
  });
  
  // Handle the result
  console.log(result)
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CodatLendingCore } from "@codat/lending/core.js";
import { accountsReceivableInvoicesGet } from "@codat/lending/funcs/accountsReceivableInvoicesGet.js";

// Use `CodatLendingCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatLending = new CodatLendingCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await accountsReceivableInvoicesGet(codatLending, {
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    invoiceId: "<value>",
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
| `request`                                                                                                                                                                      | [operations.GetAccountingInvoiceRequest](../../sdk/models/operations/getaccountinginvoicerequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.AccountingInvoice](../../sdk/models/shared/accountinginvoice.md)\>**

### Errors

| Error Object                    | Status Code                     | Content Type                    |
| ------------------------------- | ------------------------------- | ------------------------------- |
| errors.ErrorMessage             | 401,402,403,404,409,429,500,503 | application/json                |
| errors.SDKError                 | 4xx-5xx                         | */*                             |


## downloadPdf

﻿Download invoice as a pdf.

### Example Usage

```typescript
import { CodatLending } from "@codat/lending";

const codatLending = new CodatLending({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatLending.accountsReceivable.invoices.downloadPdf({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    invoiceId: "<value>",
  });
  
  // Handle the result
  console.log(result)
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CodatLendingCore } from "@codat/lending/core.js";
import { accountsReceivableInvoicesDownloadPdf } from "@codat/lending/funcs/accountsReceivableInvoicesDownloadPdf.js";

// Use `CodatLendingCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatLending = new CodatLendingCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await accountsReceivableInvoicesDownloadPdf(codatLending, {
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    invoiceId: "<value>",
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
| `request`                                                                                                                                                                      | [operations.DownloadAccountingInvoicePdfRequest](../../sdk/models/operations/downloadaccountinginvoicepdfrequest.md)                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[ReadableStream<Uint8Array>](../../models/.md)\>**

### Errors

| Error Object                    | Status Code                     | Content Type                    |
| ------------------------------- | ------------------------------- | ------------------------------- |
| errors.ErrorMessage             | 401,402,403,404,409,429,500,503 | application/json                |
| errors.SDKError                 | 4xx-5xx                         | */*                             |


## listAttachments

The *List invoice attachments* endpoint returns a list of attachments available to download for given `invoiceId`.

[Invoices](https://docs.codat.io/lending-api#/schemas/Invoice) are itemized records of goods sold or services provided to a customer.

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=invoices) for integrations that support listing invoice attachments.


### Example Usage

```typescript
import { CodatLending } from "@codat/lending";

const codatLending = new CodatLending({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatLending.accountsReceivable.invoices.listAttachments({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
    invoiceId: "<value>",
  });
  
  // Handle the result
  console.log(result)
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CodatLendingCore } from "@codat/lending/core.js";
import { accountsReceivableInvoicesListAttachments } from "@codat/lending/funcs/accountsReceivableInvoicesListAttachments.js";

// Use `CodatLendingCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatLending = new CodatLendingCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await accountsReceivableInvoicesListAttachments(codatLending, {
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
    invoiceId: "<value>",
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
| `request`                                                                                                                                                                      | [operations.ListAccountingInvoiceAttachmentsRequest](../../sdk/models/operations/listaccountinginvoiceattachmentsrequest.md)                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.Attachments](../../sdk/models/shared/attachments.md)\>**

### Errors

| Error Object                    | Status Code                     | Content Type                    |
| ------------------------------- | ------------------------------- | ------------------------------- |
| errors.ErrorMessage             | 401,402,403,404,409,429,500,503 | application/json                |
| errors.SDKError                 | 4xx-5xx                         | */*                             |


## getAttachment

The *Get invoice attachment* endpoint returns a specific attachment for a given `invoiceId` and `attachmentId`.

[Invoices](https://docs.codat.io/lending-api#/schemas/Invoice) are itemized records of goods sold or services provided to a customer.

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=invoices) for integrations that support getting an invoice attachment.


### Example Usage

```typescript
import { CodatLending } from "@codat/lending";

const codatLending = new CodatLending({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatLending.accountsReceivable.invoices.getAttachment({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
    invoiceId: "<value>",
    attachmentId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  });
  
  // Handle the result
  console.log(result)
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CodatLendingCore } from "@codat/lending/core.js";
import { accountsReceivableInvoicesGetAttachment } from "@codat/lending/funcs/accountsReceivableInvoicesGetAttachment.js";

// Use `CodatLendingCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatLending = new CodatLendingCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await accountsReceivableInvoicesGetAttachment(codatLending, {
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
    invoiceId: "<value>",
    attachmentId: "8a210b68-6988-11ed-a1eb-0242ac120002",
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
| `request`                                                                                                                                                                      | [operations.GetAccountingInvoiceAttachmentRequest](../../sdk/models/operations/getaccountinginvoiceattachmentrequest.md)                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.AccountingAttachment](../../sdk/models/shared/accountingattachment.md)\>**

### Errors

| Error Object                | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.ErrorMessage         | 401,402,403,404,429,500,503 | application/json            |
| errors.SDKError             | 4xx-5xx                     | */*                         |


## downloadAttachment

The *Download invoice attachment* endpoint downloads a specific attachment for a given `invoiceId` and `attachmentId`.

[Invoices](https://docs.codat.io/lending-api#/schemas/Invoice) are itemized records of goods sold or services provided to a customer.

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=invoices) for integrations that support downloading an invoice attachment.


### Example Usage

```typescript
import { CodatLending } from "@codat/lending";

const codatLending = new CodatLending({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatLending.accountsReceivable.invoices.downloadAttachment({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
    invoiceId: "<value>",
    attachmentId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  });
  
  // Handle the result
  console.log(result)
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CodatLendingCore } from "@codat/lending/core.js";
import { accountsReceivableInvoicesDownloadAttachment } from "@codat/lending/funcs/accountsReceivableInvoicesDownloadAttachment.js";

// Use `CodatLendingCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatLending = new CodatLendingCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await accountsReceivableInvoicesDownloadAttachment(codatLending, {
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
    invoiceId: "<value>",
    attachmentId: "8a210b68-6988-11ed-a1eb-0242ac120002",
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
| `request`                                                                                                                                                                      | [operations.DownloadAccountingInvoiceAttachmentRequest](../../sdk/models/operations/downloadaccountinginvoiceattachmentrequest.md)                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[ReadableStream<Uint8Array>](../../models/.md)\>**

### Errors

| Error Object                | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.ErrorMessage         | 401,402,403,404,429,500,503 | application/json            |
| errors.SDKError             | 4xx-5xx                     | */*                         |
