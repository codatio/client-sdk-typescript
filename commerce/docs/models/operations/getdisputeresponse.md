# GetDisputeResponse


## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `contentType`                                                                           | *string*                                                                                | :heavy_check_mark:                                                                      | N/A                                                                                     |
| `dispute`                                                                               | [shared.Dispute](../../models/shared/dispute.md)                                        | :heavy_minus_sign:                                                                      | OK                                                                                      |
| `statusCode`                                                                            | *number*                                                                                | :heavy_check_mark:                                                                      | N/A                                                                                     |
| `rawResponse`                                                                           | [AxiosResponse>](https://axios-http.com/docs/res_schema)                                | :heavy_minus_sign:                                                                      | N/A                                                                                     |
| `getDispute409ApplicationJSONObject`                                                    | [GetDispute409ApplicationJSON](../../models/operations/getdispute409applicationjson.md) | :heavy_minus_sign:                                                                      | The data type's dataset has not been requested or is still syncing.                     |
| `schema`                                                                                | [shared.Schema](../../models/shared/schema.md)                                          | :heavy_minus_sign:                                                                      | Your API request was not properly authorized.                                           |