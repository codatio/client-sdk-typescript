# getDataIntegrityStatus
Available in: `dataIntegrity`

Gets match status for a given company and datatype.

## Example Usage
```typescript
import { CodatAssess } from "@codat/assess";
import { GetDataIntegrityStatusRequest, GetDataIntegrityStatusResponse } from "@codat/assess/dist/sdk/models/operations";
import { DataIntegrityDataTypeEnum, IntegrityStatusEnum } from "@codat/assess/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatAssess({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: GetDataIntegrityStatusRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  dataType: DataIntegrityDataTypeEnum.BankingAccounts,
};

sdk.dataIntegrity.getDataIntegrityStatus(req).then((res: GetDataIntegrityStatusResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```