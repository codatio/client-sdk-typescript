# directIncomes

## Overview

Direct incomes

### Available Operations

* [create](#create) - Create direct income
* [downloadAttachment](#downloadattachment) - Download direct income attachment
* [get](#get) - Get direct income
* [getAttachment](#getattachment) - Get direct income attachment
* [getCreateModel](#getcreatemodel) - Get create direct income model
* [list](#list) - List direct incomes
* [listAttachments](#listattachments) - List direct income attachments
* [uploadAttachment](#uploadattachment) - Create direct income attachment

## create

Posts a new direct income to the accounting package for a given company.

Required data may vary by integration. To see what data to post, first call [Get create direct income model](https://docs.codat.io/accounting-api#/operations/get-create-directIncomes-model).

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=directIncomes) to see which integrations support this endpoint.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { CreateDirectIncomeResponse } from "@codat/accounting/dist/sdk/models/operations";
import { DataType, PushChangeType, PushOperationStatus } from "@codat/accounting/dist/sdk/models/shared";

const sdk = new CodatAccounting({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.directIncomes.create({
  directIncome: {
    contactRef: {
      dataType: "veniam",
      id: "118c2cc5-7fbd-460b-9a78-ed29a9d4eea8",
    },
    currency: "ullam",
    currencyRate: 3917.15,
    id: "58c2d4f4-c88b-4e4f-a78f-d9667e46c51d",
    issueDate: "dolores",
    lineItems: [
      {
        accountRef: {
          id: "faa58dce-f234-4c95-9b9b-df2190abd9bb",
          name: "Delbert Cummerata",
        },
        description: "ullam",
        discountAmount: 9045.07,
        discountPercentage: 7703.76,
        itemRef: {
          id: "2659ce02-8084-40c6-9ef6-8e45c8addfac",
          name: "Bernice Gottlieb Jr.",
        },
        quantity: 3079.36,
        subTotal: 2029.21,
        taxAmount: 462.58,
        taxRateRef: {
          effectiveTaxRate: 7597.31,
          id: "6632b439-1fdf-401c-be91-e8f7bc69d460",
          name: "Tyrone Kuhn",
        },
        totalAmount: 9053.64,
        trackingCategoryRefs: [
          {
            id: "26d10f1e-f263-41c7-80f0-f873f9d5c25f",
            name: "Miss Alfred VonRueden",
          },
          {
            id: "a4a4253c-3025-4711-b42c-7e7dc548be09",
            name: "Bradley Boyle",
          },
          {
            id: "a215ca12-a4ba-49d5-9988-192cfd0c77c5",
            name: "Meghan Koelpin",
          },
        ],
        unitAmount: 8136.42,
      },
      {
        accountRef: {
          id: "4ee6e8b9-0bac-4384-a239-6703fec31c50",
          name: "Shawn Gulgowski IV",
        },
        description: "perspiciatis",
        discountAmount: 6461.08,
        discountPercentage: 2236.36,
        itemRef: {
          id: "6a6b2d27-eb70-47aa-a0c8-fe46e6177db9",
          name: "Dominic Ernser",
        },
        quantity: 508.59,
        subTotal: 9759.09,
        taxAmount: 9767,
        taxRateRef: {
          effectiveTaxRate: 7372.75,
          id: "b6970ee7-70e3-4609-bef7-c206e61b0d30",
          name: "Kelly Blick",
        },
        totalAmount: 1644.32,
        trackingCategoryRefs: [
          {
            id: "a3d98637-ca85-4c3f-a655-74dbaf94a7c9",
            name: "Randal Blanda",
          },
        ],
        unitAmount: 9616.33,
      },
      {
        accountRef: {
          id: "28db2cf2-bf4f-43de-9356-d7e14b21cd98",
          name: "Faye Jacobi",
        },
        description: "quis",
        discountAmount: 6606.91,
        discountPercentage: 9651.45,
        itemRef: {
          id: "69a1c4b7-9ae3-4368-9c23-c39a7c0e17cb",
          name: "Jacqueline Russel",
        },
        quantity: 6321.21,
        subTotal: 5137.34,
        taxAmount: 1478.83,
        taxRateRef: {
          effectiveTaxRate: 3588.82,
          id: "fe22cd5c-ba6f-4bfe-8932-af6813d65bfe",
          name: "Elbert Schmidt",
        },
        totalAmount: 8717.9,
        trackingCategoryRefs: [
          {
            id: "916f7fc7-dda7-40ec-a0e6-075894d61c14",
            name: "Mr. Irving Mann",
          },
          {
            id: "7e37c0d9-77f1-4a54-91ab-e9751b106d23",
            name: "Kenneth Effertz",
          },
        ],
        unitAmount: 6179.29,
      },
      {
        accountRef: {
          id: "815aae99-fcde-49e7-a9c9-d4f2d8a44640",
          name: "Dr. Wilbur Jerde",
        },
        description: "nihil",
        discountAmount: 2079.6,
        discountPercentage: 6657.15,
        itemRef: {
          id: "2f93f467-dc0d-48da-9612-2026ab8f2774",
          name: "Ms. Greg Sanford",
        },
        quantity: 3771.77,
        subTotal: 6271.29,
        taxAmount: 9494,
        taxRateRef: {
          effectiveTaxRate: 6235.78,
          id: "80da7a08-9fc4-44db-a745-30e5cc7c6d0c",
          name: "Spencer Wintheiser",
        },
        totalAmount: 8196.32,
        trackingCategoryRefs: [
          {
            id: "34b6f623-bcec-4ab5-8aee-5e0da8b9af6a",
            name: "Christopher Hermiston",
          },
        ],
        unitAmount: 3905.07,
      },
    ],
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "repudiandae",
    note: "odio",
    paymentAllocations: [
      {
        allocation: {
          allocatedOnDate: "aliquam",
          currency: "quasi",
          currencyRate: 2144.25,
          totalAmount: 7771.39,
        },
        payment: {
          accountRef: {
            id: "be2d176d-c1c4-43d4-8f61-d171157cbe5e",
            name: "Francis Weimann",
          },
          currency: "quasi",
          currencyRate: 933.86,
          id: "840772f3-2e3b-449d-be0f-23b7b6d9948d",
          note: "aliquid",
          paidOnDate: "saepe",
          reference: "facere",
          totalAmount: 8999.7,
        },
      },
      {
        allocation: {
          allocatedOnDate: "fugiat",
          currency: "eius",
          currencyRate: 4515.93,
          totalAmount: 4844.89,
        },
        payment: {
          accountRef: {
            id: "680fc7a1-7a82-4e5e-82fd-28d1040a7e91",
            name: "Belinda Denesik",
          },
          currency: "incidunt",
          currencyRate: 3084.29,
          id: "cb183500-8f46-41ce-93e9-14498a9ba460",
          note: "similique",
          paidOnDate: "nulla",
          reference: "pariatur",
          totalAmount: 9692.94,
        },
      },
      {
        allocation: {
          allocatedOnDate: "temporibus",
          currency: "officiis",
          currencyRate: 2522.9,
          totalAmount: 826.1,
        },
        payment: {
          accountRef: {
            id: "0c37daa9-182a-449d-9625-d3caffc198ee",
            name: "Edwin Hagenes",
          },
          currency: "dignissimos",
          currencyRate: 6043.08,
          id: "2bcd440e-a98b-4ecc-a048-6de0d56d73b0",
          note: "quae",
          paidOnDate: "quis",
          reference: "nemo",
          totalAmount: 345.89,
        },
      },
    ],
    reference: "neque",
    sourceModifiedDate: "voluptates",
    subTotal: 5187.95,
    supplementalData: {
      content: {
        "impedit": {
          "explicabo": "ea",
          "doloribus": "maiores",
        },
        "nihil": {
          "impedit": "iure",
          "ullam": "aliquid",
        },
        "odio": {
          "delectus": "nostrum",
          "harum": "reprehenderit",
        },
        "sit": {
          "consectetur": "vero",
          "eius": "optio",
          "sapiente": "porro",
          "impedit": "vel",
        },
      },
    },
    taxAmount: 6786.31,
    totalAmount: 5828.22,
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  timeoutInMinutes: 69650,
}).then((res: CreateDirectIncomeResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## downloadAttachment

Downloads an attachment for the specified direct income for a given company.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { DownloadDirectIncomeAttachmentResponse } from "@codat/accounting/dist/sdk/models/operations";

const sdk = new CodatAccounting({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.directIncomes.downloadAttachment({
  attachmentId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  directIncomeId: "necessitatibus",
}).then((res: DownloadDirectIncomeAttachmentResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## get

Gets the specified direct income for a given company and connection.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { GetDirectIncomeResponse } from "@codat/accounting/dist/sdk/models/operations";

const sdk = new CodatAccounting({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.directIncomes.get({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  directIncomeId: "maxime",
}).then((res: GetDirectIncomeResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getAttachment

Gets the specified direct income attachment for a given company.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { GetDirectIncomeAttachmentResponse } from "@codat/accounting/dist/sdk/models/operations";

const sdk = new CodatAccounting({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.directIncomes.getAttachment({
  attachmentId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  directIncomeId: "veniam",
  timeoutInMinutes: 181673,
}).then((res: GetDirectIncomeAttachmentResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getCreateModel

Get create direct income model. Returns the expected data for the request payload.

See the examples for integration-specific indicative models.

> **Supported Integrations**
> 
> Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=directIncomes) for integrations that support creating direct incomes.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { GetCreateDirectIncomesModelResponse } from "@codat/accounting/dist/sdk/models/operations";
import { PushOptionType } from "@codat/accounting/dist/sdk/models/shared";

const sdk = new CodatAccounting({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.directIncomes.getCreateModel({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
}).then((res: GetCreateDirectIncomesModelResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## list

Lists the direct incomes for a given company.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { ListDirectIncomesResponse } from "@codat/accounting/dist/sdk/models/operations";

const sdk = new CodatAccounting({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.directIncomes.list({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  orderBy: "-modifiedDate",
  page: 1,
  pageSize: 100,
  query: "aliquid",
}).then((res: ListDirectIncomesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## listAttachments

Gets all attachments for the specified direct income for a given company.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { ListDirectIncomeAttachmentsResponse } from "@codat/accounting/dist/sdk/models/operations";

const sdk = new CodatAccounting({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.directIncomes.listAttachments({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  directIncomeId: "sed",
}).then((res: ListDirectIncomeAttachmentsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## uploadAttachment

Posts a new direct income attachment for a given company.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { UploadDirectIncomeAttachmentResponse } from "@codat/accounting/dist/sdk/models/operations";

const sdk = new CodatAccounting({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.directIncomes.uploadAttachment({
  requestBody: {
    content: "modi".encode(),
    requestBody: "at",
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  directIncomeId: "aperiam",
}).then((res: UploadDirectIncomeAttachmentResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
