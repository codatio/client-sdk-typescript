# GetJournalEntryResponse


## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                     | *string*                                                                                          | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `journalEntry`                                                                                    | [shared.JournalEntry](../../models/shared/journalentry.md)                                        | :heavy_minus_sign:                                                                                | Success                                                                                           |
| `statusCode`                                                                                      | *number*                                                                                          | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `rawResponse`                                                                                     | [AxiosResponse>](https://axios-http.com/docs/res_schema)                                          | :heavy_minus_sign:                                                                                | N/A                                                                                               |
| `getJournalEntry409ApplicationJSONObject`                                                         | [GetJournalEntry409ApplicationJSON](../../models/operations/getjournalentry409applicationjson.md) | :heavy_minus_sign:                                                                                | The data type's dataset has not been requested or is still syncing.                               |
| `schema`                                                                                          | [shared.Schema](../../models/shared/schema.md)                                                    | :heavy_minus_sign:                                                                                | Your API request was not properly authorized.                                                     |