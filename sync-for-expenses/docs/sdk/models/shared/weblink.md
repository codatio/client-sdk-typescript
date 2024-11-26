# Weblink

Weblink associated with the company.

## Example Usage

```typescript
import { Weblink } from "@codat/sync-for-expenses/sdk/models/shared";

let value: Weblink = {
  type: "Website",
  url: "https://codat.io",
};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `type`                                                                                | [shared.CompanyInformationType](../../../sdk/models/shared/companyinformationtype.md) | :heavy_minus_sign:                                                                    | The type of the weblink.                                                              |
| `url`                                                                                 | *string*                                                                              | :heavy_minus_sign:                                                                    | The full URL for the weblink.                                                         |