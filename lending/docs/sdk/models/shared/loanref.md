# LoanRef

## Example Usage

```typescript
import { LoanRef } from "@codat/lending/sdk/models/shared";

let value: LoanRef = {};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `id`                                                                  | *string*                                                              | :heavy_minus_sign:                                                    | The id of the object being referred to.                               |
| `dataConnectionId`                                                    | *string*                                                              | :heavy_minus_sign:                                                    | The dataConnectionId the object being referred to is associated with. |
| `type`                                                                | *string*                                                              | :heavy_minus_sign:                                                    | The object type data is referring to, e.g. Account.                   |