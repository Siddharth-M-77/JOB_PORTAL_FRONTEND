import React from "react";
import Navbar from "./shared-component/Navbar";
import Footer from "./shared-component/Footer";
import { useSelector } from "react-redux";
import { Button } from "./ui/button";
import { Mail, Pen, Phone } from "lucide-react";
import { Badge } from "./ui/badge";
import { Label } from "./ui/label";
import AppliesTable from "./AppliesTable";

const Profile = () => {
  const isHaveResume = true;
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Redux",
    "TypeScript",
    "Tailwind CSS",
    "Git",
    "Bootstrap",
    "Next.js",
    "GraphQL",
    "jQuery",
    "Vue.js",
    "Sass",
    "PHP",
    "Python",
    "Django",
    "Ruby on Rails",
    "RESTful APIs",
    "Web Accessibility (a11y)",
    "Docker",
    "Cloud Computing (AWS, Azure)",
    "SQL",
    "Firebase",
    "Content Management Systems (WordPress, Drupal)",
    "DevOps",
    "Web Performance Optimization",
  ];

  const { user } = useSelector((store) => store.user);
  return (
    <div className="max-w-4xl mx-auto bg-white min-h-[100vh] flex  flex-col justify-start rounded-lg my-5 p-8">
      <div className="bg-white shadow-lg p-6">
    
        <div className="flex  gap-8 justify-between p-6">
          <div className="flex gap-2 items-center">
            <div className="logo  w-16 h-16 object-cover rounded-full overflow-hidden">
              <img
                src={user?.profile?.profilePhoto}
                className="w-full h-full "
                alt=""
              />
            </div>

            <div className="">
              <h1 className="font-extrabold text-xl">{user.fullName}</h1>
              <p className="w-[40vw] opacity-65 text-sm">
              Lorem ipsum dolor sit.
              </p>
            </div>
          </div>
          <Button>
            <Pen />
          </Button>
        </div>
        <div className="p-6 my-5 ">
          <div className="flex gap-2 items-center justify-start mb-2">
            <Mail />
            <span>sidd@gmail.com</span>
          </div>
          <div className="flex gap-2 items-center justify-start">
            <Phone />
            <span>9696969696</span>
          </div>
        </div>
        <div>
          <h1 className="px-6">Skills</h1>

          {skills.length === 0
            ? "NA"
            : skills.map((item, index) => (
                <Badge className="my-2 mr-2 " key={index}>
                  <div className="flex p-2 flex-wrap">{item}</div>
                </Badge>
              ))}
        </div>
        <div className="grid w-full max-w-sm items-center">
          <Label className="text-xl font-semibold">Resume</Label>
          {isHaveResume ? (
            <a
              target="_blank"
              href=""
              className="text-blue-600 hover:underline cursor-pointer"
            >
              Resume
            </a>
          ) : (
            "NA"
          )}
        </div>
      </div>
      
      
      <h1 className="border-b-2 mt-5 border-bg-gray-300 font-extrabold font-serif text-2xl py-4">Applied Jobs</h1> 
      <AppliesTable/>
    </div>
  );
};

export default Profile;