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
import { GetTaxRateRequest, GetTaxRateResponse } from "@codat/accounting/dist/sdk/models/operations";
import { TaxRateStatusEnum } from "@codat/accounting/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: GetTaxRateRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  taxRateId: "inventore",
};

sdk.taxRates.get(req).then((res: GetTaxRateResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## list

Gets the latest tax rates for a given company.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { ListTaxRatesRequest, ListTaxRatesResponse } from "@codat/accounting/dist/sdk/models/operations";
import { TaxRateStatusEnum } from "@codat/accounting/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: ListTaxRatesRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  orderBy: "-modifiedDate",
  page: 1,
  pageSize: 100,
  query: "eligendi",
};

sdk.taxRates.list(req).then((res: ListTaxRatesResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```
