# ListAccountsResponse


## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `accounts`                                                                                  | [shared.Accounts](../../models/shared/accounts.md)                                          | :heavy_minus_sign:                                                                          | Success                                                                                     |
| `contentType`                                                                               | *string*                                                                                    | :heavy_check_mark:                                                                          | N/A                                                                                         |
| `statusCode`                                                                                | *number*                                                                                    | :heavy_check_mark:                                                                          | N/A                                                                                         |
| `rawResponse`                                                                               | [AxiosResponse>](https://axios-http.com/docs/res_schema)                                    | :heavy_minus_sign:                                                                          | N/A                                                                                         |
| `listAccounts409ApplicationJSONObject`                                                      | [ListAccounts409ApplicationJSON](../../models/operations/listaccounts409applicationjson.md) | :heavy_minus_sign:                                                                          | The data type's dataset has not been requested or is still syncing.                         |
| `schema`                                                                                    | [shared.Schema](../../models/shared/schema.md)                                              | :heavy_minus_sign:                                                                          | Your `query` parameter was not correctly formed                                             |