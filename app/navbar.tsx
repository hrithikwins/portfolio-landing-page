const navbarItems = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About",
    link: "/about",
  },
];

const Navbar = ({}) => {
  return (
    <>
      <div className="bg-white flex flex-row justify-between items-center px-28 py-10 w-full  h-90 ">
        <div className="font-bold text-[38px]">Samar</div>
        <div className="bg-white  lg:flex flex-row space-x-8 font-bold text-xl leading-[30px] ">
          {navbarItems.map((item) => (
            <div className="hidden">{item.name}</div>
          ))}
          <div className="">
            <a href="https://linkedin.com/in/hrithikwins" target="_blank" className="font-bold text-[38px] lg:text-[22px] bg-primary px-6 py-3 text-white border border-primary rounded-lg">
              Connect{" "}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;
