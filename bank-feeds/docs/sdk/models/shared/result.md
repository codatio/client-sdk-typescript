# Result

## Example Usage

```typescript
import { Result } from "@codat/bank-feeds/sdk/models/shared";

let value: Result = {
  statusCode: "409",
  error: "A bank account already exists with the same Id",
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             | Example                                                                 |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `statusCode`                                                            | *string*                                                                | :heavy_minus_sign:                                                      | The error status code for the attempted creation of the source account. | 409                                                                     |
| `error`                                                                 | *string*                                                                | :heavy_minus_sign:                                                      | The error description for the attempted creation of the source account. | A bank account already exists with the same Id                          |