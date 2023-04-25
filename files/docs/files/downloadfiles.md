# downloadFiles
Available in: `files`

You can specify a date to download specific files for.

## Example Usage
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
  date: "2022-10-23T00:00:00Z",
};

sdk.files.downloadFiles(req).then((res: DownloadFilesResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```