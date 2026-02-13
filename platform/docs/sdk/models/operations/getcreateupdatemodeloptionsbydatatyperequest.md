# GetCreateUpdateModelOptionsByDataTypeRequest

## Example Usage

```typescript
import { GetCreateUpdateModelOptionsByDataTypeRequest } from "@codat/platform/sdk/models/operations";

let value: GetCreateUpdateModelOptionsByDataTypeRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  dataType: "invoices",
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           | Example                                                               |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `companyId`                                                           | *string*                                                              | :heavy_check_mark:                                                    | Unique identifier for a company.                                      | 8a210b68-6988-11ed-a1eb-0242ac120002                                  |
| `connectionId`                                                        | *string*                                                              | :heavy_check_mark:                                                    | Unique identifier for a connection.                                   | 2e9d2c44-f675-40ba-8049-353bfcb5e171                                  |
| `dataType`                                                            | [shared.SchemaDataType](../../../sdk/models/shared/schemadatatype.md) | :heavy_check_mark:                                                    | The key of a Codat data type.                                         | invoices                                                              |