import { setCompanies } from "@/redux/companySlice";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { COMPANY_API_END_POINT } from "@/utils/constant";

const getAllCompanies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const response = await axios.get(`COMPANY_API_END_POINT`/get, {
          withCredentials: true,
        });
        if (response.data.message) {
          console.log("Hiii",response.data.companies);

          dispatch(setCompanies(res.data));
        }
      } catch (error) {}
    };
    fetchCompanies();
  },[]);
 
};

export default getAllCompanies;
