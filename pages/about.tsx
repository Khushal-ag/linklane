import ProfileCard from '@/components/profile-card';

export default function About() {
    const image = '/image/prof.jpg'
  return (<>
    <div className='m-3 flex flex-wrap justify-evenly gap-x-24 gap-y-10'>
      <ProfileCard imgsrc={image} description='A web developer' name='Khushal' designation='Dev' about=''/>
      <ProfileCard imgsrc={image} description='A web developer' name='Khushal' designation='Dev' about='' />
      <ProfileCard imgsrc={image} description='A web developer' name='Khushal' designation='Dev' about='' />
      <ProfileCard imgsrc={image} description='A web developer' name='Khushal' designation='Dev' about='' />
      <ProfileCard imgsrc={image} description='A web developer' name='Khushal' designation='Dev' about='' />
      <ProfileCard imgsrc={image} description='A web developer' name='Khushal' designation='Dev' about='' />
    </div>
  </>
  )
}
