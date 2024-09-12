# WriteStatus

The current status of the write request, which is the same as the push operation status.

## Example Usage

```typescript
import { WriteStatus } from "@codat/platform/sdk/models/shared";

let value: WriteStatus = "TimedOut";
```

## Values

```typescript
"Pending" | "Failed" | "Success" | "TimedOut"
```