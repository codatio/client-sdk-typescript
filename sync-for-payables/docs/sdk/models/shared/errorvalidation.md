# ErrorValidation

A human-readable object describing validation decisions Codat has made. If an operation has failed because of validation errors, they will be detailed here.

## Example Usage

```typescript
import { ErrorValidation } from "@codat/sync-for-payables/sdk/models/shared";

let value: ErrorValidation = {};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `errors`                                                                          | [shared.ErrorValidationItem](../../../sdk/models/shared/errorvalidationitem.md)[] | :heavy_minus_sign:                                                                | N/A                                                                               |
| `warnings`                                                                        | [shared.ErrorValidationItem](../../../sdk/models/shared/errorvalidationitem.md)[] | :heavy_minus_sign:                                                                | N/A                                                                               |