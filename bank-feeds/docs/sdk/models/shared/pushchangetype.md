# PushChangeType

Type of change being applied to record in third party platform.

## Example Usage

```typescript
import { PushChangeType } from "@codat/bank-feeds/sdk/models/shared";

let value: PushChangeType = "Modified";
```

## Values

```typescript
"Unknown" | "Created" | "Modified" | "Deleted" | "AttachmentUploaded"
```