# AccountCategoryLevel

An object containing an ordered list of account category levels.

## Example Usage

```typescript
import { AccountCategoryLevel } from "@codat/lending/sdk/models/shared";

let value: AccountCategoryLevel = {};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `levelName`                                                                                  | *string*                                                                                     | :heavy_minus_sign:                                                                           | Account category name.                                                                       |
| `confidence`                                                                                 | *Decimal*                                                                                    | :heavy_minus_sign:                                                                           | Confidence level of the category. This will only be populated where `status` is `Suggested`. |