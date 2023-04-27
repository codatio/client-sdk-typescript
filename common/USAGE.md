<!-- Start SDK Example Usage -->
```typescript
import { CodatCommon } from "@codat/common";
import { CreateCompanyResponse } from "@codat/common/dist/sdk/models/operations";
import { DataConnectionStatusEnum, SourceTypeEnum } from "@codat/common/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatCommon({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.companies.create({
  description: "corrupti",
  name: "Kelvin Sporer",
}).then((res: CreateCompanyResponse | AxiosError) => {
  if (res instanceof CreateCompanyResponse && res.statusCode == 200) {
    // handle response
  }
});
```
<!-- End SDK Example Usage -->