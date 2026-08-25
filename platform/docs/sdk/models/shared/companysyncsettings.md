# CompanySyncSettings

## Example Usage

```typescript
import { CompanySyncSettings } from "@codat/platform/sdk/models/shared";

let value: CompanySyncSettings = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
};
```

## Fields

| Field                                                                                                                           | Type                                                                                                                            | Required                                                                                                                        | Description                                                                                                                     | Example                                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `companyId`                                                                                                                     | *string*                                                                                                                        | :heavy_minus_sign:                                                                                                              | Unique identifier for your SMB in Codat.                                                                                        | 8a210b68-6988-11ed-a1eb-0242ac120002                                                                                            |
| `settings`                                                                                                                      | [shared.SyncSetting](../../../sdk/models/shared/syncsetting.md)[]                                                               | :heavy_minus_sign:                                                                                                              | N/A                                                                                                                             |                                                                                                                                 |
| `overridesDefaults`                                                                                                             | *boolean*                                                                                                                       | :heavy_minus_sign:                                                                                                              | Set to `True` if you want to override the default [sync settings](https://docs.codat.io/knowledge-base/advanced-sync-settings). |                                                                                                                                 |