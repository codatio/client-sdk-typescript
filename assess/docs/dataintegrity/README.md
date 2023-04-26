# dataIntegrity

## Overview

Data integrity is important

### Available Operations

* [getDataIntegrityDetails](#getdataintegritydetails) - Lists data integrity details for date type
* [getDataIntegrityStatus](#getdataintegritystatus) - Get data integrity status
* [getDataIntegritySummaries](#getdataintegritysummaries) - Get data integrity summary

## getDataIntegrityDetails

Gets record-by-record match results for a given company and datatype, optionally restricted by a Codat query string.

### Example Usage

```typescript
import { CodatAssess } from "@codat/assess";
import { GetDataIntegrityDetailsRequest, GetDataIntegrityDetailsResponse } from "@codat/assess/dist/sdk/models/operations";
import { DataIntegrityDataTypeEnum } from "@codat/assess/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatAssess({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: GetDataIntegrityDetailsRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  dataType: DataIntegrityDataTypeEnum.BankingAccounts,
  orderBy: "-modifiedDate",
  page: 1,
  pageSize: 100,
  query: "voluptatibus",
};

sdk.dataIntegrity.getDataIntegrityDetails(req).then((res: GetDataIntegrityDetailsResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## getDataIntegrityStatus

Gets match status for a given company and datatype.

### Example Usage

```typescript
import { CodatAssess } from "@codat/assess";
import { GetDataIntegrityStatusRequest, GetDataIntegrityStatusResponse } from "@codat/assess/dist/sdk/models/operations";
import { DataIntegrityDataTypeEnum, IntegrityStatusEnum } from "@codat/assess/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatAssess({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: GetDataIntegrityStatusRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  dataType: DataIntegrityDataTypeEnum.BankingAccounts,
};

sdk.dataIntegrity.getDataIntegrityStatus(req).then((res: GetDataIntegrityStatusResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```

## getDataIntegritySummaries

Gets match summary for a given company and datatype, optionally restricted by a Codat query string.

### Example Usage

```typescript
import { CodatAssess } from "@codat/assess";
import { GetDataIntegritySummariesRequest, GetDataIntegritySummariesResponse } from "@codat/assess/dist/sdk/models/operations";
import { DataIntegrityDataTypeEnum } from "@codat/assess/dist/sdk/models/shared";
import { AxiosError } from "axios";

const sdk = new CodatAssess({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

const req: GetDataIntegritySummariesRequest = {
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  dataType: DataIntegrityDataTypeEnum.BankingAccounts,
  query: "ipsa",
};

sdk.dataIntegrity.getDataIntegritySummaries(req).then((res: GetDataIntegritySummariesResponse | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```
