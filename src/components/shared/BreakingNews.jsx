import React from "react";
import Marquee from "react-fast-marquee";

const news = [
  {
    id: "news-2026-001",
    title:
      "FIFA World Cup 2026 Kicks Off in North America with Record Attendance",
  },
  {
    id: "news-2026-002",
    title:
      "Tech Giants Unveil Next-Generation Quantum Processors at Annual Summit",
  },
  {
    id: "news-2026-003",
    title: "Global Markets Rally as New Trade Policies Ease Import Duties",
  },
  {
    id: "news-2026-004",
    title:
      "NASA's Artemis Lunar Base Successfully Deploys First Solar Array System",
  },
  {
    id: "news-2026-005",
    title: "Breakthrough in Solid-State Battery Tech Could Double EV Range",
  },
];

const BreakingNews = () => {
  return (
    <div className="flex container mx-auto gap-4 bg-gray-100 p-2 justify-between">
      <button className="btn bg-pink-500">Latest News</button>
      <Marquee pauseOnHover={true} speed={50}>
        {news.map((n) => (
          <span  key={n.id} className="mr-10 ">{n.title}</span>
        ))}
      </Marquee>
    </div>
  );
};

export default BreakingNews;
