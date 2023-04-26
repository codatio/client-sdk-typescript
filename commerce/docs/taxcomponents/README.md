# taxComponents

## Overview

Retrieve standardized data from linked commerce platforms.

### Available Operations

* [get](#get) - List tax components

## get

This endpoint returns a lits of tax rates from the commerce platform, including tax rate names and values. This supports the mapping of tax rates from the commerce platform to the accounting platform.

### Example Usage

```typescript
import { CodatCommerce } from "@codat/commerce";
import { GetTaxComponentsRequest, GetTaxComponentsResponse } from "@codat/commerce/dist/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new CodatCommerce({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: GetTaxComponentsRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
};

sdk.taxComponents.get(req).then((res: GetTaxComponentsResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```
