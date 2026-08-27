/* tslint:disable */
/* eslint-disable */

import type { CodatLending, CodatLendingCore } from "../core";
import { APIPromise } from "../sdk/types/async";
import type { Result } from "../sdk/types/fp";
import { toResult } from "./_adapter";

type Call = CodatLending["transactions"]["journalEntries"]["list"];

export function transactionsJournalEntriesList(
    client: CodatLendingCore,
    request: Parameters<Call>[0],
    options?: Parameters<Call>[1],
): APIPromise<Result<Awaited<ReturnType<Call>>, Error>> {
    return new APIPromise(toResult(() => client.transactions.journalEntries.list(request, options)));
}
