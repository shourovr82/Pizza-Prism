import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />

      <>{children}</>

      <Footer />
    </>
  );
}
