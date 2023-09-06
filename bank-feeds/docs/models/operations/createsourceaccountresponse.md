# CreateSourceAccountResponse


## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `contentType`                                                | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `errorMessage`                                               | [shared.ErrorMessage](../../models/shared/errormessage.md)   | :heavy_minus_sign:                                           | The request made is not valid.                               |
| `sourceAccount`                                              | [shared.SourceAccount](../../models/shared/sourceaccount.md) | :heavy_minus_sign:                                           | Success                                                      |
| `statusCode`                                                 | *number*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `rawResponse`                                                | [AxiosResponse>](https://axios-http.com/docs/res_schema)     | :heavy_minus_sign:                                           | N/A                                                          |