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
    authHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.files.downloadFiles({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  date: "provident",
}).then((res: DownloadFilesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## listFiles

Returns an array of files that have been uploaded for a given company.

### Example Usage

```typescript
import { CodatFiles } from "@codat/files";
import { ListFilesResponse } from "@codat/files/dist/sdk/models/operations";

const sdk = new CodatFiles({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
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

## uploadFiles

Upload files

### Example Usage

```typescript
import { CodatFiles } from "@codat/files";
import { UploadFilesResponse } from "@codat/files/dist/sdk/models/operations";

const sdk = new CodatFiles({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
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
