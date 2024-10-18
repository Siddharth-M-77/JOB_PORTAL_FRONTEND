import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Button } from "../ui/button";
import { ArrowLeft, LocateIcon, Mail, Pen, Phone } from "lucide-react";
import { Badge } from "../ui/badge";
import { Label } from "../ui/label";
import UpdateProfileDailog from "../UpdateProfileDailog";
import { useNavigate, useParams } from "react-router-dom";
import { setSingleCompany } from "@/redux/companySlice";

const CompanyUpdate = () => {
  const [open, setOpen] = useState(false);
  const isHaveResume = true;
  const navigate = useNavigate();
  const params = useParams();
  console.log(params.id);


  const { singleCompany } = useSelector((store) => store.company);
  console.log(singleCompany.name)
  const { user } = useSelector((store) => store.user);
//   console.log(singleCompany)
  const goBack = () => {
    navigate(-1);
  };

  return (
    <>
      <Button
        onClick={goBack}
        className="mt-6 ml-6 bg-white shadow-xl text-black flex gap-2 hover:text-white"
      >
        <ArrowLeft /> Go Back
      </Button>
      <div className="max-w-7xl mx-auto bg-white h-[65vh] flex  flex-col justify-start rounded-lg my-5 p-8">
        <div className="bg-white shadow-lg p-6">
          <div className="flex  gap-8 justify-between p-6">
            <div className="flex gap-6 items-center">
              <div className="logo  w-16 h-16 object-cover rounded-full overflow-hidden">
                <img
                  src={singleCompany?.logo}
                  className="w-full h-full "
                  alt=""
                />
              </div>

              <div className="">
                <h1 className="font-extrabold text-2xl">{singleCompany.name}</h1>
                <p className="w-[40vw] font-semibold opacity-65 text-sm">
                  {singleCompany.description}
                </p>
              </div>
            </div>
            <Button>
              <Pen onClick={() => setOpen(true)} />
            </Button>
          </div>
          <div className="p-6 my-5 ">
            <div className="flex gap-2 items-center justify-start mb-2">
              <LocateIcon/>
              <span>{singleCompany?.location}</span>
            </div>
            <div className="flex gap-2 items-center justify-start">
              <Phone />
              <span>{user?.phoneNumber}</span>
            </div>
          </div>
          <div>
            <h1 className="px-6">Skills</h1>

            {user?.profile?.skills?.length > 0 ? (
              user.profile.skills.map((item, index) => (
                <Badge className="my-2 mr-2" key={index}>
                  <div className="flex p-2 flex-wrap">{item}</div>
                </Badge>
              ))
            ) : (
              <span className="px-6">No skills available</span>
            )}
          </div>
          <div className="grid w-full max-w-sm items-center px-6">
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

        <div className="flex flex-col gap-3"></div>
        <UpdateProfileDailog open={open} setOpen={setOpen} />
      </div>
    </>
  );
};

export default CompanyUpdate;
