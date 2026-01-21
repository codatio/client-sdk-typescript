# PhoneNumber

## Example Usage

```typescript
import { PhoneNumber } from "@codat/lending/sdk/models/shared";

let value: PhoneNumber = {
  number: "+44 25691 154789",
  type: "Mobile",
};
```

## Fields

| Field                                             | Type                                              | Required                                          | Description                                       | Example                                           |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| `number`                                          | *string*                                          | :heavy_minus_sign:                                | A phone number.                                   | +44 25691 154789                                  |
| `type`                                            | [shared.Type](../../../sdk/models/shared/type.md) | :heavy_check_mark:                                | The type of phone number                          |                                                   |