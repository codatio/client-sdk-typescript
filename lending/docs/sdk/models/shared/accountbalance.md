# AccountBalance

## Example Usage

```typescript
import { AccountBalance } from "@codat/lending/sdk/models/shared";

let value: AccountBalance = {
  currency: "GBP",
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      | Example                                                          |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `available`                                                      | *Decimal*                                                        | :heavy_minus_sign:                                               | The account's current balance                                    |                                                                  |
| `pending`                                                        | *Decimal*                                                        | :heavy_minus_sign:                                               | Funds that are not yet available in the balance                  |                                                                  |
| `reserved`                                                       | *any*                                                            | :heavy_minus_sign:                                               | Funds reserved as holdings                                       |                                                                  |
| `currency`                                                       | *string*                                                         | :heavy_minus_sign:                                               | The currency of the account                                      | **Example 1:** GBP<br/>**Example 2:** USD<br/>**Example 3:** EUR |