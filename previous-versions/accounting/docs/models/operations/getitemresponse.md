# GetItemResponse


## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `contentType`                                              | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `errorMessage`                                             | [shared.ErrorMessage](../../models/shared/errormessage.md) | :heavy_minus_sign:                                         | Your API request was not properly authorized.              |
| `item`                                                     | [shared.Item](../../models/shared/item.md)                 | :heavy_minus_sign:                                         | Success                                                    |
| `statusCode`                                               | *number*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `rawResponse`                                              | [AxiosResponse>](https://axios-http.com/docs/res_schema)   | :heavy_minus_sign:                                         | N/A                                                        |