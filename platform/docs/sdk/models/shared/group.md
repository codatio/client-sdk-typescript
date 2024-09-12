# Group

A container you can use to organize companies together according to a shared characteristic of your choice.

## Example Usage

```typescript
import { Group } from "@codat/platform/sdk/models/shared";

let value: Group = {
  id: "60d2fa12-8a04-11ee-b9d1-0242ac120002",
  name: "Invoice finance team",
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          | Example                              |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `id`                                 | *string*                             | :heavy_minus_sign:                   | Unique identifier for the group.     | 60d2fa12-8a04-11ee-b9d1-0242ac120002 |
| `name`                               | *string*                             | :heavy_minus_sign:                   | Descriptive name of the group.       | Invoice finance team                 |