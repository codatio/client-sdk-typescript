# CompanyConfiguration

## Example Usage

```typescript
import { CompanyConfiguration } from "@codat/sync-for-expenses/sdk/models/shared";

let value: CompanyConfiguration = {
  bankAccount: {
    id: "32",
  },
  supplier: {},
  customer: {},
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `bankAccount`                                                                 | [shared.BankAccountDetails](../../../sdk/models/shared/bankaccountdetails.md) | :heavy_check_mark:                                                            | N/A                                                                           |
| `supplier`                                                                    | [shared.SupplierDetails](../../../sdk/models/shared/supplierdetails.md)       | :heavy_check_mark:                                                            | N/A                                                                           |
| `customer`                                                                    | [shared.CustomerDetails](../../../sdk/models/shared/customerdetails.md)       | :heavy_check_mark:                                                            | N/A                                                                           |