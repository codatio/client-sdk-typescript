# AccountTransactionLineRecordRef

Links an account transaction line to the underlying record that created it.

## Example Usage

```typescript
import { AccountTransactionLineRecordRef } from "@codat/lending/sdk/models/shared";

let value: AccountTransactionLineRecordRef = {};
```

## Fields

| Field                                                                                                                   | Type                                                                                                                    | Required                                                                                                                | Description                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                    | *string*                                                                                                                | :heavy_minus_sign:                                                                                                      | 'id' of the underlying record or data type.                                                                             |
| `dataType`                                                                                                              | [shared.AccountTransactionLineRecordRefDataType](../../../sdk/models/shared/accounttransactionlinerecordrefdatatype.md) | :heavy_minus_sign:                                                                                                      | Name of underlying data type.                                                                                           |