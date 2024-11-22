import React, { createContext, useContext } from "react";
import { useTokens } from "../hooks/useTokens";
import { ITokenList } from "../interfaces/token.model";

interface TokenContextType {
  tokens: ITokenList[];
  topMovers: {
    topGainers: ITokenList[];
    topLosers: ITokenList[];
  };
  loading: boolean;
  setSortConfig: React.Dispatch<
    React.SetStateAction<{ key: string; order: "asc" | "desc" | null }>
  >;
  setSearchQuery: (query: string) => void;
}

interface TokenProviderProps {
  children: React.ReactNode;
}

const TokenContext = createContext<TokenContextType | undefined>(undefined);

export const TokenProvider: React.FC<TokenProviderProps> = ({ children }) => {
  const { tokens, loading, setSortConfig, topMovers, setSearchQuery } =
    useTokens();

  return (
    <TokenContext.Provider
      value={{ tokens, loading, setSortConfig, topMovers, setSearchQuery }}
    >
      {children}
    </TokenContext.Provider>
  );
};

export const useTokenContext = () => {
  const context = useContext(TokenContext);
  if (!context)
    throw new Error("useTokenContext must be used within a TokenProvider");
  return context;
};
