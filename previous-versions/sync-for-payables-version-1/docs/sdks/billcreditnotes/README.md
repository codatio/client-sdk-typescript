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

<!-- UsageSnippet language="typescript" operationID="list-bill-credit-notes" method="get" path="/companies/{companyId}/data/billCreditNotes" -->
```typescript
import { CodatSyncPayables } from "@codat/sync-for-payables-version-1";

const codatSyncPayables = new CodatSyncPayables({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatSyncPayables.billCreditNotes.list({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    query: "id=e3334455-1aed-4e71-ab43-6bccf12092ee",
    orderBy: "-modifiedDate",
  });

  console.log(result);
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
    query: "id=e3334455-1aed-4e71-ab43-6bccf12092ee",
    orderBy: "-modifiedDate",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("billCreditNotesList failed:", res.error);
  }
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

| Error Type                        | Status Code                       | Content Type                      |
| --------------------------------- | --------------------------------- | --------------------------------- |
| errors.ErrorMessage               | 400, 401, 402, 403, 404, 409, 429 | application/json                  |
| errors.ErrorMessage               | 500, 503                          | application/json                  |
| errors.SDKError                   | 4XX, 5XX                          | \*/\*                             |

## get

The *Get bill credit note* endpoint returns a single bill credit note for a given `billCreditNoteId`.

[Bill credit notes](https://docs.codat.io/sync-for-payables-api#/schemas/BillCreditNote) are issued by a supplier for the purpose of recording credit.

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=billCreditNotes) for integrations that support getting a specific bill credit note.

Before using this endpoint, you must have [retrieved data for the company](https://docs.codat.io/sync-for-payables-api#/operations/refresh-company-data).


### Example Usage

<!-- UsageSnippet language="typescript" operationID="get-bill-credit-note" method="get" path="/companies/{companyId}/data/billCreditNotes/{billCreditNoteId}" -->
```typescript
import { CodatSyncPayables } from "@codat/sync-for-payables-version-1";

const codatSyncPayables = new CodatSyncPayables({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatSyncPayables.billCreditNotes.get({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    billCreditNoteId: "13d946f0-c5d5-42bc-b092-97ece17923ab",
  });

  console.log(result);
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
    billCreditNoteId: "13d946f0-c5d5-42bc-b092-97ece17923ab",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("billCreditNotesGet failed:", res.error);
  }
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

| Error Type                   | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| errors.ErrorMessage          | 401, 402, 403, 404, 409, 429 | application/json             |
| errors.ErrorMessage          | 500, 503                     | application/json             |
| errors.SDKError              | 4XX, 5XX                     | \*/\*                        |

## getCreateUpdateModel

The *Get create/update bill credit note model* endpoint returns the expected data for the request payload when creating and updating a [bill credit note](https://docs.codat.io/sync-for-payables-api#/schemas/BillCreditNote) for a given company and integration.

[Bill credit notes](https://docs.codat.io/sync-for-payables-api#/schemas/BillCreditNote) are issued by a supplier for the purpose of recording credit.

**Integration-specific behavior**

See the *response examples* for integration-specific indicative models.

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=billCreditNotes) for integrations that support creating and updating a bill credit note.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="get-create-update-billCreditNote-model" method="get" path="/companies/{companyId}/connections/{connectionId}/options/billCreditNotes" -->
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

  console.log(result);
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
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("billCreditNotesGetCreateUpdateModel failed:", res.error);
  }
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

| Error Type              | Status Code             | Content Type            |
| ----------------------- | ----------------------- | ----------------------- |
| errors.ErrorMessage     | 401, 402, 403, 404, 429 | application/json        |
| errors.ErrorMessage     | 500, 503                | application/json        |
| errors.SDKError         | 4XX, 5XX                | \*/\*                   |

## create

The *Create bill credit note* endpoint creates a new [bill credit note](https://docs.codat.io/sync-for-payables-api#/schemas/BillCreditNote) for a given company's connection.

[Bill credit notes](https://docs.codat.io/sync-for-payables-api#/schemas/BillCreditNote) are issued by a supplier for the purpose of recording credit.

**Integration-specific behavior**

Required data may vary by integration. To see what data to post, first call [Get create/update bill credit note model](https://docs.codat.io/sync-for-payables-api#/operations/get-create-update-billCreditNotes-model).

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=billCreditNotes) for integrations that support creating a bill credit note.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="create-bill-credit-note" method="post" path="/companies/{companyId}/connections/{connectionId}/push/billCreditNotes" -->
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
      billCreditNoteNumber: "309",
      supplierRef: {
        id: "87",
        supplierName: "Ankunding Inc",
      },
      withholdingTax: [],
      totalAmount: new Decimal("100"),
      totalDiscount: new Decimal("0"),
      subTotal: new Decimal("100"),
      totalTaxAmount: new Decimal("0"),
      discountPercentage: new Decimal("0"),
      remainingCredit: new Decimal("100"),
      status: "Submitted",
      issueDate: "2023-04-20T00:00:00",
      currency: "GBP",
      currencyRate: new Decimal("1.242097"),
      lineItems: [
        {
          description: "",
          unitAmount: new Decimal("100"),
          quantity: new Decimal("1"),
          subTotal: new Decimal("100"),
          taxAmount: new Decimal("0"),
          totalAmount: new Decimal("100"),
          accountRef: {
            id: "7",
          },
          taxRateRef: {
            id: "NON",
            name: "NON",
            effectiveTaxRate: new Decimal("0"),
          },
          trackingCategoryRefs: [],
          tracking: {
            categoryRefs: [],
            isBilledTo: "Unknown",
            isRebilledTo: "NotApplicable",
          },
        },
      ],
    },
  });

  console.log(result);
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
      billCreditNoteNumber: "309",
      supplierRef: {
        id: "87",
        supplierName: "Ankunding Inc",
      },
      withholdingTax: [],
      totalAmount: new Decimal("100"),
      totalDiscount: new Decimal("0"),
      subTotal: new Decimal("100"),
      totalTaxAmount: new Decimal("0"),
      discountPercentage: new Decimal("0"),
      remainingCredit: new Decimal("100"),
      status: "Submitted",
      issueDate: "2023-04-20T00:00:00",
      currency: "GBP",
      currencyRate: new Decimal("1.242097"),
      lineItems: [
        {
          description: "",
          unitAmount: new Decimal("100"),
          quantity: new Decimal("1"),
          subTotal: new Decimal("100"),
          taxAmount: new Decimal("0"),
          totalAmount: new Decimal("100"),
          accountRef: {
            id: "7",
          },
          taxRateRef: {
            id: "NON",
            name: "NON",
            effectiveTaxRate: new Decimal("0"),
          },
          trackingCategoryRefs: [],
          tracking: {
            categoryRefs: [],
            isBilledTo: "Unknown",
            isRebilledTo: "NotApplicable",
          },
        },
      ],
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("billCreditNotesCreate failed:", res.error);
  }
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

| Error Type                   | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| errors.ErrorMessage          | 400, 401, 402, 403, 404, 429 | application/json             |
| errors.ErrorMessage          | 500, 503                     | application/json             |
| errors.SDKError              | 4XX, 5XX                     | \*/\*                        |

## update

The *Update bill credit note* endpoint updates an existing [bill credit note](https://docs.codat.io/sync-for-payables-api#/schemas/BillCreditNote) for a given company's connection.

[Bill credit notes](https://docs.codat.io/sync-for-payables-api#/schemas/BillCreditNote) are issued by a supplier for the purpose of recording credit.

**Integration-specific behavior**

Required data may vary by integration. To see what data to post, first call [Get create/update bill credit note model](https://docs.codat.io/sync-for-payables-api#/operations/get-create-update-billCreditNotes-model).

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=billCreditNotes) for integrations that support creating a bill credit note.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="update-bill-credit-note" method="put" path="/companies/{companyId}/connections/{connectionId}/push/billCreditNotes/{billCreditNoteId}" -->
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
    billCreditNoteId: "13d946f0-c5d5-42bc-b092-97ece17923ab",
    billCreditNote: {
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
      currency: "USD",
      lineItems: [
        {
          description: "AcmeMagnet",
          unitAmount: new Decimal("25"),
          quantity: new Decimal("4"),
          discountAmount: new Decimal("0"),
          subTotal: new Decimal("100"),
          taxAmount: new Decimal("10"),
          totalAmount: new Decimal("110"),
          accountRef: {
            id: "3f267b10-757d-44c0-bef9-20f70cc8fbe3",
          },
          taxRateRef: {
            id: "6c88aff3-7cb9-4980-a3d3-443e72e02498",
          },
          itemRef: {
            id: "3",
          },
          createdFromLineRef: {},
          trackingCategoryRefs: [
            {
              id: "department_1",
              name: "ACMERockets",
            },
            {
              id: "costcode_2",
              name: "ACM2-ACMESigns",
            },
          ],
        },
        {
          description: "ACMEDisintegratingPistol",
          unitAmount: new Decimal("25"),
          quantity: new Decimal("3"),
          discountAmount: new Decimal("0"),
          subTotal: new Decimal("75"),
          taxAmount: new Decimal("7.5"),
          totalAmount: new Decimal("82.5"),
          accountRef: {
            id: "3f267b10-757d-44c0-bef9-20f70cc8fbe3",
          },
          taxRateRef: {
            id: "6c88aff3-7cb9-4980-a3d3-443e72e02498",
          },
          itemRef: {
            id: "3abf0883-03f7-44c6-bc15-1372522d25e1",
          },
        },
        {
          description: "ACMEWhippedCreamDispenser",
          unitAmount: new Decimal("52"),
          quantity: new Decimal("6"),
          discountAmount: new Decimal("0"),
          subTotal: new Decimal("312"),
          taxAmount: new Decimal("31.2"),
          totalAmount: new Decimal("343.2"),
          accountRef: {
            id: "3f267b10-757d-44c0-bef9-20f70cc8fbe3",
          },
          taxRateRef: {
            id: "6c88aff3-7cb9-4980-a3d3-443e72e02498",
          },
          itemRef: {
            id: "3691f3d9-0ff7-4358-8a93-bed31c1b4b03",
          },
        },
        {
          description: "ACMEJetPropelledPogoStick",
          unitAmount: new Decimal("130"),
          quantity: new Decimal("1"),
          discountAmount: new Decimal("0"),
          subTotal: new Decimal("130"),
          taxAmount: new Decimal("27.3"),
          totalAmount: new Decimal("157.3"),
          accountRef: {
            id: "3f267b10-757d-44c0-bef9-20f70cc8fbe3",
          },
          taxRateRef: {
            id: "d606732b-db18-44d7-823b-7f15f42c32ea",
          },
          itemRef: {
            id: "075410d4-7edc-4936-ba52-9e1e43cbe300",
          },
        },
      ],
      note: "Track separately",
    },
  });

  console.log(result);
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
    billCreditNoteId: "13d946f0-c5d5-42bc-b092-97ece17923ab",
    billCreditNote: {
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
      currency: "USD",
      lineItems: [
        {
          description: "AcmeMagnet",
          unitAmount: new Decimal("25"),
          quantity: new Decimal("4"),
          discountAmount: new Decimal("0"),
          subTotal: new Decimal("100"),
          taxAmount: new Decimal("10"),
          totalAmount: new Decimal("110"),
          accountRef: {
            id: "3f267b10-757d-44c0-bef9-20f70cc8fbe3",
          },
          taxRateRef: {
            id: "6c88aff3-7cb9-4980-a3d3-443e72e02498",
          },
          itemRef: {
            id: "3",
          },
          createdFromLineRef: {},
          trackingCategoryRefs: [
            {
              id: "department_1",
              name: "ACMERockets",
            },
            {
              id: "costcode_2",
              name: "ACM2-ACMESigns",
            },
          ],
        },
        {
          description: "ACMEDisintegratingPistol",
          unitAmount: new Decimal("25"),
          quantity: new Decimal("3"),
          discountAmount: new Decimal("0"),
          subTotal: new Decimal("75"),
          taxAmount: new Decimal("7.5"),
          totalAmount: new Decimal("82.5"),
          accountRef: {
            id: "3f267b10-757d-44c0-bef9-20f70cc8fbe3",
          },
          taxRateRef: {
            id: "6c88aff3-7cb9-4980-a3d3-443e72e02498",
          },
          itemRef: {
            id: "3abf0883-03f7-44c6-bc15-1372522d25e1",
          },
        },
        {
          description: "ACMEWhippedCreamDispenser",
          unitAmount: new Decimal("52"),
          quantity: new Decimal("6"),
          discountAmount: new Decimal("0"),
          subTotal: new Decimal("312"),
          taxAmount: new Decimal("31.2"),
          totalAmount: new Decimal("343.2"),
          accountRef: {
            id: "3f267b10-757d-44c0-bef9-20f70cc8fbe3",
          },
          taxRateRef: {
            id: "6c88aff3-7cb9-4980-a3d3-443e72e02498",
          },
          itemRef: {
            id: "3691f3d9-0ff7-4358-8a93-bed31c1b4b03",
          },
        },
        {
          description: "ACMEJetPropelledPogoStick",
          unitAmount: new Decimal("130"),
          quantity: new Decimal("1"),
          discountAmount: new Decimal("0"),
          subTotal: new Decimal("130"),
          taxAmount: new Decimal("27.3"),
          totalAmount: new Decimal("157.3"),
          accountRef: {
            id: "3f267b10-757d-44c0-bef9-20f70cc8fbe3",
          },
          taxRateRef: {
            id: "d606732b-db18-44d7-823b-7f15f42c32ea",
          },
          itemRef: {
            id: "075410d4-7edc-4936-ba52-9e1e43cbe300",
          },
        },
      ],
      note: "Track separately",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("billCreditNotesUpdate failed:", res.error);
  }
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

| Error Type                   | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| errors.ErrorMessage          | 400, 401, 402, 403, 404, 429 | application/json             |
| errors.ErrorMessage          | 500, 503                     | application/json             |
| errors.SDKError              | 4XX, 5XX                     | \*/\*                        |