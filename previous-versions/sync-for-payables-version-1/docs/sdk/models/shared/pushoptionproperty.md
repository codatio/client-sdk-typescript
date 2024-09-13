# PushOptionProperty

## Example Usage

```typescript
import { PushOptionProperty } from "@codat/sync-for-payables-version-1/sdk/models/shared";

let value: PushOptionProperty = {
  type: "Object",
  displayName: "Florian.Champlin60",
  description: "Horizontal eco-centric local area network",
  required: false,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `type`                                                                                        | [shared.PushOptionType](../../../sdk/models/shared/pushoptiontype.md)                         | :heavy_check_mark:                                                                            | The option type.                                                                              |
| `displayName`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | The property's display name.                                                                  |
| `description`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | A description of the property.                                                                |
| `required`                                                                                    | *boolean*                                                                                     | :heavy_check_mark:                                                                            | The property is required if `True`.                                                           |
| `properties`                                                                                  | Record<string, [shared.PushOptionProperty](../../../sdk/models/shared/pushoptionproperty.md)> | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `options`                                                                                     | [shared.PushOptionChoice](../../../sdk/models/shared/pushoptionchoice.md)[]                   | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `validation`                                                                                  | [shared.PushValidationInfo](../../../sdk/models/shared/pushvalidationinfo.md)                 | :heavy_minus_sign:                                                                            | N/A                                                                                           |