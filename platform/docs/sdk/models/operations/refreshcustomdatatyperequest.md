# RefreshCustomDataTypeRequest

## Example Usage

```typescript
import { RefreshCustomDataTypeRequest } from "@codat/platform/sdk/models/operations";

let value: RefreshCustomDataTypeRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  customDataIdentifier: "DynamicsPurchaseOrders",
};
```

## Fields

| Field                                     | Type                                      | Required                                  | Description                               | Example                                   |
| ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| `companyId`                               | *string*                                  | :heavy_check_mark:                        | Unique identifier for a company.          | 8a210b68-6988-11ed-a1eb-0242ac120002      |
| `connectionId`                            | *string*                                  | :heavy_check_mark:                        | Unique identifier for a connection.       | 2e9d2c44-f675-40ba-8049-353bfcb5e171      |
| `customDataIdentifier`                    | *string*                                  | :heavy_check_mark:                        | Unique identifier for a custom data type. | DynamicsPurchaseOrders                    |