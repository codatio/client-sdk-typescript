/* tslint:disable */
/* eslint-disable */

export class RFCDate {
    private date: string;

    constructor(date: Date | string) {
        this.date = date instanceof Date ? date.toISOString().slice(0, 10) : date;
    }

    static today(): RFCDate {
        return new RFCDate(new Date());
    }

    toJSON(): string {
        return this.date;
    }

    toString(): string {
        return this.date;
    }
}
