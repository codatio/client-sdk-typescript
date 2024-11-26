# ExpenseContactRef

## Example Usage

```typescript
import { ExpenseContactRef } from "@codat/sync-for-expenses/sdk/models/shared";

let value: ExpenseContactRef = {
  id: "40e3e57c-2322-4898-966c-ca41adfd23fd",
  type: "Supplier",
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         | Example                                                                             |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `id`                                                                                | *string*                                                                            | :heavy_check_mark:                                                                  | Identifier of supplier or customer.                                                 | 40e3e57c-2322-4898-966c-ca41adfd23fd                                                |
| `type`                                                                              | [shared.ExpenseContactRefType](../../../sdk/models/shared/expensecontactreftype.md) | :heavy_minus_sign:                                                                  | The type of contact.                                                                | Supplier                                                                            |