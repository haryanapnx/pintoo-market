import React, { useEffect } from 'react';
import { columns } from './column';
import { useTokenContext } from '../../context/TokenContext';
import useFilterWithQueryParamToken from '../../hooks/useFilterWithQueryParamToken';
import { ITokenList } from '../../interfaces/token.model';
import {
  BackToTop,
  Categories,
  Header,
  Table,
  TopMovers,
} from '../../components';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import Layout from '../../components/Layout/Layout';

const MarketPage: React.FC = () => {
  const { tokens, loading, setSortConfig, topMovers, setSearchQuery } =
    useTokenContext();
  const { sortKey, sortOrder, search, handleSort, handleSearch } =
    useFilterWithQueryParamToken();

  useEffect(() => {
    setSearchQuery(search);
    setSortConfig({
      key: sortKey as keyof ITokenList,
      order: sortOrder,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search, sortKey, sortOrder]);

  return (
    <Layout>
      {loading && <LoadingSpinner fixed={true} />}
      <div className="container pt-7 pb-3 mx-auto max-w-[1140px]">
        <Header onSearch={handleSearch} value={search} />
        <TopMovers data={topMovers || []} />
        <Categories />
      </div>
      <div className="lg:container pb-20 mx-auto">
        <Table
          columns={columns}
          data={tokens || []}
          onSort={handleSort}
          sortKey={sortKey}
          sortOrder={sortOrder}
        />
      </div>
      <BackToTop />
    </Layout>
  );
};

export default MarketPage;
