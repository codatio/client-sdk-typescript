# DataConnectionError

## Example Usage

```typescript
import { DataConnectionError } from "@codat/sync-for-expenses/sdk/models/shared";

let value: DataConnectionError = {};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `statusCode`                                                                                     | *string*                                                                                         | :heavy_minus_sign:                                                                               | The HTTP status code returned by the source platform when the error occurred.                    |
| `statusText`                                                                                     | *string*                                                                                         | :heavy_minus_sign:                                                                               | A non-numeric status code/text returned by the source platform when the error occurred.          |
| `errorMessage`                                                                                   | *string*                                                                                         | :heavy_minus_sign:                                                                               | A message about a error returned by Codat.                                                       |
| `erroredOnUtc`                                                                                   | *string*                                                                                         | :heavy_minus_sign:                                                                               | Date of the transfer transaction as recorded in the accounting software.                         |
| `status`                                                                                         | [shared.ErrorStatus](../../../sdk/models/shared/errorstatus.md)                                  | :heavy_minus_sign:                                                                               | The current status of a transient error. Null statuses indicate that the error is not transient. |
| `resolvedOnUtc`                                                                                  | *string*                                                                                         | :heavy_minus_sign:                                                                               | The datetime in Utc that the error was resolved.                                                 |