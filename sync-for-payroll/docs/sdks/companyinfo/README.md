# CompanyInfo
(*companyInfo*)

## Overview

View company information fetched from the source platform.

### Available Operations

* [getAccountingProfile](#getaccountingprofile) - Get company accounting profile

## getAccountingProfile

Gets the latest basic info for a company.

### Example Usage

```typescript
import { CodatSyncPayroll } from "@codat/sync-for-payroll";

(async() => {
  const sdk = new CodatSyncPayroll({
    security: {
      authHeader: "Basic BASE_64_ENCODED(API_KEY)",
    },
  });

  const res = await sdk.companyInfo.getAccountingProfile({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.GetAccountingProfileRequest](../../sdk/models/operations/getaccountingprofilerequest.md) | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `retries`                                                                                            | [utils.RetryConfig](../../internal/utils/retryconfig.md)                                             | :heavy_minus_sign:                                                                                   | Configuration to override the default retry behavior of the client.                                  |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.GetAccountingProfileResponse](../../sdk/models/operations/getaccountingprofileresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |
