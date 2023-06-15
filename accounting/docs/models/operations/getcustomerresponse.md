# GetCustomerResponse


## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `contentType`                                                                             | *string*                                                                                  | :heavy_check_mark:                                                                        | N/A                                                                                       |
| `customer`                                                                                | [shared.Customer](../../models/shared/customer.md)                                        | :heavy_minus_sign:                                                                        | Success                                                                                   |
| `statusCode`                                                                              | *number*                                                                                  | :heavy_check_mark:                                                                        | N/A                                                                                       |
| `rawResponse`                                                                             | [AxiosResponse>](https://axios-http.com/docs/res_schema)                                  | :heavy_minus_sign:                                                                        | N/A                                                                                       |
| `getCustomer409ApplicationJSONObject`                                                     | [GetCustomer409ApplicationJSON](../../models/operations/getcustomer409applicationjson.md) | :heavy_minus_sign:                                                                        | The data type's dataset has not been requested or is still syncing.                       |
| `schema`                                                                                  | [shared.Schema](../../models/shared/schema.md)                                            | :heavy_minus_sign:                                                                        | Your API request was not properly authorized.                                             |