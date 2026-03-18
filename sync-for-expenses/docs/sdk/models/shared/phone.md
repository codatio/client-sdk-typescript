# Phone

## Example Usage

```typescript
import { Phone } from "@codat/sync-for-expenses/sdk/models/shared";

let value: Phone = {
  number: "+44 25691 154789",
  type: "Unknown",
};
```

## Fields

| Field                                                                                                         | Type                                                                                                          | Required                                                                                                      | Description                                                                                                   | Example                                                                                                       |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `number`                                                                                                      | *string*                                                                                                      | :heavy_minus_sign:                                                                                            | A phone number.                                                                                               | **Example 1:** +44 25691 154789<br/>**Example 2:** (877) 492-8687<br/>**Example 3:** 01224 658 999            |
| `type`                                                                                                        | [shared.CompanyInformationPhoneNumbersType](../../../sdk/models/shared/companyinformationphonenumberstype.md) | :heavy_check_mark:                                                                                            | The type of phone number                                                                                      |                                                                                                               |