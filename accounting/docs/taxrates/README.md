# taxRates

## Overview

Tax rates

### Available Operations

* [get](#get) - Get tax rate
* [list](#list) - List all tax rates

## get

Gets the specified tax rate for a given company.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { GetTaxRateResponse } from "@codat/accounting/dist/sdk/models/operations";
import { TaxRateStatusEnum } from "@codat/accounting/dist/sdk/models/shared";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.taxRates.get({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  taxRateId: "inventore",
}).then((res: GetTaxRateResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## list

Gets the latest tax rates for a given company.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { ListTaxRatesResponse } from "@codat/accounting/dist/sdk/models/operations";
import { TaxRateStatusEnum } from "@codat/accounting/dist/sdk/models/shared";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.taxRates.list({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  orderBy: "-modifiedDate",
  page: 1,
  pageSize: 100,
  query: "eligendi",
}).then((res: ListTaxRatesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
