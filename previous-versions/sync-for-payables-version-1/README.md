# Sync for Payables

<!-- Start Codat Library Description -->
Streamline your customers' accounts payable workflow.
<!-- End Codat Library Description -->

<!-- Start Summary [summary] -->
## Summary

Sync for Payables: The API for Sync for Payables. 

Sync for Payables is an API and a set of supporting tools built to help integrate with your customers' accounting software, and keep their supplier information, invoices, and payments in sync.

[Explore product](https://docs.codat.io/payables/overview) | [See OpenAPI spec](https://github.com/codatio/oas)

---
<!-- Start Codat Tags Table -->
## Endpoints

| Endpoints | Description |
| :- |:- |
| Companies | Create and manage your SMB users' companies. |
| Connections | Create new and manage existing data connections for a company. |
| Accounts | Get, create, and update Accounts. |
| Bank accounts | Get, create, and update Bank accounts. |
| Bills | Get, create, and update Bills. |
| Bill credit notes | Get, create, and update Bill credit notes. |
| Bill payments | Get, create, and update Bill payments. |
| Journals | Get, create, and update Journals. |
| Journal entries | Get, create, and update Journal entries. |
| Payment methods | Get, create, and update Payment methods. |
| Suppliers | Get, create, and update Suppliers. |
| Tax rates | Get, create, and update Tax rates. |
| Tracking categories | Get, create, and update Tracking categories. |
| Company info | View company profile from the source platform. |
| Push operations | View historic push operations. |
| Manage data | Control how data is retrieved from an integration. |
<!-- End Codat Tags Table -->
<!-- End Summary [summary] -->

<!-- Start Table of Contents [toc] -->
## Table of Contents

* [SDK Installation](#sdk-installation)
* [Requirements](#requirements)
* [SDK Example Usage](#sdk-example-usage)
* [Available Resources and Operations](#available-resources-and-operations)
* [Standalone functions](#standalone-functions)
* [File uploads](#file-uploads)
* [Retries](#retries)
* [Error Handling](#error-handling)
* [Server Selection](#server-selection)
* [Custom HTTP Client](#custom-http-client)
* [Authentication](#authentication)
* [Debugging](#debugging)
<!-- End Table of Contents [toc] -->

<!-- Start SDK Installation [installation] -->
## SDK Installation

The SDK can be installed with either [npm](https://www.npmjs.com/), [pnpm](https://pnpm.io/), [bun](https://bun.sh/) or [yarn](https://classic.yarnpkg.com/en/) package managers.

### NPM

```bash
npm add @codat/sync-for-payables-version-1
```

### PNPM

```bash
pnpm add @codat/sync-for-payables-version-1
```

### Bun

```bash
bun add @codat/sync-for-payables-version-1
```

### Yarn

```bash
yarn add @codat/sync-for-payables-version-1 zod

# Note that Yarn does not install peer dependencies automatically. You will need
# to install zod as shown above.
```
<!-- End SDK Installation [installation] -->

## Example Usage
<!-- Start Requirements [requirements] -->
## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](RUNTIMES.md).
<!-- End Requirements [requirements] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

```typescript
import { CodatSyncPayables } from "@codat/sync-for-payables-version-1";

const codatSyncPayables = new CodatSyncPayables({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatSyncPayables.companies.list({
    page: 1,
    pageSize: 100,
    query: "id=e3334455-1aed-4e71-ab43-6bccf12092ee",
    orderBy: "-modifiedDate",
  });

  // Handle the result
  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

<details open>
<summary>Available methods</summary>

### [accounts](docs/sdks/accounts/README.md)

* [list](docs/sdks/accounts/README.md#list) - List accounts
* [get](docs/sdks/accounts/README.md#get) - Get account
* [getCreateModel](docs/sdks/accounts/README.md#getcreatemodel) - Get create account model
* [create](docs/sdks/accounts/README.md#create) - Create account

### [bankAccounts](docs/sdks/bankaccounts/README.md)

* [getCreateModel](docs/sdks/bankaccounts/README.md#getcreatemodel) - Get create/update bank account model
* [create](docs/sdks/bankaccounts/README.md#create) - Create bank account

### [billCreditNotes](docs/sdks/billcreditnotes/README.md)

* [list](docs/sdks/billcreditnotes/README.md#list) - List bill credit notes
* [get](docs/sdks/billcreditnotes/README.md#get) - Get bill credit note
* [getCreateUpdateModel](docs/sdks/billcreditnotes/README.md#getcreateupdatemodel) - Get create/update bill credit note model
* [create](docs/sdks/billcreditnotes/README.md#create) - Create bill credit note
* [update](docs/sdks/billcreditnotes/README.md#update) - Update bill credit note

### [billPayments](docs/sdks/billpayments/README.md)

* [list](docs/sdks/billpayments/README.md#list) - List bill payments
* [get](docs/sdks/billpayments/README.md#get) - Get bill payment
* [delete](docs/sdks/billpayments/README.md#delete) - Delete bill payment
* [getCreateModel](docs/sdks/billpayments/README.md#getcreatemodel) - Get create bill payment model
* [create](docs/sdks/billpayments/README.md#create) - Create bill payments

### [bills](docs/sdks/bills/README.md)

* [list](docs/sdks/bills/README.md#list) - List bills
* [get](docs/sdks/bills/README.md#get) - Get bill
* [getCreateUpdateModel](docs/sdks/bills/README.md#getcreateupdatemodel) - Get create/update bill model
* [create](docs/sdks/bills/README.md#create) - Create bill
* [update](docs/sdks/bills/README.md#update) - Update bill
* [delete](docs/sdks/bills/README.md#delete) - Delete bill
* [listAttachments](docs/sdks/bills/README.md#listattachments) - List bill attachments
* [getAttachment](docs/sdks/bills/README.md#getattachment) - Get bill attachment
* [deleteAttachment](docs/sdks/bills/README.md#deleteattachment) - Delete bill attachment
* [downloadAttachment](docs/sdks/bills/README.md#downloadattachment) - Download bill attachment
* [uploadAttachment](docs/sdks/bills/README.md#uploadattachment) - Upload bill attachment


### [companies](docs/sdks/companies/README.md)

* [list](docs/sdks/companies/README.md#list) - List companies
* [create](docs/sdks/companies/README.md#create) - Create company
* [update](docs/sdks/companies/README.md#update) - Update company
* [delete](docs/sdks/companies/README.md#delete) - Delete a company
* [get](docs/sdks/companies/README.md#get) - Get company

### [companyInfo](docs/sdks/companyinfo/README.md)

* [getAccountingProfile](docs/sdks/companyinfo/README.md#getaccountingprofile) - Get company accounting profile

### [connections](docs/sdks/connections/README.md)

* [list](docs/sdks/connections/README.md#list) - List connections
* [create](docs/sdks/connections/README.md#create) - Create connection
* [get](docs/sdks/connections/README.md#get) - Get connection
* [delete](docs/sdks/connections/README.md#delete) - Delete connection
* [unlink](docs/sdks/connections/README.md#unlink) - Unlink connection

### [journalEntries](docs/sdks/journalentries/README.md)

* [getCreateModel](docs/sdks/journalentries/README.md#getcreatemodel) - Get create journal entry model
* [create](docs/sdks/journalentries/README.md#create) - Create journal entry

### [journals](docs/sdks/journals/README.md)

* [list](docs/sdks/journals/README.md#list) - List journals
* [get](docs/sdks/journals/README.md#get) - Get journal
* [getCreateModel](docs/sdks/journals/README.md#getcreatemodel) - Get create journal model
* [create](docs/sdks/journals/README.md#create) - Create journal

### [manageData](docs/sdks/managedata/README.md)

* [refreshAllDataTypes](docs/sdks/managedata/README.md#refreshalldatatypes) - Refresh all data
* [get](docs/sdks/managedata/README.md#get) - Get data status
* [refreshDataType](docs/sdks/managedata/README.md#refreshdatatype) - Refresh data type
* [listPullOperations](docs/sdks/managedata/README.md#listpulloperations) - List pull operations
* [getPullOperation](docs/sdks/managedata/README.md#getpulloperation) - Get pull operation

### [paymentMethods](docs/sdks/paymentmethods/README.md)

* [list](docs/sdks/paymentmethods/README.md#list) - List payment methods
* [get](docs/sdks/paymentmethods/README.md#get) - Get payment method

### [pushOperations](docs/sdks/pushoperations/README.md)

* [list](docs/sdks/pushoperations/README.md#list) - List push operations
* [get](docs/sdks/pushoperations/README.md#get) - Get push operation

### [suppliers](docs/sdks/suppliers/README.md)

* [list](docs/sdks/suppliers/README.md#list) - List suppliers
* [get](docs/sdks/suppliers/README.md#get) - Get supplier
* [getCreateUpdateModel](docs/sdks/suppliers/README.md#getcreateupdatemodel) - Get create/update supplier model
* [create](docs/sdks/suppliers/README.md#create) - Create supplier
* [update](docs/sdks/suppliers/README.md#update) - Update supplier

### [taxRates](docs/sdks/taxrates/README.md)

* [list](docs/sdks/taxrates/README.md#list) - List all tax rates
* [get](docs/sdks/taxrates/README.md#get) - Get tax rate

### [trackingCategories](docs/sdks/trackingcategories/README.md)

* [list](docs/sdks/trackingcategories/README.md#list) - List tracking categories
* [get](docs/sdks/trackingcategories/README.md#get) - Get tracking categories

</details>
<!-- End Available Resources and Operations [operations] -->





<!-- Start Standalone functions [standalone-funcs] -->
## Standalone functions

All the methods listed above are available as standalone functions. These
functions are ideal for use in applications running in the browser, serverless
runtimes or other environments where application bundle size is a primary
concern. When using a bundler to build your application, all unused
functionality will be either excluded from the final bundle or tree-shaken away.

To read more about standalone functions, check [FUNCTIONS.md](./FUNCTIONS.md).

<details>

<summary>Available standalone functions</summary>

- [accountsCreate](docs/sdks/accounts/README.md#create)
- [accountsGetCreateModel](docs/sdks/accounts/README.md#getcreatemodel)
- [accountsGet](docs/sdks/accounts/README.md#get)
- [accountsList](docs/sdks/accounts/README.md#list)
- [bankAccountsCreate](docs/sdks/bankaccounts/README.md#create)
- [bankAccountsGetCreateModel](docs/sdks/bankaccounts/README.md#getcreatemodel)
- [billCreditNotesCreate](docs/sdks/billcreditnotes/README.md#create)
- [billCreditNotesGetCreateUpdateModel](docs/sdks/billcreditnotes/README.md#getcreateupdatemodel)
- [billCreditNotesGet](docs/sdks/billcreditnotes/README.md#get)
- [billCreditNotesList](docs/sdks/billcreditnotes/README.md#list)
- [billCreditNotesUpdate](docs/sdks/billcreditnotes/README.md#update)
- [billPaymentsCreate](docs/sdks/billpayments/README.md#create)
- [billPaymentsDelete](docs/sdks/billpayments/README.md#delete)
- [billPaymentsGetCreateModel](docs/sdks/billpayments/README.md#getcreatemodel)
- [billPaymentsGet](docs/sdks/billpayments/README.md#get)
- [billPaymentsList](docs/sdks/billpayments/README.md#list)
- [billsCreate](docs/sdks/bills/README.md#create)
- [billsDeleteAttachment](docs/sdks/bills/README.md#deleteattachment)
- [billsDelete](docs/sdks/bills/README.md#delete)
- [billsDownloadAttachment](docs/sdks/bills/README.md#downloadattachment)
- [billsGetAttachment](docs/sdks/bills/README.md#getattachment)
- [billsGetCreateUpdateModel](docs/sdks/bills/README.md#getcreateupdatemodel)
- [billsGet](docs/sdks/bills/README.md#get)
- [billsListAttachments](docs/sdks/bills/README.md#listattachments)
- [billsList](docs/sdks/bills/README.md#list)
- [billsUpdate](docs/sdks/bills/README.md#update)
- [billsUploadAttachment](docs/sdks/bills/README.md#uploadattachment)
- [companiesCreate](docs/sdks/companies/README.md#create)
- [companiesDelete](docs/sdks/companies/README.md#delete)
- [companiesGet](docs/sdks/companies/README.md#get)
- [companiesList](docs/sdks/companies/README.md#list)
- [companiesUpdate](docs/sdks/companies/README.md#update)
- [companyInfoGetAccountingProfile](docs/sdks/companyinfo/README.md#getaccountingprofile)
- [connectionsCreate](docs/sdks/connections/README.md#create)
- [connectionsDelete](docs/sdks/connections/README.md#delete)
- [connectionsGet](docs/sdks/connections/README.md#get)
- [connectionsList](docs/sdks/connections/README.md#list)
- [connectionsUnlink](docs/sdks/connections/README.md#unlink)
- [journalEntriesCreate](docs/sdks/journalentries/README.md#create)
- [journalEntriesGetCreateModel](docs/sdks/journalentries/README.md#getcreatemodel)
- [journalsCreate](docs/sdks/journals/README.md#create)
- [journalsGetCreateModel](docs/sdks/journals/README.md#getcreatemodel)
- [journalsGet](docs/sdks/journals/README.md#get)
- [journalsList](docs/sdks/journals/README.md#list)
- [manageDataGetPullOperation](docs/sdks/managedata/README.md#getpulloperation)
- [manageDataGet](docs/sdks/managedata/README.md#get)
- [manageDataListPullOperations](docs/sdks/managedata/README.md#listpulloperations)
- [manageDataRefreshAllDataTypes](docs/sdks/managedata/README.md#refreshalldatatypes)
- [manageDataRefreshDataType](docs/sdks/managedata/README.md#refreshdatatype)
- [paymentMethodsGet](docs/sdks/paymentmethods/README.md#get)
- [paymentMethodsList](docs/sdks/paymentmethods/README.md#list)
- [pushOperationsGet](docs/sdks/pushoperations/README.md#get)
- [pushOperationsList](docs/sdks/pushoperations/README.md#list)
- [suppliersCreate](docs/sdks/suppliers/README.md#create)
- [suppliersGetCreateUpdateModel](docs/sdks/suppliers/README.md#getcreateupdatemodel)
- [suppliersGet](docs/sdks/suppliers/README.md#get)
- [suppliersList](docs/sdks/suppliers/README.md#list)
- [suppliersUpdate](docs/sdks/suppliers/README.md#update)
- [taxRatesGet](docs/sdks/taxrates/README.md#get)
- [taxRatesList](docs/sdks/taxrates/README.md#list)
- [trackingCategoriesGet](docs/sdks/trackingcategories/README.md#get)
- [trackingCategoriesList](docs/sdks/trackingcategories/README.md#list)


</details>
<!-- End Standalone functions [standalone-funcs] -->

<!-- Start File uploads [file-upload] -->
## File uploads

Certain SDK methods accept files as part of a multi-part request. It is possible and typically recommended to upload files as a stream rather than reading the entire contents into memory. This avoids excessive memory consumption and potentially crashing with out-of-memory errors when working with very large files. The following example demonstrates how to attach a file stream to a request.

> [!TIP]
>
> Depending on your JavaScript runtime, there are convenient utilities that return a handle to a file without reading the entire contents into memory:
>
> - **Node.js v20+:** Since v20, Node.js comes with a native `openAsBlob` function in [`node:fs`](https://nodejs.org/docs/latest-v20.x/api/fs.html#fsopenasblobpath-options).
> - **Bun:** The native [`Bun.file`](https://bun.sh/docs/api/file-io#reading-files-bun-file) function produces a file handle that can be used for streaming file uploads.
> - **Browsers:** All supported browsers return an instance to a [`File`](https://developer.mozilla.org/en-US/docs/Web/API/File) when reading the value from an `<input type="file">` element.
> - **Node.js v18:** A file stream can be created using the `fileFrom` helper from [`fetch-blob/from.js`](https://www.npmjs.com/package/fetch-blob).

```typescript
import { CodatSyncPayables } from "@codat/sync-for-payables-version-1";

const codatSyncPayables = new CodatSyncPayables({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  await codatSyncPayables.bills.uploadAttachment({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
    billId: "EILBDVJVNUAGVKRQ",
  });
}

run();

```
<!-- End File uploads [file-upload] -->

<!-- Start Retries [retries] -->
## Retries

Some of the endpoints in this SDK support retries.  If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API.  However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
```typescript
import { CodatSyncPayables } from "@codat/sync-for-payables-version-1";

const codatSyncPayables = new CodatSyncPayables({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatSyncPayables.companies.list({
    page: 1,
    pageSize: 100,
    query: "id=e3334455-1aed-4e71-ab43-6bccf12092ee",
    orderBy: "-modifiedDate",
  }, {
    retries: {
      strategy: "backoff",
      backoff: {
        initialInterval: 1,
        maxInterval: 50,
        exponent: 1.1,
        maxElapsedTime: 100,
      },
      retryConnectionErrors: false,
    },
  });

  // Handle the result
  console.log(result);
}

run();

```

If you'd like to override the default retry strategy for all operations that support retries, you can provide a retryConfig at SDK initialization:
```typescript
import { CodatSyncPayables } from "@codat/sync-for-payables-version-1";

const codatSyncPayables = new CodatSyncPayables({
  retryConfig: {
    strategy: "backoff",
    backoff: {
      initialInterval: 1,
      maxInterval: 50,
      exponent: 1.1,
      maxElapsedTime: 100,
    },
    retryConnectionErrors: false,
  },
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatSyncPayables.companies.list({
    page: 1,
    pageSize: 100,
    query: "id=e3334455-1aed-4e71-ab43-6bccf12092ee",
    orderBy: "-modifiedDate",
  });

  // Handle the result
  console.log(result);
}

run();

```
<!-- End Retries [retries] -->

<!-- Start Error Handling [errors] -->
## Error Handling

All SDK methods return a response object or throw an error. If Error objects are specified in your OpenAPI Spec, the SDK will throw the appropriate Error type.

| Error Object                    | Status Code                     | Content Type                    |
| ------------------------------- | ------------------------------- | ------------------------------- |
| errors.ErrorMessage             | 400,401,402,403,404,429,500,503 | application/json                |
| errors.SDKError                 | 4xx-5xx                         | */*                             |

Validation errors can also occur when either method arguments or data returned from the server do not match the expected format. The `SDKValidationError` that is thrown as a result will capture the raw value that failed validation in an attribute called `rawValue`. Additionally, a `pretty()` method is available on this error that can be used to log a nicely formatted string since validation errors can list many issues and the plain error string may be difficult read when debugging. 


```typescript
import { CodatSyncPayables } from "@codat/sync-for-payables-version-1";
import {
  ErrorMessage,
  SDKValidationError,
} from "@codat/sync-for-payables-version-1/sdk/models/errors";

const codatSyncPayables = new CodatSyncPayables({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  let result;
  try {
    result = await codatSyncPayables.companies.list({
      page: 1,
      pageSize: 100,
      query: "id=e3334455-1aed-4e71-ab43-6bccf12092ee",
      orderBy: "-modifiedDate",
    });

    // Handle the result
    console.log(result);
  } catch (err) {
    switch (true) {
      case (err instanceof SDKValidationError): {
        // Validation errors can be pretty-printed
        console.error(err.pretty());
        // Raw value may also be inspected
        console.error(err.rawValue);
        return;
      }
      case (err instanceof ErrorMessage): {
        // Handle err.data$: ErrorMessageData
        console.error(err);
        return;
      }
      default: {
        throw err;
      }
    }
  }
}

run();

```
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Select Server by Index

You can override the default server globally by passing a server index to the `serverIdx` optional parameter when initializing the SDK client instance. The selected server will then be used as the default on the operations that use it. This table lists the indexes associated with the available servers:

| # | Server | Variables |
| - | ------ | --------- |
| 0 | `https://api.codat.io` | None |

```typescript
import { CodatSyncPayables } from "@codat/sync-for-payables-version-1";

const codatSyncPayables = new CodatSyncPayables({
  serverIdx: 0,
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatSyncPayables.companies.list({
    page: 1,
    pageSize: 100,
    query: "id=e3334455-1aed-4e71-ab43-6bccf12092ee",
    orderBy: "-modifiedDate",
  });

  // Handle the result
  console.log(result);
}

run();

```


### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL` optional parameter when initializing the SDK client instance. For example:

```typescript
import { CodatSyncPayables } from "@codat/sync-for-payables-version-1";

const codatSyncPayables = new CodatSyncPayables({
  serverURL: "https://api.codat.io",
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatSyncPayables.companies.list({
    page: 1,
    pageSize: 100,
    query: "id=e3334455-1aed-4e71-ab43-6bccf12092ee",
    orderBy: "-modifiedDate",
  });

  // Handle the result
  console.log(result);
}

run();

```
<!-- End Server Selection [server] -->

<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The TypeScript SDK makes API calls using an `HTTPClient` that wraps the native
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). This
client is a thin wrapper around `fetch` and provides the ability to attach hooks
around the request lifecycle that can be used to modify the request or handle
errors and response.

The `HTTPClient` constructor takes an optional `fetcher` argument that can be
used to integrate a third-party HTTP client or when writing tests to mock out
the HTTP client and feed in fixtures.

The following example shows how to use the `"beforeRequest"` hook to to add a
custom header and a timeout to requests and how to use the `"requestError"` hook
to log errors:

```typescript
import { CodatSyncPayables } from "@codat/sync-for-payables-version-1";
import { HTTPClient } from "@codat/sync-for-payables-version-1/lib/http";

const httpClient = new HTTPClient({
  // fetcher takes a function that has the same signature as native `fetch`.
  fetcher: (request) => {
    return fetch(request);
  }
});

httpClient.addHook("beforeRequest", (request) => {
  const nextRequest = new Request(request, {
    signal: request.signal || AbortSignal.timeout(5000)
  });

  nextRequest.headers.set("x-custom-header", "custom value");

  return nextRequest;
});

httpClient.addHook("requestError", (error, request) => {
  console.group("Request Error");
  console.log("Reason:", `${error}`);
  console.log("Endpoint:", `${request.method} ${request.url}`);
  console.groupEnd();
});

const sdk = new CodatSyncPayables({ httpClient });
```
<!-- End Custom HTTP Client [http-client] -->

<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security scheme globally:

| Name         | Type         | Scheme       |
| ------------ | ------------ | ------------ |
| `authHeader` | apiKey       | API key      |

To authenticate with the API the `authHeader` parameter must be set when initializing the SDK client instance. For example:
```typescript
import { CodatSyncPayables } from "@codat/sync-for-payables-version-1";

const codatSyncPayables = new CodatSyncPayables({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatSyncPayables.companies.list({
    page: 1,
    pageSize: 100,
    query: "id=e3334455-1aed-4e71-ab43-6bccf12092ee",
    orderBy: "-modifiedDate",
  });

  // Handle the result
  console.log(result);
}

run();

```
<!-- End Authentication [security] -->

<!-- Start Debugging [debug] -->
## Debugging

You can setup your SDK to emit debug logs for SDK requests and responses.

You can pass a logger that matches `console`'s interface as an SDK option.

> [!WARNING]
> Beware that debug logging will reveal secrets, like API tokens in headers, in log messages printed to a console or files. It's recommended to use this feature only during local development and not in production.

```typescript
import { CodatSyncPayables } from "@codat/sync-for-payables-version-1";

const sdk = new CodatSyncPayables({ debugLogger: console });
```
<!-- End Debugging [debug] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->

<!-- Start Codat Support Notes -->
## Support

If you encounter any challenges while utilizing our SDKs, please don't hesitate to reach out for assistance. 
You can raise any issues by contacting your dedicated Codat representative or reaching out to our [support team](mailto:support@codat.io).
We're here to help ensure a smooth experience for you.
<!-- End Codat Support Notes -->

<!-- Start Codat Generated By -->
### Library generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
<!-- End Codat Generated By -->