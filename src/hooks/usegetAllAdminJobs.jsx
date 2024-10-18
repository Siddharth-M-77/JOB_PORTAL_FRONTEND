import { useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { JOB_API_END_POINT } from "@/utils/constant";
import { setAllAdminJobs } from "@/redux/jobSlice";

const useGetAllAdminJobs = () => { // Add the function declaration
  const dispatch = useDispatch();

  useEffect(() => {
    const allAdminJobs = async () => {
      try {
        const response = await axios.get(`${JOB_API_END_POINT}/getAdminJobs`, {
          withCredentials: true,
        });

        if (response.data.success) { // Check for success instead of message
          console.log("Fetched jobs successfully:", response.data.jobs);
          dispatch(setAllAdminJobs(response.data.jobs)); 
        } else {
          console.log("Failed to fetch jobs:", response.data.message); // Log failure message if needed
        }
      } catch (error) {
        console.error("Error fetching admin jobs:", error); // Error handling
      }
    };

    allAdminJobs();
  }, [dispatch]); // Dependency array includes dispatch
};

export default useGetAllAdminJobs; 
