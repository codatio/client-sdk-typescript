# invoices

## Overview

Invoices

### Available Operations

* [create](#create) - Create invoice
* [delete](#delete) - Delete invoice
* [downloadAttachment](#downloadattachment) - Download invoice attachment
* [downloadPdf](#downloadpdf) - Get invoice as PDF
* [get](#get) - Get invoice
* [getAttachment](#getattachment) - Get invoice attachment
* [getCreateUpdateModel](#getcreateupdatemodel) - Get create/update invoice model
* [list](#list) - List invoices
* [listAttachments](#listattachments) - List invoice attachments
* [update](#update) - Update invoice
* [uploadAttachment](#uploadattachment) - Push invoice attachment

## create

The *Create invoice* endpoint creates a new [invoice](https://docs.codat.io/accounting-api#/schemas/Invoice) for a given company's connection.

[Invoices](https://docs.codat.io/accounting-api#/schemas/Invoice) are itemized records of goods sold or services provided to a customer.

**Integration-specific behaviour**

Required data may vary by integration. To see what data to post, first call [Get create/update invoice model](https://docs.codat.io/accounting-api#/operations/get-create-update-invoices-model).

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=invoices) for integrations that support creating an account.


### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { CreateInvoiceResponse } from "@codat/accounting/dist/sdk/models/operations";
import { BilledToType1, InvoiceStatus } from "@codat/accounting/dist/sdk/models/shared";

const sdk = new CodatAccounting({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.invoices.create({
  invoice: {
    additionalTaxAmount: 3808.53,
    additionalTaxPercentage: 3421.29,
    amountDue: 5447.6,
    currency: "USD",
    currencyRate: 9462.07,
    customerRef: {
      companyName: "consectetur",
      id: "40414c5b-9ace-4e40-8ae9-f92caf1b025f",
    },
    discountPercentage: 1005.96,
    dueDate: "2022-10-23T00:00:00.000Z",
    id: "14718c6f-a2fa-4d0c-86c5-d95472cdd14f",
    invoiceNumber: "porro",
    issueDate: "2022-10-23T00:00:00.000Z",
    lineItems: [
      {
        accountRef: {
          id: "b70bca88-fa70-4c43-b51c-3dd1eb8f7f75",
          name: "Miguel Weissnat",
        },
        description: "doloribus",
        discountAmount: 949.91,
        discountPercentage: 7688.46,
        isDirectIncome: false,
        itemRef: {
          id: "0a586c3a-e7d7-4b67-beef-5e142d95b1db",
          name: "Guadalupe Weber",
        },
        quantity: 4809.57,
        subTotal: 7789.75,
        taxAmount: 2510.22,
        taxRateRef: {
          effectiveTaxRate: 7332.11,
          id: "156e9278-275e-4ea7-a817-468063f799b7",
          name: "Corey Jakubowski MD",
        },
        totalAmount: 309.86,
        tracking: {
          categoryRefs: [
            {
              id: "a0bb20a4-0e7c-44ae-a406-4272657b01a0",
              name: "Rachael Armstrong",
            },
            {
              id: "d3921c25-7930-4d6f-893a-3efa46d366df",
              name: "Mr. Walter Adams",
            },
            {
              id: "091b3ec8-b538-462d-a1a9-d14fe72e521f",
              name: "Mrs. Jeffrey Flatley",
            },
            {
              id: "fc338397-fffa-46d1-9320-90fc157ac9fe",
              name: "Miss Bobbie Jakubowski",
            },
          ],
          customerRef: {
            companyName: "perspiciatis",
            id: "be41c869-dd7d-4971-9d07-b200a58ffd29",
          },
          isBilledTo: BilledToType1.NotApplicable,
          isRebilledTo: BilledToType1.NotApplicable,
          projectRef: {
            id: "df8fd882-a8e6-40be-a20c-d9c5afdd04c3",
            name: "Stacy Collins Sr.",
          },
          recordRef: {
            dataType: "accountTransaction",
            id: "eae1d87e-cc5f-4dce-a8e7-a88311662cda",
          },
        },
        trackingCategoryRefs: [
          {
            id: "d77c1d86-0662-437d-8227-866db8a749e3",
            name: "Everett Gottlieb Sr.",
          },
          {
            id: "cc75e4f0-c004-4b5b-b758-cc94562f0069",
            name: "Gwendolyn Hickle",
          },
        ],
        unitAmount: 8194.9,
      },
    ],
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "2022-10-23T00:00:00.000Z",
    note: "est",
    paidOnDate: "2022-10-23T00:00:00.000Z",
    paymentAllocations: [
      {
        allocation: {
          allocatedOnDate: "2022-10-23T00:00:00.000Z",
          currency: "EUR",
          currencyRate: 5137.33,
          totalAmount: 2526.91,
        },
        payment: {
          accountRef: {
            id: "bbe24f29-834a-4fb0-b35c-b6285d4a29aa",
            name: "Mrs. Eric Toy",
          },
          currency: "GBP",
          currencyRate: 3678.44,
          id: "6f7d2ee2-0950-45bf-83a9-3e94480ca37f",
          note: "nam",
          paidOnDate: "2022-10-23T00:00:00.000Z",
          reference: "ipsa",
          totalAmount: 4957.89,
        },
      },
      {
        allocation: {
          allocatedOnDate: "2022-10-23T00:00:00.000Z",
          currency: "USD",
          currencyRate: 542.66,
          totalAmount: 1965.04,
        },
        payment: {
          accountRef: {
            id: "2ac33317-2e2d-4d79-ac74-ba7e88ddb36f",
            name: "Dennis Romaguera",
          },
          currency: "GBP",
          currencyRate: 2904.79,
          id: "1c865734-74f0-4a74-8fb4-ab441c3a09e7",
          note: "commodi",
          paidOnDate: "2022-10-23T00:00:00.000Z",
          reference: "perspiciatis",
          totalAmount: 6094.27,
        },
      },
    ],
    salesOrderRefs: [
      {
        dataType: "vero",
        id: "808bbe79-4455-4ebc-950a-1c426b59c836",
      },
      {
        dataType: "ea",
        id: "fdcc1355-82c1-4b85-9e88-9d9ef932e900",
      },
    ],
    sourceModifiedDate: "2022-10-23T00:00:00.000Z",
    status: InvoiceStatus.PartiallyPaid,
    subTotal: 1087.68,
    supplementalData: {
      content: {
        "deserunt": {
          "voluptatum": "veritatis",
          "consequuntur": "dolore",
          "fugit": "alias",
          "voluptatum": "voluptates",
        },
      },
    },
    totalAmount: 9590.06,
    totalDiscount: 8707.38,
    totalTaxAmount: 1827.3,
    withholdingTax: [
      {
        amount: 2591.29,
        name: "Katherine Lesch",
      },
    ],
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  timeoutInMinutes: 926770,
}).then((res: CreateInvoiceResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.CreateInvoiceRequest](../../models/operations/createinvoicerequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `retries`                                                                          | [utils.RetryConfig](../../models/utils/retryconfig.md)                             | :heavy_minus_sign:                                                                 | Configuration to override the default retry behavior of the client.                |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.CreateInvoiceResponse](../../models/operations/createinvoiceresponse.md)>**


## delete

﻿The *Delete invoice* endpoint allows you to delete a specified invoice from an accounting platform.

[Invoices](https://docs.codat.io/accounting-api#/schemas/Invoice) are itemized records of goods sold or services provided to a customer.

### Process
1. Pass the `{invoiceId}` to the *Delete invoice* endpoint and store the `pushOperationKey` returned.
2. Check the status of the delete operation by checking the status of push operation either via
    1. [Push operation webhook](https://docs.codat.io/introduction/webhooks/core-rules-types#push-operation-status-has-changed) (advised),
    2. [Push operation status endpoint](https://docs.codat.io/codat-api#/operations/get-push-operation).

   A `Success` status indicates that the invoice object was deleted from the accounting platform.
3. (Optional) Check that the invoice was deleted from the accounting platform.

### Effect on related objects

Be aware that deleting an invoice from an accounting platform might cause related objects to be modified. For example, if you delete a paid invoice from QuickBooks Online, the invoice is deleted but the payment against that invoice is not. The payment is converted to a payment on account.

## Integration specifics
Integrations that support soft delete do not permanently delete the object in the accounting platform.

| Integration | Soft Deleted | 
|-------------|--------------|
| QuickBooks Online | Yes    |     

> **Supported Integrations**
> 
> This functionality is currently only supported for our QuickBooks Online integration. Check out our [public roadmap](https://portal.productboard.com/codat/7-public-product-roadmap/tabs/46-accounting-api) to see what we're building next, and to submit ideas for new features.
> We're increasing support for object deletion across various accounting platforms and data types. You can check our [Accounting API Public Product Roadmap](https://portal.productboard.com/codat/7-public-product-roadmap/tabs/46-accounting-api) for the latest status.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { DeleteInvoiceResponse } from "@codat/accounting/dist/sdk/models/operations";

const sdk = new CodatAccounting({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.invoices.delete({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  invoiceId: "quam",
}).then((res: DeleteInvoiceResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.DeleteInvoiceRequest](../../models/operations/deleteinvoicerequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `retries`                                                                          | [utils.RetryConfig](../../models/utils/retryconfig.md)                             | :heavy_minus_sign:                                                                 | Configuration to override the default retry behavior of the client.                |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.DeleteInvoiceResponse](../../models/operations/deleteinvoiceresponse.md)>**


## downloadAttachment

The *Download invoice attachment* endpoint downloads a specific attachment for a given `invoiceId` and `attachmentId`.

[Invoices](https://docs.codat.io/accounting-api#/schemas/Invoice) are itemized records of goods sold or services provided to a customer.

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=invoices) for integrations that support downloading an invoice attachment.


### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { DownloadInvoiceAttachmentResponse } from "@codat/accounting/dist/sdk/models/operations";

const sdk = new CodatAccounting({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.invoices.downloadAttachment({
  attachmentId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  invoiceId: "adipisci",
}).then((res: DownloadInvoiceAttachmentResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                  | [operations.DownloadInvoiceAttachmentRequest](../../models/operations/downloadinvoiceattachmentrequest.md) | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `retries`                                                                                                  | [utils.RetryConfig](../../models/utils/retryconfig.md)                                                     | :heavy_minus_sign:                                                                                         | Configuration to override the default retry behavior of the client.                                        |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.DownloadInvoiceAttachmentResponse](../../models/operations/downloadinvoiceattachmentresponse.md)>**


## downloadPdf

﻿Download invoice as a pdf.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { DownloadInvoicePdfResponse } from "@codat/accounting/dist/sdk/models/operations";

const sdk = new CodatAccounting({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.invoices.downloadPdf({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  invoiceId: "praesentium",
}).then((res: DownloadInvoicePdfResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.DownloadInvoicePdfRequest](../../models/operations/downloadinvoicepdfrequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `retries`                                                                                    | [utils.RetryConfig](../../models/utils/retryconfig.md)                                       | :heavy_minus_sign:                                                                           | Configuration to override the default retry behavior of the client.                          |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.DownloadInvoicePdfResponse](../../models/operations/downloadinvoicepdfresponse.md)>**


## get

The *Get invoice* endpoint returns a single invoice for a given invoiceId.

[Invoices](https://docs.codat.io/accounting-api#/schemas/Invoice) are itemized records of goods sold or services provided to a customer.

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=invoices) for integrations that support getting a specific invoice.

Before using this endpoint, you must have [retrieved data for the company](https://docs.codat.io/codat-api#/operations/refresh-company-data).


### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { GetInvoiceResponse } from "@codat/accounting/dist/sdk/models/operations";

const sdk = new CodatAccounting({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.invoices.get({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  invoiceId: "nihil",
}).then((res: GetInvoiceResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                    | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `request`                                                                    | [operations.GetInvoiceRequest](../../models/operations/getinvoicerequest.md) | :heavy_check_mark:                                                           | The request object to use for the request.                                   |
| `retries`                                                                    | [utils.RetryConfig](../../models/utils/retryconfig.md)                       | :heavy_minus_sign:                                                           | Configuration to override the default retry behavior of the client.          |
| `config`                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                 | :heavy_minus_sign:                                                           | Available config options for making requests.                                |


### Response

**Promise<[operations.GetInvoiceResponse](../../models/operations/getinvoiceresponse.md)>**


## getAttachment

The *Get invoice attachment* endpoint returns a specific attachment for a given `invoiceId` and `attachmentId`.

[Invoices](https://docs.codat.io/accounting-api#/schemas/Invoice) are itemized records of goods sold or services provided to a customer.

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=invoices) for integrations that support getting an invoice attachment.


### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { GetInvoiceAttachmentResponse } from "@codat/accounting/dist/sdk/models/operations";

const sdk = new CodatAccounting({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.invoices.getAttachment({
  attachmentId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  invoiceId: "unde",
}).then((res: GetInvoiceAttachmentResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.GetInvoiceAttachmentRequest](../../models/operations/getinvoiceattachmentrequest.md) | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `retries`                                                                                        | [utils.RetryConfig](../../models/utils/retryconfig.md)                                           | :heavy_minus_sign:                                                                               | Configuration to override the default retry behavior of the client.                              |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.GetInvoiceAttachmentResponse](../../models/operations/getinvoiceattachmentresponse.md)>**


## getCreateUpdateModel

The *Get create/update invoice model* endpoint returns the expected data for the request payload when creating and updating an [invoice](https://docs.codat.io/accounting-api#/schemas/Invoice) for a given company and integration.

[Invoices](https://docs.codat.io/accounting-api#/schemas/Invoice) are itemized records of goods sold or services provided to a customer.

**Integration-specific behaviour**

See the *response examples* for integration-specific indicative models.

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=invoices) for integrations that support creating and updating an invoice.


### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { GetCreateUpdateInvoicesModelResponse } from "@codat/accounting/dist/sdk/models/operations";

const sdk = new CodatAccounting({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.invoices.getCreateUpdateModel({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
}).then((res: GetCreateUpdateInvoicesModelResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                        | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                        | [operations.GetCreateUpdateInvoicesModelRequest](../../models/operations/getcreateupdateinvoicesmodelrequest.md) | :heavy_check_mark:                                                                                               | The request object to use for the request.                                                                       |
| `retries`                                                                                                        | [utils.RetryConfig](../../models/utils/retryconfig.md)                                                           | :heavy_minus_sign:                                                                                               | Configuration to override the default retry behavior of the client.                                              |
| `config`                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                     | :heavy_minus_sign:                                                                                               | Available config options for making requests.                                                                    |


### Response

**Promise<[operations.GetCreateUpdateInvoicesModelResponse](../../models/operations/getcreateupdateinvoicesmodelresponse.md)>**


## list

The *List invoices* endpoint returns a list of [invoices](https://docs.codat.io/accounting-api#/schemas/Invoice) for a given company's connection.

[Invoices](https://docs.codat.io/accounting-api#/schemas/Invoice) are itemized records of goods sold or services provided to a customer.

Before using this endpoint, you must have [retrieved data for the company](https://docs.codat.io/codat-api#/operations/refresh-company-data).
    

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { ListInvoicesResponse } from "@codat/accounting/dist/sdk/models/operations";

const sdk = new CodatAccounting({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.invoices.list({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  orderBy: "-modifiedDate",
  page: 1,
  pageSize: 100,
  query: "eveniet",
}).then((res: ListInvoicesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [operations.ListInvoicesRequest](../../models/operations/listinvoicesrequest.md) | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `retries`                                                                        | [utils.RetryConfig](../../models/utils/retryconfig.md)                           | :heavy_minus_sign:                                                               | Configuration to override the default retry behavior of the client.              |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.ListInvoicesResponse](../../models/operations/listinvoicesresponse.md)>**


## listAttachments

The *List invoice attachments* endpoint returns a list of attachments available to download for given `invoiceId`.

[Invoices](https://docs.codat.io/accounting-api#/schemas/Invoice) are itemized records of goods sold or services provided to a customer.

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=invoices) for integrations that support listing invoice attachments.


### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { ListInvoiceAttachmentsResponse } from "@codat/accounting/dist/sdk/models/operations";

const sdk = new CodatAccounting({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.invoices.listAttachments({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  invoiceId: "tenetur",
}).then((res: ListInvoiceAttachmentsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.ListInvoiceAttachmentsRequest](../../models/operations/listinvoiceattachmentsrequest.md) | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `retries`                                                                                            | [utils.RetryConfig](../../models/utils/retryconfig.md)                                               | :heavy_minus_sign:                                                                                   | Configuration to override the default retry behavior of the client.                                  |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.ListInvoiceAttachmentsResponse](../../models/operations/listinvoiceattachmentsresponse.md)>**


## update

The *Update invoice* endpoint updates an existing [invoice](https://docs.codat.io/accounting-api#/schemas/Invoice) for a given company's connection.

[Invoices](https://docs.codat.io/accounting-api#/schemas/Invoice) are itemized records of goods sold or services provided to a customer.

**Integration-specific behaviour**

Required data may vary by integration. To see what data to post, first call [Get create/update invoice model](https://docs.codat.io/accounting-api#/operations/get-create-update-invoices-model).

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=invoices) for integrations that support creating an account.


### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { UpdateInvoiceResponse } from "@codat/accounting/dist/sdk/models/operations";
import { BilledToType1, InvoiceStatus } from "@codat/accounting/dist/sdk/models/shared";

const sdk = new CodatAccounting({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.invoices.update({
  invoice: {
    additionalTaxAmount: 7082.83,
    additionalTaxPercentage: 9086.43,
    amountDue: 5282.87,
    currency: "EUR",
    currencyRate: 6393.07,
    customerRef: {
      companyName: "saepe",
      id: "babb7945-36e9-4035-9bb9-7631720b77a5",
    },
    discountPercentage: 6489.97,
    dueDate: "2022-10-23T00:00:00.000Z",
    id: "365a79f1-5271-4f01-80d3-61fed8dc5eff",
    invoiceNumber: "nobis",
    issueDate: "2022-10-23T00:00:00.000Z",
    lineItems: [
      {
        accountRef: {
          id: "3e9089e8-71fd-4b4d-a97b-dd9c985e4373",
          name: "Sandy Hayes",
        },
        description: "odit",
        discountAmount: 8435.01,
        discountPercentage: 5849.49,
        isDirectIncome: false,
        itemRef: {
          id: "edd785be-5e7a-4fe5-9297-ba6281f44e3a",
          name: "Carmen Feil",
        },
        quantity: 6602.4,
        subTotal: 4293.32,
        taxAmount: 5230.55,
        taxRateRef: {
          effectiveTaxRate: 7569.98,
          id: "c80d30ff-7216-44d0-a91f-e9d96553b89e",
          name: "Elizabeth Batz",
        },
        totalAmount: 4285.11,
        tracking: {
          categoryRefs: [
            {
              id: "92de7b35-6220-41a6-aab4-ae7b1a5b908d",
              name: "Mrs. Silvia Feil",
            },
            {
              id: "1aa35d4a-839f-403b-ab77-b918f0313984",
              name: "Nancy Kihn DVM",
            },
          ],
          customerRef: {
            companyName: "consectetur",
            id: "9c7e23ec-b060-4465-ae23-a3d6c657e9de",
          },
          isBilledTo: BilledToType1.NotApplicable,
          isRebilledTo: BilledToType1.Project,
          projectRef: {
            id: "7f002d19-86aa-499d-ba1d-32329e45837e",
            name: "Dominick Denesik",
          },
          recordRef: {
            dataType: "invoice",
            id: "bb10e255-fdc4-480d-ae33-08675cbf1868",
          },
        },
        trackingCategoryRefs: [
          {
            id: "6a7e82cd-f9d0-4fc2-82c6-66af3c3f5589",
            name: "Sheldon Orn",
          },
          {
            id: "264e41e2-ca84-4822-a513-f6d9d2ad37c3",
            name: "Ms. Sabrina McCullough",
          },
        ],
        unitAmount: 7504.07,
      },
      {
        accountRef: {
          id: "10b68792-163e-467d-8886-0543c0a3049c",
          name: "Traci Wolf",
        },
        description: "sit",
        discountAmount: 1279.08,
        discountPercentage: 4711.41,
        isDirectIncome: false,
        itemRef: {
          id: "6e7b21ba-d90d-4274-bfd6-c2a10e6c2978",
          name: "Salvatore Daugherty",
        },
        quantity: 6398.55,
        subTotal: 3317.24,
        taxAmount: 7368.46,
        taxRateRef: {
          effectiveTaxRate: 307.87,
          id: "9227fcc4-7996-4c97-bbbc-57f38928a860",
          name: "Roxanne Hammes",
        },
        totalAmount: 4306.51,
        tracking: {
          categoryRefs: [
            {
              id: "d63e4aa5-6846-4457-9cfc-6c0e503f5683",
              name: "Johanna Bosco",
            },
            {
              id: "ed87b28e-8afa-4bc9-86e2-41e43b234241",
              name: "Angel Brown",
            },
          ],
          customerRef: {
            companyName: "nesciunt",
            id: "f62aa9ae-4ae8-4ab4-a9c4-92c5e8ba5d4a",
          },
          isBilledTo: BilledToType1.NotApplicable,
          isRebilledTo: BilledToType1.Unknown,
          projectRef: {
            id: "a508bd38-0c29-4aa8-9d71-bddaa30b7b91",
            name: "Emma Mohr",
          },
          recordRef: {
            dataType: "invoice",
            id: "9c088d41-8bb7-4180-8f42-3d543935f377",
          },
        },
        trackingCategoryRefs: [
          {
            id: "c5c9b7e9-3b6a-43c5-a310-5e7c34cab0ec",
            name: "Bob Breitenberg",
          },
          {
            id: "66148944-a8e9-4085-875b-c2538253343f",
            name: "Ronald Murphy",
          },
          {
            id: "66ea4757-8d17-41e2-9418-18fc679b6b2f",
            name: "Lynn Effertz",
          },
        ],
        unitAmount: 6957.24,
      },
    ],
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "2022-10-23T00:00:00.000Z",
    note: "ipsam",
    paidOnDate: "2022-10-23T00:00:00.000Z",
    paymentAllocations: [
      {
        allocation: {
          allocatedOnDate: "2022-10-23T00:00:00.000Z",
          currency: "GBP",
          currencyRate: 3240.28,
          totalAmount: 6943.34,
        },
        payment: {
          accountRef: {
            id: "62c8b83a-38a8-4a88-8144-200c2caeb1ae",
            name: "Elvira Rutherford",
          },
          currency: "EUR",
          currencyRate: 2400.8,
          id: "4946bba7-a05a-48b4-a9ec-5b3688cca363",
          note: "magni",
          paidOnDate: "2022-10-23T00:00:00.000Z",
          reference: "magni",
          totalAmount: 4941.36,
        },
      },
      {
        allocation: {
          allocatedOnDate: "2022-10-23T00:00:00.000Z",
          currency: "GBP",
          currencyRate: 8973.52,
          totalAmount: 5819.46,
        },
        payment: {
          accountRef: {
            id: "66e97e05-4103-4347-978f-f2491145fab9",
            name: "Jerome Mertz",
          },
          currency: "EUR",
          currencyRate: 9544.32,
          id: "336664ea-a6bf-42ff-94e8-c1b352acceda",
          note: "maxime",
          paidOnDate: "2022-10-23T00:00:00.000Z",
          reference: "ad",
          totalAmount: 1642.23,
        },
      },
      {
        allocation: {
          allocatedOnDate: "2022-10-23T00:00:00.000Z",
          currency: "USD",
          currencyRate: 5437.75,
          totalAmount: 1030.1,
        },
        payment: {
          accountRef: {
            id: "4eca016b-c41e-4a13-82d4-104a25ef71de",
            name: "Mr. Dora Ortiz",
          },
          currency: "USD",
          currencyRate: 1110.45,
          id: "4a431769-2ea4-4867-bd52-2b828a903066",
          note: "doloremque",
          paidOnDate: "2022-10-23T00:00:00.000Z",
          reference: "doloremque",
          totalAmount: 1474.89,
        },
      },
      {
        allocation: {
          allocatedOnDate: "2022-10-23T00:00:00.000Z",
          currency: "EUR",
          currencyRate: 4891.43,
          totalAmount: 5738.63,
        },
        payment: {
          accountRef: {
            id: "b4cc64c2-b3a3-42c4-88ad-e62f6aa558a6",
            name: "Ms. Olive Daugherty",
          },
          currency: "GBP",
          currencyRate: 965.66,
          id: "6ca34bb8-7d4f-4621-a7a6-07d160629451",
          note: "magnam",
          paidOnDate: "2022-10-23T00:00:00.000Z",
          reference: "neque",
          totalAmount: 8634.15,
        },
      },
    ],
    salesOrderRefs: [
      {
        dataType: "cupiditate",
        id: "ca9f38bd-2be8-4787-8349-3f49aa8465a3",
      },
      {
        dataType: "eos",
        id: "83279b71-9d1c-4ea6-b3d8-6e3b35e49a31",
      },
      {
        dataType: "consectetur",
        id: "5778ce54-cacb-40e3-aa97-5045bacf63b2",
      },
    ],
    sourceModifiedDate: "2022-10-23T00:00:00.000Z",
    status: InvoiceStatus.Submitted,
    subTotal: 1217.04,
    supplementalData: {
      content: {
        "commodi": {
          "nam": "corporis",
          "voluptates": "amet",
          "laborum": "alias",
        },
        "eos": {
          "autem": "architecto",
        },
        "tempora": {
          "ab": "ad",
        },
      },
    },
    totalAmount: 8257.86,
    totalDiscount: 787.38,
    totalTaxAmount: 3435.3,
    withholdingTax: [
      {
        amount: 5176.62,
        name: "Violet McClure",
      },
      {
        amount: 1003.06,
        name: "Boyd Sanford IV",
      },
    ],
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  forceUpdate: false,
  invoiceId: "suscipit",
  timeoutInMinutes: 991467,
}).then((res: UpdateInvoiceResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.UpdateInvoiceRequest](../../models/operations/updateinvoicerequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `retries`                                                                          | [utils.RetryConfig](../../models/utils/retryconfig.md)                             | :heavy_minus_sign:                                                                 | Configuration to override the default retry behavior of the client.                |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.UpdateInvoiceResponse](../../models/operations/updateinvoiceresponse.md)>**


## uploadAttachment

The *Upload invoice attachment* endpoint uploads an attachment and assigns it against a specific `invoiceId`.

[Invoices](https://docs.codat.io/accounting-api#/schemas/Invoice) are itemized records of goods sold or services provided to a customer.

**Integration-specific behaviour**

For more details on supported file types by integration see [Attachments](https://docs.codat.io/accounting-api#/schemas/Attachment).

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=invoices) for integrations that support uploading an invoice attachment.


### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { UploadInvoiceAttachmentResponse } from "@codat/accounting/dist/sdk/models/operations";

const sdk = new CodatAccounting({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.invoices.uploadAttachment({
  requestBody: {
    content: "voluptatibus".encode(),
    requestBody: "dolores",
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  invoiceId: "alias",
}).then((res: UploadInvoiceAttachmentResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `request`                                                                                              | [operations.UploadInvoiceAttachmentRequest](../../models/operations/uploadinvoiceattachmentrequest.md) | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `retries`                                                                                              | [utils.RetryConfig](../../models/utils/retryconfig.md)                                                 | :heavy_minus_sign:                                                                                     | Configuration to override the default retry behavior of the client.                                    |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.UploadInvoiceAttachmentResponse](../../models/operations/uploadinvoiceattachmentresponse.md)>**

