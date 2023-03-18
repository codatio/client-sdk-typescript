import * as utils from "../internal/utils";
import { Files } from "./files";
import * as shared from "./models/shared";
import axios, { AxiosInstance } from "axios";

export const ServerList = ["https://api.codat.io"] as const;

export type SDKProps = {
  security?: shared.Security;
  defaultClient?: AxiosInstance;
  serverUrl?: string;
};

/* SDK Documentation: An API for uploading and downloading files from 'File Upload' Integrations.
 *
 * The Accounting file upload, Banking file upload, and Business documents file upload integrations provide simple file upload functionality.
 *
 * [Read more...](https://docs.codat.io/other/file-upload)
 *
 * [See our OpenAPI spec](https://github.com/codatio/oas)
 */
export class Codat {
  public files: Files;

  public _defaultClient: AxiosInstance;
  public _securityClient: AxiosInstance;
  public _serverURL: string;
  private _language = "typescript";
  private _sdkVersion = "0.5.1";
  private _genVersion = "1.12.3";
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

    this.files = new Files(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
  }
}
