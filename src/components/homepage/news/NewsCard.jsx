import Image from "next/image";
import Link from "next/link";
import { CiBookmark, CiShare2, CiStar } from "react-icons/ci";
import { FaEye } from "react-icons/fa";
import { IoStar } from "react-icons/io5";

const NewsCard = ({ news }) => {
  return (
    <div>
      <div className="card bg-base-100 shadow-sm">
        <div className="card-body">
          <div className="flex justify-between">
            <div className="flex gap-1 items-center">
              <Image
                src={news.author?.img}
                alt={news.author?.name}
                width={40}
                height={40}
                className="rounded-full"></Image>
              <div className="">
                <h2 className="font-semibold">{news.author?.name}</h2>
                <h2 className="text-xs">{news.author?.published_date}</h2>
              </div>
            </div>
            <div className="flex gap-1 text-xl">
              <CiShare2></CiShare2>
              <CiBookmark></CiBookmark>
            </div>
          </div>
          <h2 className="card-title">{news.title}</h2>

          <figure>
            <Image
              src={news.image_url}
              alt={news.details}
              width={300}
              height={300}
              className="w-full"
            />
          </figure>

          <p className="line-clamp-3">{news.details}</p>

          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <h2 className="flex items-center gap-1">
                <IoStar className="text-yellow-500"></IoStar>
                {news.rating.number}
              </h2>
              <h2 className="flex items-center gap-1">
                <FaEye></FaEye>
                {news.total_view}
              </h2>
            </div>
            <Link href={`/news/${news._id}`}>
              <button className="btn">Read More</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
