# UploadBankStatementDataRequestBody


## Supported Types

### `shared.BankingAccount`

```typescript
const value: shared.BankingAccount = {
  id: "<id>",
  name: "<value>",
  type: "Unknown",
  balance: {},
  identifiers: {
    type: "Other",
  },
  currency: "Trinidad and Tobago Dollar",
  institution: {},
};
```

### `shared.BankingTransactions`

```typescript
const value: shared.BankingTransactions = {
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

