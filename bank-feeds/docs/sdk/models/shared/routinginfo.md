# RoutingInfo

Routing information for the bank. This does not include account number.

## Example Usage

```typescript
import { RoutingInfo } from "@codat/bank-feeds/sdk/models/shared";

let value: RoutingInfo = {};
```

## Fields

| Field                                             | Type                                              | Required                                          | Description                                       |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| `bankCode`                                        | *string*                                          | :heavy_minus_sign:                                | The numeric identifier of the routing number      |
| `type`                                            | [shared.Type](../../../sdk/models/shared/type.md) | :heavy_minus_sign:                                | The type of routing number.                       |