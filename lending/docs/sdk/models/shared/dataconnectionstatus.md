# DataConnectionStatus

The current authorization status of the data connection.

## Example Usage

```typescript
import { DataConnectionStatus } from "@codat/lending/sdk/models/shared";

let value: DataConnectionStatus = "Deauthorized";
```

## Values

```typescript
"PendingAuth" | "Linked" | "Unlinked" | "Deauthorized"
```