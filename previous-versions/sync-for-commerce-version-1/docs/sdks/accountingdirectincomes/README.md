# AccountingDirectIncomes
(*accountingDirectIncomes*)

## Overview

Direct incomes

### Available Operations

* [createAccountingDirectIncome](#createaccountingdirectincome) - Create direct income

## createAccountingDirectIncome

The *Create direct income* endpoint creates a new [direct income](https://docs.codat.io/accounting-api#/schemas/DirectIncome) for a given company's connection.

[Direct incomes](https://docs.codat.io/accounting-api#/schemas/DirectIncome) are sales of items directly to a customer where payment is received at the point of the sale. For example, cash sales of items to a customer, referral commissions, and service fee refunds are considered direct incomes.

**Integration-specific behaviour**

Required data may vary by integration. To see what data to post, first call [Get create direct income model](https://docs.codat.io/accounting-api#/operations/get-create-directIncomes-model).

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=directIncomes) for integrations that support creating an account.


### Example Usage

```typescript
import { CodatSyncCommerce } from "@codat/sync-for-commerce-version-1";
import { DataType } from "@codat/sync-for-commerce-version-1/dist/sdk/models/shared";

async function run() {
  const sdk = new CodatSyncCommerce({
    security: {
      authHeader: "Basic BASE_64_ENCODED(API_KEY)",
    },
  });

  const res = await sdk.accountingDirectIncomes.createAccountingDirectIncome({
    accountingDirectIncome: {
      contactRef: {
        dataType: DataType.Invoices,
        id: "<ID>",
      },
      currency: "GBP",
      issueDate: "2022-10-23T00:00:00Z",
      lineItems: [
        {
          accountRef: {},
          itemRef: {
            id: "<ID>",
          },
          quantity: 3642.55,
          taxRateRef: {},
          trackingCategoryRefs: [
            {
              id: "<ID>",
            },
          ],
          unitAmount: 7950.78,
        },
      ],
      metadata: {},
      modifiedDate: "2022-10-23T00:00:00Z",
      paymentAllocations: [
        {
          allocation: {
            allocatedOnDate: "2022-10-23T00:00:00Z",
            currency: "EUR",
          },
          payment: {
            accountRef: {},
            currency: "USD",
            paidOnDate: "2022-10-23T00:00:00Z",
          },
        },
      ],
      sourceModifiedDate: "2022-10-23T00:00:00Z",
      subTotal: 5786.44,
      supplementalData: {
        content: {
          "key": {
            "key": "string",
          },
        },
      },
      taxAmount: 2812.91,
      totalAmount: 6636.11,
    },
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                            | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                            | [operations.CreateAccountingDirectIncomeRequest](../../sdk/models/operations/createaccountingdirectincomerequest.md) | :heavy_check_mark:                                                                                                   | The request object to use for the request.                                                                           |
| `retries`                                                                                                            | [utils.RetryConfig](../../internal/utils/retryconfig.md)                                                             | :heavy_minus_sign:                                                                                                   | Configuration to override the default retry behavior of the client.                                                  |
| `config`                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                         | :heavy_minus_sign:                                                                                                   | Available config options for making requests.                                                                        |


### Response

**Promise<[operations.CreateAccountingDirectIncomeResponse](../../sdk/models/operations/createaccountingdirectincomeresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |
