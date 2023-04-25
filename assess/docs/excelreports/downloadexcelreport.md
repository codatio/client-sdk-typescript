# downloadExcelReport
Available in: `excelReports`

Download the previously generated Excel report to a local drive.

## Example Usage
```typescript
import { CodatAssess } from "@codat/assess";
import { DownloadExcelReportRequest, DownloadExcelReportResponse } from "@codat/assess/dist/sdk/models/operations";
import { ExcelReportTypeEnum } from "@codat/assess/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatAssess({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: DownloadExcelReportRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  reportType: ExcelReportTypeEnum.Audit,
};

sdk.excelReports.downloadExcelReport(req).then((res: DownloadExcelReportResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```