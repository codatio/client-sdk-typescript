# GenerateReportRequest

## Example Usage

```typescript
import { GenerateReportRequest } from "@codat/lending/sdk/models/operations";

let value: GenerateReportRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  reportType: "creditModel",
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   | Example                                                       |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `companyId`                                                   | *string*                                                      | :heavy_check_mark:                                            | Unique identifier for a company.                              | 8a210b68-6988-11ed-a1eb-0242ac120002                          |
| `reportType`                                                  | [shared.ReportType](../../../sdk/models/shared/reporttype.md) | :heavy_check_mark:                                            | The type of the report                                        |                                                               |