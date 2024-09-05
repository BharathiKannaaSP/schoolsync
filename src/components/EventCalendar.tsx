"use client";
import Image from "next/image";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];
const EventCalendar = () => {
  const events = [
    {
      id: 1,
      title: "New Year Celebration",
      time: "2024-01-01 00:00",
      shortDescription:
        "Celebrate the start of the new year with fireworks and festivities.",
    },
    {
      id: 2,
      title: "Spring Festival",
      time: "2024-03-20 10:00",
      shortDescription:
        "A day of fun activities, food stalls, and performances to welcome spring.",
    },
    {
      id: 3,
      title: "Summer Concert",
      time: "2024-06-21 18:00",
      shortDescription:
        "Live music and entertainment in the park to kick off the summer season.",
    },
    {
      id: 4,
      title: "Independence Day Parade",
      time: "2024-07-04 09:00",
      shortDescription:
        "Join the community parade and festivities to celebrate Independence Day.",
    },
    {
      id: 5,
      title: "Halloween Costume Party",
      time: "2024-10-31 20:00",
      shortDescription:
        "A spooky night of costumes, treats, and fun at the annual Halloween party.",
    },
    {
      id: 6,
      title: "Thanksgiving Dinner",
      time: "2024-11-28 17:00",
      shortDescription:
        "Gather with family and friends for a traditional Thanksgiving feast.",
    },
    {
      id: 7,
      title: "Christmas Market",
      time: "2024-12-15 12:00",
      shortDescription:
        "Shop for unique gifts and enjoy holiday treats at the Christmas market.",
    },
    {
      id: 8,
      title: "New Year’s Eve Bash",
      time: "2024-12-31 22:00",
      shortDescription:
        "Ring in the new year with music, dancing, and a countdown to midnight.",
    },
  ];

  const [value, onChange] = useState<Value>(new Date());
  const [showAll, setShowAll] = useState(false);

  const eventsToShow = showAll ? events : events.slice(0, 2);

  return (
    <div className="bg-white p-4 rounded-md">
      <Calendar onChange={onChange} value={value} />
      <div className="flex items-center justify-between mt-4">
        <h1 className="text-lg font-semibold">Events</h1>
        <Image src={"/moreDark.png"} width={20} height={20} alt="more" />
      </div>
      <div className="flex flex-col gap-4 mt-2">
        {eventsToShow.map((event) => (
          <div
            className="p-5 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-blueSky even:border-t-yellow"
            key={event.id}
          >
            <div className="flex items-center justify-between">
              <h1 className="font-semibold text-gray-400">{event.title}</h1>
              <span className="text-xs">{event.time}</span>
            </div>
            <p className="text-xs mt-2 tracking-wide">
              {event.shortDescription}
            </p>
          </div>
        ))}
        <div
          className="text-center text-sm text-gray-500 cursor-pointer"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "Hide" : "View all"}
        </div>
      </div>
    </div>
  );
};

export default EventCalendar;
