# salesReports

### Available Operations

* [getOrders](#getorders) - Get orders report
* [getRefunds](#getrefunds) - Get refunds report

## getOrders

The *Get orders report* endpoint returns the number of orders, total value, and average order value for a specific company's commerce connection over one or more periods of time.

This detail helps you assess a merchant's health and advise them on performance improvement strategies. It also provides you with key insights you need to assess the credit risk of a company. 

Learn more about the formulas used to calculate the order metrics [here](https://docs.codat.io/lending/commerce-metrics/overview#what-metrics-are-available).

Refer to the [commerce reporting structure](https://docs.codat.io/lending/commerce-metrics/reporting-structure) page for more details on commerce reports in Lending.

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

sdk.salesReports.getOrders({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  includeDisplayNames: false,
  numberOfPeriods: 138183,
  periodLength: 778346,
  periodUnit: PeriodUnit.Day,
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


## getRefunds

The *Get refunds report* endpoint returns the number and total value of refunds and the refund rate for a specific company's commerce connection over one or more periods of time.

This detail helps you assess a merchant's health and advise them on performance improvement strategies. It also provides you with key insights you need to assess the credit risk of a company. 

Learn more about the formulas used to calculate the refunds metrics [here](https://docs.codat.io/lending/commerce-metrics/overview#what-metrics-are-available).

Refer to the [commerce reporting structure](https://docs.codat.io/lending/commerce-metrics/reporting-structure) page for more details on commerce reports in Lending.

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
import { GetCommerceRefundsReportResponse } from "@codat/lending/dist/sdk/models/operations";
import { PeriodUnit } from "@codat/lending/dist/sdk/models/shared";

const sdk = new CodatLending({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.salesReports.getRefunds({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  includeDisplayNames: false,
  numberOfPeriods: 949572,
  periodLength: 368725,
  periodUnit: PeriodUnit.Month,
  reportDate: "29-09-2020",
}).then((res: GetCommerceRefundsReportResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                | [operations.GetCommerceRefundsReportRequest](../../models/operations/getcommercerefundsreportrequest.md) | :heavy_check_mark:                                                                                       | The request object to use for the request.                                                               |
| `retries`                                                                                                | [utils.RetryConfig](../../models/utils/retryconfig.md)                                                   | :heavy_minus_sign:                                                                                       | Configuration to override the default retry behavior of the client.                                      |
| `config`                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                             | :heavy_minus_sign:                                                                                       | Available config options for making requests.                                                            |


### Response

**Promise<[operations.GetCommerceRefundsReportResponse](../../models/operations/getcommercerefundsreportresponse.md)>**
