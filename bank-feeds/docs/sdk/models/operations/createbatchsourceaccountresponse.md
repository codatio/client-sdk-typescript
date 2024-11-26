# CreateBatchSourceAccountResponse


## Supported Types

### `operations.CreateBatchSourceAccountResponseBody`

```typescript
const value: operations.CreateBatchSourceAccountResponseBody = [
  {
    sourceAccountId: "12345",
    result: {
      id: "acc-002",
      accountName: "account-081",
      accountType: "Credit",
      accountNumber: "12345670",
      sortCode: "123456",
      currency: "GBP",
      balance: new Decimal("99.99"),
      modifiedDate: "2023-01-09T14:14:14.1057478Z",
      status: "pending",
    },
  },
];
```

### `operations.CreateBatchSourceAccountSourceAccountsResponseBody`

```typescript
const value: operations.CreateBatchSourceAccountSourceAccountsResponseBody = [
  {
    sourceAccountId: "12345",
    result: {
      id: "acc-003",
      accountName: "account-095",
      accountType: "Credit",
      accountNumber: "12345671",
      sortCode: "123456",
      currency: "USD",
      balance: new Decimal("0"),
      modifiedDate: "2023-01-09T14:14:14.1057478Z",
      status: "pending",
    },
  },
];
```

