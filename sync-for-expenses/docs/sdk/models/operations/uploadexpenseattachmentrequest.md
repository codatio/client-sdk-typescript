# UploadExpenseAttachmentRequest

## Example Usage

```typescript
import { UploadExpenseAttachmentRequest } from "@codat/sync-for-expenses/sdk/models/operations";

// No examples available for this model
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               | Example                                                                   |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `companyId`                                                               | *string*                                                                  | :heavy_check_mark:                                                        | Unique identifier for a company.                                          | 8a210b68-6988-11ed-a1eb-0242ac120002                                      |
| `syncId`                                                                  | *string*                                                                  | :heavy_check_mark:                                                        | Unique identifier for a sync.                                             | 6fb40d5e-b13e-11ed-afa1-0242ac120002                                      |
| `transactionId`                                                           | *string*                                                                  | :heavy_check_mark:                                                        | The unique identifier for your SMB's transaction.                         | 336694d8-2dca-4cb5-a28d-3ccb83e55eee                                      |
| `attachmentUpload`                                                        | [shared.AttachmentUpload](../../../sdk/models/shared/attachmentupload.md) | :heavy_minus_sign:                                                        | N/A                                                                       |                                                                           |