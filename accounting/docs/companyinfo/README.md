# companyInfo

## Overview

Company info

### Available Operations

* [get](#get) - Get company info
* [refresh](#refresh) - Refresh company info

## get

Gets the latest basic info for a company.

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { GetCompanyInfoResponse } from "@codat/accounting/dist/sdk/models/operations";
import { AddressType, CompanyDatasetWeblinkType, PhoneNumberType } from "@codat/accounting/dist/sdk/models/shared";

const sdk = new CodatAccounting({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.companyInfo.get({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
}).then((res: GetCompanyInfoResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## refresh

Initiates the process of synchronising basic info for a company

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { RefreshCompanyInfoResponse } from "@codat/accounting/dist/sdk/models/operations";
import { DatasetStatus } from "@codat/accounting/dist/sdk/models/shared";

const sdk = new CodatAccounting({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.companyInfo.refresh({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
}).then((res: RefreshCompanyInfoResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
