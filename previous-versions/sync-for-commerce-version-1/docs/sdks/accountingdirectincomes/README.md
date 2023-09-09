# accountingDirectIncomes

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
import { CreateAccountingDirectIncomeResponse } from "@codat/sync-for-commerce-version-1/dist/sdk/models/operations";

const sdk = new CodatSyncCommerce({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.accountingDirectIncomes.createAccountingDirectIncome({
  accountingDirectIncome: {
    contactRef: {
      dataType: "tempora",
      id: "5626d436-813f-416d-9f5f-ce6c556146c3",
    },
    currency: "EUR",
    currencyRate: 1324.87,
    id: "50fb008c-42e1-441a-ac36-6c8dd6b14429",
    issueDate: "2022-10-23T00:00:00.000Z",
    lineItems: [
      {
        accountRef: {
          id: "7474778a-7bd4-466d-a8c1-0ab3cdca4251",
          name: "William Goodwin",
        },
        description: "aspernatur",
        discountAmount: 1970.54,
        discountPercentage: 7791.92,
        itemRef: {
          id: "7e0bc717-8e47-496f-aa70-c688282aa482",
          name: "Sue Corkery",
        },
        quantity: 1871.31,
        subTotal: 1294.12,
        taxAmount: 9039.84,
        taxRateRef: {
          effectiveTaxRate: 5789.22,
          id: "817ee17c-be61-4e6b-bb95-bc0ab3c20c4f",
          name: "Joy Labadie",
        },
        totalAmount: 8577.23,
        trackingCategoryRefs: [
          {
            id: "871f99dd-2efd-4121-aa6f-1e674bdb04f1",
            name: "Delores Hermiston IV",
          },
        ],
        unitAmount: 1852.32,
      },
    ],
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "2022-10-23T00:00:00.000Z",
    note: "ex",
    paymentAllocations: [
      {
        allocation: {
          allocatedOnDate: "2022-10-23T00:00:00.000Z",
          currency: "EUR",
          currencyRate: 6802.7,
          totalAmount: 996.15,
        },
        payment: {
          accountRef: {
            id: "9f1d1705-1339-4d08-886a-1840394c2607",
            name: "Elisa Mosciski",
          },
          currency: "USD",
          currencyRate: 9903.45,
          id: "0642dac7-af51-45cc-813a-a63aae8d6786",
          note: "labore",
          paidOnDate: "2022-10-23T00:00:00.000Z",
          reference: "facilis",
          totalAmount: 7382.27,
        },
      },
    ],
    reference: "commodi",
    sourceModifiedDate: "2022-10-23T00:00:00.000Z",
    subTotal: 3605.45,
    supplementalData: {
      content: {
        "reiciendis": {
          "assumenda": "nemo",
        },
      },
    },
    taxAmount: 9249.67,
    totalAmount: 3975.33,
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  timeoutInMinutes: 46007,
}).then((res: CreateAccountingDirectIncomeResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                        | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                        | [operations.CreateAccountingDirectIncomeRequest](../../models/operations/createaccountingdirectincomerequest.md) | :heavy_check_mark:                                                                                               | The request object to use for the request.                                                                       |
| `retries`                                                                                                        | [utils.RetryConfig](../../models/utils/retryconfig.md)                                                           | :heavy_minus_sign:                                                                                               | Configuration to override the default retry behavior of the client.                                              |
| `config`                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                     | :heavy_minus_sign:                                                                                               | Available config options for making requests.                                                                    |


### Response

**Promise<[operations.CreateAccountingDirectIncomeResponse](../../models/operations/createaccountingdirectincomeresponse.md)>**

