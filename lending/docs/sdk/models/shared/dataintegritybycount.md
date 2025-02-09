# DataIntegrityByCount

## Example Usage

```typescript
import { DataIntegrityByCount } from "@codat/lending/sdk/models/shared";

let value: DataIntegrityByCount = {};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `matchPercentage`                                                                  | *Decimal*                                                                          | :heavy_minus_sign:                                                                 | The percentage of records of the type specified in the route which have a match.   |
| `unmatched`                                                                        | *Decimal*                                                                          | :heavy_minus_sign:                                                                 | The number of records of the type specified in the route which don't have a match. |
| `matched`                                                                          | *Decimal*                                                                          | :heavy_minus_sign:                                                                 | The number of records of the type specified in the route which do have a match.    |
| `total`                                                                            | *Decimal*                                                                          | :heavy_minus_sign:                                                                 | The total of unmatched and matched.                                                |