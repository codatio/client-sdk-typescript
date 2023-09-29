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
import { CreateAccountingInvoiceResponse } from "@codat/sync-for-commerce-version-1/dist/sdk/models/operations";
import { BilledToType, DataType, InvoiceStatus } from "@codat/sync-for-commerce-version-1/dist/sdk/models/shared";

const sdk = new CodatSyncCommerce({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});

sdk.accountingInvoices.createAccountingInvoice({
  accountingInvoice: {
    additionalTaxAmount: 9907.57,
    additionalTaxPercentage: 9015.63,
    amountDue: 195.45,
    currency: "EUR",
    currencyRate: 1021.57,
    customerRef: {
      companyName: "Runte Inc",
      id: "<ID>",
    },
    discountPercentage: 7432.38,
    dueDate: "2022-10-23T00:00:00.000Z",
    id: "<ID>",
    invoiceNumber: "Manors",
    issueDate: "2022-10-23T00:00:00.000Z",
    lineItems: [
      {
        accountRef: {
          id: "<ID>",
          name: "as",
        },
        description: "Visionary discrete task-force",
        discountAmount: 1010.92,
        discountPercentage: 6455.29,
        isDirectIncome: false,
        itemRef: {
          id: "<ID>",
          name: "Shoes Tennessee",
        },
        quantity: 8154.23,
        subTotal: 7362.43,
        taxAmount: 6235.41,
        taxRateRef: {
          effectiveTaxRate: 9166.8,
          id: "<ID>",
          name: "yellow Chair",
        },
        totalAmount: 1049.23,
        tracking: {
          categoryRefs: [
            {
              id: "<ID>",
              name: "rural Bulgarian Producer",
            },
          ],
          customerRef: {
            companyName: "Grimes, Yost and Champlin",
            id: "<ID>",
          },
          isBilledTo: BilledToType.NotApplicable,
          isRebilledTo: BilledToType.Unknown,
          projectRef: {
            id: "<ID>",
            name: "Organized UDP",
          },
          recordRef: {
            dataType: "journalEntry",
            id: "<ID>",
          },
        },
        trackingCategoryRefs: [
          {
            id: "<ID>",
            name: "Garden",
          },
        ],
        unitAmount: 5528.53,
      },
    ],
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "2022-10-23T00:00:00.000Z",
    note: "Home Applications Fermium",
    paidOnDate: "2022-10-23T00:00:00.000Z",
    paymentAllocations: [
      {
        allocation: {
          allocatedOnDate: "2022-10-23T00:00:00.000Z",
          currency: "GBP",
          currencyRate: 4747.86,
          totalAmount: 8682.37,
        },
        payment: {
          accountRef: {
            id: "<ID>",
            name: "West Avon Herzegovina",
          },
          currency: "GBP",
          currencyRate: 7606.26,
          id: "<ID>",
          note: "Berkshire",
          paidOnDate: "2022-10-23T00:00:00.000Z",
          reference: "Palm scam",
          totalAmount: 2223.49,
        },
      },
    ],
    salesOrderRefs: [
      {
        dataType: DataType.Invoices,
        id: "<ID>",
      },
    ],
    sourceModifiedDate: "2022-10-23T00:00:00.000Z",
    status: InvoiceStatus.Unknown,
    subTotal: 7559.48,
    supplementalData: {
      content: {
        "explicabo": {
          "fugiat": "definition",
        },
      },
    },
    totalAmount: 2429.55,
    totalDiscount: 6497.09,
    totalTaxAmount: 337.26,
    withholdingTax: [
      {
        amount: 676.3,
        name: "whether Division so",
      },
    ],
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  timeoutInMinutes: 658558,
}).then((res: CreateAccountingInvoiceResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `request`                                                                                              | [operations.CreateAccountingInvoiceRequest](../../models/operations/createaccountinginvoicerequest.md) | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `retries`                                                                                              | [utils.RetryConfig](../../models/utils/retryconfig.md)                                                 | :heavy_minus_sign:                                                                                     | Configuration to override the default retry behavior of the client.                                    |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.CreateAccountingInvoiceResponse](../../models/operations/createaccountinginvoiceresponse.md)>**

