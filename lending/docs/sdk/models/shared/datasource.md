# DataSource

## Example Usage

```typescript
import { DataSource } from "@codat/lending/sdk/models/shared";

let value: DataSource = {
  accounts: [
    {
      sourceRef: {},
      currency: "EUR",
    },
  ],
};
```

## Fields

| Field                                                                                                                                                                | Type                                                                                                                                                                 | Required                                                                                                                                                             | Description                                                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `accounts`                                                                                                                                                           | [shared.Accounts](../../../sdk/models/shared/accounts.md)[]                                                                                                          | :heavy_minus_sign:                                                                                                                                                   | An array containing bank account data for each connected banking data source that have the following data types enabled: `banking-accounts`, `banking-transactions`. |