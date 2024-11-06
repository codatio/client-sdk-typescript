# Sync
(*sync*)

## Overview

Monitor the status of data syncs.

### Available Operations

* [getLastSuccessfulSync](#getlastsuccessfulsync) - Get last successful sync

## getLastSuccessfulSync

Use the _Get last successful sync_ endpoint to obtain the status information for the company's [most recent successful sync](https://docs.codat.io/bank-feeds-api#/schemas/CompanySyncStatus). 

### Example Usage

```typescript
import { CodatBankFeeds } from "@codat/bank-feeds";

const codatBankFeeds = new CodatBankFeeds({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatBankFeeds.sync.getLastSuccessfulSync({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CodatBankFeedsCore } from "@codat/bank-feeds/core.js";
import { syncGetLastSuccessfulSync } from "@codat/bank-feeds/funcs/syncGetLastSuccessfulSync.js";

// Use `CodatBankFeedsCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatBankFeeds = new CodatBankFeedsCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await syncGetLastSuccessfulSync(codatBankFeeds, {
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetLastSuccessfulRequest](../../sdk/models/operations/getlastsuccessfulrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.CompanySyncStatus](../../sdk/models/shared/companysyncstatus.md)\>**

### Errors

| Error Type                        | Status Code                       | Content Type                      |
| --------------------------------- | --------------------------------- | --------------------------------- |
| errors.ErrorMessage               | 401, 402, 403, 404, 429, 500, 503 | application/json                  |
| errors.SDKError                   | 4XX, 5XX                          | \*/\*                             |