# Accounts
(*accounts*)

## Overview

Accounts

### Available Operations

* [create](#create) - Create account
* [getCreateModel](#getcreatemodel) - Get create account model

## create

The *Create account* endpoint creates a new [account](https://docs.codat.io/sync-for-expenses-api#/schemas/Account) for a given company's connection.

[Accounts](https://docs.codat.io/sync-for-expenses-api#/schemas/Account) are the categories a business uses to record accounting transactions.

**Integration-specific behaviour**

Required data may vary by integration. To see what data to post, first call [Get create account model](https://docs.codat.io/sync-for-expenses-api#/operations/get-create-chartOfAccounts-model).

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=chartOfAccounts) for integrations that support creating an account.


### Example Usage

```typescript
import { CodatSyncExpenses } from "@codat/sync-for-expenses";
import { AccountStatus, AccountType } from "@codat/sync-for-expenses/dist/sdk/models/shared";

(async() => {
  const sdk = new CodatSyncExpenses({
    security: {
      authHeader: "Basic BASE_64_ENCODED(API_KEY)",
    },
  });

  const res = await sdk.accounts.create({
    account: {
      currency: "USD",
      currentBalance: 0,
      description: "Invoices the business has issued but has not yet collected payment on.",
      fullyQualifiedCategory: "Asset.Current",
      fullyQualifiedName: "Cash On Hand",
      id: "1b6266d1-1e44-46c5-8eb5-a8f98e03124e",
      metadata: {},
      modifiedDate: "2022-10-23T00:00:00.000Z",
      name: "Accounts Receivable",
      nominalCode: "610",
      sourceModifiedDate: "2022-10-23T00:00:00.000Z",
      status: AccountStatus.Active,
      type: AccountType.Asset,
      validDatatypeLinks: [
        {
          links: [
            "Money",
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

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.CreateAccountRequest](../../models/operations/createaccountrequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `retries`                                                                          | [utils.RetryConfig](../../models/utils/retryconfig.md)                             | :heavy_minus_sign:                                                                 | Configuration to override the default retry behavior of the client.                |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.CreateAccountResponse](../../models/operations/createaccountresponse.md)>**


## getCreateModel

The *Get create account model* endpoint returns the expected data for the request payload when creating an [account](https://docs.codat.io/sync-for-expenses-api#/schemas/Account) for a given company and integration.

[Accounts](https://docs.codat.io/sync-for-expenses-api#/schemas/Account) are the categories a business uses to record accounting transactions.

**Integration-specific behaviour**

See the *response examples* for integration-specific indicative models.

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=chartOfAccounts) for integrations that support creating an account.


### Example Usage

```typescript
import { CodatSyncExpenses } from "@codat/sync-for-expenses";

(async() => {
  const sdk = new CodatSyncExpenses({
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

| Parameter                                                                                                          | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                          | [operations.GetCreateChartOfAccountsModelRequest](../../models/operations/getcreatechartofaccountsmodelrequest.md) | :heavy_check_mark:                                                                                                 | The request object to use for the request.                                                                         |
| `retries`                                                                                                          | [utils.RetryConfig](../../models/utils/retryconfig.md)                                                             | :heavy_minus_sign:                                                                                                 | Configuration to override the default retry behavior of the client.                                                |
| `config`                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                       | :heavy_minus_sign:                                                                                                 | Available config options for making requests.                                                                      |


### Response

**Promise<[operations.GetCreateChartOfAccountsModelResponse](../../models/operations/getcreatechartofaccountsmodelresponse.md)>**

