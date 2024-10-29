# CustomDataTypeRecord

## Example Usage

```typescript
import { CustomDataTypeRecord } from "@codat/platform/sdk/models/shared";

let value: CustomDataTypeRecord = {
  modifiedDate: {
    modifiedDate: "2022-10-23T00:00:00Z",
  },
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `id`                                                                                            | *string*                                                                                        | :heavy_minus_sign:                                                                              | Unique identifier of the record.                                                                |
| `content`                                                                                       | Record<string, [shared.Content](../../../sdk/models/shared/content.md)>                         | :heavy_minus_sign:                                                                              | Values from the source system for the properties defined in the custom data type configuration. |
| `modifiedDate`                                                                                  | [shared.ModifiedDate](../../../sdk/models/shared/modifieddate.md)                               | :heavy_minus_sign:                                                                              | N/A                                                                                             |