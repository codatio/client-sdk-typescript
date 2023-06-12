<!-- Start SDK Example Usage -->
```typescript
import { CodatFiles } from "@codat/files";
import { DownloadFilesResponse } from "@codat/files/dist/sdk/models/operations";

const sdk = new CodatFiles({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.files.downloadFiles({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  date: "2022-10-23T00:00:00.000Z",
}).then((res: DownloadFilesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
<!-- End SDK Example Usage -->