# AccountingInvoices
(*accountingInvoices*)

## Overview

Invoices

### Available Operations

* [createAccountingInvoice](#createaccountinginvoice) - Create invoice

## createAccountingInvoice

The *Create invoice* endpoint creates a new [invoice](https://docs.codat.io/accounting-api#/schemas/Invoice) for a given company's connection.

[Invoices](https://docs.codat.io/accounting-api#/schemas/Invoice) are itemized records of goods sold or services provided to a customer.

**Integration-specific behaviour**

Required data may vary by integration. To see what data to post, first call [Get create/update invoice model](https://docs.codat.io/accounting-api#/operations/get-create-update-invoices-model).

Check out our [coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=invoices) for integrations that support creating an account.


### Example Usage

```typescript
import { CodatSyncCommerce } from "@codat/sync-for-commerce-version-1";
import { BilledToType, DataType, InvoiceStatus } from "@codat/sync-for-commerce-version-1/dist/sdk/models/shared";

(async() => {
  const sdk = new CodatSyncCommerce({
    security: {
      authHeader: "Basic BASE_64_ENCODED(API_KEY)",
    },
  });

  const res = await sdk.accountingInvoices.createAccountingInvoice({
    accountingInvoice: {
      amountDue: 9907.57,
      currency: "EUR",
      customerRef: {
        id: "<ID>",
      },
      dueDate: "2022-10-23T00:00:00.000Z",
      issueDate: "2022-10-23T00:00:00.000Z",
      lineItems: [
        {
          accountRef: {},
          itemRef: {
            id: "<ID>",
          },
          quantity: 1021.57,
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
            isBilledTo: BilledToType.Unknown,
            isRebilledTo: BilledToType.Project,
            projectRef: {
              id: "<ID>",
            },
            recordRef: {
              dataType: "journalEntry",
            },
          },
          trackingCategoryRefs: [
            {
              id: "<ID>",
            },
          ],
          unitAmount: 7432.38,
        },
      ],
      metadata: {},
      modifiedDate: "2022-10-23T00:00:00.000Z",
      paidOnDate: "2022-10-23T00:00:00.000Z",
      paymentAllocations: [
        {
          allocation: {
            allocatedOnDate: "2022-10-23T00:00:00.000Z",
            currency: "USD",
          },
          payment: {
            accountRef: {},
            currency: "EUR",
            paidOnDate: "2022-10-23T00:00:00.000Z",
          },
        },
      ],
      salesOrderRefs: [
        {
          dataType: DataType.Invoices,
        },
      ],
      sourceModifiedDate: "2022-10-23T00:00:00.000Z",
      status: InvoiceStatus.PartiallyPaid,
      supplementalData: {
        content: {
          "key": {
            "key": "string",
          },
        },
      },
      totalAmount: 1416.23,
      totalTaxAmount: 9069.87,
      withholdingTax: [
        {
          amount: 598.23,
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

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `request`                                                                                              | [operations.CreateAccountingInvoiceRequest](../../models/operations/createaccountinginvoicerequest.md) | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `retries`                                                                                              | [utils.RetryConfig](../../models/utils/retryconfig.md)                                                 | :heavy_minus_sign:                                                                                     | Configuration to override the default retry behavior of the client.                                    |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.CreateAccountingInvoiceResponse](../../models/operations/createaccountinginvoiceresponse.md)>**

