import React from 'react';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiouSeoure';
import { useQuery } from '@tanstack/react-query';

const useInstructors = () => {
    const {user, loading} = useAuth()
    const [axiosSecure]= useAxiosSecure();
    const {data: isInstructors, isLoading: isInstructorsLoading} = useQuery({
     queryKey:['isInstructors', user?.email],
     enabled: !loading && !!user?.email,
     queryFn: async () => {
          const res = await axiosSecure.get(`/users/Instructors/${user?.email}`);
          return res.data.Instructors;
     }
    })
    return [isInstructors, isInstructorsLoading]
};

export default useInstructors;