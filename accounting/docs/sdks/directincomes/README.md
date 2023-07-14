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

The *Create direct income* endpoint creates a new [direct income](https://docs.codat.io/accounting-api#/schemas/DirectIncome) for a given company's connection.

[Direct incomes](https://docs.codat.io/accounting-api#/schemas/DirectIncome) are sales of items directly to a customer where payment is received at the point of the sale.

**Integration-specific behaviour**

Required data may vary by integration. To see what data to post, first call [Get create direct income model](https://docs.codat.io/accounting-api#/operations/get-create-directIncomes-model).

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=directIncomes) for integrations that support creating an account.


### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { CreateDirectIncomeResponse } from "@codat/accounting/dist/sdk/models/operations";

const sdk = new CodatAccounting({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.directIncomes.create({
  directIncome: {
    contactRef: {
      dataType: "totam",
      id: "9c8a3263-9da5-4b7b-a902-b881a94f6436",
    },
    currency: "USD",
    currencyRate: 2725.62,
    id: "a8f0af8c-691d-4732-99fb-af9476a2ae8d",
    issueDate: "2022-10-23T00:00:00.000Z",
    lineItems: [
      {
        accountRef: {
          id: "50c8a351-2c73-4784-8930-750a00e966ec",
          name: "Florence Keeling",
        },
        description: "neque",
        discountAmount: 816.89,
        discountPercentage: 6064.72,
        itemRef: {
          id: "4398c783-c923-498e-93d3-ab7ca3c5ca86",
          name: "Isabel Okuneva DDS",
        },
        quantity: 9687.73,
        subTotal: 8458.89,
        taxAmount: 3297,
        taxRateRef: {
          effectiveTaxRate: 8638.28,
          id: "6989b720-6451-4077-919e-a83d492ed14b",
          name: "Blake Connelly V",
        },
        totalAmount: 3475.83,
        trackingCategoryRefs: [
          {
            id: "545e955d-cc18-45ea-8901-c7c43ad2daa7",
            name: "Troy Murphy",
          },
          {
            id: "3d230edf-7381-41a1-9538-2bd7ed565076",
            name: "Christine Sauer",
          },
        ],
        unitAmount: 9851.55,
      },
      {
        accountRef: {
          id: "4d739656-4c20-4a07-91a9-61d24a7dbb8f",
          name: "Shannon Cremin",
        },
        description: "perspiciatis",
        discountAmount: 1421.56,
        discountPercentage: 7540.53,
        itemRef: {
          id: "f7812cb5-12c8-4782-80bf-548f88f8f1bf",
          name: "Hannah Schmidt",
        },
        quantity: 1202.57,
        subTotal: 9822.77,
        taxAmount: 1756.76,
        taxRateRef: {
          effectiveTaxRate: 195.51,
          id: "6d5d831d-0081-4090-b670-6673f3a681c5",
          name: "Vera Kutch",
        },
        totalAmount: 9328.07,
        trackingCategoryRefs: [
          {
            id: "42409a21-5e08-4601-889a-5f63e3af3dd9",
            name: "Marty Nikolaus",
          },
          {
            id: "dcd63483-e4a7-4a98-a4df-37e45b8955d4",
            name: "Mrs. Tracy Walker",
          },
        ],
        unitAmount: 2578.35,
      },
      {
        accountRef: {
          id: "82310907-bd35-44c0-92bd-734f02449d86",
          name: "Edwin Rath",
        },
        description: "eaque",
        discountAmount: 9915.63,
        discountPercentage: 8906.06,
        itemRef: {
          id: "5d911cbf-e749-4caf-85a2-7f69e2c9e6d1",
          name: "Henrietta Moen",
        },
        quantity: 2060.11,
        subTotal: 6648.58,
        taxAmount: 8344.57,
        taxRateRef: {
          effectiveTaxRate: 2719.56,
          id: "c6b03108-d9c3-4374-b308-2b94f2ab1fd5",
          name: "Glenda Boehm",
        },
        totalAmount: 7725.66,
        trackingCategoryRefs: [
          {
            id: "26350a46-7143-4789-8e0e-991594d93a74",
            name: "Jeffrey Dare",
          },
        ],
        unitAmount: 9545.42,
      },
      {
        accountRef: {
          id: "e3b4b4db-8b77-48eb-b6e1-d2cf502bafb2",
          name: "Archie Schroeder",
        },
        description: "adipisci",
        discountAmount: 3732.03,
        discountPercentage: 8526.23,
        itemRef: {
          id: "5e65da02-8c3e-4951-a1e3-0fda966489d7",
          name: "Darryl Kuvalis",
        },
        quantity: 2412.36,
        subTotal: 8992.58,
        taxAmount: 844.51,
        taxRateRef: {
          effectiveTaxRate: 2323.42,
          id: "a12a6b99-2494-4594-887f-5c843836b86b",
          name: "Adrienne Stokes",
        },
        totalAmount: 2950.58,
        trackingCategoryRefs: [
          {
            id: "5b0449f9-df13-4f4e-adbe-78bf60682589",
            name: "Kelley Nader",
          },
        ],
        unitAmount: 2274.52,
      },
    ],
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "2022-10-23T00:00:00.000Z",
    note: "corporis",
    paymentAllocations: [
      {
        allocation: {
          allocatedOnDate: "2022-10-23T00:00:00.000Z",
          currency: "GBP",
          currencyRate: 4549.34,
          totalAmount: 5910.92,
        },
        payment: {
          accountRef: {
            id: "5b785148-d6d5-449e-9635-b33bc0f970c4",
            name: "Shari Schmeler",
          },
          currency: "GBP",
          currencyRate: 5170.23,
          id: "44225e75-b796-4065-80ef-a6f93b90a1b8",
          note: "eligendi",
          paidOnDate: "2022-10-23T00:00:00.000Z",
          reference: "veniam",
          totalAmount: 7243.07,
        },
      },
      {
        allocation: {
          allocatedOnDate: "2022-10-23T00:00:00.000Z",
          currency: "GBP",
          currencyRate: 1317.05,
          totalAmount: 3572.56,
        },
        payment: {
          accountRef: {
            id: "4b739f4f-e772-410d-9f65-58c99c722d2b",
            name: "Steven Weimann",
          },
          currency: "GBP",
          currencyRate: 5286.46,
          id: "7d9caae0-42dd-47ca-ac9b-4caa1cfe9e15",
          note: "nulla",
          paidOnDate: "2022-10-23T00:00:00.000Z",
          reference: "molestias",
          totalAmount: 576.67,
        },
      },
      {
        allocation: {
          allocatedOnDate: "2022-10-23T00:00:00.000Z",
          currency: "USD",
          currencyRate: 455.46,
          totalAmount: 4952.25,
        },
        payment: {
          accountRef: {
            id: "f3783198-3d42-4e54-a854-66597c50233c",
            name: "Dr. Pauline Koss",
          },
          currency: "GBP",
          currencyRate: 6798.99,
          id: "aa6ddf5a-bd64-487c-9fc2-b862a00bef69",
          note: "saepe",
          paidOnDate: "2022-10-23T00:00:00.000Z",
          reference: "aperiam",
          totalAmount: 617.28,
        },
      },
      {
        allocation: {
          allocatedOnDate: "2022-10-23T00:00:00.000Z",
          currency: "GBP",
          currencyRate: 4998.83,
          totalAmount: 3808.84,
        },
        payment: {
          accountRef: {
            id: "30bda7af-ded8-44a3-9a41-238e1a735ac2",
            name: "Kristi Turcotte",
          },
          currency: "EUR",
          currencyRate: 9305.47,
          id: "f971a8f4-6bca-4110-afe9-65b711d08cf8",
          note: "deleniti",
          paidOnDate: "2022-10-23T00:00:00.000Z",
          reference: "cumque",
          totalAmount: 6116.3,
        },
      },
    ],
    reference: "reiciendis",
    sourceModifiedDate: "2022-10-23T00:00:00.000Z",
    subTotal: 7293.47,
    supplementalData: {
      content: {
        "occaecati": {
          "nemo": "quis",
          "doloremque": "similique",
          "eum": "quis",
        },
        "commodi": {
          "possimus": "dolor",
          "ratione": "velit",
          "soluta": "cum",
          "accusantium": "quo",
        },
        "officiis": {
          "est": "fuga",
          "autem": "quis",
          "modi": "consectetur",
        },
      },
    },
    taxAmount: 1844.01,
    totalAmount: 6424.34,
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  timeoutInMinutes: 585645,
}).then((res: CreateDirectIncomeResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.CreateDirectIncomeRequest](../../models/operations/createdirectincomerequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `retries`                                                                                    | [utils.RetryConfig](../../models/utils/retryconfig.md)                                       | :heavy_minus_sign:                                                                           | Configuration to override the default retry behavior of the client.                          |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.CreateDirectIncomeResponse](../../models/operations/createdirectincomeresponse.md)>**


## downloadAttachment

The *Download direct income attachment* endpoint downloads a specific attachment for a given `directIncomeId` and `attachmentId`.

[Direct incomes](https://docs.codat.io/accounting-api#/schemas/DirectIncome) are sales of items directly to a customer where payment is received at the point of the sale.

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=directIncomes) for integrations that support downloading a direct income attachment.


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
  directIncomeId: "rem",
}).then((res: DownloadDirectIncomeAttachmentResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                            | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                            | [operations.DownloadDirectIncomeAttachmentRequest](../../models/operations/downloaddirectincomeattachmentrequest.md) | :heavy_check_mark:                                                                                                   | The request object to use for the request.                                                                           |
| `retries`                                                                                                            | [utils.RetryConfig](../../models/utils/retryconfig.md)                                                               | :heavy_minus_sign:                                                                                                   | Configuration to override the default retry behavior of the client.                                                  |
| `config`                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                         | :heavy_minus_sign:                                                                                                   | Available config options for making requests.                                                                        |


### Response

**Promise<[operations.DownloadDirectIncomeAttachmentResponse](../../models/operations/downloaddirectincomeattachmentresponse.md)>**


## get

The *Get direct income* endpoint returns a single direct income for a given directIncomeId.

[Direct incomes](https://docs.codat.io/accounting-api#/schemas/DirectIncome) are sales of items directly to a customer where payment is received at the point of the sale.

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=directIncomes) for integrations that support getting a specific direct income.

Before using this endpoint, you must have [retrieved data for the company](https://docs.codat.io/codat-api#/operations/refresh-company-data).


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
  directIncomeId: "ea",
}).then((res: GetDirectIncomeResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.GetDirectIncomeRequest](../../models/operations/getdirectincomerequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `retries`                                                                              | [utils.RetryConfig](../../models/utils/retryconfig.md)                                 | :heavy_minus_sign:                                                                     | Configuration to override the default retry behavior of the client.                    |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.GetDirectIncomeResponse](../../models/operations/getdirectincomeresponse.md)>**


## getAttachment

The *Get direct income attachment* endpoint returns a specific attachment for a given `directIncomeId` and `attachmentId`.

[Direct incomes](https://docs.codat.io/accounting-api#/schemas/DirectIncome) are sales of items directly to a customer where payment is received at the point of the sale.

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=directIncomes) for integrations that support getting a direct income attachment.


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
  directIncomeId: "debitis",
  timeoutInMinutes: 743023,
}).then((res: GetDirectIncomeAttachmentResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                  | [operations.GetDirectIncomeAttachmentRequest](../../models/operations/getdirectincomeattachmentrequest.md) | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `retries`                                                                                                  | [utils.RetryConfig](../../models/utils/retryconfig.md)                                                     | :heavy_minus_sign:                                                                                         | Configuration to override the default retry behavior of the client.                                        |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.GetDirectIncomeAttachmentResponse](../../models/operations/getdirectincomeattachmentresponse.md)>**


## getCreateModel

The *Get create direct income model* endpoint returns the expected data for the request payload when creating a [direct income](https://docs.codat.io/accounting-api#/schemas/DirectIncome) for a given company and integration.

[Direct incomes](https://docs.codat.io/accounting-api#/schemas/DirectIncome) are sales of items directly to a customer where payment is received at the point of the sale.

**Integration-specific behaviour**

See the *response examples* for integration-specific indicative models.

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=directIncomes) for integrations that support creating a direct income.


### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { GetCreateDirectIncomesModelResponse } from "@codat/accounting/dist/sdk/models/operations";

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

### Parameters

| Parameter                                                                                                      | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                      | [operations.GetCreateDirectIncomesModelRequest](../../models/operations/getcreatedirectincomesmodelrequest.md) | :heavy_check_mark:                                                                                             | The request object to use for the request.                                                                     |
| `retries`                                                                                                      | [utils.RetryConfig](../../models/utils/retryconfig.md)                                                         | :heavy_minus_sign:                                                                                             | Configuration to override the default retry behavior of the client.                                            |
| `config`                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                   | :heavy_minus_sign:                                                                                             | Available config options for making requests.                                                                  |


### Response

**Promise<[operations.GetCreateDirectIncomesModelResponse](../../models/operations/getcreatedirectincomesmodelresponse.md)>**


## list

The *List direct incomes* endpoint returns a list of [direct incomes](https://docs.codat.io/accounting-api#/schemas/DirectIncome) for a given company's connection.

[Direct incomes](https://docs.codat.io/accounting-api#/schemas/DirectIncome) are sales of items directly to a customer where payment is received at the point of the sale.

Before using this endpoint, you must have [retrieved data for the company](https://docs.codat.io/codat-api#/operations/refresh-company-data).
    

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
  query: "odio",
}).then((res: ListDirectIncomesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.ListDirectIncomesRequest](../../models/operations/listdirectincomesrequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `retries`                                                                                  | [utils.RetryConfig](../../models/utils/retryconfig.md)                                     | :heavy_minus_sign:                                                                         | Configuration to override the default retry behavior of the client.                        |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.ListDirectIncomesResponse](../../models/operations/listdirectincomesresponse.md)>**


## listAttachments

The *List direct income attachments* endpoint returns a list of attachments available to download for given `directIncomeId`.

[Direct incomes](https://docs.codat.io/accounting-api#/schemas/DirectIncome) are sales of items directly to a customer where payment is received at the point of the sale.

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=directIncomes) for integrations that support listing direct income attachments.


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
  directIncomeId: "eveniet",
}).then((res: ListDirectIncomeAttachmentsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                      | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                      | [operations.ListDirectIncomeAttachmentsRequest](../../models/operations/listdirectincomeattachmentsrequest.md) | :heavy_check_mark:                                                                                             | The request object to use for the request.                                                                     |
| `retries`                                                                                                      | [utils.RetryConfig](../../models/utils/retryconfig.md)                                                         | :heavy_minus_sign:                                                                                             | Configuration to override the default retry behavior of the client.                                            |
| `config`                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                   | :heavy_minus_sign:                                                                                             | Available config options for making requests.                                                                  |


### Response

**Promise<[operations.ListDirectIncomeAttachmentsResponse](../../models/operations/listdirectincomeattachmentsresponse.md)>**


## uploadAttachment

The *Upload direct income attachment* endpoint uploads an attachment and assigns it against a specific `directIncomeId`.

[Direct incomes](https://docs.codat.io/accounting-api#/schemas/DirectIncome) are sales of items directly to a customer where payment is received at the point of the sale.

**Integration-specific behaviour**

For more details on supported file types by integration see [Attachments](https://docs.codat.io/accounting-api#/schemas/Attachment).

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=directIncomes) for integrations that support uploading a direct income attachment.


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
    content: "beatae".encode(),
    requestBody: "dolore",
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  directIncomeId: "quisquam",
}).then((res: UploadDirectIncomeAttachmentResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                        | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                        | [operations.UploadDirectIncomeAttachmentRequest](../../models/operations/uploaddirectincomeattachmentrequest.md) | :heavy_check_mark:                                                                                               | The request object to use for the request.                                                                       |
| `retries`                                                                                                        | [utils.RetryConfig](../../models/utils/retryconfig.md)                                                           | :heavy_minus_sign:                                                                                               | Configuration to override the default retry behavior of the client.                                              |
| `config`                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                     | :heavy_minus_sign:                                                                                               | Available config options for making requests.                                                                    |


### Response

**Promise<[operations.UploadDirectIncomeAttachmentResponse](../../models/operations/uploaddirectincomeattachmentresponse.md)>**

