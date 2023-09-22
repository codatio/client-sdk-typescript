# InitiateSyncResponse


## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `contentType`                                                | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `errorMessage`                                               | [shared.ErrorMessage](../../models/shared/errormessage.md)   | :heavy_minus_sign:                                           | If model is incorrect                                        |
| `statusCode`                                                 | *number*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `rawResponse`                                                | [AxiosResponse](https://axios-http.com/docs/res_schema)      | :heavy_minus_sign:                                           | N/A                                                          |
| `syncInitiated`                                              | [shared.SyncInitiated](../../models/shared/syncinitiated.md) | :heavy_minus_sign:                                           | Returns the newly created SyncId                             |