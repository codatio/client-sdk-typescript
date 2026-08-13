# DataStatus

Describes the state of data in the Codat cache for a company and data type

## Example Usage

```typescript
import { DataStatus } from "@codat/sync-for-expenses/sdk/models/shared";

let value: DataStatus = {
  dataType: "string",
  lastSuccessfulSync: "2022-01-01T13:00:00.000Z",
  currentStatus: "string",
  latestSyncId: "ad474a37-2003-478e-baee-9af9f1ec2fe3",
  latestSuccessfulSyncId: "8220fc90-55b6-47bc-9417-48ac6ea93101",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              | Example                                                                  |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `dataType`                                                               | [shared.DataTypes](../../../sdk/models/shared/datatypes.md)              | :heavy_check_mark:                                                       | Available data types                                                     | invoices                                                                 |
| `lastSuccessfulSync`                                                     | *string*                                                                 | :heavy_minus_sign:                                                       | Date of the transfer transaction as recorded in the accounting software. |                                                                          |
| `currentStatus`                                                          | [shared.Status](../../../sdk/models/shared/status.md)                    | :heavy_check_mark:                                                       | The current status of the dataset.                                       |                                                                          |
| `latestSyncId`                                                           | *string*                                                                 | :heavy_minus_sign:                                                       | Unique identifier for most recent sync of data type.                     | ad474a37-2003-478e-baee-9af9f1ec2fe3                                     |
| `latestSuccessfulSyncId`                                                 | *string*                                                                 | :heavy_minus_sign:                                                       | Unique identifier for the most recent successful sync of data type.      | 8220fc90-55b6-47bc-9417-48ac6ea93101                                     |