# invoices

## Overview

Invoices

### Available Operations

* [downloadInvoicePdf](#downloadinvoicepdf) - Get invoice as PDF
* [createInvoice](#createinvoice) - Create invoice
* [deleteInvoice](#deleteinvoice) - Delete invoice
* [downloadInvoiceAttachment](#downloadinvoiceattachment) - Download invoice attachment
* [getCreateUpdateInvoicesModel](#getcreateupdateinvoicesmodel) - Get create/update invoice model
* [getInvoice](#getinvoice) - Get invoice
* [getInvoiceAttachment](#getinvoiceattachment) - Get invoice attachment
* [getInvoiceAttachments](#getinvoiceattachments) - Get invoice attachments
* [listInvoices](#listinvoices) - List invoices
* [updateInvoice](#updateinvoice) - Update invoice
* [uploadInvoiceAttachment](#uploadinvoiceattachment) - Push invoice attachment

## downloadInvoicePdf

Get invoice as PDF

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { DownloadInvoicePdfRequest, DownloadInvoicePdfResponse } from "@codat/accounting/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: DownloadInvoicePdfRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  invoiceId: "8a210b68-6988-11ed-a1eb-0242ac120002",
};

sdk.invoices.downloadInvoicePdf(req).then((res: DownloadInvoicePdfResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## createInvoice

Posts a new invoice to the accounting package for a given company.

Required data may vary by integration. To see what data to post, first call [Get create/update invoice model](https://docs.codat.io/accounting-api#/operations/get-create-update-invoices-model).

> **Supported Integrations**
> 
> Check out our [Knowledge UI](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=invoices) for integrations that support creating invoices.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { CreateInvoiceRequest, CreateInvoiceResponse } from "@codat/accounting/dist/sdk/models/operations";
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

const req: CreateInvoiceRequest = {
  invoice: {
    additionalTaxAmount: 4724.55,
    additionalTaxPercentage: 6309.47,
    amountDue: 6663.31,
    currency: "iure",
    currencyRate: 141.26,
    customerRef: {
      companyName: "placeat",
      id: "8fe46e61-77db-49db-bb70-ffbb6970ee77",
    },
    discountPercentage: 580.86,
    dueDate: "eveniet",
    id: "36097ef7-c206-4e61-b0d3-08714c20a3d9",
    invoiceNumber: "corrupti",
    issueDate: "ea",
    lineItems: [
      {
        accountRef: {
          id: "7ca85c3f-e655-474d-baf9-4a7c98f13af2",
          name: "Mack Rempel",
        },
        description: "sapiente",
        discountAmount: 1646.09,
        discountPercentage: 7103.52,
        isDirectIncome: false,
        itemRef: {
          id: "f4f3ded3-56d7-4e14-b21c-d98196d55af6",
          name: "Hubert Casper",
        },
        quantity: 7070.73,
        subTotal: 4962.61,
        taxAmount: 6175.35,
        taxRateRef: {
          effectiveTaxRate: 6847.46,
          id: "e33681c2-3c39-4a7c-8e17-cb12c5ba825f",
          name: "Nicholas Dare",
        },
        totalAmount: 3186.14,
        tracking: {
          categoryRefs: [
            {
              id: "ba6fbfec-932a-4f68-93d6-5bfecec2dd69",
              name: "Eileen Ziemann",
            },
            {
              id: "c7dda70e-c60e-4607-9894-d61c14cd9022",
              name: "Sophie Doyle",
            },
            {
              id: "0d977f1a-5491-4abe-9751-b106d23e03e6",
              name: "Dwight Casper",
            },
            {
              id: "ae99fcde-9e72-49c9-94f2-d8a44640ca60",
              name: "Geoffrey Kovacek",
            },
          ],
          customerRef: {
            companyName: "consequuntur",
            id: "f93f467d-c0d8-4da5-a122-026ab8f27748",
          },
          isBilledTo: BilledToTypeEnum1.NotApplicable,
          isRebilledTo: BilledToTypeEnum1.Project,
          projectRef: {
            id: "1976af98-0da7-4a08-9fc4-4db274530e5c",
            name: "Jared Schinner",
          },
        },
        trackingCategoryRefs: [
          {
            id: "cbcfdcd3-34b6-4f62-bbce-cab50aee5e0d",
            name: "Clifton Rippin",
          },
        ],
        unitAmount: 9594.77,
      },
    ],
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "nisi",
    note: "id",
    paidOnDate: "nulla",
    paymentAllocations: [
      {
        allocation: {
          allocatedOnDate: "ullam",
          currency: "incidunt",
          currencyRate: 5382.58,
          totalAmount: 3905.07,
        },
        payment: {
          accountRef: {
            id: "e7b413cb-e2d1-476d-81c4-3d40f61d1711",
            name: "Joy Runolfsdottir",
          },
          currency: "enim",
          currencyRate: 9324.15,
          id: "e4f72118-4077-42f3-ae3b-49dbe0f23b7b",
          note: "suscipit",
          paidOnDate: "fugiat",
          reference: "perspiciatis",
          totalAmount: 5855.5,
        },
      },
    ],
    salesOrderRefs: [
      "quas",
      "assumenda",
    ],
    sourceModifiedDate: "aliquid",
    status: InvoiceStatusEnum.Void,
    subTotal: 8165.56,
    supplementalData: {
      content: {
        "fugiat": {
          "voluptate": "odio",
          "voluptas": "deleniti",
        },
        "eaque": {
          "minus": "iure",
          "laborum": "ab",
          "iure": "deserunt",
          "blanditiis": "dolores",
        },
        "necessitatibus": {
          "vero": "totam",
          "eos": "delectus",
        },
        "illum": {
          "praesentium": "fugiat",
        },
      },
    },
    totalAmount: 1061.18,
    totalDiscount: 187.83,
    totalTaxAmount: 3114.84,
    withholdingTax: [
      {
        amount: 6869.46,
        name: "Mr. Henrietta Marquardt",
      },
    ],
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  timeoutInMinutes: 185041,
};

sdk.invoices.createInvoice(req).then((res: CreateInvoiceResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## deleteInvoice

Deletes an invoice from the accounting package for a given company.

> **Supported Integrations**
> 
> This functionality is currently only supported for our QuickBooks Online integration. Check out our [public roadmap](https://portal.productboard.com/codat/7-public-product-roadmap/tabs/46-accounting-api) to see what we're building next, and to submit ideas for new features.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { DeleteInvoiceRequest, DeleteInvoiceResponse } from "@codat/accounting/dist/sdk/models/operations";
import { DataTypeEnum, PushChangeTypeEnum, PushOperationStatusEnum } from "@codat/accounting/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: DeleteInvoiceRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  invoiceId: "8a210b68-6988-11ed-a1eb-0242ac120002",
};

sdk.invoices.deleteInvoice(req).then((res: DeleteInvoiceResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## downloadInvoiceAttachment

Download invoice attachments

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { DownloadInvoiceAttachmentRequest, DownloadInvoiceAttachmentResponse } from "@codat/accounting/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: DownloadInvoiceAttachmentRequest = {
  attachmentId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  invoiceId: "8a210b68-6988-11ed-a1eb-0242ac120002",
};

sdk.invoices.downloadInvoiceAttachment(req).then((res: DownloadInvoiceAttachmentResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## getCreateUpdateInvoicesModel

Get create/update invoice model. Returns the expected data for the request payload.

See the examples for integration-specific indicative models.

> **Supported Integrations**
> 
> Check out our [Knowledge UI](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=invoices) for integrations that support creating and updating invoices.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { GetCreateUpdateInvoicesModelRequest, GetCreateUpdateInvoicesModelResponse } from "@codat/accounting/dist/sdk/models/operations";
import { PushOptionTypeEnum } from "@codat/accounting/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: GetCreateUpdateInvoicesModelRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
};

sdk.invoices.getCreateUpdateInvoicesModel(req).then((res: GetCreateUpdateInvoicesModelResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## getInvoice

Get invoice

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { GetInvoiceRequest, GetInvoiceResponse } from "@codat/accounting/dist/sdk/models/operations";
import { BilledToTypeEnum1, InvoiceStatusEnum } from "@codat/accounting/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: GetInvoiceRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  invoiceId: "8a210b68-6988-11ed-a1eb-0242ac120002",
};

sdk.invoices.getInvoice(req).then((res: GetInvoiceResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## getInvoiceAttachment

Get invoice attachment

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { GetInvoiceAttachmentRequest, GetInvoiceAttachmentResponse } from "@codat/accounting/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: GetInvoiceAttachmentRequest = {
  attachmentId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  invoiceId: "8a210b68-6988-11ed-a1eb-0242ac120002",
};

sdk.invoices.getInvoiceAttachment(req).then((res: GetInvoiceAttachmentResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## getInvoiceAttachments

Get invoice attachments

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { GetInvoiceAttachmentsRequest, GetInvoiceAttachmentsResponse } from "@codat/accounting/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: GetInvoiceAttachmentsRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  invoiceId: "8a210b68-6988-11ed-a1eb-0242ac120002",
};

sdk.invoices.getInvoiceAttachments(req).then((res: GetInvoiceAttachmentsResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## listInvoices

Gets the latest invoices for a company, with pagination

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { ListInvoicesRequest, ListInvoicesResponse } from "@codat/accounting/dist/sdk/models/operations";
import { BilledToTypeEnum1, InvoiceStatusEnum } from "@codat/accounting/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: ListInvoicesRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  orderBy: "-modifiedDate",
  page: 1,
  pageSize: 100,
  query: "dolorum",
};

sdk.invoices.listInvoices(req).then((res: ListInvoicesResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## updateInvoice

Posts an updated invoice to the accounting package for a given company.

Required data may vary by integration. To see what data to post, first call [Get create/update invoice model](https://docs.codat.io/accounting-api#/operations/get-create-update-invoices-model).

> **Supported Integrations**
> 
> Check out our [Knowledge UI](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=invoices) for integrations that support updating invoices.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { UpdateInvoiceRequest, UpdateInvoiceResponse } from "@codat/accounting/dist/sdk/models/operations";
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

const req: UpdateInvoiceRequest = {
  invoice: {
    additionalTaxAmount: 7197.2,
    additionalTaxPercentage: 2761.77,
    amountDue: 3084.29,
    currency: "eligendi",
    currencyRate: 7102.56,
    customerRef: {
      companyName: "architecto",
      id: "835008f4-61ce-453e-9144-98a9ba460add",
    },
    discountPercentage: 9692.94,
    dueDate: "temporibus",
    id: "e410c37d-aa91-482a-89d9-625d3caffc19",
    invoiceNumber: "blanditiis",
    issueDate: "voluptates",
    lineItems: [
      {
        accountRef: {
          id: "a4452792-bcd4-440e-a98b-ecce0486de0d",
          name: "Jeanne Skiles",
        },
        description: "distinctio",
        discountAmount: 121.81,
        discountPercentage: 612.49,
        isDirectIncome: false,
        itemRef: {
          id: "5503e8dc-626f-4f77-8656-75f5b70e3e4c",
          name: "Gregg Russel",
        },
        quantity: 5828.22,
        subTotal: 696.5,
        taxAmount: 8969.21,
        taxRateRef: {
          effectiveTaxRate: 8038.15,
          id: "52624d00-014e-4f45-8ea1-1ac53ebb6587",
          name: "Mrs. Jeffery Gerlach II",
        },
        totalAmount: 8117.74,
        tracking: {
          categoryRefs: [
            {
              id: "b9acee40-0ae9-4f92-8af1-b025f1d14718",
              name: "Charlie Wolf DVM",
            },
            {
              id: "ad0c06c5-d954-472c-9d14-fc43b70bca88",
              name: "Miss Ernesto Kulas",
            },
          ],
          customerRef: {
            companyName: "consectetur",
            id: "351c3dd1-eb8f-47f7-9f4f-23f1c0a586c3",
          },
          isBilledTo: BilledToTypeEnum1.NotApplicable,
          isRebilledTo: BilledToTypeEnum1.Project,
          projectRef: {
            id: "7d7b67fe-ef5e-4142-995b-1dbeceff7c4b",
            name: "Dolores Jerde",
          },
        },
        trackingCategoryRefs: [
          {
            id: "78275eea-7681-4746-8063-f799b7956c0b",
            name: "Miss Mindy O'Keefe",
          },
        ],
        unitAmount: 1799.04,
      },
      {
        accountRef: {
          id: "0a40e7c4-ae64-4064-a726-57b01a07c08f",
          name: "Jimmy Morar DDS",
        },
        description: "dolores",
        discountAmount: 3486.63,
        discountPercentage: 4420.79,
        isDirectIncome: false,
        itemRef: {
          id: "930d6f09-3a3e-4fa4-ad36-6dfa1011a091",
          name: "Rodney Turcotte",
        },
        quantity: 7336.81,
        subTotal: 3503.06,
        taxAmount: 2447.13,
        taxRateRef: {
          effectiveTaxRate: 5203.56,
          id: "62de1a9d-14fe-472e-921f-90303dfc3383",
          name: "Javier Wisozk",
        },
        totalAmount: 6258.87,
        tracking: {
          categoryRefs: [
            {
              id: "d1d32090-fc15-47ac-9fe1-961ce9be41c8",
              name: "Belinda Stoltenberg",
            },
            {
              id: "d9719d07-b200-4a58-bfd2-967df8fd882a",
              name: "Miss Tomas Hodkiewicz",
            },
          ],
          customerRef: {
            companyName: "commodi",
            id: "20cd9c5a-fdd0-44c3-b525-12beae1d87ec",
          },
          isBilledTo: BilledToTypeEnum1.Project,
          isRebilledTo: BilledToTypeEnum1.NotApplicable,
          projectRef: {
            id: "fdcea8e7-a883-4116-a2cd-a6d77c1d8606",
            name: "Kathy Douglas",
          },
        },
        trackingCategoryRefs: [
          {
            id: "227866db-8a74-49e3-9845-11cc75e4f0c0",
            name: "Ellen Rodriguez",
          },
          {
            id: "b758cc94-562f-4006-9685-fcd1a173d84b",
            name: "Elias Connelly",
          },
        ],
        unitAmount: 1277.99,
      },
      {
        accountRef: {
          id: "9834afb0-735c-4b62-85d4-a29aaa1e1691",
          name: "Alma Ziemann",
        },
        description: "aspernatur",
        discountAmount: 9264.79,
        discountPercentage: 9197.03,
        isDirectIncome: false,
        itemRef: {
          id: "209505bf-03a9-43e9-8480-ca37fb107890",
          name: "Theresa O'Connell",
        },
        quantity: 2286.72,
        subTotal: 1995.11,
        taxAmount: 933.23,
        taxRateRef: {
          effectiveTaxRate: 4630.78,
          id: "2e2dd79e-c74b-4a7e-88dd-b36fd1ccc341",
          name: "Willard Johnston",
        },
        totalAmount: 2225.2,
        tracking: {
          categoryRefs: [
            {
              id: "74f0a740-fb4a-4b44-9c3a-09e763995d80",
              name: "Garry Reichel",
            },
            {
              id: "94455ebc-550a-41c4-a6b5-9c8366fdcc13",
              name: "Ida Lemke",
            },
          ],
          customerRef: {
            companyName: "et",
            id: "b855e889-d9ef-4932-a900-0a13ad812420",
          },
          isBilledTo: BilledToTypeEnum1.NotApplicable,
          isRebilledTo: BilledToTypeEnum1.Project,
          projectRef: {
            id: "fd234118-98e7-4387-9efb-e8baebabb794",
            name: "Rita Keeling",
          },
        },
        trackingCategoryRefs: [
          {
            id: "351bb976-3172-40b7-ba5a-5365a79f1527",
            name: "Miss Winifred Barton PhD",
          },
        ],
        unitAmount: 2078.87,
      },
      {
        accountRef: {
          id: "61fed8dc-5eff-4b45-be90-89e871fdb4d6",
          name: "Fernando Rippin",
        },
        description: "perspiciatis",
        discountAmount: 7911.41,
        discountPercentage: 5639.57,
        isDirectIncome: false,
        itemRef: {
          id: "85e43734-a5d7-42d9-add7-85be5e7afe55",
          name: "Kristina Kozey",
        },
        quantity: 3860.49,
        subTotal: 1265.14,
        taxAmount: 5110.98,
        taxRateRef: {
          effectiveTaxRate: 1221.01,
          id: "f44e3a23-394a-468c-880d-30ff72164d0a",
          name: "Keith Zulauf",
        },
        totalAmount: 8512.2,
        tracking: {
          categoryRefs: [
            {
              id: "6553b89e-0009-4c66-92de-7b3562201a6a",
              name: "Bennie Gislason",
            },
            {
              id: "7b1a5b90-8d4e-4304-91aa-35d4a839f03b",
              name: "Willis Krajcik",
            },
            {
              id: "918f0313-9845-407e-8e39-c7e23ecb0604",
              name: "Melanie Corkery",
            },
          ],
          customerRef: {
            companyName: "ipsum",
            id: "a3d6c657-e9de-48f7-b002-d1986aa99d3a",
          },
          isBilledTo: BilledToTypeEnum1.Unknown,
          isRebilledTo: BilledToTypeEnum1.Project,
          projectRef: {
            id: "32329e45-837e-48f2-ad6b-b10e255fdc48",
            name: "Krystal Hoeger",
          },
        },
        trackingCategoryRefs: [
          {
            id: "08675cbf-1868-456a-be82-cdf9d0fc282c",
            name: "Eileen Kassulke",
          },
        ],
        unitAmount: 1988.04,
      },
    ],
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "optio",
    note: "ratione",
    paidOnDate: "a",
    paymentAllocations: [
      {
        allocation: {
          allocatedOnDate: "nostrum",
          currency: "totam",
          currencyRate: 5904.76,
          totalAmount: 7165.27,
        },
        payment: {
          accountRef: {
            id: "ea5d264e-41e2-4ca8-8822-e513f6d9d2ad",
            name: "Nellie Schmeler V",
          },
          currency: "occaecati",
          currencyRate: 328.36,
          id: "77c10b68-7921-463e-a7d4-8860543c0a30",
          note: "labore",
          paidOnDate: "excepturi",
          reference: "quisquam",
          totalAmount: 2173.4,
        },
      },
      {
        allocation: {
          allocatedOnDate: "quod",
          currency: "voluptatibus",
          currencyRate: 3769.3,
          totalAmount: 7836.87,
        },
        payment: {
          accountRef: {
            id: "0276e7b2-1bad-490d-a743-fd6c2a10e6c2",
            name: "Erik Lindgren",
          },
          currency: "eos",
          currencyRate: 3181.5,
          id: "6a5b0922-7fcc-4479-96c9-77bbc57f3892",
          note: "quos",
          paidOnDate: "est",
          reference: "blanditiis",
          totalAmount: 3890.14,
        },
      },
    ],
    salesOrderRefs: [
      "eaque",
    ],
    sourceModifiedDate: "quo",
    status: InvoiceStatusEnum.Draft,
    subTotal: 5387.08,
    supplementalData: {
      content: {
        "eum": {
          "facere": "ea",
          "sequi": "voluptates",
        },
        "tempora": {
          "officia": "exercitationem",
          "laboriosam": "quos",
          "aliquam": "vel",
        },
        "numquam": {
          "odio": "omnis",
          "quo": "maiores",
        },
        "maxime": {
          "quisquam": "eaque",
          "officiis": "corporis",
        },
      },
    },
    totalAmount: 507.41,
    totalDiscount: 2229.84,
    totalTaxAmount: 9822.17,
    withholdingTax: [
      {
        amount: 4264.61,
        name: "Johnny Bins PhD",
      },
      {
        amount: 5621.97,
        name: "Al Ledner",
      },
    ],
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  forceUpdate: false,
  invoiceId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  timeoutInMinutes: 185898,
};

sdk.invoices.updateInvoice(req).then((res: UpdateInvoiceResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## uploadInvoiceAttachment

Push invoice attachment

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { UploadInvoiceAttachmentRequest, UploadInvoiceAttachmentResponse } from "@codat/accounting/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: UploadInvoiceAttachmentRequest = {
  requestBody: {
    content: "totam".encode(),
    requestBody: "recusandae",
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  invoiceId: "8a210b68-6988-11ed-a1eb-0242ac120002",
};

sdk.invoices.uploadInvoiceAttachment(req).then((res: UploadInvoiceAttachmentResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```
