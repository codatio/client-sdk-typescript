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

Posts a new invoice to the accounting package for a given company.

Required data may vary by integration. To see what data to post, first call [Get create/update invoice model](https://docs.codat.io/accounting-api#/operations/get-create-update-invoices-model).

> **Supported Integrations**
> 
> Check out our [Knowledge UI](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=invoices) for integrations that support creating invoices.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { CreateInvoiceResponse } from "@codat/accounting/dist/sdk/models/operations";
import {
  BilledToTypeEnum1,
  DataTypeEnum,
  InvoiceStatusEnum,
  PushChangeTypeEnum,
  PushOperationStatusEnum,
} from "@codat/accounting/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.invoices.create({
  invoice: {
    additionalTaxAmount: 3856.2,
    additionalTaxPercentage: 6970.56,
    amountDue: 4400.63,
    currency: "praesentium",
    currencyRate: 5207.16,
    customerRef: {
      companyName: "error",
      id: "0a3fd3c8-1da1-40f8-823d-f931da3edb51",
    },
    discountPercentage: 9961.99,
    dueDate: "est",
    id: "d94acc94-3513-4772-ad15-321b832a56d6",
    invoiceNumber: "sint",
    issueDate: "architecto",
    lineItems: [
      {
        accountRef: {
          id: "0ff60eb9-a665-48e6-9a4b-843d382dbec7",
          name: "Jacquelyn Jast",
        },
        description: "autem",
        discountAmount: 163.03,
        discountPercentage: 3914.99,
        isDirectIncome: false,
        itemRef: {
          id: "59468ce3-04d8-4849-bf82-14c337f96bb0",
          name: "Cecil Mohr",
        },
        quantity: 4625.93,
        subTotal: 1436.68,
        taxAmount: 8176.23,
        taxRateRef: {
          effectiveTaxRate: 7291.09,
          id: "1344ba9f-78a5-4c0e-97aa-b62e97261fb0",
          name: "Jerome Lowe",
        },
        totalAmount: 4514.48,
        tracking: {
          categoryRefs: [
            {
              id: "51996b5b-4b50-4eef-b12b-7a7ab0344b17",
              name: "Nancy Johnson",
            },
            {
              id: "deebef89-7f3d-4d0c-8d33-f11b3e4e080a",
              name: "Terry Bednar IV",
            },
            {
              id: "6ec759e0-2f37-402c-9c8e-2d30ead3104f",
              name: "Theodore Gerlach IV",
            },
          ],
          customerRef: {
            companyName: "rerum",
            id: "f375b442-8282-41fd-b2f6-9e59267c71cc",
          },
          isBilledTo: BilledToTypeEnum1.NotApplicable,
          isRebilledTo: BilledToTypeEnum1.Project,
          projectRef: {
            id: "3cd4258d-0358-4a82-8808-fe2751a2047c",
            name: "Marjorie Funk",
          },
        },
        trackingCategoryRefs: [
          {
            id: "43f9619b-b7d4-40d5-a11f-a436e6259233",
            name: "Luther Hane",
          },
        ],
        unitAmount: 8428.91,
      },
      {
        accountRef: {
          id: "237397c7-85b5-4db4-b500-183febdf676b",
          name: "Andrea Bashirian",
        },
        description: "deserunt",
        discountAmount: 7054.18,
        discountPercentage: 4503.12,
        isDirectIncome: false,
        itemRef: {
          id: "50052a56-47ed-4c43-9ed8-c4320f41240d",
          name: "Eva Lebsack",
        },
        quantity: 7842.87,
        subTotal: 3778.95,
        taxAmount: 5909.98,
        taxRateRef: {
          effectiveTaxRate: 2042.83,
          id: "b94c3b9d-2488-4d79-9aa4-2fc405669f69",
          name: "Frank Batz",
        },
        totalAmount: 1466.93,
        tracking: {
          categoryRefs: [
            {
              id: "24945081-9d7c-43b1-b418-44060e00310d",
              name: "Norma Frami",
            },
          ],
          customerRef: {
            companyName: "error",
            id: "01f5afd2-a6c4-4484-aae9-d89253c8962f",
          },
          isBilledTo: BilledToTypeEnum1.Unknown,
          isRebilledTo: BilledToTypeEnum1.NotApplicable,
          projectRef: {
            id: "96bf51e4-652d-43c3-83d6-1778af491247",
            name: "Anne Hamill",
          },
        },
        trackingCategoryRefs: [
          {
            id: "1909e910-44a5-4de5-9ac7-706670cf1cf5",
            name: "Jeffery Dibbert II",
          },
        ],
        unitAmount: 1280.87,
      },
      {
        accountRef: {
          id: "51e66bb4-2689-47d9-9a2d-335670e93ee6",
          name: "Dominick Hammes",
        },
        description: "dolorem",
        discountAmount: 3687.85,
        discountPercentage: 5295.29,
        isDirectIncome: false,
        itemRef: {
          id: "aaeacae3-23a3-41bf-bba1-cc97716c802c",
          name: "Dr. Kirk Veum",
        },
        quantity: 8218.96,
        subTotal: 6105.84,
        taxAmount: 8294.02,
        taxRateRef: {
          effectiveTaxRate: 2051.2,
          id: "23f1aa63-ed9c-4f1c-856b-cba51ef2454a",
          name: "Marlene Wolf",
        },
        totalAmount: 9973.54,
        tracking: {
          categoryRefs: [
            {
              id: "16cdd544-4a75-4628-b3c7-dd9efaf43dc6",
              name: "Victoria Jenkins DVM",
            },
          ],
          customerRef: {
            companyName: "nesciunt",
            id: "138f30df-3db0-422f-aa56-5fb8f652ebb9",
          },
          isBilledTo: BilledToTypeEnum1.Project,
          isRebilledTo: BilledToTypeEnum1.Unknown,
          projectRef: {
            id: "83838790-243b-4293-9ab3-0e917f50fda0",
            name: "Francis Lesch MD",
          },
        },
        trackingCategoryRefs: [
          {
            id: "55a292b0-bc3b-4b74-8664-eb1d03388b0d",
            name: "Ms. Jeannette Price",
          },
          {
            id: "fee74b6f-eb94-457c-beda-f39d16fbf76f",
            name: "Andrew Kerluke",
          },
          {
            id: "303e3023-b93e-4343-96cf-55b4313553cc",
            name: "Justin Schaefer II",
          },
        ],
        unitAmount: 8084.57,
      },
    ],
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "labore",
    note: "culpa",
    paidOnDate: "illum",
    paymentAllocations: [
      {
        allocation: {
          allocatedOnDate: "minus",
          currency: "sint",
          currencyRate: 5786.36,
          totalAmount: 286.46,
        },
        payment: {
          accountRef: {
            id: "4c5195b8-648c-4efa-b8f1-e2d3b901e095",
            name: "Beulah Pouros",
          },
          currency: "minus",
          currencyRate: 6917.42,
          id: "b19f713d-95a4-4169-8138-7271e18ea9e4",
          note: "veniam",
          paidOnDate: "illo",
          reference: "illo",
          totalAmount: 5361.81,
        },
      },
      {
        allocation: {
          allocatedOnDate: "quisquam",
          currency: "fugit",
          currencyRate: 7587.36,
          totalAmount: 7784.03,
        },
        payment: {
          accountRef: {
            id: "57fbd60b-1a78-4ed2-9a9d-4eea85658c2d",
            name: "Dixie Hackett",
          },
          currency: "quas",
          currencyRate: 6955.11,
          id: "e4f278fd-9667-4e46-851d-2ffaa58dcef2",
          note: "ratione",
          paidOnDate: "quaerat",
          reference: "minus",
          totalAmount: 6170.85,
        },
      },
      {
        allocation: {
          allocatedOnDate: "nostrum",
          currency: "veniam",
          currencyRate: 7312.33,
          totalAmount: 6180.63,
        },
        payment: {
          accountRef: {
            id: "bdf2190a-bd9b-4bcc-a725-ec2659ce0280",
            name: "Jesus Abernathy",
          },
          currency: "excepturi",
          currencyRate: 9071.7,
          id: "f68e45c8-addf-4ac7-9450-0430c6632b43",
          note: "provident",
          paidOnDate: "inventore",
          reference: "sapiente",
          totalAmount: 8387.98,
        },
      },
      {
        allocation: {
          allocatedOnDate: "sapiente",
          currency: "ipsa",
          currencyRate: 1140.37,
          totalAmount: 7509.59,
        },
        payment: {
          accountRef: {
            id: "3e91e8f7-bc69-4d46-8a77-eceb26d10f1e",
            name: "Alan Howell DDS",
          },
          currency: "nihil",
          currencyRate: 7867.65,
          id: "0f0f873f-9d5c-425f-93e0-b4a4a4253c30",
          note: "consequuntur",
          paidOnDate: "ullam",
          reference: "molestiae",
          totalAmount: 1037.45,
        },
      },
    ],
    salesOrderRefs: [
      "maiores",
    ],
    sourceModifiedDate: "labore",
    status: InvoiceStatusEnum.Unknown,
    subTotal: 8074.3,
    supplementalData: {
      content: {
        "recusandae": {
          "pariatur": "porro",
          "enim": "tempora",
        },
        "voluptatum": {
          "itaque": "sit",
          "excepturi": "recusandae",
          "numquam": "architecto",
        },
      },
    },
    totalAmount: 6845.98,
    totalDiscount: 4808.29,
    totalTaxAmount: 6330.56,
    withholdingTax: [
      {
        amount: 816.73,
        name: "Mr. Leticia Nitzsche",
      },
    ],
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  timeoutInMinutes: 289108,
}).then((res: CreateInvoiceResponse | AxiosError) => {
  if (res instanceof CreateInvoiceResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## delete

Deletes an invoice from the accounting package for a given company.

> **Supported Integrations**
> 
> This functionality is currently only supported for our QuickBooks Online integration. Check out our [public roadmap](https://portal.productboard.com/codat/7-public-product-roadmap/tabs/46-accounting-api) to see what we're building next, and to submit ideas for new features.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { DeleteInvoiceResponse } from "@codat/accounting/dist/sdk/models/operations";
import { DataTypeEnum, PushChangeTypeEnum, PushOperationStatusEnum } from "@codat/accounting/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.invoices.delete({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  invoiceId: "8a210b68-6988-11ed-a1eb-0242ac120002",
}).then((res: DeleteInvoiceResponse | AxiosError) => {
  if (res instanceof DeleteInvoiceResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## downloadAttachment

Download invoice attachments

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { DownloadInvoiceAttachmentResponse } from "@codat/accounting/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.invoices.downloadAttachment({
  attachmentId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  invoiceId: "8a210b68-6988-11ed-a1eb-0242ac120002",
}).then((res: DownloadInvoiceAttachmentResponse | AxiosError) => {
  if (res instanceof DownloadInvoiceAttachmentResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## downloadPdf

Get invoice as PDF

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { DownloadInvoicePdfResponse } from "@codat/accounting/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.invoices.downloadPdf({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  invoiceId: "8a210b68-6988-11ed-a1eb-0242ac120002",
}).then((res: DownloadInvoicePdfResponse | AxiosError) => {
  if (res instanceof DownloadInvoicePdfResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## get

Get invoice

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { GetInvoiceResponse } from "@codat/accounting/dist/sdk/models/operations";
import { BilledToTypeEnum1, InvoiceStatusEnum } from "@codat/accounting/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.invoices.get({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  invoiceId: "8a210b68-6988-11ed-a1eb-0242ac120002",
}).then((res: GetInvoiceResponse | AxiosError) => {
  if (res instanceof GetInvoiceResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## getAttachment

Get invoice attachment

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { GetInvoiceAttachmentResponse } from "@codat/accounting/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.invoices.getAttachment({
  attachmentId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  invoiceId: "8a210b68-6988-11ed-a1eb-0242ac120002",
}).then((res: GetInvoiceAttachmentResponse | AxiosError) => {
  if (res instanceof GetInvoiceAttachmentResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## getCreateUpdateModel

Get create/update invoice model. Returns the expected data for the request payload.

See the examples for integration-specific indicative models.

> **Supported Integrations**
> 
> Check out our [Knowledge UI](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=invoices) for integrations that support creating and updating invoices.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { GetCreateUpdateInvoicesModelResponse } from "@codat/accounting/dist/sdk/models/operations";
import { PushOptionTypeEnum } from "@codat/accounting/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.invoices.getCreateUpdateModel({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
}).then((res: GetCreateUpdateInvoicesModelResponse | AxiosError) => {
  if (res instanceof GetCreateUpdateInvoicesModelResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## list

Gets the latest invoices for a company, with pagination

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { ListInvoicesResponse } from "@codat/accounting/dist/sdk/models/operations";
import { BilledToTypeEnum1, InvoiceStatusEnum } from "@codat/accounting/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.invoices.list({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  orderBy: "-modifiedDate",
  page: 1,
  pageSize: 100,
  query: "harum",
}).then((res: ListInvoicesResponse | AxiosError) => {
  if (res instanceof ListInvoicesResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## listAttachments

List invoice attachments

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { ListInvoiceAttachmentsResponse } from "@codat/accounting/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.invoices.listAttachments({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  invoiceId: "8a210b68-6988-11ed-a1eb-0242ac120002",
}).then((res: ListInvoiceAttachmentsResponse | AxiosError) => {
  if (res instanceof ListInvoiceAttachmentsResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## update

Posts an updated invoice to the accounting package for a given company.

Required data may vary by integration. To see what data to post, first call [Get create/update invoice model](https://docs.codat.io/accounting-api#/operations/get-create-update-invoices-model).

> **Supported Integrations**
> 
> Check out our [Knowledge UI](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=invoices) for integrations that support updating invoices.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { UpdateInvoiceResponse } from "@codat/accounting/dist/sdk/models/operations";
import {
  BilledToTypeEnum1,
  DataTypeEnum,
  InvoiceStatusEnum,
  PushChangeTypeEnum,
  PushOperationStatusEnum,
} from "@codat/accounting/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.invoices.update({
  invoice: {
    additionalTaxAmount: 6791.83,
    additionalTaxPercentage: 5932.05,
    amountDue: 8445.45,
    currency: "ipsam",
    currencyRate: 5928.98,
    customerRef: {
      companyName: "omnis",
      id: "88192cfd-0c77-4c53-a7e7-d4ee6e8b90ba",
    },
    discountPercentage: 7821.55,
    dueDate: "consectetur",
    id: "84e23967-03fe-4c31-8508-24d189a36a6b",
    invoiceNumber: "sunt",
    issueDate: "facere",
    lineItems: [
      {
        accountRef: {
          id: "7eb707aa-60c8-4fe4-ae61-77db9db3b70f",
          name: "Jonathon Quigley",
        },
        description: "ducimus",
        discountAmount: 451.76,
        discountPercentage: 9196.52,
        isDirectIncome: false,
        itemRef: {
          id: "e770e360-97ef-47c2-86e6-1b0d308714c2",
          name: "Genevieve Erdman",
        },
        quantity: 5444.06,
        subTotal: 4105.74,
        taxAmount: 1937.94,
        taxRateRef: {
          effectiveTaxRate: 4604.15,
          id: "ca85c3fe-6557-44db-af94-a7c98f13af28",
          name: "Pete Crona",
        },
        totalAmount: 1646.09,
        tracking: {
          categoryRefs: [
            {
              id: "f4f3ded3-56d7-4e14-b21c-d98196d55af6",
              name: "Hubert Casper",
            },
            {
              id: "b79ae336-81c2-43c3-9a7c-0e17cb12c5ba",
              name: "Steve Herzog",
            },
            {
              id: "22cd5cba-6fbf-4ec9-b2af-6813d65bfece",
              name: "Fred Shields",
            },
          ],
          customerRef: {
            companyName: "provident",
            id: "16f7fc7d-da70-4ec6-8e60-75894d61c14c",
          },
          isBilledTo: BilledToTypeEnum1.Project,
          isRebilledTo: BilledToTypeEnum1.NotApplicable,
          projectRef: {
            id: "0227e37c-0d97-47f1-a549-1abe9751b106",
            name: "Clarence Dicki I",
          },
        },
        trackingCategoryRefs: [
          {
            id: "69815aae-99fc-4de9-a729-c9d4f2d8a446",
            name: "Mary Schamberger",
          },
          {
            id: "0db73a2f-93f4-467d-80d8-da56122026ab",
            name: "Emmett Davis",
          },
          {
            id: "485c1976-af98-40da-ba08-9fc44db27453",
            name: "Rochelle Hermiston",
          },
          {
            id: "7c6d0cbc-fdcd-4334-b6f6-23bcecab50ae",
            name: "Dr. Alvin Weber",
          },
        ],
        unitAmount: 5565.17,
      },
    ],
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "cum",
    note: "sint",
    paidOnDate: "laborum",
    paymentAllocations: [
      {
        allocation: {
          allocatedOnDate: "nisi",
          currency: "id",
          currencyRate: 8611.66,
          totalAmount: 202.23,
        },
        payment: {
          accountRef: {
            id: "5486e7b4-13cb-4e2d-976d-c1c43d40f61d",
            name: "Mrs. Melinda Borer",
          },
          currency: "cumque",
          currencyRate: 7322.16,
          id: "e5ee4f72-1184-4077-af32-e3b49dbe0f23",
          note: "harum",
          paidOnDate: "voluptate",
          reference: "distinctio",
          totalAmount: 3820.07,
        },
      },
      {
        allocation: {
          allocatedOnDate: "fugiat",
          currency: "perspiciatis",
          currencyRate: 5855.5,
          totalAmount: 2959.58,
        },
        payment: {
          accountRef: {
            id: "8d6eded4-7768-40fc-ba17-a82e5e82fd28",
            name: "Albert Auer MD",
          },
          currency: "iusto",
          currencyRate: 8934.34,
          id: "91392ab4-4cb1-4835-808f-461ce53e9144",
          note: "perspiciatis",
          paidOnDate: "rem",
          reference: "animi",
          totalAmount: 6129.79,
        },
      },
      {
        allocation: {
          allocatedOnDate: "libero",
          currency: "deserunt",
          currencyRate: 2957.26,
          totalAmount: 3918.99,
        },
        payment: {
          accountRef: {
            id: "0addfde4-10c3-47da-a918-2a49d9625d3c",
            name: "Toby Wisoky V",
          },
          currency: "blanditiis",
          currencyRate: 9171.68,
          id: "ea445279-2bcd-4440-aa98-becce0486de0",
          note: "repellendus",
          paidOnDate: "ipsam",
          reference: "aliquid",
          totalAmount: 8330.92,
        },
      },
      {
        allocation: {
          allocatedOnDate: "nihil",
          currency: "non",
          currencyRate: 7171.48,
          totalAmount: 121.81,
        },
        payment: {
          accountRef: {
            id: "05503e8d-c626-4ff7-bc65-675f5b70e3e4",
            name: "Darrin Sawayn",
          },
          currency: "dolorum",
          currencyRate: 5828.22,
          id: "1ec52624-d000-414e-b45c-ea11ac53ebb6",
          note: "nostrum",
          paidOnDate: "corrupti",
          reference: "odio",
          totalAmount: 9462.07,
        },
      },
    ],
    salesOrderRefs: [
      "eius",
    ],
    sourceModifiedDate: "voluptatem",
    status: InvoiceStatusEnum.Draft,
    subTotal: 647.33,
    supplementalData: {
      content: {
        "placeat": {
          "cum": "sint",
          "est": "quod",
        },
        "voluptates": {
          "non": "quae",
          "perferendis": "mollitia",
          "voluptates": "provident",
          "doloribus": "unde",
        },
      },
    },
    totalAmount: 1671.44,
    totalDiscount: 7933.34,
    totalTaxAmount: 6618.61,
    withholdingTax: [
      {
        amount: 1012.53,
        name: "Jose D'Amore",
      },
      {
        amount: 1005.96,
        name: "Justin Gusikowski IV",
      },
      {
        amount: 8059.91,
        name: "Dr. Tami O'Reilly",
      },
      {
        amount: 8418.47,
        name: "Erma Barton",
      },
    ],
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  forceUpdate: false,
  invoiceId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  timeoutInMinutes: 329849,
}).then((res: UpdateInvoiceResponse | AxiosError) => {
  if (res instanceof UpdateInvoiceResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## uploadAttachment

Push invoice attachment

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { UploadInvoiceAttachmentResponse } from "@codat/accounting/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.invoices.uploadAttachment({
  requestBody: {
    content: "facere".encode(),
    requestBody: "excepturi",
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  invoiceId: "8a210b68-6988-11ed-a1eb-0242ac120002",
}).then((res: UploadInvoiceAttachmentResponse | AxiosError) => {
  if (res instanceof UploadInvoiceAttachmentResponse && res.statusCode == 200) {
    // handle response
  }
});
```
