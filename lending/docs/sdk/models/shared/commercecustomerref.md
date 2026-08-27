# CommerceCustomerRef

Reference to the customer that placed the order.

## Example Usage

```typescript
import { CommerceCustomerRef } from "@codat/lending/sdk/models/shared";

let value: CommerceCustomerRef = {};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `id`                                                    | *string*                                                | :heavy_check_mark:                                      | The unique identitifer of the customer being referenced |
| `name`                                                  | *string*                                                | :heavy_minus_sign:                                      | Name of the customer being referenced.                  |