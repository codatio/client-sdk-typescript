# AccountingCompanyInfo
(*accountingCompanyInfo*)

## Overview

Company info

### Available Operations

* [getAccountingCompanyInfo](#getaccountingcompanyinfo) - Get company info
* [refresh](#refresh) - Refresh company info

## getAccountingCompanyInfo

Gets the latest basic info for a company.

### Example Usage

```typescript
import { CodatSyncCommerce } from "@codat/sync-for-commerce-version-1";

(async() => {
  const sdk = new CodatSyncCommerce({
    security: {
      authHeader: "Basic BASE_64_ENCODED(API_KEY)",
    },
  });

  const res = await sdk.accountingCompanyInfo.getAccountingCompanyInfo({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                | [operations.GetAccountingCompanyInfoRequest](../../models/operations/getaccountingcompanyinforequest.md) | :heavy_check_mark:                                                                                       | The request object to use for the request.                                                               |
| `retries`                                                                                                | [utils.RetryConfig](../../models/utils/retryconfig.md)                                                   | :heavy_minus_sign:                                                                                       | Configuration to override the default retry behavior of the client.                                      |
| `config`                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                             | :heavy_minus_sign:                                                                                       | Available config options for making requests.                                                            |


### Response

**Promise<[operations.GetAccountingCompanyInfoResponse](../../models/operations/getaccountingcompanyinforesponse.md)>**


## refresh

Initiates the process of synchronising basic info for a company

### Example Usage

```typescript
import { CodatSyncCommerce } from "@codat/sync-for-commerce-version-1";

(async() => {
  const sdk = new CodatSyncCommerce({
    security: {
      authHeader: "Basic BASE_64_ENCODED(API_KEY)",
    },
  });

  const res = await sdk.accountingCompanyInfo.refresh({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.RefreshCompanyInfoRequest](../../models/operations/refreshcompanyinforequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `retries`                                                                                    | [utils.RetryConfig](../../models/utils/retryconfig.md)                                       | :heavy_minus_sign:                                                                           | Configuration to override the default retry behavior of the client.                          |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.RefreshCompanyInfoResponse](../../models/operations/refreshcompanyinforesponse.md)>**

