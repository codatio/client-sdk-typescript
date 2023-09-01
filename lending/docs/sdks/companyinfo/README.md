# companyInfo

## Overview

View company information fetched from the source platform.

### Available Operations

* [fromAccountingPlatform](#fromaccountingplatform) - Get company info
* [fromCommercePlatform](#fromcommerceplatform) - Get company info

## fromAccountingPlatform

Gets the latest basic info for a company.

### Example Usage

```typescript
import { CodatLending } from "@codat/lending";
import { GetAccountingCompanyInfoResponse } from "@codat/lending/dist/sdk/models/operations";

const sdk = new CodatLending({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.companyInfo.fromAccountingPlatform({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
}).then((res: GetAccountingCompanyInfoResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                | [operations.GetAccountingCompanyInfoRequest](../../models/operations/getaccountingcompanyinforequest.md) | :heavy_check_mark:                                                                                       | The request object to use for the request.                                                               |
| `retries`                                                                                                | [utils.RetryConfig](../../models/utils/retryconfig.md)                                                   | :heavy_minus_sign:                                                                                       | Configuration to override the default retry behavior of the client.                                      |
| `config`                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                             | :heavy_minus_sign:                                                                                       | Available config options for making requests.                                                            |


### Response

**Promise<[operations.GetAccountingCompanyInfoResponse](../../models/operations/getaccountingcompanyinforesponse.md)>**


## fromCommercePlatform

Retrieve information about the company, as seen in the commerce platform.

This may include information like addresses, tax registration details and social media or website information.

### Example Usage

```typescript
import { CodatLending } from "@codat/lending";
import { GetCommerceCompanyInfoResponse } from "@codat/lending/dist/sdk/models/operations";

const sdk = new CodatLending({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.companyInfo.fromCommercePlatform({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
}).then((res: GetCommerceCompanyInfoResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.GetCommerceCompanyInfoRequest](../../models/operations/getcommercecompanyinforequest.md) | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `retries`                                                                                            | [utils.RetryConfig](../../models/utils/retryconfig.md)                                               | :heavy_minus_sign:                                                                                   | Configuration to override the default retry behavior of the client.                                  |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.GetCommerceCompanyInfoResponse](../../models/operations/getcommercecompanyinforesponse.md)>**

