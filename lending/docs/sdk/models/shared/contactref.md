# ContactRef

## Example Usage

```typescript
import { ContactRef } from "@codat/lending/sdk/models/shared";

let value: ContactRef = {
  id: "<id>",
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `id`                                                                          | *string*                                                                      | :heavy_check_mark:                                                            | Unique identifier for a customer or supplier.                                 |
| `dataType`                                                                    | [shared.ContactRefDataType](../../../sdk/models/shared/contactrefdatatype.md) | :heavy_minus_sign:                                                            | Allowed name of the 'dataType'.                                               |