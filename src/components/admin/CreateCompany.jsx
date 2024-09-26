import React, { useState } from "react";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "sonner";
import { useDispatch } from "react-redux";
import { setSingleCompany } from "@/redux/companySlice";
import {COMPANY_API_END_POINT} from "../../utils/constant"

const CompanyCreate = () => {
  const navigate = useNavigate();
  const [companyName, setCompanyName] = useState(""); // Initialize as an empty string
  const dispatch = useDispatch();

  const registerNewCompany = async (e) => {
    const token = getCookie('token');
console.log('JWT Token:', token); // This will log your token
    e.preventDefault(); // Prevent page refresh on form submit
    try {
      const res = await axios.post(
        `${COMPANY_API_END_POINT}/register`,
        { companyName },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      if (res?.data?.success) {
        dispatch(setSingleCompany(res.data.company));
        toast.success(res.data.message);
        console.log(res.data.message)
        const companyId = res?.data?.company?._id;
        console.log(companyId);
        // navigate(`/admin/companies/${companyId}`);
      }
    } catch (error) {
      console.log("Create company error", error);
      toast.error("Error creating company");
    }
  };

  return (
    <div>
      <div className="max-w-2xl mx-auto h-[70vh] pt-32">
        <div className="my-10">
          <h1 className="font-bold text-2xl">Your Company Name</h1>
          <p className="text-gray-500">
            What would you like to give your company name? You can change this
            later.
          </p>
        </div>

        <form onSubmit={registerNewCompany}>
          <Label htmlFor="companyName">Company Name</Label>
          <Input
            id="companyName"
            type="text"
            className="my-2"
            placeholder="JobHunt, Microsoft, etc."
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            required
          />
          <div className="flex items-center gap-2 my-10">
            <Button
              variant="outline"
              onClick={() => navigate("/admin/companies")}
            >
              Cancel
            </Button>
            <Button type="submit">Continue</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CompanyCreate;
