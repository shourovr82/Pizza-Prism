import DashboardLayout from "@/components/Layouts/Dashboard/DashboardLayout";
import { Input } from "@nextui-org/react";
import { Dropdown, IconButton, Popover, Table, Whisper } from "rsuite";
import { LuSearch } from "react-icons/lu";
import { enGB } from "date-fns/locale";
import { useState } from "react";
import { DateChangeCallBack, DatePicker } from "react-nice-dates";
import { BsFillCalendar3WeekFill } from "react-icons/bs";
import { EllipsisHorizontalIcon } from "@heroicons/react/24/outline";
const { Column, HeaderCell, Cell } = Table;

const PaymentTitleCell = ({ rowData, dataKey, ...props }: any) => {
  return (
    <Cell {...props} style={{ padding: "6px" }}>
      <span
        className={`${rowData.payment === "Debit" && "!bg-[#54c3ca]"} ${
          rowData.payment === "Cash" && "!bg-[#54ca92]"
        } ${
          rowData.payment === "E-wallet" && "!bg-[#548fca]"
        } bg-red-900 text-white px-3  py-1 rounded-full text-sm`}
      >
        {rowData.payment}
      </span>
    </Cell>
  );
};

const renderMenu = ({ onClose, left, top, className }: any, ref: any) => {
  const handleSelect = () => {
    onClose();
  };
  return (
    <Popover ref={ref} className={className} style={{ left, top }} full>
      <Dropdown.Menu onSelect={handleSelect}>
        <Dropdown.Item eventKey={3}>Download As...</Dropdown.Item>
        <Dropdown.Item eventKey={4}>Export PDF</Dropdown.Item>
        <Dropdown.Item eventKey={5}>Export HTML</Dropdown.Item>
        <Dropdown.Item eventKey={6}>Settings</Dropdown.Item>
        <Dropdown.Item eventKey={7}>About</Dropdown.Item>
      </Dropdown.Menu>
    </Popover>
  );
};
const OptionCell = ({ rowData, dataKey, ...props }: any) => {
  return (
    <Cell {...props} style={{ padding: "6px" }}>
      <>
        <Whisper placement="bottomEnd" trigger="click" speaker={renderMenu}>
          <IconButton
            appearance="subtle"
            icon={<EllipsisHorizontalIcon className="h-6 w-6  text-gray-500" />}
            circle
          />
        </Whisper>
      </>
    </Cell>
  );
};
const DashboardHistoryPage = () => {
  const mockHistory = [
    {
      orderNumber: "#987606",
      date: "15 Jul, 2023",
      tableNumber: "T1",
      totalAmount: "$3000",
      payment: "E-wallet",
    },
    {
      orderNumber: "#987607",
      date: "18 Jul, 2023",
      tableNumber: "T7",
      totalAmount: "$1800",
      payment: "Cash",
    },
    {
      orderNumber: "#987608",
      date: "20 Jul, 2023",
      tableNumber: "T8",
      totalAmount: "$4200",
      payment: "Debit",
    },
    {
      orderNumber: "#987609",
      date: "22 Jul, 2023",
      tableNumber: "T9",
      totalAmount: "$2700",
      payment: "E-wallet",
    },
    {
      orderNumber: "#987610",
      date: "25 Jul, 2023",
      tableNumber: "T10",
      totalAmount: "$3500",
      payment: "Cash",
    },
    {
      orderNumber: "#987611",
      date: "28 Jul, 2023",
      tableNumber: "T2",
      totalAmount: "$1500",
      payment: "Cash",
    },
    {
      orderNumber: "#987612",
      date: "01 Aug, 2023",
      tableNumber: "T3",
      totalAmount: "$2800",
      payment: "Debit",
    },
    {
      orderNumber: "#987613",
      date: "05 Aug, 2023",
      tableNumber: "T1",
      totalAmount: "$2100",
      payment: "E-wallet",
    },
    {
      orderNumber: "#987614",
      date: "08 Aug, 2023",
      tableNumber: "T6",
      totalAmount: "$3600",
      payment: "Cash",
    },
    {
      orderNumber: "#987615",
      date: "12 Aug, 2023",
      tableNumber: "T4",
      totalAmount: "$1950",
      payment: "Debit",
    },
    // Add more data as needed
  ];

  const [date, setDate] = useState<Date | undefined>(undefined);

  const handleDate: DateChangeCallBack = (newDate: Date | null) => {
    setDate(newDate || undefined);
  };

  return (
    <section className="m-5  bg-white p-5 rounded-2xl">
      {/* search and Filters */}
      <div className="grid   grid-cols-5 gap-10 items-center">
        <div className="col-span-1">
          <DatePicker date={date} onDateChange={handleDate} locale={enGB}>
            {({ inputProps, focused }) => (
              <Input
                startContent={
                  <BsFillCalendar3WeekFill className="text-[#7f7f7f] mr-1 mt-0.5" />
                }
                className={
                  "  rounded-xl  w-full" + (focused ? " -focused" : "")
                }
                {...inputProps}
              />
            )}
          </DatePicker>
        </div>
        <div className="col-span-4">
          <Input
            type="text"
            placeholder="Search Order No"
            labelPlacement="outside"
            endContent={
              <LuSearch className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
            }
          />
        </div>
      </div>
      {/* all histories */}
      <div className="mt-5">
        <Table
          className="rounded-t-xl align-center"
          height={1000}
          data={mockHistory ? mockHistory : []}
          rowHeight={80}
        >
          <Column flexGrow={2} colSpan={5} align="left" verticalAlign="middle">
            <HeaderCell className="font-bold text-sm text-[#3b3b3b]">
              Order ID
            </HeaderCell>
            <Cell dataKey="orderNumber" />
          </Column>

          <Column align="center" flexGrow={2} verticalAlign="middle">
            <HeaderCell className="font-bold text-sm text-[#3b3b3b]">
              Date
            </HeaderCell>
            <Cell dataKey="date" />
          </Column>

          <Column align="center" flexGrow={2} verticalAlign="middle">
            <HeaderCell className="font-bold text-sm text-[#3b3b3b]">
              Table
            </HeaderCell>
            <Cell dataKey="tableNumber" />
          </Column>
          <Column align="center" flexGrow={2} verticalAlign="middle">
            <HeaderCell className="font-bold text-sm text-[#3b3b3b]">
              Amount
            </HeaderCell>
            <Cell dataKey="totalAmount" />
          </Column>

          <Column align="center" flexGrow={2} verticalAlign="middle">
            <HeaderCell className="font-bold text-sm text-[#3b3b3b]">
              Payment Method
            </HeaderCell>
            <PaymentTitleCell dataKey="payment" />
          </Column>
          {/* <Column align="right" flexGrow={1} verticalAlign="middle">
            <HeaderCell className="font-bold text-sm text-[#3b3b3b]">
              Option
            </HeaderCell>
            <OptionCell dataKey="payment" />
          </Column> */}
        </Table>
      </div>
    </section>
  );
};

export default DashboardHistoryPage;

DashboardHistoryPage.getLayout = function getLayout(page: any) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
