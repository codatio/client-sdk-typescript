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

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=invoices) to see which integrations support this endpoint.


### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { CreateInvoiceResponse } from "@codat/accounting/dist/sdk/models/operations";
import { BilledToType1, DataType, InvoiceStatus, PushChangeType, PushOperationStatus } from "@codat/accounting/dist/sdk/models/shared";

const sdk = new CodatAccounting({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.invoices.create({
  invoice: {
    additionalTaxAmount: 4832.71,
    additionalTaxPercentage: 2115.84,
    amountDue: 8116.96,
    currency: "dignissimos",
    currencyRate: 8445.24,
    customerRef: {
      companyName: "placeat",
      id: "9efaf43d-c623-4620-b313-8f30df3db022",
    },
    discountPercentage: 9381.13,
    dueDate: "similique",
    id: "a565fb8f-652e-4bb9-9383-838790243b29",
    invoiceNumber: "ratione",
    issueDate: "facere",
    lineItems: [
      {
        accountRef: {
          id: "b30e917f-50fd-4a04-88b1-bb55a292b0bc",
          name: "Pam Quitzon",
        },
        description: "aliquam",
        discountAmount: 3855.01,
        discountPercentage: 3916.12,
        isDirectIncome: false,
        itemRef: {
          id: "4eb1d033-88b0-4d1b-b17a-fee74b6feb94",
          name: "Colleen Schmidt",
        },
        quantity: 8490.45,
        subTotal: 6734.93,
        taxAmount: 9682.72,
        taxRateRef: {
          effectiveTaxRate: 2309.03,
          id: "9d16fbf7-6fd1-462b-b03e-3023b93e3431",
          name: "Nichole Williamson",
        },
        totalAmount: 7436.12,
        tracking: {
          categoryRefs: [
            {
              id: "313553cc-f1c2-404c-8adc-c9904c5195b8",
              name: "Leslie Langosh",
            },
            {
              id: "fa78f1e2-d3b9-401e-8952-bbb4cbb19f71",
              name: "Meredith Mante",
            },
          ],
          customerRef: {
            companyName: "dolore",
            id: "169c1387-271e-418e-a9e4-5118c2cc57fb",
          },
          isBilledTo: BilledToType1.Project,
          isRebilledTo: BilledToType1.NotApplicable,
          projectRef: {
            id: "0b1a78ed-29a9-4d4e-aa85-658c2d4f4c88",
            name: "Pat Grant",
          },
        },
        trackingCategoryRefs: [
          {
            id: "8fd9667e-46c5-41d2-bfaa-58dcef234c95",
            name: "Kelli Mosciski",
          },
          {
            id: "f2190abd-9bbc-4c27-a5ec-2659ce028084",
            name: "Sadie Huel",
          },
        ],
        unitAmount: 9461.61,
      },
      {
        accountRef: {
          id: "68e45c8a-ddfa-4c75-8500-430c6632b439",
          name: "Jeannie Smitham Sr.",
        },
        description: "nobis",
        discountAmount: 2362.69,
        discountPercentage: 9294.26,
        isDirectIncome: false,
        itemRef: {
          id: "91e8f7bc-69d4-460a-b7ec-eb26d10f1ef2",
          name: "Crystal Bernier",
        },
        quantity: 7867.65,
        subTotal: 461.37,
        taxAmount: 9654.91,
        taxRateRef: {
          effectiveTaxRate: 163.7,
          id: "f873f9d5-c25f-4d3e-8b4a-4a4253c30257",
          name: "Rebecca Wunsch",
        },
        totalAmount: 8074.3,
        tracking: {
          categoryRefs: [
            {
              id: "e7dc548b-e09e-441a-ba21-5ca12a4ba9d5",
              name: "Fredrick Ledner V",
            },
            {
              id: "2cfd0c77-c53e-47e7-94ee-6e8b90bac384",
              name: "Shawn Fahey",
            },
          ],
          customerRef: {
            companyName: "in",
            id: "03fec31c-5082-44d1-89a3-6a6b2d27eb70",
          },
          isBilledTo: BilledToType1.NotApplicable,
          isRebilledTo: BilledToType1.NotApplicable,
          projectRef: {
            id: "a60c8fe4-6e61-477d-b9db-3b70ffbb6970",
            name: "Phil Kuhlman DVM",
          },
        },
        trackingCategoryRefs: [
          {
            id: "6097ef7c-206e-461b-8d30-8714c20a3d98",
            name: "Annie Koelpin",
          },
        ],
        unitAmount: 5213.33,
      },
      {
        accountRef: {
          id: "5c3fe655-74db-4af9-8a7c-98f13af28db2",
          name: "Timmy Cruickshank",
        },
        description: "eius",
        discountAmount: 9761.21,
        discountPercentage: 2074.59,
        isDirectIncome: false,
        itemRef: {
          id: "ded356d7-e14b-421c-9981-96d55af69a1c",
          name: "Shelley Kunze",
        },
        quantity: 9064.68,
        subTotal: 2021.61,
        taxAmount: 2477.82,
        taxRateRef: {
          effectiveTaxRate: 4269.64,
          id: "81c23c39-a7c0-4e17-8b12-c5ba825fe22c",
          name: "Lloyd Runolfsdottir",
        },
        totalAmount: 4047.58,
        tracking: {
          categoryRefs: [
            {
              id: "bfec932a-f681-43d6-9bfe-cec2dd6916f7",
              name: "Roosevelt Koss",
            },
            {
              id: "a70ec60e-6075-4894-961c-14cd90227e37",
              name: "Gary Schultz",
            },
            {
              id: "7f1a5491-abe9-4751-b106-d23e03e69815",
              name: "Rex Towne",
            },
            {
              id: "fcde9e72-9c9d-44f2-98a4-4640ca60db73",
              name: "Bobby Will",
            },
          ],
          customerRef: {
            companyName: "maiores",
            id: "467dc0d8-da56-4122-826a-b8f277485c19",
          },
          isBilledTo: BilledToType1.NotApplicable,
          isRebilledTo: BilledToType1.NotApplicable,
          projectRef: {
            id: "af980da7-a089-4fc4-8db2-74530e5cc7c6",
            name: "Richard Schmeler",
          },
        },
        trackingCategoryRefs: [
          {
            id: "dcd334b6-f623-4bce-8ab5-0aee5e0da8b9",
            name: "Darrin Hudson",
          },
          {
            id: "05486e7b-413c-4be2-9176-dc1c43d40f61",
            name: "Mr. Dennis Kilback",
          },
          {
            id: "7cbe5ee4-f721-4184-8772-f32e3b49dbe0",
            name: "Billy Franey",
          },
          {
            id: "b6d9948d-6ede-4d47-b680-fc7a17a82e5e",
            name: "Craig Windler",
          },
        ],
        unitAmount: 5097.39,
      },
    ],
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "fugiat",
    note: "beatae",
    paidOnDate: "perferendis",
    paymentAllocations: [
      {
        allocation: {
          allocatedOnDate: "aperiam",
          currency: "harum",
          currencyRate: 4794.64,
          totalAmount: 8934.34,
        },
        payment: {
          accountRef: {
            id: "91392ab4-4cb1-4835-808f-461ce53e9144",
            name: "Wallace O'Keefe",
          },
          currency: "deserunt",
          currencyRate: 2957.26,
          id: "60addfde-410c-437d-aa91-82a49d9625d3",
          note: "eligendi",
          paidOnDate: "laborum",
          reference: "delectus",
          totalAmount: 9680.39,
        },
      },
      {
        allocation: {
          allocatedOnDate: "minus",
          currency: "inventore",
          currencyRate: 5825.21,
          totalAmount: 5027.27,
        },
        payment: {
          accountRef: {
            id: "eea44527-92bc-4d44-8ea9-8becce0486de",
            name: "Dianna Hintz",
          },
          currency: "nihil",
          currencyRate: 2493.35,
          id: "b005503e-8dc6-426f-b77c-65675f5b70e3",
          note: "vero",
          paidOnDate: "eius",
          reference: "optio",
          totalAmount: 9589.07,
        },
      },
    ],
    salesOrderRefs: [
      {
        dataType: "impedit",
        id: "6a91ec52-624d-4000-94ef-45cea11ac53e",
      },
      {
        dataType: "quidem",
        id: "b6587f34-0414-4c5b-9ace-e400ae9f92ca",
      },
      {
        dataType: "earum",
        id: "1b025f1d-1471-48c6-ba2f-ad0c06c5d954",
      },
      {
        dataType: "in",
        id: "2cdd14fc-43b7-40bc-a88f-a70c43351c3d",
      },
    ],
    sourceModifiedDate: "nulla",
    status: InvoiceStatus.Unknown,
    subTotal: 8962.8,
    supplementalData: {
      content: {
        "deleniti": {
          "odio": "tenetur",
          "quam": "nemo",
          "sapiente": "magnam",
          "hic": "aspernatur",
        },
        "ipsum": {
          "quasi": "cumque",
          "eaque": "error",
          "corporis": "totam",
          "commodi": "maxime",
        },
        "non": {
          "repudiandae": "odio",
          "temporibus": "reprehenderit",
          "soluta": "voluptas",
        },
      },
    },
    totalAmount: 4838.96,
    totalDiscount: 9698.61,
    totalTaxAmount: 8864.96,
    withholdingTax: [
      {
        amount: 9451.88,
        name: "Gretchen Bergnaum",
      },
      {
        amount: 8642.28,
        name: "Dr. Dustin Reilly",
      },
      {
        amount: 9097.17,
        name: "Merle Yost",
      },
      {
        amount: 7789.75,
        name: "Hannah Bergnaum",
      },
    ],
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  timeoutInMinutes: 928900,
}).then((res: CreateInvoiceResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## delete

﻿The _Delete Invoices_ endpoint allows you to delete a specified Invoice from an accounting platform.

### Process
1. Pass the `{invoiceId}` to the _Delete Invoices_ endpoint and store the `pushOperationKey` returned.
2. Check the status of the delete operation by checking the status of push operation either via
    1. [Push operation webhook](/introduction/webhooks/core-rules-types#push-operation-status-has-changed) (advised),
    2. [Push operation status endpoint](https://docs.codat.io/codat-api#/operations/get-push-operation).

   A `Success` status indicates that the Invoice object was deleted from the accounting platform.
3. (Optional) Check that the Invoice was deleted from the accounting platform.

### Effect on related objects

Be aware that deleting an Invoice from an accounting platform might cause related objects to be modified. For example, if you delete a paid invoice from QuickBooks Online, the invoice is deleted but the payment against that invoice is not. The payment is converted to a payment on account.

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
import { DataType, PushChangeType, PushOperationStatus } from "@codat/accounting/dist/sdk/models/shared";

const sdk = new CodatAccounting({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.invoices.delete({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  invoiceId: "occaecati",
}).then((res: DeleteInvoiceResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## downloadAttachment

﻿Download invoice attachment.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { DownloadInvoicesAttachmentResponse } from "@codat/accounting/dist/sdk/models/operations";

const sdk = new CodatAccounting({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.invoices.downloadAttachment({
  attachmentId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  invoiceId: "odit",
}).then((res: DownloadInvoicesAttachmentResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

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
  invoiceId: "ducimus",
}).then((res: DownloadInvoicePdfResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## get

﻿Get an invoice.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { GetInvoiceResponse } from "@codat/accounting/dist/sdk/models/operations";
import { BilledToType1, InvoiceStatus } from "@codat/accounting/dist/sdk/models/shared";

const sdk = new CodatAccounting({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.invoices.get({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  invoiceId: "corrupti",
}).then((res: GetInvoiceResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getAttachment

﻿Get invoice attachment.

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
  invoiceId: "consequuntur",
}).then((res: GetInvoiceAttachmentResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getCreateUpdateModel

﻿Get create/update invoice model. Returns the expected data for the request payload.

See the examples for integration-specific indicative models.

> **Supported Integrations**
> 
> Check out our [Knowledge UI](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=invoices) for integrations that support creating and updating invoices.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { GetCreateUpdateInvoicesModelResponse } from "@codat/accounting/dist/sdk/models/operations";
import { PushOptionType } from "@codat/accounting/dist/sdk/models/shared";

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

## list

﻿Gets the latest invoices for a company, with pagination.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { ListInvoicesResponse } from "@codat/accounting/dist/sdk/models/operations";
import { BilledToType1, InvoiceStatus } from "@codat/accounting/dist/sdk/models/shared";

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
  query: "voluptate",
}).then((res: ListInvoicesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## listAttachments

﻿List invoice attachments

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
  invoiceId: "ipsam",
}).then((res: ListInvoiceAttachmentsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## update

﻿Posts an updated invoice to the accounting package for a given company.

Required data may vary by integration. To see what data to post, first call [Get create/update invoice model](https://docs.codat.io/accounting-api#/operations/get-create-update-invoices-model).

> **Supported Integrations**
> 
> Check out our [Knowledge UI](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=invoices) for integrations that support updating invoices.
operationId: update-invoice

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { UpdateInvoiceResponse } from "@codat/accounting/dist/sdk/models/operations";
import { BilledToType1, DataType, InvoiceStatus, PushChangeType, PushOperationStatus } from "@codat/accounting/dist/sdk/models/shared";

const sdk = new CodatAccounting({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.invoices.update({
  invoice: {
    additionalTaxAmount: 8902.78,
    additionalTaxPercentage: 9179.07,
    amountDue: 6424.25,
    currency: "esse",
    currencyRate: 3851.06,
    customerRef: {
      companyName: "laudantium",
      id: "17468063-f799-4b79-96c0-b0fa0bb20a40",
    },
    discountPercentage: 9171.02,
    dueDate: "reprehenderit",
    id: "c4ae6406-4272-4657-b01a-07c08fd3921c",
    invoiceNumber: "dolores",
    issueDate: "exercitationem",
    lineItems: [
      {
        accountRef: {
          id: "930d6f09-3a3e-4fa4-ad36-6dfa1011a091",
          name: "Rodney Turcotte",
        },
        description: "tempore",
        discountAmount: 3503.06,
        discountPercentage: 2447.13,
        isDirectIncome: false,
        itemRef: {
          id: "862de1a9-d14f-4e72-a521-f90303dfc338",
          name: "Faye Kozey",
        },
        quantity: 9437.98,
        subTotal: 6258.87,
        taxAmount: 4112.43,
        taxRateRef: {
          effectiveTaxRate: 8325.3,
          id: "1d32090f-c157-4ac9-be19-61ce9be41c86",
          name: "Drew Schultz",
        },
        totalAmount: 6057.59,
        tracking: {
          categoryRefs: [
            {
              id: "19d07b20-0a58-4ffd-a967-df8fd882a8e6",
              name: "Hannah Thompson",
            },
            {
              id: "0cd9c5af-dd04-4c37-9251-2beae1d87ecc",
              name: "Lucia Stoltenberg",
            },
          ],
          customerRef: {
            companyName: "animi",
            id: "8e7a8831-1662-4cda-ad77-c1d86066237d",
          },
          isBilledTo: BilledToType1.Unknown,
          isRebilledTo: BilledToType1.Unknown,
          projectRef: {
            id: "27866db8-a749-4e39-8451-1cc75e4f0c00",
            name: "Patty Harber",
          },
        },
        trackingCategoryRefs: [
          {
            id: "58cc9456-2f00-4696-85fc-d1a173d84bbe",
            name: "Miss Emma White",
          },
          {
            id: "34afb073-5cb6-4285-94a2-9aaa1e169156",
            name: "Adrian Schuster",
          },
        ],
        unitAmount: 9197.03,
      },
      {
        accountRef: {
          id: "209505bf-03a9-43e9-8480-ca37fb107890",
          name: "Theresa O'Connell",
        },
        description: "amet",
        discountAmount: 1995.11,
        discountPercentage: 933.23,
        isDirectIncome: false,
        itemRef: {
          id: "72e2dd79-ec74-4ba7-a88d-db36fd1ccc34",
          name: "Francis Macejkovic",
        },
        quantity: 4958.43,
        subTotal: 2225.2,
        taxAmount: 2974.63,
        taxRateRef: {
          effectiveTaxRate: 4391.23,
          id: "4f0a740f-b4ab-4441-83a0-9e763995d808",
          name: "Preston Thompson",
        },
        totalAmount: 2965.41,
        tracking: {
          categoryRefs: [
            {
              id: "55ebc550-a1c4-426b-99c8-366fdcc13558",
              name: "Rosalie Borer",
            },
            {
              id: "55e889d9-ef93-42e9-800a-13ad8124208e",
              name: "Wilfred Deckow",
            },
          ],
          customerRef: {
            companyName: "dicta",
            id: "1898e738-79ef-4be8-baeb-abb794536e90",
          },
          isBilledTo: BilledToType1.Unknown,
          isRebilledTo: BilledToType1.NotApplicable,
          projectRef: {
            id: "1bb97631-720b-477a-9a53-65a79f15271f",
            name: "Dr. Janet Sanford",
          },
        },
        trackingCategoryRefs: [
          {
            id: "1fed8dc5-effb-4453-a908-9e871fdb4d69",
            name: "Bridget Schumm",
          },
          {
            id: "c985e437-34a5-4d72-99ed-d785be5e7afe",
            name: "Cathy D'Amore",
          },
        ],
        unitAmount: 7352.56,
      },
    ],
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "mollitia",
    note: "laboriosam",
    paidOnDate: "explicabo",
    paymentAllocations: [
      {
        allocation: {
          allocatedOnDate: "sunt",
          currency: "repellat",
          currencyRate: 3036.95,
          totalAmount: 2670.94,
        },
        payment: {
          accountRef: {
            id: "e3a23394-a68c-4c80-930f-f72164d0a91f",
            name: "Eduardo Stark",
          },
          currency: "minima",
          currencyRate: 3654.98,
          id: "3b89e000-9c66-492d-a7b3-562201a6aab4",
          note: "deserunt",
          paidOnDate: "voluptates",
          reference: "in",
          totalAmount: 6889.51,
        },
      },
      {
        allocation: {
          allocatedOnDate: "vitae",
          currency: "fuga",
          currencyRate: 3711.71,
          totalAmount: 6917.11,
        },
        payment: {
          accountRef: {
            id: "908d4e30-491a-4a35-94a8-39f03bab77b9",
            name: "Mrs. Mattie Wilderman I",
          },
          currency: "iste",
          currencyRate: 5540.29,
          id: "4507e0e3-9c7e-423e-8b06-04652e23a3d6",
          note: "quo",
          paidOnDate: "voluptas",
          reference: "quis",
          totalAmount: 4438.01,
        },
      },
      {
        allocation: {
          allocatedOnDate: "vero",
          currency: "unde",
          currencyRate: 8413.46,
          totalAmount: 8936.05,
        },
        payment: {
          accountRef: {
            id: "8f7f002d-1986-4aa9-9d3a-1d32329e4583",
            name: "Alexis Lindgren",
          },
          currency: "officia",
          currencyRate: 8553.77,
          id: "6bb10e25-5fdc-4480-96e3-308675cbf186",
          note: "molestias",
          paidOnDate: "nostrum",
          reference: "vel",
          totalAmount: 6468.22,
        },
      },
    ],
    salesOrderRefs: [
      {
        dataType: "officiis",
        id: "82cdf9d0-fc28-42c6-a6af-3c3f5589bea5",
      },
      {
        dataType: "possimus",
        id: "264e41e2-ca84-4822-a513-f6d9d2ad37c3",
      },
    ],
    sourceModifiedDate: "eaque",
    status: InvoiceStatus.PartiallyPaid,
    subTotal: 5821.15,
    supplementalData: {
      content: {
        "iure": {
          "nobis": "quae",
          "sit": "rerum",
        },
      },
    },
    totalAmount: 3867.85,
    totalDiscount: 5362.23,
    totalTaxAmount: 4770.94,
    withholdingTax: [
      {
        amount: 1523.59,
        name: "Lucy Fahey",
      },
      {
        amount: 4686.34,
        name: "Kyle Ledner",
      },
      {
        amount: 608.42,
        name: "Eleanor Feeney MD",
      },
    ],
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  forceUpdate: false,
  invoiceId: "adipisci",
  timeoutInMinutes: 23984,
}).then((res: UpdateInvoiceResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## uploadAttachment

﻿Upload invoice attachment.

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
    content: "labore".encode(),
    requestBody: "excepturi",
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  invoiceId: "quisquam",
}).then((res: UploadInvoiceAttachmentResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
