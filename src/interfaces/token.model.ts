import { ICurencyTokenData } from "./currency.model";
import { IPriceData } from "./price.model";

export interface ITokenList extends ICurencyTokenData, Partial<IPriceData> { }