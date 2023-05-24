# dataIntegrity

## Overview

Data integrity is important

### Available Operations

* [getDataIntegrityStatus](#getdataintegritystatus) - Get data integrity status
* [getDataIntegritySummaries](#getdataintegritysummaries) - Get data integrity summary
* [listDataTypeDataIntegrityDetails](#listdatatypedataintegritydetails) - List data type data integrity

## getDataIntegrityStatus

Gets match status for a given company and datatype.

### Example Usage

```typescript
import { CodatAssess } from "@codat/assess";
import { GetDataIntegrityStatusResponse } from "@codat/assess/dist/sdk/models/operations";
import { DataIntegrityDataType, IntegrityStatus } from "@codat/assess/dist/sdk/models/shared";

const sdk = new CodatAssess({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.dataIntegrity.getDataIntegrityStatus({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  dataType: DataIntegrityDataType.BankingAccounts,
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
import { DataIntegrityDataType } from "@codat/assess/dist/sdk/models/shared";

const sdk = new CodatAssess({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.dataIntegrity.getDataIntegritySummaries({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  dataType: DataIntegrityDataType.BankingAccounts,
  query: "voluptatibus",
}).then((res: GetDataIntegritySummariesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## listDataTypeDataIntegrityDetails

Gets record-by-record match results for a given company and datatype, optionally restricted by a Codat query string.

### Example Usage

```typescript
import { CodatAssess } from "@codat/assess";
import { ListDataTypeDataIntegrityDetailsResponse } from "@codat/assess/dist/sdk/models/operations";
import { DataIntegrityDataType } from "@codat/assess/dist/sdk/models/shared";

const sdk = new CodatAssess({
  security: {
    authHeader: "YOUR_API_KEY_HERE",
  },
});

sdk.dataIntegrity.listDataTypeDataIntegrityDetails({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  dataType: DataIntegrityDataType.BankingAccounts,
  orderBy: "-modifiedDate",
  page: 1,
  pageSize: 100,
  query: "ipsa",
}).then((res: ListDataTypeDataIntegrityDetailsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
