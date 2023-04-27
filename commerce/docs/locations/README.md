# locations

## Overview

Retrieve standardized data from linked commerce platforms.

### Available Operations

* [list](#list) - List locations

## list

Retrieve a list of locations as seen in the commerce platform.

A `location` is a geographic place at which stocks of products may be held, or from where orders were placed.

### Example Usage

```typescript
import { CodatCommerce } from "@codat/commerce";
import { ListLocationsResponse } from "@codat/commerce/dist/sdk/models/operations";
import { AddressTypeEnum } from "@codat/commerce/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatCommerce({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.locations.list({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
}).then((res: ListLocationsResponse | AxiosError) => {
  if (res instanceof ListLocationsResponse && res.statusCode == 200) {
    // handle response
  }
});
```
