/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

/**
 * The current status of the dataset.
 */
export enum DatasetStatus {
    Initial = "Initial",
    Queued = "Queued",
    Fetching = "Fetching",
    MapQueued = "MapQueued",
    Mapping = "Mapping",
    Complete = "Complete",
    FetchError = "FetchError",
    MapError = "MapError",
    InternalError = "InternalError",
    ProcessingQueued = "ProcessingQueued",
    Processing = "Processing",
    ProcessingError = "ProcessingError",
    ValidationQueued = "ValidationQueued",
    Validating = "Validating",
    ValidationError = "ValidationError",
    AuthError = "AuthError",
    Cancelled = "Cancelled",
    NotSupported = "NotSupported",
    RateLimitError = "RateLimitError",
    PermissionsError = "PermissionsError",
    PrerequisiteNotMet = "PrerequisiteNotMet",
}
