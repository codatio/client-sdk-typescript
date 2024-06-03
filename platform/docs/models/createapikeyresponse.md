# CreateApiKeyResponse


## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `apiKeyDetails`                                                       | [models.ApiKeyDetails](../models/apikeydetails.md)                    | :heavy_minus_sign:                                                    | Success                                                               |
| `contentType`                                                         | *string*                                                              | :heavy_check_mark:                                                    | HTTP response content type for this operation                         |
| `errorMessage`                                                        | [models.ErrorMessage](../models/errormessage.md)                      | :heavy_minus_sign:                                                    | Bad Request                                                           |
| `statusCode`                                                          | *number*                                                              | :heavy_check_mark:                                                    | HTTP response status code for this operation                          |
| `rawResponse`                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) | :heavy_check_mark:                                                    | Raw HTTP response; suitable for custom response parsing               |