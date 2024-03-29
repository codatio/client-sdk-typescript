/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { AccountTransactions } from "./accounttransactions";
import { CodatLendingDirectCosts } from "./codatlendingdirectcosts";
import { CodatLendingTransfers } from "./codatlendingtransfers";
import { JournalEntries } from "./journalentries";
import { Journals } from "./journals";
import { SDKConfiguration } from "./sdk";

export class Transactions {
    public accountTransactions: AccountTransactions;
    public directCosts: CodatLendingDirectCosts;
    public transfers: CodatLendingTransfers;
    public journalEntries: JournalEntries;
    public journals: Journals;
    private sdkConfiguration: SDKConfiguration;

    constructor(sdkConfig: SDKConfiguration) {
        this.sdkConfiguration = sdkConfig;
        this.accountTransactions = new AccountTransactions(this.sdkConfiguration);
        this.directCosts = new CodatLendingDirectCosts(this.sdkConfiguration);
        this.transfers = new CodatLendingTransfers(this.sdkConfiguration);
        this.journalEntries = new JournalEntries(this.sdkConfiguration);
        this.journals = new Journals(this.sdkConfiguration);
    }
}
