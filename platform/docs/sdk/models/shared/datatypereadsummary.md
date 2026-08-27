# DataTypeReadSummary

## Example Usage

```typescript
import { DataTypeReadSummary } from "@codat/platform/sdk/models/shared";

let value: DataTypeReadSummary = {};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `connectionId`                                                            | *string*                                                                  | :heavy_minus_sign:                                                        | Unique identifier for a company's data connection.                        |
| `dataType`                                                                | [shared.DataType](../../../sdk/models/shared/datatype.md)                 | :heavy_minus_sign:                                                        | Available data types                                                      |
| `recordsModified`                                                         | *boolean*                                                                 | :heavy_minus_sign:                                                        | `True` if records have been created, updated or deleted in Codat's cache. |
| `status`                                                                  | [shared.Status](../../../sdk/models/shared/status.md)                     | :heavy_minus_sign:                                                        | The current status of the dataset.                                        |
| `issues`                                                                  | [shared.Issue](../../../sdk/models/shared/issue.md)[]                     | :heavy_minus_sign:                                                        | A array of issues encountered during a data read.                         |