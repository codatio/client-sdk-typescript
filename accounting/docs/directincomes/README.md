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
      dataType: "placeat",
      id: "9b4caa1c-fe9e-415d-b903-907f37831983",
    },
    currency: "fugiat",
    currencyRate: 2628.24,
    id: "2e54a854-6659-47c5-8233-c1471d51aaa6",
    issueDate: "illum",
    lineItems: [
      {
        accountRef: {
          id: "f5abd648-7c5f-4c2b-862a-00bef69e1001",
          name: "Jo Homenick DDS",
        },
        description: "quibusdam",
        discountAmount: 6828.88,
        discountPercentage: 4685.8,
        itemRef: {
          id: "afded84a-35a4-4123-8e1a-735ac26ae33b",
          name: "Cary Medhurst MD",
        },
        quantity: 5021.5,
        subTotal: 9993.15,
        taxAmount: 2679.18,
        taxRateRef: {
          effectiveTaxRate: 4014.66,
          id: "bca1106f-e965-4b71-9d08-cf88ec9f7b99",
          name: "Miss Maurice Hauck",
        },
        totalAmount: 3393.33,
        trackingCategoryRefs: [
          {
            id: "ed333bb0-ce8a-4a65-832a-986eb7e14ca5",
            name: "Ellen Baumbach",
          },
          {
            id: "15009701-9a48-4f88-ace7-bf904e01105d",
            name: "Ms. Marsha Marks III",
          },
        ],
        unitAmount: 1337.9,
      },
      {
        accountRef: {
          id: "c6beb68a-0f65-47b7-903a-1480f8de30f0",
          name: "Shelly Steuber Jr.",
        },
        description: "commodi",
        discountAmount: 1030.68,
        discountPercentage: 5433.17,
        itemRef: {
          id: "d97e1522-9751-40da-8031-2292cc61c2a7",
          name: "Kathy Reichel",
        },
        quantity: 4877.46,
        subTotal: 9182.86,
        taxAmount: 8796.44,
        taxRateRef: {
          effectiveTaxRate: 935.56,
          id: "02da2de3-5f8e-401b-b33e-aab45402ac17",
          name: "Amber Rogahn DDS",
        },
        totalAmount: 8111.67,
        trackingCategoryRefs: [
          {
            id: "fc61aae5-eb5f-40c4-92b5-744d08a2267a",
            name: "Sheldon Toy",
          },
          {
            id: "e3c71ad3-1bec-4b83-9237-8ae3bfc23d94",
            name: "Sarah Okuneva",
          },
          {
            id: "6a495bac-707f-406b-a8ec-c86492386f62",
            name: "Wade Kemmer",
          },
        ],
        unitAmount: 2765.07,
      },
      {
        accountRef: {
          id: "cc6b7889-0a3f-4d3c-81da-10f8c23df931",
          name: "Homer Franecki",
        },
        description: "tempore",
        discountAmount: 3267.12,
        discountPercentage: 1152.02,
        itemRef: {
          id: "fad94acc-9435-4137-b26d-15321b832a56",
          name: "Ms. Brent Marquardt DVM",
        },
        quantity: 9463.17,
        subTotal: 4373.51,
        taxAmount: 84.69,
        taxRateRef: {
          effectiveTaxRate: 8836.41,
          id: "b9a6658e-69a4-4b84-bd38-2dbec75c68c6",
          name: "Alma Hartmann",
        },
        totalAmount: 3818.37,
        trackingCategoryRefs: [
          {
            id: "ce304d88-49bf-4821-8c33-7f96bb0c69e3",
            name: "Theresa Schumm I",
          },
          {
            id: "44ba9f78-a5c0-4ed7-aab6-2e97261fb0c5",
            name: "Lionel Connelly",
          },
          {
            id: "51996b5b-4b50-4eef-b12b-7a7ab0344b17",
            name: "Nancy Johnson",
          },
        ],
        unitAmount: 8478.05,
      },
      {
        accountRef: {
          id: "eebef897-f3dd-40cc-933f-11b3e4e080aa",
          name: "Ms. Cynthia Gorczany",
        },
        description: "accusamus",
        discountAmount: 7590.59,
        discountPercentage: 4841.4,
        itemRef: {
          id: "59e02f37-02c5-4c8e-ad30-ead3104fa447",
          name: "Tanya Prohaska",
        },
        quantity: 4960.06,
        subTotal: 3249.55,
        taxAmount: 7261.44,
        taxRateRef: {
          effectiveTaxRate: 2839.36,
          id: "4282821f-db2f-469e-9926-7c71cc8d3cd4",
          name: "Dolores Lehner I",
        },
        totalAmount: 3691.81,
        trackingCategoryRefs: [
          {
            id: "a82c808f-e275-41a2-847c-0449e143f961",
            name: "Kelvin Robel",
          },
          {
            id: "40d5a11f-a436-4e62-9923-3f95c9d23739",
            name: "Leticia Kris",
          },
          {
            id: "b5db4f50-0183-4feb-9f67-6b7206dab750",
            name: "Jill Davis",
          },
        ],
        unitAmount: 3951.94,
      },
    ],
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "dolore",
    note: "in",
    paymentAllocations: [
      {
        allocation: {
          allocatedOnDate: "fugiat",
          currency: "minus",
          currencyRate: 2693.91,
          totalAmount: 1928.71,
        },
        payment: {
          accountRef: {
            id: "9ed8c432-0f41-4240-9448-7ac693b94c3b",
            name: "Ismael Cummings",
          },
          currency: "blanditiis",
          currencyRate: 8422.41,
          id: "795aa42f-c405-4669-b69a-006d21249450",
          note: "atque",
          paidOnDate: "quasi",
          reference: "natus",
          totalAmount: 8518.84,
        },
      },
      {
        allocation: {
          allocatedOnDate: "odio",
          currency: "quo",
          currencyRate: 2153.91,
          totalAmount: 7379.94,
        },
        payment: {
          accountRef: {
            id: "1b418440-60e0-4031-8d02-3dc901f5afd2",
            name: "Rafael Sanford",
          },
          currency: "praesentium",
          currencyRate: 2573.24,
          id: "6ae9d892-53c8-4962-b489-6bf51e4652d3",
          note: "cumque",
          paidOnDate: "nesciunt",
          reference: "aliquam",
          totalAmount: 2338.04,
        },
      },
      {
        allocation: {
          allocatedOnDate: "at",
          currency: "suscipit",
          currencyRate: 625.56,
          totalAmount: 4649.44,
        },
        payment: {
          accountRef: {
            id: "78af4912-4772-45e6-a190-9e91044a5de5",
            name: "Shaun Schowalter",
          },
          currency: "eaque",
          currencyRate: 3973.05,
          id: "670cf1cf-5932-4605-a51e-66bb426897d9",
          note: "omnis",
          paidOnDate: "dolorum",
          reference: "qui",
          totalAmount: 8610.2,
        },
      },
      {
        allocation: {
          allocatedOnDate: "velit",
          currency: "amet",
          currencyRate: 3714.09,
          totalAmount: 3815.34,
        },
        payment: {
          accountRef: {
            id: "70e93ee6-cf59-4f35-8aae-acae323a31bf",
            name: "Miss Luz Osinski",
          },
          currency: "molestias",
          currencyRate: 4623.08,
          id: "716c802c-c9e0-4c7d-9d32-3f1aa63ed9cf",
          note: "et",
          paidOnDate: "nobis",
          reference: "quas",
          totalAmount: 3675.11,
        },
      },
    ],
    reference: "commodi",
    sourceModifiedDate: "soluta",
    subTotal: 7787.26,
    supplementalData: {
      content: {
        "id": {
          "inventore": "accusamus",
          "maiores": "odit",
        },
        "numquam": {
          "numquam": "culpa",
          "aliquam": "iusto",
        },
        "voluptatibus": {
          "maxime": "repellat",
          "veritatis": "inventore",
          "autem": "optio",
        },
      },
    },
    taxAmount: 8552.86,
    totalAmount: 8174.25,
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  timeoutInMinutes: 349223,
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
  directIncomeId: "ut",
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
  directIncomeId: "dolore",
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
  directIncomeId: "numquam",
  timeoutInMinutes: 639401,
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
  query: "reprehenderit",
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
  directIncomeId: "nemo",
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
    content: "nisi".encode(),
    requestBody: "consequuntur",
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  directIncomeId: "praesentium",
}).then((res: UploadDirectIncomeAttachmentResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
