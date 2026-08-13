# TaxComponentRef

Taxes rates reference object depending on the rates being available on source commerce software.

## Example Usage

```typescript
import { TaxComponentRef } from "@codat/lending/sdk/models/shared";

let value: TaxComponentRef = {};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `id`                                                          | *string*                                                      | :heavy_check_mark:                                            | The unique identitifer of the tax component being referenced. |
| `name`                                                        | *string*                                                      | :heavy_check_mark:                                            | Name of the tax component being referenced.                   |