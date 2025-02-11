# PhoneNumber

## Example Usage

```typescript
import { PhoneNumber } from "@codat/lending/sdk/models/shared";

let value: PhoneNumber = {
  number: "01224 658 999",
  type: "Landline",
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             | Example                                                                 |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `number`                                                                | *string*                                                                | :heavy_minus_sign:                                                      | A phone number.                                                         | +44 25691 154789                                                        |
| `type`                                                                  | [shared.PhoneNumberType](../../../sdk/models/shared/phonenumbertype.md) | :heavy_check_mark:                                                      | The type of phone number                                                |                                                                         |