import { MoreHorizontal } from "lucide-react";
import React from "react";
import {
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
  TableBody,
  TableCell,
} from "../ui/table";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

const ApplicantsTable = ({ applicants }) => {
  const shortListed = ["Accepted", "Rejected"];
  
  return (
    <table className="w-full"> {/* Ensure the table takes full width */}
      <TableCaption className="mb-4">
        A list of your recently applied users
      </TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Full Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Contact</TableHead>
          <TableHead>Resume</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {applicants && applicants.length > 0 ? (
          applicants.map((applicant, index) => (
            <TableRow key={index}> {/* Use a unique key if possible */}
              <TableCell>{applicant.fullName}</TableCell>
              <TableCell>{applicant.email}</TableCell>
              <TableCell>{applicant.contact}</TableCell>
              <TableCell>{applicant.resume}</TableCell>
              <TableCell>{applicant.date}</TableCell>
              <TableCell>
                <Popover>
                  <PopoverTrigger>
                    <MoreHorizontal />
                  </PopoverTrigger>
                  <PopoverContent className="w-32 cursor-pointer ml-20 ">
                    {shortListed.map((status, index) => (
                      <h2 className="hover:text-blue-600" key={index}>
                        {status}
                      </h2>
                    ))}
                  </PopoverContent>
                </Popover>
              </TableCell>
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell colSpan={6} className="text-center"> {/* Adjust colspan based on your structure */}
              No applicants found
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </table>
  );
};

export default ApplicantsTable;
