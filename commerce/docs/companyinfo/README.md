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
import { AddressTypeEnum, CompanyInfoWeblinkTypeEnum, PhoneNumberTypeEnum } from "@codat/commerce/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatCommerce({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.companyInfo.get({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
}).then((res: GetCompanyInfoResponse | AxiosError) => {
  if (res instanceof GetCompanyInfoResponse && res.statusCode == 200) {
    // handle response
  }
});
```
