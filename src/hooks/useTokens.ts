import { useState } from 'react';
import { useFetchToken } from './useFetchToken';
import { useCombinedTokens } from './useCombinedTokens';
import { useFilteredTokens } from './useFilteredTokens';
import { useSortedTokens } from './useSortedTokens';
import { useTopMovers } from './useTopMovers';
import { ITokenList } from '../interfaces/token.model';

export const useTokens = () => {
    const { currencies, priceChanges, loading } = useFetchToken();
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [sortConfig, setSortConfig] = useState<{ key: keyof ITokenList; order: 'asc' | 'desc' | null }>({
        key: '' as keyof ITokenList,
        order: null,
    });

    const combinedTokens = useCombinedTokens(currencies, priceChanges);
    const filteredTokens = useFilteredTokens(combinedTokens, searchQuery);
    const tokens = useSortedTokens(filteredTokens, sortConfig);
    const topMovers = useTopMovers(combinedTokens);

    return {
        tokens,
        loading,
        setSortConfig,
        topMovers,
        setSearchQuery,
    };
};