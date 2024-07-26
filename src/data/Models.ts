import {DateTime} from "luxon";

// Data types
export type Payslip = {
    id: string;
    fromDate: string;
    toDate: string | null;
    file: MyFile;
}


export type MyFile = {
    id: string;
    name: string;
    url: string;
}


// Response types for UI


// Define an enum for response status
export enum ResponseStatus {
    Success = "success",
    Error = "error"
}

// Define the structure of a successful response
export interface SuccessResponse<T> {
    data: T;
    status: ResponseStatus.Success;
}

// Define the structure of an error response
export interface ErrorResponse {
    error: string;
    status: ResponseStatus.Error;
}
export type ResponseUI<T> = SuccessResponse<T> | ErrorResponse;
