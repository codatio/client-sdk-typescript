# GetSyncStatusResponse


## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `badRequest`                                            | *any*                                                   | :heavy_minus_sign:                                      | Bad Request                                             |
| `contentType`                                           | *string*                                                | :heavy_check_mark:                                      | N/A                                                     |
| `notFound`                                              | *any*                                                   | :heavy_minus_sign:                                      | Not Found                                               |
| `statusCode`                                            | *number*                                                | :heavy_check_mark:                                      | N/A                                                     |
| `rawResponse`                                           | [AxiosResponse](https://axios-http.com/docs/res_schema) | :heavy_minus_sign:                                      | N/A                                                     |
| `syncStatus`                                            | [shared.SyncStatus](../../models/shared/syncstatus.md)  | :heavy_minus_sign:                                      | Success                                                 |