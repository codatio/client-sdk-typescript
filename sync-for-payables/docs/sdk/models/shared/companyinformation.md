# CompanyInformation

Gets the latest basic info for a company.

## Example Usage

```typescript
import { CompanyInformation } from "@codat/sync-for-payables/sdk/models/shared";

let value: CompanyInformation = {};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `companyName`                                                                             | *string*                                                                                  | :heavy_minus_sign:                                                                        | Name of the linked company.                                                               |
| `baseCurrency`                                                                            | *string*                                                                                  | :heavy_minus_sign:                                                                        | Currency set in the accounting software of the linked company. Used by the currency rate. |