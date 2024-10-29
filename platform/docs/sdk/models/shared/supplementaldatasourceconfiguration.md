# SupplementalDataSourceConfiguration

The client's defined name for the object.

## Example Usage

```typescript
import { SupplementalDataSourceConfiguration } from "@codat/platform/sdk/models/shared";

let value: SupplementalDataSourceConfiguration = {};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `dataSource`                                                                        | *string*                                                                            | :heavy_minus_sign:                                                                  | The underlying endpoint of the source system which the configuration is targeting.  |
| `pullData`                                                                          | Record<string, *string*>                                                            | :heavy_minus_sign:                                                                  | The additional properties that are required when pulling records.                   |
| `pushData`                                                                          | Record<string, *string*>                                                            | :heavy_minus_sign:                                                                  | The additional properties that are required to create and/or update records.        |