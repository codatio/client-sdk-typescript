# Status

The current status of the dataset.

## Example Usage

```typescript
import { Status } from "@codat/sync-for-payables-version-1/sdk/models/shared";

let value: Status = "Validating";
```

## Values

```typescript
"Initial" | "Queued" | "Fetching" | "MapQueued" | "Mapping" | "Complete" | "FetchError" | "MapError" | "InternalError" | "ProcessingQueued" | "Processing" | "ProcessingError" | "ValidationQueued" | "Validating" | "ValidationError" | "AuthError" | "Cancelled" | "NotSupported" | "RateLimitError" | "PermissionsError" | "PrerequisiteNotMet"
```