# ListCustomersResponse


## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `contentType`                                                     | *string*                                                          | :heavy_check_mark:                                                | HTTP response content type for this operation                     |
| `customers`                                                       | [shared.Customers](../../../sdk/models/shared/customers.md)       | :heavy_minus_sign:                                                | OK                                                                |
| `errorMessage`                                                    | [shared.ErrorMessage](../../../sdk/models/shared/errormessage.md) | :heavy_minus_sign:                                                | Your `query` parameter was not correctly formed                   |
| `statusCode`                                                      | *number*                                                          | :heavy_check_mark:                                                | HTTP response status code for this operation                      |
| `rawResponse`                                                     | [AxiosResponse](https://axios-http.com/docs/res_schema)           | :heavy_check_mark:                                                | Raw HTTP response; suitable for custom response parsing           |