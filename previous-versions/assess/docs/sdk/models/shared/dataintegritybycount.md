# DataIntegrityByCount


## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `matchPercentage`                                                                  | *number*                                                                           | :heavy_minus_sign:                                                                 | The percentage of records of the type specified in the route which have a match.   |
| `matched`                                                                          | *number*                                                                           | :heavy_minus_sign:                                                                 | The number of records of the type specified in the route which do have a match.    |
| `total`                                                                            | *number*                                                                           | :heavy_minus_sign:                                                                 | The total of unmatched and matched.                                                |
| `unmatched`                                                                        | *number*                                                                           | :heavy_minus_sign:                                                                 | The number of records of the type specified in the route which don't have a match. |