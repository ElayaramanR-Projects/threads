"use client";

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
    return (
        <div>Profile</div>
    )
}

export default AccountProfile;