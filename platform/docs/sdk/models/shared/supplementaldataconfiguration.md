# SupplementalDataConfiguration

## Example Usage

```typescript
import { SupplementalDataConfiguration } from "@codat/platform/sdk/models/shared";

let value: SupplementalDataConfiguration = {
  supplementalDataConfig: {
    "orders-supplemental-data": {
      dataSource: "/orders",
      pullData: {
        "orderNumber": "order_num",
      },
      pushData: {
        "orderNumber": "order_num",
      },
    },
  },
};
```

## Fields

| Field                                                                                                                           | Type                                                                                                                            | Required                                                                                                                        | Description                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `supplementalDataConfig`                                                                                                        | Record<string, [shared.SupplementalDataSourceConfiguration](../../../sdk/models/shared/supplementaldatasourceconfiguration.md)> | :heavy_minus_sign:                                                                                                              | N/A                                                                                                                             |