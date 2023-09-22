# CreateCompanyResponse


## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `company`                                                  | [shared.Company](../../models/shared/company.md)           | :heavy_minus_sign:                                         | OK                                                         |
| `contentType`                                              | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `errorMessage`                                             | [shared.ErrorMessage](../../models/shared/errormessage.md) | :heavy_minus_sign:                                         | The request made is not valid.                             |
| `statusCode`                                               | *number*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `rawResponse`                                              | [AxiosResponse](https://axios-http.com/docs/res_schema)    | :heavy_minus_sign:                                         | N/A                                                        |