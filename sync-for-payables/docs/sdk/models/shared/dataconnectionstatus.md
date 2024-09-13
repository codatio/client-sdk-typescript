# DataConnectionStatus

The current authorization status of the data connection.

## Example Usage

```typescript
import { DataConnectionStatus } from "@codat/sync-for-payables/sdk/models/shared";

let value: DataConnectionStatus = "Linked";
```

## Values

```typescript
"PendingAuth" | "Linked" | "Unlinked" | "Deauthorized"
```