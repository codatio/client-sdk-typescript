# CreateSourceAccountResponseBody

Success


## Supported Types

### `shared.SourceAccountV2`

```typescript
const value: shared.SourceAccountV2 = {
  id: "acc-002",
  accountName: "account-083",
  accountType: "savings",
  accountNumber: "23456789",
  routingInfo: {
    bankCode: "21001088",
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
};
```

### `shared.SourceAccount`

```typescript
const value: shared.SourceAccount = {
  id: "acc-002",
  accountName: "account-081",
  accountType: "Credit",
  accountNumber: "12345670",
  sortCode: "123456",
  currency: "GBP",
  balance: new Decimal("99.99"),
  modifiedDate: "2023-01-09T14:14:14.1057478Z",
  status: "pending",
};
```

