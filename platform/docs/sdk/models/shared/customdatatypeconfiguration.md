# CustomDataTypeConfiguration

Client's configuration details for a specific custom data type and platform pair.

## Example Usage

```typescript
import { CustomDataTypeConfiguration } from "@codat/platform/sdk/models/shared";

let value: CustomDataTypeConfiguration = {
  dataSource: "api/purchaseOrders?$filter=currencyCode eq 'NOK'",
  requiredData: {
    "currencyCode": "$[*].currencyCode",
    "id": "$[*].id",
    "number": "$[*].number",
    "orderDate": "$[*].orderDate",
    "totalAmountExcludingTax": "$[*].totalAmountExcludingTax",
    "totalTaxAmount": "$[*].totalTaxAmount",
    "vendorName": "$[*].number",
  },
  keyBy: [
    "$[*].id",
  ],
  sourceModifiedDate: [
    "$[*].lastModifiedDateTime",
  ],
};
```

## Fields

| Field                                                                                                                                                                    | Type                                                                                                                                                                     | Required                                                                                                                                                                 | Description                                                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `dataSource`                                                                                                                                                             | *string*                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                       | Underlying endpoint of the source platform that will serve as a data source for the custom data type. This value is not validated by Codat.                              |
| `requiredData`                                                                                                                                                           | Record<string, *string*>                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                       | Properties required to be fetched from the underlying platform for the custom data type that is being configured. This value is not validated by Codat.                  |
| `keyBy`                                                                                                                                                                  | *string*[]                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                       | An array of properties from the source system that can be used to uniquely identify the records returned for the custom data type. This value is not validated by Codat. |
| `sourceModifiedDate`                                                                                                                                                     | *string*[]                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                       | Property in the source platform nominated by the client that defines the date when a record was last modified there. This value is not validated by Codat.               |