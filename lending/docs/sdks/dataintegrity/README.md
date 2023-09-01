# dataIntegrity

## Overview

Match mutable accounting data with immutable banking data to increase confidence in financial data.

### Available Operations

* [details](#details) - List data integrity details
* [status](#status) - Get data integrity status
* [summaries](#summaries) - Get data integrity summaries

## details

﻿The *List data integrity details* endpoint returns the match result record by record for a given data type, filtered based on a query string in the same way as summary results.

The [details](https://docs.codat.io/lending-api#/schemas/DataIntegrityDetails) are paginated and support ordering, following the same conventions as our other data endpoints.

### Example Usage

```typescript
import { CodatLending } from "@codat/lending";
import { ListDataIntegrityDetailsResponse } from "@codat/lending/dist/sdk/models/operations";
import { DataIntegrityDataType } from "@codat/lending/dist/sdk/models/shared";

const sdk = new CodatLending({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.dataIntegrity.details({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  dataType: DataIntegrityDataType.BankingAccounts,
  orderBy: "-modifiedDate",
  page: 1,
  pageSize: 100,
  query: "deleniti",
}).then((res: ListDataIntegrityDetailsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                | [operations.ListDataIntegrityDetailsRequest](../../models/operations/listdataintegritydetailsrequest.md) | :heavy_check_mark:                                                                                       | The request object to use for the request.                                                               |
| `retries`                                                                                                | [utils.RetryConfig](../../models/utils/retryconfig.md)                                                   | :heavy_minus_sign:                                                                                       | Configuration to override the default retry behavior of the client.                                      |
| `config`                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                             | :heavy_minus_sign:                                                                                       | Available config options for making requests.                                                            |


### Response

**Promise<[operations.ListDataIntegrityDetailsResponse](../../models/operations/listdataintegritydetailsresponse.md)>**


## status

﻿The *Get data integrity status* endpoint returns the [status](https://docs.codat.io/lending-api#/schemas/DataIntegrityStatus) for the company’s match results between the data type provided in the URL and other data types that Data Integrity uses to support matching.
This endpoint helps you understand whether match data is available and, if so, how to usefully query it.

The response tells you:

- Whether match results are available.
- When the results were generated, and their status.
- The connection IDs, amounts, and dates involved to support useful querying.

### Example Usage

```typescript
import { CodatLending } from "@codat/lending";
import { GetDataIntegrityStatusResponse } from "@codat/lending/dist/sdk/models/operations";
import { DataIntegrityDataType } from "@codat/lending/dist/sdk/models/shared";

const sdk = new CodatLending({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.dataIntegrity.status({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  dataType: DataIntegrityDataType.BankingAccounts,
}).then((res: GetDataIntegrityStatusResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.GetDataIntegrityStatusRequest](../../models/operations/getdataintegritystatusrequest.md) | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `retries`                                                                                            | [utils.RetryConfig](../../models/utils/retryconfig.md)                                               | :heavy_minus_sign:                                                                                   | Configuration to override the default retry behavior of the client.                                  |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.GetDataIntegrityStatusResponse](../../models/operations/getdataintegritystatusresponse.md)>**


## summaries

﻿The *Get data integrity summary* endpoint returns a [summary](https://docs.codat.io/lending-api#/schemas/DataIntegritySummary) of match results for a given data type filtered by a query string in the [Codat query language](https://docs.codat.io/using-the-api/querying). 

For example, if you wanted to see summary match results only for transactions after 1 December 2020, you could include a query parameter of `query=date>2020-12-01`.

The endpoint response includes only the summary results, not transactions. To view match data for transactions, use the [List data integrity details](https://docs.codat.io/lending-api#/operations/list-data-type-data-integrity-details) endpoint.

### Example Usage

```typescript
import { CodatLending } from "@codat/lending";
import { GetDataIntegritySummariesResponse } from "@codat/lending/dist/sdk/models/operations";
import { DataIntegrityDataType } from "@codat/lending/dist/sdk/models/shared";

const sdk = new CodatLending({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.dataIntegrity.summaries({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  dataType: DataIntegrityDataType.BankingAccounts,
  query: "hic",
}).then((res: GetDataIntegritySummariesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                  | [operations.GetDataIntegritySummariesRequest](../../models/operations/getdataintegritysummariesrequest.md) | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `retries`                                                                                                  | [utils.RetryConfig](../../models/utils/retryconfig.md)                                                     | :heavy_minus_sign:                                                                                         | Configuration to override the default retry behavior of the client.                                        |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.GetDataIntegritySummariesResponse](../../models/operations/getdataintegritysummariesresponse.md)>**

