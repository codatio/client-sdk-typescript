# Accounts
(*accounts*)

## Overview

Accounts

### Available Operations

* [create](#create) - Create account
* [get](#get) - Get account
* [getCreateModel](#getcreatemodel) - Get create account model
* [list](#list) - List accounts

## create

The *Create account* endpoint creates a new [account](https://docs.codat.io/sync-for-payroll-api#/schemas/Account) for a given company's connection.

[Accounts](https://docs.codat.io/sync-for-payroll-api#/schemas/Account) are the categories a business uses to record accounting transactions.

**Integration-specific behaviour**

Required data may vary by integration. To see what data to post, first call [Get create account model](https://docs.codat.io/sync-for-payroll-api#/operations/get-create-chartOfAccounts-model).

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=chartOfAccounts) for integrations that support creating an account.


### Example Usage

```typescript
import { CodatSyncPayroll } from "@codat/sync-for-payroll";
import { AccountStatus, AccountType } from "@codat/sync-for-payroll/dist/sdk/models/shared";

(async() => {
  const sdk = new CodatSyncPayroll({
    security: {
      authHeader: "Basic BASE_64_ENCODED(API_KEY)",
    },
  });

  const res = await sdk.accounts.create({
    accountPrototype: {
      currency: "USD",
      currentBalance: 0,
      description: "Invoices the business has issued but has not yet collected payment on.",
      fullyQualifiedCategory: "Asset.Current",
      fullyQualifiedName: "Cash On Hand",
      name: "Accounts Receivable",
      nominalCode: "610",
      status: AccountStatus.Active,
      supplementalData: {
        content: {
          "key": {
            "key": "string",
          },
        },
      },
      type: AccountType.Asset,
      validDatatypeLinks: [
        {
          links: [
            "string",
          ],
        },
      ],
    },
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.CreateAccountRequest](../../sdk/models/operations/createaccountrequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `retries`                                                                              | [utils.RetryConfig](../../internal/utils/retryconfig.md)                               | :heavy_minus_sign:                                                                     | Configuration to override the default retry behavior of the client.                    |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.CreateAccountResponse](../../sdk/models/operations/createaccountresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## get

The *Get account* endpoint returns a single account for a given `accountId`.

[Accounts](https://docs.codat.io/sync-for-payroll-api#/schemas/Account) are the categories a business uses to record accounting transactions.

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=chartOfAccounts) for integrations that support getting a specific account.

Before using this endpoint, you must have [retrieved data for the company](https://docs.codat.io/sync-for-payroll-api#/operations/refresh-company-data).


### Example Usage

```typescript
import { CodatSyncPayroll } from "@codat/sync-for-payroll";

(async() => {
  const sdk = new CodatSyncPayroll({
    security: {
      authHeader: "Basic BASE_64_ENCODED(API_KEY)",
    },
  });

  const res = await sdk.accounts.get({
    accountId: "7110701885",
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [operations.GetAccountRequest](../../sdk/models/operations/getaccountrequest.md) | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `retries`                                                                        | [utils.RetryConfig](../../internal/utils/retryconfig.md)                         | :heavy_minus_sign:                                                               | Configuration to override the default retry behavior of the client.              |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.GetAccountResponse](../../sdk/models/operations/getaccountresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getCreateModel

The *Get create account model* endpoint returns the expected data for the request payload when creating an [account](https://docs.codat.io/sync-for-payroll-api#/schemas/Account) for a given company and integration.
    
[Accounts](https://docs.codat.io/sync-for-payroll-api#/schemas/Account) are the categories a business uses to record accounting transactions.
    
**Integration-specific behaviour**
    
See the *response examples* for integration-specific indicative models.
    
Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=chartOfAccounts) for integrations that support creating an account.


### Example Usage

```typescript
import { CodatSyncPayroll } from "@codat/sync-for-payroll";

(async() => {
  const sdk = new CodatSyncPayroll({
    security: {
      authHeader: "Basic BASE_64_ENCODED(API_KEY)",
    },
  });

  const res = await sdk.accounts.getCreateModel({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                | [operations.GetCreateAccountsModelRequest](../../sdk/models/operations/getcreateaccountsmodelrequest.md) | :heavy_check_mark:                                                                                       | The request object to use for the request.                                                               |
| `retries`                                                                                                | [utils.RetryConfig](../../internal/utils/retryconfig.md)                                                 | :heavy_minus_sign:                                                                                       | Configuration to override the default retry behavior of the client.                                      |
| `config`                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                             | :heavy_minus_sign:                                                                                       | Available config options for making requests.                                                            |


### Response

**Promise<[operations.GetCreateAccountsModelResponse](../../sdk/models/operations/getcreateaccountsmodelresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## list

﻿The *List accounts* endpoint returns a list of [accounts](https://docs.codat.io/sync-for-payroll-api#/schemas/Account) for a given company's connection.

[Accounts](https://docs.codat.io/sync-for-payroll-api#/schemas/Account) are the categories a business uses to record accounting transactions.

Before using this endpoint, you must have [retrieved data for the company](https://docs.codat.io/sync-for-payroll-api#/operations/refresh-company-data).

### Example Usage

```typescript
import { CodatSyncPayroll } from "@codat/sync-for-payroll";

(async() => {
  const sdk = new CodatSyncPayroll({
    security: {
      authHeader: "Basic BASE_64_ENCODED(API_KEY)",
    },
  });

  const res = await sdk.accounts.list({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
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

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.ListAccountsRequest](../../sdk/models/operations/listaccountsrequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `retries`                                                                            | [utils.RetryConfig](../../internal/utils/retryconfig.md)                             | :heavy_minus_sign:                                                                   | Configuration to override the default retry behavior of the client.                  |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.ListAccountsResponse](../../sdk/models/operations/listaccountsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |
