export default function Profile() {
    return (
        <>
            <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg">
                <h1 className="text-2xl font-semibold text-gray-800 mb-6">Profile Settings</h1>


                {/* profile picture */}
                <div className="flex items-center mb-6">
                    <div className="w-24 h-24 rounded-full bg-gray-200 overflow-hidden mr-4">
                        <img src="profile-pic-url.jpg" alt="Profile Picture" className="object-cover w-full h-full" />
                    </div>
                    <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none">Change Picture</button>
                </div>

                {/* username */}
                <div className="mb-4">
                    <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">Username</label>
                    <input type="text" id="username" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>

                {/* email */}
                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input disabled type="email" id="email" placeholder="example@email.com" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>

                {/* bio */}
                <div className="mb-4">
                    <label htmlFor="bio" className="block text-sm font-medium text-gray-700 mb-1">Bio</label>
                    <textarea id="bio" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Write something about yourself..."></textarea>
                </div>

                {/* buttons */}
                <div className="flex justify-between">
                    <button className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none">Save Changes</button>
                    <button className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 focus:outline-none">Delete Account</button>
                </div>
            </div>

        </>

    )

}