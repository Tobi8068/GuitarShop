const ProfileCard = ({user}) => {
  const imageUrl = user.image ? `http://localhost:3001/users/${user.image}` : 'guitar.jpg';
  return (
    <div className="w-full md:w-11/12 bg-inherit border  border-gray-200 rounded-lg shadow dark:border-gray-700">
    <div className="flex items-center gap-2 p-3 md:p-5 md:gap-5">
      <img className="w-28 h-28 md:w-40 md:h-40 mb-3 rounded-full shadow-lg" src={imageUrl} alt="profile image" />
      <div className="flex flex-col p-2">
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white lg:text-xl">{user.first_name} {user.last_name}</h5>
        <span className="text-sm text-gray-500 dark:text-gray-400 lg:text-lg">{user.address}</span>
        <span className="text-sm text-gray-500 dark:text-gray-400 lg:text-lg">{user.phone}</span>
        <span className="text-sm text-gray-500 dark:text-gray-400 lg:text-lg">{user.email}</span>
        {/* <span className="text-sm font-semibold mt-2 text-gray-500 dark:text-gray-400 lg:text-lg">Edit Profile</span> */}
      </div>
    </div>
  </div>
  )
}

export default ProfileCard