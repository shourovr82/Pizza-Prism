import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pizza Prism - Home",
  description: "Created By Shafinur Islam(@shourovr82)",
  applicationName: "Pizza Prism",
};

export default function Home() {
  return (
    <>
      <h2 className="text-5xl  selection:text-white selection:bg-green-600">
        Home Page shafin
      </h2>
    </>
  );
}
