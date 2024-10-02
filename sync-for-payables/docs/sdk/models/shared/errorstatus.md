# ErrorStatus

The current status of a transient error. Null statuses indicate that the error is not transient.

## Example Usage

```typescript
import { ErrorStatus } from "@codat/sync-for-payables/sdk/models/shared";

let value: ErrorStatus = "Active";
```

## Values

```typescript
"Active" | "Resolved"
```