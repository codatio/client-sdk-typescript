import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class GetTaxRatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=taxRateId" })
  taxRateId: string;
}

export class GetTaxRateSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeAPIKey;
}

export class GetTaxRateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetTaxRatePathParams;

  @SpeakeasyMetadata()
  security: GetTaxRateSecurity;
}

export class GetTaxRate200ApplicationJSONComponents extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=isCompound" })
  isCompound: boolean;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=rate" })
  rate?: number;
}

export class GetTaxRate200ApplicationJSONMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=isDeleted" })
  isDeleted?: boolean;
}
export enum GetTaxRate200ApplicationJSONStatusEnum {
    Unknown = "Unknown",
    Active = "Active",
    Archived = "Archived"
}

// GetTaxRate200ApplicationJSONValidDataTypeLinks
/** 
 * When querying Codat's data model, some data types return `validDatatypeLinks` metadata in the JSON response. This indicates where that object can be used as a reference—a _valid link_—when creating or updating other data.
 * 
 * For example, `validDatatypeLinks` might indicate the following references:
 * 
 * - Which tax rates are valid to use on the line item of a bill.
 * - Which items can be used when creating an invoice. 
 * 
 * You can use `validDatatypeLinks` to present your SMB customers with only valid choices when selecting objects from a list, for example.
 * 
 * ## `validDatatypeLinks` example
 * 
 * The following example uses the `Accounting.Accounts` data type. It shows that, on the linked integration, this account is valid as the account on a payment or bill payment; and as the account referenced on the line item of a direct income or direct cost. Because there is no valid link to Invoices or Bills, using this account on those data types will result in an error.
 * 
 * ```json validDatatypeLinks for an account
 * {
 *             "id": "bd9e85e0-0478-433d-ae9f-0b3c4f04bfe4",
 *             "nominalCode": "090",
 *             "name": "Business Bank Account",
 *             #...
 *             "validDatatypeLinks": [
 *                 {
 *                     "property": "Id",
 *                     "links": [
 *                         "Payment.AccountRef.Id",
 *                         "BillPayment.AccountRef.Id",
 *                         "DirectIncome.LineItems.AccountRef.Id",
 *                         "DirectCost.LineItems.AccountRef.Id"
 *                     ]
 *                 }
 *             ]
 *         }
 * ```
 * 
 * 
 * 
 * ## Support for `validDatatypeLinks`
 * 
 * Codat currently supports `validDatatypeLinks` for some data types on our Xero, QuickBooks Online, QuickBooks Desktop, Exact (NL), and Sage Business Cloud integrations. 
 * 
 * If you'd like us to extend support to more data types or integrations, suggest or vote for this on our <a href="https://portal.productboard.com/codat/5-product-roadmap">Product Roadmap</a>.
**/
export class GetTaxRate200ApplicationJSONValidDataTypeLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: string[];

  @SpeakeasyMetadata({ data: "json, name=property" })
  property?: string;
}

// GetTaxRate200ApplicationJSON
/** 
 * > View the coverage for tax rates in the <a className="external" href="https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=taxRates" target="_blank">Data coverage explorer</a>.
 * 
 * ## Overview
 * 
 * Accounting systems typically store a set of taxes and associated rates within the accounting package. This means that users don't have to look up or remember the rates for each type of tax. For example: Applying the tax "UK sales VAT" to line items of an invoice adds the correct rate of 20%. 
 * 
 * ### Tax components
 * 
 * In some cases, a tax is made up of multiple sub taxes, often called _components_ of the tax.  For example: You may have an item that is charged a tax rate called "City import tax (8%)" that has two components: 
 * 
 * - A city tax of 5%. 
 * - An import tax of 3%.
 * 
 * > **Effective tax rates**  
 * > Where there are multiple components of a tax, each component may be calculated on the original amount and added together. Alternatively, one tax may be calculated on the sub-total of the original amount plus another tax, which is referred to as _compounding_. When there is compounding, the effective tax rate is the rate that, if applied to the original amount, would result in the total amount of tax with compounding.  
 * >
 * > **Example:**  
 * > A tax has two components. Both components have a rate of 10%, and one component is compound. In this case, there is a total tax rate of 20% but an effective tax rate of 21%. [Also see _Compound tax example_](#section-compound-tax-example).
 * > - For QuickBooks Online, Codat doesn't use compound rates. Instead, the calculated effective tax rate for each component is shown. This means that the effective and total rates are the same because the total tax rate is a sum of the component rates.
**/
export class GetTaxRate200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=components", elemType: GetTaxRate200ApplicationJSONComponents })
  components?: GetTaxRate200ApplicationJSONComponents[];

  @SpeakeasyMetadata({ data: "json, name=effectiveTaxRate" })
  effectiveTaxRate?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: GetTaxRate200ApplicationJSONMetadata;

  @SpeakeasyMetadata({ data: "json, name=modifiedDate" })
  modifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=sourceModifiedDate" })
  sourceModifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: GetTaxRate200ApplicationJSONStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=totalTaxRate" })
  totalTaxRate?: number;

  @SpeakeasyMetadata({ data: "json, name=validDatatypeLinks", elemType: GetTaxRate200ApplicationJSONValidDataTypeLinks })
  validDatatypeLinks?: GetTaxRate200ApplicationJSONValidDataTypeLinks[];
}

export class GetTaxRateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getTaxRate200ApplicationJSONObject?: GetTaxRate200ApplicationJSON;
}