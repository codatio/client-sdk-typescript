/* tslint:disable */
/* eslint-disable */

export class HTTPClientError extends Error {
    readonly cause: unknown;

    constructor(message: string, opts?: { cause?: unknown }) {
        super(message);
        this.name = "HTTPClientError";
        this.cause = opts?.cause;
    }
}

export class UnexpectedClientError extends HTTPClientError {
    constructor(message: string, opts?: { cause?: unknown }) {
        super(message, opts);
        this.name = "UnexpectedClientError";
    }
}

export class InvalidRequestError extends HTTPClientError {
    constructor(message: string, opts?: { cause?: unknown }) {
        super(message, opts);
        this.name = "InvalidRequestError";
    }
}

export class RequestAbortedError extends HTTPClientError {
    constructor(message: string, opts?: { cause?: unknown }) {
        super(message, opts);
        this.name = "RequestAbortedError";
    }
}

export class RequestTimeoutError extends HTTPClientError {
    constructor(message: string, opts?: { cause?: unknown }) {
        super(message, opts);
        this.name = "RequestTimeoutError";
    }
}

export class ConnectionError extends HTTPClientError {
    constructor(message: string, opts?: { cause?: unknown }) {
        super(message, opts);
        this.name = "ConnectionError";
    }
}
