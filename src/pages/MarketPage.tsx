import React from "react";
import { Categories, Header, Table } from "../components";

const MarketPage: React.FC = () => {
  const headers = [
    { title: "CRYPTO", key: "name" },
    { title: "HARGA", key: "price" },
    { title: "24 JAM", key: "change24h" },
    { title: "1 MGG", key: "change1w" },
    { title: "1 BLN", key: "change1m" },
    { title: "1 THN", key: "change1y" },
    { title: "MARKET CAP", key: "marketCap" },
    { title: "", key: "" },
  ];

  const data = [
    {
      logo: "https://cryptologos.cc/logos/bitcoin-btc-logo.png",
      name: "Bitcoin",
      symbol: "BTC",
      price: "Rp 1.506.462.904",
      change24h: "+2.72%",
      change1w: "+3.48%",
      change1m: "+41.69%",
      change1y: "+160.37%",
      marketCap: "Rp 29.842 Triliun",
    },
    // Data lainnya
  ];

  return (
    <>
      <div className="container pt-10 pb-3 mx-auto">
        <Header />
        <Categories />
      </div>
      <div className="lg:container pb-20 mx-auto">
        <Table headers={headers} data={data} />
      </div>
    </>
  );
};

export default MarketPage;
