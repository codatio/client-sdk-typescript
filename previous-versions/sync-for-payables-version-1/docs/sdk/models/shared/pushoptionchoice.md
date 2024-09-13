# PushOptionChoice

## Example Usage

```typescript
import { PushOptionChoice } from "@codat/sync-for-payables-version-1/sdk/models/shared";

let value: PushOptionChoice = {};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `value`                                                               | *string*                                                              | :heavy_minus_sign:                                                    | Allowed value for field.                                              |
| `type`                                                                | [shared.PushOptionType](../../../sdk/models/shared/pushoptiontype.md) | :heavy_minus_sign:                                                    | The option type.                                                      |
| `displayName`                                                         | *string*                                                              | :heavy_minus_sign:                                                    | The property's display name.                                          |
| `description`                                                         | *string*                                                              | :heavy_minus_sign:                                                    | A description of the property.                                        |
| `required`                                                            | *boolean*                                                             | :heavy_minus_sign:                                                    | The property is required if `True`.                                   |