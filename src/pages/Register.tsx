
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="min-h-screen bg-cover bg-center flex justify-center items-center py-12 px-4" style={{ backgroundColor: "gray" }}>
      <div className="w-full max-w-5xl bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* Left Column - Background */}
          <div className="w-full md:w-1/3 bg-gradient-to-br from-purple-900 to-indigo-500 p-12 flex flex-col justify-center items-center">
            <div className="text-white text-center">
            <div className="mb-6">
              <img src="./src/img/register.png" alt="Login" className="mb-6" />

              </div>
              {/* <img src="/lovable-uploads/a20d3323-d13a-446c-a89e-b2da51c15266.png" alt="Register Now" className="mb-6" /> */}
            </div>
          </div>
          
          {/* Right Column - Register Form */}
          <div className="w-full md:w-2/3 p-12">
            <div className="max-w-md mx-auto">
              <div className="flex justify-between items-center mb-8">
              
                <h1 className="text-3xl font-bold">Create Account</h1>
              </div>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                  <input
                    type="password"
                    id="password"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-indigo-900 text-white py-3 px-4 rounded-md hover:bg-indigo-800 transition-colors"
                >
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
