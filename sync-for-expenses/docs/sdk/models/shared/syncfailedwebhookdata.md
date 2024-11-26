# SyncFailedWebhookData

## Example Usage

```typescript
import { SyncFailedWebhookData } from "@codat/sync-for-expenses/sdk/models/shared";

let value: SyncFailedWebhookData = {
  syncId: "a9367074-b5c3-42c4-9be4-be129f43577e",
};
```

## Fields

| Field                                  | Type                                   | Required                               | Description                            | Example                                |
| -------------------------------------- | -------------------------------------- | -------------------------------------- | -------------------------------------- | -------------------------------------- |
| `syncId`                               | *string*                               | :heavy_minus_sign:                     | Unique identifier for the failed sync. | a9367074-b5c3-42c4-9be4-be129f43577e   |
| `syncType`                             | *string*                               | :heavy_minus_sign:                     | The type of sync being performed.      |                                        |
| `failureStage`                         | *string*                               | :heavy_minus_sign:                     | The stage of the job the sync failed.  |                                        |