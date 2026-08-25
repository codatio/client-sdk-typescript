/* tslint:disable */
/* eslint-disable */

import type * as shared from './index';


export interface ConnectionInfo {}

export interface Content {}

export interface DefinitionDataTypeWriteWebhookRecord {
    id?: string;
}

export interface DefinitionSummaryOfDataTypeReads {
    connectionId?: string;
    dataType?: string;
    issues?: Array<{ [key: string]: any }> | null;
    recordsModified?: boolean;
    status?: string;
}

export interface DefinitionWriteRequestStatus {}

export interface DefinitionWriteType {}

export interface Properties {}

export interface PullData {}

export interface PushData {}

export interface RequiredData {}

export interface SupplementalDataConfig {}

export interface Tags {}
