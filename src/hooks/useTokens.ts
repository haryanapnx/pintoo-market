import { useMemo, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getSupportedCurrencies, getPriceChanges } from '../api/marketApi';
import { ICurencyTokenData } from '../interfaces/currency.model';
import { IPriceData } from '../interfaces/price.model';
import { ITokenList } from '../interfaces/token.model';

export const useTokens = () => {
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [sortConfig, setSortConfig] = useState<{ key: string; order: 'asc' | 'desc' | null }>({
        key: '',
        order: null,
    });

    const { data: currencies = [], isLoading: loadingCurrencies } = useQuery({
        queryKey: ['currencies'],
        queryFn: getSupportedCurrencies,
    });

    const { data: priceChanges = [], isLoading: loadingPriceChanges } = useQuery({
        queryKey: ['priceChanges'],
        queryFn: getPriceChanges,
        refetchInterval: 1000,
    });

    const loading = loadingCurrencies || loadingPriceChanges;

    const combinedTokens = useMemo(() => {
        return currencies
            .filter((currency: ICurencyTokenData) => currency.currencyGroup !== "IDR")
            .map((currency: ICurencyTokenData) => {
                const priceChange = priceChanges.find(
                    (price: IPriceData) => price.pair === `${currency.currencySymbol.toLowerCase()}/idr`
                );
                return { ...currency, ...priceChange };
            });
    }, [currencies, priceChanges]);

    const filteredTokens = useMemo(() => {
        if (!searchQuery) return combinedTokens;

        return combinedTokens.filter((token: ITokenList) =>
            token.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
            token.currencySymbol?.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }, [combinedTokens, searchQuery]);

    // Filter dan Sort
    const tokens = useMemo(() => {
        let sortedTokens = [...filteredTokens];

        if (sortConfig.key) {
            sortedTokens.sort((a, b) => {
                const aValue = a[sortConfig.key] || "";
                const bValue = b[sortConfig.key] || "";

                if (!isNaN(Number(aValue)) && !isNaN(Number(bValue))) {
                    const numA = Number(aValue);
                    const numB = Number(bValue);
                    return sortConfig.order === "asc" ? numA - numB : numB - numA;
                }

                if (typeof aValue === "string" && typeof bValue === "string") {
                    const comparison = aValue.localeCompare(bValue, undefined, {
                        numeric: true,
                        sensitivity: "base",
                    });
                    return sortConfig.order === "asc" ? comparison : -comparison;
                }

                if (typeof aValue === "number" && typeof bValue === "number") {
                    return sortConfig.order === "asc" ? aValue - bValue : bValue - aValue;
                }

                return 0;
            });
        }

        return sortedTokens;
    }, [filteredTokens, sortConfig]);

    const topMovers = useMemo(() => {
        const validData = combinedTokens.filter(
            (token: ITokenList) => token.day && !isNaN(parseFloat(token.day))
        );

        const topGainers = [...validData]
            .filter((token) => parseFloat(token.day) > 0)
            .sort((a, b) => parseFloat(b.day) - parseFloat(a.day))
            .slice(0, 6);

        const topLosers = [...validData]
            .filter((token) => parseFloat(token.day) < 0)
            .sort((a, b) => parseFloat(a.day) - parseFloat(b.day))
            .slice(0, 6);

        return { topGainers, topLosers };
    }, [combinedTokens]);

    return {
        tokens,
        loading,
        setSortConfig,
        topMovers,
        setSearchQuery
    };
};