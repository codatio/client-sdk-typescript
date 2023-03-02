import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Transform, Type } from "class-transformer";


export class GetPaymentMethodPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=paymentMethodId" })
  paymentMethodId: string;
}

export class GetPaymentMethodSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header;name=Authorization" })
  apiKey: string;
}

export class GetPaymentMethodRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetPaymentMethodPathParams;

  @SpeakeasyMetadata()
  security: GetPaymentMethodSecurity;
}

export class GetPaymentMethodSourceModifiedDateMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "isDeleted" })
  isDeleted?: boolean;
}
export enum GetPaymentMethodSourceModifiedDateStatusEnum {
    Unknown = "Unknown",
    Active = "Active",
    Archived = "Archived"
}
export enum GetPaymentMethodSourceModifiedDateTypeEnum {
    Unknown = "Unknown",
    Cash = "Cash",
    Check = "Check",
    CreditCard = "CreditCard",
    DebitCard = "DebitCard",
    BankTransfer = "BankTransfer",
    Other = "Other"
}

// GetPaymentMethodSourceModifiedDate
/** 
 * > View the coverage for payment methods in the <a className="external" href="https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=paymentMethods" target="_blank">Data coverage explorer</a>.
 * 
 * ## Overview
 * 
 * A Payment Method represents the payment method(s) used to pay a Bill. Payment Methods are referenced on [Bill Payments](https://docs.codat.io/accounting-api#/schemas/BillPayment) and [Payments](https://docs.codat.io/accounting-api#/schemas/Payment).
 * 
 * From the Payment Methods endpoints you can retrieve:
 * 
 * - A list of all the Payment Methods used by a company: `GET/companies/{companyId}/data/paymentMethods`.
 * - The details of an individual Payment Method:  
 *   `GET /companies/{companyId}/data/paymentMethods/{paymentMethodId}`.
**/
export class GetPaymentMethodSourceModifiedDate extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "metadata" })
  @Type(() => GetPaymentMethodSourceModifiedDateMetadata)
  metadata?: GetPaymentMethodSourceModifiedDateMetadata;

  @SpeakeasyMetadata()
  @Expose({ name: "modifiedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  modifiedDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "sourceModifiedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  sourceModifiedDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status?: GetPaymentMethodSourceModifiedDateStatusEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type?: GetPaymentMethodSourceModifiedDateTypeEnum;
}

export class GetPaymentMethodResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  sourceModifiedDate?: GetPaymentMethodSourceModifiedDate;

  @SpeakeasyMetadata()
  statusCode: number;
}