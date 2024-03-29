/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { BalanceSheet } from "./balancesheet";
import { CashFlow } from "./cashflow";
import { CodatLendingFinancialStatementsAccounts } from "./codatlendingfinancialstatementsaccounts";
import { ProfitAndLoss } from "./profitandloss";
import { SDKConfiguration } from "./sdk";

export class FinancialStatements {
    public accounts: CodatLendingFinancialStatementsAccounts;
    public balanceSheet: BalanceSheet;
    public cashFlow: CashFlow;
    public profitAndLoss: ProfitAndLoss;
    private sdkConfiguration: SDKConfiguration;

    constructor(sdkConfig: SDKConfiguration) {
        this.sdkConfiguration = sdkConfig;
        this.accounts = new CodatLendingFinancialStatementsAccounts(this.sdkConfiguration);
        this.balanceSheet = new BalanceSheet(this.sdkConfiguration);
        this.cashFlow = new CashFlow(this.sdkConfiguration);
        this.profitAndLoss = new ProfitAndLoss(this.sdkConfiguration);
    }
}
