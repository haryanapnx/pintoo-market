import { type IBaseResponse } from './baseResponse.model';

export interface ICurencyTokenResponse extends IBaseResponse {
    payload: ICurencyTokenData[];
}

export interface ICurencyTokenData {
    currency_id: number;
    currencyGroup: string;
    color: string;
    currencySymbol: string;
    name: string;
    logo: string;
    decimal_point: number;
    listingDate: string;
    wallets: IWallet[];
    is_limit_order_enabled: boolean;
    is_upcoming: boolean;
}

export interface IWallet {
    currency_id: number;
    currencyGroup: string;
    tokenSymbol: string;
    decimal_point: number;
    tokenType: string;
    blockchain: string;
    explorer: string;
    listingDate: string;
    blockchainName: string;
    logo: string;
}
