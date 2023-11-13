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
import { BilledToType, CreditNoteStatus } from "@codat/sync-for-commerce-version-1/dist/sdk/models/shared";

(async() => {
  const sdk = new CodatSyncCommerce({
    security: {
      authHeader: "Basic BASE_64_ENCODED(API_KEY)",
    },
  });

  const res = await sdk.accountingCreditNotes.createAccountingCreditNote({
    accountingCreditNote: {
      allocatedOnDate: "2022-10-23T00:00:00.000Z",
      currency: "GBP",
      customerRef: {
        id: "<ID>",
      },
      discountPercentage: 3961.39,
      issueDate: "2022-10-23T00:00:00.000Z",
      lineItems: [
        {
          accountRef: {},
          itemRef: {
            id: "<ID>",
          },
          quantity: 1740.95,
          taxRateRef: {},
          tracking: {
            categoryRefs: [
              {
                id: "<ID>",
              },
            ],
            customerRef: {
              id: "<ID>",
            },
            isBilledTo: BilledToType.Project,
            isRebilledTo: BilledToType.Project,
            projectRef: {
              id: "<ID>",
            },
            recordRef: {
              dataType: "accountTransaction",
            },
          },
          trackingCategoryRefs: [
            {
              id: "<ID>",
            },
          ],
          unitAmount: 6472.07,
        },
      ],
      metadata: {},
      modifiedDate: "2022-10-23T00:00:00.000Z",
      paymentAllocations: [
        {
          allocation: {
            allocatedOnDate: "2022-10-23T00:00:00.000Z",
            currency: "EUR",
          },
          payment: {
            accountRef: {},
            currency: "USD",
            paidOnDate: "2022-10-23T00:00:00.000Z",
          },
        },
      ],
      remainingCredit: 3693.65,
      sourceModifiedDate: "2022-10-23T00:00:00.000Z",
      status: CreditNoteStatus.Void,
      subTotal: 1915.04,
      supplementalData: {
        content: {
          "key": {
            "key": "string",
          },
        },
      },
      totalAmount: 5893.9,
      totalDiscount: 579.23,
      totalTaxAmount: 3881.42,
      withholdingTax: [
        {
          amount: 7369.44,
          name: "string",
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

| Parameter                                                                                                        | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                        | [operations.CreateAccountingCreditNoteRequest](../../sdk/models/operations/createaccountingcreditnoterequest.md) | :heavy_check_mark:                                                                                               | The request object to use for the request.                                                                       |
| `retries`                                                                                                        | [utils.RetryConfig](../../internal/utils/retryconfig.md)                                                         | :heavy_minus_sign:                                                                                               | Configuration to override the default retry behavior of the client.                                              |
| `config`                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                     | :heavy_minus_sign:                                                                                               | Available config options for making requests.                                                                    |


### Response

**Promise<[operations.CreateAccountingCreditNoteResponse](../../sdk/models/operations/createaccountingcreditnoteresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |
