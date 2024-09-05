import FormModal from "@/components/FormModal";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { parentsData, role, teachersData } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

type Parent = {
  id: number;
  name: string;
  students: string[];
  phone?: string;
  email?: string;
  address?: string;
};
const columns = [
  {
    header: "Info",
    accessor: "info",
  },
  {
    header: "Student Names",
    accessor: "students",
    className: "hidden md:table-cell",
  },
  {
    header: "Phone",
    accessor: "phone",
    className: "hidden lg:table-cell",
  },
  {
    header: "Address",
    accessor: "address",
    className: "hidden lg:table-cell",
  },
  {
    header: "Actions",
    accessor: "action",
  },
];
const ParentsList = () => {
  const renderRow = (item: Parent) => (
    <tr
      key={item.id}
      className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-blueSkyLight"
    >
      <td className="flex items-center gap-4 p-4">
        {/* <Image
          src={item.photo}
          alt="photo"
          width={40}
          height={40}
          className="md:hidden xl:block w-10 h-10 rounded-full object-cover"
        /> */}
        <div className="flex flex-col">
          <h3 className="font-semibold">{item.name}</h3>
          <p className="text-xs text-gray-600">{item?.email}</p>
        </div>
      </td>
      <td className="hidden md:table-cell text-xs">
        {item.students.join(", ")}
      </td>
      <td className="hidden md:table-cell text-xs">{item.phone}</td>
      <td className="hidden md:table-cell text-xs">{item.address}</td>
      <td>
        <div className="flex items-center gap-2">
          {role === "admin" && (
            <>
              <FormModal table="parent" type="update" data={item} />
              <FormModal table="parent" type="delete" id={item.id} />
            </>
          )}
        </div>
      </td>
    </tr>
  );
  return (
    <div className="p-4 bg-white rounded-md flex-1 m-4 mt-0">
      {/* Top */}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">All Parents</h1>
        <div className="flex flex-col md:flex-row items-center gap-4  w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-blueSky">
              <Image
                src={"/filter.png"}
                width={18}
                height={18}
                alt="table_filter"
              />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-blueSky">
              <Image
                src={"/sort.png"}
                width={18}
                height={18}
                alt="table_filter"
              />
            </button>
            {role === "admin" && <FormModal table="parent" type="create" />}
          </div>
        </div>
      </div>
      {/* List */}
      <div className="">
        <Table columns={columns} renderRow={renderRow} data={parentsData} />
      </div>
      {/* Bottom */}
      <div className="">
        <Pagination />
      </div>
    </div>
  );
};

export default ParentsList;
