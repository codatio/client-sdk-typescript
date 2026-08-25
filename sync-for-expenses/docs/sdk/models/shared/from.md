# From

## Example Usage

```typescript
import { From } from "@codat/sync-for-expenses/sdk/models/shared";

let value: From = {};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `accountRef`                                                                             | [shared.AccountReference](../../../sdk/models/shared/accountreference.md)                | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `amount`                                                                                 | *Decimal | number*                                                                       | :heavy_check_mark:                                                                       | Amount that has been transferred from the account in the native currency of the account. |