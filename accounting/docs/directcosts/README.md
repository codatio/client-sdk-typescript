# directCosts

## Overview

Direct costs

### Available Operations

* [create](#create) - Create direct cost
* [downloadAttachment](#downloadattachment) - Download direct cost attachment
* [get](#get) - Get direct cost
* [getAttachment](#getattachment) - Get direct cost attachment
* [getCreateModel](#getcreatemodel) - Get create direct cost model
* [list](#list) - List direct costs
* [listAttachments](#listattachments) - List direct cost attachments
* [uploadAttachment](#uploadattachment) - Upload direct cost attachment

## create

Posts a new direct cost to the accounting package for a given company.

Required data may vary by integration. To see what data to post, first call [Get create direct cost model](https://docs.codat.io/accounting-api#/operations/get-create-directCosts-model).

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=directCosts) to see which integrations support this endpoint.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { CreateDirectCostResponse } from "@codat/accounting/dist/sdk/models/operations";
import { DataType, PushChangeType, PushOperationStatus } from "@codat/accounting/dist/sdk/models/shared";

const sdk = new CodatAccounting({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.directCosts.create({
  directCost: {
    contactRef: {
      dataType: "ratione",
      id: "f4eedbe7-8bf6-4068-a589-4ea763d5c727",
    },
    currency: "USD",
    currencyRate: 3378.33,
    id: "b785148d-6d54-49e5-a35b-33bc0f970c42",
    issueDate: "2022-10-23T00:00:00.000Z",
    lineItems: [
      {
        accountRef: {
          id: "9f484422-5e75-4b79-a065-c0efa6f93b90",
          name: "Jack Rau",
        },
        description: "unde",
        discountAmount: 3331.5,
        discountPercentage: 7243.07,
        itemRef: {
          id: "e1254b73-9f4f-4e77-a10d-1f6558c99c72",
          name: "Mona Considine",
        },
        quantity: 349.2,
        subTotal: 9387.73,
        taxAmount: 5669.15,
        taxRateRef: {
          effectiveTaxRate: 2568.9,
          id: "087d9caa-e042-4dd7-8aac-9b4caa1cfe9e",
          name: "Joann Stokes",
        },
        totalAmount: 576.67,
        tracking: {
          invoiceTo: {
            dataType: "amet",
            id: "907f3783-1983-4d42-a54a-85466597c502",
          },
          recordRefs: [
            {
              dataType: "nesciunt",
              id: "c1471d51-aaa6-4ddf-9abd-6487c5fc2b86",
            },
          ],
        },
        trackingCategoryRefs: [
          {
            id: "a00bef69-e100-4157-a30b-da7afded84a3",
            name: "Mr. Sonya Gutmann",
          },
        ],
        unitAmount: 5454,
      },
      {
        accountRef: {
          id: "e1a735ac-26ae-433b-af97-1a8f46bca110",
          name: "Marta Torphy",
        },
        description: "ipsam",
        discountAmount: 7436.31,
        discountPercentage: 4565.91,
        itemRef: {
          id: "11d08cf8-8ec9-4f7b-99a5-50a656ed333b",
          name: "Edward Sanford",
        },
        quantity: 6679.43,
        subTotal: 6847.08,
        taxAmount: 4224.44,
        taxRateRef: {
          effectiveTaxRate: 3351.76,
          id: "432a986e-b7e1-44ca-9640-89150097019a",
          name: "Gwendolyn Wintheiser",
        },
        totalAmount: 9368.8,
        tracking: {
          invoiceTo: {
            dataType: "impedit",
            id: "e7bf904e-0110-45d3-8908-162c6beb68a0",
          },
          recordRefs: [
            {
              dataType: "vel",
              id: "57b7d03a-1480-4f8d-a30f-069d810618d9",
            },
            {
              dataType: "voluptate",
              id: "e1522975-10da-4803-9229-2cc61c2a702b",
            },
            {
              dataType: "soluta",
              id: "97ee102d-a2de-435f-8e01-bf33eaab4540",
            },
            {
              dataType: "dolores",
              id: "ac1704bf-1cc9-4fc6-9aae-5eb5f0c492b5",
            },
          ],
        },
        trackingCategoryRefs: [
          {
            id: "44d08a22-67aa-4ee7-9e3c-71ad31becb83",
            name: "Martin Fahey",
          },
          {
            id: "ae3bfc23-d945-40a9-86a4-95bac707f06b",
            name: "Myrtle Walker",
          },
        ],
        unitAmount: 5431.22,
      },
      {
        accountRef: {
          id: "6492386f-62c9-469c-8cc6-b78890a3fd3c",
          name: "Jerry Spinka Jr.",
        },
        description: "asperiores",
        discountAmount: 5342.04,
        discountPercentage: 7596.13,
        itemRef: {
          id: "23df931d-a3ed-4b51-bad9-4acc94351377",
          name: "Mrs. Eileen Spinka",
        },
        quantity: 1584.51,
        subTotal: 1199.27,
        taxAmount: 7214.48,
        taxRateRef: {
          effectiveTaxRate: 5545.08,
          id: "32a56d69-180f-4f60-ab9a-6658e69a4b84",
          name: "Desiree Fisher",
        },
        totalAmount: 8447.03,
        tracking: {
          invoiceTo: {
            dataType: "harum",
            id: "ec75c68c-6065-4946-8ce3-04d8849bf821",
          },
          recordRefs: [
            {
              dataType: "eligendi",
              id: "337f96bb-0c69-4e37-adb1-344ba9f78a5c",
            },
            {
              dataType: "accusantium",
              id: "ed7aab62-e972-461f-b0c5-8d27b51996b5",
            },
          ],
        },
        trackingCategoryRefs: [
          {
            id: "4b50eef7-12b7-4a7a-b034-4b1710688dee",
            name: "Santiago Zboncak",
          },
          {
            id: "7f3dd0cc-d33f-411b-be4e-080aa104186e",
            name: "Darren Herman",
          },
          {
            id: "02f3702c-5c8e-42d3-8ead-3104fa44707b",
            name: "Johnny Kunze",
          },
        ],
        unitAmount: 2839.36,
      },
      {
        accountRef: {
          id: "4282821f-db2f-469e-9926-7c71cc8d3cd4",
          name: "Dolores Lehner I",
        },
        description: "ipsam",
        discountAmount: 5378.94,
        discountPercentage: 6718.73,
        itemRef: {
          id: "82c808fe-2751-4a20-87c0-449e143f9619",
          name: "Bennie Kirlin",
        },
        quantity: 460.36,
        subTotal: 8739.01,
        taxAmount: 3575.89,
        taxRateRef: {
          effectiveTaxRate: 6731.58,
          id: "11fa436e-6259-4233-b95c-9d237397c785",
          name: "Jorge Stokes",
        },
        totalAmount: 9792.55,
        tracking: {
          invoiceTo: {
            dataType: "quis",
            id: "00183feb-df67-46b7-a06d-ab750052a564",
          },
          recordRefs: [
            {
              dataType: "officiis",
              id: "dc439ed8-c432-40f4-9240-d4487ac693b9",
            },
            {
              dataType: "quaerat",
              id: "c3b9d248-8d79-45aa-82fc-405669f69a00",
            },
          ],
        },
        trackingCategoryRefs: [
          {
            id: "d2124945-0819-4d7c-bb1b-41844060e003",
            name: "Mr. Angela Schuppe",
          },
          {
            id: "dc901f5a-fd2a-46c4-8846-ae9d89253c89",
            name: "Kathryn Windler",
          },
        ],
        unitAmount: 5683.23,
      },
    ],
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "2022-10-23T00:00:00.000Z",
    note: "rerum",
    paymentAllocations: [
      {
        allocation: {
          allocatedOnDate: "2022-10-23T00:00:00.000Z",
          currency: "GBP",
          currencyRate: 9102.24,
          totalAmount: 2717.82,
        },
        payment: {
          accountRef: {
            id: "652d3c34-3d61-4778-af49-1247725e6219",
            name: "Violet Thiel Jr.",
          },
          currency: "GBP",
          currencyRate: 2893.22,
          id: "a5de59ac-7706-4670-8f1c-f5932605251e",
          note: "ex",
          paidOnDate: "2022-10-23T00:00:00.000Z",
          reference: "harum",
          totalAmount: 7414,
        },
      },
      {
        allocation: {
          allocatedOnDate: "2022-10-23T00:00:00.000Z",
          currency: "GBP",
          currencyRate: 3850.49,
          totalAmount: 5336.81,
        },
        payment: {
          accountRef: {
            id: "97d99a2d-3356-470e-93ee-6cf59f358aae",
            name: "Devin Nienow",
          },
          currency: "GBP",
          currencyRate: 2083.1,
          id: "a31bf7ba-1cc9-4771-ac80-2cc9e0c7d9d3",
          note: "dolores",
          paidOnDate: "2022-10-23T00:00:00.000Z",
          reference: "repellat",
          totalAmount: 647.23,
        },
      },
      {
        allocation: {
          allocatedOnDate: "2022-10-23T00:00:00.000Z",
          currency: "EUR",
          currencyRate: 4209.27,
          totalAmount: 1945.14,
        },
        payment: {
          accountRef: {
            id: "ed9cf1c8-56bc-4ba5-9ef2-454a47facf11",
            name: "Marianne Steuber",
          },
          currency: "GBP",
          currencyRate: 2914.14,
          id: "4a756287-3c7d-4d9e-baf4-3dc623620f31",
          note: "dolor",
          paidOnDate: "2022-10-23T00:00:00.000Z",
          reference: "doloribus",
          totalAmount: 2021.77,
        },
      },
      {
        allocation: {
          allocatedOnDate: "2022-10-23T00:00:00.000Z",
          currency: "EUR",
          currencyRate: 9458.52,
          totalAmount: 1945.26,
        },
        payment: {
          accountRef: {
            id: "db022faa-565f-4b8f-a52e-bb9d38383879",
            name: "Beverly Green",
          },
          currency: "GBP",
          currencyRate: 6212.3,
          id: "3dab30e9-17f5-40fd-a04c-8b1bb55a292b",
          note: "aut",
          paidOnDate: "2022-10-23T00:00:00.000Z",
          reference: "quo",
          totalAmount: 2482.32,
        },
      },
    ],
    reference: "libero",
    sourceModifiedDate: "2022-10-23T00:00:00.000Z",
    subTotal: 4850.26,
    supplementalData: {
      content: {
        "aliquam": {
          "nisi": "labore",
          "accusamus": "cum",
        },
        "sunt": {
          "voluptatem": "non",
          "ipsum": "laudantium",
          "totam": "facilis",
          "consequatur": "assumenda",
        },
      },
    },
    taxAmount: 1042.64,
    totalAmount: 7272.56,
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  timeoutInMinutes: 697864,
}).then((res: CreateDirectCostResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## downloadAttachment

Downloads an attachment for the specified direct cost for a given company.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { DownloadDirectCostAttachmentResponse } from "@codat/accounting/dist/sdk/models/operations";

const sdk = new CodatAccounting({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.directCosts.downloadAttachment({
  attachmentId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  directCostId: "architecto",
}).then((res: DownloadDirectCostAttachmentResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## get

Gets the specified direct cost for a given company.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { GetDirectCostResponse } from "@codat/accounting/dist/sdk/models/operations";

const sdk = new CodatAccounting({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.directCosts.get({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  directCostId: "in",
}).then((res: GetDirectCostResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getAttachment

Gets the specified direct cost attachment for a given company.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { GetDirectCostAttachmentResponse } from "@codat/accounting/dist/sdk/models/operations";

const sdk = new CodatAccounting({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.directCosts.getAttachment({
  attachmentId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  directCostId: "fuga",
}).then((res: GetDirectCostAttachmentResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getCreateModel

Get create direct cost model. Returns the expected data for the request payload.

See the examples for integration-specific indicative models.

> **Supported Integrations**
> 
> Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=directCosts) for integrations that support creating direct costs.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { GetCreateDirectCostsModelResponse } from "@codat/accounting/dist/sdk/models/operations";
import { PushOptionType } from "@codat/accounting/dist/sdk/models/shared";

const sdk = new CodatAccounting({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.directCosts.getCreateModel({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
}).then((res: GetCreateDirectCostsModelResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## list

Gets the direct costs for the company.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { ListDirectCostsResponse } from "@codat/accounting/dist/sdk/models/operations";

const sdk = new CodatAccounting({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.directCosts.list({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  orderBy: "-modifiedDate",
  page: 1,
  pageSize: 100,
  query: "tenetur",
}).then((res: ListDirectCostsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## listAttachments

Gets all attachments for the specified direct cost for a given company.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { ListDirectCostAttachmentsResponse } from "@codat/accounting/dist/sdk/models/operations";

const sdk = new CodatAccounting({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.directCosts.listAttachments({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  directCostId: "saepe",
}).then((res: ListDirectCostAttachmentsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## uploadAttachment

Posts a new direct cost attachment for a given company.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { UploadDirectCostAttachmentResponse } from "@codat/accounting/dist/sdk/models/operations";

const sdk = new CodatAccounting({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.directCosts.uploadAttachment({
  requestBody: {
    content: "eveniet".encode(),
    requestBody: "reprehenderit",
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  directCostId: "incidunt",
}).then((res: UploadDirectCostAttachmentResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
