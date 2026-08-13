/* tslint:disable */
/* eslint-disable */

import type { CodatSyncExpenses, CodatSyncExpensesCore } from "../core";
import { APIPromise } from "../sdk/types/async";
import type { Result } from "../sdk/types/fp";
import { toResult } from "./_adapter";

type Call = CodatSyncExpenses["reimbursements"]["update"];

export function reimbursementsUpdate(
    client: CodatSyncExpensesCore,
    request: Parameters<Call>[0],
    options?: Parameters<Call>[1],
): APIPromise<Result<Awaited<ReturnType<Call>>, Error>> {
    return new APIPromise(toResult(() => client.reimbursements.update(request, options)));
}
