# Phone

## Example Usage

```typescript
import { Phone } from "@codat/sync-for-expenses/sdk/models/shared";

let value: Phone = {
  number: "(877) 492-8687",
  type: "Mobile",
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             | Example                                                                 |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `number`                                                                | *string*                                                                | :heavy_minus_sign:                                                      | A phone number.                                                         | +44 25691 154789                                                        |
| `type`                                                                  | [shared.PhoneNumberType](../../../sdk/models/shared/phonenumbertype.md) | :heavy_check_mark:                                                      | The type of phone number                                                |                                                                         |