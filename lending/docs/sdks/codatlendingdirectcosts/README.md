# CodatLendingDirectCosts
(*loanWriteback.directCosts*)

## Overview

### Available Operations

* [getCreateModel](#getcreatemodel) - Get create direct cost model
* [create](#create) - Create direct cost

## getCreateModel

The *Get create direct cost model* endpoint returns the expected data for the request payload when creating a [direct cost](https://docs.codat.io/lending-api#/schemas/DirectCost) for a given company and integration.

[Direct costs](https://docs.codat.io/lending-api#/schemas/DirectCost) are purchases of items that are paid off at the point of the purchase.

**Integration-specific behaviour**

See the *response examples* for integration-specific indicative models.

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=directCosts) for integrations that support creating a direct cost.


### Example Usage

```typescript
import { CodatLending } from "@codat/lending";

const codatLending = new CodatLending({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatLending.loanWriteback.directCosts.getCreateModel({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  });
  
  // Handle the result
  console.log(result)
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CodatLendingCore } from "@codat/lending/core.js";
import { loanWritebackDirectCostsGetCreateModel } from "@codat/lending/funcs/loanWritebackDirectCostsGetCreateModel.js";

// Use `CodatLendingCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatLending = new CodatLendingCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await loanWritebackDirectCostsGetCreateModel(codatLending, {
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetCreateDirectCostsModelRequest](../../sdk/models/operations/getcreatedirectcostsmodelrequest.md)                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.PushOption](../../sdk/models/shared/pushoption.md)\>**

### Errors

| Error Object                | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.ErrorMessage         | 401,402,403,404,429,500,503 | application/json            |
| errors.SDKError             | 4xx-5xx                     | */*                         |


## create

The *Create direct cost* endpoint creates a new [direct cost](https://docs.codat.io/lending-api#/schemas/DirectCost) for a given company's connection.

[Direct costs](https://docs.codat.io/lending-api#/schemas/DirectCost) are the expenses associated with a business' operations. For example, purchases of raw materials that are paid off at the point of the purchase and service fees are considered direct costs.

**Integration-specific behaviour**

Required data may vary by integration. To see what data to post, first call [Get create direct cost model](https://docs.codat.io/lending-api#/operations/get-create-directCosts-model).

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=directCosts) for integrations that support creating an account.


### Example Usage

```typescript
import { CodatLending } from "@codat/lending";
import { Decimal } from "@codat/lending/sdk/types";

const codatLending = new CodatLending({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const result = await codatLending.loanWriteback.directCosts.create({
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
    directCostPrototype: {
      reference: "test ref",
      note: "directCost 21/03 09.20",
      contactRef: {
        id: "80000001-1671793885",
        dataType: "suppliers",
      },
      issueDate: "2023-03-21T10:19:52.223Z",
      currency: "USD",
      lineItems: [
        {
          description: "test description line 1",
          unitAmount: new Decimal("7"),
          quantity: new Decimal("1"),
          discountAmount: new Decimal("0"),
          discountPercentage: new Decimal("0"),
          subTotal: new Decimal("99"),
          taxAmount: new Decimal("360"),
          totalAmount: new Decimal("70"),
          accountRef: {
            id: "8000000D-1671793811",
            name: "Purchases - Hardware for Resale",
          },
          itemRef: {
            id: "80000001-1674566705",
            name: "item test",
          },
          trackingCategoryRefs: [
            {
              id: "80000001-1674553252",
              name: "Class 1",
            },
          ],
          tracking: {
            recordRefs: [
              {
                dataType: "trackingCategories",
              },
            ],
            invoiceTo: {
              dataType: "invoice",
            },
          },
        },
      ],
      paymentAllocations: [
        {
          payment: {
            note: "payment allocations note",
            reference: "payment allocations reference",
            accountRef: {
              id: "80000028-1671794219",
              name: "Bank Account 1",
            },
            currency: "USD",
            paidOnDate: "2023-01-28T10:19:52.223Z",
            totalAmount: new Decimal("54"),
          },
          allocation: {
            currency: "USD",
            currencyRate: new Decimal("0"),
            allocatedOnDate: "2023-01-29T10:19:52.223Z",
            totalAmount: new Decimal("88"),
          },
        },
      ],
      subTotal: new Decimal("362"),
      taxAmount: new Decimal("4"),
      totalAmount: new Decimal("366"),
    },
  });
  
  // Handle the result
  console.log(result)
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CodatLendingCore } from "@codat/lending/core.js";
import { loanWritebackDirectCostsCreate } from "@codat/lending/funcs/loanWritebackDirectCostsCreate.js";
import { Decimal } from "@codat/lending/sdk/types";

// Use `CodatLendingCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const codatLending = new CodatLendingCore({
  authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});

async function run() {
  const res = await loanWritebackDirectCostsCreate(codatLending, {
    companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
    connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
    directCostPrototype: {
      reference: "test ref",
      note: "directCost 21/03 09.20",
      contactRef: {
        id: "80000001-1671793885",
        dataType: "suppliers",
      },
      issueDate: "2023-03-21T10:19:52.223Z",
      currency: "USD",
      lineItems: [
        {
          description: "test description line 1",
          unitAmount: new Decimal("7"),
          quantity: new Decimal("1"),
          discountAmount: new Decimal("0"),
          discountPercentage: new Decimal("0"),
          subTotal: new Decimal("99"),
          taxAmount: new Decimal("360"),
          totalAmount: new Decimal("70"),
          accountRef: {
            id: "8000000D-1671793811",
            name: "Purchases - Hardware for Resale",
          },
          itemRef: {
            id: "80000001-1674566705",
            name: "item test",
          },
          trackingCategoryRefs: [
            {
              id: "80000001-1674553252",
              name: "Class 1",
            },
          ],
          tracking: {
            recordRefs: [
              {
                dataType: "trackingCategories",
              },
            ],
            invoiceTo: {
              dataType: "invoice",
            },
          },
        },
      ],
      paymentAllocations: [
        {
          payment: {
            note: "payment allocations note",
            reference: "payment allocations reference",
            accountRef: {
              id: "80000028-1671794219",
              name: "Bank Account 1",
            },
            currency: "USD",
            paidOnDate: "2023-01-28T10:19:52.223Z",
            totalAmount: new Decimal("54"),
          },
          allocation: {
            currency: "USD",
            currencyRate: new Decimal("0"),
            allocatedOnDate: "2023-01-29T10:19:52.223Z",
            totalAmount: new Decimal("88"),
          },
        },
      ],
      subTotal: new Decimal("362"),
      taxAmount: new Decimal("4"),
      totalAmount: new Decimal("366"),
    },
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateDirectCostRequest](../../sdk/models/operations/createdirectcostrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.AccountingCreateDirectCostResponse](../../sdk/models/shared/accountingcreatedirectcostresponse.md)\>**

### Errors

| Error Object                    | Status Code                     | Content Type                    |
| ------------------------------- | ------------------------------- | ------------------------------- |
| errors.ErrorMessage             | 400,401,402,403,404,429,500,503 | application/json                |
| errors.SDKError                 | 4xx-5xx                         | */*                             |
