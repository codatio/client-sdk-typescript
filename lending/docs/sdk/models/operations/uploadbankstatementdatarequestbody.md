# UploadBankStatementDataRequestBody


## Supported Types

### `shared.BankingAccount`

```typescript
const value: shared.BankingAccount = {
  results: [
    {
      id: "1703194f-7805-4da8-bac0-2ba5da4a4216",
      name: "Business Current Account",
      informalName: "Codat",
      holder: "Codat Ltd",
      type: "Debit",
      balance: {
        available: -459987.97,
        current: -459964.9,
        limit: 5000,
      },
      identifiers: {
        type: "Depository",
        subtype: "checking",
        number: "46762629",
        bankCode: "009911",
        iban: "GB29 LOYD 4773 2346 7626 29",
        bic: "LOYDGB21006",
        maskedAccountNumber: "LOYDGB21006",
      },
      currency: "GBP",
      institution: {
        id: "lloyds-bank",
        name: "Lloyds Bank",
      },
      modifiedDate: "2022-05-23T16:32:50Z",
      sourceModifiedDate: "2021-08-14T05:04:12",
    },
  ],
};
```

### `shared.BankingTransactions`

```typescript
const value: shared.BankingTransactions = {
  results: [
    {
      id: "0130b5bb-1419-40f6-8a27-7362d0381229",
      accountId: "1703194f-7805-4da8-bac0-2ba5da4a4216",
      description: "Payments for direct income ce149943-c157-43fc-aac7-42a716b655b6",
      amount: 5062.39,
      currency: "GBP",
      postedDate: "2021-07-06T00:00:00",
      authorizedDate: "2021-07-06T00:00:00",
      merchantName: "New Look",
      transactionCategoryRef: {
        id: "health-and-fitness-sports",
      },
      modifiedDate: "2022-05-23T16:32:50Z",
      sourceModifiedDate: "2021-06-28T10:48:12",
    },
  ],
  pageNumber: 0,
  pageSize: 0,
  totalResults: 0,
  _links: {
    self: {
      href: "/companies",
    },
    current: {
      href: "/companies?page=1&pageSize=10",
    },
  },
};
```

### `shared.object`

```typescript
const value: shared.object = {};
```