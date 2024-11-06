# UploadBankStatementDataRequestBody


## Supported Types

### `shared.BankingAccount`

```typescript
const value: shared.BankingAccount = {
  modifiedDate: "2022-10-23T00:00:00Z",
  sourceModifiedDate: "2022-10-23T00:00:00Z",
  id: "<id>",
  name: "<value>",
  type: "Debit",
  balance: {},
  identifiers: {
    type: "Investment",
  },
  currency: "South Sudanese pound",
  institution: {},
};
```

### `shared.BankingTransactions`

```typescript
const value: shared.BankingTransactions = {
  results: [
    {
      modifiedDate: "2022-05-23T16:32:50Z",
      sourceModifiedDate: "2021-06-28T10:48:12",
      id: "0130b5bb-1419-40f6-8a27-7362d0381229",
      accountId: "1703194f-7805-4da8-bac0-2ba5da4a4216",
      description:
        "Payments for direct income ce149943-c157-43fc-aac7-42a716b655b6",
      amount: new Decimal("5062.39"),
      currency: "GBP",
      postedDate: "2021-07-06T00:00:00",
      authorizedDate: "2021-07-06T00:00:00",
      merchantName: "New Look",
      transactionCategoryRef: {
        id: "health-and-fitness-sports",
      },
    },
  ],
  pageNumber: 1,
  pageSize: 10,
  totalResults: 1,
  links: {
    self: {
      href: "/companies/{id}/data/{dataType}",
    },
    current: {
      href: "/companies/{id}/data/{dataType}?page=1&pageSize=10",
    },
  },
};
```

### `any`

```typescript
const value: any = "<value>";
```

