# AccountMapping

## Overview

Extra functionality for building an account management UI.

### Available Operations

* [get](#get) - List bank feed accounts
* [create](#create) - Create bank feed account mapping

## get

﻿The *List bank accounts* endpoint returns information about a source bank account and any current or potential target mapping accounts.

A bank feed account mapping is a specified link between the source account (provided by the Codat user) and the target account (the end user's account in the underlying software).

> **For custom builds only**
> 
> Only use this endpoint if you are building your own account management UI.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get-bank-account-mapping" method="get" path="/companies/{companyId}/connections/{connectionId}/bankFeedAccounts/mapping" -->
```typescript
import { CodatBankFeeds } from "@codat/bank-feeds";

const codatBankFeeds = new CodatBankFeeds({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatBankFeeds.accountMapping.get({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CodatBankFeedsCore } from "@codat/bank-feeds/core.js";
import { accountMappingGet } from "@codat/bank-feeds/funcs/accountMappingGet.js";

// Use `CodatBankFeedsCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatBankFeeds = new CodatBankFeedsCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await accountMappingGet(codatBankFeeds, {
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accountMappingGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetBankAccountMappingRequest](../../sdk/models/operations/getbankaccountmappingrequest.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.BankFeedMapping[]](../../models/.md)\>**

### Errors

| Error Type              | Status Code             | Content Type            |
| ----------------------- | ----------------------- | ----------------------- |
| errors.ErrorMessage     | 401, 402, 403, 404, 429 | application/json        |
| errors.ErrorMessage     | 500, 503                | application/json        |
| errors.SDKError         | 4XX, 5XX                | \*/\*                   |

## create

﻿The *Create bank account mapping* endpoint creates a new mapping between a source bank account and a potential account in the accounting software (target account).

A bank feed account mapping is a specified link between the source account (provided by the Codat user) and the target account (the end user's account in the underlying software).

To find valid target account options, first call the [List bank feed account mappings](https://docs.codat.io//bank-feeds-api#/operations/get-bank-account-mapping) endpoint.

> **For custom builds only**
>
> Only use this endpoint if you are building your own account management UI.

#### Account mapping variability

The method of mapping the source account to the target account varies depending on the accounting software your company uses.

#### Mapping options:

1. **API Mapping**: Integrate the mapping journey directly into your application for a seamless user experience.
2. **Codat UI Mapping**: If you prefer a quicker setup, you can utilize Codat's provided user interface for mapping.
3. **Accounting Platform Mapping**: For some accounting software, the mapping process must be conducted within the software itself.

### Integration-specific behavior

| Bank Feed Integration | API Mapping | Codat UI Mapping | Accounting Platform Mapping |
| --------------------- | ----------- | ---------------- | --------------------------- |
| Xero                  | ✅          | ✅               |                             |
| FreeAgent             | ✅          | ✅               |                             |
| Oracle NetSuite       | ✅          | ✅               |                             |
| Exact Online (NL)     | ✅          | ✅               |                             |
| QuickBooks Online     |             |                  | ✅                          |
| Sage                  |             |                  | ✅                          |

### Example Usage

<!-- UsageSnippet language="typescript" operationID="create-bank-account-mapping" method="post" path="/companies/{companyId}/connections/{connectionId}/bankFeedAccounts/mapping" -->
```typescript
import { CodatBankFeeds } from "@codat/bank-feeds";

const codatBankFeeds = new CodatBankFeeds({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatBankFeeds.accountMapping.create({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
    bankFeedAccountMapping: {
      sourceAccountId: "acc-002",
      targetAccountId: "account-081",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CodatBankFeedsCore } from "@codat/bank-feeds/core.js";
import { accountMappingCreate } from "@codat/bank-feeds/funcs/accountMappingCreate.js";

// Use `CodatBankFeedsCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatBankFeeds = new CodatBankFeedsCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await accountMappingCreate(codatBankFeeds, {
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
    bankFeedAccountMapping: {
      sourceAccountId: "acc-002",
      targetAccountId: "account-081",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accountMappingCreate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateBankAccountMappingRequest](../../sdk/models/operations/createbankaccountmappingrequest.md)                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.BankFeedAccountMappingResponse](../../sdk/models/shared/bankfeedaccountmappingresponse.md)\>**

### Errors

| Error Type                   | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| errors.ErrorMessage          | 400, 401, 402, 403, 404, 429 | application/json             |
| errors.ErrorMessage          | 500, 503                     | application/json             |
| errors.SDKError              | 4XX, 5XX                     | \*/\*                        |