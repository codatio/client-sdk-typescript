/* tslint:disable */
/* eslint-disable */

import { OK, ERR } from "../sdk/types/fp";
import type { Result } from "../sdk/types/fp";

export async function toResult<T>(call: () => Promise<T>): Promise<Result<T, Error>> {
    try {
        return OK(await call());
    } catch (err) {
        return ERR(err instanceof Error ? err : new Error(String(err)));
    }
}
