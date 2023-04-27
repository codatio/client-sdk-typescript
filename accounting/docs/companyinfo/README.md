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
import { AddressTypeEnum, CompanyDatasetWeblinkTypeEnum, PhoneNumberTypeEnum } from "@codat/accounting/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.companyInfo.get({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
}).then((res: GetCompanyInfoResponse | AxiosError) => {
  if (res instanceof GetCompanyInfoResponse && res.statusCode == 200) {
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
import { DatasetStatusEnum } from "@codat/accounting/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.companyInfo.refresh({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
}).then((res: RefreshCompanyInfoResponse | AxiosError) => {
  if (res instanceof RefreshCompanyInfoResponse && res.statusCode == 200) {
    // handle response
  }
});
```
