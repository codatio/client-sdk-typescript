# companyInfo

## Overview

Retrieve standardized data from linked commerce platforms.

### Available Operations

* [get](#get) - Get company info

## get

Retrieve information about the company, as seen in the commerce platform.

This may include information like addresses, tax registration details and social media or website information.

### Example Usage

```typescript
import { CodatCommerce } from "@codat/commerce";
import { GetCompanyInfoResponse } from "@codat/commerce/dist/sdk/models/operations";
import { AddressType, CompanyInfoWeblinkType, PhoneNumberType } from "@codat/commerce/dist/sdk/models/shared";

const sdk = new CodatCommerce({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.companyInfo.get({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
}).then((res: GetCompanyInfoResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.GetCompanyInfoRequest](../../models/operations/getcompanyinforequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `retries`                                                                            | [utils.RetryConfig](../../models/utils/retryconfig.md)                               | :heavy_minus_sign:                                                                   | Configuration to override the default retry behavior of the client.                  |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.GetCompanyInfoResponse](../../models/operations/getcompanyinforesponse.md)>**

