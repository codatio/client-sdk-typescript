/* tslint:disable */
/* eslint-disable */

export type Result<T, E> =
    | { ok: true; value: T; error?: never }
    | { ok: false; value?: never; error: E };

export function OK<T>(value: T): Result<T, never> {
    return { ok: true, value };
}

export function ERR<E>(error: E): Result<never, E> {
    return { ok: false, error };
}

export function unwrap<T>(r: Result<T, unknown>): T {
    if (r.ok) {
        return r.value;
    }
    throw r.error;
}

export async function unwrapAsync<T>(pr: Promise<Result<T, unknown>>): Promise<T> {
    return unwrap(await pr);
}
