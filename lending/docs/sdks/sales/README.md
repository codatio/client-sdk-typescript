# sales

## Overview

Retrieve standardized sales data from a linked commerce platform.

### Available Operations

* [getCustomer](#getcustomer) - Get customer
* [getCustomerRetentionMetrics](#getcustomerretentionmetrics) - Get customer retention metrics
* [getDispute](#getdispute) - Get dispute
* [getLifetimeValueMetrics](#getlifetimevaluemetrics) - Get lifetime value metrics
* [getLocation](#getlocation) - Get location
* [getOrder](#getorder) - Get order
* [getOrdersReport](#getordersreport) - Get orders report
* [getPayment](#getpayment) - Get payment
* [getPaymentMethod](#getpaymentmethod) - Get payment method
* [getProduct](#getproduct) - Get product
* [getProductCategory](#getproductcategory) - Get product category
* [getRefundsReport](#getrefundsreport) - Get refunds report
* [getRevenueMetrics](#getrevenuemetrics) - Get commerce revenue metrics
* [getTransaction](#gettransaction) - Get transaction
* [listCustomers](#listcustomers) - List customers
* [listDisputes](#listdisputes) - List disputes
* [listLocations](#listlocations) - List locations
* [listOrders](#listorders) - List orders
* [listPaymentMethods](#listpaymentmethods) - List payment methods
* [listPayments](#listpayments) - List payments
* [listProductCategories](#listproductcategories) - List product categories
* [listProducts](#listproducts) - List products
* [listTransactions](#listtransactions) - List transactions

## getCustomer

The *Get customer* endpoint returns a single customer for a given customerId.

[Customers](https://docs.codat.io/commerce-api#/schemas/Customer) are people or organizations that place orders, make payments and receive goods and/or services from the SMB.

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/commerce?view=tab-by-data-type&dataType=commerce-customers) for integrations that support getting a specific customer.

Before using this endpoint, you must have [retrieved data for the company](https://docs.codat.io/lending-api#/operations/refresh-company-data).


### Example Usage

```typescript
import { CodatLending } from "@codat/lending";
import { GetCommerceCustomerResponse } from "@codat/lending/dist/sdk/models/operations";

const sdk = new CodatLending({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.sales.getCustomer({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  customerId: "accusantium",
}).then((res: GetCommerceCustomerResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.GetCommerceCustomerRequest](../../models/operations/getcommercecustomerrequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `retries`                                                                                      | [utils.RetryConfig](../../models/utils/retryconfig.md)                                         | :heavy_minus_sign:                                                                             | Configuration to override the default retry behavior of the client.                            |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.GetCommerceCustomerResponse](../../models/operations/getcommercecustomerresponse.md)>**


## getCustomerRetentionMetrics

﻿The *Get customer retention metrics* endpoint returns customer retention insights for a specific company's commerce connection over one or more periods of time.

This detail helps you assess a merchant's health and advise them on performance improvement strategies. It also provides you with key insights you need to assess the credit risk of a company. 

#### Customer retention metrics

- __Existing customers__: the number of unique customers that have placed an order(s) in the specified period and any previous period. 
- __New customers__: the number of unique customers that have placed an order(s) in the specified period and none in any previous period.
- __Total customers__: the total number of existing and new customers within the specified period.
- __Retention rate__: the ratio of existing customers within the specified period compared to the total customers at the end of the previous period represented as a percentage.
- __Repeat rate__: the ratio of existing customers to total customers over the specified period represented as a percentage.

Learn more about the formulas used to calculate customer retention metrics [here](/lending/commerce-metrics/overview#what-metrics-are-available).

#### Response structure

The Customer retention report's dimensions and measures are:

| Index                       | Dimensions                 |
|-----------------------------|----------------------------|
| `index` = 0                 | Period                     |
| `index` = 1                 | Customer retention metrics |

| Index                | Measures    |
|----------------------|------------|
| `index` = 0          | Count      |
| `index` = 1          | Percentage |

The report data then combines multiple reporting dimensions and measures and outputs the value of each combination.

### Example Usage

```typescript
import { CodatLending } from "@codat/lending";
import { GetCommerceCustomerRetentionMetricsResponse } from "@codat/lending/dist/sdk/models/operations";
import { PeriodUnit } from "@codat/lending/dist/sdk/models/shared";

const sdk = new CodatLending({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.sales.getCustomerRetentionMetrics({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  includeDisplayNames: false,
  numberOfPeriods: 438601,
  periodLength: 634274,
  periodUnit: PeriodUnit.Year,
  reportDate: "29-09-2020",
}).then((res: GetCommerceCustomerRetentionMetricsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                      | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                      | [operations.GetCommerceCustomerRetentionMetricsRequest](../../models/operations/getcommercecustomerretentionmetricsrequest.md) | :heavy_check_mark:                                                                                                             | The request object to use for the request.                                                                                     |
| `retries`                                                                                                                      | [utils.RetryConfig](../../models/utils/retryconfig.md)                                                                         | :heavy_minus_sign:                                                                                                             | Configuration to override the default retry behavior of the client.                                                            |
| `config`                                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                   | :heavy_minus_sign:                                                                                                             | Available config options for making requests.                                                                                  |


### Response

**Promise<[operations.GetCommerceCustomerRetentionMetricsResponse](../../models/operations/getcommercecustomerretentionmetricsresponse.md)>**


## getDispute

The *Get dispute* endpoint returns a single dispute for a given disputeId.

[Disputes](https://docs.codat.io/commerce-api#/schemas/Dispute) are created when a customer is unsatisfied with their purchase or believe they have been charged incorrectly.

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/commerce?view=tab-by-data-type&dataType=commerce-disputes) for integrations that support getting a specific dispute.

Before using this endpoint, you must have [retrieved data for the company](https://docs.codat.io/lending-api#/operations/refresh-company-data).


### Example Usage

```typescript
import { CodatLending } from "@codat/lending";
import { GetCommerceDisputeResponse } from "@codat/lending/dist/sdk/models/operations";

const sdk = new CodatLending({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.sales.getDispute({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  disputeId: "sapiente",
}).then((res: GetCommerceDisputeResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.GetCommerceDisputeRequest](../../models/operations/getcommercedisputerequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `retries`                                                                                    | [utils.RetryConfig](../../models/utils/retryconfig.md)                                       | :heavy_minus_sign:                                                                           | Configuration to override the default retry behavior of the client.                          |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.GetCommerceDisputeResponse](../../models/operations/getcommercedisputeresponse.md)>**


## getLifetimeValueMetrics

﻿The *Get lifetime value metrics* endpoint returns the average revenue that a specific company will generate throughout its lifespan over one or more periods of time.

This detail helps you assess a merchant's health and advise them on performance improvement strategies. It also provides you with key insights you need to assess the credit risk of a company.

Learn more about the formulas used to calculate the lifetime value metrics [here](/lending/commerce-metrics/overview#what-metrics-are-available).

Refer to the [commerce reporting structure](/lending/commerce-metrics/reporting-structure) page for more detail on commerce reports in Lending.

#### Response structure

The Lifetime value report's dimensions and measures are:

| Index         | Dimensions             |
|---------------|------------------------|
| `index` = 0   | Period                 |
| `index` = 1   | Lifetime value metrics |

| Index             | Measures |
|-------------------|---------|
|   `index` = 1     | Value   |

The report data then combines multiple reporting dimensions and measures and outputs the value of each combination.


### Example Usage

```typescript
import { CodatLending } from "@codat/lending";
import { GetCommerceLifetimeValueMetricsResponse } from "@codat/lending/dist/sdk/models/operations";
import { PeriodUnit } from "@codat/lending/dist/sdk/models/shared";

const sdk = new CodatLending({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.sales.getLifetimeValueMetrics({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  includeDisplayNames: false,
  numberOfPeriods: 102044,
  periodLength: 652790,
  periodUnit: PeriodUnit.Day,
  reportDate: "29-09-2020",
}).then((res: GetCommerceLifetimeValueMetricsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                              | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                              | [operations.GetCommerceLifetimeValueMetricsRequest](../../models/operations/getcommercelifetimevaluemetricsrequest.md) | :heavy_check_mark:                                                                                                     | The request object to use for the request.                                                                             |
| `retries`                                                                                                              | [utils.RetryConfig](../../models/utils/retryconfig.md)                                                                 | :heavy_minus_sign:                                                                                                     | Configuration to override the default retry behavior of the client.                                                    |
| `config`                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                           | :heavy_minus_sign:                                                                                                     | Available config options for making requests.                                                                          |


### Response

**Promise<[operations.GetCommerceLifetimeValueMetricsResponse](../../models/operations/getcommercelifetimevaluemetricsresponse.md)>**


## getLocation

The *Get location* endpoint returns a single location for a given locationId.

[Locations](https://docs.codat.io/commerce-api#/schemas/Location) hold information on the geographic location at which stocks of [products](https://docs.codat.io/commerce-api#/schemas/Product) may be held or where [orders](https://docs.codat.io/commerce-api#/schemas/Order) were placed.

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/commerce?view=tab-by-data-type&dataType=commerce-locations) for integrations that support getting a specific location.

Before using this endpoint, you must have [retrieved data for the company](https://docs.codat.io/lending-api#/operations/refresh-company-data).


### Example Usage

```typescript
import { CodatLending } from "@codat/lending";
import { GetCommerceLocationResponse } from "@codat/lending/dist/sdk/models/operations";

const sdk = new CodatLending({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.sales.getLocation({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  locationId: "culpa",
}).then((res: GetCommerceLocationResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.GetCommerceLocationRequest](../../models/operations/getcommercelocationrequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `retries`                                                                                      | [utils.RetryConfig](../../models/utils/retryconfig.md)                                         | :heavy_minus_sign:                                                                             | Configuration to override the default retry behavior of the client.                            |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.GetCommerceLocationResponse](../../models/operations/getcommercelocationresponse.md)>**


## getOrder

The *Get order* endpoint returns a single order for a given orderId.

[Orders](https://docs.codat.io/commerce-api#/schemas/Order) contain the transaction details for all products sold by the company.

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/commerce?view=tab-by-data-type&dataType=commerce-orders) for integrations that support getting a specific order.

Before using this endpoint, you must have [retrieved data for the company](https://docs.codat.io/lending-api#/operations/refresh-company-data).


### Example Usage

```typescript
import { CodatLending } from "@codat/lending";
import { GetCommerceOrderResponse } from "@codat/lending/dist/sdk/models/operations";

const sdk = new CodatLending({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.sales.getOrder({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  orderId: "consequuntur",
}).then((res: GetCommerceOrderResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.GetCommerceOrderRequest](../../models/operations/getcommerceorderrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `retries`                                                                                | [utils.RetryConfig](../../models/utils/retryconfig.md)                                   | :heavy_minus_sign:                                                                       | Configuration to override the default retry behavior of the client.                      |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.GetCommerceOrderResponse](../../models/operations/getcommerceorderresponse.md)>**


## getOrdersReport

﻿The *Get orders report* endpoint returns the number of orders, total value, and average order value for a specific company's commerce connection over one or more periods of time.

This detail helps you assess a merchant's health and advise them on performance improvement strategies. It also provides you with key insights you need to assess the credit risk of a company. 

Learn more about the formulas used to calculate the order metrics [here](/lending/commerce-metrics/overview#what-metrics-are-available).

Refer to the [commerce reporting structure](/lending/commerce-metrics/reporting-structure) page for more details on commerce reports in Lending.

#### Response structure

The Orders report's dimensions and measures are:

| Index         | Dimensions     |
|---------------|----------------|
|   `index` = 0 | Period         |
|   `index` = 1 | Order metrics  |

| Index         | Measures   |
|---------------|------------|
| `index` = 0   | Count      |
| `index` = 1   | Value      |

The report data then combines multiple reporting dimensions and measures and outputs the value of each combination.


### Example Usage

```typescript
import { CodatLending } from "@codat/lending";
import { GetCommerceOrdersReportResponse } from "@codat/lending/dist/sdk/models/operations";
import { PeriodUnit } from "@codat/lending/dist/sdk/models/shared";

const sdk = new CodatLending({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.sales.getOrdersReport({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  includeDisplayNames: false,
  numberOfPeriods: 995300,
  periodLength: 653108,
  periodUnit: PeriodUnit.Month,
  reportDate: "29-09-2020",
}).then((res: GetCommerceOrdersReportResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `request`                                                                                              | [operations.GetCommerceOrdersReportRequest](../../models/operations/getcommerceordersreportrequest.md) | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `retries`                                                                                              | [utils.RetryConfig](../../models/utils/retryconfig.md)                                                 | :heavy_minus_sign:                                                                                     | Configuration to override the default retry behavior of the client.                                    |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.GetCommerceOrdersReportResponse](../../models/operations/getcommerceordersreportresponse.md)>**


## getPayment

The *Get payment* endpoint returns a single payment for a given paymentId.

[Payments](https://docs.codat.io/commerce-api#/schemas/Payment) contain details of all payments made by customers to the company.

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/commerce?view=tab-by-data-type&dataType=commerce-payments) for integrations that support getting a specific payment.

Before using this endpoint, you must have [retrieved data for the company](https://docs.codat.io/lending-api#/operations/refresh-company-data).


### Example Usage

```typescript
import { CodatLending } from "@codat/lending";
import { GetCommercePaymentResponse } from "@codat/lending/dist/sdk/models/operations";

const sdk = new CodatLending({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.sales.getPayment({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  paymentId: "numquam",
}).then((res: GetCommercePaymentResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.GetCommercePaymentRequest](../../models/operations/getcommercepaymentrequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `retries`                                                                                    | [utils.RetryConfig](../../models/utils/retryconfig.md)                                       | :heavy_minus_sign:                                                                           | Configuration to override the default retry behavior of the client.                          |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.GetCommercePaymentResponse](../../models/operations/getcommercepaymentresponse.md)>**


## getPaymentMethod

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

sdk.sales.getPaymentMethod({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  paymentMethodId: "commodi",
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


## getProduct

The *Get product* endpoint returns a single product for a given productId.

[Products](https://docs.codat.io/commerce-api#/schemas/Product) are items in the company's inventory that are available for sale.

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/commerce?view=tab-by-data-type&dataType=commerce-products) for integrations that support getting a specific product.

Before using this endpoint, you must have [retrieved data for the company](https://docs.codat.io/lending-api#/operations/refresh-company-data).


### Example Usage

```typescript
import { CodatLending } from "@codat/lending";
import { GetCommerceProductResponse } from "@codat/lending/dist/sdk/models/operations";

const sdk = new CodatLending({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.sales.getProduct({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  productId: "quam",
}).then((res: GetCommerceProductResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.GetCommerceProductRequest](../../models/operations/getcommerceproductrequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `retries`                                                                                    | [utils.RetryConfig](../../models/utils/retryconfig.md)                                       | :heavy_minus_sign:                                                                           | Configuration to override the default retry behavior of the client.                          |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.GetCommerceProductResponse](../../models/operations/getcommerceproductresponse.md)>**


## getProductCategory

The *Get product* endpoint returns a single product for a given productId.

[Product categories](https://docs.codat.io/commerce-api#/schemas/ProductCategory) are used to classify a group of products together, either by type (e.g. "Furniture"), or sometimes by tax profile.

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/commerce?view=tab-by-data-type&dataType=commerce-productCategories) for integrations that support getting a specific product.

Before using this endpoint, you must have [retrieved data for the company](https://docs.codat.io/lending-api#/operations/refresh-company-data).


### Example Usage

```typescript
import { CodatLending } from "@codat/lending";
import { GetCommerceProductCategoryResponse } from "@codat/lending/dist/sdk/models/operations";

const sdk = new CodatLending({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.sales.getProductCategory({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  productId: "molestiae",
}).then((res: GetCommerceProductCategoryResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                    | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                    | [operations.GetCommerceProductCategoryRequest](../../models/operations/getcommerceproductcategoryrequest.md) | :heavy_check_mark:                                                                                           | The request object to use for the request.                                                                   |
| `retries`                                                                                                    | [utils.RetryConfig](../../models/utils/retryconfig.md)                                                       | :heavy_minus_sign:                                                                                           | Configuration to override the default retry behavior of the client.                                          |
| `config`                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                 | :heavy_minus_sign:                                                                                           | Available config options for making requests.                                                                |


### Response

**Promise<[operations.GetCommerceProductCategoryResponse](../../models/operations/getcommerceproductcategoryresponse.md)>**


## getRefundsReport

﻿The *Get refunds report* endpoint returns the number and total value of refunds and the refund rate for a specific company's commerce connection over one or more periods of time.

This detail helps you assess a merchant's health and advise them on performance improvement strategies. It also provides you with key insights you need to assess the credit risk of a company. 

Learn more about the formulas used to calculate the refunds metrics [here](/lending/commerce-metrics/overview#what-metrics-are-available).

Refer to the [commerce reporting structure](/lending/commerce-metrics/reporting-structure) page for more details on commerce reports in Lending.

#### Response structure

The Refunds report's dimensions and measures are:

| Index          | Dimensions     |
|----------------|----------------|
| `index` = 0    | Period         |
| `index` = 1    | Refund metrics |

| Index          | Measures    |
|----------------|------------|
| `index` = 0    | Count      |
| `index` = 1    | Value      |
| `index` = 2    | Percentage |

The report data then combines multiple reporting dimensions and measures and outputs the value of each combination.


### Example Usage

```typescript
import { CodatLending } from "@codat/lending";
import { GetCommerceRefundsMetricsResponse } from "@codat/lending/dist/sdk/models/operations";
import { PeriodUnit } from "@codat/lending/dist/sdk/models/shared";

const sdk = new CodatLending({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.sales.getRefundsReport({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  includeDisplayNames: false,
  numberOfPeriods: 244425,
  periodLength: 623510,
  periodUnit: PeriodUnit.Day,
  reportDate: "29-09-2020",
}).then((res: GetCommerceRefundsMetricsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                  | [operations.GetCommerceRefundsMetricsRequest](../../models/operations/getcommercerefundsmetricsrequest.md) | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `retries`                                                                                                  | [utils.RetryConfig](../../models/utils/retryconfig.md)                                                     | :heavy_minus_sign:                                                                                         | Configuration to override the default retry behavior of the client.                                        |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.GetCommerceRefundsMetricsResponse](../../models/operations/getcommercerefundsmetricsresponse.md)>**


## getRevenueMetrics

Get the revenue and revenue growth for a specific company connection, over one or more periods of time.

### Example Usage

```typescript
import { CodatLending } from "@codat/lending";
import { GetCommerceRevenueMetricsResponse } from "@codat/lending/dist/sdk/models/operations";
import { PeriodUnit } from "@codat/lending/dist/sdk/models/shared";

const sdk = new CodatLending({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.sales.getRevenueMetrics({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  includeDisplayNames: false,
  numberOfPeriods: 338007,
  periodLength: 110375,
  periodUnit: PeriodUnit.Month,
  reportDate: "29-09-2020",
}).then((res: GetCommerceRevenueMetricsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                  | [operations.GetCommerceRevenueMetricsRequest](../../models/operations/getcommercerevenuemetricsrequest.md) | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `retries`                                                                                                  | [utils.RetryConfig](../../models/utils/retryconfig.md)                                                     | :heavy_minus_sign:                                                                                         | Configuration to override the default retry behavior of the client.                                        |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.GetCommerceRevenueMetricsResponse](../../models/operations/getcommercerevenuemetricsresponse.md)>**


## getTransaction

The *Get transaction* endpoint returns a single transaction for a given transactionId.

[Transactions](https://docs.codat.io/commerce-api#/schemas/Transaction) detail all financial affairs recorded in the commerce or point of sale system.

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/commerce?view=tab-by-data-type&dataType=commerce-transactions) for integrations that support getting a specific transaction.

Before using this endpoint, you must have [retrieved data for the company](https://docs.codat.io/lending-api#/operations/refresh-company-data).


### Example Usage

```typescript
import { CodatLending } from "@codat/lending";
import { GetCommerceTransactionResponse } from "@codat/lending/dist/sdk/models/operations";

const sdk = new CodatLending({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.sales.getTransaction({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  transactionId: "animi",
}).then((res: GetCommerceTransactionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.GetCommerceTransactionRequest](../../models/operations/getcommercetransactionrequest.md) | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `retries`                                                                                            | [utils.RetryConfig](../../models/utils/retryconfig.md)                                               | :heavy_minus_sign:                                                                                   | Configuration to override the default retry behavior of the client.                                  |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.GetCommerceTransactionResponse](../../models/operations/getcommercetransactionresponse.md)>**


## listCustomers

The *List customers* endpoint returns a list of [customers](https://docs.codat.io/commerce-api#/schemas/Customer) for a given company's connection.

[Customers](https://docs.codat.io/commerce-api#/schemas/Customer) are people or organizations that place orders, make payments and recieve goods and/or services from the SMB.

Before using this endpoint, you must have [retrieved data for the company](https://docs.codat.io/lending-api#/operations/refresh-company-data).
    

### Example Usage

```typescript
import { CodatLending } from "@codat/lending";
import { ListCommerceCustomersResponse } from "@codat/lending/dist/sdk/models/operations";

const sdk = new CodatLending({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.sales.listCustomers({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  orderBy: "-modifiedDate",
  page: 1,
  pageSize: 100,
  query: "enim",
}).then((res: ListCommerceCustomersResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.ListCommerceCustomersRequest](../../models/operations/listcommercecustomersrequest.md) | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `retries`                                                                                          | [utils.RetryConfig](../../models/utils/retryconfig.md)                                             | :heavy_minus_sign:                                                                                 | Configuration to override the default retry behavior of the client.                                |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.ListCommerceCustomersResponse](../../models/operations/listcommercecustomersresponse.md)>**


## listDisputes

The *List disputes* endpoint returns a list of [disputes](https://docs.codat.io/commerce-api#/schemas/Dispute) for a given company's connection.

[Disputes](https://docs.codat.io/commerce-api#/schemas/Dispute) are created when a customer is unsatisfied with their purchase or believe they have been charged incorrectly.

Before using this endpoint, you must have [retrieved data for the company](https://docs.codat.io/lending-api#/operations/refresh-company-data).
    

### Example Usage

```typescript
import { CodatLending } from "@codat/lending";
import { ListCommerceDisputesResponse } from "@codat/lending/dist/sdk/models/operations";

const sdk = new CodatLending({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.sales.listDisputes({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  orderBy: "-modifiedDate",
  page: 1,
  pageSize: 100,
  query: "odit",
}).then((res: ListCommerceDisputesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.ListCommerceDisputesRequest](../../models/operations/listcommercedisputesrequest.md) | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `retries`                                                                                        | [utils.RetryConfig](../../models/utils/retryconfig.md)                                           | :heavy_minus_sign:                                                                               | Configuration to override the default retry behavior of the client.                              |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.ListCommerceDisputesResponse](../../models/operations/listcommercedisputesresponse.md)>**


## listLocations

The *List locations* endpoint returns a list of [locations](https://docs.codat.io/commerce-api#/schemas/Location) for a given company's connection.

[Locations](https://docs.codat.io/commerce-api#/schemas/Location) hold information on the geographic location at which stocks of [products](https://docs.codat.io/commerce-api#/schemas/Product) may be held or where [orders](https://docs.codat.io/commerce-api#/schemas/Order) were placed.

Before using this endpoint, you must have [retrieved data for the company](https://docs.codat.io/lending-api#/operations/refresh-company-data).
    

### Example Usage

```typescript
import { CodatLending } from "@codat/lending";
import { ListCommerceLocationsResponse } from "@codat/lending/dist/sdk/models/operations";

const sdk = new CodatLending({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.sales.listLocations({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
}).then((res: ListCommerceLocationsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.ListCommerceLocationsRequest](../../models/operations/listcommercelocationsrequest.md) | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `retries`                                                                                          | [utils.RetryConfig](../../models/utils/retryconfig.md)                                             | :heavy_minus_sign:                                                                                 | Configuration to override the default retry behavior of the client.                                |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.ListCommerceLocationsResponse](../../models/operations/listcommercelocationsresponse.md)>**


## listOrders

The *List orders* endpoint returns a list of [orders](https://docs.codat.io/commerce-api#/schemas/Order) for a given company's connection.

[Orders](https://docs.codat.io/commerce-api#/schemas/Order) contain the transaction details for all products sold by the company.

Before using this endpoint, you must have [retrieved data for the company](https://docs.codat.io/lending-api#/operations/refresh-company-data).
    

### Example Usage

```typescript
import { CodatLending } from "@codat/lending";
import { ListCommerceOrdersResponse } from "@codat/lending/dist/sdk/models/operations";

const sdk = new CodatLending({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.sales.listOrders({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  orderBy: "-modifiedDate",
  page: 1,
  pageSize: 100,
  query: "quo",
}).then((res: ListCommerceOrdersResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.ListCommerceOrdersRequest](../../models/operations/listcommerceordersrequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `retries`                                                                                    | [utils.RetryConfig](../../models/utils/retryconfig.md)                                       | :heavy_minus_sign:                                                                           | Configuration to override the default retry behavior of the client.                          |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.ListCommerceOrdersResponse](../../models/operations/listcommerceordersresponse.md)>**


## listPaymentMethods

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

sdk.sales.listPaymentMethods({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  orderBy: "-modifiedDate",
  page: 1,
  pageSize: 100,
  query: "sequi",
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


## listPayments

The *List payments* endpoint returns a list of [payments](https://docs.codat.io/commerce-api#/schemas/Payment) for a given company's connection.

[Payments](https://docs.codat.io/commerce-api#/schemas/Payment) contain details of all payments made by customers to the company.

Before using this endpoint, you must have [retrieved data for the company](https://docs.codat.io/lending-api#/operations/refresh-company-data).
    

### Example Usage

```typescript
import { CodatLending } from "@codat/lending";
import { ListCommercePaymentsResponse } from "@codat/lending/dist/sdk/models/operations";

const sdk = new CodatLending({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.sales.listPayments({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  orderBy: "-modifiedDate",
  page: 1,
  pageSize: 100,
  query: "tenetur",
}).then((res: ListCommercePaymentsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.ListCommercePaymentsRequest](../../models/operations/listcommercepaymentsrequest.md) | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `retries`                                                                                        | [utils.RetryConfig](../../models/utils/retryconfig.md)                                           | :heavy_minus_sign:                                                                               | Configuration to override the default retry behavior of the client.                              |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.ListCommercePaymentsResponse](../../models/operations/listcommercepaymentsresponse.md)>**


## listProductCategories

The *List product categories* endpoint returns a list of [product categories](https://docs.codat.io/commerce-api#/schemas/ProductCategory) for a given company's connection.

[Product categories](https://docs.codat.io/commerce-api#/schemas/ProductCategory) are used to classify a group of products together, either by type (e.g. "Furniture"), or sometimes by tax profile.

Before using this endpoint, you must have [retrieved data for the company](https://docs.codat.io/lending-api#/operations/refresh-company-data).
    

### Example Usage

```typescript
import { CodatLending } from "@codat/lending";
import { ListCommerceProductCategoriesResponse } from "@codat/lending/dist/sdk/models/operations";

const sdk = new CodatLending({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.sales.listProductCategories({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  orderBy: "-modifiedDate",
  page: 1,
  pageSize: 100,
  query: "ipsam",
}).then((res: ListCommerceProductCategoriesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                          | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                          | [operations.ListCommerceProductCategoriesRequest](../../models/operations/listcommerceproductcategoriesrequest.md) | :heavy_check_mark:                                                                                                 | The request object to use for the request.                                                                         |
| `retries`                                                                                                          | [utils.RetryConfig](../../models/utils/retryconfig.md)                                                             | :heavy_minus_sign:                                                                                                 | Configuration to override the default retry behavior of the client.                                                |
| `config`                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                       | :heavy_minus_sign:                                                                                                 | Available config options for making requests.                                                                      |


### Response

**Promise<[operations.ListCommerceProductCategoriesResponse](../../models/operations/listcommerceproductcategoriesresponse.md)>**


## listProducts

The *List products* endpoint returns a list of [products](https://docs.codat.io/commerce-api#/schemas/Product) for a given company's connection.

[Products](https://docs.codat.io/commerce-api#/schemas/Product) are items in the company's inventory that are available for sale.

Before using this endpoint, you must have [retrieved data for the company](https://docs.codat.io/lending-api#/operations/refresh-company-data).
    

### Example Usage

```typescript
import { CodatLending } from "@codat/lending";
import { ListCommerceProductsResponse } from "@codat/lending/dist/sdk/models/operations";

const sdk = new CodatLending({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.sales.listProducts({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  orderBy: "-modifiedDate",
  page: 1,
  pageSize: 100,
  query: "id",
}).then((res: ListCommerceProductsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.ListCommerceProductsRequest](../../models/operations/listcommerceproductsrequest.md) | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `retries`                                                                                        | [utils.RetryConfig](../../models/utils/retryconfig.md)                                           | :heavy_minus_sign:                                                                               | Configuration to override the default retry behavior of the client.                              |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.ListCommerceProductsResponse](../../models/operations/listcommerceproductsresponse.md)>**


## listTransactions

The *List transactions* endpoint returns a list of [transactions](https://docs.codat.io/commerce-api#/schemas/Transaction) for a given company's connection.

[Transactions](https://docs.codat.io/commerce-api#/schemas/Transaction) detail all financial affairs recorded in the commerce or point of sale system.

Before using this endpoint, you must have [retrieved data for the company](https://docs.codat.io/lending-api#/operations/refresh-company-data).
    

### Example Usage

```typescript
import { CodatLending } from "@codat/lending";
import { ListCommerceTransactionsResponse } from "@codat/lending/dist/sdk/models/operations";

const sdk = new CodatLending({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.sales.listTransactions({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  orderBy: "-modifiedDate",
  page: 1,
  pageSize: 100,
  query: "possimus",
}).then((res: ListCommerceTransactionsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                | [operations.ListCommerceTransactionsRequest](../../models/operations/listcommercetransactionsrequest.md) | :heavy_check_mark:                                                                                       | The request object to use for the request.                                                               |
| `retries`                                                                                                | [utils.RetryConfig](../../models/utils/retryconfig.md)                                                   | :heavy_minus_sign:                                                                                       | Configuration to override the default retry behavior of the client.                                      |
| `config`                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                             | :heavy_minus_sign:                                                                                       | Available config options for making requests.                                                            |


### Response

**Promise<[operations.ListCommerceTransactionsResponse](../../models/operations/listcommercetransactionsresponse.md)>**

