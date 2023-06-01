# locations

## Overview

Retrieve standardized data from linked commerce platforms.

### Available Operations

* [get](#get) - Get location
* [list](#list) - List locations

## get

Retrieve a location as seen in the commerce platform.

A `location` is a geographic place at which stocks of products may be held, or from where orders were placed.

### Example Usage

```typescript
import { CodatCommerce } from "@codat/commerce";
import { GetLocationResponse } from "@codat/commerce/dist/sdk/models/operations";
import { AddressType } from "@codat/commerce/dist/sdk/models/shared";

const sdk = new CodatCommerce({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.locations.get({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  locationId: "unde",
}).then((res: GetLocationResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## list

Retrieve a list of locations as seen in the commerce platform.

A `location` is a geographic place at which stocks of products may be held, or from where orders were placed.

### Example Usage

```typescript
import { CodatCommerce } from "@codat/commerce";
import { ListLocationsResponse } from "@codat/commerce/dist/sdk/models/operations";
import { AddressType } from "@codat/commerce/dist/sdk/models/shared";

const sdk = new CodatCommerce({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.locations.list({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
}).then((res: ListLocationsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
