import { CoinLogo } from "../../components";
import { ITokenList } from "../../interfaces/token.model";
import { convertToRp } from "../../utils";
import TextAnimation from "../../components/TextAnimation/TextAnimation";
import PercentageChange from "../../components/PercentageChange/PercentageChange";

const percentageColumn = [
  { label: "24 Jam", key: "day" },
  { label: "1 mgg", key: "week" },
  { label: "1 bln", key: "month" },
  { label: "1 thn", key: "year" },
];

export const columns = [
  {
    title: "crypto",
    dataIndex: "name",
    sortable: true,
    key: "name",
    render: (_: any, record: ITokenList) => (
      <div className="flex items-center space-x-2">
        <CoinLogo logoSrc={record.logo} backgroundColor={record.color} />
        <div className="pl-4">
          <p className="text-base font-semibold text-black">{record.name}</p>
          <p className="text-base text-gray-500">{record.currencySymbol}</p>
        </div>
      </div>
    ),
  },
  {
    title: "harga",
    dataIndex: "latestPrice",
    key: "latestPrice",
    sortable: true,
    render: (_: any, record: ITokenList) => (
      <TextAnimation
        price={record.latestPrice || "0"}
        value={convertToRp(record.latestPrice || "0", record.decimal_point)}
      />
    ),
  },
  ...percentageColumn.map((item) => ({
    title: item.label.toUpperCase(),
    dataIndex: item.key as keyof ITokenList,
    key: item.key,
    sortable: true,
    render: (_: any, record: ITokenList) =>
      record[item.key as keyof ITokenList] ? (
        <PercentageChange
          value={String(record[item.key as keyof ITokenList])}
        />
      ) : (
        "-"
      ),
  })),
  {
    title: "",
    key: "",
    render: () => (
      <button className="px-5 py-2 text-white bg-blue-600 rounded-2xl hover:bg-blue-600">
        Beli
      </button>
    ),
  },
];
