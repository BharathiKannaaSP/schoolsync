import Image from "next/image"

const TableSearch = () => {
  return (
         <div className="w-full md:w-auto flex text-xs gap-2 ring-[1.25px] ring-gray-300 rounded-full p-2">
        <Image src={"/search.png"} alt="search" width={12} height={12} />
        <input type="search" placeholder="Search" className=" bg-transparent outline-none pr-2" />
    </div>
  )
}

export default TableSearch