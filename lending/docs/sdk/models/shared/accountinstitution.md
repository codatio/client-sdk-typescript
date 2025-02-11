# AccountInstitution

The bank or other financial institution providing the account.

## Example Usage

```typescript
import { AccountInstitution } from "@codat/lending/sdk/models/shared";

let value: AccountInstitution = {};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `id`                                                          | *string*                                                      | :heavy_minus_sign:                                            | The institution's ID, according to the provider.              |
| `name`                                                        | *string*                                                      | :heavy_minus_sign:                                            | The institution's name, according to the underlying provider. |