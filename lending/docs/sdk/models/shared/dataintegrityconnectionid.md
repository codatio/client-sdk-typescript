# DataIntegrityConnectionId

## Example Usage

```typescript
import { DataIntegrityConnectionId } from "@codat/lending/sdk/models/shared";

let value: DataIntegrityConnectionId = {};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `source`                                                                   | *string*[]                                                                 | :heavy_minus_sign:                                                         | An array of strings. The connection IDs for the type specified in the url. |
| `target`                                                                   | *string*[]                                                                 | :heavy_minus_sign:                                                         | An array of strings. The connection IDs for the type being matched to.     |