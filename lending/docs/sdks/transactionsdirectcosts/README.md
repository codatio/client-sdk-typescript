# TransactionsDirectCosts
(*transactions.directCosts*)

### Available Operations

* [downloadAttachment](#downloadattachment) - Download direct cost attachment
* [get](#get) - Get direct cost
* [getAttachment](#getattachment) - Get direct cost attachment
* [list](#list) - List direct costs
* [listAttachments](#listattachments) - List direct cost attachments

## downloadAttachment

The *Download direct cost attachment* endpoint downloads a specific attachment for a given `directCostId` and `attachmentId`.

[Direct costs](https://docs.codat.io/lending-api#/schemas/DirectCost) are purchases of items that are paid off at the point of the purchase.

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=directCosts) for integrations that support downloading a direct cost attachment.


### Example Usage

```typescript
import { CodatLending } from "@codat/lending";

(async() => {
  const sdk = new CodatLending({
    security: {
      authHeader: "Basic BASE_64_ENCODED(API_KEY)",
    },
  });

  const res = await sdk.transactions.directCosts.downloadAttachment({
    attachmentId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
    directCostId: "Dakota Avon specifically",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                            | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                            | [operations.DownloadAccountingDirectCostAttachmentRequest](../../models/operations/downloadaccountingdirectcostattachmentrequest.md) | :heavy_check_mark:                                                                                                                   | The request object to use for the request.                                                                                           |
| `retries`                                                                                                                            | [utils.RetryConfig](../../models/utils/retryconfig.md)                                                                               | :heavy_minus_sign:                                                                                                                   | Configuration to override the default retry behavior of the client.                                                                  |
| `config`                                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                         | :heavy_minus_sign:                                                                                                                   | Available config options for making requests.                                                                                        |


### Response

**Promise<[operations.DownloadAccountingDirectCostAttachmentResponse](../../models/operations/downloadaccountingdirectcostattachmentresponse.md)>**


## get

The *Get direct cost* endpoint returns a single direct cost for a given directCostId.

[Direct costs](https://docs.codat.io/lending-api#/schemas/DirectCost) are purchases of items that are paid off at the point of the purchase.

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=directCosts) for integrations that support getting a specific direct cost.

Before using this endpoint, you must have [retrieved data for the company](https://docs.codat.io/lending-api#/operations/refresh-company-data).


### Example Usage

```typescript
import { CodatLending } from "@codat/lending";

(async() => {
  const sdk = new CodatLending({
    security: {
      authHeader: "Basic BASE_64_ENCODED(API_KEY)",
    },
  });

  const res = await sdk.transactions.directCosts.get({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
    directCostId: "Northeast Hatchback Kia",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `request`                                                                                              | [operations.GetAccountingDirectCostRequest](../../models/operations/getaccountingdirectcostrequest.md) | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `retries`                                                                                              | [utils.RetryConfig](../../models/utils/retryconfig.md)                                                 | :heavy_minus_sign:                                                                                     | Configuration to override the default retry behavior of the client.                                    |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.GetAccountingDirectCostResponse](../../models/operations/getaccountingdirectcostresponse.md)>**


## getAttachment

The *Get direct cost attachment* endpoint returns a specific attachment for a given `directCostId` and `attachmentId`.

[Direct costs](https://docs.codat.io/lending-api#/schemas/DirectCost) are purchases of items that are paid off at the point of the purchase.

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=directCosts) for integrations that support getting a direct cost attachment.


### Example Usage

```typescript
import { CodatLending } from "@codat/lending";

(async() => {
  const sdk = new CodatLending({
    security: {
      authHeader: "Basic BASE_64_ENCODED(API_KEY)",
    },
  });

  const res = await sdk.transactions.directCosts.getAttachment({
    attachmentId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
    directCostId: "array East along",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                  | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                  | [operations.GetAccountingDirectCostAttachmentRequest](../../models/operations/getaccountingdirectcostattachmentrequest.md) | :heavy_check_mark:                                                                                                         | The request object to use for the request.                                                                                 |
| `retries`                                                                                                                  | [utils.RetryConfig](../../models/utils/retryconfig.md)                                                                     | :heavy_minus_sign:                                                                                                         | Configuration to override the default retry behavior of the client.                                                        |
| `config`                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                               | :heavy_minus_sign:                                                                                                         | Available config options for making requests.                                                                              |


### Response

**Promise<[operations.GetAccountingDirectCostAttachmentResponse](../../models/operations/getaccountingdirectcostattachmentresponse.md)>**


## list

The *List direct costs* endpoint returns a list of [direct costs](https://docs.codat.io/lending-api#/schemas/DirectCost) for a given company's connection.

[Direct costs](https://docs.codat.io/lending-api#/schemas/DirectCost) are purchases of items that are paid off at the point of the purchase.

Before using this endpoint, you must have [retrieved data for the company](https://docs.codat.io/lending-api#/operations/refresh-company-data).
    

### Example Usage

```typescript
import { CodatLending } from "@codat/lending";

(async() => {
  const sdk = new CodatLending({
    security: {
      authHeader: "Basic BASE_64_ENCODED(API_KEY)",
    },
  });

  const res = await sdk.transactions.directCosts.list({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
    orderBy: "-modifiedDate",
    page: 1,
    pageSize: 100,
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                  | [operations.ListAccountingDirectCostsRequest](../../models/operations/listaccountingdirectcostsrequest.md) | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `retries`                                                                                                  | [utils.RetryConfig](../../models/utils/retryconfig.md)                                                     | :heavy_minus_sign:                                                                                         | Configuration to override the default retry behavior of the client.                                        |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.ListAccountingDirectCostsResponse](../../models/operations/listaccountingdirectcostsresponse.md)>**


## listAttachments

The *List direct cost attachments* endpoint returns a list of attachments available to download for given `directCostId`.

[Direct costs](https://docs.codat.io/lending-api#/schemas/DirectCost) are purchases of items that are paid off at the point of the purchase.

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=directCosts) for integrations that support listing direct cost attachments.


### Example Usage

```typescript
import { CodatLending } from "@codat/lending";

(async() => {
  const sdk = new CodatLending({
    security: {
      authHeader: "Basic BASE_64_ENCODED(API_KEY)",
    },
  });

  const res = await sdk.transactions.directCosts.listAttachments({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
    directCostId: "intuitive Frozen ouch",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                      | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                      | [operations.ListAccountingDirectCostAttachmentsRequest](../../models/operations/listaccountingdirectcostattachmentsrequest.md) | :heavy_check_mark:                                                                                                             | The request object to use for the request.                                                                                     |
| `retries`                                                                                                                      | [utils.RetryConfig](../../models/utils/retryconfig.md)                                                                         | :heavy_minus_sign:                                                                                                             | Configuration to override the default retry behavior of the client.                                                            |
| `config`                                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                   | :heavy_minus_sign:                                                                                                             | Available config options for making requests.                                                                                  |


### Response

**Promise<[operations.ListAccountingDirectCostAttachmentsResponse](../../models/operations/listaccountingdirectcostattachmentsresponse.md)>**

