import React, { useEffect, useState } from 'react';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { useSelector } from 'react-redux';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import axios from 'axios';
import { JOB_API_END_POINT } from '@/utils/constant';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';
import { Loader2 } from 'lucide-react';
import { useForm } from 'react-hook-form';

const PostJob = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { companies } = useSelector(store => store.company);
    console.log(companies)
    
    // Initialize the form with react-hook-form
    const { register, handleSubmit, setValue, formState: { errors } } = useForm();
    
    const selectChangeHandler = (value) => {
        const selectedCompany = companies.find(company => company.name.toLowerCase() === value);
        if (selectedCompany) {
            setValue('companyId', selectedCompany._id);
        }
    };

    const submitHandler = async (data) => {
        try {
            setLoading(true);
            const res = await axios.post(`${JOB_API_END_POINT}/post`, data, {
                headers: {
                    'Content-Type': 'application/json'
                },
                withCredentials: true
            });
            if (res.data.success) {
                toast.success(res.data.message);
                navigate("/admin/jobs");
            }
        } catch (error) {
            toast.error(error.response.data.message);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div>
            <div className='flex items-center justify-center w-screen my-5'>
                <form onSubmit={handleSubmit(submitHandler)} className='p-8 max-w-4xl border border-gray-200 shadow-lg rounded-md'>
                    <div className='grid grid-cols-2 gap-2'>
                        <div>
                            <Label>Title</Label>
                            <Input
                                type="text"
                                {...register('title', { required: 'Title is required' })}
                                className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
                            />
                            {errors.title && <p className='text-xs text-red-600'>{errors.title.message}</p>}
                        </div>
                        <div>
                            <Label>Description</Label>
                            <Input
                                type="text"
                                {...register('description', { required: 'Description is required' })}
                                className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
                            />
                            {errors.description && <p className='text-xs text-red-600'>{errors.description.message}</p>}
                        </div>
                        <div>
                            <Label>Requirements</Label>
                            <Input
                                type="text"
                                {...register('requirements', { required: 'Requirements are required' })}
                                className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
                            />
                            {errors.requirements && <p className='text-xs text-red-600'>{errors.requirements.message}</p>}
                        </div>
                        <div>
                            <Label>Salary</Label>
                            <Input
                                type="text"
                                {...register('salary', { required: 'Salary is required' })}
                                className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
                            />
                            {errors.salary && <p className='text-xs text-red-600'>{errors.salary.message}</p>}
                        </div>
                        <div>
                            <Label>Location</Label>
                            <Input
                                type="text"
                                {...register('location', { required: 'Location is required' })}
                                className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
                            />
                            {errors.location && <p className='text-xs text-red-600'>{errors.location.message}</p>}
                        </div>
                        <div>
                            <Label>Job Type</Label>
                            <Input
                                type="text"
                                {...register('jobType', { required: 'Job Type is required' })}
                                className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
                            />
                            {errors.jobType && <p className='text-xs text-red-600'>{errors.jobType.message}</p>}
                        </div>
                        <div>
                            <Label>Experience Level</Label>
                            <Input
                                type="text"
                                {...register('experience', { required: 'Experience Level is required' })}
                                className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
                            />
                            {errors.experience && <p className='text-xs text-red-600'>{errors.experience.message}</p>}
                        </div>
                        <div>
                            <Label>No of Positions</Label>
                            <Input
                                type="number"
                                {...register('position', { required: 'Number of Positions is required', min: { value: 1, message: "Must be at least 1" } })}
                                className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
                            />
                            {errors.position && <p className='text-xs text-red-600'>{errors.position.message}</p>}
                        </div>
                        {companies.length > 0 && (
                            <Select onValueChange={selectChangeHandler}>
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="Select a Company" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        {companies.map(company => (
                                            <SelectItem key={company._id} value={company.name.toLowerCase()}>
                                                {company.name}
                                            </SelectItem>
                                        ))}
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        )}
                    </div>
                    {loading ? (
                        <Button className="w-full my-4">
                            <Loader2 className='mr-2 h-4 w-4 animate-spin' /> Please wait
                        </Button>
                    ) : (
                        <Button type="submit" className="w-full my-4">Post New Job</Button>
                    )}
                    {companies.length === 0 && (
                        <p className='text-xs text-red-600 font-bold text-center my-3'>*Please register a company first before posting jobs</p>
                    )}
                </form>
            </div>
        </div>
    );
}

export default PostJob;
