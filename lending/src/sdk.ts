/* tslint:disable */
/* eslint-disable */
import { Configuration, ConfigurationParameters } from './runtime';
import type * as shared from './sdk/models/index';
import type * as webhooks from './sdk/models/webhooks/index';
import { SDKOptions, resolveServerURL, resolveAuthHeader, resolveUserAgent, makeFetch, HTTPClient } from './lib/sdkconfig';
import { SDKHooks } from './hooks/hooks';
import { validateWebhook as runValidateWebhook } from './funcs/validateWebhook';
import {
    AccountBalances,
    AccountTransactions,
    AccountingBankData,
    Accounts,
    BalanceSheet,
    BankAccounts,
    BankStatements,
    BankTransactions,
    BillCreditNotes,
    BillPayments,
    Bills,
    CashFlow,
    CategorizedStatement,
    CodatLendingBankingAccounts,
    CodatLendingCustomers,
    CodatLendingDirectCosts,
    CodatLendingLoanWritebackAccounts,
    CodatLendingLoanWritebackPayments,
    CodatLendingPayments,
    CodatLendingReports,
    CodatLendingSalesTransactions,
    CodatLendingSuppliers,
    CodatLendingTransactions,
    CodatLendingTransfers,
    Companies,
    CompanyInfo,
    Connections,
    CreateOperations,
    CreditNotes,
    Customers,
    DataIntegrity,
    DirectCosts,
    DirectIncomes,
    Disputes,
    ExcelReports,
    FileUpload,
    FinancialSummary,
    Invoices,
    JournalEntries,
    Journals,
    Liabilities,
    Locations,
    ManageData,
    ManageReports,
    Metrics,
    Orders,
    PaymentMethods,
    Payments,
    ProductCategories,
    Products,
    ProfitAndLoss,
    Reports,
    SourceAccounts,
    Suppliers,
    TransactionCategories,
    Transfers,
} from './apis/index';

export class AccountsPayable {
    private readonly _config: Configuration;

    constructor(configuration: Configuration) {
        this._config = configuration;
    }

    private _billCreditNotes?: BillCreditNotes;
    get billCreditNotes(): BillCreditNotes {
        if (!this._billCreditNotes) { this._billCreditNotes = new BillCreditNotes(this._config); }
        return this._billCreditNotes;
    }

    private _billPayments?: BillPayments;
    get billPayments(): BillPayments {
        if (!this._billPayments) { this._billPayments = new BillPayments(this._config); }
        return this._billPayments;
    }

    private _bills?: Bills;
    get bills(): Bills {
        if (!this._bills) { this._bills = new Bills(this._config); }
        return this._bills;
    }

    private _suppliers?: Suppliers;
    get suppliers(): Suppliers {
        if (!this._suppliers) { this._suppliers = new Suppliers(this._config); }
        return this._suppliers;
    }
}

export class AccountsReceivable {
    private readonly _config: Configuration;

    constructor(configuration: Configuration) {
        this._config = configuration;
    }

    private _creditNotes?: CreditNotes;
    get creditNotes(): CreditNotes {
        if (!this._creditNotes) { this._creditNotes = new CreditNotes(this._config); }
        return this._creditNotes;
    }

    private _customers?: Customers;
    get customers(): Customers {
        if (!this._customers) { this._customers = new Customers(this._config); }
        return this._customers;
    }

    private _directIncomes?: DirectIncomes;
    get directIncomes(): DirectIncomes {
        if (!this._directIncomes) { this._directIncomes = new DirectIncomes(this._config); }
        return this._directIncomes;
    }

    private _invoices?: Invoices;
    get invoices(): Invoices {
        if (!this._invoices) { this._invoices = new Invoices(this._config); }
        return this._invoices;
    }

    private _payments?: Payments;
    get payments(): Payments {
        if (!this._payments) { this._payments = new Payments(this._config); }
        return this._payments;
    }

    private _reports?: CodatLendingReports;
    get reports(): CodatLendingReports {
        if (!this._reports) { this._reports = new CodatLendingReports(this._config); }
        return this._reports;
    }
}

export class Banking {
    private readonly _config: Configuration;

    constructor(configuration: Configuration) {
        this._config = configuration;
    }

    private _accountBalances?: AccountBalances;
    get accountBalances(): AccountBalances {
        if (!this._accountBalances) { this._accountBalances = new AccountBalances(this._config); }
        return this._accountBalances;
    }

    private _accounts?: CodatLendingBankingAccounts;
    get accounts(): CodatLendingBankingAccounts {
        if (!this._accounts) { this._accounts = new CodatLendingBankingAccounts(this._config); }
        return this._accounts;
    }

    private _categorizedStatement?: CategorizedStatement;
    get categorizedStatement(): CategorizedStatement {
        if (!this._categorizedStatement) { this._categorizedStatement = new CategorizedStatement(this._config); }
        return this._categorizedStatement;
    }

    private _transactionCategories?: TransactionCategories;
    get transactionCategories(): TransactionCategories {
        if (!this._transactionCategories) { this._transactionCategories = new TransactionCategories(this._config); }
        return this._transactionCategories;
    }

    private _transactions?: CodatLendingTransactions;
    get transactions(): CodatLendingTransactions {
        if (!this._transactions) { this._transactions = new CodatLendingTransactions(this._config); }
        return this._transactions;
    }
}

export class FinancialStatements {
    private readonly _config: Configuration;

    constructor(configuration: Configuration) {
        this._config = configuration;
    }

    private _accounts?: Accounts;
    get accounts(): Accounts {
        if (!this._accounts) { this._accounts = new Accounts(this._config); }
        return this._accounts;
    }

    private _balanceSheet?: BalanceSheet;
    get balanceSheet(): BalanceSheet {
        if (!this._balanceSheet) { this._balanceSheet = new BalanceSheet(this._config); }
        return this._balanceSheet;
    }

    private _cashFlow?: CashFlow;
    get cashFlow(): CashFlow {
        if (!this._cashFlow) { this._cashFlow = new CashFlow(this._config); }
        return this._cashFlow;
    }

    private _profitAndLoss?: ProfitAndLoss;
    get profitAndLoss(): ProfitAndLoss {
        if (!this._profitAndLoss) { this._profitAndLoss = new ProfitAndLoss(this._config); }
        return this._profitAndLoss;
    }
}

export class LoanWriteback {
    private readonly _config: Configuration;

    constructor(configuration: Configuration) {
        this._config = configuration;
    }

    private _accounts?: CodatLendingLoanWritebackAccounts;
    get accounts(): CodatLendingLoanWritebackAccounts {
        if (!this._accounts) { this._accounts = new CodatLendingLoanWritebackAccounts(this._config); }
        return this._accounts;
    }

    private _bankAccounts?: BankAccounts;
    get bankAccounts(): BankAccounts {
        if (!this._bankAccounts) { this._bankAccounts = new BankAccounts(this._config); }
        return this._bankAccounts;
    }

    private _bankTransactions?: BankTransactions;
    get bankTransactions(): BankTransactions {
        if (!this._bankTransactions) { this._bankTransactions = new BankTransactions(this._config); }
        return this._bankTransactions;
    }

    private _createOperations?: CreateOperations;
    get createOperations(): CreateOperations {
        if (!this._createOperations) { this._createOperations = new CreateOperations(this._config); }
        return this._createOperations;
    }

    private _directCosts?: CodatLendingDirectCosts;
    get directCosts(): CodatLendingDirectCosts {
        if (!this._directCosts) { this._directCosts = new CodatLendingDirectCosts(this._config); }
        return this._directCosts;
    }

    private _payments?: CodatLendingLoanWritebackPayments;
    get payments(): CodatLendingLoanWritebackPayments {
        if (!this._payments) { this._payments = new CodatLendingLoanWritebackPayments(this._config); }
        return this._payments;
    }

    private _sourceAccounts?: SourceAccounts;
    get sourceAccounts(): SourceAccounts {
        if (!this._sourceAccounts) { this._sourceAccounts = new SourceAccounts(this._config); }
        return this._sourceAccounts;
    }

    private _suppliers?: CodatLendingSuppliers;
    get suppliers(): CodatLendingSuppliers {
        if (!this._suppliers) { this._suppliers = new CodatLendingSuppliers(this._config); }
        return this._suppliers;
    }

    private _transfers?: CodatLendingTransfers;
    get transfers(): CodatLendingTransfers {
        if (!this._transfers) { this._transfers = new CodatLendingTransfers(this._config); }
        return this._transfers;
    }
}

export class Sales {
    private readonly _config: Configuration;

    constructor(configuration: Configuration) {
        this._config = configuration;
    }

    private _customers?: CodatLendingCustomers;
    get customers(): CodatLendingCustomers {
        if (!this._customers) { this._customers = new CodatLendingCustomers(this._config); }
        return this._customers;
    }

    private _disputes?: Disputes;
    get disputes(): Disputes {
        if (!this._disputes) { this._disputes = new Disputes(this._config); }
        return this._disputes;
    }

    private _locations?: Locations;
    get locations(): Locations {
        if (!this._locations) { this._locations = new Locations(this._config); }
        return this._locations;
    }

    private _metrics?: Metrics;
    get metrics(): Metrics {
        if (!this._metrics) { this._metrics = new Metrics(this._config); }
        return this._metrics;
    }

    private _orders?: Orders;
    get orders(): Orders {
        if (!this._orders) { this._orders = new Orders(this._config); }
        return this._orders;
    }

    private _paymentMethods?: PaymentMethods;
    get paymentMethods(): PaymentMethods {
        if (!this._paymentMethods) { this._paymentMethods = new PaymentMethods(this._config); }
        return this._paymentMethods;
    }

    private _payments?: CodatLendingPayments;
    get payments(): CodatLendingPayments {
        if (!this._payments) { this._payments = new CodatLendingPayments(this._config); }
        return this._payments;
    }

    private _productCategories?: ProductCategories;
    get productCategories(): ProductCategories {
        if (!this._productCategories) { this._productCategories = new ProductCategories(this._config); }
        return this._productCategories;
    }

    private _products?: Products;
    get products(): Products {
        if (!this._products) { this._products = new Products(this._config); }
        return this._products;
    }

    private _reports?: Reports;
    get reports(): Reports {
        if (!this._reports) { this._reports = new Reports(this._config); }
        return this._reports;
    }

    private _transactions?: CodatLendingSalesTransactions;
    get transactions(): CodatLendingSalesTransactions {
        if (!this._transactions) { this._transactions = new CodatLendingSalesTransactions(this._config); }
        return this._transactions;
    }
}

export class Transactions {
    private readonly _config: Configuration;

    constructor(configuration: Configuration) {
        this._config = configuration;
    }

    private _accountTransactions?: AccountTransactions;
    get accountTransactions(): AccountTransactions {
        if (!this._accountTransactions) { this._accountTransactions = new AccountTransactions(this._config); }
        return this._accountTransactions;
    }

    private _directCosts?: DirectCosts;
    get directCosts(): DirectCosts {
        if (!this._directCosts) { this._directCosts = new DirectCosts(this._config); }
        return this._directCosts;
    }

    private _journalEntries?: JournalEntries;
    get journalEntries(): JournalEntries {
        if (!this._journalEntries) { this._journalEntries = new JournalEntries(this._config); }
        return this._journalEntries;
    }

    private _journals?: Journals;
    get journals(): Journals {
        if (!this._journals) { this._journals = new Journals(this._config); }
        return this._journals;
    }

    private _transfers?: Transfers;
    get transfers(): Transfers {
        if (!this._transfers) { this._transfers = new Transfers(this._config); }
        return this._transfers;
    }
}

export class CodatLending {
    private readonly _config: Configuration;

    constructor(options: SDKOptions | ConfigurationParameters | Configuration = {}) {
        if (options instanceof Configuration) {
            this._config = options;
            return;
        }
        const opts = options as SDKOptions & ConfigurationParameters;
        const hooks = new SDKHooks();
        const baseURL = opts.basePath ?? resolveServerURL(opts);
        let parsedBaseURL: URL | null = null;
        try { parsedBaseURL = new URL(baseURL); } catch { parsedBaseURL = null; }
        const init = hooks.sdkInit({ baseURL: parsedBaseURL, client: opts.httpClient ?? new HTTPClient() });
        const resolvedBaseURL = init.baseURL ? init.baseURL.toString().replace(/\/+$/, '') : baseURL;
        this._config = new Configuration({
            ...opts,
            basePath: resolvedBaseURL,
            apiKey: opts.apiKey ?? resolveAuthHeader(opts.authHeader),
            fetchApi: opts.fetchApi ?? makeFetch({ ...opts, httpClient: init.client }, hooks),
            headers: { ...(opts.headers ?? {}), ...resolveUserAgent(opts.userAgent) },
        });
    }

    private _accountingBankData?: AccountingBankData;
    get accountingBankData(): AccountingBankData {
        if (!this._accountingBankData) { this._accountingBankData = new AccountingBankData(this._config); }
        return this._accountingBankData;
    }

    private _accountsPayable?: AccountsPayable;
    get accountsPayable(): AccountsPayable {
        if (!this._accountsPayable) { this._accountsPayable = new AccountsPayable(this._config); }
        return this._accountsPayable;
    }

    private _accountsReceivable?: AccountsReceivable;
    get accountsReceivable(): AccountsReceivable {
        if (!this._accountsReceivable) { this._accountsReceivable = new AccountsReceivable(this._config); }
        return this._accountsReceivable;
    }

    private _banking?: Banking;
    get banking(): Banking {
        if (!this._banking) { this._banking = new Banking(this._config); }
        return this._banking;
    }

    private _financialStatements?: FinancialStatements;
    get financialStatements(): FinancialStatements {
        if (!this._financialStatements) { this._financialStatements = new FinancialStatements(this._config); }
        return this._financialStatements;
    }

    private _loanWriteback?: LoanWriteback;
    get loanWriteback(): LoanWriteback {
        if (!this._loanWriteback) { this._loanWriteback = new LoanWriteback(this._config); }
        return this._loanWriteback;
    }

    private _manageData?: ManageData;
    get manageData(): ManageData {
        if (!this._manageData) { this._manageData = new ManageData(this._config); }
        return this._manageData;
    }

    private _sales?: Sales;
    get sales(): Sales {
        if (!this._sales) { this._sales = new Sales(this._config); }
        return this._sales;
    }

    private _transactions?: Transactions;
    get transactions(): Transactions {
        if (!this._transactions) { this._transactions = new Transactions(this._config); }
        return this._transactions;
    }

    private _bankStatements?: BankStatements;
    get bankStatements(): BankStatements {
        if (!this._bankStatements) { this._bankStatements = new BankStatements(this._config); }
        return this._bankStatements;
    }

    private _companies?: Companies;
    get companies(): Companies {
        if (!this._companies) { this._companies = new Companies(this._config); }
        return this._companies;
    }

    private _companyInfo?: CompanyInfo;
    get companyInfo(): CompanyInfo {
        if (!this._companyInfo) { this._companyInfo = new CompanyInfo(this._config); }
        return this._companyInfo;
    }

    private _connections?: Connections;
    get connections(): Connections {
        if (!this._connections) { this._connections = new Connections(this._config); }
        return this._connections;
    }

    private _dataIntegrity?: DataIntegrity;
    get dataIntegrity(): DataIntegrity {
        if (!this._dataIntegrity) { this._dataIntegrity = new DataIntegrity(this._config); }
        return this._dataIntegrity;
    }

    private _excelReports?: ExcelReports;
    get excelReports(): ExcelReports {
        if (!this._excelReports) { this._excelReports = new ExcelReports(this._config); }
        return this._excelReports;
    }

    private _fileUpload?: FileUpload;
    get fileUpload(): FileUpload {
        if (!this._fileUpload) { this._fileUpload = new FileUpload(this._config); }
        return this._fileUpload;
    }

    private _financialSummary?: FinancialSummary;
    get financialSummary(): FinancialSummary {
        if (!this._financialSummary) { this._financialSummary = new FinancialSummary(this._config); }
        return this._financialSummary;
    }

    private _liabilities?: Liabilities;
    get liabilities(): Liabilities {
        if (!this._liabilities) { this._liabilities = new Liabilities(this._config); }
        return this._liabilities;
    }

    private _manageReports?: ManageReports;
    get manageReports(): ManageReports {
        if (!this._manageReports) { this._manageReports = new ManageReports(this._config); }
        return this._manageReports;
    }

    async validateWebhook(args: { request: { body: string; headers: Record<string, string> | Headers; url: string; method: string; } | Request; }): Promise<shared.AccountCategoriesUpdatedWebhook | shared.ClientRateLimitWebhook | shared.Schema | webhooks.ReportsCreditModelGenerateSuccessfulReportGenerationWebhook | undefined> {
        const outcome = await runValidateWebhook(this as never, { request: args.request });
        if (!outcome.ok) { throw outcome.error; }
        return outcome.value;
    }
}
