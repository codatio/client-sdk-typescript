

## 2024-09-13 15:28:49
### Changes
Based on:
- OpenAPI Doc  
- Speakeasy CLI 1.396.7 (2.415.6) https://github.com/speakeasy-api/speakeasy
### Generated
- [typescript v4.0.0] sync-for-payables
### Releases
- [NPM v4.0.0] https://www.npmjs.com/package/@codat/sync-for-payables/v/4.0.0 - sync-for-payables

## 2024-10-02 13:11:12
### Changes
Based on:
- OpenAPI Doc  
- Speakeasy CLI 1.405.9 (2.429.0) https://github.com/speakeasy-api/speakeasy
### Generated
- [typescript v5.0.0] sync-for-payables
### Releases
- [NPM v5.0.0] https://www.npmjs.com/package/@codat/sync-for-payables/v/5.0.0 - sync-for-payables

## 2024-10-29 14:19:16
### Changes
Based on:
- OpenAPI Doc  
- Speakeasy CLI 1.423.1 (2.442.11) https://github.com/speakeasy-api/speakeasy
### Generated
- [typescript v6.0.0] sync-for-payables
### Releases
- [NPM v6.0.0] https://www.npmjs.com/package/@codat/sync-for-payables/v/6.0.0 - sync-for-payables

## 2024-10-30 13:38:03
### Changes
Based on:
- OpenAPI Doc  
- Speakeasy CLI 1.423.3 (2.442.11) https://github.com/speakeasy-api/speakeasy
### Generated
- [typescript v7.0.0] sync-for-payables
### Releases
- [NPM v7.0.0] https://www.npmjs.com/package/@codat/sync-for-payables/v/7.0.0 - sync-for-payables

## 2024-10-31 13:36:39
### Changes
Based on:
- OpenAPI Doc  
- Speakeasy CLI 1.423.5 (2.445.1) https://github.com/speakeasy-api/speakeasy
### Generated
- [typescript v8.0.0] sync-for-payables
### Releases
- [NPM v8.0.0] https://www.npmjs.com/package/@codat/sync-for-payables/v/8.0.0 - sync-for-payables

## 2024-11-26 17:08:17
### Changes
Based on:
- OpenAPI Doc  
- Speakeasy CLI 1.447.0 (2.463.0) https://github.com/speakeasy-api/speakeasy
### Generated
- [typescript v9.0.0] sync-for-payables
### Releases
- [NPM v9.0.0] https://www.npmjs.com/package/@codat/sync-for-payables/v/9.0.0 - sync-for-payables

## 2024-11-26 18:30:59
### Changes
Based on:
- OpenAPI Doc  
- Speakeasy CLI 1.447.0 (2.463.0) https://github.com/speakeasy-api/speakeasy
### Generated
- [typescript v9.0.1] sync-for-payables
### Releases
- [NPM v9.0.1] https://www.npmjs.com/package/@codat/sync-for-payables/v/9.0.1 - sync-for-payables

## 2025-11-24 15:27:11
### Changes
Based on:
- OpenAPI Doc  
- Speakeasy CLI 1.660.0 (2.760.2) https://github.com/speakeasy-api/speakeasy
### Generated
- [typescript v9.1.0] sync-for-payables
### Releases
- [NPM v9.1.0] https://www.npmjs.com/package/@codat/sync-for-payables/v/9.1.0 - sync-for-payables

## 2026-01-09 13:33:12
### Changes
Based on:
- OpenAPI Doc  
- Speakeasy CLI 1.683.1 (2.792.2) https://github.com/speakeasy-api/speakeasy
### Generated
- [typescript v9.2.0] sync-for-payables
### Releases
- [NPM v9.2.0] https://www.npmjs.com/package/@codat/sync-for-payables/v/9.2.0 - sync-for-payables

## 2026-02-09 13:58:05
### Changes
Based on:
- OpenAPI Doc  
- Speakeasy CLI 1.709.1 (2.812.2) https://github.com/speakeasy-api/speakeasy
### Generated
- [typescript v9.3.0] sync-for-payables
### Releases
- [NPM v9.3.0] https://www.npmjs.com/package/@codat/sync-for-payables/v/9.3.0 - sync-for-payables

## 2026-03-23 11:36:03
### Changes
Based on:
- OpenAPI Doc  
- Speakeasy CLI 1.759.1 (2.869.10) https://github.com/speakeasy-api/speakeasy
### Generated
- [typescript v9.3.1] sync-for-payables
### Releases
- [NPM v9.3.1] https://www.npmjs.com/package/@codat/sync-for-payables/v/9.3.1 - sync-for-payables

## 2026-04-15 09:48:40
### Changes
Based on:
- OpenAPI Doc  
- Speakeasy CLI 1.761.5 (2.879.13) https://github.com/speakeasy-api/speakeasy
### Generated
- [typescript v9.3.2] sync-for-payables
### Releases
- [NPM v9.3.2] https://www.npmjs.com/package/@codat/sync-for-payables/v/9.3.2 - sync-for-payables

## 2026-08-25
### Changes
Based on:
- OpenAPI Doc 3.0.0 https://raw.githubusercontent.com/codatio/oas/main/yaml/Codat-Sync-Payables.yaml
- Codat SDK Codegen
### Generated
- [typescript v10.0.0] sync-for-payables
### Releases
- [NPM v10.0.0] https://www.npmjs.com/package/@codat/sync-for-payables/v/10.0.0 - sync-for-payables

### Notes
**Breaking:** only the paths listed in `exports` in `package.json` resolve now. Importing a file by its path inside the package, for example `@codat/sync-for-payables/sdk/models/shared/accountmappingoption.js`, no longer works - import from `@codat/sync-for-payables/sdk/models/shared` or the package root instead.

The zod validation schemas (`*$inboundSchema` / `*$outboundSchema`) are gone and zod is no longer a dependency. Each model now exports `AccountMappingOptionFromJSON`, `AccountMappingOptionToJSON` and `instanceOfAccountMappingOption`.

`SDKError.message` now holds the message on its own. The status code, the content type and the response body are still on the error, as `statusCode`, `contentType` and `body`.
