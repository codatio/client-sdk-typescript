<!-- Start SDK Example Usage -->
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
  date: "corrupti",
}).then((res: DownloadFilesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
<!-- End SDK Example Usage -->