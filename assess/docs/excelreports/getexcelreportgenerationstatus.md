# getExcelReportGenerationStatus
Available in: `excelReports`

Returns the status of the latest report requested.

## Example Usage
```typescript
import { CodatAssess } from "@codat/assess";
import { GetExcelReportGenerationStatusRequest, GetExcelReportGenerationStatusResponse } from "@codat/assess/dist/sdk/models/operations";
import { ExcelReportTypeEnum } from "@codat/assess/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatAssess({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: GetExcelReportGenerationStatusRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  reportType: ExcelReportTypeEnum.Assess,
};

sdk.excelReports.getExcelReportGenerationStatus(req).then((res: GetExcelReportGenerationStatusResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```