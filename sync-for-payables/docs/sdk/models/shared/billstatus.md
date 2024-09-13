# BillStatus

Current state of the bill. If creating a bill the status must be `Open`.

## Example Usage

```typescript
import { BillStatus } from "@codat/sync-for-payables/sdk/models/shared";

let value: BillStatus = "Open";
```

## Values

```typescript
"Unknown" | "Open" | "PartiallyPaid" | "Paid" | "Void" | "Draft"
```