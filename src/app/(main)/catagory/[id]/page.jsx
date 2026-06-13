import LeftSidebar from "@/components/homepage/news/LeftSidebar";
import NewsCard from "@/components/homepage/news/NewsCard";
import RightSidebar from "@/components/homepage/news/RightSidebar";
import { getCatagory, getNewsByCatagoryId } from "@/lib/data";
import Image from "next/image";



const NewsCatagoryPage = async ({ params }) => {
  const { id } = await params;

  const catagories = await getCatagory();
  const news = await getNewsByCatagoryId(id);

  return (
    <div className="container mx-auto grid grid-cols-12 gap-3 my-8">
      <div className="col-span-3">
        <LeftSidebar catagories={catagories} activeID={id}></LeftSidebar>
      </div>
      <div className="  col-span-6">
        <h2 className="font-bold text-2xl mb-3">News By Catagory</h2>
        <div className="space-y-3">
          {news.length > 0 ? (
            news.map((n, ind) => {
              return (
                <NewsCard key={ind} news = {n}></NewsCard>
              );
            })
          ) : (
            <h2 className="font-bold text-2xl text-center text-purple-500 pt-20">
              No News Found !!
            </h2>
          )}
        </div>
      </div>
      <div className="col-span-3">
        <RightSidebar></RightSidebar>
      </div>
    </div>
  );
};

export default NewsCatagoryPage;
