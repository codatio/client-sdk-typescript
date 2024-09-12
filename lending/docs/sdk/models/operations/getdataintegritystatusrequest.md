# GetDataIntegrityStatusRequest

## Example Usage

```typescript
import { GetDataIntegrityStatusRequest } from "@codat/lending/sdk/models/operations";

let value: GetDataIntegrityStatusRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  dataType: "banking-accounts",
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         | Example                                                                             |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `companyId`                                                                         | *string*                                                                            | :heavy_check_mark:                                                                  | Unique identifier for a company.                                                    | 8a210b68-6988-11ed-a1eb-0242ac120002                                                |
| `dataType`                                                                          | [shared.DataIntegrityDataType](../../../sdk/models/shared/dataintegritydatatype.md) | :heavy_check_mark:                                                                  | A key for a Codat data type.                                                        | banking-accounts                                                                    |