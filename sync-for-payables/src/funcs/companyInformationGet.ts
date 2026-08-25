/* tslint:disable */
/* eslint-disable */

import type { CodatSyncPayables, CodatSyncPayablesCore } from "../core";
import { APIPromise } from "../sdk/types/async";
import type { Result } from "../sdk/types/fp";
import { toResult } from "./_adapter";

type Call = CodatSyncPayables["companyInformation"]["get"];

export function companyInformationGet(
    client: CodatSyncPayablesCore,
    request: Parameters<Call>[0],
    options?: Parameters<Call>[1],
): APIPromise<Result<Awaited<ReturnType<Call>>, Error>> {
    return new APIPromise(toResult(() => client.companyInformation.get(request, options)));
}
