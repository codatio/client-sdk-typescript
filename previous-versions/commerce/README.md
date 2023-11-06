# Commerce

<!-- Start Codat Library Description -->
﻿Codat's Commerce API enables you to pull up-date-date commerce data from several leading payments, point-of-sale, and eCommerce systems.
You can view your SMB customers' products, orders, payments, payouts, disputes, and more - all standardized to our Commerce data model.

<!-- End Codat Library Description -->


<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add @codat/commerce
```

### Yarn

```bash
yarn add @codat/commerce
```
<!-- End SDK Installation -->

## Example Usage
<!-- Start SDK Example Usage -->
```typescript
import { CodatCommerce } from "@codat/commerce";

(async () => {
    const sdk = new CodatCommerce({
        security: {
            authHeader: "Basic BASE_64_ENCODED(API_KEY)",
        },
    });

    const res = await sdk.companyInfo.get({
        companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
        connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
    });

    if (res.statusCode == 200) {
        // handle response
    }
})();

```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [companyInfo](docs/sdks/companyinfo/README.md)

* [get](docs/sdks/companyinfo/README.md#get) - Get company info

### [customers](docs/sdks/customers/README.md)

* [get](docs/sdks/customers/README.md#get) - Get customer
* [list](docs/sdks/customers/README.md#list) - List customers

### [disputes](docs/sdks/disputes/README.md)

* [get](docs/sdks/disputes/README.md#get) - Get dispute
* [list](docs/sdks/disputes/README.md#list) - List disputes

### [locations](docs/sdks/locations/README.md)

* [get](docs/sdks/locations/README.md#get) - Get location
* [list](docs/sdks/locations/README.md#list) - List locations

### [orders](docs/sdks/orders/README.md)

* [get](docs/sdks/orders/README.md#get) - Get order
* [list](docs/sdks/orders/README.md#list) - List orders

### [payments](docs/sdks/payments/README.md)

* [get](docs/sdks/payments/README.md#get) - Get payment
* [getMethod](docs/sdks/payments/README.md#getmethod) - Get payment method
* [list](docs/sdks/payments/README.md#list) - List payments
* [listMethods](docs/sdks/payments/README.md#listmethods) - List payment methods

### [products](docs/sdks/products/README.md)

* [get](docs/sdks/products/README.md#get) - Get product
* [getCategory](docs/sdks/products/README.md#getcategory) - Get product category
* [list](docs/sdks/products/README.md#list) - List products
* [listCategories](docs/sdks/products/README.md#listcategories) - List product categories

### [taxComponents](docs/sdks/taxcomponents/README.md)

* [get](docs/sdks/taxcomponents/README.md#get) - Get tax component
* [list](docs/sdks/taxcomponents/README.md#list) - List tax components

### [transactions](docs/sdks/transactions/README.md)

* [get](docs/sdks/transactions/README.md#get) - Get transaction
* [list](docs/sdks/transactions/README.md#list) - List transactions
<!-- End SDK Available Operations -->



<!-- Start Dev Containers -->

<!-- End Dev Containers -->



<!-- Start Error Handling -->
# Error Handling

Handling errors in your SDK should largely match your expectations.  All operations return a response object or throw an error.  If Error objects are specified in your OpenAPI Spec, the SDK will throw the appropriate Error type.


<!-- End Error Handling -->



<!-- Start Server Selection -->
# Server Selection

## Select Server by Index

You can override the default server globally by passing a server index to the `serverIdx: number` optional parameter when initializing the SDK client instance. The selected server will then be used as the default on the operations that use it. This table lists the indexes associated with the available servers:

| # | Server | Variables |
| - | ------ | --------- |
| 0 | `https://api.codat.io` | None |

For example:


```typescript
import { CodatCommerce } from "@codat/commerce";

(async () => {
    const sdk = new CodatCommerce({
        security: {
            authHeader: "Basic BASE_64_ENCODED(API_KEY)",
        },
        serverIdx: 0,
    });

    const res = await sdk.companyInfo.get({
        companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
        connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
    });

    if (res.statusCode == 200) {
        // handle response
    }
})();

```


## Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL: str` optional parameter when initializing the SDK client instance. For example:


```typescript
import { CodatCommerce } from "@codat/commerce";

(async () => {
    const sdk = new CodatCommerce({
        security: {
            authHeader: "Basic BASE_64_ENCODED(API_KEY)",
        },
        serverURL: "https://api.codat.io",
    });

    const res = await sdk.companyInfo.get({
        companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
        connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
    });

    if (res.statusCode == 200) {
        // handle response
    }
})();

```
<!-- End Server Selection -->



<!-- Start Custom HTTP Client -->
# Custom HTTP Client

The Typescript SDK makes API calls using the (axios)[https://axios-http.com/docs/intro] HTTP library.  In order to provide a convenient way to configure timeouts, cookies, proxies, custom headers, and other low-level configuration, you can initialize the SDK client with a custom `AxiosInstance` object.


For example, you could specify a header for every request that your sdk makes as follows:

```typescript
from @codat/commerce import CodatCommerce;
import axios;

const httpClient = axios.create({
    headers: {'x-custom-header': 'someValue'}
})


const sdk = new CodatCommerce({defaultClient: httpClient});
```


<!-- End Custom HTTP Client -->

<!-- Placeholder for Future Speakeasy SDK Sections -->


### Library generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)