# DataTypeReadSummary

## Example Usage

```typescript
import { DataTypeReadSummary } from "@codat/platform/sdk/models/shared";

let value: DataTypeReadSummary = {
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  dataType: "invoices",
  recordsModified: false,
  issues: [
    {
      type: "warning.validation",
      message:
        "Something doesn't look right about these accounts from Xero. You can see more information in the logs.",
      links: {
        logs:
          "https://api.codat.io/companies/0498e921-9b53-4396-a412-4f2f5983b0a2/sync/{datasetId}/validation",
        portal:
          "https://app.codat.io/companies/0498e921-9b53-4396-a412-4f2f5983b0a2/pull-history",
        readMore:
          "https://docs.codat.io/using-the-api/get-data-troubleshooting#warning.validation",
      },
    },
  ],
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               | Example                                                                   |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `connectionId`                                                            | *string*                                                                  | :heavy_minus_sign:                                                        | Unique identifier for a company's data connection.                        | 2e9d2c44-f675-40ba-8049-353bfcb5e171                                      |
| `dataType`                                                                | [shared.DataType](../../../sdk/models/shared/datatype.md)                 | :heavy_minus_sign:                                                        | Available data types                                                      | invoices                                                                  |
| `recordsModified`                                                         | *boolean*                                                                 | :heavy_minus_sign:                                                        | `True` if records have been created, updated or deleted in Codat's cache. | false                                                                     |
| `status`                                                                  | [shared.Status](../../../sdk/models/shared/status.md)                     | :heavy_minus_sign:                                                        | The current status of the dataset.                                        |                                                                           |
| `issues`                                                                  | [shared.Issue](../../../sdk/models/shared/issue.md)[]                     | :heavy_minus_sign:                                                        | A array of issues encountered during a data read.                         |                                                                           |