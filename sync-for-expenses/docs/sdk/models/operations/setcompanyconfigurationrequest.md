# SetCompanyConfigurationRequest

## Example Usage

```typescript
import { SetCompanyConfigurationRequest } from "@codat/sync-for-expenses/sdk/models/operations";

let value: SetCompanyConfigurationRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  companyConfiguration: {
    bankAccount: {
      id: "32",
    },
    supplier: {},
    customer: {},
  },
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       | Example                                                                           |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `companyId`                                                                       | *string*                                                                          | :heavy_check_mark:                                                                | Unique identifier for a company.                                                  | 8a210b68-6988-11ed-a1eb-0242ac120002                                              |
| `companyConfiguration`                                                            | [shared.CompanyConfiguration](../../../sdk/models/shared/companyconfiguration.md) | :heavy_minus_sign:                                                                | N/A                                                                               |                                                                                   |