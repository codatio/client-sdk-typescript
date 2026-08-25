# PushOperationChange

## Example Usage

```typescript
import { PushOperationChange } from "@codat/sync-for-expenses/sdk/models/shared";

let value: PushOperationChange = {};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `type`                                                                    | [shared.PushChangeType](../../../sdk/models/shared/pushchangetype.md)     | :heavy_minus_sign:                                                        | N/A                                                                       |
| `recordRef`                                                               | [shared.PushOperationRef](../../../sdk/models/shared/pushoperationref.md) | :heavy_minus_sign:                                                        | N/A                                                                       |
| `attachmentId`                                                            | *string*                                                                  | :heavy_minus_sign:                                                        | Unique identifier for the attachment created otherwise null.              |