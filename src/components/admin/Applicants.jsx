import React, { useEffect } from "react";
import ApplicantsTable from "./ApplicatsTable";
import axios from "axios";
import { useParams } from "react-router-dom";
import { APPLICATION_API_END_POINT } from "@/utils/constant";
import { setAllApplicants } from "@/redux/applicationSlice";
import { useDispatch, useSelector } from "react-redux";

const Applicants = () => {
  const { applicants } = useSelector((store) => store.application); // Select applicants
  console.log("Applicants from Redux:", applicants); // Log the applicants state
  const params = useParams();
  const { id } = params;

  const dispatch = useDispatch();
  useEffect(() => {
    const fetchAllApplicants = async () => {
      try {
        const response = await axios.get(
          `${APPLICATION_API_END_POINT}/${id}/applicants`,
          { withCredentials: true }
        );

        console.log("API Response:", response.data.job); 

        if (response.data.success) {
          console.log(response.data.job.job);
          dispatch(setAllApplicants(response.data.job));
        } else {
          console.log("Fetch was not successful:", response.data);
        }
      } catch (error) {
        console.error("Error fetching applicants:", error.message);
      }
    };

    fetchAllApplicants();
  }, [id, dispatch]);

  return (
    <div className="h-screen max-w-9xl mx-auto gap-5 flex justify-start flex-col p-10">
      <h1 className='text-2xl text-center font-extrabold capitalize font-["Roboto"]'>
        All Applicants ()
      </h1>
      <ApplicantsTable applicants={applicants} />

    </div>
  );
};

export default Applicants;
