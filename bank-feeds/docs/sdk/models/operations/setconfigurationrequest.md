# SetConfigurationRequest

## Example Usage

```typescript
import { SetConfigurationRequest } from "@codat/bank-feeds/sdk/models/operations";

let value: SetConfigurationRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  configuration: {
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  },
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         | Example                                                             |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `companyId`                                                         | *string*                                                            | :heavy_check_mark:                                                  | Unique identifier for a company.                                    | 8a210b68-6988-11ed-a1eb-0242ac120002                                |
| `configuration`                                                     | [shared.Configuration](../../../sdk/models/shared/configuration.md) | :heavy_minus_sign:                                                  | N/A                                                                 |                                                                     |