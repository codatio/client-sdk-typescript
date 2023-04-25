# listFiles
Available in: `files`

Returns an array of files that have been uploaded for a given company.

## Example Usage
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