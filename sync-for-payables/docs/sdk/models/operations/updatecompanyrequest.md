# UpdateCompanyRequest

## Example Usage

```typescript
import { UpdateCompanyRequest } from "@codat/sync-for-payables/sdk/models/operations";

let value: UpdateCompanyRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       | Example                                                                           |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `companyId`                                                                       | *string*                                                                          | :heavy_check_mark:                                                                | Unique identifier for a company.                                                  | 8a210b68-6988-11ed-a1eb-0242ac120002                                              |
| `companyUpdateRequest`                                                            | [shared.CompanyUpdateRequest](../../../sdk/models/shared/companyupdaterequest.md) | :heavy_minus_sign:                                                                | N/A                                                                               |                                                                                   |