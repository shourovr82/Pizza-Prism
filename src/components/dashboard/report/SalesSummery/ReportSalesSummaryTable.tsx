import { useState } from "react";
import { Pagination, Table } from "rsuite";

export const mockUsers = [
  {
    id: 1,
    name: "Gross Sales",
    sales: "$10904.0",
    refunds: "$0.00",
    net: "$10,904.00",
  },
  {
    id: 2,
    name: "Net Sales",
    sales: "$10904.0",
    refunds: "$0.00",
    net: "$10,904.00",
  },
  {
    id: 3,
    name: "Total Collected",
    sales: "$10904.0",
    refunds: "$0.00",
    net: "$10,904.00",
  },
  {
    id: 4,
    name: "Expenses",
    sales: "$350.00",
    refunds: "$0.00",
    net: "$350.00",
  },
  {
    id: 5,
    name: "Profit",
    sales: "$10554.00",
    refunds: "$0.00",
    net: "$10,554.00",
  },
  {
    id: 6,
    name: "Cost of Goods Sold",
    sales: "$550.00",
    refunds: "$0.00",
    net: "$550.00",
  },
  {
    id: 7,
    name: "Shipping Fees",
    sales: "$200.00",
    refunds: "$0.00",
    net: "$200.00",
  },
  {
    id: 8,
    name: "Taxes",
    sales: "$1090.40",
    refunds: "$0.00",
    net: "$1,090.40",
  },
  {
    id: 9,
    name: "Advertising Costs",
    sales: "$500.00",
    refunds: "$0.00",
    net: "$500.00",
  },
  {
    id: 10,
    name: "Employee Salaries",
    sales: "$4000.00",
    refunds: "$0.00",
    net: "$4,000.00",
  },
  {
    id: 11,
    name: "Utilities",
    sales: "$250.00",
    refunds: "$0.00",
    net: "$250.00",
  },
  {
    id: 12,
    name: "Rent",
    sales: "$1500.00",
    refunds: "$0.00",
    net: "$1,500.00",
  },
  {
    id: 13,
    name: "Insurance",
    sales: "$300.00",
    refunds: "$0.00",
    net: "$300.00",
  },
  // Add more users as needed
];

const { Column, HeaderCell, Cell } = Table;
const data = mockUsers;

const ReportSalesSummaryTable = () => {
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);

  const handleChangeLimit = (dataKey: number) => {
    setPage(1);
    setLimit(dataKey);
  };

  const datas = data.filter((v, i) => {
    const start = limit * (page - 1);
    const end = start + limit;
    return i >= start && i < end;
  });
  return (
    <div className="rounded-xl  shadow-xl mt-5">
      <Table
        className="rounded-t-xl"
        height={420}
        data={data}
        onSortColumn={(sortColumn, sortType) => {
          console.log(sortColumn, sortType);
        }}
      >
        <Column flexGrow={2} align="left">
          <HeaderCell className="font-bold text-sm text-[#3b3b3b]">
            Name
          </HeaderCell>
          <Cell dataKey="name" />
        </Column>

        <Column flexGrow={2}>
          <HeaderCell className="font-bold text-sm text-[#3b3b3b]">
            Sales
          </HeaderCell>
          <Cell dataKey="sales" />
        </Column>

        <Column flexGrow={2}>
          <HeaderCell className="font-bold text-sm text-[#3b3b3b]">
            Refunds
          </HeaderCell>
          <Cell dataKey="refunds" />
        </Column>

        <Column flexGrow={1}>
          <HeaderCell className="font-bold text-sm text-[#3b3b3b]">
            Net
          </HeaderCell>
          <Cell dataKey="net" />
        </Column>
      </Table>
      <div className="bg-white rounded-b-xl" style={{ padding: 20 }}>
        <Pagination
          prev
          next
          first
          last
          ellipsis
          boundaryLinks
          maxButtons={5}
          size="xs"
          layout={["total", "-", "limit", "|", "pager", "skip"]}
          total={datas.length}
          limitOptions={[10, 30, 50]}
          limit={limit}
          activePage={page}
          onChangePage={setPage}
          onChangeLimit={handleChangeLimit}
        />
      </div>
    </div>
  );
};

export default ReportSalesSummaryTable;
