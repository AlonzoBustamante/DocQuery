export default function Form(){
    return(
        // min-h-screen - set min heoght of element to 100 vh ( the full height of the screen)
        //“Make this container at least as tall as the screen. Use flexbox to center its contents in both directions. Give the page a clean gray background.”
        <div className = "min-h-screen flex items-center justify-center bg-gray-100">
            <div className = "bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
                <h2 className = "text-2xl font-semibold text-center mb-6">
                    Register
                </h2>
                <form className = "space-y-4">
                    <div>
                        <label className = "block mb-2 text-sm font-medium text-gray-600">
                            FullName 
                        </label>
                        <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        placeholder="Enter your name"/>
                    </div>

                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-600">
                            Email Address
                        </label>
                        <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            placeholder="Enter your email" />
                    </div>

                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-600">
                            Password
                        </label>
                        <input type="password" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            placeholder="Enter your password" />
                    </div>

                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-600">
                            Confirm Password
                        </label>
                        <input type="password" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            placeholder="Confirm your password" />
                    </div>


                    <div className="flex items-center">
                        <input type="checkbox" className="h-4 w-4 text-indigo-600 border-gray-300 rounded"/>
                        <label className="ml-2 text-sm text-gray-600">I agree to the terms and conditions</label>
                    </div>
                    <div>
                        <button type="submit" className="w-full px-4 py-2 text-white bg-indigo-500 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-700">Register</button>
                    </div>

                </form>

            </div> 

        </div>




    )
}