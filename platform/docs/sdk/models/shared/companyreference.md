# CompanyReference

## Example Usage

```typescript
import { CompanyReference } from "@codat/platform/sdk/models/shared";

let value: CompanyReference = {
  id: "8a210b68-6988-11ed-a1eb-0242ac120002",
  name: "Codat Ltd.",
  description: "Requested early access to the new financing scheme.",
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       | Example                                                                                           |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `id`                                                                                              | *string*                                                                                          | :heavy_minus_sign:                                                                                | Unique identifier for your SMB in Codat.                                                          | 8a210b68-6988-11ed-a1eb-0242ac120002                                                              |
| `name`                                                                                            | *string*                                                                                          | :heavy_minus_sign:                                                                                | The name of the company                                                                           | Codat Ltd.                                                                                        |
| `description`                                                                                     | *string*                                                                                          | :heavy_minus_sign:                                                                                | Additional information about the company. This can be used to store foreign IDs, references, etc. | Requested early access to the new financing scheme.                                               |
| `links`                                                                                           | [shared.CompanyReferenceLinks](../../../sdk/models/shared/companyreferencelinks.md)               | :heavy_minus_sign:                                                                                | A collection of links for the company.                                                            |                                                                                                   |
| `tags`                                                                                            | Record<string, *string*>                                                                          | :heavy_minus_sign:                                                                                | A collection of user-defined key-value pairs that store custom metadata against the company.      |                                                                                                   |