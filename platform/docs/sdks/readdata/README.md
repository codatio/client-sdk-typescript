# ReadData
(*readData*)

## Overview

View validation outcomes for completed read data operations.

### Available Operations

* [getValidationResults](#getvalidationresults) - Get validation results

## getValidationResults

Use the **Get validation results** endpoint to review warnings and errors encountered during the data type validation phase.

The validation result [schema](https://docs.codat.io/platform-api#/schemas/ValidationResult) contains two message arrays:

- **`warnings`** array lists potential issues with the data type that may require attention but don't block usage.
- **`errors`** array contains critical issues that must be resolved before the data type can be used.

### Example Usage

```typescript
import { CodatPlatform } from "@codat/platform";

const codatPlatform = new CodatPlatform({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatPlatform.readData.getValidationResults({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    datasetId: "0812af6e-436a-491f-9056-db91cb961ad3",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CodatPlatformCore } from "@codat/platform/core.js";
import { readDataGetValidationResults } from "@codat/platform/funcs/readDataGetValidationResults.js";

// Use `CodatPlatformCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatPlatform = new CodatPlatformCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await readDataGetValidationResults(codatPlatform, {
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    datasetId: "0812af6e-436a-491f-9056-db91cb961ad3",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("readDataGetValidationResults failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetReadValidationResultsRequest](../../sdk/models/operations/getreadvalidationresultsrequest.md)                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.ValidationResult](../../sdk/models/shared/validationresult.md)\>**

### Errors

| Error Type              | Status Code             | Content Type            |
| ----------------------- | ----------------------- | ----------------------- |
| errors.ErrorMessage     | 401, 402, 403, 404, 429 | application/json        |
| errors.ErrorMessage     | 500, 503                | application/json        |
| errors.SDKError         | 4XX, 5XX                | \*/\*                   |