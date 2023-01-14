import Image from "next/image";
import Link from "next/link";
import Navbar from "./navbar";

const Page = () => {
  return (
    <div>
      <div className=" bg-gradient-to-b from-[#FFF2C5] h-screen">
        {/* navbar */}
        <Navbar/>
        {/* end navbar */}
        <div className="container">
          <div className="flex"></div>
        </div>
      </div>
    </div>
  );
};
export default Page;



