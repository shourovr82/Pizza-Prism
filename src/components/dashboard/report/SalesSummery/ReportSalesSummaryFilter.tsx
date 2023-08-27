import { DateRangePicker, IconButton, Whisper } from "rsuite";
import FileDownloadIcon from "@rsuite/icons/FileDownload";
import { Dropdown, Popover } from "rsuite";
import TextImageIcon from "@rsuite/icons/TextImage";
import TableColumnIcon from "@rsuite/icons/TableColumn";
import ArrowDownLineIcon from "@rsuite/icons/ArrowDownLine";
import ImageIcon from "@rsuite/icons/Image";

const ReportSalesSummaryFilter = () => {
  const renderMenu = ({ onClose, left, top, className }: any, ref: any) => {
    const handleSelect = (eventKey: any) => {
      onClose();
      console.log(eventKey);
    };
    return (
      <Popover ref={ref} className={className} style={{ left, top }} full>
        <Dropdown.Menu onSelect={handleSelect}>
          <Dropdown.Item
            className="hover:!bg-[#fef0e1] hover:!text-[#ec7905]"
            icon={<FileDownloadIcon />}
            eventKey={3}
          >
            Download As...
          </Dropdown.Item>
          <Dropdown.Item
            className="hover:!bg-[#fef0e1] hover:!text-[#ec7905]"
            icon={<TextImageIcon />}
            eventKey={4}
          >
            Export PDF
          </Dropdown.Item>
          <Dropdown.Item
            className="hover:!bg-[#fef0e1] hover:!text-[#ec7905]"
            icon={<TableColumnIcon />}
            eventKey={5}
          >
            Export HTML
          </Dropdown.Item>
          <Dropdown.Item
            className="hover:!bg-[#fef0e1] hover:!text-[#ec7905]"
            icon={<ImageIcon />}
            eventKey={6}
          >
            Export as Image
          </Dropdown.Item>
        </Dropdown.Menu>
      </Popover>
    );
  };
  return (
    <>
      <div className="flex gap-5 items-center relative">
        <div>
          <DateRangePicker
            className={`w-[210px] custom-date-range-picker`}
            placeholder="Last 7 days"
          />
        </div>
        <div className=" border rounded-md">
          <Whisper
            placement="autoVerticalEnd"
            trigger="click"
            speaker={renderMenu}
          >
            <IconButton
              appearance="subtle"
              icon={<FileDownloadIcon />}
              placement="left"
              endIcon={<ArrowDownLineIcon />}
            >
              Export
            </IconButton>
          </Whisper>
        </div>
      </div>
    </>
  );
};

export default ReportSalesSummaryFilter;
