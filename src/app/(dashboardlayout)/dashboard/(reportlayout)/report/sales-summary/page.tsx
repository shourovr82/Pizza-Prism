import ReportSalesSummaryCards from "@/components/dashboard/report/SalesSummery/ReportSalesSummaryCards";
import ReportSalesSummaryCharts from "@/components/dashboard/report/SalesSummery/ReportSalesSummaryCharts";
import ReportSalesSummaryFilter from "@/components/dashboard/report/SalesSummery/ReportSalesSummaryFilter";
import ReportSalesSummaryTable from "@/components/dashboard/report/SalesSummery/ReportSalesSummaryTable";

const DashboardReportPage = () => {
  return (
    <>
      <ReportSalesSummaryFilter />
      {/* main contents */}
      <section className="mt-5">
        <h2>This is Shafin</h2>
        <ReportSalesSummaryCards />
        <ReportSalesSummaryCharts />
        <ReportSalesSummaryTable />
      </section>
    </>
  );
};

export default DashboardReportPage;
