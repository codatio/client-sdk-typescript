# PaymentMappingOptions

Gets the bill payments mapping options for a company's accounting software

## Example Usage

```typescript
import { PaymentMappingOptions } from "@codat/sync-for-payables/sdk/models/shared";

let value: PaymentMappingOptions = {
  bankAccounts: [
    {
      id: "3d5a8e00-d108-4045-8823-7f342676cffa",
      name: "Bank of Dave current account",
      status: "Active",
      sourceModifiedDate: "2022-10-23T00:00:00Z",
    },
  ],
};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `bankAccounts`                                                                              | [shared.BankAccountMappingOption](../../../sdk/models/shared/bankaccountmappingoption.md)[] | :heavy_minus_sign:                                                                          | N/A                                                                                         |
| `pagination`                                                                                | [shared.Pagination](../../../sdk/models/shared/pagination.md)                               | :heavy_minus_sign:                                                                          | N/A                                                                                         |