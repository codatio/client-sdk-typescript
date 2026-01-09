# GetTaxRateRequest

## Example Usage

```typescript
import { GetTaxRateRequest } from "@codat/sync-for-payables-version-1/sdk/models/operations";

let value: GetTaxRateRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  taxRateId: "<id>",
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          | Example                              |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `companyId`                          | *string*                             | :heavy_check_mark:                   | Unique identifier for a company.     | 8a210b68-6988-11ed-a1eb-0242ac120002 |
| `taxRateId`                          | *string*                             | :heavy_check_mark:                   | Unique identifier for a tax rate.    |                                      |