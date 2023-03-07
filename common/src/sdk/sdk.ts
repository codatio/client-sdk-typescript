import * as utils from "../internal/utils";
import { Companies } from "./companies";
import { Connections } from "./connections";
import { DataStatus } from "./datastatus";
import { Integrations } from "./integrations";
import * as shared from "./models/shared";
import { PushData } from "./pushdata";
import { RefreshData } from "./refreshdata";
import { Settings } from "./settings";
import { Webhooks } from "./webhooks";
import axios, { AxiosInstance } from "axios";

export const ServerList = [
	"https://api.codat.io",
] as const;



export type SDKProps = {
  defaultClient?: AxiosInstance;

  security?: shared.Security;

  serverUrl?: string;
}

/* SDK Documentation: An API for the common components of all of Codat's products.
 * 
 * These end points cover creating and managing your companies, data connections, and integrations.
 * 
 * [Read about the building blocks of Codat...](https://docs.codat.io/core-concepts/companies)
 * 
 * [See our OpenAPI spec](https://github.com/codatio/oas) */
export class Codat {
  public companies: Companies;
  public connections: Connections;
  public dataStatus: DataStatus;
  public integrations: Integrations;
  public pushData: PushData;
  public refreshData: RefreshData;
  public settings: Settings;
  public webhooks: Webhooks;

  public _defaultClient: AxiosInstance;
  public _securityClient: AxiosInstance;
  public _serverURL: string;
  private _language = "typescript";
  private _sdkVersion = "0.1.2";
  private _genVersion = "1.8.5";

  constructor(props: SDKProps) {
    this._serverURL = props.serverUrl ?? ServerList[0];

    this._defaultClient = props.defaultClient ?? axios.create({ baseURL: this._serverURL });
    if (props.security) {
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
    
    this.companies = new Companies(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.connections = new Connections(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.dataStatus = new DataStatus(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.integrations = new Integrations(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.pushData = new PushData(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.refreshData = new RefreshData(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.settings = new Settings(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.webhooks = new Webhooks(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
  }
  
}