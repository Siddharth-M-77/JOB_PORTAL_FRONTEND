import React from "react";
import { useSelector } from "react-redux";
import { Button } from "../ui/button";
import { Bookmark } from "lucide-react";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Badge } from "../ui/badge";
import { Link } from "react-router-dom";

const allAdminJob = () => {
  const { companies } = useSelector((store) => store.company);
  const daysAgoFunction = (mongodbTime) => {
    const createdAt = new Date(mongodbTime);
    const currentTime = new Date();
    const timeDifference = currentTime - createdAt;
    return Math.floor(timeDifference / (1000 * 24 * 60 * 60));
  };
  return (
    <div className="h-[75vh]">
      <div className="p-5 rounded-md shadow-xl  min-h-72 w-96 mt-10 flex flex-col gap-3 bg-white border border-gray-100">
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-500">
            {daysAgoFunction(companies?.createdAt) === 0
              ? "Today"
              : `${daysAgoFunction(companies?.createdAt)} days ago`}
          </p>
          <Button variant="outline" className="rounded-full" size="icon">
            <Bookmark />
          </Button>
        </div>

        <div className="flex items-center gap-2 my-2">
          <Button className="p-6" variant="outline" size="icon">
            <Avatar>
              <AvatarImage src={companies.logo} />
            </Avatar>
          </Button>
          <div>
            <h1 className="font-medium text-lg">{companies.title}</h1>
            <p className="text-sm text-gray-500">{companies.name}</p>
          </div>
        </div>

        <div>
          <h1 className="font-bold text-lg my-2">{companies.title}</h1>
          <p className="text-sm text-gray-600">
            Description:{companies.description}
          </p>
        </div>
        <div className="flex items-center justify-between gap-2 mt-4">
          <Badge className={"text-blue-700 font-bold"} variant="ghost">
            {companies.position}-Position
          </Badge>

          <Badge className={"text-[#7209b7] font-bold"} variant="ghost">
            <a
              href={
                companies.website.startsWith("http")
                  ? companies.website
                  : `https://${companies.website}`
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              {companies.website}
            </a>
          </Badge>
        </div>
        <div className="flex items-center justify-between gap-4 mt-4">
          <Button
            onClick={() => navigate(`/description/${jobId}`)}
            variant="outline"
          >
            Details
          </Button>
          <Button className="bg-[#7209b7]">Save For Later</Button>
        </div>
      </div>
    </div>
  );
};

export default allAdminJob;
