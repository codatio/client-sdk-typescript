# getDataIntegrityDetails
Available in: `dataIntegrity`

Gets record-by-record match results for a given company and datatype, optionally restricted by a Codat query string.

## Example Usage
```typescript
import { CodatAssess } from "@codat/assess";
import { GetDataIntegrityDetailsRequest, GetDataIntegrityDetailsResponse } from "@codat/assess/dist/sdk/models/operations";
import { DataIntegrityDataTypeEnum } from "@codat/assess/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatAssess({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: GetDataIntegrityDetailsRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  dataType: DataIntegrityDataTypeEnum.BankingAccounts,
  orderBy: "-modifiedDate",
  page: 1,
  pageSize: 100,
  query: "voluptatibus",
};

sdk.dataIntegrity.getDataIntegrityDetails(req).then((res: GetDataIntegrityDetailsResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```