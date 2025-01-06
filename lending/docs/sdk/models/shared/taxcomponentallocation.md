# TaxComponentAllocation

## Example Usage

```typescript
import { TaxComponentAllocation } from "@codat/lending/sdk/models/shared";

let value: TaxComponentAllocation = {
  taxComponentRef: {
    id: "9wg4lep4ush5cxs79pl8sozmsndbaukll3ind4g7buqbm1h2",
    name: "<value>",
  },
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `taxComponentRef`                                                                                | [shared.TaxComponentRef](../../../sdk/models/shared/taxcomponentref.md)                          | :heavy_minus_sign:                                                                               | Taxes rates reference object depending on the rates being available on source commerce software. |
| `rate`                                                                                           | *Decimal*                                                                                        | :heavy_minus_sign:                                                                               | Tax amount on order line sale as available from source commerce software.                        |