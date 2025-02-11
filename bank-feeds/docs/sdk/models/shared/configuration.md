# Configuration

## Example Usage

```typescript
import { Configuration } from "@codat/bank-feeds/sdk/models/shared";

let value: Configuration = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         | Example                                                                             |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `companyId`                                                                         | *string*                                                                            | :heavy_minus_sign:                                                                  | Unique identifier for your SMB in Codat.                                            | 8a210b68-6988-11ed-a1eb-0242ac120002                                                |
| `accountingSoftwareCompanyName`                                                     | *string*                                                                            | :heavy_minus_sign:                                                                  | The company name defined in the accounting software.                                |                                                                                     |
| `enabled`                                                                           | *boolean*                                                                           | :heavy_minus_sign:                                                                  | Enabled or disable bank feeds.                                                      |                                                                                     |
| `configured`                                                                        | *boolean*                                                                           | :heavy_minus_sign:                                                                  | True if the company has been configured.                                            |                                                                                     |
| `schedule`                                                                          | [shared.ConfigurationSchedule](../../../sdk/models/shared/configurationschedule.md) | :heavy_minus_sign:                                                                  | N/A                                                                                 |                                                                                     |
| `configuration`                                                                     | [shared.SyncConfiguration](../../../sdk/models/shared/syncconfiguration.md)         | :heavy_minus_sign:                                                                  | N/A                                                                                 |                                                                                     |