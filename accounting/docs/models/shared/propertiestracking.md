# Propertiestracking

Categories, and a project and customer, against which the item is tracked.


## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `categoryRefs`                                                      | [TrackingCategoryRef](../../models/shared/trackingcategoryref.md)[] | :heavy_check_mark:                                                  | N/A                                                                 |
| `customerRef`                                                       | [CustomerRef](../../models/shared/customerref.md)                   | :heavy_minus_sign:                                                  | N/A                                                                 |
| `isBilledTo`                                                        | [BilledToType](../../models/shared/billedtotype.md)                 | :heavy_check_mark:                                                  | N/A                                                                 |
| `isRebilledTo`                                                      | [BilledToType](../../models/shared/billedtotype.md)                 | :heavy_check_mark:                                                  | N/A                                                                 |
| `projectRef`                                                        | [ProjectRef](../../models/shared/projectref.md)                     | :heavy_minus_sign:                                                  | N/A                                                                 |