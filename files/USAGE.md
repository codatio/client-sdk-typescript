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
    apiKey: "YOUR_API_KEY_HERE",
  }
});
    
const req: DownloadFilesRequest = {
  security: {
    apiKey: "YOUR_API_KEY_HERE",
  },
  pathParams: {
    companyId: "unde",
  },
  queryParams: {
    date: "2022-07-28T15:07:03.415Z",
  },
};

sdk.files.downloadFiles(req).then((res: DownloadFilesResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->