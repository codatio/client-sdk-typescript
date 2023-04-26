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

> **Supported Integrations**
> 
> Check out our [Knowledge UI](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=directIncomes) for integrations that support creating direct incomes.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { CreateDirectIncomeRequest, CreateDirectIncomeResponse } from "@codat/accounting/dist/sdk/models/operations";
import { DataTypeEnum, PushChangeTypeEnum, PushOperationStatusEnum } from "@codat/accounting/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: CreateDirectIncomeRequest = {
  directIncome: {
    contactRef: {
      dataType: "amet",
      id: "d5c72795-b785-4148-96d5-49e5635b33bc",
    },
    currency: "voluptatem",
    currencyRate: 9791.61,
    id: "970c42fc-9f48-4442-a5e7-5b796065c0ef",
    issueDate: "culpa",
    lineItems: [
      {
        accountRef: {
          id: "f93b90a1-b8c9-45be-9254-b739f4fe7721",
          name: "Muriel Carroll",
        },
        description: "exercitationem",
        discountAmount: 3381.01,
        discountPercentage: 5546.44,
        itemRef: {
          id: "c99c722d-2bc0-4f94-887d-9caae042dd7c",
          name: "Carlton Schowalter",
        },
        quantity: 2667.52,
        subTotal: 7955.01,
        taxAmount: 6633.35,
        taxRateRef: {
          effectiveTaxRate: 6360.7,
          id: "1cfe9e15-df90-4390-bf37-831983d42e54",
          name: "Ken Herzog",
        },
        totalAmount: 4168.84,
        trackingCategoryRefs: [
          {
            id: "97c50233-c147-41d5-9aaa-6ddf5abd6487",
            name: "Bill Wisoky",
          },
          {
            id: "b862a00b-ef69-4e10-8157-630bda7afded",
            name: "Eddie Murazik",
          },
        ],
        unitAmount: 6774.73,
      },
      {
        accountRef: {
          id: "41238e1a-735a-4c26-ae33-bef971a8f46b",
          name: "Mr. Angelo Brakus",
        },
        description: "delectus",
        discountAmount: 8871.37,
        discountPercentage: 6076.72,
        itemRef: {
          id: "65b711d0-8cf8-48ec-9f7b-99a550a656ed",
          name: "Paula Frami",
        },
        quantity: 375.63,
        subTotal: 7773.99,
        taxAmount: 8863.66,
        taxRateRef: {
          effectiveTaxRate: 5147.78,
          id: "aa65432a-986e-4b7e-94ca-564089150097",
          name: "Catherine Mitchell",
        },
        totalAmount: 5264.96,
        trackingCategoryRefs: [
          {
            id: "88ece7bf-904e-4011-85d3-8908162c6beb",
            name: "Dr. Mattie Nader",
          },
          {
            id: "57b7d03a-1480-4f8d-a30f-069d810618d9",
            name: "Alyssa Casper",
          },
          {
            id: "297510da-8031-4229-acc6-1c2a702bb97e",
            name: "Carl Batz",
          },
          {
            id: "a2de35f8-e01b-4f33-aaab-45402ac1704b",
            name: "Justin Schmitt",
          },
        ],
        unitAmount: 9890.79,
      },
    ],
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "maxime",
    note: "ex",
    paymentAllocations: [
      {
        allocation: {
          allocatedOnDate: "deserunt",
          currency: "laborum",
          currencyRate: 9299.41,
          totalAmount: 3241.51,
        },
        payment: {
          accountRef: {
            id: "eb5f0c49-2b57-444d-88a2-267aaee79e3c",
            name: "Martha Orn",
          },
          currency: "et",
          currencyRate: 7321.72,
          id: "ecb83d23-78ae-43bf-823d-9450a986a495",
          note: "cum",
          paidOnDate: "dolorum",
          reference: "quod",
          totalAmount: 4715.35,
        },
      },
    ],
    reference: "quae",
    sourceModifiedDate: "ducimus",
    subTotal: 9483.77,
    supplementalData: {
      content: {
        "ex": {
          "magni": "laudantium",
          "repudiandae": "minus",
          "porro": "atque",
        },
      },
    },
    taxAmount: 4203.54,
    totalAmount: 2588.07,
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  timeoutInMinutes: 599915,
};

sdk.directIncomes.create(req).then((res: CreateDirectIncomeResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## downloadAttachment

Downloads an attachment for the specified direct income for a given company.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { DownloadDirectIncomeAttachmentRequest, DownloadDirectIncomeAttachmentResponse } from "@codat/accounting/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: DownloadDirectIncomeAttachmentRequest = {
  attachmentId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  directIncomeId: "8a210b68-6988-11ed-a1eb-0242ac120002",
};

sdk.directIncomes.downloadAttachment(req).then((res: DownloadDirectIncomeAttachmentResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## get

Gets the specified direct income for a given company and connection.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { GetDirectIncomeRequest, GetDirectIncomeResponse } from "@codat/accounting/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: GetDirectIncomeRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  directIncomeId: "sunt",
};

sdk.directIncomes.get(req).then((res: GetDirectIncomeResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## getAttachment

Gets the specified direct income attachment for a given company.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { GetDirectIncomeAttachmentRequest, GetDirectIncomeAttachmentResponse } from "@codat/accounting/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: GetDirectIncomeAttachmentRequest = {
  attachmentId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  directIncomeId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  timeoutInMinutes: 226197,
};

sdk.directIncomes.getAttachment(req).then((res: GetDirectIncomeAttachmentResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## getCreateModel

Get create direct income model. Returns the expected data for the request payload.

See the examples for integration-specific indicative models.

> **Supported Integrations**
> 
> Check out our [Knowledge UI](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=directIncomes) for integrations that support creating direct incomes.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { GetCreateDirectIncomesModelRequest, GetCreateDirectIncomesModelResponse } from "@codat/accounting/dist/sdk/models/operations";
import { PushOptionTypeEnum } from "@codat/accounting/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: GetCreateDirectIncomesModelRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
};

sdk.directIncomes.getCreateModel(req).then((res: GetCreateDirectIncomesModelResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## list

Lists the direct incomes for a given company.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { ListDirectIncomesRequest, ListDirectIncomesResponse } from "@codat/accounting/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: ListDirectIncomesRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  orderBy: "-modifiedDate",
  page: 1,
  pageSize: 100,
  query: "laudantium",
};

sdk.directIncomes.list(req).then((res: ListDirectIncomesResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## listAttachments

Gets all attachments for the specified direct income for a given company.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { ListDirectIncomeAttachmentsRequest, ListDirectIncomeAttachmentsResponse } from "@codat/accounting/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: ListDirectIncomeAttachmentsRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  directIncomeId: "8a210b68-6988-11ed-a1eb-0242ac120002",
};

sdk.directIncomes.listAttachments(req).then((res: ListDirectIncomeAttachmentsResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## uploadAttachment

Posts a new direct income attachment for a given company.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { UploadDirectIncomeAttachmentRequest, UploadDirectIncomeAttachmentResponse } from "@codat/accounting/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: UploadDirectIncomeAttachmentRequest = {
  requestBody: {
    content: "commodi".encode(),
    requestBody: "a",
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  directIncomeId: "aliquid",
};

sdk.directIncomes.uploadAttachment(req).then((res: UploadDirectIncomeAttachmentResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```
