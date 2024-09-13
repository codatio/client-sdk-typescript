# BillPaymentAccountRef

Reference to the bank account / credit card which you are using to pay the bill.

## Example Usage

```typescript
import { BillPaymentAccountRef } from "@codat/sync-for-payables/sdk/models/shared";

let value: BillPaymentAccountRef = {
  id: "<id>",
};
```

## Fields

| Field                                       | Type                                        | Required                                    | Description                                 |
| ------------------------------------------- | ------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| `id`                                        | *string*                                    | :heavy_check_mark:                          | Unique ID of the bank account / credit card |