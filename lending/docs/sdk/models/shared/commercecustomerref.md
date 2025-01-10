# CommerceCustomerRef

Reference to the customer that placed the order.

## Example Usage

```typescript
import { CommerceCustomerRef } from "@codat/lending/sdk/models/shared";

let value: CommerceCustomerRef = {
  id: "13d946f0-c5d5-42bc-b092-97ece17923ab",
};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             | Example                                                 |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `id`                                                    | *string*                                                | :heavy_check_mark:                                      | The unique identitifer of the customer being referenced | 13d946f0-c5d5-42bc-b092-97ece17923ab                    |
| `name`                                                  | *string*                                                | :heavy_minus_sign:                                      | Name of the customer being referenced.                  |                                                         |