/* tslint:disable */

import type { BankStatementUploadConfiguration } from '../shared/bankstatementuploadconfiguration';
/* eslint-disable */

export interface SetBankStatementUploadConfigurationRequest {
    companyId: string;
    connectionId: string;
    bankStatementUploadConfiguration?: BankStatementUploadConfiguration | undefined;
}
