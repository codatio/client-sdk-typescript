# CompanyRequestBody

## Example Usage

```typescript
import { CompanyRequestBody } from "@codat/platform/sdk/models/shared";

let value: CompanyRequestBody = {
  name: "Bank of Dave",
  description: "Requested early access to the new financing scheme.",
  groups: [
    {
      id: "60d2fa12-8a04-11ee-b9d1-0242ac120002",
    },
  ],
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       | Example                                                                                           |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `name`                                                                                            | *string*                                                                                          | :heavy_check_mark:                                                                                | Name of company being connected.                                                                  | Bank of Dave                                                                                      |
| `description`                                                                                     | *string*                                                                                          | :heavy_minus_sign:                                                                                | Additional information about the company. This can be used to store foreign IDs, references, etc. | Requested early access to the new financing scheme.                                               |
| `groups`                                                                                          | [shared.GroupRef](../../../sdk/models/shared/groupref.md)[]                                       | :heavy_minus_sign:                                                                                | Reference to the groups that the company is assigned to.                                          |                                                                                                   |