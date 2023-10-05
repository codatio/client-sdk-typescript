<div align="center">
    <picture>
        <source srcset="https://user-images.githubusercontent.com/6267663/221800355-0995e4ad-a386-4943-a4c2-e620341a5155.svg" media="(prefers-color-scheme: dark)">
        <img src="https://user-images.githubusercontent.com/6267663/221800359-b7f7776c-a44f-4384-8dd0-d9f7d5caef7d.svg">
    </picture>
    <h1>Codat TypeScript (Node)</h1>
        <p><strong>The API for lending and embedded accounting automation</strong></p>
        <p>Codat makes it quicker and easier to build fintech products, like corporate cards, business dashboards, or SMB lending applications, that are integrated with the other systems small businesses use.</p>
    <a href="https://docs.codat.io/using-the-api/overview"><img src="https://img.shields.io/static/v1?label=Docs&message=API Ref&color=4c2cec&style=for-the-badge" /></a>
    <a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge" /></a>
</div>

> **Beta Release**
>
> Exciting news! Our first TypeScript (Node) library beta release is here, simplifying your development workflow with an effortless build process.

## Authentication

Codat uses API keys to control access to the API. 
Learn more about authentication and managing API keys [here](https://docs.codat.io/using-the-api/authentication).

You must keep the API key secret, so make sure it isn't available in publicly accessible areas, such as GitHub and client-side code.
Codat recommends the API key is only inserted at release time, and the number of people at your organization with access to your API key is minimised.

Codat expects the API key to be included in all API requests to the server, Base64 encoded within an 'Authorization' header.

```bash
Authorization: Basic BASE_64_ENCODED(API_KEY)
```

### Getting your Authorization Header

To get your authorization header from the [Codat Portal](https://app.codat.io):

1. In the navigation bar, click [**Developers > API keys**](https://app.codat.io/developers/api-keys).
2. In the **API Keys** section, copy your authorization header rather than the API key itself.

## Client Libraries

<!-- Start Codat Client Libraries -->
| Library | Description | npm |
| :- | :- | :- |
| **[Platform](https://github.com/codatio/client-sdk-typescript/tree/main/platform)** | Manage the building blocks of Codat, including companies, connections, and more. | [@codat/platform](https://www.npmjs.com/package/@codat/platform) |
| **[Bank Feeds](https://github.com/codatio/client-sdk-typescript/tree/main/bank-feeds)** | Set up bank feeds from accounts in your application to supported accounting platforms. | [@codat/bank-feeds](https://www.npmjs.com/package/@codat/bank-feeds) |
| **[Sync for Commerce](https://github.com/codatio/client-sdk-typescript/tree/main/sync-for-commerce)** | Push merchants' data from your ecommerce or point-of-sale (POS) platform into your merchants' accounting platform. | [@codat/sync-for-commerce](https://www.npmjs.com/package/@codat/sync-for-commerce) |
| **[Sync for Expenses](https://github.com/codatio/client-sdk-typescript/tree/main/sync-for-expenses)** | Push expenses to accounting platforms. | [@codat/sync-for-expenses](https://www.npmjs.com/package/@codat/sync-for-expenses) |
| **[Lending](https://github.com/codatio/client-sdk-typescript/tree/main/lending)** | Make credit decisions backed by enhanced financials, metrics, reports, and data integrity features. | [@codat/lending](https://www.npmjs.com/package/@codat/lending) |
| **[Sync for Payroll](https://github.com/codatio/client-sdk-typescript/tree/main/sync-for-payroll)** | Push payroll to accounting platforms. | [@codat/sync-for-payroll](https://www.npmjs.com/package/@codat/sync-for-payroll) |
| **[Sync for Payables](https://github.com/codatio/client-sdk-typescript/tree/main/sync-for-payables)** | Streamline your customers' accounts payable workflow. | [@codat/sync-for-payables](https://www.npmjs.com/package/@codat/sync-for-payables) |

### Previous products and versions

| Library | Description | npm |
| :- | :- | :- |
| **[Platform](https://github.com/codatio/client-sdk-typescript/tree/main/platform)** | Manage the building blocks of Codat, including companies, connections, and more. | [@codat/platform](https://www.npmjs.com/package/@codat/platform) |
| **[Bank Feeds](https://github.com/codatio/client-sdk-typescript/tree/main/bank-feeds)** | Set up bank feeds from accounts in your application to supported accounting platforms. | [@codat/bank-feeds](https://www.npmjs.com/package/@codat/bank-feeds) |
| **[Sync for Commerce](https://github.com/codatio/client-sdk-typescript/tree/main/sync-for-commerce)** | Push merchants' data from your ecommerce or point-of-sale (POS) platform into your merchants' accounting platform. | [@codat/sync-for-commerce](https://www.npmjs.com/package/@codat/sync-for-commerce) |
| **[Sync for Expenses](https://github.com/codatio/client-sdk-typescript/tree/main/sync-for-expenses)** | Push expenses to accounting platforms. | [@codat/sync-for-expenses](https://www.npmjs.com/package/@codat/sync-for-expenses) |
| **[Lending](https://github.com/codatio/client-sdk-typescript/tree/main/lending)** | Make credit decisions backed by enhanced financials, metrics, reports, and data integrity features. | [@codat/lending](https://www.npmjs.com/package/@codat/lending) |
| **[Sync for Payroll](https://github.com/codatio/client-sdk-typescript/tree/main/sync-for-payroll)** | Push payroll to accounting platforms. | [@codat/sync-for-payroll](https://www.npmjs.com/package/@codat/sync-for-payroll) |
| **[Sync for Payables](https://github.com/codatio/client-sdk-typescript/tree/main/sync-for-payables)** | Streamline your customers' accounts payable workflow. | [@codat/sync-for-payables](https://www.npmjs.com/package/@codat/sync-for-payables) |
<!-- End Codat Client Libraries -->
