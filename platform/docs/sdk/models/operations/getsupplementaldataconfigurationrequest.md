# GetSupplementalDataConfigurationRequest

## Example Usage

```typescript
import { GetSupplementalDataConfigurationRequest } from "@codat/platform/sdk/models/operations";

let value: GetSupplementalDataConfigurationRequest = {
  platformKey: "gbol",
  dataType: "invoices",
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         | Example                                                                             |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `platformKey`                                                                       | *string*                                                                            | :heavy_check_mark:                                                                  | A unique 4-letter key to represent a platform in each integration.                  | gbol                                                                                |
| `dataType`                                                                          | [operations.PathParamDataType](../../../sdk/models/operations/pathparamdatatype.md) | :heavy_check_mark:                                                                  | Supported supplemental data data type.                                              | invoices                                                                            |