# directIncomes

## Overview

Direct incomes

### Available Operations

* [createDirectIncome](#createdirectincome) - Create direct income
* [downloadDirectIncomeAttachment](#downloaddirectincomeattachment) - Download direct income attachment
* [getCreateDirectIncomesModel](#getcreatedirectincomesmodel) - Get create direct income model
* [getDirectIncome](#getdirectincome) - Get direct income
* [getDirectIncomeAttachment](#getdirectincomeattachment) - Get direct income attachment
* [getDirectIncomes](#getdirectincomes) - Get direct incomes
* [listDirectIncomeAttachments](#listdirectincomeattachments) - List direct income attachments
* [uploadDirectIncomeAttachment](#uploaddirectincomeattachment) - Create direct income attachment

## createDirectIncome

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
      dataType: "rem",
      id: "f652ebb9-d383-4838-b902-43b293dab30e",
    },
    currency: "excepturi",
    currencyRate: 1194.72,
    id: "7f50fda0-4c8b-41bb-95a2-92b0bc3bb744",
    issueDate: "laboriosam",
    lineItems: [
      {
        accountRef: {
          id: "4eb1d033-88b0-4d1b-b17a-fee74b6feb94",
          name: "Colleen Schmidt",
        },
        description: "illum",
        discountAmount: 6734.93,
        discountPercentage: 9682.72,
        itemRef: {
          id: "39d16fbf-76fd-4162-b303-e3023b93e343",
          name: "Jeanne Schowalter",
        },
        quantity: 3667.8,
        subTotal: 7436.12,
        taxAmount: 2976.24,
        taxRateRef: {
          effectiveTaxRate: 1923.84,
          id: "13553ccf-1c20-44c4-adcc-9904c5195b86",
          name: "Irma Rowe",
        },
        totalAmount: 6497.91,
        trackingCategoryRefs: [
          {
            id: "8f1e2d3b-901e-4095-abbb-4cbb19f713d9",
            name: "Mrs. Kristi Greenholt",
          },
          {
            id: "c1387271-e18e-4a9e-8511-8c2cc57fbd60",
            name: "Jack Paucek",
          },
        ],
        unitAmount: 9102.97,
      },
      {
        accountRef: {
          id: "d29a9d4e-ea85-4658-82d4-f4c88be4f278",
          name: "Laurence Mitchell",
        },
        description: "molestiae",
        discountAmount: 8828.26,
        discountPercentage: 2892.08,
        itemRef: {
          id: "6c51d2ff-aa58-4dce-b234-c955b9bdf219",
          name: "Alberta Rogahn",
        },
        quantity: 7129.08,
        subTotal: 6908.74,
        taxAmount: 7889.95,
        taxRateRef: {
          effectiveTaxRate: 7535.25,
          id: "2725ec26-59ce-4028-8840-c69ef68e45c8",
          name: "Taylor Schuster",
        },
        totalAmount: 7591.92,
        trackingCategoryRefs: [
          {
            id: "54500430-c663-42b4-b91f-df01c3e91e8f",
            name: "Jeannette Schmeler",
          },
          {
            id: "d460a77e-ceb2-46d1-8f1e-f2631c7c0f0f",
            name: "Allan Ebert",
          },
        ],
        unitAmount: 8159.77,
      },
    ],
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "veniam",
    note: "eligendi",
    paymentAllocations: [
      {
        allocation: {
          allocatedOnDate: "nemo",
          currency: "doloribus",
          currencyRate: 8503.86,
          totalAmount: 2499.41,
        },
        payment: {
          accountRef: {
            id: "e0b4a4a4-253c-4302-9711-f42c7e7dc548",
            name: "Bradford Balistreri",
          },
          currency: "numquam",
          currencyRate: 989.55,
          id: "a7a215ca-12a4-4ba9-9599-88192cfd0c77",
          note: "eligendi",
          paidOnDate: "ullam",
          reference: "dolorem",
          totalAmount: 8782.82,
        },
      },
    ],
    reference: "esse",
    sourceModifiedDate: "vero",
    subTotal: 4930.61,
    supplementalData: {
      content: {
        "eius": {
          "vero": "nisi",
          "recusandae": "deleniti",
          "nobis": "excepturi",
          "consequatur": "distinctio",
        },
        "similique": {
          "consectetur": "molestias",
          "modi": "saepe",
          "qui": "dolor",
          "sint": "ea",
        },
        "in": {
          "sequi": "maiores",
        },
        "itaque": {
          "adipisci": "sunt",
          "quo": "veniam",
          "sit": "deleniti",
          "qui": "dolore",
        },
      },
    },
    taxAmount: 8188.66,
    totalAmount: 1179.02,
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  timeoutInMinutes: 536427,
};

sdk.directIncomes.createDirectIncome(req).then((res: CreateDirectIncomeResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## downloadDirectIncomeAttachment

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

sdk.directIncomes.downloadDirectIncomeAttachment(req).then((res: DownloadDirectIncomeAttachmentResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## getCreateDirectIncomesModel

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

sdk.directIncomes.getCreateDirectIncomesModel(req).then((res: GetCreateDirectIncomesModelResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## getDirectIncome

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
  directIncomeId: "perspiciatis",
};

sdk.directIncomes.getDirectIncome(req).then((res: GetDirectIncomeResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## getDirectIncomeAttachment

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
  timeoutInMinutes: 646108,
};

sdk.directIncomes.getDirectIncomeAttachment(req).then((res: GetDirectIncomeAttachmentResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## getDirectIncomes

Gets the direct incomes for a given company.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { GetDirectIncomesRequest, GetDirectIncomesResponse } from "@codat/accounting/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: GetDirectIncomesRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  orderBy: "-modifiedDate",
  page: 1,
  pageSize: 100,
  query: "dolor",
};

sdk.directIncomes.getDirectIncomes(req).then((res: GetDirectIncomesResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## listDirectIncomeAttachments

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

sdk.directIncomes.listDirectIncomeAttachments(req).then((res: ListDirectIncomeAttachmentsResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## uploadDirectIncomeAttachment

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
    content: "eum".encode(),
    requestBody: "culpa",
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  directIncomeId: "iure",
};

sdk.directIncomes.uploadDirectIncomeAttachment(req).then((res: UploadDirectIncomeAttachmentResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```
