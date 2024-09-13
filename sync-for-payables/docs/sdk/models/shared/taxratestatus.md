# TaxRateStatus

Status of the tax rate in the accounting software.  
- `Active` - An active tax rate in use by a company.  
- `Archived` - A tax rate that has been archived or is inactive in the accounting software.  

## Example Usage

```typescript
import { TaxRateStatus } from "@codat/sync-for-payables/sdk/models/shared";

let value: TaxRateStatus = "Active";
```

## Values

```typescript
"Active" | "Archived"
```