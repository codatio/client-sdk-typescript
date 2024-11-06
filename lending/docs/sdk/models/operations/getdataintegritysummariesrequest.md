# GetDataIntegritySummariesRequest

## Example Usage

```typescript
import { GetDataIntegritySummariesRequest } from "@codat/lending/sdk/models/operations";

let value: GetDataIntegritySummariesRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  dataType: "banking-accounts",
  query: "id=e3334455-1aed-4e71-ab43-6bccf12092ee",
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         | Example                                                                             |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `companyId`                                                                         | *string*                                                                            | :heavy_check_mark:                                                                  | Unique identifier for a company.                                                    | 8a210b68-6988-11ed-a1eb-0242ac120002                                                |
| `dataType`                                                                          | [shared.DataIntegrityDataType](../../../sdk/models/shared/dataintegritydatatype.md) | :heavy_check_mark:                                                                  | A key for a Codat data type.                                                        | banking-accounts                                                                    |
| `query`                                                                             | *string*                                                                            | :heavy_minus_sign:                                                                  | Codat query string. [Read more](https://docs.codat.io/using-the-api/querying).      | id=e3334455-1aed-4e71-ab43-6bccf12092ee                                             |