<!-- Start SDK Example Usage -->
```typescript
import {
  DownloadFilesRequest,
  DownloadFilesResponse
} from "@codat/files/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { Codat } from "@codat/files";
const sdk = new Codat({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});
    
const req: DownloadFilesRequest = {
  pathParams: {
    companyId: "unde",
  },
  queryParams: {
    date: "2022-08-10T15:04:26.022Z",
  },
};

sdk.files.downloadFiles(req).then((res: DownloadFilesResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->