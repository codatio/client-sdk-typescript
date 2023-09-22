# GetPaymentMethodResponse


## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `contentType`                                                | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `errorMessage`                                               | [shared.ErrorMessage](../../models/shared/errormessage.md)   | :heavy_minus_sign:                                           | Your API request was not properly authorized.                |
| `paymentMethod`                                              | [shared.PaymentMethod](../../models/shared/paymentmethod.md) | :heavy_minus_sign:                                           | OK                                                           |
| `statusCode`                                                 | *number*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `rawResponse`                                                | [AxiosResponse](https://axios-http.com/docs/res_schema)      | :heavy_minus_sign:                                           | N/A                                                          |