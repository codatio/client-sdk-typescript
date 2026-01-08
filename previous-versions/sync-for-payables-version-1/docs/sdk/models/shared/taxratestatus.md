# TaxRateStatus

Status of the tax rate in the accounting software.  
- `Active` - An active tax rate in use by a company.  
- `Archived` - A tax rate that has been archived or is inactive in the accounting software.  
- `Unknown` - Where the status of the tax rate cannot be determined from the underlying platform.

## Example Usage

```typescript
import { TaxRateStatus } from "@codat/sync-for-payables-version-1/sdk/models/shared";

let value: TaxRateStatus = "Archived";
```

## Values

```typescript
"Unknown" | "Active" | "Archived"
```