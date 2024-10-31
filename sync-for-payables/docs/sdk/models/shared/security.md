# Security

## Example Usage

```typescript
import { Security } from "@codat/sync-for-payables/sdk/models/shared";

let value: Security = {
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
};
```

## Fields

| Field                          | Type                           | Required                       | Description                    | Example                        |
| ------------------------------ | ------------------------------ | ------------------------------ | ------------------------------ | ------------------------------ |
| `authHeader`                   | *string*                       | :heavy_check_mark:             | N/A                            | Basic BASE_64_ENCODED(API_KEY) |