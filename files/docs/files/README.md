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
import { DownloadFilesRequest, DownloadFilesResponse } from "@codat/files/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new CodatFiles({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: DownloadFilesRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  date: "provident",
};

sdk.files.downloadFiles(req).then((res: DownloadFilesResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## listFiles

Returns an array of files that have been uploaded for a given company.

### Example Usage

```typescript
import { CodatFiles } from "@codat/files";
import { ListFilesRequest, ListFilesResponse } from "@codat/files/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new CodatFiles({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: ListFilesRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
};

sdk.files.listFiles(req).then((res: ListFilesResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## uploadFiles

Upload files

### Example Usage

```typescript
import { CodatFiles } from "@codat/files";
import { UploadFilesRequest, UploadFilesResponse } from "@codat/files/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new CodatFiles({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: UploadFilesRequest = {
  requestBody: {
    content: "distinctio".encode(),
    requestBody: "quibusdam",
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
};

sdk.files.uploadFiles(req).then((res: UploadFilesResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```
