/* tslint:disable */
/* eslint-disable */

import type { CodatBankFeeds, CodatBankFeedsCore } from "../core";
import { APIPromise } from "../sdk/types/async";
import type { Result } from "../sdk/types/fp";
import { toResult } from "./_adapter";

type Call = CodatBankFeeds["sourceAccounts"]["delete"];

export function sourceAccountsDelete(
    client: CodatBankFeedsCore,
    request: Parameters<Call>[0],
    options?: Parameters<Call>[1],
): APIPromise<Result<Awaited<ReturnType<Call>>, Error>> {
    return new APIPromise(toResult(() => client.sourceAccounts.delete(request, options)));
}
