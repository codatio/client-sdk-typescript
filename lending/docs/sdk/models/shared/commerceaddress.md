# CommerceAddress

## Example Usage

```typescript
import { CommerceAddress } from "@codat/lending/sdk/models/shared";

let value: CommerceAddress = {};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `type`                                                                          | [shared.CommerceAddressType](../../../sdk/models/shared/commerceaddresstype.md) | :heavy_minus_sign:                                                              | The type of the address                                                         |
| `line1`                                                                         | *string*                                                                        | :heavy_minus_sign:                                                              | The first line of the address                                                   |
| `line2`                                                                         | *string*                                                                        | :heavy_minus_sign:                                                              | The second line of the address                                                  |
| `city`                                                                          | *string*                                                                        | :heavy_minus_sign:                                                              | The third line of the address, or city                                          |
| `region`                                                                        | *string*                                                                        | :heavy_minus_sign:                                                              | The fourth line of the address, or region                                       |
| `country`                                                                       | *string*                                                                        | :heavy_minus_sign:                                                              | The country for the address                                                     |
| `postalCode`                                                                    | *string*                                                                        | :heavy_minus_sign:                                                              | The postal (or zip) code for the address                                        |