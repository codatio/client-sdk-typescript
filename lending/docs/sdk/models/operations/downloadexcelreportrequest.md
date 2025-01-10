# DownloadExcelReportRequest

## Example Usage

```typescript
import { DownloadExcelReportRequest } from "@codat/lending/sdk/models/operations";

let value: DownloadExcelReportRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  reportType: "enhancedInvoices",
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               | Example                                                                   |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `companyId`                                                               | *string*                                                                  | :heavy_check_mark:                                                        | Unique identifier for a company.                                          | 8a210b68-6988-11ed-a1eb-0242ac120002                                      |
| `reportType`                                                              | [shared.ExcelReportTypes](../../../sdk/models/shared/excelreporttypes.md) | :heavy_check_mark:                                                        | The type of report you want to generate and download.                     |                                                                           |