import Image from 'next/image'
import ProfileHoverCard from '@/components/hover-profile-card'
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { Description } from '@radix-ui/react-toast';

export default function ProfileCard({ imgsrc, name, designation, about, description }) {
    return (
        <>
            <div className='m-1 flex h-2/5 w-96 cursor-pointer flex-col items-center justify-start rounded-2xl bg-gray-100 shadow-sm shadow-slate-700 dark:bg-neutral-800 dark:shadow-neutral-300'>
                <div>
                    <div className='flex flex-col items-center justify-center'>
                        <Image src={imgsrc} width='150' height="400" className='mb-2 rounded' alt='' />
                        <ProfileHoverCard title={name}/>
                    </div>
                    <p className='pb-4 text-center text-base font-normal uppercase text-slate-700 dark:text-slate-400'>{designation}</p>
                    <h3 className='text-md py-1 text-center font-semibold uppercase'>{about}</h3>
                    <p className='text-md mx-10 text-center text-sm'>{description}</p>
                    <div className='flex items-center justify-center gap-6 py-3'>
                        <BsTwitter className='h-6 w-6 cursor-pointer text-blue-500' />
                        <FaInstagram className='h-6 w-6 cursor-pointer text-pink-400' />
                        <FaLinkedin className='h-6 w-6 cursor-pointer text-blue-700' />
                    </div>
                    <div className='flex items-center justify-center gap-6 py-3'>
                        <button className='w-11/12 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 p-3 font-semibold uppercase text-white hover:bg-gradient-to-l '>Work Together</button>
                    </div>
                </div>
            </div>
        </>
    )
}
