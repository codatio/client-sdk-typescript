/* tslint:disable */
/* eslint-disable */

import type { ReportGenerationPayload } from '../shared/reportgenerationpayload';

export type ReportsCreditModelGenerateSuccessfulReportGenerationWebhook = {
    id?: string;
    eventType?: string;
    generatedDate?: string;
    payload?: ReportGenerationPayload;
};
