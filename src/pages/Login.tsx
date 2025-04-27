
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-screen bg-cover bg-center flex justify-center items-center py-12 px-4 " style={{ backgroundColor: "gray" }}>
      <div className="w-full max-w-5xl bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* Left Column - Background */}
          <div className="w-full md:w-1/3 bg-gradient-to-br from-purple-900 to-indigo-500 p-12 flex flex-col justify-center items-center">
            <div className="text-white text-center">
              <div className="mb-6">
              <img src="./src/img/login.png" alt="Login" className="mb-6" />

              </div>
              {/* <img src="/lovable-uploads/a20d3323-d13a-446c-a89e-b2da51c15266.png" alt="Login" className="mb-6" /> */}
            </div>
          </div>
          
          {/* Right Column - Login Form */}
          <div className="w-full md:w-2/3 p-13 ">
            <div className="max-w-md mx-auto">
              <div className="flex justify-between items-center mt-6">
               
                <h1 className="text-3xl font-bold ">LOGIN</h1>
              </div>
              
              <form className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                  <input
                    type="password"
                    id="password"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your password"
                    required
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-purple-800 text-white py-3 px-4 rounded-md hover:bg-purple-700 transition-colors"
                >
                  Submit
                </button>
              </form>
              
              <div className="mt-8">
                <div className="flex justify-center space-x-6 mb-6">
                  <button className="p-2 border border-gray-300 rounded-md">
                    <img src="./src/img/1.svg" alt="Google" className="h-6 w-6" />
                  </button>
                  <button className="p-2 border border-gray-300 rounded-md">
                    <img src="./src/img/2.svg" alt="Facebook" className="h-6 w-6" />
                  </button>
                  <button className="p-2 border border-gray-300 rounded-md">
                    <img src="./src/img/3.svg" alt="LinkedIn" className="h-6 w-6" />
                  </button>
                </div>
                
                <p className="text-center">
                  Don't have an account? <Link to="/register" className="text-blue-600 font-medium">Register</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
