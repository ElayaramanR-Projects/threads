"use client";

import {Form} from '@/components/ui/form'
import { useForm } from 'react-hook-form';
import {zodResolver} from ''

interface Props{
    user:{
        id: string | undefined;
        objId: string;
        username: string;
        name: string;
        bio: string;
        imageUrl: string;
    }
    btnTitle: string;
}

const AccountProfile = ({user, btnTitle}:Props)=>{

    const form = useForm({
        resolver: 
    });
    return (
        <div>Profile</div>
    )
}

export default AccountProfile;