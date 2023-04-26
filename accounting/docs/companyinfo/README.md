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
import { GetCompanyInfoRequest, GetCompanyInfoResponse } from "@codat/accounting/dist/sdk/models/operations";
import { AddressTypeEnum, CompanyDatasetWeblinkTypeEnum, PhoneNumberTypeEnum } from "@codat/accounting/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: GetCompanyInfoRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
};

sdk.companyInfo.get(req).then((res: GetCompanyInfoResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## refresh

Initiates the process of synchronising basic info for a company

### Example Usage

```typescript
import { CodatAccounting } from "@codat/accounting";
import { RefreshCompanyInfoRequest, RefreshCompanyInfoResponse } from "@codat/accounting/dist/sdk/models/operations";
import { DatasetStatusEnum } from "@codat/accounting/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatAccounting({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: RefreshCompanyInfoRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
};

sdk.companyInfo.refresh(req).then((res: RefreshCompanyInfoResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```
