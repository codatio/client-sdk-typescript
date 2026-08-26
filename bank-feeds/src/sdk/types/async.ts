/* tslint:disable */
/* eslint-disable */

export type APICall =
    | { status: "complete"; request: Request; response: Response }
    | { status: "request-error"; request: Request; response?: undefined }
    | { status: "invalid"; request?: undefined; response?: undefined };

export class APIPromise<T> {
    private readonly inner: Promise<T>;

    constructor(inner: Promise<T>) {
        this.inner = inner;
    }

    then<R1 = T, R2 = never>(
        onfulfilled?: ((value: T) => R1 | PromiseLike<R1>) | null,
        onrejected?: ((reason: unknown) => R2 | PromiseLike<R2>) | null,
    ): Promise<R1 | R2> {
        return this.inner.then(onfulfilled, onrejected);
    }

    catch<R = never>(onrejected?: ((reason: unknown) => R | PromiseLike<R>) | null): Promise<T | R> {
        return this.inner.catch(onrejected);
    }

    finally(onfinally?: (() => void) | null): Promise<T> {
        return this.inner.then(
            (value) => {
                if (onfinally) {
                    onfinally();
                }
                return value;
            },
            (reason) => {
                if (onfinally) {
                    onfinally();
                }
                throw reason;
            },
        );
    }

    $inspect(): Promise<T> {
        return this.inner;
    }

    get [Symbol.toStringTag](): string {
        return "APIPromise";
    }
}
