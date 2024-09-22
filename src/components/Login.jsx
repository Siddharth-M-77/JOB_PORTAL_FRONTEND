import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "sonner";
import { Link, useNavigate } from "react-router-dom";
import { USER_API_END_POINT } from "@/utils/constant.js";
import { setLoading, setUser } from '@/redux/userSlice'
import { useDispatch, useSelector } from "react-redux";


const LoginPage = () => {
  const dispatch = useDispatch();
  const { loading,user } = useSelector(store => store.user);

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const submitHandler = async (data) => {
    const formData = new FormData();

    formData.append("email", data.email);
    formData.append("password", data.password);

    try {
      const response = await axios.post(
        `${USER_API_END_POINT}/login`,
        formData,
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true, // Include credentials (like cookies)
        }
      );
      
      if (response.data.success) {
        console.log(response.data)
        toast.success(response.data.message);
        dispatch(setUser(response.data.existingUser))
        navigate("/");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "An error occurred");
    }
  }

  return (
    <div className="min-h-screen  flex items-center justify-center bg-white shadow-lg p-6">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl w-full">
        <h1 className="text-3xl flex items-center justify-center font-bold text-center text-gray-800 mb-6">
          Log <span className="text-orange-600 ">In</span>
        </h1>
        <form onSubmit={handleSubmit(submitHandler)} className="space-y-4">
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

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 px-4 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
          >
            Sign Up
          </button>
          <div className="flex items-center justify-between">
          <p className="text-sm">
            Dont't have an account?
            <span className="text-blue-600 hover:cursor-pointer">
              <Link to="/signup">Signup</Link>
            </span>
          </p>
          <Link to="/forget-password" className="text-sm font-bold text-red-600 capitalize font-serif">Forgot your Password</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
