/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

/**
 * Types of payment line links, either:
 *
 * @remarks
 * `Unknown`
 * `Unlinked` - Not used
 * `Invoice` - ID refers to the invoice
 * `CreditNote` - ID refers to the credit note
 * `Refund` - ID refers to the sibling payment
 * `Payment` - ID refers to the sibling payment
 * `PaymentOnAccount` - ID refers to the customer
 * `Other` - ID refers to the customer
 * `Manual Journal`
 * `Discount` - ID refers to the payment
 */
export enum PaymentLinkType {
    Unknown = "Unknown",
    Unlinked = "Unlinked",
    Invoice = "Invoice",
    CreditNote = "CreditNote",
    Other = "Other",
    Refund = "Refund",
    Payment = "Payment",
    PaymentOnAccount = "PaymentOnAccount",
    ManualJournal = "ManualJournal",
    Discount = "Discount",
}