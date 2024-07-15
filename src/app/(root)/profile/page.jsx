import withAuth from "@/app/authProvider"
import OrderCardComponent from "@/components/Design/OrderCardComponent/OrderCardComponent";
import ProfileCard from "@/components/Design/ProfileComponent/ProfileCard";
import ProfileCollection from "@/components/Design/ProfileComponent/ProfileCollection";
import {  useAppSelector } from "@/lib/hooks";

const Profile = () => {
  const user = useAppSelector((state) => state.user);

  return (
    <>
      <h1 className='text-xl font-bold md:text-2xl'>My Profile</h1>
      <div className="w-full md:flex md:gap-2 mt-3">
        <ProfileCard user={user.data}/>
        <ProfileCollection user={user.data} />
      </div>
      <div className="w-full flex justify-between mt-5">
        <h1 className='text-xl font-bold '>My Orders</h1>
        <h1 className='text-gray-500 font-semibold '>See All</h1>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-3 my-5 md:px-0 ">
        <OrderCardComponent />
        <OrderCardComponent />
        <OrderCardComponent />
      </div>
    </>
  )
}

export default withAuth(Profile)