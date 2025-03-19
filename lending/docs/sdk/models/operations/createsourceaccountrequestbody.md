# CreateSourceAccountRequestBody


## Supported Types

### `shared.SourceAccountV2Prototype`

```typescript
const value: shared.SourceAccountV2Prototype = {
  id: "<id>",
  accountName: "<value>",
  accountType: "savings",
  accountNumber: "<value>",
  currency: "EUR",
  balance: new Decimal("5823.2"),
  modifiedDate: "2022-10-23T00:00:00Z",
  accountInfo: {
    accountOpenDate: "2022-10-23",
  },
};
```

### `shared.SourceAccountPrototype`

```typescript
const value: shared.SourceAccountPrototype = {
  id: "<id>",
  currency: "GBP",
  modifiedDate: "2022-10-23T00:00:00Z",
};
```

