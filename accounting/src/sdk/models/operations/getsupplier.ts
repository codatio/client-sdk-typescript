import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class GetSupplierPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=supplierId" })
  supplierId: string;
}

export class GetSupplierSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeAPIKey;
}

export class GetSupplierRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSupplierPathParams;

  @SpeakeasyMetadata()
  security: GetSupplierSecurity;
}
export enum GetSupplierSourceModifiedDateAddressesTypeEnum {
    Unknown = "Unknown",
    Billing = "Billing",
    Delivery = "Delivery"
}

export class GetSupplierSourceModifiedDateAddresses extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=city" })
  city?: string;

  @SpeakeasyMetadata({ data: "json, name=country" })
  country?: string;

  @SpeakeasyMetadata({ data: "json, name=line1" })
  line1?: string;

  @SpeakeasyMetadata({ data: "json, name=line2" })
  line2?: string;

  @SpeakeasyMetadata({ data: "json, name=postalCode" })
  postalCode?: string;

  @SpeakeasyMetadata({ data: "json, name=region" })
  region?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: GetSupplierSourceModifiedDateAddressesTypeEnum;
}

export class GetSupplierSourceModifiedDateMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=isDeleted" })
  isDeleted?: boolean;
}
export enum GetSupplierSourceModifiedDateStatusEnum {
    Unknown = "Unknown",
    Active = "Active",
    Archived = "Archived"
}

export class GetSupplierSourceModifiedDateSupplementalData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=content" })
  content?: Record<string, Record<string, any>>;
}

// GetSupplierSourceModifiedDate
/** 
 * > View the coverage for suppliers in the <a className="external" href="https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=suppliers" target="_blank">Data coverage explorer</a>.
 * 
 * ## Overview
 * 
 * From the **Suppliers** endpoints, you can retrieve a list of [all the suppliers for a company](https://api.codat.io/swagger/index.html#/Suppliers/get_companies__companyId__data_suppliers). Suppliers' data links to accounts payable [bills](https://docs.codat.io/accounting-api#/schemas/Bill).
**/
export class GetSupplierSourceModifiedDate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=addresses", elemType: GetSupplierSourceModifiedDateAddresses })
  addresses?: GetSupplierSourceModifiedDateAddresses[];

  @SpeakeasyMetadata({ data: "json, name=contactName" })
  contactName?: string;

  @SpeakeasyMetadata({ data: "json, name=defaultCurrency" })
  defaultCurrency?: string;

  @SpeakeasyMetadata({ data: "json, name=emailAddress" })
  emailAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: GetSupplierSourceModifiedDateMetadata;

  @SpeakeasyMetadata({ data: "json, name=modifiedDate" })
  modifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=phone" })
  phone?: string;

  @SpeakeasyMetadata({ data: "json, name=registrationNumber" })
  registrationNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=sourceModifiedDate" })
  sourceModifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: GetSupplierSourceModifiedDateStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=supplementalData" })
  supplementalData?: GetSupplierSourceModifiedDateSupplementalData;

  @SpeakeasyMetadata({ data: "json, name=supplierName" })
  supplierName?: string;

  @SpeakeasyMetadata({ data: "json, name=taxNumber" })
  taxNumber?: string;
}

export class GetSupplierResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  sourceModifiedDate?: GetSupplierSourceModifiedDate;

  @SpeakeasyMetadata()
  statusCode: number;
}