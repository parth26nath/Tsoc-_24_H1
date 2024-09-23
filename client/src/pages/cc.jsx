import React from 'react'

export default function cc() {
  return (

        <section className="py-8 bg-gray-50 sm:py-12 lg:py-16">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-black sm:text-4xl lg:text-5xl">
                Upload Your Content
              </h2>
              <p className="max-w-xl mx-auto mt-4 text-base text-gray-600">
                Upload your content, add a title and description.
              </p>
            </div>
    
            <div className="max-w-md mx-auto mt-8 bg-white rounded-lg shadow-lg p-6">
              <form action="#" method="POST" className="space-y-4" encType="multipart/form-data">
                {/* Title Input */}
                <div>
                  <label htmlFor="title" className="text-base font-medium text-gray-900">
                    Title
                  </label>
                  <input
                    type="text"
                    id="title"
                    placeholder="Enter content title"
                    className="block w-full mt-1 py-3 px-4 border border-gray-200 rounded-md focus:outline-none focus:border-blue-600"
                  />
                </div>
    
                {/* Description Input */}
                <div>
                  <label htmlFor="description" className="text-base font-medium text-gray-900">
                    Description
                  </label>
                  <textarea
                    id="description"
                    placeholder="Enter a brief description"
                    className="block w-full mt-1 py-3 px-4 border border-gray-200 rounded-md focus:outline-none focus:border-blue-600"
                    rows="4"
                  ></textarea>
                </div>
    
                {/* File Upload */}
                <div>
                  <label htmlFor="file" className="text-base font-medium text-gray-900">
                    Upload Content
                  </label>
                  <input
                    type="file"
                    id="file"
                    className="block w-full mt-1 py-2 px-4 border border-gray-200 rounded-md focus:outline-none focus:border-blue-600"
                  />
                </div>
    
                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-3 px-4 text-white bg-blue-600 rounded-md hover:bg-blue-700"
                >
                  Upload Content
                </button>
    
                {/* Redirect Option */}
                <p className="text-center text-gray-600">
                  Want to view your uploads? <a href="/uploads" className="text-orange-500 hover:underline">View here</a>.
                </p>
              </form>
            </div>
          </div>
        </section>
      );
    }
    

