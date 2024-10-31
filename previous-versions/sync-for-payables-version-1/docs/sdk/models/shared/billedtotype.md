# BilledToType

Defines if the invoice or credit note is billed/rebilled to a project or customer.

## Example Usage

```typescript
import { BilledToType } from "@codat/sync-for-payables-version-1/sdk/models/shared";

let value: BilledToType = "NotApplicable";
```

## Values

```typescript
"Unknown" | "NotApplicable" | "Customer" | "Project"
```