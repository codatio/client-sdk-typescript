<!-- Start SDK Example Usage -->
```typescript
import {
  DownloadFilesRequest,
  DownloadFilesResponse
} from "@codat/files/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { CodatFiles } from "@codat/files";
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
   // handle response
});
```
<!-- End SDK Example Usage -->