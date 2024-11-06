# DownloadFilesRequest

## Example Usage

```typescript
import { DownloadFilesRequest } from "@codat/lending/sdk/models/operations";

let value: DownloadFilesRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  date: "2022-10-23T00:00:00Z",
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                | Example                                    |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `companyId`                                | *string*                                   | :heavy_check_mark:                         | Unique identifier for a company.           | 8a210b68-6988-11ed-a1eb-0242ac120002       |
| `date`                                     | *string*                                   | :heavy_minus_sign:                         | Only download files uploaded on this date. | 2022-10-23 00:00:00 +0000 UTC              |