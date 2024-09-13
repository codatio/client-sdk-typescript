# TaxRateComponent

A tax rate can be made up of multiple sub taxes, often called components of the tax.

## Example Usage

```typescript
import { TaxRateComponent } from "@codat/sync-for-payables-version-1/sdk/models/shared";

let value: TaxRateComponent = {
  isCompound: false,
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `name`                                                                             | *string*                                                                           | :heavy_minus_sign:                                                                 | Name of the tax rate component.                                                    |
| `rate`                                                                             | *Decimal*                                                                          | :heavy_minus_sign:                                                                 | The rate of the tax rate component, usually a percentage.                          |
| `isCompound`                                                                       | *boolean*                                                                          | :heavy_check_mark:                                                                 | A flag to indicate with the tax is calculated using the principle of compounding.  |