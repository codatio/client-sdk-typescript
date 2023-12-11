# Assess

<!-- Start Codat Library Description -->
﻿Assess helps you make smarter credit decisions on small businesses by enabling you to pull your customers' latest data from the operating systems they are already using.
You can use that data for automating decisioning and surfacing new insights on the customer, all via one API.
<!-- End Codat Library Description -->

<!-- Start SDK Installation [installation] -->
## SDK Installation

### NPM

```bash
npm add @codat/assess
```

### Yarn

```bash
yarn add @codat/assess
```
<!-- End SDK Installation [installation] -->

## Example Usage
<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

```typescript
import { CodatAssess } from "@codat/assess";
import { SourceType } from "@codat/assess/dist/sdk/models/operations";

async function run() {
    const sdk = new CodatAssess({
        security: {
            authHeader: "Basic BASE_64_ENCODED(API_KEY)",
        },
    });

    const res = await sdk.reports.generateLoanSummary({
        companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
        sourceType: SourceType.Accounting,
    });

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```
<!-- End SDK Example Usage [usage] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

### [reports](docs/sdks/reports/README.md)

* [generateLoanSummary](docs/sdks/reports/README.md#generateloansummary) - Generate loan summaries report
* [generateLoanTransactions](docs/sdks/reports/README.md#generateloantransactions) - Generate loan transactions report
* [getAccountsForEnhancedBalanceSheet](docs/sdks/reports/README.md#getaccountsforenhancedbalancesheet) - Get enhanced balance sheet accounts
* [getAccountsForEnhancedProfitAndLoss](docs/sdks/reports/README.md#getaccountsforenhancedprofitandloss) - Get enhanced profit and loss accounts
* [getCommerceCustomerRetentionMetrics](docs/sdks/reports/README.md#getcommercecustomerretentionmetrics) - Get customer retention metrics
* [getCommerceLifetimeValueMetrics](docs/sdks/reports/README.md#getcommercelifetimevaluemetrics) - Get lifetime value metric
* [getCommerceOrdersMetrics](docs/sdks/reports/README.md#getcommerceordersmetrics) - Get orders report
* [getCommerceRefundsMetrics](docs/sdks/reports/README.md#getcommercerefundsmetrics) - Get refunds report
* [getCommerceRevenueMetrics](docs/sdks/reports/README.md#getcommercerevenuemetrics) - Get commerce revenue metrics
* [getEnhancedCashFlowTransactions](docs/sdks/reports/README.md#getenhancedcashflowtransactions) - Get enhanced cash flow report
* [getEnhancedInvoicesReport](docs/sdks/reports/README.md#getenhancedinvoicesreport) - Get enhanced invoices report
* [getLoanSummary](docs/sdks/reports/README.md#getloansummary) - Get loan summaries
* [getRecurringRevenueMetrics](docs/sdks/reports/README.md#getrecurringrevenuemetrics) - Get key subscription revenue metrics
* [listLoanTransactions](docs/sdks/reports/README.md#listloantransactions) - List loan transactions
* [requestRecurringRevenueMetrics](docs/sdks/reports/README.md#requestrecurringrevenuemetrics) - Generate key subscription revenue metrics

### [dataIntegrity](docs/sdks/dataintegrity/README.md)

* [details](docs/sdks/dataintegrity/README.md#details) - List data type data integrity
* [status](docs/sdks/dataintegrity/README.md#status) - Get data integrity status
* [summary](docs/sdks/dataintegrity/README.md#summary) - Get data integrity summary

### [excelReports](docs/sdks/excelreports/README.md)

* [generateExcelReport](docs/sdks/excelreports/README.md#generateexcelreport) - Generate Excel report
* [getAccountingMarketingMetrics](docs/sdks/excelreports/README.md#getaccountingmarketingmetrics) - Get marketing metrics report
* [getExcelReport](docs/sdks/excelreports/README.md#getexcelreport) - Download Excel report
* [getExcelReportGenerationStatus](docs/sdks/excelreports/README.md#getexcelreportgenerationstatus) - Get Excel report status
<!-- End Available Resources and Operations [operations] -->



<!-- Start Retries [retries] -->
## Retries

Some of the endpoints in this SDK support retries.  If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API.  However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
```typescript
import { CodatAssess } from "@codat/assess";
import { SourceType } from "@codat/assess/dist/sdk/models/operations";

async function run() {
    const sdk = new CodatAssess({
        security: {
            authHeader: "Basic BASE_64_ENCODED(API_KEY)",
        },
    });

    const res = await sdk.reports.generateLoanSummary(
        {
            companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
            sourceType: SourceType.Accounting,
        },
        {
            strategy: "backoff",
            backoff: {
                initialInterval: 1,
                maxInterval: 50,
                exponent: 1.1,
                maxElapsedTime: 100,
            },
            retryConnectionErrors: false,
        }
    );

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```

If you'd like to override the default retry strategy for all operations that support retries, you can provide a retryConfig at SDK initialization:
```typescript
import { CodatAssess } from "@codat/assess";
import { SourceType } from "@codat/assess/dist/sdk/models/operations";

async function run() {
    const sdk = new CodatAssess({
        retry_config: {
            strategy: "backoff",
            backoff: {
                initialInterval: 1,
                maxInterval: 50,
                exponent: 1.1,
                maxElapsedTime: 100,
            },
            retryConnectionErrors: false,
        },
        security: {
            authHeader: "Basic BASE_64_ENCODED(API_KEY)",
        },
    });

    const res = await sdk.reports.generateLoanSummary({
        companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
        sourceType: SourceType.Accounting,
    });

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```
<!-- End Retries [retries] -->

<!-- Start Error Handling [errors] -->
## Error Handling

Handling errors in this SDK should largely match your expectations.  All operations return a response object or throw an error.  If Error objects are specified in your OpenAPI Spec, the SDK will throw the appropriate Error type.

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

Example

```typescript
import { CodatAssess } from "@codat/assess";
import { SourceType } from "@codat/assess/dist/sdk/models/operations";

async function run() {
    const sdk = new CodatAssess({
        security: {
            authHeader: "Basic BASE_64_ENCODED(API_KEY)",
        },
    });

    let res;
    try {
        res = await sdk.reports.generateLoanSummary({
            companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
            sourceType: SourceType.Accounting,
        });
    } catch (err) {
        if (err instanceof errors.SDKError) {
            console.error(err); // handle exception
            throw err;
        }
    }

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Select Server by Index

You can override the default server globally by passing a server index to the `serverIdx: number` optional parameter when initializing the SDK client instance. The selected server will then be used as the default on the operations that use it. This table lists the indexes associated with the available servers:

| # | Server | Variables |
| - | ------ | --------- |
| 0 | `https://api.codat.io` | None |

#### Example

```typescript
import { CodatAssess } from "@codat/assess";
import { SourceType } from "@codat/assess/dist/sdk/models/operations";

async function run() {
    const sdk = new CodatAssess({
        serverIdx: 0,
        security: {
            authHeader: "Basic BASE_64_ENCODED(API_KEY)",
        },
    });

    const res = await sdk.reports.generateLoanSummary({
        companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
        sourceType: SourceType.Accounting,
    });

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```


### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL: str` optional parameter when initializing the SDK client instance. For example:
```typescript
import { CodatAssess } from "@codat/assess";
import { SourceType } from "@codat/assess/dist/sdk/models/operations";

async function run() {
    const sdk = new CodatAssess({
        serverURL: "https://api.codat.io",
        security: {
            authHeader: "Basic BASE_64_ENCODED(API_KEY)",
        },
    });

    const res = await sdk.reports.generateLoanSummary({
        companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
        sourceType: SourceType.Accounting,
    });

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```
<!-- End Server Selection [server] -->

<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The Typescript SDK makes API calls using the [axios](https://axios-http.com/docs/intro) HTTP library.  In order to provide a convenient way to configure timeouts, cookies, proxies, custom headers, and other low-level configuration, you can initialize the SDK client with a custom `AxiosInstance` object.

For example, you could specify a header for every request that your sdk makes as follows:

```typescript
import { @codat/assess } from "CodatAssess";
import axios from "axios";

const httpClient = axios.create({
    headers: {'x-custom-header': 'someValue'}
})

const sdk = new CodatAssess({defaultClient: httpClient});
```
<!-- End Custom HTTP Client [http-client] -->

<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security scheme globally:

| Name         | Type         | Scheme       |
| ------------ | ------------ | ------------ |
| `authHeader` | apiKey       | API key      |

You can set the security parameters through the `security` optional parameter when initializing the SDK client instance. For example:
```typescript
import { CodatAssess } from "@codat/assess";
import { SourceType } from "@codat/assess/dist/sdk/models/operations";

async function run() {
    const sdk = new CodatAssess({
        security: {
            authHeader: "Basic BASE_64_ENCODED(API_KEY)",
        },
    });

    const res = await sdk.reports.generateLoanSummary({
        companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
        sourceType: SourceType.Accounting,
    });

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```
<!-- End Authentication [security] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->

<!-- Start Codat Support Notes -->
### Support

If you encounter any challenges while utilizing our SDKs, please don't hesitate to reach out for assistance. 
You can raise any issues by contacting your dedicated Codat representative or reaching out to our [support team](mailto:support@codat.io).
We're here to help ensure a smooth experience for you.
<!-- End Codat Support Notes -->

<!-- Start Codat Generated By -->
### Library generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
<!-- End Codat Generated By -->