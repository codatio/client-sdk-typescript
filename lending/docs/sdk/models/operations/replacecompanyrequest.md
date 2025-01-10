# ReplaceCompanyRequest

## Example Usage

```typescript
import { ReplaceCompanyRequest } from "@codat/lending/sdk/models/operations";

let value: ReplaceCompanyRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  companyRequestBody: {
    name: "Bank of Dave",
    description: "Requested early access to the new financing scheme.",
  },
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   | Example                                                                       |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `companyId`                                                                   | *string*                                                                      | :heavy_check_mark:                                                            | Unique identifier for a company.                                              | 8a210b68-6988-11ed-a1eb-0242ac120002                                          |
| `companyRequestBody`                                                          | [shared.CompanyRequestBody](../../../sdk/models/shared/companyrequestbody.md) | :heavy_minus_sign:                                                            | N/A                                                                           |                                                                               |