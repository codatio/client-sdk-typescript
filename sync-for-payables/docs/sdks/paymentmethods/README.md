# PaymentMethods
(*paymentMethods*)

## Overview

Payment methods

### Available Operations

* [get](#get) - Get payment method
* [list](#list) - List payment methods

## get

The *Get payment method* endpoint returns a single payment method for a given `paymentMethodId`.

[Payment methods](https://docs.codat.io/sync-for-payables-api#/schemas/PaymentMethod) are used to pay a Bill. Payment Methods are referenced on [Bill Payments](https://docs.codat.io/sync-for-payables-api#/schemas/BillPayment) and [Payments](https://docs.codat.io/sync-for-payables-api#/schemas/Payment).

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=paymentMethods) for integrations that support getting a specific payment method.

Before using this endpoint, you must have [retrieved data for the company](https://docs.codat.io/sync-for-payables-api#/operations/refresh-company-data).


### Example Usage

```typescript
import { CodatSyncPayables } from "@codat/sync-for-payables";

(async() => {
  const sdk = new CodatSyncPayables({
    security: {
      authHeader: "Basic BASE_64_ENCODED(API_KEY)",
    },
  });

  const res = await sdk.paymentMethods.get({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    paymentMethodId: "string",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.GetPaymentMethodRequest](../../models/operations/getpaymentmethodrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `retries`                                                                                | [utils.RetryConfig](../../models/utils/retryconfig.md)                                   | :heavy_minus_sign:                                                                       | Configuration to override the default retry behavior of the client.                      |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.GetPaymentMethodResponse](../../models/operations/getpaymentmethodresponse.md)>**


## list

The *List payment methods* endpoint returns a list of [payment methods](https://docs.codat.io/sync-for-payables-api#/schemas/PaymentMethod) for a given company's connection.

[Payment methods](https://docs.codat.io/sync-for-payables-api#/schemas/PaymentMethod) are used to pay a Bill. Payment Methods are referenced on [Bill Payments](https://docs.codat.io/sync-for-payables-api#/schemas/BillPayment) and [Payments](https://docs.codat.io/sync-for-payables-api#/schemas/Payment).

Before using this endpoint, you must have [retrieved data for the company](https://docs.codat.io/sync-for-payables-api#/operations/refresh-company-data).
    

### Example Usage

```typescript
import { CodatSyncPayables } from "@codat/sync-for-payables";

(async() => {
  const sdk = new CodatSyncPayables({
    security: {
      authHeader: "Basic BASE_64_ENCODED(API_KEY)",
    },
  });

  const res = await sdk.paymentMethods.list({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    orderBy: "-modifiedDate",
    page: 1,
    pageSize: 100,
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.ListPaymentMethodsRequest](../../models/operations/listpaymentmethodsrequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `retries`                                                                                    | [utils.RetryConfig](../../models/utils/retryconfig.md)                                       | :heavy_minus_sign:                                                                           | Configuration to override the default retry behavior of the client.                          |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.ListPaymentMethodsResponse](../../models/operations/listpaymentmethodsresponse.md)>**

