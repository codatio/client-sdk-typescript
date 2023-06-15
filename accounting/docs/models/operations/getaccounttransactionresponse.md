# GetAccountTransactionResponse


## Fields

| Field                                                                                                         | Type                                                                                                          | Required                                                                                                      | Description                                                                                                   |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `accountTransaction`                                                                                          | [shared.AccountTransaction](../../models/shared/accounttransaction.md)                                        | :heavy_minus_sign:                                                                                            | Success                                                                                                       |
| `contentType`                                                                                                 | *string*                                                                                                      | :heavy_check_mark:                                                                                            | N/A                                                                                                           |
| `statusCode`                                                                                                  | *number*                                                                                                      | :heavy_check_mark:                                                                                            | N/A                                                                                                           |
| `rawResponse`                                                                                                 | [AxiosResponse>](https://axios-http.com/docs/res_schema)                                                      | :heavy_minus_sign:                                                                                            | N/A                                                                                                           |
| `getAccountTransaction409ApplicationJSONObject`                                                               | [GetAccountTransaction409ApplicationJSON](../../models/operations/getaccounttransaction409applicationjson.md) | :heavy_minus_sign:                                                                                            | The data type's dataset has not been requested or is still syncing.                                           |
| `schema`                                                                                                      | [shared.Schema](../../models/shared/schema.md)                                                                | :heavy_minus_sign:                                                                                            | Your API request was not properly authorized.                                                                 |