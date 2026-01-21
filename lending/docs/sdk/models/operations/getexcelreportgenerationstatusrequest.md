# GetExcelReportGenerationStatusRequest

## Example Usage

```typescript
import { GetExcelReportGenerationStatusRequest } from "@codat/lending/sdk/models/operations";

let value: GetExcelReportGenerationStatusRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  reportType: "audit",
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               | Example                                                                   |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `companyId`                                                               | *string*                                                                  | :heavy_check_mark:                                                        | Unique identifier for a company.                                          | 8a210b68-6988-11ed-a1eb-0242ac120002                                      |
| `reportType`                                                              | [shared.ExcelReportTypes](../../../sdk/models/shared/excelreporttypes.md) | :heavy_check_mark:                                                        | The type of report you want to generate and download.                     |                                                                           |