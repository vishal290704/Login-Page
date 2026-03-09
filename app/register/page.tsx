import React from "react";

const Register = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white px-4">
      <div className="w-full max-w-md border-2 border-white rounded-2xl p-8 shadow-lg bg-gray-900">
        <h1 className="text-2xl font-semibold text-center mb-6">Register</h1>
        <form className="space-y-6">
          <div>
            <label>Name</label>
            <input
              type="text"
              placeholder="Enter name"
              className="w-full border-b border-white py-2 px-1 bg-gray-900 text-white outline-none placeholder-gray-400"
            />
          </div>

          <div>
            <label>Email</label>
            <input
              type="text"
              placeholder="Enter email"
              className="w-full border-b border-white py-2 px-1 bg-gray-900 text-white outline-none placeholder-gray-400"
            />
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full border-b border-white py-2 px-1 bg-gray-900 text-white outline-none placeholder-gray-400"
            />
          </div>
          <p className="text-sm text-center mt-1">
            Already have an account ?{" "}
            <span className="text-blue-400 hover:underline">login</span>
          </p>
          <button className="w-full py-2 px-4 bg-gray-300 text-black font-semibold rounded-lg hover:bg-gray-400 transition-colors">
            Register
          </button>

          <div className="flex items-center gap-[6px] justify-center">
            <hr className="flex-grow border-gray-500"/>
            <span> OR </span>
            <hr className="flex-grow border-gray-500"/> 
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
