# Suppliers

## Example Usage

```typescript
import { Suppliers } from "@codat/sync-for-expenses/sdk/models/shared";

let value: Suppliers = {
  pageNumber: 0,
  pageSize: 0,
  totalResults: 0,
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `pageNumber`                                                | *number*                                                    | :heavy_check_mark:                                          | Current page number.                                        |
| `pageSize`                                                  | *number*                                                    | :heavy_check_mark:                                          | Number of items to return in results array.                 |
| `totalResults`                                              | *number*                                                    | :heavy_check_mark:                                          | Total number of items.                                      |
| `links`                                                     | [shared.Links](../../../sdk/models/shared/links.md)         | :heavy_check_mark:                                          | N/A                                                         |
| `results`                                                   | [shared.Supplier](../../../sdk/models/shared/supplier.md)[] | :heavy_minus_sign:                                          | N/A                                                         |