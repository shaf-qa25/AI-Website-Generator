"use client"
import { UserDetailContext } from '@/context/UserContext';
import { useUser } from '@clerk/nextjs';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Provider({ children }: { children: React.ReactNode }) {

    const { user } = useUser();
    const [userDetail, setUserDetail] = useState<any>(null);

    useEffect(() => {
        user && CreateNewUser();
    }, [user]);

    const CreateNewUser = async () => {
        const result = await axios.post('/api/users', {
            user: user
        });
        setUserDetail(result.data);
        console.log(result.data);
    };

    return (
        <UserDetailContext.Provider value={{ userDetail, setUserDetail }}>
            <div>
                {children}
            </div>
        </UserDetailContext.Provider>
    );
}

export default Provider;