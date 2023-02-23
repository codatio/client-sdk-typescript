<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { DownloadFilesRequest, DownloadFilesResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    apiKey: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: DownloadFilesRequest = {
  security: {
    apiKey: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  },
  pathParams: {
    companyId: "unde",
  },
  queryParams: {
    date: "2022-07-22T02:31:36.694Z",
  },
};

sdk.files.downloadFiles(req).then((res: DownloadFilesResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->