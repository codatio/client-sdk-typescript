# ReportInfo

Report additional information, which is specific to Lending reports.

## Example Usage

```typescript
import { ReportInfo } from "@codat/lending/sdk/models/shared";

let value: ReportInfo = {};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `pageNumber`                                                                                           | *number*                                                                                               | :heavy_minus_sign:                                                                                     | The number of the page queried.                                                                        |
| `pageSize`                                                                                             | *number*                                                                                               | :heavy_minus_sign:                                                                                     | The number of transactions returned per page.                                                          |
| `totalResults`                                                                                         | *number*                                                                                               | :heavy_minus_sign:                                                                                     | The total number of transactions available for a company for the period specified in the query string. |
| `reportName`                                                                                           | *string*                                                                                               | :heavy_minus_sign:                                                                                     | Name of the report.                                                                                    |
| `companyName`                                                                                          | *string*                                                                                               | :heavy_minus_sign:                                                                                     | The name of the company being queried.                                                                 |
| `generatedDate`                                                                                        | *string*                                                                                               | :heavy_minus_sign:                                                                                     | Date the report was generated.                                                                         |