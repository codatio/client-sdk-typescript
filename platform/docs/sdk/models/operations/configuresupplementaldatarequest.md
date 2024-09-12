# ConfigureSupplementalDataRequest

## Example Usage

```typescript
import { ConfigureSupplementalDataRequest } from "@codat/platform/sdk/models/operations";

let value: ConfigureSupplementalDataRequest = {
  platformKey: "gbol",
  dataType: "invoices",
  supplementalDataConfiguration: {
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
  },
};
```

## Fields

| Field                                                                                                                                                                             | Type                                                                                                                                                                              | Required                                                                                                                                                                          | Description                                                                                                                                                                       | Example                                                                                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `platformKey`                                                                                                                                                                     | *string*                                                                                                                                                                          | :heavy_check_mark:                                                                                                                                                                | A unique 4-letter key to represent a platform in each integration.                                                                                                                | gbol                                                                                                                                                                              |
| `dataType`                                                                                                                                                                        | [operations.DataType](../../../sdk/models/operations/datatype.md)                                                                                                                 | :heavy_check_mark:                                                                                                                                                                | Supported supplemental data data type.                                                                                                                                            | invoices                                                                                                                                                                          |
| `supplementalDataConfiguration`                                                                                                                                                   | [shared.SupplementalDataConfiguration](../../../sdk/models/shared/supplementaldataconfiguration.md)                                                                               | :heavy_minus_sign:                                                                                                                                                                | The configuration for the specified platform and data type.                                                                                                                       | {<br/>"supplementalDataConfig": {<br/>"orders-supplemental-data": {<br/>"dataSource": "/orders",<br/>"pullData": {<br/>"orderNumber": "order_num"<br/>},<br/>"pushData": {<br/>"orderNumber": "order_num"<br/>}<br/>}<br/>}<br/>} |