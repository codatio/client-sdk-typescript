# DownloadAccountingSupplierAttachmentResponse


## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `contentType`                                              | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `data`                                                     | *Uint8Array*                                               | :heavy_minus_sign:                                         | Success                                                    |
| `errorMessage`                                             | [shared.ErrorMessage](../../models/shared/errormessage.md) | :heavy_minus_sign:                                         | Your API request was not properly authorized.              |
| `statusCode`                                               | *number*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `rawResponse`                                              | [AxiosResponse>](https://axios-http.com/docs/res_schema)   | :heavy_minus_sign:                                         | N/A                                                        |