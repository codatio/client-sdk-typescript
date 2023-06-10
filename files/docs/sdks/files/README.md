# files

## Overview

Endpoints to manage uploaded files.

### Available Operations

* [downloadFiles](#downloadfiles) - Download all files for a company
* [listFiles](#listfiles) - List all files uploaded by a company
* [uploadFiles](#uploadfiles) - Upload files for a company

## downloadFiles

You can specify a date to download specific files for.

### Example Usage

```typescript
import { CodatFiles } from "@codat/files";
import { DownloadFilesResponse } from "@codat/files/dist/sdk/models/operations";

const sdk = new CodatFiles({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.files.downloadFiles({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  date: "2022-10-23T00:00:00.000Z",
}).then((res: DownloadFilesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.DownloadFilesRequest](../../models/operations/downloadfilesrequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `retries`                                                                          | [utils.RetryConfig](../../models/utils/retryconfig.md)                             | :heavy_minus_sign:                                                                 | Configuration to override the default retry behavior of the client.                |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.DownloadFilesResponse](../../models/operations/downloadfilesresponse.md)>**


## listFiles

Returns an array of files that have been uploaded for a given company.

### Example Usage

```typescript
import { CodatFiles } from "@codat/files";
import { ListFilesResponse } from "@codat/files/dist/sdk/models/operations";

const sdk = new CodatFiles({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.files.listFiles({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
}).then((res: ListFilesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                  | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `request`                                                                  | [operations.ListFilesRequest](../../models/operations/listfilesrequest.md) | :heavy_check_mark:                                                         | The request object to use for the request.                                 |
| `retries`                                                                  | [utils.RetryConfig](../../models/utils/retryconfig.md)                     | :heavy_minus_sign:                                                         | Configuration to override the default retry behavior of the client.        |
| `config`                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)               | :heavy_minus_sign:                                                         | Available config options for making requests.                              |


### Response

**Promise<[operations.ListFilesResponse](../../models/operations/listfilesresponse.md)>**


## uploadFiles

Upload files

### Example Usage

```typescript
import { CodatFiles } from "@codat/files";
import { UploadFilesResponse } from "@codat/files/dist/sdk/models/operations";

const sdk = new CodatFiles({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.files.uploadFiles({
  requestBody: {
    content: "distinctio".encode(),
    requestBody: "quibusdam",
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
}).then((res: UploadFilesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [operations.UploadFilesRequest](../../models/operations/uploadfilesrequest.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `retries`                                                                      | [utils.RetryConfig](../../models/utils/retryconfig.md)                         | :heavy_minus_sign:                                                             | Configuration to override the default retry behavior of the client.            |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.UploadFilesResponse](../../models/operations/uploadfilesresponse.md)>**

