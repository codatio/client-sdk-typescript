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
    additionalTaxAmount: 6499.01,
    additionalTaxPercentage: 3702.19,
    amountDue: 4227.22,
    currency: "GBP",
    currencyRate: 427.39,
    customerRef: {
      companyName: "atque",
      id: "91500970-19a4-48f8-8ece-7bf904e01105",
    },
    discountPercentage: 8370.8,
    dueDate: "2022-10-23T00:00:00.000Z",
    id: "8908162c-6beb-468a-8f65-7b7d03a1480f",
    invoiceNumber: "blanditiis",
    issueDate: "2022-10-23T00:00:00.000Z",
    lineItems: [
      {
        accountRef: {
          id: "30f069d8-1061-48d9-be15-2297510da803",
          name: "Janice Cronin",
        },
        description: "nobis",
        discountAmount: 7615.63,
        discountPercentage: 3870.67,
        isDirectIncome: false,
        itemRef: {
          id: "1c2a702b-b97e-4e10-ada2-de35f8e01bf3",
          name: "Silvia Murazik",
        },
        quantity: 2836.19,
        subTotal: 3304.68,
        taxAmount: 2609.08,
        taxRateRef: {
          effectiveTaxRate: 619.54,
          id: "2ac1704b-f1cc-49fc-a1aa-e5eb5f0c492b",
          name: "Jackie Graham",
        },
        totalAmount: 406.34,
        tracking: {
          categoryRefs: [
            {
              id: "a2267aae-e79e-43c7-9ad3-1becb83d2378",
              name: "Rogelio Doyle",
            },
            {
              id: "c23d9450-a986-4a49-9bac-707f06b28ecc",
              name: "Raul Gerlach I",
            },
            {
              id: "86f62c96-9c4c-4c6b-b889-0a3fd3c81da1",
              name: "Tabitha Lesch",
            },
          ],
          customerRef: {
            companyName: "non",
            id: "df931da3-edb5-41fa-994a-cc9435137726",
          },
          isBilledTo: BilledToType1.Project,
          isRebilledTo: BilledToType1.Unknown,
          projectRef: {
            id: "5321b832-a56d-4691-80ff-60eb9a6658e6",
            name: "Grant Fritsch",
          },
        },
        trackingCategoryRefs: [
          {
            id: "3d382dbe-c75c-468c-a065-9468ce304d88",
            name: "Shelly Quitzon",
          },
          {
            id: "214c337f-96bb-40c6-9e37-2db1344ba9f7",
            name: "Ernesto Heaney PhD",
          },
        ],
        unitAmount: 8162.72,
      },
      {
        accountRef: {
          id: "7aab62e9-7261-4fb0-858d-27b51996b5b4",
          name: "Jon Bashirian",
        },
        description: "sapiente",
        discountAmount: 4822.43,
        discountPercentage: 988.3,
        isDirectIncome: false,
        itemRef: {
          id: "2b7a7ab0-344b-4171-8688-deebef897f3d",
          name: "Mark Schmidt",
        },
        quantity: 2232.35,
        subTotal: 2259.45,
        taxAmount: 9483.01,
        taxRateRef: {
          effectiveTaxRate: 979.03,
          id: "1b3e4e08-0aa1-4041-86ec-759e02f3702c",
          name: "Blanca Langworth",
        },
        totalAmount: 8570.75,
        tracking: {
          categoryRefs: [
            {
              id: "0ead3104-fa44-4707-bf37-5b44282821fd",
              name: "Aaron Weimann",
            },
          ],
          customerRef: {
            companyName: "eveniet",
            id: "59267c71-cc8d-43cd-8258-d0358a82c808",
          },
          isBilledTo: BilledToType1.Project,
          isRebilledTo: BilledToType1.Project,
          projectRef: {
            id: "2751a204-7c04-449e-943f-9619bb7d40d5",
            name: "Eric Bergnaum",
          },
        },
        trackingCategoryRefs: [
          {
            id: "36e62592-33f9-45c9-9237-397c785b5db4",
            name: "Mr. Wesley Ankunding",
          },
          {
            id: "3febdf67-6b72-406d-ab75-0052a5647edc",
            name: "Annie Morissette",
          },
        ],
        unitAmount: 5481.43,
      },
      {
        accountRef: {
          id: "c4320f41-240d-4448-bac6-93b94c3b9d24",
          name: "Guy Spinka",
        },
        description: "ad",
        discountAmount: 6383.23,
        discountPercentage: 6864.21,
        isDirectIncome: false,
        itemRef: {
          id: "42fc4056-69f6-49a0-86d2-1249450819d7",
          name: "Miss Nathan Ritchie",
        },
        quantity: 745.3,
        subTotal: 5385.16,
        taxAmount: 2986.57,
        taxRateRef: {
          effectiveTaxRate: 2793.53,
          id: "060e0031-0d02-43dc-901f-5afd2a6c4484",
          name: "Genevieve Waters",
        },
        totalAmount: 5056.63,
        tracking: {
          categoryRefs: [
            {
              id: "253c8962-f489-46bf-91e4-652d3c343d61",
              name: "Stella Littel",
            },
            {
              id: "49124772-5e62-4190-9e91-044a5de59ac7",
              name: "Jessica Hyatt",
            },
            {
              id: "0cf1cf59-3260-4525-9e66-bb426897d99a",
              name: "Christie Frami",
            },
          ],
          customerRef: {
            companyName: "suscipit",
            id: "70e93ee6-cf59-4f35-8aae-acae323a31bf",
          },
          isBilledTo: BilledToType1.NotApplicable,
          isRebilledTo: BilledToType1.Project,
          projectRef: {
            id: "a1cc9771-6c80-42cc-9e0c-7d9d323f1aa6",
            name: "Cecelia Stoltenberg",
          },
        },
        trackingCategoryRefs: [
          {
            id: "1c856bcb-a51e-4f24-94a4-7facf116cdd5",
            name: "Jamie Funk",
          },
          {
            id: "562873c7-dd9e-4faf-83dc-623620f3138f",
            name: "Michelle Stroman",
          },
          {
            id: "db022faa-565f-4b8f-a52e-bb9d38383879",
            name: "Beverly Green",
          },
          {
            id: "293dab30-e917-4f50-bda0-4c8b1bb55a29",
            name: "Karla Armstrong",
          },
        ],
        unitAmount: 2482.32,
      },
      {
        accountRef: {
          id: "bb744664-eb1d-4033-88b0-d1bb17afee74",
          name: "Hector Willms",
        },
        description: "occaecati",
        discountAmount: 2897.27,
        discountPercentage: 3697.22,
        isDirectIncome: false,
        itemRef: {
          id: "7c7edaf3-9d16-4fbf-b6fd-162b303e3023",
          name: "Andy Erdman",
        },
        quantity: 2724.93,
        subTotal: 1973.88,
        taxAmount: 893.2,
        taxRateRef: {
          effectiveTaxRate: 3986.87,
          id: "cf55b431-3553-4ccf-9c20-4c4adcc9904c",
          name: "Debra Medhurst",
        },
        totalAmount: 5405.93,
        tracking: {
          categoryRefs: [
            {
              id: "48cefa78-f1e2-4d3b-901e-0952bbb4cbb1",
              name: "Mrs. Courtney Kuhic",
            },
            {
              id: "95a4169c-1387-4271-a18e-a9e45118c2cc",
              name: "Dora White",
            },
          ],
          customerRef: {
            companyName: "aliquid",
            id: "0b1a78ed-29a9-4d4e-aa85-658c2d4f4c88",
          },
          isBilledTo: BilledToType1.Project,
          isRebilledTo: BilledToType1.Project,
          projectRef: {
            id: "4f278fd9-667e-446c-91d2-ffaa58dcef23",
            name: "Alexandra Morissette",
          },
        },
        trackingCategoryRefs: [
          {
            id: "9bdf2190-abd9-4bbc-8272-5ec2659ce028",
            name: "Miss Priscilla Gerhold",
          },
          {
            id: "9ef68e45-c8ad-4dfa-8754-500430c6632b",
            name: "Dr. Carmen McKenzie",
          },
          {
            id: "f01c3e91-e8f7-4bc6-9d46-0a77eceb26d1",
            name: "Lorene Bosco",
          },
        ],
        unitAmount: 1818.77,
      },
    ],
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "2022-10-23T00:00:00.000Z",
    note: "neque",
    paidOnDate: "2022-10-23T00:00:00.000Z",
    paymentAllocations: [
      {
        allocation: {
          allocatedOnDate: "2022-10-23T00:00:00.000Z",
          currency: "EUR",
          currencyRate: 461.37,
          totalAmount: 9654.91,
        },
        payment: {
          accountRef: {
            id: "0f873f9d-5c25-4fd3-a0b4-a4a4253c3025",
            name: "Julie Bergstrom",
          },
          currency: "GBP",
          currencyRate: 8074.3,
          id: "7e7dc548-be09-4e41-a7a2-15ca12a4ba9d",
          note: "ipsam",
          paidOnDate: "2022-10-23T00:00:00.000Z",
          reference: "omnis",
          totalAmount: 5229.85,
        },
      },
      {
        allocation: {
          allocatedOnDate: "2022-10-23T00:00:00.000Z",
          currency: "GBP",
          currencyRate: 5952.02,
          totalAmount: 1465.4,
        },
        payment: {
          accountRef: {
            id: "cfd0c77c-53e7-4e7d-8ee6-e8b90bac384e",
            name: "Cindy Marquardt",
          },
          currency: "GBP",
          currencyRate: 1935.64,
          id: "fec31c50-824d-4189-a36a-6b2d27eb707a",
          note: "est",
          paidOnDate: "2022-10-23T00:00:00.000Z",
          reference: "aut",
          totalAmount: 8090.72,
        },
      },
      {
        allocation: {
          allocatedOnDate: "2022-10-23T00:00:00.000Z",
          currency: "EUR",
          currencyRate: 8853.36,
          totalAmount: 2924.31,
        },
        payment: {
          accountRef: {
            id: "6e6177db-9db3-4b70-bfbb-6970ee770e36",
            name: "Violet Kshlerin",
          },
          currency: "USD",
          currencyRate: 8024.72,
          id: "206e61b0-d308-4714-820a-3d98637ca85c",
          note: "adipisci",
          paidOnDate: "2022-10-23T00:00:00.000Z",
          reference: "repudiandae",
          totalAmount: 4193.51,
        },
      },
      {
        allocation: {
          allocatedOnDate: "2022-10-23T00:00:00.000Z",
          currency: "GBP",
          currencyRate: 4780.21,
          totalAmount: 2820.79,
        },
        payment: {
          accountRef: {
            id: "dbaf94a7-c98f-413a-b28d-b2cf2bf4f3de",
            name: "Vincent Hansen",
          },
          currency: "USD",
          currencyRate: 8883.28,
          id: "14b21cd9-8196-4d55-af69-a1c4b79ae336",
          note: "praesentium",
          paidOnDate: "2022-10-23T00:00:00.000Z",
          reference: "eligendi",
          totalAmount: 1805.44,
        },
      },
    ],
    salesOrderRefs: [
      {
        dataType: "eligendi",
        id: "39a7c0e1-7cb1-42c5-ba82-5fe22cd5cba6",
      },
    ],
    sourceModifiedDate: "2022-10-23T00:00:00.000Z",
    status: InvoiceStatus.Paid,
    subTotal: 9961.28,
    supplementalData: {
      content: {
        "quisquam": {
          "amet": "consequuntur",
          "fuga": "a",
          "aliquid": "voluptatum",
        },
        "sunt": {
          "illum": "ea",
        },
        "veniam": {
          "delectus": "earum",
          "placeat": "saepe",
          "quod": "odit",
        },
        "assumenda": {
          "ea": "provident",
          "inventore": "ea",
          "repellat": "quam",
          "delectus": "minus",
        },
      },
    },
    totalAmount: 4677.01,
    totalDiscount: 8447.75,
    totalTaxAmount: 8284.89,
    withholdingTax: [
      {
        amount: 4773.62,
        name: "Kate Schowalter PhD",
      },
      {
        amount: 3877.68,
        name: "Melinda Heaney",
      },
      {
        amount: 2559.53,
        name: "Milton Bogisich I",
      },
    ],
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  timeoutInMinutes: 787873,
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
  invoiceId: "facere",
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
  invoiceId: "excepturi",
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
  invoiceId: "aut",
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
  invoiceId: "aspernatur",
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
  invoiceId: "odit",
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
  query: "molestiae",
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
  invoiceId: "recusandae",
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
    additionalTaxAmount: 2046.33,
    additionalTaxPercentage: 4704,
    amountDue: 7513.92,
    currency: "GBP",
    currencyRate: 8156.07,
    customerRef: {
      companyName: "iste",
      id: "77f1a549-1abe-4975-9b10-6d23e03e6981",
    },
    discountPercentage: 3304.02,
    dueDate: "2022-10-23T00:00:00.000Z",
    id: "ae99fcde-9e72-49c9-94f2-d8a44640ca60",
    invoiceNumber: "illum",
    issueDate: "2022-10-23T00:00:00.000Z",
    lineItems: [
      {
        accountRef: {
          id: "3a2f93f4-67dc-40d8-9a56-122026ab8f27",
          name: "Eleanor Lang",
        },
        description: "et",
        discountAmount: 5825.69,
        discountPercentage: 4501.13,
        isDirectIncome: false,
        itemRef: {
          id: "6af980da-7a08-49fc-84db-274530e5cc7c",
          name: "Doreen Ankunding",
        },
        quantity: 7667.05,
        subTotal: 9649.39,
        taxAmount: 8335.9,
        taxRateRef: {
          effectiveTaxRate: 7785.2,
          id: "d334b6f6-23bc-4eca-b50a-ee5e0da8b9af",
          name: "Mrs. Alberta Stoltenberg",
        },
        totalAmount: 5382.58,
        tracking: {
          categoryRefs: [
            {
              id: "e7b413cb-e2d1-476d-81c4-3d40f61d1711",
              name: "Joy Runolfsdottir",
            },
            {
              id: "5ee4f721-1840-4772-b32e-3b49dbe0f23b",
              name: "Lola Homenick",
            },
          ],
          customerRef: {
            companyName: "cupiditate",
            id: "48d6eded-4776-480f-87a1-7a82e5e82fd2",
          },
          isBilledTo: BilledToType1.NotApplicable,
          isRebilledTo: BilledToType1.Project,
          projectRef: {
            id: "1040a7e9-1392-4ab4-8cb1-835008f461ce",
            name: "Robin Treutel I",
          },
        },
        trackingCategoryRefs: [
          {
            id: "98a9ba46-0add-4fde-810c-37daa9182a49",
            name: "Sergio Jacobi",
          },
          {
            id: "d3caffc1-98ee-4a44-9279-2bcd440ea98b",
            name: "Guadalupe Sawayn II",
          },
        ],
        unitAmount: 5297.99,
      },
      {
        accountRef: {
          id: "6de0d56d-73b0-4055-83e8-dc626ff77c65",
          name: "Courtney Hamill",
        },
        description: "harum",
        discountAmount: 4443.84,
        discountPercentage: 256.53,
        isDirectIncome: false,
        itemRef: {
          id: "e3e4cfcc-6a91-4ec5-a624-d00014ef45ce",
          name: "Samuel Bruen",
        },
        quantity: 3285.77,
        subTotal: 2073.91,
        taxAmount: 8924.85,
        taxRateRef: {
          effectiveTaxRate: 6954.27,
          id: "b6587f34-0414-4c5b-9ace-e400ae9f92ca",
          name: "Mr. Joe Rogahn",
        },
        totalAmount: 9546.52,
        tracking: {
          categoryRefs: [
            {
              id: "d14718c6-fa2f-4ad0-806c-5d95472cdd14",
              name: "Sherman Gerlach",
            },
          ],
          customerRef: {
            companyName: "in",
            id: "0bca88fa-70c4-4335-9c3d-d1eb8f7f75f4",
          },
          isBilledTo: BilledToType1.Project,
          isRebilledTo: BilledToType1.Unknown,
          projectRef: {
            id: "3f1c0a58-6c3a-4e7d-bb67-feef5e142d95",
            name: "Ralph Stracke",
          },
        },
        trackingCategoryRefs: [
          {
            id: "eff7c4b1-56e9-4278-a75e-ea7681746806",
            name: "Mandy Kutch",
          },
          {
            id: "b7956c0b-0fa0-4bb2-8a40-e7c4ae640642",
            name: "Janice Jones",
          },
          {
            id: "b01a07c0-8fd3-4921-8257-930d6f093a3e",
            name: "Lorenzo Gutmann",
          },
          {
            id: "366dfa10-11a0-491b-bec8-b53862de1a9d",
            name: "Alicia Ziemann",
          },
        ],
        unitAmount: 1519.16,
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
          currency: "USD",
          currencyRate: 593.03,
          totalAmount: 2423.78,
        },
        payment: {
          accountRef: {
            id: "03dfc338-397f-4ffa-ad1d-32090fc157ac",
            name: "Ms. Aubrey Thiel",
          },
          currency: "GBP",
          currencyRate: 7529.61,
          id: "e9be41c8-69dd-47d9-b19d-07b200a58ffd",
          note: "consequuntur",
          paidOnDate: "2022-10-23T00:00:00.000Z",
          reference: "suscipit",
          totalAmount: 4825.35,
        },
      },
    ],
    salesOrderRefs: [
      {
        dataType: "delectus",
        id: "8fd882a8-e60b-4e62-8cd9-c5afdd04c375",
      },
      {
        dataType: "aspernatur",
        id: "512beae1-d87e-4cc5-bdce-a8e7a8831166",
      },
      {
        dataType: "ratione",
        id: "cda6d77c-1d86-4066-a37d-4227866db8a7",
      },
      {
        dataType: "labore",
        id: "9e398451-1cc7-45e4-b0c0-04b5bb758cc9",
      },
    ],
    sourceModifiedDate: "2022-10-23T00:00:00.000Z",
    status: InvoiceStatus.Submitted,
    subTotal: 3765.76,
    supplementalData: {
      content: {
        "delectus": {
          "consequatur": "suscipit",
        },
      },
    },
    totalAmount: 5771.02,
    totalDiscount: 4067.2,
    totalTaxAmount: 5272.66,
    withholdingTax: [
      {
        amount: 9529.5,
        name: "Owen Boyer IV",
      },
      {
        amount: 2334.63,
        name: "Dwight Fritsch",
      },
    ],
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  forceUpdate: false,
  invoiceId: "saepe",
  timeoutInMinutes: 139567,
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
    content: "modi".encode(),
    requestBody: "tenetur",
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  invoiceId: "explicabo",
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

