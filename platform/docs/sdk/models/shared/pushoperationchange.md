# PushOperationChange

## Example Usage

```typescript
import { PushOperationChange } from "@codat/platform/sdk/models/shared";

let value: PushOperationChange = {
  recordRef: {
    dataType: "invoices",
  },
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `type`                                                                    | [shared.PushChangeType](../../../sdk/models/shared/pushchangetype.md)     | :heavy_minus_sign:                                                        | Type of change being applied to record in third party platform.           |
| `recordRef`                                                               | [shared.PushOperationRef](../../../sdk/models/shared/pushoperationref.md) | :heavy_minus_sign:                                                        | N/A                                                                       |
| `attachmentId`                                                            | *string*                                                                  | :heavy_minus_sign:                                                        | Unique identifier for the attachment created otherwise null.              |