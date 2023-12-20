# TaxComponentAllocation


## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `rate`                                                                                            | *number*                                                                                          | :heavy_minus_sign:                                                                                | Tax amount on order line sale as available from source commerce platform.                         |
| `taxComponentRef`                                                                                 | [shared.ServiceChargeTaxComponentRef](../../../sdk/models/shared/servicechargetaxcomponentref.md) | :heavy_minus_sign:                                                                                | Taxes rates reference object depending on the rates being available on source commerce package.   |