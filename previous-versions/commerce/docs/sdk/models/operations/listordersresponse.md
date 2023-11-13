# ListOrdersResponse


## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `contentType`                                                     | *string*                                                          | :heavy_check_mark:                                                | HTTP response content type for this operation                     |
| `errorMessage`                                                    | [shared.ErrorMessage](../../../sdk/models/shared/errormessage.md) | :heavy_minus_sign:                                                | Your `query` parameter was not correctly formed                   |
| `orders`                                                          | [shared.Orders](../../../sdk/models/shared/orders.md)             | :heavy_minus_sign:                                                | OK                                                                |
| `statusCode`                                                      | *number*                                                          | :heavy_check_mark:                                                | HTTP response status code for this operation                      |
| `rawResponse`                                                     | [AxiosResponse](https://axios-http.com/docs/res_schema)           | :heavy_minus_sign:                                                | Raw HTTP response; suitable for custom response parsing           |