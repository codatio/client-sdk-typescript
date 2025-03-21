# TaxComponentRef

Taxes rates reference object depending on the rates being available on source commerce software.

## Example Usage

```typescript
import { TaxComponentRef } from "@codat/lending/sdk/models/shared";

let value: TaxComponentRef = {
  id: "13d946f0-c5d5-42bc-b092-97ece17923ab",
  name: "<value>",
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   | Example                                                       |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `id`                                                          | *string*                                                      | :heavy_check_mark:                                            | The unique identitifer of the tax component being referenced. | 13d946f0-c5d5-42bc-b092-97ece17923ab                          |
| `name`                                                        | *string*                                                      | :heavy_check_mark:                                            | Name of the tax component being referenced.                   |                                                               |