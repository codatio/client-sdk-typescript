# CustomDataTypeRecords

Resulting records pulled from the source platform for a specific custom data type.

## Example Usage

```typescript
import { CustomDataTypeRecords } from "@codat/platform/sdk/models/shared";

let value: CustomDataTypeRecords = {
  results: [
    {
      modifiedDate: {
        modifiedDate: "2022-10-23T00:00:00Z",
      },
    },
  ],
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `results`                                                                           | [shared.CustomDataTypeRecord](../../../sdk/models/shared/customdatatyperecord.md)[] | :heavy_minus_sign:                                                                  | N/A                                                                                 |
| `pageNumber`                                                                        | *number*                                                                            | :heavy_minus_sign:                                                                  | Current page number.                                                                |
| `pageSize`                                                                          | *number*                                                                            | :heavy_minus_sign:                                                                  | Number of items to return in results array.                                         |
| `totalResults`                                                                      | *number*                                                                            | :heavy_minus_sign:                                                                  | Total number of items.                                                              |