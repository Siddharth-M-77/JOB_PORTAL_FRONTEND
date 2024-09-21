import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "sonner";
import { Link, Navigate, useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const submitHandler = async (data) => {
    if (!data.profilePhoto || data.profilePhoto.length === 0) {
      console.error("No image selected");
      return; // Exit early if no file is uploaded
    }

    const formData = new FormData();
    formData.append("fullName", data.fullName);
    formData.append("email", data.email);
    formData.append("password", data.password);
    formData.append("phoneNumber", data.phoneNumber);
    formData.append("role", data.role);
    formData.append("profilePhoto", data.profilePhoto[0]); // Correct file reference

    try {
      const response = await axios.post(
        "https://job-portal-backend-af56.onrender.com/api/v1/user/register",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            withCredentials: true, // Include credentials (like cookies)
          },
        }
      );
      if (response.data.success) {
        toast.success(response?.data?.message);
        navigate("/login");
      }

      reset(); // Reset the form after submission
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <div className="min-h-screen  flex items-center justify-center bg-white shadow-lg p-6">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl w-full">
        <h1 className="text-3xl flex items-center justify-center font-bold text-center text-gray-800 mb-6">
          Sign <span className="text-orange-600 ">Up</span>
        </h1>
        <form onSubmit={handleSubmit(submitHandler)} className="space-y-4">
          {/* Full Name */}
          <div>
            <label className="block text-gray-700">Full Name</label>
            <input
              type="text"
              {...register("fullName", { required: true })}
              className="mt-1 block w-full px-4 py-2 border rounded-md focus:ring focus:ring-opacity-50 focus:ring-purple-500"
            />
            {errors.fullName && (
              <p className="text-red-500 text-sm">Full name is required</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              {...register("email", { required: true })}
              className="mt-1 block w-full px-4 py-2 border rounded-md focus:ring focus:ring-opacity-50 focus:ring-purple-500"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">Email is required</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              {...register("password", { required: true })}
              className="mt-1 block w-full px-4 py-2 border rounded-md focus:ring focus:ring-opacity-50 focus:ring-purple-500"
            />
            {errors.password && (
              <p className="text-red-500 text-sm">Password is required</p>
            )}
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-gray-700">Phone Number</label>
            <input
              type="text"
              {...register("phoneNumber", { required: true })}
              className="mt-1 block w-full px-4 py-2 border rounded-md focus:ring focus:ring-opacity-50 focus:ring-purple-500"
            />
            {errors.phoneNumber && (
              <p className="text-red-500 text-sm">Phone number is required</p>
            )}
          </div>

          {/* Role */}
          <div>
            <label className="block text-gray-700">Role</label>
            <select
              {...register("role", { required: true })}
              className="mt-1 block w-full px-4 py-2 border rounded-md focus:ring focus:ring-opacity-50 focus:ring-purple-500"
            >
              <option value="">Select Role</option>
              <option value="student">Student</option>
              <option value="recruiter">Recruiter</option>
            </select>
            {errors.role && (
              <p className="text-red-500 text-sm">Role is required</p>
            )}
          </div>

          {/* Image Upload */}
          <div>
            <label className="block text-gray-700">Upload Image</label>
            <input
              type="file"
              {...register("profilePhoto", { required: true })}
              className="mt-1 block w-full px-4 py-2 border rounded-md focus:ring focus:ring-opacity-50 focus:ring-purple-500"
            />
            {errors.image && (
              <p className="text-red-500 text-sm">Image upload is required</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 px-4 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
          >
            Sign Up
          </button>
          <p className="text-sm">
            Already have an account?
            <span className="text-blue-600 hover:cursor-pointer">
              <Link to="/login">Login</Link>
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
