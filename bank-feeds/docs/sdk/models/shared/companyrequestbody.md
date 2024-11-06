# CompanyRequestBody

## Example Usage

```typescript
import { CompanyRequestBody } from "@codat/bank-feeds/sdk/models/shared";

let value: CompanyRequestBody = {
  name: "Bank of Dave",
  description: "Requested early access to the new financing scheme.",
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       | Example                                                                                           |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `name`                                                                                            | *string*                                                                                          | :heavy_check_mark:                                                                                | Name of company being connected.                                                                  | Bank of Dave                                                                                      |
| `description`                                                                                     | *string*                                                                                          | :heavy_minus_sign:                                                                                | Additional information about the company. This can be used to store foreign IDs, references, etc. | Requested early access to the new financing scheme.                                               |
| `tags`                                                                                            | Record<string, *string*>                                                                          | :heavy_minus_sign:                                                                                | A collection of user-defined key-value pairs that store custom metadata against the company.      |                                                                                                   |