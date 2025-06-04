# ValidationItem

## Example Usage

```typescript
import { ValidationItem } from "@codat/platform/sdk/models/shared";

let value: ValidationItem = {};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `ruleId`                                                      | *string*                                                      | :heavy_minus_sign:                                            | The unique identifier of the rule that wasn't met.            |
| `itemId`                                                      | *string*                                                      | :heavy_minus_sign:                                            | The unique identifier of the item that was validated.         |
| `message`                                                     | *string*                                                      | :heavy_minus_sign:                                            | The message that describes the validation warning or error.   |
| `validatorName`                                               | *string*                                                      | :heavy_minus_sign:                                            | The name of the validator that was used to validate the item. |