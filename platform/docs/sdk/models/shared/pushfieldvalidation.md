# PushFieldValidation

## Example Usage

```typescript
import { PushFieldValidation } from "@codat/platform/sdk/models/shared";

let value: PushFieldValidation = {
  details: "<value>",
};
```

## Fields

| Field                                                 | Type                                                  | Required                                              | Description                                           |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| `field`                                               | *string*                                              | :heavy_minus_sign:                                    | Field name that resulted in the validation issue.     |
| `details`                                             | *string*                                              | :heavy_check_mark:                                    | Details on the validation issue.                      |
| `ref`                                                 | *string*                                              | :heavy_minus_sign:                                    | Unique reference identifier for the validation issue. |