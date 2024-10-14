import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { JOB_API_END_POINT } from "@/utils/constant";
import { setAllAdminJobs } from "@/redux/jobSlice";


const getAllAdminJobs = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const allAdminJobs = async () => {
      try {
        const response = await axios.get(`${JOB_API_END_POINT}/getadminjobs`, {
          withCredentials: true,
        });
        
        if (response.data.message) {
          console.log("Success");
          console.log(response.data);
          dispatch(setAllAdminJobs(response.data.jobs)); // Dispatch the action to set jobs in Redux store
        }
      } catch (error) {
        console.error("Error fetching admin jobs:", error); // Error handling
      }
    };

    allAdminJobs();
  }, [dispatch]); // Add dispatch to the dependency array
};

export default getAllAdminJobs;
