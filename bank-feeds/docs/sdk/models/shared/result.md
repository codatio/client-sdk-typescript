# Result

## Example Usage

```typescript
import { Result } from "@codat/bank-feeds/sdk/models/shared";

let value: Result = {};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `statusCode`                                                            | *string*                                                                | :heavy_minus_sign:                                                      | The error status code for the attempted creation of the source account. |
| `error`                                                                 | *string*                                                                | :heavy_minus_sign:                                                      | The error description for the attempted creation of the source account. |