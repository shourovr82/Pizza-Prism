"use client";

import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  User,
  Chip,
  ChipProps,
  Tooltip,
} from "@nextui-org/react";
import Link from "next/link";

import { useCallback } from "react";
import { FaChevronRight } from "react-icons/fa";

const statusColorMap: Record<string, ChipProps["color"]> = {
  active: "success",
  paused: "danger",
  vacation: "warning",
};
const columns = [
  { name: "CUSTOMER", uid: "customer" },
  { name: "ORDER NUMBER", uid: "role" },
  { name: "AMOUNT", uid: "amount" },
  { name: "ADDRESS", uid: "address" },
  { name: "STATUS", uid: "status" },
];

const users = [
  {
    id: 1,
    name: "Tony Reichert",
    role: "+8801317441769",
    address: "Sirajganj",
    status: "active",
    amount: 500,
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    email: "tony.reichert@example.com",
  },
  {
    id: 2,
    name: "Zoey Lang",
    role: "+8801317441769",
    address: "Sirajganj",
    status: "paused",
    amount: 500,
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    email: "zoey.lang@example.com",
  },
  {
    id: 3,
    name: "Jane Fisher",
    role: "+8801317441769",
    address: "Sirajganj",
    status: "active",
    amount: 500,
    avatar: "https://i.pravatar.cc/150?u=a04258114e29026702d",
    email: "jane.fisher@example.com",
  },
  {
    id: 4,
    name: "William Howard",
    role: "+8801317441769",
    address: "Sirajganj",
    status: "vacation",
    amount: 500,
    avatar: "https://i.pravatar.cc/150?u=a048581f4e29026701d",
    email: "william.howard@example.com",
  },
  {
    id: 5,
    name: "Kristen Copper",
    role: "+8801317441769",
    address: "Sirajganj",
    status: "active",
    amount: 5100,
    avatar: "https://i.pravatar.cc/150?u=a092581d4ef9026700d",
    email: "kristen.cooper@example.com",
  },
];

type User = (typeof users)[0];

const DashboardOrderReportTable = () => {
  const renderCell = useCallback((user: User, columnKey: React.Key) => {
    const cellValue = user[columnKey as keyof User];

    switch (columnKey) {
      case "customer":
        return (
          <User
            avatarProps={{ radius: "lg", src: user.avatar }}
            name={cellValue}
          ></User>
        );
      case "orderNo":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-sm capitalize">{cellValue}</p>
          </div>
        );
      case "status":
        return (
          <Chip
            className="capitalize"
            color={statusColorMap[user.status]}
            size="sm"
            variant="flat"
          >
            {cellValue}
          </Chip>
        );

      case "amount":
        return (
          <div className="flex ">
            <h2 className="capitalize" color={statusColorMap[user.status]}>
              {cellValue}
            </h2>
          </div>
        );

      default:
        return cellValue;
    }
  }, []);

  return (
    <section>
      {" "}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-lg font-semibold">Order Reports</h2>
          <p className=" text-sm">
            <span className="text-[#e64100]">Wow!! 100+ New </span>
            order got this week
          </p>
        </div>
        <div>
          <Tooltip
            closeDelay={0}
            placement="top-end"
            showArrow={true}
            color="warning"
            content="View More Popular Dishes.."
          >
            <Link
              href="/dashboard/categories"
              className="flex items-center gap-2 hover:underline underline-offset-4 duration-300 ease-in-out transition-all text-sm"
            >
              <span>View More</span>
              <span className="bg-black/10 hover:bg-black/20 duration-300 ease-in-out transition-all rounded-full p-1.5">
                <FaChevronRight size={18} />
              </span>
            </Link>
          </Tooltip>
        </div>
      </div>
      <Table
        selectionMode="single"
        color="warning"
        shadow="none"
        aria-label="Example table with custom cells"
      >
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn
              key={column.uid}
              align={column.uid === "actions" ? "center" : "start"}
            >
              {column.name}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody items={users}>
          {(item) => (
            <TableRow key={item.id}>
              {(columnKey) => (
                <TableCell>{renderCell(item, columnKey)}</TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </section>
  );
};
export default DashboardOrderReportTable;
