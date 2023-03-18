import Image from 'next/image'
import ProfileHoverCard from '@/components/hover-profile-card'
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { Description } from '@radix-ui/react-toast';

export default function ProfileCard({ imgsrc, name, designation, about, description }) {
    return (
        <>
            <div className=' my-5 flex h-2/5 w-80 shadow-md shadow-gray-900 cursor-pointer flex-col items-center justify-start rounded-2xl bg-gray-100 shadow-slate-700 dark:bg-neutral-800 dark:shadow-none'>
                <div>
                    <div className='flex flex-col items-center justify-center'>
                        <Image src={imgsrc} width='120' height="400" className='mb-2 rounded m-3 rounded-full' alt='' />
                        <ProfileHoverCard title={name}/>
                    </div>
                    <p className='pb-1 text-center text-base font-normal uppercase text-slate-700 dark:text-slate-400'>{designation}</p>
                    <h3 className='text-md py-1 text-center font-semibold uppercase'>{about}</h3>
                    <p className='text-md mx-10 text-center text-sm'>{description}</p>
                    <div className='flex items-center justify-center gap-6 py-2'>
                        <BsTwitter className='h-6 w-6 cursor-pointer text-blue-500' />
                        <FaInstagram className='h-6 w-6 cursor-pointer text-pink-400' />
                        <FaLinkedin className='h-6 w-6 cursor-pointer text-blue-700' />
                    </div>
                    <div className='flex items-center justify-center gap-6 pu-2 pb-3'>
                        <button className='w-11/12 rounded-lg bg-gray-800 dark:bg-neutral-700 p-3 font-semibold uppercase text-white hover:bg-gray-900 dark:hover:bg-neutral-900'>Work Together</button>
                    </div>
                </div>
            </div>
        </>
    )
}
