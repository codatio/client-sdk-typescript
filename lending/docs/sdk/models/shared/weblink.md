# WebLink

Weblink associated with the company.

## Example Usage

```typescript
import { WebLink } from "@codat/lending/sdk/models/shared";

let value: WebLink = {
  type: "Website",
  url: "https://codat.io",
};
```

## Fields

| Field                                             | Type                                              | Required                                          | Description                                       |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| `type`                                            | [shared.Type](../../../sdk/models/shared/type.md) | :heavy_minus_sign:                                | The type of the weblink.                          |
| `url`                                             | *string*                                          | :heavy_minus_sign:                                | The full URL for the weblink.                     |