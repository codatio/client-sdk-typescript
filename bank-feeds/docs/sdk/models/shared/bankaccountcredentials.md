# BankAccountCredentials

Result of generate credentials

## Example Usage

```typescript
import { BankAccountCredentials } from "@codat/bank-feeds/sdk/models/shared";

let value: BankAccountCredentials = {
  username: "S0MW-TR0P-7DS0",
  password: "cO0ajh0uGyTN0Pwh",
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   | Example                                                                       |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `username`                                                                    | *string*                                                                      | :heavy_minus_sign:                                                            | Username used by the bank feeds platform to retrieve transactions             | S0MW-TR0P-7DS0                                                                |
| `password`                                                                    | *string*                                                                      | :heavy_minus_sign:                                                            | Password to enable the bank feeds platform to securely retrieve transactions. | cO0ajh0uGyTN0Pwh                                                              |