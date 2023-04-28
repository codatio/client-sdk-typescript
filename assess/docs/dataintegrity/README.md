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
import { GetDataIntegrityDetailsResponse } from "@codat/assess/dist/sdk/models/operations";
import { DataIntegrityDataTypeEnum } from "@codat/assess/dist/sdk/models/shared";

const sdk = new CodatAssess({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.dataIntegrity.getDataIntegrityDetails({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  dataType: DataIntegrityDataTypeEnum.BankingAccounts,
  orderBy: "-modifiedDate",
  page: 1,
  pageSize: 100,
  query: "voluptatibus",
}).then((res: GetDataIntegrityDetailsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getDataIntegrityStatus

Gets match status for a given company and datatype.

### Example Usage

```typescript
import { CodatAssess } from "@codat/assess";
import { GetDataIntegrityStatusResponse } from "@codat/assess/dist/sdk/models/operations";
import { DataIntegrityDataTypeEnum, IntegrityStatusEnum } from "@codat/assess/dist/sdk/models/shared";

const sdk = new CodatAssess({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.dataIntegrity.getDataIntegrityStatus({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  dataType: DataIntegrityDataTypeEnum.BankingAccounts,
}).then((res: GetDataIntegrityStatusResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getDataIntegritySummaries

Gets match summary for a given company and datatype, optionally restricted by a Codat query string.

### Example Usage

```typescript
import { CodatAssess } from "@codat/assess";
import { GetDataIntegritySummariesResponse } from "@codat/assess/dist/sdk/models/operations";
import { DataIntegrityDataTypeEnum } from "@codat/assess/dist/sdk/models/shared";

const sdk = new CodatAssess({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.dataIntegrity.getDataIntegritySummaries({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  dataType: DataIntegrityDataTypeEnum.BankingAccounts,
  query: "ipsa",
}).then((res: GetDataIntegritySummariesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
