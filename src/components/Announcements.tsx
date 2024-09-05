"use client"
import { useState } from "react";

const Announcements = () => {
  const announcements = [
    {
      id: 1,
      title: "School Renovation",
      description:
        "The school will undergo renovation starting next Monday. Classes will be temporarily relocated.",
      time: "2024-09-05 08:00",
    },
    {
      id: 2,
      title: "New Extracurricular Activities",
      description:
        "We are introducing new extracurricular activities including robotics, chess, and drama clubs.",
      time: "2024-09-10 09:00",
    },
    {
      id: 3,
      title: "Parent-Teacher Conference",
      description:
        "The quarterly parent-teacher conference will be held on the 15th of September. Please schedule your appointments.",
      time: "2024-09-15 16:00",
    },
    {
      id: 4,
      title: "Winter Break Schedule",
      description:
        "Winter break will start on December 20th. The last day of classes is December 19th. Classes resume on January 3rd.",
      time: "2024-12-01 10:00",
    },
  ];

  const [showAll, setShowAll] = useState(false);

  const announcementsToShow = showAll ? announcements : announcements.slice(0, 2);

  return (
    <div className="bg-white p-4 rounded-md">
      <div className="flex items-center justify-between mt-4">
        <h1 className="text-lg font-semibold">Announcements</h1>
        <span className="text-xs text-gray-500 cursor-pointer" onClick={() => setShowAll(!showAll)}>{showAll ? "Hide" : "View all"}</span>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        {announcementsToShow.map((announce) => (
          <div className="odd:bg-blueSkyLight even:bg-purple rounded-md p-4" key={announce.id}>
            <div className="flex items-center justify-between">
                <h2 className="font-semibold">{announce.title}</h2>
                <span className="text-xs">{announce.time}</span>
            </div>
                <p className="text-gray-400 text-xs mt-2">{announce.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Announcements;
