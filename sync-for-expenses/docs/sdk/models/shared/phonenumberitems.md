# PhoneNumberItems

## Example Usage

```typescript
import { PhoneNumberItems } from "@codat/sync-for-expenses/sdk/models/shared";

let value: PhoneNumberItems = {
  number: "+44 25691 154789",
  type: "Primary",
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             | Example                                                                 |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `number`                                                                | *string*                                                                | :heavy_minus_sign:                                                      | A phone number.                                                         | +44 25691 154789                                                        |
| `type`                                                                  | [shared.PhoneNumberType](../../../sdk/models/shared/phonenumbertype.md) | :heavy_check_mark:                                                      | The type of phone number                                                |                                                                         |