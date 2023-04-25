# uploadFiles
Available in: `files`

Upload files

## Example Usage
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
    content: "corrupti".encode(),
    requestBody: "provident",
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