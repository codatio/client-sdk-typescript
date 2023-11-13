# UnlinkConnectionResponse


## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `connection`                                                      | [shared.Connection](../../../sdk/models/shared/connection.md)     | :heavy_minus_sign:                                                | OK                                                                |
| `contentType`                                                     | *string*                                                          | :heavy_check_mark:                                                | HTTP response content type for this operation                     |
| `errorMessage`                                                    | [shared.ErrorMessage](../../../sdk/models/shared/errormessage.md) | :heavy_minus_sign:                                                | Your API request was not properly authorized.                     |
| `statusCode`                                                      | *number*                                                          | :heavy_check_mark:                                                | HTTP response status code for this operation                      |
| `rawResponse`                                                     | [AxiosResponse](https://axios-http.com/docs/res_schema)           | :heavy_minus_sign:                                                | Raw HTTP response; suitable for custom response parsing           |