import DashboardProfileSidebar from "@/components/layouts/dashboard/profile/DashboardProfileSidebar";

export default function DashboardProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="grid grid-cols-12 gap-5 p-5 relative">
      <div className="h-[94vh]  col-span-3 rounded-2xl shadow-lg  bg-[#ffffff] sticky left-0 top-5">
        <DashboardProfileSidebar />
      </div>
      <div className="col-span-9 bg-[#fafafa]">{children}</div>
    </section>
  );
}
