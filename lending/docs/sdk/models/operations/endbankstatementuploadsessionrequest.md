# EndBankStatementUploadSessionRequest

## Example Usage

```typescript
import { EndBankStatementUploadSessionRequest } from "@codat/lending/sdk/models/operations";

let value: EndBankStatementUploadSessionRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  datasetId: "0597a60f-f2a5-44a3-9e94-764a3e865e79",
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             | Example                                                                                 |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `companyId`                                                                             | *string*                                                                                | :heavy_check_mark:                                                                      | Unique identifier for a company.                                                        | 8a210b68-6988-11ed-a1eb-0242ac120002                                                    |
| `connectionId`                                                                          | *string*                                                                                | :heavy_check_mark:                                                                      | Unique identifier for a connection.                                                     | 2e9d2c44-f675-40ba-8049-353bfcb5e171                                                    |
| `datasetId`                                                                             | *string*                                                                                | :heavy_check_mark:                                                                      | Unique identifier for the dataset that completed its sync.                              |                                                                                         |
| `endUploadSessionRequest`                                                               | [shared.EndUploadSessionRequest](../../../sdk/models/shared/enduploadsessionrequest.md) | :heavy_minus_sign:                                                                      | N/A                                                                                     |                                                                                         |