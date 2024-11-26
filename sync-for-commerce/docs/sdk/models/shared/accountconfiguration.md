# AccountConfiguration

G/L account object for configuration.

## Example Usage

```typescript
import { AccountConfiguration } from "@codat/sync-for-commerce/sdk/models/shared";

let value: AccountConfiguration = {
  accountOptions: [
    {
      classification: "Bank Nominal",
    },
  ],
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `labelText`                                                                                     | *string*                                                                                        | :heavy_minus_sign:                                                                              | Label text for sales configuration section.                                                     |
| `descriptionText`                                                                               | *string*                                                                                        | :heavy_minus_sign:                                                                              | Descriptive text for sales configuration section.                                               |
| `selectedAccountId`                                                                             | *string*                                                                                        | :heavy_minus_sign:                                                                              | Selected account id from the list of available accounts.                                        |
| `required`                                                                                      | *boolean*                                                                                       | :heavy_minus_sign:                                                                              | Required section to be configured for sync.                                                     |
| `accountOptions`                                                                                | [shared.AccountConfigurationOption](../../../sdk/models/shared/accountconfigurationoption.md)[] | :heavy_minus_sign:                                                                              | Object containing account options.                                                              |