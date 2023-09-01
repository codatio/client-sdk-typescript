# BankFeedAccountMappingResponse

The result from POSTing a Bank Account mapping.


## Fields

| Field                                  | Type                                   | Required                               | Description                            |
| -------------------------------------- | -------------------------------------- | -------------------------------------- | -------------------------------------- |
| `error`                                | *string*                               | :heavy_minus_sign:                     | Error returned during the post request |
| `status`                               | *string*                               | :heavy_minus_sign:                     | Status of the POST request.            |
| `sourceAccountId`                      | *string*                               | :heavy_minus_sign:                     | Unique ID for the source account.      |
| `targetAccountId`                      | *string*                               | :heavy_minus_sign:                     | Unique ID for the target account.      |