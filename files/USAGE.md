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
  companyId: "89bd9d8d-69a6-474e-8f46-7cc8796ed151",
  date: "2022-07-27T10:22:47.120Z",
};

sdk.files.downloadFiles(req).then((res: DownloadFilesResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->