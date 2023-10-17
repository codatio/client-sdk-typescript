# GetSyncStatusResponse


## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `badRequest`                                            | *any*                                                   | :heavy_minus_sign:                                      | Bad Request                                             |
| `contentType`                                           | *string*                                                | :heavy_check_mark:                                      | HTTP response content type for this operation           |
| `notFound`                                              | *any*                                                   | :heavy_minus_sign:                                      | Not Found                                               |
| `statusCode`                                            | *number*                                                | :heavy_check_mark:                                      | HTTP response status code for this operation            |
| `rawResponse`                                           | [AxiosResponse](https://axios-http.com/docs/res_schema) | :heavy_minus_sign:                                      | Raw HTTP response; suitable for custom response parsing |
| `syncStatus`                                            | [shared.SyncStatus](../../models/shared/syncstatus.md)  | :heavy_minus_sign:                                      | Success                                                 |