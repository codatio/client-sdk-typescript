<!-- Start SDK Example Usage -->


```typescript
import { CodatSyncExpenses } from "@codat/sync-for-expenses";
import { AccountStatus, AccountType } from "@codat/sync-for-expenses/dist/sdk/models/shared";

(async () => {
    const sdk = new CodatSyncExpenses({
        security: {
            authHeader: "Basic BASE_64_ENCODED(API_KEY)",
        },
    });

    const res = await sdk.accounts.create({
        account: {
            currency: "USD",
            currentBalance: 0,
            description: "Invoices the business has issued but has not yet collected payment on.",
            fullyQualifiedCategory: "Asset.Current",
            fullyQualifiedName: "Cash On Hand",
            id: "1b6266d1-1e44-46c5-8eb5-a8f98e03124e",
            metadata: {},
            modifiedDate: "2022-10-23T00:00:00.000Z",
            name: "Accounts Receivable",
            nominalCode: "610",
            sourceModifiedDate: "2022-10-23T00:00:00.000Z",
            status: AccountStatus.Active,
            supplementalData: {
                content: {
                    Money: {
                        blue: "shred",
                    },
                },
            },
            type: AccountType.Asset,
            validDatatypeLinks: [
                {
                    links: ["abnormally"],
                },
            ],
        },
        companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
        connectionId: "2e9d2c44-f675-40ba-8049-353bfcb5e171",
    });

    if (res.statusCode == 200) {
        // handle response
    }
})();

```
<!-- End SDK Example Usage -->