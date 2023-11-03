import DashboardSettingsSidebar from "@/components/layouts/dashboard/setting/DashboardSettingsSidebar";

export default function DashboardSettingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="grid grid-cols-10 gap-5 p-5 relative">
      <div className="h-[94vh] col-span-2 rounded-2xl shadow-lg  bg-[#ffffff] sticky left-0 top-5">
        <DashboardSettingsSidebar />
      </div>
      <div className="col-span-8 bg-[#fafafa]">{children}</div>
    </section>
  );
}
