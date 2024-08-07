/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SDKHooks } from "../hooks/hooks.js";
import { SDKOptions, serverURLFromOptions } from "../lib/config.js";
import { HTTPClient } from "../lib/http.js";
import { ClientSDK } from "../lib/sdks.js";
import { Accounts } from "./accounts.js";
import { Adjustments } from "./adjustments.js";
import { Attachments } from "./attachments.js";
import { Companies } from "./companies.js";
import { Configuration } from "./configuration.js";
import { Connections } from "./connections.js";
import { Customers } from "./customers.js";
import { Expenses } from "./expenses.js";
import { ManageData } from "./managedata.js";
import { MappingOptions } from "./mappingoptions.js";
import { PushOperations } from "./pushoperations.js";
import { Reimbursements } from "./reimbursements.js";
import { Suppliers } from "./suppliers.js";
import { Sync } from "./sync.js";
import { TransactionStatus } from "./transactionstatus.js";
import { Transfers } from "./transfers.js";

export class CodatSyncExpenses extends ClientSDK {
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

    private _configuration?: Configuration;
    get configuration(): Configuration {
        return (this._configuration ??= new Configuration(this.options$));
    }

    private _mappingOptions?: MappingOptions;
    get mappingOptions(): MappingOptions {
        return (this._mappingOptions ??= new MappingOptions(this.options$));
    }

    private _sync?: Sync;
    get sync(): Sync {
        return (this._sync ??= new Sync(this.options$));
    }

    private _transactionStatus?: TransactionStatus;
    get transactionStatus(): TransactionStatus {
        return (this._transactionStatus ??= new TransactionStatus(this.options$));
    }

    private _expenses?: Expenses;
    get expenses(): Expenses {
        return (this._expenses ??= new Expenses(this.options$));
    }

    private _transfers?: Transfers;
    get transfers(): Transfers {
        return (this._transfers ??= new Transfers(this.options$));
    }

    private _adjustments?: Adjustments;
    get adjustments(): Adjustments {
        return (this._adjustments ??= new Adjustments(this.options$));
    }

    private _reimbursements?: Reimbursements;
    get reimbursements(): Reimbursements {
        return (this._reimbursements ??= new Reimbursements(this.options$));
    }

    private _attachments?: Attachments;
    get attachments(): Attachments {
        return (this._attachments ??= new Attachments(this.options$));
    }

    private _manageData?: ManageData;
    get manageData(): ManageData {
        return (this._manageData ??= new ManageData(this.options$));
    }

    private _pushOperations?: PushOperations;
    get pushOperations(): PushOperations {
        return (this._pushOperations ??= new PushOperations(this.options$));
    }

    private _accounts?: Accounts;
    get accounts(): Accounts {
        return (this._accounts ??= new Accounts(this.options$));
    }

    private _customers?: Customers;
    get customers(): Customers {
        return (this._customers ??= new Customers(this.options$));
    }

    private _suppliers?: Suppliers;
    get suppliers(): Suppliers {
        return (this._suppliers ??= new Suppliers(this.options$));
    }
}
