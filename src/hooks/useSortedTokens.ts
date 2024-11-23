import { useMemo } from 'react';
import { ITokenList } from '../interfaces/token.model';

export const useSortedTokens = (
    tokens: ITokenList[],
    sortConfig: { key: keyof ITokenList; order: 'asc' | 'desc' | null }
) => {
    return useMemo(() => {
        if (!sortConfig.key) return tokens;

        const sortedTokens = [...tokens];
        sortedTokens.sort((a, b) => {
            const aValue = a[sortConfig.key] || '';
            const bValue = b[sortConfig.key] || '';

            if (!isNaN(Number(aValue)) && !isNaN(Number(bValue))) {
                return sortConfig.order === 'asc' ? Number(aValue) - Number(bValue) : Number(bValue) - Number(aValue);
            }

            if (typeof aValue === 'string' && typeof bValue === 'string') {
                return sortConfig.order === 'asc'
                    ? aValue.localeCompare(bValue, undefined, { numeric: true, sensitivity: 'base' })
                    : bValue.localeCompare(aValue, undefined, { numeric: true, sensitivity: 'base' });
            }

            return 0;
        });

        return sortedTokens;
    }, [tokens, sortConfig]);
};