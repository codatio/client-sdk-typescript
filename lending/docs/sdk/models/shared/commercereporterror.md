# CommerceReportError

## Example Usage

```typescript
import { CommerceReportError } from "@codat/lending/sdk/models/shared";

let value: CommerceReportError = {};
```

## Fields

| Field                            | Type                             | Required                         | Description                      |
| -------------------------------- | -------------------------------- | -------------------------------- | -------------------------------- |
| `message`                        | *string*                         | :heavy_minus_sign:               | Message returned by error.       |
| `type`                           | *string*                         | :heavy_minus_sign:               | The type of error.               |
| `details`                        | Record<string, *string*[]>       | :heavy_minus_sign:               | Additional details on the error. |