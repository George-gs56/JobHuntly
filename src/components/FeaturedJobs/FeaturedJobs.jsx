import { Link } from "react-router-dom";
import { jobPosts } from "../../Data/Data.js";
import SectionText from "../SectionText/SectionText.jsx";
import { SlHeart } from "react-icons/sl";
import { IoMdTime } from "react-icons/io";

const FeaturedJobs = () => {
  return (
    <section className="py-20 bg-[#F8F8FD]">
      <div className="container">
        <div className="w-full ">
          {/* text  */}
          <SectionText
            title="Featured"
            subTitle="jobs"
            ctaName="Show more jobs"
          />
          {/* lists  */}
          <div className="grid w-full gap-10 mt-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
            {jobPosts.map((joblist) => (
              <Link
                to={`job-details/${joblist.title
                  .toLowerCase()
                  .split(" ")
                  .join("-")}`}
                key={joblist.company}
                className="relative transition duration-300 bg-white border cursor-pointer hover:border-primaryColor hover:shadow-xl hover:shadow-gray-100 border-gray-400/40 rounded-xl p-7 "
              >
                <div className="flex items-start justify-between gap-2 ">
                  <div className="flex items-start gap-3">
                    {/* icon  */}
                    <div className="h-14 flex items-center justify-center w-14 rounded-lg bg-white shadow-[inset_0px_0px_25px_#e7dbff8d] p-2">
                      <img
                        src={joblist.logo}
                        className="object-contain w-8 h-8"
                        alt={joblist.company}
                      />
                    </div>
                    <div className="flex flex-col items-start gap-1">
                      <h3 className="text-xl font-semibold font-clashDisplay text-textDarkColor">
                        {joblist.title}
                      </h3>
                      <p className="text-sm gap-[6px] flex items-center text-textGrayColor/80 font-semibold ">
                        <span>{joblist.company}</span>
                        <span className="w-1 h-1 rounded-full bg-textDarkColor/70"></span>
                        <span>{joblist.application} Applications</span>
                      </p>
                    </div>
                  </div>
                  {/* love icon  */}
                  <div className=""></div>
                </div>
                {/* role  */}
                <ul className="flex items-center gap-1 mt-5 mb-4">
                  {joblist.role.map((role, index) => (
                    <li
                      className={` ${
                        index === 0
                          ? "bg-[#6a1fff15] text-[#6a1fffd8]"
                          : index === 1
                          ? "bg-[#16a34a1f] text-[#16a34a]"
                          : index === 2
                          ? "bg-[#ff832a1f] text-[#ff832ae5]"
                          : "bg-transparent"
                      } py-[6px] text-sm px-4 rounded-full  font-semibold`}
                      key={index}
                    >
                      {role}
                    </li>
                  ))}
                </ul>
                {/* desription  */}
                <p className="text-base font-medium leading-7 text-gray-700/85 ">
                  {joblist.description}
                </p>
                {/* divider  */}
                <div className="h-[1px] w-full bg-textGrayColor/20 my-6 "></div>
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold font-clashDisplay text-textDarkColor/80">
                    ${joblist.salary}{" "}
                    <span className="text-textGrayColor">/hr</span>
                  </h3>
                  <div className="flex items-center gap-2">
                    {/* icon  */}
                    <div className="">
                      <IoMdTime className="text-lg text-textGrayColor" />
                    </div>
                    <p className="text-sm font-medium text-textGrayColor">
                      Posted : {joblist.date}
                    </p>
                  </div>
                </div>
                {/* Favorite icon  */}
                <div className="absolute flex items-center justify-center w-6 h-6 p-1 transition-all duration-300 border border-gray-100 rounded-full hover:border-primaryColor/20 group hover:bg-primaryColor/10 bg-gray-300/10 top-8 right-7 ">
                  <SlHeart className="text-sm text-gray-400 transition-all duration-300 group-hover:text-primaryColor" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedJobs;
