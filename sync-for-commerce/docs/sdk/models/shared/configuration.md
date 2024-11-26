# Configuration

## Example Usage

```typescript
import { Configuration } from "@codat/sync-for-commerce/sdk/models/shared";

let value: Configuration = {
  schedule: {
    startDate: "2022-10-23T00:00:00Z",
    timeZone: "Europe/London",
  },
  configuration: {
    sales: {
      accounts: {
        "key": {
          accountOptions: [
            {
              classification: "Bank Nominal",
            },
          ],
        },
      },
      invoiceStatus: {
        selectedInvoiceStatus: "Submitted",
      },
    },
    payments: {
      accounts: {
        "key": {
          accountOptions: [
            {
              classification: "Bank Nominal",
            },
          ],
        },
      },
    },
    newPayments: {
      accounts: {
        "key": {
          accountOptions: [
            {
              classification: "Bank Nominal",
            },
          ],
        },
      },
    },
    fees: {
      accounts: {
        "key": {
          accountOptions: [
            {
              classification: "Bank Nominal",
            },
          ],
        },
      },
    },
  },
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `companyId`                                                                         | *any*                                                                               | :heavy_minus_sign:                                                                  | Unique identifier for a company.                                                    |
| `accountingSoftwareCompanyName`                                                     | *string*                                                                            | :heavy_minus_sign:                                                                  | The company name defined in the accounting software.                                |
| `enable`                                                                            | *boolean*                                                                           | :heavy_minus_sign:                                                                  | True if Sync for Commerce is enabled for the company.                               |
| `configured`                                                                        | *boolean*                                                                           | :heavy_minus_sign:                                                                  | True if Sync for Commerce has been configured for the company.                      |
| `schedule`                                                                          | [shared.SyncSchedule](../../../sdk/models/shared/syncschedule.md)                   | :heavy_minus_sign:                                                                  | N/A                                                                                 |
| `configuration`                                                                     | [shared.CommerceConfiguration](../../../sdk/models/shared/commerceconfiguration.md) | :heavy_minus_sign:                                                                  | N/A                                                                                 |