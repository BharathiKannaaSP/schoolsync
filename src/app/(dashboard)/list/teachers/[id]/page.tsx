import Announcements from "@/components/Announcements";
import BigCalendar from "@/components/BigCalendar";
import Performance from "@/components/Performance";
import Image from "next/image";
import Link from "next/link";

const SingleTeacherPage = () => {
  return (
    <div className="flex-1 p-4 flex flex-col gap-4 xl:flex-row">
      {/* Left */}
      <div className="w-full xl:w-2/3">
        {/* TOP */}
        <div className="flex flex-col lg:flex-row gap-4">
          {/* User info card */}
          <div className="bg-blueSky py-6 px-4 rounded-md  flex-1 flex gap-4">
            <div className="w-1/3">
              <Image
                src={
                  "https://images.pexels.com/photos/3781533/pexels-photo-3781533.jpeg"
                }
                alt="profile_img"
                width={144}
                height={144}
                className="w-36 h-36 rounded-full object-cover"
              />
            </div>
            <div className="w-2/3 flex flex-col justify-between gap-4">
              <div className="flex items-center gap-4">
                <h1 className="text-xl font-semibold">Alice Patrick</h1>
              </div>
              <p className="text-sm text-gray-500">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed
                officiis{" "}
              </p>
              <div className="flex items-center justify-between gap-2 flex-wrap text-xs font-medium">
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Image src="/blood.png" alt="" width={14} height={14} />
                  <span>A+</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Image src={"/date.png"} alt="dob" width={14} height={14} />
                  <span>Jan 2, 1996</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Image src={"/mail.png"} alt="mail" width={14} height={14} />
                  <span>user@gmail.com</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Image
                    src={"/phone.png"}
                    alt="phone"
                    width={14}
                    height={14}
                  />
                  <span>(+1) 132-123-1232</span>
                </div>
              </div>
            </div>
          </div>
          {/* Small card */}
          <div className="flex-1 flex gap-4 justify-between flex-wrap">
            {/* Card */}
            <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[48%] 2xl:w-[45%]">
              <Image
                src={"/singleAttendance.png"}
                alt="singleAttendance"
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div className="">
                <h1 className="text-lg font-semibold">90%</h1>
                <span className="text-sm text-gray-500">Attendance</span>
              </div>
            </div>
            <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[45%]">
              <Image
                src={"/singleBranch.png"}
                alt="singleBranch"
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div className="">
                <h1 className="text-lg font-semibold">2</h1>
                <span className="text-sm text-gray-500">Branches</span>
              </div>
            </div>
            <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[45%]">
              <Image
                src={"/singleLesson.png"}
                alt="singleLesson"
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div className="">
                <h1 className="text-lg font-semibold">3</h1>
                <span className="text-sm text-gray-500">Lessons</span>
              </div>
            </div>
            <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[45%]">
              <Image
                src={"/singleClass.png"}
                alt="singleClass"
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div className="">
                <h1 className="text-lg font-semibold">4</h1>
                <span className="text-sm text-gray-500">Classes</span>
              </div>
            </div>
          </div>
        </div>
        {/* Bottom */}
        <div className="mt-4 bg-white rounded-md p-4 h-[800px]">
          <h1>Teacher's Schedule</h1>
          <BigCalendar />
        </div>
      </div>
      {/* Right */}
      <div className="w-full xl:w-1/3 flex flex-col gap-4">
        <div className="bg-white p-4 rounded-md">
          <h1>Shortcuts</h1>
          <div className="mt-4 flex gap-4 flex-wrap text-xs text-gray-500">
            <Link className="p-3 rounded-md bg-blueSky" href={"/"}>Teacher's Classes</Link>
            <Link className="p-3 rounded-md bg-blueSkyLight" href={"/"}>Teacher's Students</Link>
            <Link className="p-3 rounded-md bg-gray-100" href={"/"}>Teacher's Lessons</Link>
            <Link className="p-3 rounded-md bg-pink-50" href={"/"}>Teacher's Exams</Link>
            <Link className="p-3 rounded-md bg-green-50" href={"/"}>Teacher's Assignments</Link>
          </div>
        </div>
        <Performance />
        <Announcements />
      </div>
    </div>
  );
};

export default SingleTeacherPage;
