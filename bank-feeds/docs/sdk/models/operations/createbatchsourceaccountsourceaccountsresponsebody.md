# CreateBatchSourceAccountSourceAccountsResponseBody

Multi-Status


## Supported Types

### `operations.ResponseBody1[]`

```typescript
const value: operations.ResponseBody1[] = [
  {
    sourceAccountId: "12345",
    result: {
      id: "acc-002",
      accountName: "account-083",
      accountType: "savings",
      accountNumber: "23456789",
      routingInfo: {
        bankCode: "21001088",
        type: "bankcode",
      },
      currency: "GBP",
      balance: new Decimal("400"),
      accountInfo: {
        description: "account description 2",
        nickname: "account 1290",
        accountOpenDate: "2023-05-23T00:00:00Z",
        availableBalance: new Decimal("400"),
      },
      modifiedDate: "2024-08-02T00:00:00.000Z",
      status: "pending",
      feedStartDate: "2024-05-01T00:00:00Z",
    },
  },
];
```

