# CreateBatchSourceAccountResponseBody


## Supported Types

### `shared.SourceAccountV2BatchCreateResponse`

```typescript
const value: shared.SourceAccountV2BatchCreateResponse = {
  sourceAccountId: "12345",
  result: {
    account: {
      id: "acc-001",
      accountName: "account-081",
      accountType: "checking",
      accountNumber: "12345670",
      routingInfo: {
        bankCode: "21001088",
      },
      currency: "GBP",
      balance: new Decimal("99.99"),
      accountInfo: {
        description: "account description 1",
        nickname: "account 123",
        accountOpenDate: "2023-05-06",
        availableBalance: new Decimal("10"),
      },
      modifiedDate: "2024-08-02T00:00:00.000Z",
      status: "pending",
      feedStartDate: "2024-05-01",
    },
  },
};
```

### `shared.SourceAccountBatchCreateResponse`

```typescript
const value: shared.SourceAccountBatchCreateResponse = {
  sourceAccountId: "12345",
  result: {
    account: {
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
};
```

### `shared.SourceAccountBatchErrorResponse`

```typescript
const value: shared.SourceAccountBatchErrorResponse = {
  sourceAccountId: "12345",
  result: {
    statusCode: "409",
    error: "A bank account already exists with the same Id",
  },
};
```

