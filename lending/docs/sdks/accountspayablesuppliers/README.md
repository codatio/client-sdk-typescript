# accountsPayableSuppliers

### Available Operations

* [downloadAttachment](#downloadattachment) - Download supplier attachment
* [get](#get) - Get supplier
* [getAttachment](#getattachment) - Get supplier attachment
* [list](#list) - List suppliers
* [listAttachments](#listattachments) - List supplier attachments

## downloadAttachment

The *Download supplier attachment* endpoint downloads a specific attachment for a given `supplierId` and `attachmentId`.

[Suppliers](https://docs.codat.io/accounting-api#/schemas/Supplier) are people or organizations that provide something, such as a product or service.

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=suppliers) for integrations that support downloading a supplier attachment.


### Example Usage

```typescript
import { CodatLending } from "@codat/lending";
import { DownloadAccountingSupplierAttachmentResponse } from "@codat/lending/dist/sdk/models/operations";

const sdk = new CodatLending({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.accountsPayableSuppliers.downloadAttachment({
  attachmentId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  supplierId: "ipsa",
}).then((res: DownloadAccountingSupplierAttachmentResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                        | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                        | [operations.DownloadAccountingSupplierAttachmentRequest](../../models/operations/downloadaccountingsupplierattachmentrequest.md) | :heavy_check_mark:                                                                                                               | The request object to use for the request.                                                                                       |
| `retries`                                                                                                                        | [utils.RetryConfig](../../models/utils/retryconfig.md)                                                                           | :heavy_minus_sign:                                                                                                               | Configuration to override the default retry behavior of the client.                                                              |
| `config`                                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                     | :heavy_minus_sign:                                                                                                               | Available config options for making requests.                                                                                    |


### Response

**Promise<[operations.DownloadAccountingSupplierAttachmentResponse](../../models/operations/downloadaccountingsupplierattachmentresponse.md)>**


## get

The *Get supplier* endpoint returns a single supplier for a given supplierId.

[Suppliers](https://docs.codat.io/accounting-api#/schemas/Supplier) are people or organizations that provide something, such as a product or service.

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=suppliers) for integrations that support getting a specific supplier.

Before using this endpoint, you must have [retrieved data for the company](https://docs.codat.io/lending-api#/operations/refresh-company-data).


### Example Usage

```typescript
import { CodatLending } from "@codat/lending";
import { GetAccountingSupplierResponse } from "@codat/lending/dist/sdk/models/operations";

const sdk = new CodatLending({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.accountsPayableSuppliers.get({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  supplierId: "delectus",
}).then((res: GetAccountingSupplierResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.GetAccountingSupplierRequest](../../models/operations/getaccountingsupplierrequest.md) | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `retries`                                                                                          | [utils.RetryConfig](../../models/utils/retryconfig.md)                                             | :heavy_minus_sign:                                                                                 | Configuration to override the default retry behavior of the client.                                |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.GetAccountingSupplierResponse](../../models/operations/getaccountingsupplierresponse.md)>**


## getAttachment

The *Get supplier attachment* endpoint returns a specific attachment for a given `supplierId` and `attachmentId`.

[Suppliers](https://docs.codat.io/accounting-api#/schemas/Supplier) are people or organizations that provide something, such as a product or service.

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=suppliers) for integrations that support getting a supplier attachment.


### Example Usage

```typescript
import { CodatLending } from "@codat/lending";
import { GetAccountingSupplierAttachmentResponse } from "@codat/lending/dist/sdk/models/operations";

const sdk = new CodatLending({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.accountsPayableSuppliers.getAttachment({
  attachmentId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  supplierId: "tempora",
}).then((res: GetAccountingSupplierAttachmentResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                              | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                              | [operations.GetAccountingSupplierAttachmentRequest](../../models/operations/getaccountingsupplierattachmentrequest.md) | :heavy_check_mark:                                                                                                     | The request object to use for the request.                                                                             |
| `retries`                                                                                                              | [utils.RetryConfig](../../models/utils/retryconfig.md)                                                                 | :heavy_minus_sign:                                                                                                     | Configuration to override the default retry behavior of the client.                                                    |
| `config`                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                           | :heavy_minus_sign:                                                                                                     | Available config options for making requests.                                                                          |


### Response

**Promise<[operations.GetAccountingSupplierAttachmentResponse](../../models/operations/getaccountingsupplierattachmentresponse.md)>**


## list

The *List suppliers* endpoint returns a list of [suppliers](https://docs.codat.io/accounting-api#/schemas/Supplier) for a given company's connection.

[Suppliers](https://docs.codat.io/accounting-api#/schemas/Supplier) are people or organizations that provide something, such as a product or service.

Before using this endpoint, you must have [retrieved data for the company](https://docs.codat.io/lending-api#/operations/refresh-company-data).
    

### Example Usage

```typescript
import { CodatLending } from "@codat/lending";
import { ListAccountingSuppliersResponse } from "@codat/lending/dist/sdk/models/operations";

const sdk = new CodatLending({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.accountsPayableSuppliers.list({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  orderBy: "-modifiedDate",
  page: 1,
  pageSize: 100,
  query: "suscipit",
}).then((res: ListAccountingSuppliersResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `request`                                                                                              | [operations.ListAccountingSuppliersRequest](../../models/operations/listaccountingsuppliersrequest.md) | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `retries`                                                                                              | [utils.RetryConfig](../../models/utils/retryconfig.md)                                                 | :heavy_minus_sign:                                                                                     | Configuration to override the default retry behavior of the client.                                    |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.ListAccountingSuppliersResponse](../../models/operations/listaccountingsuppliersresponse.md)>**


## listAttachments

The *List supplier attachments* endpoint returns a list of attachments available to download for given `supplierId`.

[Suppliers](https://docs.codat.io/accounting-api#/schemas/Supplier) are people or organizations that provide something, such as a product or service.

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=suppliers) for integrations that support listing supplier attachments.


### Example Usage

```typescript
import { CodatLending } from "@codat/lending";
import { ListAccountingSupplierAttachmentsResponse } from "@codat/lending/dist/sdk/models/operations";

const sdk = new CodatLending({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.accountsPayableSuppliers.listAttachments({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  supplierId: "molestiae",
}).then((res: ListAccountingSupplierAttachmentsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                  | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                  | [operations.ListAccountingSupplierAttachmentsRequest](../../models/operations/listaccountingsupplierattachmentsrequest.md) | :heavy_check_mark:                                                                                                         | The request object to use for the request.                                                                                 |
| `retries`                                                                                                                  | [utils.RetryConfig](../../models/utils/retryconfig.md)                                                                     | :heavy_minus_sign:                                                                                                         | Configuration to override the default retry behavior of the client.                                                        |
| `config`                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                               | :heavy_minus_sign:                                                                                                         | Available config options for making requests.                                                                              |


### Response

**Promise<[operations.ListAccountingSupplierAttachmentsResponse](../../models/operations/listaccountingsupplierattachmentsresponse.md)>**

