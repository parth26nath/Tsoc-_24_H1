import React from 'react';
import { register } from '../api'; // Adjust the path based on your project structure
import { useNavigate } from 'react-router-dom';


export default function Register() {
    const navigate = useNavigate(); // Hook to access the navigation

    const handleSubmit = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        const response = await fetch('http://localhost:3000/api/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
        });

        const data = await response.json();
        alert(data.message || data.error);
        if (response.ok) {
            // Navigate to the Dashboard on successful registration
            navigate('/dashboard');
        }
    };


  return (
    <section className="py-8 bg-gray-50 sm:py-12 lg:py-16">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-black sm:text-4xl lg:text-5xl">
            Create your free account
          </h2>
          <p className="max-w-xl mx-auto mt-4 text-base text-gray-600">
            You can create a free account in just 2 minutes.
          </p>
        </div>

        <div className="max-w-md mx-auto mt-8 bg-white rounded-lg shadow-lg p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="fullName" className="text-base font-medium text-gray-900">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Enter your full name"
                className="block w-full mt-1 py-3 px-4 border border-gray-200 rounded-md focus:outline-none focus:border-blue-600"
              />
            </div>

            <div>
              <label htmlFor="email" className="text-base font-medium text-gray-900">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="block w-full mt-1 py-3 px-4 border border-gray-200 rounded-md focus:outline-none focus:border-blue-600"
              />
            </div>

            <div>
              <label htmlFor="password" className="text-base font-medium text-gray-900">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                className="block w-full mt-1 py-3 px-4 border border-gray-200 rounded-md focus:outline-none focus:border-blue-600"
              />
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="agree"
                className="w-5 h-5 text-blue-600 border-gray-300 rounded"
              />
              <label htmlFor="agree" className="ml-2 text-sm text-gray-600">
                I agree to the <a href="#" className="text-blue-600 hover:underline">Terms</a> and <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>.
              </label>
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 text-white bg-NEON rounded-md hover:bg-blue-700"
            >
              Create account
            </button>

            <p className="text-center text-gray-600">
              Already have an account? <a href="/signin" className="text-orange-500 hover:underline">Login here</a>.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
