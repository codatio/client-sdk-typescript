# accountingCreditNotes

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
    additionalTaxAmount: 8700.13,
    additionalTaxPercentage: 8700.88,
    allocatedOnDate: "2022-10-23T00:00:00.000Z",
    creditNoteNumber: "molestiae",
    currency: "EUR",
    currencyRate: 8009.11,
    customerRef: {
      companyName: "esse",
      id: "8ca1ba92-8fc8-4167-82cb-739205929396",
    },
    discountPercentage: 9437.49,
    id: "ea7596eb-10fa-4aa2-b52c-5955907aff1a",
    issueDate: "2022-10-23T00:00:00.000Z",
    lineItems: [
      {
        accountRef: {
          id: "2fa94677-3925-41aa-92c3-f5ad019da1ff",
          name: "Jessie Langosh V",
        },
        description: "voluptate",
        discountAmount: 7392.64,
        discountPercentage: 199.87,
        isDirectIncome: false,
        itemRef: {
          id: "074f1547-1b5e-46e1-bb99-d488e1e91e45",
          name: "Monique Spinka",
        },
        quantity: 7163.27,
        subTotal: 8413.86,
        taxAmount: 2894.06,
        taxRateRef: {
          effectiveTaxRate: 2647.3,
          id: "269802d5-02a9-44bb-8f63-c969e9a3efa7",
          name: "Angel Wolff II",
        },
        totalAmount: 7670.24,
        tracking: {
          categoryRefs: [
            {
              id: "66ae395e-fb9b-4a88-b3a6-6997074ba446",
              name: "Robin Keebler",
            },
            {
              id: "14195989-0afa-4563-a251-6fe4c8b711e5",
              name: "Jessie Zulauf",
            },
            {
              id: "ed028921-cddc-4692-a01f-b576b0d5f0d3",
              name: "Erma Hessel",
            },
            {
              id: "b2587053-202c-473d-9fe9-b90c28909b3f",
              name: "Edwin Morar",
            },
          ],
          customerRef: {
            companyName: "pariatur",
            id: "9cbf4863-3323-4f9b-b7f3-a4100674ebf6",
          },
          isBilledTo: BilledToType.NotApplicable,
          isRebilledTo: BilledToType.Unknown,
          projectRef: {
            id: "80d1ba77-a89e-4bf7-b7ae-4203ce5e6a95",
            name: "Dr. Jimmie Murphy",
          },
          recordRef: {
            dataType: "invoice",
            id: "6ce2af7a-73cf-43be-853f-870b326b5a73",
          },
        },
        trackingCategoryRefs: [
          {
            id: "29cdb1a8-422b-4b67-9d23-22715bf0cbb1",
            name: "Dale Boehm",
          },
          {
            id: "b90f3443-a110-48e0-adcf-4b921879fce9",
            name: "Tiffany Willms",
          },
        ],
        unitAmount: 8788.7,
      },
      {
        accountRef: {
          id: "f7fbc7ab-d74d-4d39-80f5-d2cff7c70a45",
          name: "Judy Keebler",
        },
        description: "ratione",
        discountAmount: 4011.32,
        discountPercentage: 5113.19,
        isDirectIncome: false,
        itemRef: {
          id: "13f16d9f-5fce-46c5-9614-6c3e250fb008",
          name: "Jim Corkery I",
        },
        quantity: 896.03,
        subTotal: 6774.12,
        taxAmount: 6720.48,
        taxRateRef: {
          effectiveTaxRate: 8104.24,
          id: "366c8dd6-b144-4290-b474-778a7bd466d2",
          name: "Miss Devin Bogan",
        },
        totalAmount: 2065.94,
        tracking: {
          categoryRefs: [
            {
              id: "dca42519-04e5-423c-be0b-c7178e4796f2",
              name: "Fernando Barton",
            },
            {
              id: "88282aa4-8256-42f2-a2e9-817ee17cbe61",
              name: "Cecil Pollich",
            },
            {
              id: "95bc0ab3-c20c-44f3-b89f-d871f99dd2ef",
              name: "Miss Peter Cronin",
            },
            {
              id: "6f1e674b-db04-4f15-b560-82d68ea19f1d",
              name: "Allison Bednar I",
            },
          ],
          customerRef: {
            companyName: "adipisci",
            id: "9d08086a-1840-4394-8260-71f93f5f0642",
          },
          isBilledTo: BilledToType.Project,
          isRebilledTo: BilledToType.NotApplicable,
          projectRef: {
            id: "c7af515c-c413-4aa6-baae-8d67864dbb67",
            name: "Lela Shields",
          },
          recordRef: {
            dataType: "invoice",
            id: "0b375ed4-f6fb-4ee4-9f33-317fe35b60eb",
          },
        },
        trackingCategoryRefs: [
          {
            id: "ea426555-ba3c-4287-84ed-53b88f3a8d8f",
            name: "Della Bailey",
          },
        ],
        unitAmount: 9679.66,
      },
      {
        accountRef: {
          id: "2fb7b194-a276-4b26-916f-e1f08f4294e3",
          name: "Kristina Lueilwitz",
        },
        description: "tempora",
        discountAmount: 4554.44,
        discountPercentage: 9700.76,
        isDirectIncome: false,
        itemRef: {
          id: "603e8b44-5e80-4ca5-9efd-20e457e1858b",
          name: "Lee Lehner",
        },
        quantity: 7105.29,
        subTotal: 8928.63,
        taxAmount: 2049.23,
        taxRateRef: {
          effectiveTaxRate: 6771.15,
          id: "5aa8e482-4d0a-4b40-b508-8e51862065e9",
          name: "Eva Wisozk",
        },
        totalAmount: 1157.03,
        tracking: {
          categoryRefs: [
            {
              id: "94b8abf6-03a7-49f9-9fe0-ab7da8a50ce1",
              name: "Mitchell Zboncak",
            },
          ],
          customerRef: {
            companyName: "quidem",
            id: "c173d689-eee9-4526-b8d9-86e881ead4f0",
          },
          isBilledTo: BilledToType.Project,
          isRebilledTo: BilledToType.Unknown,
          projectRef: {
            id: "012563f9-4e29-4e97-be92-2a57a15be3e0",
            name: "Ms. Melissa Larson",
          },
          recordRef: {
            dataType: "journalEntry",
            id: "b6e3ab88-45f0-4597-a60f-f2a54a31e947",
          },
        },
        trackingCategoryRefs: [
          {
            id: "4a3e865e-7956-4f92-91a5-a9da660ff57b",
            name: "Oliver Osinski",
          },
          {
            id: "f9efc1b4-512c-4103-a648-dc2f615199eb",
            name: "Gilberto Bechtelar",
          },
        ],
        unitAmount: 9834.27,
      },
    ],
    metadata: {
      isDeleted: false,
    },
    modifiedDate: "2022-10-23T00:00:00.000Z",
    note: "aliquid",
    paymentAllocations: [
      {
        allocation: {
          allocatedOnDate: "2022-10-23T00:00:00.000Z",
          currency: "GBP",
          currencyRate: 1478.08,
          totalAmount: 7649.95,
        },
        payment: {
          accountRef: {
            id: "a3aed011-7996-4312-bde0-4771778ff61d",
            name: "Cheryl Kub",
          },
          currency: "USD",
          currencyRate: 2352.63,
          id: "60a15db6-a660-4659-a1ad-eaab5851d6c6",
          note: "ut",
          paidOnDate: "2022-10-23T00:00:00.000Z",
          reference: "expedita",
          totalAmount: 299.5,
        },
      },
      {
        allocation: {
          allocatedOnDate: "2022-10-23T00:00:00.000Z",
          currency: "EUR",
          currencyRate: 3996.6,
          totalAmount: 1097.84,
        },
        payment: {
          accountRef: {
            id: "891baa0f-e1ad-4e00-8e6f-8c5f350d8cdb",
            name: "Molly Fadel IV",
          },
          currency: "GBP",
          currencyRate: 2745.75,
          id: "30104218-13d5-4208-ace7-e253b668451c",
          note: "autem",
          paidOnDate: "2022-10-23T00:00:00.000Z",
          reference: "laboriosam",
          totalAmount: 9272.12,
        },
      },
      {
        allocation: {
          allocatedOnDate: "2022-10-23T00:00:00.000Z",
          currency: "GBP",
          currencyRate: 3502.07,
          totalAmount: 8956.92,
        },
        payment: {
          accountRef: {
            id: "16deab3f-ec95-478a-a458-4273a8418d16",
            name: "Edith Beahan",
          },
          currency: "EUR",
          currencyRate: 38.6,
          id: "929921ae-fb9f-458c-8d86-e68e4be05601",
          note: "non",
          paidOnDate: "2022-10-23T00:00:00.000Z",
          reference: "enim",
          totalAmount: 5752.13,
        },
      },
      {
        allocation: {
          allocatedOnDate: "2022-10-23T00:00:00.000Z",
          currency: "USD",
          currencyRate: 4585.03,
          totalAmount: 3644.63,
        },
        payment: {
          accountRef: {
            id: "7a59ecfe-f66e-4f1c-aa33-83c2beb47737",
            name: "Angelica Leuschke",
          },
          currency: "GBP",
          currencyRate: 9749.9,
          id: "64d1db1f-2c43-4106-a1e9-6349e1cf9e06",
          note: "itaque",
          paidOnDate: "2022-10-23T00:00:00.000Z",
          reference: "laborum",
          totalAmount: 2503.98,
        },
      },
    ],
    remainingCredit: 2244.67,
    sourceModifiedDate: "2022-10-23T00:00:00.000Z",
    status: CreditNoteStatus.Unknown,
    subTotal: 399.92,
    supplementalData: {
      content: {
        "officia": {
          "ea": "quidem",
          "voluptas": "facilis",
          "placeat": "perspiciatis",
          "expedita": "deleniti",
        },
      },
    },
    totalAmount: 9543.34,
    totalDiscount: 4555.79,
    totalTaxAmount: 3519.36,
    withholdingTax: [
      {
        amount: 8975.43,
        name: "Rodolfo Hintz",
      },
      {
        amount: 6216.66,
        name: "Lucille Bogan",
      },
      {
        amount: 1124.27,
        name: "Florence Hand",
      },
    ],
  },
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  timeoutInMinutes: 403026,
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

