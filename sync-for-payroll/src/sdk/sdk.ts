/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SDKHooks } from "../hooks/hooks.js";
import { SDKOptions, serverURLFromOptions } from "../lib/config.js";
import { HTTPClient } from "../lib/http.js";
import { ClientSDK } from "../lib/sdks.js";
import { Accounts } from "./accounts.js";
import { Companies } from "./companies.js";
import { CompanyInfo } from "./companyinfo.js";
import { Connections } from "./connections.js";
import { JournalEntries } from "./journalentries.js";
import { Journals } from "./journals.js";
import { ManageData } from "./managedata.js";
import { TrackingCategories } from "./trackingcategories.js";

export class CodatSyncPayroll extends ClientSDK {
    private readonly options$: SDKOptions & { hooks?: SDKHooks };

    constructor(options: SDKOptions = {}) {
        const opt = options as unknown;
        let hooks: SDKHooks;
        if (
            typeof opt === "object" &&
            opt != null &&
            "hooks" in opt &&
            opt.hooks instanceof SDKHooks
        ) {
            hooks = opt.hooks;
        } else {
            hooks = new SDKHooks();
        }

        super({
            client: options.httpClient || new HTTPClient(),
            baseURL: serverURLFromOptions(options),
            hooks,
        });

        this.options$ = { ...options, hooks };
        void this.options$;
    }

    private _companies?: Companies;
    get companies(): Companies {
        return (this._companies ??= new Companies(this.options$));
    }

    private _connections?: Connections;
    get connections(): Connections {
        return (this._connections ??= new Connections(this.options$));
    }

    private _manageData?: ManageData;
    get manageData(): ManageData {
        return (this._manageData ??= new ManageData(this.options$));
    }

    private _accounts?: Accounts;
    get accounts(): Accounts {
        return (this._accounts ??= new Accounts(this.options$));
    }

    private _journalEntries?: JournalEntries;
    get journalEntries(): JournalEntries {
        return (this._journalEntries ??= new JournalEntries(this.options$));
    }

    private _journals?: Journals;
    get journals(): Journals {
        return (this._journals ??= new Journals(this.options$));
    }

    private _trackingCategories?: TrackingCategories;
    get trackingCategories(): TrackingCategories {
        return (this._trackingCategories ??= new TrackingCategories(this.options$));
    }

    private _companyInfo?: CompanyInfo;
    get companyInfo(): CompanyInfo {
        return (this._companyInfo ??= new CompanyInfo(this.options$));
    }
}
