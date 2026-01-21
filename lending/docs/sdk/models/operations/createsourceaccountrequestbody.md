# CreateSourceAccountRequestBody


## Supported Types

### `shared.SourceAccountV2Prototype`

```typescript
const value: shared.SourceAccountV2Prototype = {
  id: "<id>",
  accountName: "<value>",
  accountType: "checking",
  accountNumber: "<value>",
  currency: "GBP",
  balance: new Decimal("9826.32"),
  modifiedDate: "2022-10-23T00:00:00Z",
  accountInfo: null,
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

