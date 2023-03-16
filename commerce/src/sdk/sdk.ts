import * as utils from "../internal/utils";
import { CompanyInfo } from "./companyinfo";
import { Customers } from "./customers";
import { Disputes } from "./disputes";
import { Locations } from "./locations";
import * as shared from "./models/shared";
import { Orders } from "./orders";
import { Payments } from "./payments";
import { Products } from "./products";
import { TaxComponents } from "./taxcomponents";
import { Transactions } from "./transactions";
import axios, { AxiosInstance } from "axios";

export const ServerList = ["https://api.codat.io"] as const;

export type SDKProps = {
  security?: shared.Security;
  defaultClient?: AxiosInstance;
  serverUrl?: string;
};

/* SDK Documentation: Codat's Commerce API allows you to access standardised data from over 11 commerce and POS systems.
 *
 * Standardize how you connect to your customers’ payment, PoS, and eCommerce systems. Retrieve orders, payouts, payments, and product data in the same way for all the leading commerce platforms.
 *
 * [Read more...](https://docs.codat.io/commerce-api/overview)
 *
 * [See our OpenAPI spec](https://github.com/codatio/oas)
 */
export class Codat {
  public companyInfo: CompanyInfo;
  public customers: Customers;
  public disputes: Disputes;
  public locations: Locations;
  public orders: Orders;
  public payments: Payments;
  public products: Products;
  public taxComponents: TaxComponents;
  public transactions: Transactions;

  public _defaultClient: AxiosInstance;
  public _securityClient: AxiosInstance;
  public _serverURL: string;
  private _language = "typescript";
  private _sdkVersion = "0.5.0";
  private _genVersion = "1.12.0";
  private _globals: any;

  constructor(props?: SDKProps) {
    this._serverURL = props?.serverUrl ?? ServerList[0];

    this._defaultClient =
      props?.defaultClient ?? axios.create({ baseURL: this._serverURL });
    if (props?.security) {
      let security: shared.Security = props.security;
      if (!(props.security instanceof utils.SpeakeasyBase))
        security = new shared.Security(props.security);
      this._securityClient = utils.createSecurityClient(
        this._defaultClient,
        security
      );
    } else {
      this._securityClient = this._defaultClient;
    }

    this.companyInfo = new CompanyInfo(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );

    this.customers = new Customers(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );

    this.disputes = new Disputes(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );

    this.locations = new Locations(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );

    this.orders = new Orders(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );

    this.payments = new Payments(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );

    this.products = new Products(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );

    this.taxComponents = new TaxComponents(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );

    this.transactions = new Transactions(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
  }
}
