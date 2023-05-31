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
      dataType: "magni",
      id: "cdd14fc4-3b70-4bca-88fa-70c43351c3dd",
    },
    currency: "beatae",
    currencyRate: 8962.8,
    id: "b8f7f75f-4f23-4f1c-8a58-6c3ae7d7b67f",
    issueDate: "officiis",
    lineItems: [
      {
        accountRef: {
          id: "f5e142d9-5b1d-4bec-aff7-c4b156e92782",
          name: "Holly Toy",
        },
        description: "esse",
        discountAmount: 3851.06,
        discountPercentage: 5122.23,
        itemRef: {
          id: "17468063-f799-4b79-96c0-b0fa0bb20a40",
          name: "Roland Ryan",
        },
        quantity: 8828.41,
        subTotal: 3996.96,
        taxAmount: 3081.27,
        taxRateRef: {
          effectiveTaxRate: 498.27,
          id: "64272657-b01a-407c-88fd-3921c257930d",
          name: "Elisa Bailey",
        },
        totalAmount: 6488.15,
        trackingCategoryRefs: [
          {
            id: "efa46d36-6dfa-4101-9a09-1b3ec8b53862",
            name: "Alonzo Bins",
          },
        ],
        unitAmount: 8706.71,
      },
      {
        accountRef: {
          id: "14fe72e5-21f9-4030-bdfc-338397fffa6d",
          name: "Meredith Dickinson V",
        },
        description: "alias",
        discountAmount: 9869.41,
        discountPercentage: 7770.83,
        itemRef: {
          id: "157ac9fe-1961-4ce9-be41-c869dd7d9719",
          name: "Michael Kulas",
        },
        quantity: 154.46,
        subTotal: 498.92,
        taxAmount: 6470.89,
        taxRateRef: {
          effectiveTaxRate: 3619.89,
          id: "8ffd2967-df8f-4d88-aa8e-60be620cd9c5",
          name: "Darrin Schuppe II",
        },
        totalAmount: 7561.02,
        trackingCategoryRefs: [
          {
            id: "752512be-ae1d-487e-8c5f-dcea8e7a8831",
            name: "Lucy Howell",
          },
        ],
        unitAmount: 8726.91,
      },
      {
        accountRef: {
          id: "a6d77c1d-8606-4623-bd42-27866db8a749",
          name: "Glenn McLaughlin",
        },
        description: "exercitationem",
        discountAmount: 988.25,
        discountPercentage: 1089.18,
        itemRef: {
          id: "cc75e4f0-c004-4b5b-b758-cc94562f0069",
          name: "Gwendolyn Hickle",
        },
        quantity: 8194.9,
        subTotal: 955.55,
        taxAmount: 6650.46,
        taxRateRef: {
          effectiveTaxRate: 1149.02,
          id: "73d84bbe-24f2-4983-8afb-0735cb6285d4",
          name: "Fred Mitchell",
        },
        totalAmount: 6662.15,
        trackingCategoryRefs: [
          {
            id: "e169156f-7d2e-4e20-9505-bf03a93e9448",
            name: "Myra Pfannerstill",
          },
        ],
        unitAmount: 9771.81,
      },
      {
        accountRef: {
          id: "b1078903-2ac3-4331-b2e2-dd79ec74ba7e",
          name: "Jaime Schuster",
        },
        description: "ipsum",
        discountAmount: 4175.44,
        discountPercentage: 9669.27,
        itemRef: {
          id: "d1ccc341-c865-4734-b4f0-a740fb4ab441",
          name: "Ms. Dale Nolan",
        },
        quantity: 4588.95,
        subTotal: 4145.21,
        taxAmount: 2428.43,
        taxRateRef: {
          effectiveTaxRate: 5966.4,
          id: "95d808bb-e794-4455-abc5-50a1c426b59c",
          name: "Rodney Jerde",
        },
        totalAmount: 8142.27,
        trackingCategoryRefs: [
          {
            id: "c135582c-1b85-45e8-89d9-ef932e9000a1",
            name: "Sandy Stokes Sr.",
          },
          {
            id: "4208efd2-3411-4898-a738-79efbe8baeba",
            name: "Geoffrey Kuhic",
          },
          {
            id: "536e9035-1bb9-4763-9720-b77a5a5365a7",
            name: "Timmy Bernier",
          },
          {
            id: "71f01c0d-361f-4ed8-9c5e-ffb453e9089e",
            name: "Roland Bode",
          },
        ],
        unitAmount: 7471.07,
      },
    ],
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "ut",
    note: "at",
    paymentAllocations: [
      {
        allocation: {
          allocatedOnDate: "perspiciatis",
          currency: "molestiae",
          currencyRate: 7361.58,
          totalAmount: 8169.35,
        },
        payment: {
          accountRef: {
            id: "d9c985e4-3734-4a5d-b2d9-edd785be5e7a",
            name: "Sheldon Hermann",
          },
          currency: "occaecati",
          currencyRate: 4720.94,
          id: "ba6281f4-4e3a-4233-94a6-8cc80d30ff72",
          note: "illo",
          paidOnDate: "aliquid",
          reference: "quaerat",
          totalAmount: 8368.03,
        },
      },
      {
        allocation: {
          allocatedOnDate: "alias",
          currency: "deserunt",
          currencyRate: 5794.14,
          totalAmount: 1167.29,
        },
        payment: {
          accountRef: {
            id: "fe9d9655-3b89-4e00-89c6-692de7b35622",
            name: "Christine Nikolaus",
          },
          currency: "error",
          currencyRate: 7417.47,
          id: "4ae7b1a5-b908-4d4e-b049-1aa35d4a839f",
          note: "consequatur",
          paidOnDate: "ipsum",
          reference: "quidem",
          totalAmount: 6785.88,
        },
      },
    ],
    reference: "quidem",
    sourceModifiedDate: "molestiae",
    subTotal: 4410.01,
    supplementalData: {
      content: {
        "occaecati": {
          "blanditiis": "a",
        },
        "aut": {
          "dicta": "dolor",
        },
        "iste": {
          "ut": "exercitationem",
          "sit": "reprehenderit",
          "officiis": "accusantium",
        },
      },
    },
    taxAmount: 9159.68,
    totalAmount: 2348.84,
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  timeoutInMinutes: 577369,
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
  directIncomeId: "8a210b68-6988-11ed-a1eb-0242ac120002",
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
  directIncomeId: "impedit",
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
  directIncomeId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  timeoutInMinutes: 461855,
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
  query: "saepe",
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
  directIncomeId: "8a210b68-6988-11ed-a1eb-0242ac120002",
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
    content: "odit".encode(),
    requestBody: "consectetur",
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  directIncomeId: "itaque",
}).then((res: UploadDirectIncomeAttachmentResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
