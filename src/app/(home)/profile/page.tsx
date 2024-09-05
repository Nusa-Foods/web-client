export default function Profile() {
    return (
        <>
            <div className="min-h-screen flex items-center justify-center">
                <div className="w-full max-w-3xl p-6 bg-white shadow-md rounded-lg">
                    <h1 className="text-2xl font-semibold text-gray-800 mb-6">Profile Settings</h1>


                    {/* profile picture */}
                    <div className="flex items-center mb-6">
                        <div className="w-24 h-24 rounded-full bg-gray-200 overflow-hidden mr-4">
                            <img src="/mainLogo.png" alt="Profile Picture" className="object-cover w-full h-full" />
                        </div>
                        <button className="px-4 py-2 bg-custom-brown-3 text-custom-brown-1 font-bold rounded-lg hover:bg-blue-600 focus:outline-none">Change Picture</button>
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
                        <button className="px-6 py-2 font-bold  bg-custom-brown-1 text-white rounded-lg hover:bg-green-600 focus:outline-none">Save Changes</button>
                        <button className="px-6 py-2 font-bold bg-red-500 text-white rounded-lg hover:bg-red-600 focus:outline-none">Delete Account</button>
                    </div>
                </div>
            </div>

        </>

    )

}