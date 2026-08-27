# CreateAccountResponseValidDataTypeLinks

## Example Usage

```typescript
import { CreateAccountResponseValidDataTypeLinks } from "@codat/sync-for-expenses/sdk/models/shared";

let value: CreateAccountResponseValidDataTypeLinks = {};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `property`                                              | *string*                                                | :heavy_minus_sign:                                      | The property from the account that can be linked.       |
| `links`                                                 | *string*[]                                              | :heavy_minus_sign:                                      | Supported `dataTypes` that the record can be linked to. |