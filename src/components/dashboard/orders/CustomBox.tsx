/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Checkbox, Link, User, Chip, cn } from "@nextui-org/react";

export const CustomCheckbox = ({ userData }: any) => {
  return (
    <Checkbox
      aria-label={userData?.userData?.user?.name}
      classNames={{
        base: cn(
          "inline-flex max-w-md w-full bg-content1 m-0",
          "hover:bg-content2 items-center justify-start",
          "cursor-pointer rounded-lg gap-2 p-4 border-2 border-transparent",
          "data-[selected=true]:border-primary",
        ),
        label: "w-full",
      }}
      value={userData?.value}
    >
      <div className="w-full flex justify-between gap-2">
        <User
          avatarProps={{ size: "md", src: userData?.user?.avatar }}
          description={
            <Link isExternal href={userData?.user?.url} size="sm">
              @{userData?.user?.username}
            </Link>
          }
          name={userData?.user?.name}
        />
        <div className="flex flex-col items-end gap-1">
          <span className="text-tiny text-default-500">{userData?.user?.role}</span>
          <Chip color={userData?.statusColor} size="sm" variant="flat">
            {userData?.user?.status}
          </Chip>
        </div>
      </div>
    </Checkbox>
  );
};
