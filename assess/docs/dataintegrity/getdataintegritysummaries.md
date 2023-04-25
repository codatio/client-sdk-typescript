# getDataIntegritySummaries
Available in: `dataIntegrity`

Gets match summary for a given company and datatype, optionally restricted by a Codat query string.

## Example Usage
```typescript
import { CodatAssess } from "@codat/assess";
import { GetDataIntegritySummariesRequest, GetDataIntegritySummariesResponse } from "@codat/assess/dist/sdk/models/operations";
import { DataIntegrityDataTypeEnum } from "@codat/assess/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatAssess({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: GetDataIntegritySummariesRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  dataType: DataIntegrityDataTypeEnum.BankingAccounts,
  query: "ipsa",
};

sdk.dataIntegrity.getDataIntegritySummaries(req).then((res: GetDataIntegritySummariesResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```