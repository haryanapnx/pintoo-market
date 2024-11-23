import { useMemo } from 'react';
import { ITokenList } from '../interfaces/token.model';

export const useFilteredTokens = (tokens: ITokenList[], searchQuery: string) => {
    return useMemo(() => {
        if (!searchQuery) return tokens;

        return tokens.filter(
            (token) =>
                token.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
                token.currencySymbol?.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }, [tokens, searchQuery]);
};