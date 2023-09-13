# salesPaymentMethods

### Available Operations

* [get](#get) - Get payment method
* [list](#list) - List payment methods

## get

The *Get payment method* endpoint returns a single payment method for a given paymentMethodId.

[Payment methods](https://docs.codat.io/commerce-api#/schemas/PaymentMethod) represent the payment method(s) used to make payments.

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/commerce?view=tab-by-data-type&dataType=commerce-paymentMethods) for integrations that support getting a specific payment method.

Before using this endpoint, you must have [retrieved data for the company](https://docs.codat.io/lending-api#/operations/refresh-company-data).


### Example Usage

```typescript
import { CodatLending } from "@codat/lending";
import { GetCommercePaymentMethodResponse } from "@codat/lending/dist/sdk/models/operations";

const sdk = new CodatLending({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.salesPaymentMethods.get({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  paymentMethodId: "velit",
}).then((res: GetCommercePaymentMethodResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                | [operations.GetCommercePaymentMethodRequest](../../models/operations/getcommercepaymentmethodrequest.md) | :heavy_check_mark:                                                                                       | The request object to use for the request.                                                               |
| `retries`                                                                                                | [utils.RetryConfig](../../models/utils/retryconfig.md)                                                   | :heavy_minus_sign:                                                                                       | Configuration to override the default retry behavior of the client.                                      |
| `config`                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                             | :heavy_minus_sign:                                                                                       | Available config options for making requests.                                                            |


### Response

**Promise<[operations.GetCommercePaymentMethodResponse](../../models/operations/getcommercepaymentmethodresponse.md)>**


## list

The *List payment methods* endpoint returns a list of [payment methods](https://docs.codat.io/commerce-api#/schemas/PaymentMethod) for a given company's connection.

[Payment methods](https://docs.codat.io/commerce-api#/schemas/PaymentMethod) represent the payment method(s) used to make payments.

Before using this endpoint, you must have [retrieved data for the company](https://docs.codat.io/lending-api#/operations/refresh-company-data).
    

### Example Usage

```typescript
import { CodatLending } from "@codat/lending";
import { ListCommercePaymentMethodsResponse } from "@codat/lending/dist/sdk/models/operations";

const sdk = new CodatLending({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.salesPaymentMethods.list({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  orderBy: "-modifiedDate",
  page: 1,
  pageSize: 100,
  query: "error",
}).then((res: ListCommercePaymentMethodsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                    | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                    | [operations.ListCommercePaymentMethodsRequest](../../models/operations/listcommercepaymentmethodsrequest.md) | :heavy_check_mark:                                                                                           | The request object to use for the request.                                                                   |
| `retries`                                                                                                    | [utils.RetryConfig](../../models/utils/retryconfig.md)                                                       | :heavy_minus_sign:                                                                                           | Configuration to override the default retry behavior of the client.                                          |
| `config`                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                 | :heavy_minus_sign:                                                                                           | Available config options for making requests.                                                                |


### Response

**Promise<[operations.ListCommercePaymentMethodsResponse](../../models/operations/listcommercepaymentmethodsresponse.md)>**

