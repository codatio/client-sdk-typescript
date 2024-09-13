# Validation

A human-readable object describing validation decisions Codat has made when pushing data into the platform. If a push has failed because of validation errors, they will be detailed here.

## Example Usage

```typescript
import { Validation } from "@codat/sync-for-payables-version-1/sdk/models/shared";

let value: Validation = {};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `errors`                                                                | [shared.ValidationItem](../../../sdk/models/shared/validationitem.md)[] | :heavy_minus_sign:                                                      | N/A                                                                     |
| `warnings`                                                              | [shared.ValidationItem](../../../sdk/models/shared/validationitem.md)[] | :heavy_minus_sign:                                                      | N/A                                                                     |