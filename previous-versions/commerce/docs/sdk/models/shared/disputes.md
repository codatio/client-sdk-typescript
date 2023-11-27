# Disputes


## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `links`                                                   | [shared.Links](../../../sdk/models/shared/links.md)       | :heavy_check_mark:                                        | N/A                                                       |
| `pageNumber`                                              | *number*                                                  | :heavy_check_mark:                                        | Current page number.                                      |
| `pageSize`                                                | *number*                                                  | :heavy_check_mark:                                        | Number of items to return in results array.               |
| `results`                                                 | [shared.Dispute](../../../sdk/models/shared/dispute.md)[] | :heavy_minus_sign:                                        | N/A                                                       |
| `totalResults`                                            | *number*                                                  | :heavy_check_mark:                                        | Total number of items.                                    |