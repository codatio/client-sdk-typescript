# DataIntegritySummaries

## Example Usage

```typescript
import { DataIntegritySummaries } from "@codat/lending/sdk/models/shared";

let value: DataIntegritySummaries = {
  summaries: [
    {
      byAmount: {
        currency: "EUR",
      },
    },
  ],
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `summaries`                                                                         | [shared.DataIntegritySummary](../../../sdk/models/shared/dataintegritysummary.md)[] | :heavy_minus_sign:                                                                  | N/A                                                                                 |