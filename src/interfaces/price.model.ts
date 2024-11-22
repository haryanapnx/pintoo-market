import { IBaseResponse } from "./baseResponse.model";

export interface IPriceData {
    pair: string;
    latestPrice: string;
    day: string;
    week: string;
    month: string;
    year: string;
}

export interface IPriceResponse extends IBaseResponse {
    payload: IPriceData[];
}

