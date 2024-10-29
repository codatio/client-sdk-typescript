# Branding

## Example Usage

```typescript
import { Branding } from "@codat/platform/sdk/models/shared";

let value: Branding = {
  logo: {
    full: {
      image: {
        src:
          "https://static.codat.io/public/officialLogos/Full/8A156A5A-39CB-4F9D-856E-76EF9B9A9607.png",
        alt: "xero full icon",
      },
    },
    square: {
      image: {
        src:
          "https://static.codat.io/public/officialLogos/Square/8A156A5A-39CB-4F9D-856E-76EF9B2W3607.png",
        alt: "xero square icon",
      },
    },
  },
  button: {
    default: {
      image: {
        src:
          "https://static.codat.io/public/officialButtons/Full/8A156A5A-39CB-4F9D-856E-76EF9Q7A9607.png",
        alt: "xero default button icon",
      },
    },
    hover: {
      image: {
        src:
          "https://static.codat.io/public/officialLogos/Full/8A156A5A-39CB-4F9D-856E-76EF9B9A9607.png",
        alt: "xero hover button icon",
      },
    },
  },
  sourceId: "35b92968-9851-4095-ad60-395c95cbcba4",
};
```

## Fields

| Field                                                                                                                                                                                                                                                                                                   | Type                                                                                                                                                                                                                                                                                                    | Required                                                                                                                                                                                                                                                                                                | Description                                                                                                                                                                                                                                                                                             | Example                                                                                                                                                                                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `logo`                                                                                                                                                                                                                                                                                                  | [shared.BrandingLogo](../../../sdk/models/shared/brandinglogo.md)                                                                                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                                                                                                                      | Logo branding references.                                                                                                                                                                                                                                                                               |                                                                                                                                                                                                                                                                                                         |
| `button`                                                                                                                                                                                                                                                                                                | [shared.BrandingButton](../../../sdk/models/shared/brandingbutton.md)                                                                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                                                                                                      | Button branding references.                                                                                                                                                                                                                                                                             |                                                                                                                                                                                                                                                                                                         |
| `sourceId`                                                                                                                                                                                                                                                                                              | *string*                                                                                                                                                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                                                                                                                                      | A source-specific ID used to distinguish between different sources originating from the same data connection. In general, a data connection is a single data source. However, for TrueLayer, `sourceId` is associated with a specific bank and has a many-to-one relationship with the `integrationId`. | 35b92968-9851-4095-ad60-395c95cbcba4                                                                                                                                                                                                                                                                    |