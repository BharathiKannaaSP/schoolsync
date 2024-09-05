import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4">
      {/* SEARCH BAR */}
      <div className="hidden md:flex text-xs gap-2 ring-[1.25px] ring-gray-300 rounded-full p-2">
        <Image src={"/search.png"} alt="search" width={12} height={12} />
        <input type="search" placeholder="Search" className=" bg-transparent outline-none pr-2" />
      </div>
      {/* ICONS AND USER */}
      <div className="flex items-center gap-6 justify-end w-full">
        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer">
            <Image src={"/message.png"} alt="message" width={20} height={20}/>
        </div>
        <div className="bg-white relative rounded-full w-7 h-7 flex items-center justify-center cursor-pointer">
            <Image src={"/announcement.png"} alt="message" width={20} height={20}/>
            <div className="absolute -top-3 -right-3 w-5 h-5 flex items-center justify-center bg-transparent ring-2 ring-red-400 text-xs rounded-full text-black">1</div>
        </div>
        <div className="flex flex-col">
            <span className="text-sm leading-3 font-medium">Rachel</span>
            <span className="text-[10px] text-gray-500 text-right">Admin</span>
        </div>
        <Image className="rounded-full" src={"/avatar.png"} width={36} height={36} alt="avatar" />
      </div>
    </div>
  );
};

export default Navbar;
