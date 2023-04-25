# saveCompanyConfiguration
Available in: `configuration`

Sets a companies expense sync configuration

## Example Usage
```typescript
import { CodatSyncExpenses } from "@codat/sync-for-expenses";
import { SaveCompanyConfigurationRequest, SaveCompanyConfigurationResponse } from "@codat/sync-for-expenses/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new CodatSyncExpenses({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: SaveCompanyConfigurationRequest = {
  companyConfiguration: {
    bankAccount: {
      id: "32",
    },
    customer: {
      id: "142",
    },
    supplier: {
      id: "124",
    },
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
};

sdk.configuration.saveCompanyConfiguration(req).then((res: SaveCompanyConfigurationResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```