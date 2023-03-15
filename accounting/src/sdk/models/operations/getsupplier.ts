import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Transform, Type } from "class-transformer";

export class GetSupplierPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=companyId",
  })
  companyId: string;

  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=supplierId",
  })
  supplierId: string;
}

export class GetSupplierRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSupplierPathParams;
}
export enum GetSupplierSourceModifiedDateAddressesTypeEnum {
  Unknown = "Unknown",
  Billing = "Billing",
  Delivery = "Delivery",
}

export class GetSupplierSourceModifiedDateAddresses extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "city" })
  city?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "country" })
  country?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "line1" })
  line1?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "line2" })
  line2?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "postalCode" })
  postalCode?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "region" })
  region?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: GetSupplierSourceModifiedDateAddressesTypeEnum;
}

export class GetSupplierSourceModifiedDateMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "isDeleted" })
  isDeleted?: boolean;
}
export enum GetSupplierSourceModifiedDateStatusEnum {
  Unknown = "Unknown",
  Active = "Active",
  Archived = "Archived",
}

// GetSupplierSourceModifiedDateSupplementalData
/**
 * Reference to a configured dynamic key value pair that is unique to the accounting platform. This feature is in private beta, contact us if you would like to learn more.
 **/
export class GetSupplierSourceModifiedDateSupplementalData extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "content" })
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
  @SpeakeasyMetadata({ elemType: GetSupplierSourceModifiedDateAddresses })
  @Expose({ name: "addresses" })
  @Type(() => GetSupplierSourceModifiedDateAddresses)
  addresses?: GetSupplierSourceModifiedDateAddresses[];

  @SpeakeasyMetadata()
  @Expose({ name: "contactName" })
  contactName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "defaultCurrency" })
  defaultCurrency?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "emailAddress" })
  emailAddress?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "metadata" })
  @Type(() => GetSupplierSourceModifiedDateMetadata)
  metadata?: GetSupplierSourceModifiedDateMetadata;

  @SpeakeasyMetadata()
  @Expose({ name: "modifiedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  modifiedDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "phone" })
  phone?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "registrationNumber" })
  registrationNumber?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "sourceModifiedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  sourceModifiedDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status: GetSupplierSourceModifiedDateStatusEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "supplementalData" })
  @Type(() => GetSupplierSourceModifiedDateSupplementalData)
  supplementalData?: GetSupplierSourceModifiedDateSupplementalData;

  @SpeakeasyMetadata()
  @Expose({ name: "supplierName" })
  supplierName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "taxNumber" })
  taxNumber?: string;
}

export class GetSupplierResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  sourceModifiedDate?: GetSupplierSourceModifiedDate;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
