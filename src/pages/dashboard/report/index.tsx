import DashboardLayout from "@/components/Layouts/Dashboard/DashboardLayout";
import DashboardReportLayout from "@/components/Layouts/Dashboard/DashboardReportLayout";
import { DateRangePicker } from "rsuite";
import { Dropdown } from "rsuite";
import PageIcon from "@rsuite/icons/Page";
import FolderFillIcon from "@rsuite/icons/FolderFill";
import FileDownloadIcon from "@rsuite/icons/FileDownload";
import DetailIcon from "@rsuite/icons/Detail";

const DashboardReportPage = () => {
  return (
    <div>
      <div>
        {" "}
        <div className="flex gap-5 items-center relative">
          <div>
            <DateRangePicker className="w-[210px]" placeholder="Last 7 days" />
          </div>
          <div className="  w-full">
            <Dropdown
              title="Export"
              className="border rounded-lg "
              icon={<PageIcon />}
            >
              <Dropdown.Item icon={<PageIcon />}>New File</Dropdown.Item>
              <Dropdown.Item icon={<FolderFillIcon />}>
                New File with Current Profile
              </Dropdown.Item>
              <Dropdown.Item icon={<FileDownloadIcon />}>
                Download As...
              </Dropdown.Item>
              <Dropdown.Item icon={<DetailIcon />}>Export PDF</Dropdown.Item>
            </Dropdown>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardReportPage;

DashboardReportPage.getLayout = function getLayout(page: any) {
  return (
    <DashboardLayout>
      <DashboardReportLayout>{page}</DashboardReportLayout>
    </DashboardLayout>
  );
};
