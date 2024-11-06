# EnhancedReportAccountCategory

## Example Usage

```typescript
import { EnhancedReportAccountCategory } from "@codat/lending/sdk/models/shared";

let value: EnhancedReportAccountCategory = {};
```

## Fields

| Field                                                                                                                                    | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `status`                                                                                                                                 | *string*                                                                                                                                 | :heavy_minus_sign:                                                                                                                       | Returns a status of "Suggested" or "Confirmed". If an account has a confirmed category, it will replace any suggested category returned. |
| `levels`                                                                                                                                 | [shared.AccountCategoryLevel](../../../sdk/models/shared/accountcategorylevel.md)[]                                                      | :heavy_minus_sign:                                                                                                                       | N/A                                                                                                                                      |