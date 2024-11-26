# CreateBatchSourceAccountResponseBody

Success


## Supported Types

### `operations.One[]`

```typescript
const value: operations.One[] = [
  {
    sourceAccountId: "12345",
    result: {
      id: "acc-001",
      accountName: "account-081",
      accountType: "checking",
      accountNumber: "12345670",
      routingInfo: {
        bankCode: "21001088",
        type: "bankcode",
      },
      currency: "GBP",
      balance: new Decimal("99.99"),
      accountInfo: {
        description: "account description 1",
        nickname: "account 123",
        accountOpenDate: "2023-05-06T00:00:00Z",
        availableBalance: new Decimal("10"),
      },
      modifiedDate: "2024-08-02T00:00:00.000Z",
      status: "pending",
      feedStartDate: "2024-05-01T00:00:00Z",
    },
  },
];
```

