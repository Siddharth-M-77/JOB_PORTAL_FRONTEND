import React, { useEffect } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import axios from "axios";
import { APPLICATION_API_END_POINT } from "@/utils/constant";
import { toast } from "sonner";
import { useDispatch, useSelector } from "react-redux";
import { setAllAppliedJobs } from "@/redux/jobSlice";

const AppliesTable = () => {
  const dispatch = useDispatch();
  const { allAppliedJobs } = useSelector((store) => store.job);
  console.log(allAppliedJobs);
  useEffect(() => {
    const fetchAllApliedJobs = async () => {
      const res = await axios.get(`${APPLICATION_API_END_POINT}/get`, {
        withCredentials: true,
      });
      if (res.data.success) {
       dispatch(setAllAppliedJobs(res.data.applications)) 
       console.log(res.data)
      }
    };
    fetchAllApliedJobs();
  }, []);
  return (
    <div>
      <Table>
        <TableCaption className="font-bold text-sm">
          A list of your recent Applied Job.
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Date</TableHead>
            <TableHead>Job Role</TableHead>
            <TableHead>Company</TableHead>
            <TableHead className="text-right">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {allAppliedJobs.map((job, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{new Date(job.date).toLocaleDateString()}</TableCell>
              <TableCell>{job.job.position}</TableCell>
              <TableCell>{job.job.companyId.name}</TableCell>
              <TableCell className="text-end bg-black text-white rounded-full inline-block">{job.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default AppliesTable;
