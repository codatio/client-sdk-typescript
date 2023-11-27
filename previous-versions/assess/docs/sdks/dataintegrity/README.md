# DataIntegrity
(*dataIntegrity*)

## Overview

Match mutable accounting data with immutable banking data to increase confidence in financial data

### Available Operations

* [details](#details) - List data type data integrity
* [status](#status) - Get data integrity status
* [summary](#summary) - Get data integrity summary

## details

Gets record-by-record match results for a given company and datatype, optionally restricted by a Codat query string.

### Example Usage

```typescript
import { CodatAssess } from "@codat/assess";
import { DataIntegrityDataType } from "@codat/assess/dist/sdk/models/shared";

(async() => {
  const sdk = new CodatAssess({
    security: {
      authHeader: "Basic BASE_64_ENCODED(API_KEY)",
    },
  });

  const res = await sdk.dataIntegrity.details({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    dataType: DataIntegrityDataType.BankingAccounts,
    orderBy: "-modifiedDate",
    page: 1,
    pageSize: 100,
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                    | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                    | [operations.ListDataTypeDataIntegrityDetailsRequest](../../sdk/models/operations/listdatatypedataintegritydetailsrequest.md) | :heavy_check_mark:                                                                                                           | The request object to use for the request.                                                                                   |
| `retries`                                                                                                                    | [utils.RetryConfig](../../internal/utils/retryconfig.md)                                                                     | :heavy_minus_sign:                                                                                                           | Configuration to override the default retry behavior of the client.                                                          |
| `config`                                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                 | :heavy_minus_sign:                                                                                                           | Available config options for making requests.                                                                                |


### Response

**Promise<[operations.ListDataTypeDataIntegrityDetailsResponse](../../sdk/models/operations/listdatatypedataintegritydetailsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## status

Gets match status for a given company and datatype.

### Example Usage

```typescript
import { CodatAssess } from "@codat/assess";
import { DataIntegrityDataType } from "@codat/assess/dist/sdk/models/shared";

(async() => {
  const sdk = new CodatAssess({
    security: {
      authHeader: "Basic BASE_64_ENCODED(API_KEY)",
    },
  });

  const res = await sdk.dataIntegrity.status({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    dataType: DataIntegrityDataType.BankingAccounts,
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                | [operations.GetDataIntegrityStatusRequest](../../sdk/models/operations/getdataintegritystatusrequest.md) | :heavy_check_mark:                                                                                       | The request object to use for the request.                                                               |
| `retries`                                                                                                | [utils.RetryConfig](../../internal/utils/retryconfig.md)                                                 | :heavy_minus_sign:                                                                                       | Configuration to override the default retry behavior of the client.                                      |
| `config`                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                             | :heavy_minus_sign:                                                                                       | Available config options for making requests.                                                            |


### Response

**Promise<[operations.GetDataIntegrityStatusResponse](../../sdk/models/operations/getdataintegritystatusresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## summary

Gets match summary for a given company and datatype, optionally restricted by a Codat query string.

### Example Usage

```typescript
import { CodatAssess } from "@codat/assess";
import { DataIntegrityDataType } from "@codat/assess/dist/sdk/models/shared";

(async() => {
  const sdk = new CodatAssess({
    security: {
      authHeader: "Basic BASE_64_ENCODED(API_KEY)",
    },
  });

  const res = await sdk.dataIntegrity.summary({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    dataType: DataIntegrityDataType.BankingAccounts,
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                      | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                      | [operations.GetDataIntegritySummariesRequest](../../sdk/models/operations/getdataintegritysummariesrequest.md) | :heavy_check_mark:                                                                                             | The request object to use for the request.                                                                     |
| `retries`                                                                                                      | [utils.RetryConfig](../../internal/utils/retryconfig.md)                                                       | :heavy_minus_sign:                                                                                             | Configuration to override the default retry behavior of the client.                                            |
| `config`                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                   | :heavy_minus_sign:                                                                                             | Available config options for making requests.                                                                  |


### Response

**Promise<[operations.GetDataIntegritySummariesResponse](../../sdk/models/operations/getdataintegritysummariesresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |
