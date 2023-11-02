import DashboardSidebar from "@/components/layouts/dashboard/DashboardSidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="grid grid-cols-12 ">
      <div className="h-[100vh] col-span-1 bg-[#ffffff] sticky top-0">
        <DashboardSidebar />
      </div>
      <div className="col-span-11">{children}</div>
    </section>
  );
}
