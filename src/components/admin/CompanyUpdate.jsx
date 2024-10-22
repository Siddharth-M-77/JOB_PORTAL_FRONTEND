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


  const { singleCompany } = useSelector((store) => store.company);
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
      <div className="max-w-4xl mx-auto bg-white h-[60vh] flex  flex-col justify-start rounded-lg my-5 p-8">
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
              <span>{singleCompany?.phoneNumber}</span>
            </div>
          </div>
        
        
        </div>

        <div className="flex flex-col gap-3"></div>
        <UpdateProfileDailog open={open} setOpen={setOpen} />
      </div>
    </>
  );
};

export default CompanyUpdate;
