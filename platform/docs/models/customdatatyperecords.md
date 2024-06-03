# CustomDataTypeRecords

Resulting records pulled from the source platform for a specific custom data type.


## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `pageNumber`                                                       | *number*                                                           | :heavy_minus_sign:                                                 | Current page number.                                               |
| `pageSize`                                                         | *number*                                                           | :heavy_minus_sign:                                                 | Number of items to return in results array.                        |
| `results`                                                          | [models.CustomDataTypeRecord](../models/customdatatyperecord.md)[] | :heavy_minus_sign:                                                 | N/A                                                                |
| `totalResults`                                                     | *number*                                                           | :heavy_minus_sign:                                                 | Total number of items.                                             |