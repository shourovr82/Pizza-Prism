import DashboardLayout from "@/components/Layouts/Dashboard/DashboardLayout";
import DashboardReportLayout from "@/components/Layouts/Dashboard/DashboardReportLayout";
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
        <ReportSalesSummaryCards />
        <ReportSalesSummaryCharts />
        <ReportSalesSummaryTable />
      </section>
    </>
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
