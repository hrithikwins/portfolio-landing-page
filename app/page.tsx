import Image from "next/image";
import Link from "next/link";
import Navbar from "./navbar";

const Page = () => {
  return (
    <div>
      <div className=" bg-gradient-to-b from-[#FFF2C5] h-screen">
        {/* navbar */}
        <Navbar />
        {/* end navbar */}
        <div className="container">
          <div className="flex flex-col lg:flex-row">
            {/* tagline and description */}
            <div className="flex flex-col lg:w-1/2">
              <h1>Hello this is Samar</h1>
              <div className="flex flex-row">
                {/* button 1 */}
                <div className="bg-primary px-6 py-3 text-white border border-primary rounded-lg">Say Hello</div>
                <div className="bg-primary px-6 py-3 text-white border border-primary rounded-lg">Connct</div>
              </div>
            </div>
            {/* image  */}
            <div className="flex flex-row">
              <Image src="/samar.png" width={500} height={500} alt={""}  />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Page;
