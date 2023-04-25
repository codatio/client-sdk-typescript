# generateExcelReport
Available in: `excelReports`

Generate an Excel report which can subsequently be downloaded.

## Example Usage
```typescript
import { CodatAssess } from "@codat/assess";
import { GenerateExcelReportRequest, GenerateExcelReportResponse } from "@codat/assess/dist/sdk/models/operations";
import { ExcelReportTypeEnum } from "@codat/assess/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatAssess({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: GenerateExcelReportRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  reportType: ExcelReportTypeEnum.Assess,
};

sdk.excelReports.generateExcelReport(req).then((res: GenerateExcelReportResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```