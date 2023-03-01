import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class PostDirectIncomePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=connectionId" })
  connectionId: string;
}

export class PostDirectIncomeQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timeoutInMinutes" })
  timeoutInMinutes?: number;
}

// PostDirectIncomeSourceModifiedDateContactRef
/** 
 * A customer or supplier associated with the direct income.
**/
export class PostDirectIncomeSourceModifiedDateContactRef extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dataType" })
  dataType?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;
}

// PostDirectIncomeSourceModifiedDateLineItemsAccountRef
/** 
 * Reference to the account to which the line item is linked.
**/
export class PostDirectIncomeSourceModifiedDateLineItemsAccountRef extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}

// PostDirectIncomeSourceModifiedDateLineItemsItemRef
/** 
 * Reference to the product, service type, or inventory item to which the direct cost is linked.
**/
export class PostDirectIncomeSourceModifiedDateLineItemsItemRef extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}

// PostDirectIncomeSourceModifiedDateLineItemsTaxRateRef
/** 
 * Reference to the tax rate to which the line item is linked.
**/
export class PostDirectIncomeSourceModifiedDateLineItemsTaxRateRef extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=effectiveTaxRate" })
  effectiveTaxRate?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}

export class PostDirectIncomeSourceModifiedDateLineItemsTrackingCategoryRefs extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}

export class PostDirectIncomeSourceModifiedDateLineItems extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountRef" })
  accountRef?: PostDirectIncomeSourceModifiedDateLineItemsAccountRef;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=discountAmount" })
  discountAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=discountPercentage" })
  discountPercentage?: number;

  @SpeakeasyMetadata({ data: "json, name=itemRef" })
  itemRef?: PostDirectIncomeSourceModifiedDateLineItemsItemRef;

  @SpeakeasyMetadata({ data: "json, name=quantity" })
  quantity: number;

  @SpeakeasyMetadata({ data: "json, name=subTotal" })
  subTotal?: number;

  @SpeakeasyMetadata({ data: "json, name=taxAmount" })
  taxAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=taxRateRef" })
  taxRateRef?: PostDirectIncomeSourceModifiedDateLineItemsTaxRateRef;

  @SpeakeasyMetadata({ data: "json, name=totalAmount" })
  totalAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=trackingCategoryRefs", elemType: PostDirectIncomeSourceModifiedDateLineItemsTrackingCategoryRefs })
  trackingCategoryRefs?: PostDirectIncomeSourceModifiedDateLineItemsTrackingCategoryRefs[];

  @SpeakeasyMetadata({ data: "json, name=unitAmount" })
  unitAmount: number;
}

export class PostDirectIncomeSourceModifiedDateMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=isDeleted" })
  isDeleted?: boolean;
}

export class PostDirectIncomeSourceModifiedDatePaymentAllocationsAllocation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allocatedOnDate" })
  allocatedOnDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: string;

  @SpeakeasyMetadata({ data: "json, name=currencyRate" })
  currencyRate?: number;

  @SpeakeasyMetadata({ data: "json, name=totalAmount" })
  totalAmount?: number;
}

// PostDirectIncomeSourceModifiedDatePaymentAllocationsPaymentAccountRef
/** 
 * The account that the allocated payment is made from or to.
**/
export class PostDirectIncomeSourceModifiedDatePaymentAllocationsPaymentAccountRef extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}

export class PostDirectIncomeSourceModifiedDatePaymentAllocationsPayment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountRef" })
  accountRef?: PostDirectIncomeSourceModifiedDatePaymentAllocationsPaymentAccountRef;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: string;

  @SpeakeasyMetadata({ data: "json, name=currencyRate" })
  currencyRate?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=note" })
  note?: string;

  @SpeakeasyMetadata({ data: "json, name=paidOnDate" })
  paidOnDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=reference" })
  reference?: string;

  @SpeakeasyMetadata({ data: "json, name=totalAmount" })
  totalAmount?: number;
}

export class PostDirectIncomeSourceModifiedDatePaymentAllocations extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allocation" })
  allocation: PostDirectIncomeSourceModifiedDatePaymentAllocationsAllocation;

  @SpeakeasyMetadata({ data: "json, name=payment" })
  payment: PostDirectIncomeSourceModifiedDatePaymentAllocationsPayment;
}

export class PostDirectIncomeSourceModifiedDateSupplementalData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=content" })
  content?: Record<string, Record<string, any>>;
}

// PostDirectIncomeSourceModifiedDate
/** 
 * > **Language tip:**  Direct incomes may also be referred to as **Receive transactions**, **Receive money transactions**, **Sales receipts**, or **Cash sales** in various accounting platforms.
 * 
 * > View the coverage for direct incomes in the <a className="external" href="https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=directIncomes" target="_blank">Data coverage explorer</a>.
 * 
 * ## Overview
 * 
 * Direct incomes include: 
 * 
 * - Selling an item directly to a contact, and receiving payment at the point of the sale.
 * - Refunding an item in cash to a contact.
 * - Depositing money into a bank account.
 * 
 * From the Direct Incomes endpoints, you can: 
 * 
 * - [Get a list of all direct incomes for a specific company](https://api-uat.codat.io/swagger/index.html#/DirectIncomes/get_companies__companyId__connections__connectionId__data_directIncomes)
 * - [Get a single direct income for a specific company and connection](https://api-uat.codat.io/swagger/index.html#/DirectIncomes/get_companies__companyId__connections__connectionId__data_directIncomes__directIncomeId_)
 * - [Add a new direct income to a specific company's accounting package](https://api-uat.codat.io/swagger/index.html#/DirectIncomes/post_companies__companyId__connections__connectionId__push_directIncomes)
 * 
 * Direct incomes is a child data type of [account transactions](https://docs.codat.io/accounting-api#/schemas/AccountTransaction).
 * 
**/
export class PostDirectIncomeSourceModifiedDate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=contactRef" })
  contactRef?: PostDirectIncomeSourceModifiedDateContactRef;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency: string;

  @SpeakeasyMetadata({ data: "json, name=currencyRate" })
  currencyRate?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=issueDate" })
  issueDate: Date;

  @SpeakeasyMetadata({ data: "json, name=lineItems", elemType: PostDirectIncomeSourceModifiedDateLineItems })
  lineItems: PostDirectIncomeSourceModifiedDateLineItems[];

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: PostDirectIncomeSourceModifiedDateMetadata;

  @SpeakeasyMetadata({ data: "json, name=modifiedDate" })
  modifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=note" })
  note?: string;

  @SpeakeasyMetadata({ data: "json, name=paymentAllocations", elemType: PostDirectIncomeSourceModifiedDatePaymentAllocations })
  paymentAllocations: PostDirectIncomeSourceModifiedDatePaymentAllocations[];

  @SpeakeasyMetadata({ data: "json, name=reference" })
  reference?: string;

  @SpeakeasyMetadata({ data: "json, name=sourceModifiedDate" })
  sourceModifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=subTotal" })
  subTotal: number;

  @SpeakeasyMetadata({ data: "json, name=supplementalData" })
  supplementalData?: PostDirectIncomeSourceModifiedDateSupplementalData;

  @SpeakeasyMetadata({ data: "json, name=taxAmount" })
  taxAmount: number;

  @SpeakeasyMetadata({ data: "json, name=totalAmount" })
  totalAmount: number;
}

export class PostDirectIncomeSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeAPIKey;
}

export class PostDirectIncomeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostDirectIncomePathParams;

  @SpeakeasyMetadata()
  queryParams: PostDirectIncomeQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PostDirectIncomeSourceModifiedDate;

  @SpeakeasyMetadata()
  security: PostDirectIncomeSecurity;
}

export class PostDirectIncome200ApplicationJSONChangesPushOperationRecordRef extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dataType" })
  dataType?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;
}
export enum PostDirectIncome200ApplicationJSONChangesTypeEnum {
    Unknown = "Unknown",
    Created = "Created",
    Modified = "Modified",
    Deleted = "Deleted",
    AttachmentUploaded = "AttachmentUploaded"
}

export class PostDirectIncome200ApplicationJSONChanges extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attachmentId" })
  attachmentId?: string;

  @SpeakeasyMetadata({ data: "json, name=recordRef" })
  recordRef?: PostDirectIncome200ApplicationJSONChangesPushOperationRecordRef;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: PostDirectIncome200ApplicationJSONChangesTypeEnum;
}

// PostDirectIncome200ApplicationJSONSourceModifiedDateContactRef
/** 
 * A customer or supplier associated with the direct income.
**/
export class PostDirectIncome200ApplicationJSONSourceModifiedDateContactRef extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dataType" })
  dataType?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;
}

// PostDirectIncome200ApplicationJSONSourceModifiedDateLineItemsAccountRef
/** 
 * Reference to the account to which the line item is linked.
**/
export class PostDirectIncome200ApplicationJSONSourceModifiedDateLineItemsAccountRef extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}

// PostDirectIncome200ApplicationJSONSourceModifiedDateLineItemsItemRef
/** 
 * Reference to the product, service type, or inventory item to which the direct cost is linked.
**/
export class PostDirectIncome200ApplicationJSONSourceModifiedDateLineItemsItemRef extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}

// PostDirectIncome200ApplicationJSONSourceModifiedDateLineItemsTaxRateRef
/** 
 * Reference to the tax rate to which the line item is linked.
**/
export class PostDirectIncome200ApplicationJSONSourceModifiedDateLineItemsTaxRateRef extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=effectiveTaxRate" })
  effectiveTaxRate?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}

export class PostDirectIncome200ApplicationJSONSourceModifiedDateLineItemsTrackingCategoryRefs extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}

export class PostDirectIncome200ApplicationJSONSourceModifiedDateLineItems extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountRef" })
  accountRef?: PostDirectIncome200ApplicationJSONSourceModifiedDateLineItemsAccountRef;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=discountAmount" })
  discountAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=discountPercentage" })
  discountPercentage?: number;

  @SpeakeasyMetadata({ data: "json, name=itemRef" })
  itemRef?: PostDirectIncome200ApplicationJSONSourceModifiedDateLineItemsItemRef;

  @SpeakeasyMetadata({ data: "json, name=quantity" })
  quantity: number;

  @SpeakeasyMetadata({ data: "json, name=subTotal" })
  subTotal?: number;

  @SpeakeasyMetadata({ data: "json, name=taxAmount" })
  taxAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=taxRateRef" })
  taxRateRef?: PostDirectIncome200ApplicationJSONSourceModifiedDateLineItemsTaxRateRef;

  @SpeakeasyMetadata({ data: "json, name=totalAmount" })
  totalAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=trackingCategoryRefs", elemType: PostDirectIncome200ApplicationJSONSourceModifiedDateLineItemsTrackingCategoryRefs })
  trackingCategoryRefs?: PostDirectIncome200ApplicationJSONSourceModifiedDateLineItemsTrackingCategoryRefs[];

  @SpeakeasyMetadata({ data: "json, name=unitAmount" })
  unitAmount: number;
}

export class PostDirectIncome200ApplicationJSONSourceModifiedDateMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=isDeleted" })
  isDeleted?: boolean;
}

export class PostDirectIncome200ApplicationJSONSourceModifiedDatePaymentAllocationsAllocation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allocatedOnDate" })
  allocatedOnDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: string;

  @SpeakeasyMetadata({ data: "json, name=currencyRate" })
  currencyRate?: number;

  @SpeakeasyMetadata({ data: "json, name=totalAmount" })
  totalAmount?: number;
}

// PostDirectIncome200ApplicationJSONSourceModifiedDatePaymentAllocationsPaymentAccountRef
/** 
 * The account that the allocated payment is made from or to.
**/
export class PostDirectIncome200ApplicationJSONSourceModifiedDatePaymentAllocationsPaymentAccountRef extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}

export class PostDirectIncome200ApplicationJSONSourceModifiedDatePaymentAllocationsPayment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountRef" })
  accountRef?: PostDirectIncome200ApplicationJSONSourceModifiedDatePaymentAllocationsPaymentAccountRef;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: string;

  @SpeakeasyMetadata({ data: "json, name=currencyRate" })
  currencyRate?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=note" })
  note?: string;

  @SpeakeasyMetadata({ data: "json, name=paidOnDate" })
  paidOnDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=reference" })
  reference?: string;

  @SpeakeasyMetadata({ data: "json, name=totalAmount" })
  totalAmount?: number;
}

export class PostDirectIncome200ApplicationJSONSourceModifiedDatePaymentAllocations extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allocation" })
  allocation: PostDirectIncome200ApplicationJSONSourceModifiedDatePaymentAllocationsAllocation;

  @SpeakeasyMetadata({ data: "json, name=payment" })
  payment: PostDirectIncome200ApplicationJSONSourceModifiedDatePaymentAllocationsPayment;
}

export class PostDirectIncome200ApplicationJSONSourceModifiedDateSupplementalData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=content" })
  content?: Record<string, Record<string, any>>;
}

// PostDirectIncome200ApplicationJSONSourceModifiedDate
/** 
 * > **Language tip:**  Direct incomes may also be referred to as **Receive transactions**, **Receive money transactions**, **Sales receipts**, or **Cash sales** in various accounting platforms.
 * 
 * > View the coverage for direct incomes in the <a className="external" href="https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=directIncomes" target="_blank">Data coverage explorer</a>.
 * 
 * ## Overview
 * 
 * Direct incomes include: 
 * 
 * - Selling an item directly to a contact, and receiving payment at the point of the sale.
 * - Refunding an item in cash to a contact.
 * - Depositing money into a bank account.
 * 
 * From the Direct Incomes endpoints, you can: 
 * 
 * - [Get a list of all direct incomes for a specific company](https://api-uat.codat.io/swagger/index.html#/DirectIncomes/get_companies__companyId__connections__connectionId__data_directIncomes)
 * - [Get a single direct income for a specific company and connection](https://api-uat.codat.io/swagger/index.html#/DirectIncomes/get_companies__companyId__connections__connectionId__data_directIncomes__directIncomeId_)
 * - [Add a new direct income to a specific company's accounting package](https://api-uat.codat.io/swagger/index.html#/DirectIncomes/post_companies__companyId__connections__connectionId__push_directIncomes)
 * 
 * Direct incomes is a child data type of [account transactions](https://docs.codat.io/accounting-api#/schemas/AccountTransaction).
 * 
**/
export class PostDirectIncome200ApplicationJSONSourceModifiedDate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=contactRef" })
  contactRef?: PostDirectIncome200ApplicationJSONSourceModifiedDateContactRef;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency: string;

  @SpeakeasyMetadata({ data: "json, name=currencyRate" })
  currencyRate?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=issueDate" })
  issueDate: Date;

  @SpeakeasyMetadata({ data: "json, name=lineItems", elemType: PostDirectIncome200ApplicationJSONSourceModifiedDateLineItems })
  lineItems: PostDirectIncome200ApplicationJSONSourceModifiedDateLineItems[];

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: PostDirectIncome200ApplicationJSONSourceModifiedDateMetadata;

  @SpeakeasyMetadata({ data: "json, name=modifiedDate" })
  modifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=note" })
  note?: string;

  @SpeakeasyMetadata({ data: "json, name=paymentAllocations", elemType: PostDirectIncome200ApplicationJSONSourceModifiedDatePaymentAllocations })
  paymentAllocations: PostDirectIncome200ApplicationJSONSourceModifiedDatePaymentAllocations[];

  @SpeakeasyMetadata({ data: "json, name=reference" })
  reference?: string;

  @SpeakeasyMetadata({ data: "json, name=sourceModifiedDate" })
  sourceModifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=subTotal" })
  subTotal: number;

  @SpeakeasyMetadata({ data: "json, name=supplementalData" })
  supplementalData?: PostDirectIncome200ApplicationJSONSourceModifiedDateSupplementalData;

  @SpeakeasyMetadata({ data: "json, name=taxAmount" })
  taxAmount: number;

  @SpeakeasyMetadata({ data: "json, name=totalAmount" })
  totalAmount: number;
}
export enum PostDirectIncome200ApplicationJSONStatusEnum {
    Pending = "Pending",
    Failed = "Failed",
    Success = "Success",
    TimedOut = "TimedOut"
}

export class PostDirectIncome200ApplicationJSONValidationValidationItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=itemId" })
  itemId?: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=validatorName" })
  validatorName?: string;
}

// PostDirectIncome200ApplicationJSONValidation
/** 
 * A human-readable object describing validation decisions Codat has made when pushing data into the platform. If a push has failed because of validation errors, they will be detailed here.
**/
export class PostDirectIncome200ApplicationJSONValidation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: PostDirectIncome200ApplicationJSONValidationValidationItem })
  errors?: PostDirectIncome200ApplicationJSONValidationValidationItem[];

  @SpeakeasyMetadata({ data: "json, name=warnings", elemType: PostDirectIncome200ApplicationJSONValidationValidationItem })
  warnings?: PostDirectIncome200ApplicationJSONValidationValidationItem[];
}

export class PostDirectIncome200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=changes", elemType: PostDirectIncome200ApplicationJSONChanges })
  changes?: PostDirectIncome200ApplicationJSONChanges[];

  @SpeakeasyMetadata({ data: "json, name=companyId" })
  companyId: string;

  @SpeakeasyMetadata({ data: "json, name=completedOnUtc" })
  completedOnUtc?: Date;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: PostDirectIncome200ApplicationJSONSourceModifiedDate;

  @SpeakeasyMetadata({ data: "json, name=dataConnectionKey" })
  dataConnectionKey: string;

  @SpeakeasyMetadata({ data: "json, name=dataType" })
  dataType?: string;

  @SpeakeasyMetadata({ data: "json, name=errorMessage" })
  errorMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=pushOperationKey" })
  pushOperationKey: string;

  @SpeakeasyMetadata({ data: "json, name=requestedOnUtc" })
  requestedOnUtc: Date;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: PostDirectIncome200ApplicationJSONStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=statusCode" })
  statusCode: number;

  @SpeakeasyMetadata({ data: "json, name=timeoutInMinutes" })
  timeoutInMinutes?: number;

  @SpeakeasyMetadata({ data: "json, name=timeoutInSeconds" })
  timeoutInSeconds?: number;

  @SpeakeasyMetadata({ data: "json, name=validation" })
  validation?: PostDirectIncome200ApplicationJSONValidation;
}

export class PostDirectIncomeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  postDirectIncome200ApplicationJSONObject?: PostDirectIncome200ApplicationJSON;
}