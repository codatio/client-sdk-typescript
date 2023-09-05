# ListProductCategoriesResponse


## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `contentType`                                                        | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `errorMessage`                                                       | [shared.ErrorMessage](../../models/shared/errormessage.md)           | :heavy_minus_sign:                                                   | Your `query` parameter was not correctly formed                      |
| `productCategories`                                                  | [shared.ProductCategories](../../models/shared/productcategories.md) | :heavy_minus_sign:                                                   | OK                                                                   |
| `statusCode`                                                         | *number*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `rawResponse`                                                        | [AxiosResponse>](https://axios-http.com/docs/res_schema)             | :heavy_minus_sign:                                                   | N/A                                                                  |