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
    additionalTaxAmount: 3927.85,
    additionalTaxPercentage: 9255.97,
    allocatedOnDate: "2022-10-23T00:00:00.000Z",
    creditNoteNumber: "ab",
    currency: "USD",
    currencyRate: 871.29,
    customerRef: {
      companyName: "deserunt",
      id: "05dfc2dd-f7cc-478c-a1ba-928fc816742c",
    },
    discountPercentage: 7369.18,
    id: "73920592-9396-4fea-b596-eb10faaa2352",
    issueDate: "2022-10-23T00:00:00.000Z",
    lineItems: [
      {
        accountRef: {
          id: "5955907a-ff1a-43a2-ba94-67739251aa52",
          name: "Jimmy Wiegand",
        },
        description: "possimus",
        discountAmount: 135.71,
        discountPercentage: 971.01,
        isDirectIncome: false,
        itemRef: {
          id: "9da1ffe7-8f09-47b0-874f-15471b5e6e13",
          name: "Virgil Mante",
        },
        quantity: 5089.69,
        subTotal: 5232.48,
        taxAmount: 9167.23,
        taxRateRef: {
          effectiveTaxRate: 939.4,
          id: "e91e450a-d2ab-4d44-a698-02d502a94bb4",
          name: "Andre Franey",
        },
        totalAmount: 3960.98,
        tracking: {
          categoryRefs: [
            {
              id: "9e9a3efa-77df-4b14-8d66-ae395efb9ba8",
              name: "Timmy Feeney",
            },
          ],
          customerRef: {
            companyName: "vel",
            id: "997074ba-4469-4b6e-a141-959890afa563",
          },
          isBilledTo: BilledToType.Project,
          isRebilledTo: BilledToType.Unknown,
          projectRef: {
            id: "516fe4c8-b711-4e5b-bfd2-ed028921cddc",
            name: "Miriam Connelly Jr.",
          },
          recordRef: {
            dataType: "transfer",
            id: "b576b0d5-f0d3-40c5-bbb2-587053202c73",
          },
        },
        trackingCategoryRefs: [
          {
            id: "d5fe9b90-c289-409b-bfe4-9a8d9cbf4863",
            name: "Rosa Dibbert",
          },
        ],
        unitAmount: 5695.74,
      },
    ],
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "2022-10-23T00:00:00.000Z",
    note: "voluptate",
    paymentAllocations: [
      {
        allocation: {
          allocatedOnDate: "2022-10-23T00:00:00.000Z",
          currency: "EUR",
          currencyRate: 2274.14,
          totalAmount: 6805.45,
        },
        payment: {
          accountRef: {
            id: "4100674e-bf69-4280-91ba-77a89ebf737a",
            name: "Mrs. Ray Collins",
          },
          currency: "EUR",
          currencyRate: 3200.17,
          id: "e6a95d8a-0d44-46ce-aaf7-a73cf3be453f",
          note: "totam",
          paidOnDate: "2022-10-23T00:00:00.000Z",
          reference: "sit",
          totalAmount: 7115.84,
        },
      },
    ],
    remainingCredit: 2074.7,
    sourceModifiedDate: "2022-10-23T00:00:00.000Z",
    status: CreditNoteStatus.Submitted,
    subTotal: 7304.42,
    supplementalData: {
      content: {
        "voluptas": {
          "deserunt": "quam",
        },
      },
    },
    totalAmount: 2148.8,
    totalDiscount: 2776.28,
    totalTaxAmount: 1864.58,
    withholdingTax: [
      {
        amount: 5867.84,
        name: "Miss Jody Rogahn",
      },
    ],
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  timeoutInMinutes: 276894,
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

