# AccountTransactionLine

## Example Usage

```typescript
import { AccountTransactionLine } from "@codat/lending/sdk/models/shared";

let value: AccountTransactionLine = {};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `description`                                                                                           | *string*                                                                                                | :heavy_minus_sign:                                                                                      | Description of the account transaction.                                                                 |
| `recordRef`                                                                                             | [shared.AccountTransactionLineRecordRef](../../../sdk/models/shared/accounttransactionlinerecordref.md) | :heavy_minus_sign:                                                                                      | N/A                                                                                                     |
| `amount`                                                                                                | *Decimal | number*                                                                                      | :heavy_minus_sign:                                                                                      | Amount in the bill payment currency.                                                                    |