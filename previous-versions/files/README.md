# Files

<!-- Start Codat Library Description -->
﻿Use Codat's Files API to upload your SMB customers' files.
<!-- End Codat Library Description -->

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add @codat/files
```

### Yarn

```bash
yarn add @codat/files
```
<!-- End SDK Installation -->

## Example Usage
<!-- Start SDK Example Usage -->
```typescript
import { CodatFiles } from "@codat/files";

(async () => {
    const sdk = new CodatFiles({
        security: {
            authHeader: "Basic BASE_64_ENCODED(API_KEY)",
        },
    });

    const res = await sdk.files.downloadFiles({
        companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
        date: "2022-10-23T00:00:00.000Z",
    });

    if (res.statusCode == 200) {
        // handle response
    }
})();

```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [files](docs/sdks/files/README.md)

* [downloadFiles](docs/sdks/files/README.md#downloadfiles) - Download all files for a company
* [listFiles](docs/sdks/files/README.md#listfiles) - List all files uploaded by a company
* [uploadFiles](docs/sdks/files/README.md#uploadfiles) - Upload files for a company
<!-- End SDK Available Operations -->



<!-- Start Dev Containers -->



<!-- End Dev Containers -->

<!-- Placeholder for Future Speakeasy SDK Sections -->