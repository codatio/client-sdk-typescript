# CompanyInformation

Information about the company from the underlying accounting software.

## Example Usage

```typescript
import { CompanyInformation } from "@codat/bank-feeds/sdk/models/shared";

let value: CompanyInformation = {};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `companyName`                                                        | *string*                                                             | :heavy_minus_sign:                                                   | Name of the linked company.                                          |
| `baseCurrency`                                                       | *string*                                                             | :heavy_minus_sign:                                                   | Currency set in the accounting software of the linked company.       |
| `planType`                                                           | *string*                                                             | :heavy_minus_sign:                                                   | Accounting software subscription type such as Trial, Demo, Standard. |
| `multicurrencyEnabled`                                               | *boolean*                                                            | :heavy_minus_sign:                                                   | Boolean showing if the organisation has multicurrency enabled.       |
| `currencies`                                                         | *string*[]                                                           | :heavy_minus_sign:                                                   | Array of enabled currencies for the linked company.                  |