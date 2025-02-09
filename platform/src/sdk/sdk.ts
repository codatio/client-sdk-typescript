/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ClientSDK } from "../lib/sdks.js";
import { Companies } from "./companies.js";
import { ConnectionManagement } from "./connectionmanagement.js";
import { Connections } from "./connections.js";
import { CustomDataType } from "./customdatatype.js";
import { Integrations } from "./integrations.js";
import { PushData } from "./pushdata.js";
import { RefreshData } from "./refreshdata.js";
import { Settings } from "./settings.js";
import { SupplementalData } from "./supplementaldata.js";
import { Webhooks } from "./webhooks.js";

export class CodatPlatform extends ClientSDK {
  private _companies?: Companies;
  get companies(): Companies {
    return (this._companies ??= new Companies(this._options));
  }

  private _connections?: Connections;
  get connections(): Connections {
    return (this._connections ??= new Connections(this._options));
  }

  private _connectionManagement?: ConnectionManagement;
  get connectionManagement(): ConnectionManagement {
    return (this._connectionManagement ??= new ConnectionManagement(
      this._options,
    ));
  }

  private _refreshData?: RefreshData;
  get refreshData(): RefreshData {
    return (this._refreshData ??= new RefreshData(this._options));
  }

  private _webhooks?: Webhooks;
  get webhooks(): Webhooks {
    return (this._webhooks ??= new Webhooks(this._options));
  }

  private _integrations?: Integrations;
  get integrations(): Integrations {
    return (this._integrations ??= new Integrations(this._options));
  }

  private _settings?: Settings;
  get settings(): Settings {
    return (this._settings ??= new Settings(this._options));
  }

  private _pushData?: PushData;
  get pushData(): PushData {
    return (this._pushData ??= new PushData(this._options));
  }

  private _supplementalData?: SupplementalData;
  get supplementalData(): SupplementalData {
    return (this._supplementalData ??= new SupplementalData(this._options));
  }

  private _customDataType?: CustomDataType;
  get customDataType(): CustomDataType {
    return (this._customDataType ??= new CustomDataType(this._options));
  }
}
