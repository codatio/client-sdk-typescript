# AccountingCreditNotes

## Overview

Credit notes

### Available Operations

* [createAccountingCreditNote](#createaccountingcreditnote) - Create credit note

## createAccountingCreditNote

The *Create credit note* endpoint creates a new [credit note](https://docs.codat.io/accounting-api#/schemas/CreditNote) for a given company's connection.

[Credit notes](https://docs.codat.io/accounting-api#/schemas/CreditNote) are issued to a customer to indicate debt, typically with reference to a previously issued invoice and/or purchase.

**Integration-specific behaviour**

Required data may vary by integration. To see what data to post, first call [Get create/update credit note model](https://docs.codat.io/accounting-api#/operations/get-create-update-creditNotes-model).

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=creditNotes) for integrations that support creating an account.


### Example Usage

```typescript
import { CodatSyncCommerce } from "@codat/sync-for-commerce-version-1";
import { CreateAccountingCreditNoteResponse } from "@codat/sync-for-commerce-version-1/dist/sdk/models/operations";
import { BilledToType, CreditNoteStatus } from "@codat/sync-for-commerce-version-1/dist/sdk/models/shared";

const sdk = new CodatSyncCommerce({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.accountingCreditNotes.createAccountingCreditNote({
  accountingCreditNote: {
    additionalTaxAmount: 3834.41,
    additionalTaxPercentage: 4776.65,
    allocatedOnDate: "2022-10-23T00:00:00.000Z",
    creditNoteNumber: "placeat",
    currency: "USD",
    currencyRate: 4799.77,
    customerRef: {
      companyName: "excepturi",
      id: "6ed151a0-5dfc-42dd-b7cc-78ca1ba928fc",
    },
    discountPercentage: 5218.48,
    id: "16742cb7-3920-4592-9396-fea7596eb10f",
    issueDate: "2022-10-23T00:00:00.000Z",
    lineItems: [
      {
        accountRef: {
          id: "aa2352c5-9559-407a-bf1a-3a2fa9467739",
          name: "Beatrice Brown",
        },
        description: "enim",
        discountAmount: 1381.83,
        discountPercentage: 7783.46,
        isDirectIncome: false,
        itemRef: {
          id: "3f5ad019-da1f-4fe7-8f09-7b0074f15471",
          name: "Bill Thompson",
        },
        quantity: 641.47,
        subTotal: 2168.22,
        taxAmount: 6924.72,
        taxRateRef: {
          effectiveTaxRate: 5651.89,
          id: "9d488e1e-91e4-450a-92ab-d44269802d50",
          name: "Sonya Marks",
        },
        totalAmount: 7351.94,
        tracking: {
          categoryRefs: [
            {
              id: "4f63c969-e9a3-4efa-b7df-b14cd66ae395",
              name: "Toby Pouros",
            },
          ],
          customerRef: {
            companyName: "id",
            id: "88f3a669-9707-44ba-8469-b6e214195989",
          },
          isBilledTo: BilledToType.Unknown,
          isRebilledTo: BilledToType.NotApplicable,
          projectRef: {
            id: "fa563e25-16fe-44c8-b711-e5b7fd2ed028",
            name: "Victor Casper",
          },
          recordRef: {
            dataType: "transfer",
            id: "c692601f-b576-4b0d-9f0d-30c5fbb25870",
          },
        },
        trackingCategoryRefs: [
          {
            id: "53202c73-d5fe-49b9-8c28-909b3fe49a8d",
            name: "Loren Renner",
          },
        ],
        unitAmount: 5542.42,
      },
    ],
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "2022-10-23T00:00:00.000Z",
    note: "dolorem",
    paymentAllocations: [
      {
        allocation: {
          allocatedOnDate: "2022-10-23T00:00:00.000Z",
          currency: "GBP",
          currencyRate: 1861.93,
          totalAmount: 2187.49,
        },
        payment: {
          accountRef: {
            id: "f9b77f3a-4100-4674-abf6-9280d1ba77a8",
            name: "Terence Rau",
          },
          currency: "GBP",
          currencyRate: 4560.15,
          id: "ae4203ce-5e6a-495d-8a0d-446ce2af7a73",
          note: "quisquam",
          paidOnDate: "2022-10-23T00:00:00.000Z",
          reference: "amet",
          totalAmount: 7308.56,
        },
      },
    ],
    remainingCredit: 8802.98,
    sourceModifiedDate: "2022-10-23T00:00:00.000Z",
    status: CreditNoteStatus.Draft,
    subTotal: 2133.12,
    supplementalData: {
      content: {
        "sapiente": {
          "totam": "nihil",
        },
      },
    },
    totalAmount: 256.62,
    totalDiscount: 7115.84,
    totalTaxAmount: 2074.7,
    withholdingTax: [
      {
        amount: 1536.94,
        name: "Kelli Hintz",
      },
    ],
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  timeoutInMinutes: 214880,
}).then((res: CreateAccountingCreditNoteResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                    | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                    | [operations.CreateAccountingCreditNoteRequest](../../models/operations/createaccountingcreditnoterequest.md) | :heavy_check_mark:                                                                                           | The request object to use for the request.                                                                   |
| `retries`                                                                                                    | [utils.RetryConfig](../../models/utils/retryconfig.md)                                                       | :heavy_minus_sign:                                                                                           | Configuration to override the default retry behavior of the client.                                          |
| `config`                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                 | :heavy_minus_sign:                                                                                           | Available config options for making requests.                                                                |


### Response

**Promise<[operations.CreateAccountingCreditNoteResponse](../../models/operations/createaccountingcreditnoteresponse.md)>**

