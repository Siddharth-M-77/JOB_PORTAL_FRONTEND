import React, { useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { Label } from "@radix-ui/react-label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import axios from "axios";
import { USER_API_END_POINT } from "@/utils/constant";
import { toast } from "sonner";
import { setUser } from "@/redux/userSlice";

const UpdateCompanyDailog = ({ open, setOpen }) => {
  const dispatch = useDispatch();
  const {singleCompany} = useSelector(store=>store.company)
  console.log(singleCompany)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
//   useEffect(() => {
//     if (open) {
//       reset({
//         fullName: user?.fullName || "",
//         email: user?.email || "",
//         phoneNumber: user?.phoneNumber || "",
//         bio: user?.profile?.bio || "",
//         profilePhoto: user?.profile?.profilePhoto || "",
//         skills: user?.profile?.skills?.join(", ") || "",
//       });
//     }
//   }, [open, user, reset]);

  const onSubmit = async (data) => {
    // console.log("Form Data:", data);

    const updatedData = {
      ...data,
      skills: data.skills.split(",").map((skill) => skill.trim()),
    };
    try {
      const res = await axios.post(
        `${USER_API_END_POINT}/profile/update`,
        updatedData,
        {
          withCredentials: true,
        }
      );
      console.log(res.data.user);
      if (res?.data?.message) {
        console.log(res.data.user);
        // dispatch(setUser(res.data.user));
        toast.success(res.data.message);
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
    console.log("Updated Data:", updatedData);
    setOpen(false); // Close the dialog after submission
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Update Profile</DialogTitle>
          <DialogDescription>
            Update your profile information below.
          </DialogDescription>
        </DialogHeader>

        <form
          className="flex flex-col items-start justify-center space-y-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col w-full items-center justify-center">
            {/* Name Field */}
            <div className="flex items-center gap-4 w-full mb-2 px-6">
              <Label htmlFor="fullName" className="text-right font-bold w-24">
                Name:
              </Label>
              <Input
                id="fullName"
                className="w-full"
                {...register("fullName", { required: "Name is required" })}
                placeholder="Enter your full name"
              />
              {errors.fullName && (
                <p className="text-red-500">{errors.fullName.message}</p>
              )}
            </div>

            {/* Email Field */}
            <div className="flex items-center gap-4 w-full mb-2 px-6">
              <Label htmlFor="email" className="text-right font-bold w-24">
                Email:
              </Label>
              <Input
                id="email"
                className="w-full"
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
                    message: "Invalid email format",
                  },
                })}
                placeholder="Enter your email"
              />
              {errors.email && (
                <p className="text-red-500">{errors.email.message}</p>
              )}
            </div>

            {/* Phone Field */}
            <div className="flex items-center gap-4 w-full mb-2 px-6">
              <Label
                htmlFor="phoneNumber"
                className="text-right font-bold w-24"
              >
                Phone:
              </Label>
              <Input
                id="phoneNumber"
                className="w-full"
                type="tel"
                {...register("phoneNumber", {
                  required: "Phone number is required",
                  pattern: {
                    value: /^\d{10}$/,
                    message: "Phone number must be 10 digits",
                  },
                })}
                placeholder="Enter your phone number"
              />
              {errors.phoneNumber && (
                <p className="text-red-500">{errors.phoneNumber.message}</p>
              )}
            </div>

            {/* bio */}
            <div className="flex items-center gap-4 w-full mb-2 px-6">
              <Label htmlFor="bio" className="text-right font-bold w-24">
                Bio:
              </Label>
              <Input
                id="bio"
                className="w-full"
                type="text"
                {...register("bio", {
                  required: "Enter your bio here..",
                })}
                placeholder="Enter your Bio here..."
              />
              {errors.phoneNumber && (
                <p className="text-red-500">{errors.bio.message}</p>
              )}
            </div>

            {/* Profile Photo Field */}
            <div className="flex items-center gap-4 w-full mb-2 px-6">
              <Label
                htmlFor="profilePhoto"
                className="text-right font-bold w-24"
              >
                Profile Photo:
              </Label>
              <Input
                type="file"
                id="profilePhoto"
                className="w-full"
                {...register("profilePhoto")}
                placeholder="Enter your profile photo URL"
              />
            </div>

            {/* Skills Field */}
            <div className="flex items-center gap-4 w-full mb-2 px-6">
              <Label htmlFor="skills" className="text-right font-bold w-24">
                Skills:
              </Label>
              <Input
                id="skills"
                className="w-full"
                {...register("skills")}
                placeholder="Enter your skills (comma separated)"
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-end w-full space-x-2 mt-4">
            <Button type="submit" className="bg-blue-500 text-white">
              Save
            </Button>
            <DialogClose asChild>
              <Button
                type="button"
                className="bg-gray-300 text-black"
                onClick={() => {
                  reset(); // Reset the form values to initial state
                  setOpen(false);
                }}
              >
                Cancel
              </Button>
            </DialogClose>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateCompanyDailog;
