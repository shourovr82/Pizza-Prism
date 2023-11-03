"use client";
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Pagination,
  Spinner,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Tooltip,
  getKeyValue,
  useDisclosure,
} from "@nextui-org/react";
import { LuSearch } from "react-icons/lu";
import React, { useState } from "react";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/material_orange.css";
import "flatpickr/dist/flatpickr.css";
import { FaCalendarDays } from "react-icons/fa6";
import { FiEye } from "react-icons/fi";
import { RiDeleteBin5Line, RiEdit2Line } from "react-icons/ri";

const allHistories = [
  {
    orderId: "#907623",
    date: "28 Jun, 2023",
    table: "T1",
    amount: 45.5,
    paymentMethod: "Debit",
  },
  {
    orderId: "#907654",
    date: "30 Jun, 2023",
    table: "T2",
    amount: 55.25,
    paymentMethod: "Credit",
  },
  {
    orderId: "#907655",
    date: "2 Jul, 2023",
    table: "T3",
    amount: 32.75,
    paymentMethod: "Cash",
  },
  {
    orderId: "#907656",
    date: "5 Jul, 2023",
    table: "T4",
    amount: 67.9,
    paymentMethod: "Debit",
  },
  {
    orderId: "#907657",
    date: "8 Jul, 2023",
    table: "T5",
    amount: 28.4,
    paymentMethod: "Credit",
  },
  {
    orderId: "#907853",
    date: "28 Jun, 2023",
    table: "T1",
    amount: 45.5,
    paymentMethod: "Debit",
  },
  {
    orderId: "#907658",
    date: "10 Jul, 2023",
    table: "T6",
    amount: 39.75,
    paymentMethod: "Cash",
  },
  {
    orderId: "#907659",
    date: "14 Jul, 2023",
    table: "T7",
    amount: 62.3,
    paymentMethod: "Credit",
  },
  {
    orderId: "#907660",
    date: "18 Jul, 2023",
    table: "T8",
    amount: 50.2,
    paymentMethod: "Debit",
  },
  {
    orderId: "#907661",
    date: "22 Jul, 2023",
    table: "T9",
    amount: 75.1,
    paymentMethod: "Cash",
  },
  {
    orderId: "#107653",
    date: "28 Jun, 2023",
    table: "T1",
    amount: 45.5,
    paymentMethod: "Debit",
  },
  {
    orderId: "#907664",
    date: "2 Aug, 2023",
    table: "T10",
    amount: 28.75,
    paymentMethod: "Credit",
  },
  {
    orderId: "#907665",
    date: "6 Aug, 2023",
    table: "T11",
    amount: 62.5,
    paymentMethod: "Cash",
  },
  {
    orderId: "#907666",
    date: "10 Aug, 2023",
    table: "T12",
    amount: 55.6,
    paymentMethod: "Debit",
  },
  {
    orderId: "#907667",
    date: "14 Aug, 2023",
    table: "T13",
    amount: 48.9,
    paymentMethod: "Credit",
  },
  {
    orderId: "#607653",
    date: "28 Jun, 2023",
    table: "T1",
    amount: 45.5,
    paymentMethod: "Debit",
  },
  {
    orderId: "#907668",
    date: "18 Aug, 2023",
    table: "T14",
    amount: 34.2,
    paymentMethod: "Cash",
  },
  {
    orderId: "#907669",
    date: "22 Aug, 2023",
    table: "T15",
    amount: 70.75,
    paymentMethod: "Credit",
  },
  {
    orderId: "#907670",
    date: "26 Aug, 2023",
    table: "T16",
    amount: 52.4,
    paymentMethod: "Debit",
  },
  {
    orderId: "#907671",
    date: "30 Aug, 2023",
    table: "T17",
    amount: 45.8,
    paymentMethod: "Cash",
  },
  {
    orderId: "#707653",
    date: "28 Jun, 2023",
    table: "T1",
    amount: 45.5,
    paymentMethod: "Debit",
  },
  {
    orderId: "#907672",
    date: "3 Sep, 2023",
    table: "T18",
    amount: 38.1,
    paymentMethod: "E-Wallet",
  },
  {
    orderId: "#907673",
    date: "7 Sep, 2023",
    table: "T19",
    amount: 65.25,
    paymentMethod: "Cash",
  },
  {
    orderId: "#907674",
    date: "11 Sep, 2023",
    table: "T20",
    amount: 58.8,
    paymentMethod: "Credit",
  },
  {
    orderId: "#907675",
    date: "15 Sep, 2023",
    table: "T21",
    amount: 42.3,
    paymentMethod: "E-Wallet",
  },
  {
    orderId: "#507653",
    date: "28 Jun, 2023",
    table: "T1",
    amount: 45.5,
    paymentMethod: "Debit",
  },
  {
    orderId: "#907676",
    date: "19 Sep, 2023",
    table: "T22",
    amount: 36.75,
    paymentMethod: "E-Wallet",
  },
  {
    orderId: "#907677",
    date: "23 Sep, 2023",
    table: "T23",
    amount: 68.9,
    paymentMethod: "Cash",
  },
  {
    orderId: "#907678",
    date: "27 Sep, 2023",
    table: "T24",
    amount: 52.4,
    paymentMethod: "Credit",
  },
  {
    orderId: "#907679",
    date: "1 Oct, 2023",
    table: "T25",
    amount: 47.6,
    paymentMethod: "E-Wallet",
  },
];

const columns = [
  {
    key: "orderId",
    label: "Order Id",
  },
  {
    key: "date",
    label: "Date",
  },
  {
    key: "table",
    label: "Table",
  },
  {
    key: "amount",
    label: "Amount",
  },
  {
    key: "paymentMethod",
    label: "Payment",
  },
  {
    key: "actions",
    label: "ACTION",
  },
];

const DashboardHistoryPage = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (selectedDates: any) => {
    setSelectedDate(selectedDates);
  };

  const [page, setPage] = React.useState(1);
  const rowsPerPage = 10;

  const pages = Math.ceil(allHistories.length / rowsPerPage);

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return allHistories.slice(start, end);
  }, [page]);

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <section className="m-5  relative bg-white p-5 rounded-2xl">
        {/* search and Filters */}
        <div className="grid   grid-cols-5 gap-10 items-center">
          <div className="col-span-4">
            <Input
              isClearable
              type="text"
              className="hover:shadow-lg rounded-2xl  hover:shadow-[#ee88222d]"
              placeholder="Search Order No"
              labelPlacement="outside"
              startContent={
                <LuSearch className=" text-2xl text-default-400 pointer-events-none flex-shrink-0" />
              }
            />
          </div>
          <div className="col-span-1">
            <div className="border border-[#ee8922] hover:shadow-lg hover:shadow-[#ee88222d] pl-5 py-[7px]  overflow-hidden rounded-2xl  flex  items-center">
              <label htmlFor="date" className="cursor-pointer mr-2">
                <FaCalendarDays className="text-[#7f7f7f]" />
              </label>

              <Flatpickr
                id="date"
                value={selectedDate}
                onChange={handleDateChange}
                options={{
                  mode: "single",
                  maxDate: new Date(),
                  dateFormat: "d M, Y",
                }}
                className=" w-full cursor-pointer focus:!outline-none"
              />
            </div>
          </div>
        </div>

        {/* all histories */}
        <div className="mt-5 ">
          <Table
            selectionMode="single"
            bottomContent={
              <div className="flex w-full justify-center">
                <Pagination
                  isCompact
                  showControls
                  showShadow
                  color="warning"
                  page={page}
                  total={pages}
                  onChange={(page) => setPage(page)}
                />
              </div>
            }
            classNames={{
              wrapper: "min-h-[222px]",
            }}
          >
            <TableHeader columns={columns}>
              {(column) => (
                <TableColumn align="center" key={column.key}>
                  {column.key === "actions" ? column?.label : column?.label}
                </TableColumn>
              )}
            </TableHeader>
            <TableBody
              items={items}
              isLoading={!true}
              loadingContent={<Spinner color="warning" label="Loading..." />}
            >
              {(item) => (
                <TableRow key={item?.orderId}>
                  {(columnKey) => (
                    <TableCell align="justify">
                      {columnKey === "actions" ? (
                        <div className="relative flex items-center ">
                          <Tooltip content="Details">
                            <Button
                              isIconOnly
                              variant="light"
                              onPress={onOpen}
                              className="text-lg text-default-400 cursor-pointer active:opacity-50"
                            >
                              <FiEye />
                            </Button>
                          </Tooltip>
                          <Tooltip content="Edit user">
                            <Button
                              isIconOnly
                              variant="light"
                              onPress={onOpen}
                              className="text-lg text-default-400 cursor-pointer active:opacity-50"
                            >
                              <RiEdit2Line />
                            </Button>
                          </Tooltip>
                          <Tooltip color="danger" content="Delete user">
                            <Button
                              isIconOnly
                              variant="light"
                              onPress={onOpen}
                              className="text-lg text-danger cursor-pointer active:opacity-50"
                            >
                              <RiDeleteBin5Line />
                            </Button>
                          </Tooltip>
                        </div>
                      ) : columnKey === "amount" ? (
                        <span className="font-semibold">
                          ${getKeyValue(item, columnKey)}
                        </span>
                      ) : columnKey === "paymentMethod" ? (
                        <>
                          <span
                            className={`${
                              getKeyValue(item, columnKey) === "Cash" &&
                              "bg-[#54ca92] px-2.5 py-1 rounded-full text-white/80"
                            }   ${
                              getKeyValue(item, columnKey) === "Debit" &&
                              "bg-[#54c3ca] px-2.5 py-1 rounded-full text-white"
                            }  ${
                              getKeyValue(item, columnKey) === "E-Wallet" &&
                              "bg-[#548fca] px-2.5 py-1 rounded-full text-white"
                            } 
                            ${
                              getKeyValue(item, columnKey) === "Credit" &&
                              "bg-[#ff9368] px-2.5 py-1 rounded-full text-white"
                            }
                            `}
                          >
                            {getKeyValue(item, columnKey)}
                          </span>
                        </>
                      ) : (
                        getKeyValue(item, columnKey)
                      )}
                    </TableCell>
                  )}
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </section>

      {/* modals */}
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Modal Title
              </ModalHeader>
              <ModalBody>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
                <p>
                  Magna exercitation reprehenderit magna aute tempor cupidatat
                  consequat elit dolor adipisicing. Mollit dolor eiusmod sunt ex
                  incididunt cillum quis. Velit duis sit officia eiusmod Lorem
                  aliqua enim laboris do dolor eiusmod. Et mollit incididunt
                  nisi consectetur esse laborum eiusmod pariatur proident Lorem
                  eiusmod et. Culpa deserunt nostrud ad veniam.
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default DashboardHistoryPage;
