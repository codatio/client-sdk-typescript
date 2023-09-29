# AccountingCreditNotes
(*accountingCreditNotes*)

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
    additionalTaxAmount: 6733.79,
    additionalTaxPercentage: 612.72,
    allocatedOnDate: "2022-10-23T00:00:00.000Z",
    creditNoteNumber: "lavender Planner",
    currency: "USD",
    currencyRate: 2314.32,
    customerRef: {
      companyName: "Swaniawski - Okuneva",
      id: "<ID>",
    },
    discountPercentage: 1210.61,
    id: "<ID>",
    issueDate: "2022-10-23T00:00:00.000Z",
    lineItems: [
      {
        accountRef: {
          id: "<ID>",
          name: "candela Metal policy",
        },
        description: "Universal 4th generation model",
        discountAmount: 6593.55,
        discountPercentage: 3629.12,
        isDirectIncome: false,
        itemRef: {
          id: "<ID>",
          name: "Titusville Car",
        },
        quantity: 9339.43,
        subTotal: 9776.2,
        taxAmount: 4570.33,
        taxRateRef: {
          effectiveTaxRate: 2840.32,
          id: "<ID>",
          name: "Nissan Shirt",
        },
        totalAmount: 3862.17,
        tracking: {
          categoryRefs: [
            {
              id: "<ID>",
              name: "system",
            },
          ],
          customerRef: {
            companyName: "Labadie and Sons",
            id: "<ID>",
          },
          isBilledTo: BilledToType.Unknown,
          isRebilledTo: BilledToType.NotApplicable,
          projectRef: {
            id: "<ID>",
            name: "Mann second siemens",
          },
          recordRef: {
            dataType: "transfer",
            id: "<ID>",
          },
        },
        trackingCategoryRefs: [
          {
            id: "<ID>",
            name: "scalable",
          },
        ],
        unitAmount: 9063.02,
      },
    ],
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "2022-10-23T00:00:00.000Z",
    note: "Conroy fuzzy Mobility",
    paymentAllocations: [
      {
        allocation: {
          allocatedOnDate: "2022-10-23T00:00:00.000Z",
          currency: "EUR",
          currencyRate: 5905.56,
          totalAmount: 8276.36,
        },
        payment: {
          accountRef: {
            id: "<ID>",
            name: "synthesizing becquerel Operations",
          },
          currency: "GBP",
          currencyRate: 8697.42,
          id: "<ID>",
          note: "Convertible",
          paidOnDate: "2022-10-23T00:00:00.000Z",
          reference: "Grenada networks Fantastic",
          totalAmount: 5575.36,
        },
      },
    ],
    remainingCredit: 4029.48,
    sourceModifiedDate: "2022-10-23T00:00:00.000Z",
    status: CreditNoteStatus.Draft,
    subTotal: 8342.79,
    supplementalData: {
      content: {
        "quos": {
          "nihil": "Concrete",
        },
      },
    },
    totalAmount: 1868.28,
    totalDiscount: 4123.14,
    totalTaxAmount: 8369.46,
    withholdingTax: [
      {
        amount: 879.63,
        name: "male Bedfordshire architectures",
      },
    ],
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  timeoutInMinutes: 814888,
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

