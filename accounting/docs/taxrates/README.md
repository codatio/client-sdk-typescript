# taxRates

## Overview

Tax rates

### Available Operations

* [getTaxRate](#gettaxrate) - Get tax rate
* [listTaxRates](#listtaxrates) - List all tax rates

## getTaxRate

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
  taxRateId: "at",
};

sdk.taxRates.getTaxRate(req).then((res: GetTaxRateResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## listTaxRates

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
  query: "excepturi",
};

sdk.taxRates.listTaxRates(req).then((res: ListTaxRatesResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```
