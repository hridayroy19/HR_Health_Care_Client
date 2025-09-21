import Image from "next/image";

const userData = {
  profileImage:
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=320&auto=format&fit=crop",
  backgroundImage:
    "https://i.ibb.co.com/nsNkZkr6/depositphotos-564053724-stock-illustration-evening-horizontal-widescreen-illustration-mountains.webp",
  followers: "2,4K",
  following: "541",
  name: "Charlotte Sutton",
  isVerified: true,
  handle: "@designbycharlotte",
  bio: "Crafting intuitive digital experiences. Founder of Sutton Studio. UI/UX Designer. Advocate for user-centered design. ✨",
};

const AdminProfileCard = () => {
  return (
    <div className=" mt-10">
      <div className="w-full max-w-sm overflow-hidden rounded-xl  shadow-xl transition-all duration-300 hover:shadow-2xl">
        <div className="relative h-28 w-full">
          <Image
            height={100}
            width={100}
            src={userData.backgroundImage}
            alt="Profile background"
            className="absolute h-full w-full object-cover"
          />
        </div>

        <div className="relative p-6 -mt-10 sm:-mt-12">
          <div className="flex justify-start">
            <div className="relative h-20 w-20 sm:h-24 sm:w-24 overflow-hidden rounded-full border-4 border-white shadow-md">
              <Image
                height={100}
                width={100}
                src={userData.profileImage}
                alt="Profile"
                className="absolute h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="absolute top-4 right-4 flex items-center space-x-4 text-sm font-medium text-white drop-shadow-lg">
            <div>
              <span className="font-bold">{userData.followers}</span> Followers
            </div>
            <div>
              <span className="font-bold">{userData.following}</span> Following
            </div>
          </div>

          <div className="mt-4 flex flex-col items-start space-y-1">
            <div className="flex items-center space-x-2">
              <h1 className="text-xl font-bold text-gray-800">
                {userData.name}
              </h1>
              {userData.isVerified && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5 text-blue-500"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.416 0 2.748.604 3.603 1.549A4.49 4.49 0 0118 6.942V8.4c0 .327.16.63.424.814A3.998 3.998 0 0022.5 12c0 .82-.163 1.615-.467 2.348-.264.715-.81 1.405-1.574 1.954-.764.549-1.393 1.258-1.85 2.054-.457.796-.704 1.701-.704 2.656a1.5 1.5 0 01-1.5 1.5H7.5a1.5 1.5 0 01-1.5-1.5c0-1.229-.26-2.422-.767-3.535A8.966 8.966 0 013 12c0-2.31 1.055-4.47 2.898-5.836A4.49 4.49 0 018.603 3.799zM12.553 9.45a.75.75 0 00-1.106 0L8.603 12.399l-1.12-1.12a.75.75 0 00-1.06 1.06l1.652 1.652a.75.75 0 001.06 0l3.96-3.96a.75.75 0 000-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </div>
            <p className="text-sm text-gray-500">{userData.handle}</p>
          </div>

          <p className="mt-4 text-sm text-gray-700">{userData.bio}</p>

          <div className="mt-6 flex gap-4">
            <button className="flex-1 rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-800 shadow-sm transition-colors duration-200 hover:bg-gray-50">
              Message
            </button>
            <button className="flex-1 rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:scale-105 hover:shadow-lg">
              Follow
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProfileCard;
