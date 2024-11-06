# PushOptionProperty

## Example Usage

```typescript
import { PushOptionProperty } from "@codat/lending/sdk/models/shared";

let value: PushOptionProperty = {
  type: "File",
  displayName: "Nettie39",
  description: "ew absent mmm feline following willfully however ultimately",
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