# DatasetStatus

The current status of the dataset.

## Example Usage

```typescript
import { DatasetStatus } from "@codat/platform/sdk/models/shared";

let value: DatasetStatus = "ProcessingError";
```

## Values

```typescript
"Initial" | "Queued" | "Fetching" | "MapQueued" | "Mapping" | "Complete" | "FetchError" | "MapError" | "InternalError" | "ProcessingQueued" | "Processing" | "ProcessingError" | "ValidationQueued" | "Validating" | "ValidationError" | "AuthError" | "Cancelled" | "NotSupported" | "RateLimitError" | "PermissionsError" | "PrerequisiteNotMet"
```