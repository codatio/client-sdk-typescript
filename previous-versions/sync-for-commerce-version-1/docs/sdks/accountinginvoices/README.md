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
    additionalTaxAmount: 2282.63,
    additionalTaxPercentage: 1059.06,
    amountDue: 4895.09,
    currency: "EUR",
    currencyRate: 8915.23,
    customerRef: {
      companyName: "consectetur",
      id: "5b60eb1e-a426-4555-ba3c-28744ed53b88",
    },
    discountPercentage: 9425.84,
    dueDate: "2022-10-23T00:00:00.000Z",
    id: "a8d8f5c0-b2f2-4fb7-b194-a276b26916fe",
    invoiceNumber: "illo",
    issueDate: "2022-10-23T00:00:00.000Z",
    lineItems: [
      {
        accountRef: {
          id: "08f4294e-3698-4f44-bf60-3e8b445e80ca",
          name: "Lorraine Walsh",
        },
        description: "magni",
        discountAmount: 486.9,
        discountPercentage: 9014.83,
        isDirectIncome: false,
        itemRef: {
          id: "457e1858-b6a8-49fb-a3a5-aa8e4824d0ab",
          name: "Barbara Koelpin IV",
        },
        quantity: 5580.65,
        subTotal: 9221.12,
        taxAmount: 3611.51,
        taxRateRef: {
          effectiveTaxRate: 894.94,
          id: "862065e9-04f3-4b11-94b8-abf603a79f9d",
          name: "Noah Armstrong",
        },
        totalAmount: 4406.66,
        tracking: {
          categoryRefs: [
            {
              id: "da8a50ce-187f-486b-8173-d689eee9526f",
              name: "Wilfred Mueller",
            },
          ],
          customerRef: {
            companyName: "repudiandae",
            id: "881ead4f-0e10-4125-a3f9-4e29e973e922",
          },
          isBilledTo: BilledToType.NotApplicable,
          isRebilledTo: BilledToType.NotApplicable,
          projectRef: {
            id: "7a15be3e-0608-407e-ab6e-3ab8845f0597",
            name: "Shane Abshire",
          },
          recordRef: {
            dataType: "journalEntry",
            id: "a54a31e9-4764-4a3e-865e-7956f9251a5a",
          },
        },
        trackingCategoryRefs: [
          {
            id: "9da660ff-57bf-4aad-8f9e-fc1b4512c103",
            name: "Agnes Gibson",
          },
        ],
        unitAmount: 7730.84,
      },
    ],
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "2022-10-23T00:00:00.000Z",
    note: "sapiente",
    paidOnDate: "2022-10-23T00:00:00.000Z",
    paymentAllocations: [
      {
        allocation: {
          allocatedOnDate: "2022-10-23T00:00:00.000Z",
          currency: "GBP",
          currencyRate: 1070.04,
          totalAmount: 5834.04,
        },
        payment: {
          accountRef: {
            id: "9ebfd0e9-fe6c-4632-8a3a-ed0117996312",
            name: "Mrs. Orville Treutel",
          },
          currency: "USD",
          currencyRate: 1158.34,
          id: "778ff61d-0174-4763-a0a1-5db6a660659a",
          note: "ab",
          paidOnDate: "2022-10-23T00:00:00.000Z",
          reference: "possimus",
          totalAmount: 9139.92,
        },
      },
    ],
    salesOrderRefs: [
      {
        dataType: DataType.Invoices,
        id: "aab5851d-6c64-45b0-8b61-891baa0fe1ad",
      },
    ],
    sourceModifiedDate: "2022-10-23T00:00:00.000Z",
    status: InvoiceStatus.Unknown,
    subTotal: 12.07,
    supplementalData: {
      content: {
        "deleniti": {
          "earum": "ex",
        },
      },
    },
    totalAmount: 9583.08,
    totalDiscount: 5241.84,
    totalTaxAmount: 7963.2,
    withholdingTax: [
      {
        amount: 3651,
        name: "Dr. Chris Hermiston",
      },
    ],
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  timeoutInMinutes: 770675,
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

