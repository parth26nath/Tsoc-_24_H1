import React, { useState } from 'react';

export default function Cmanage() {
  const [view, setView] = useState('list'); // 'list' for content selection, 'detail' for content details
  const [selectedContent, setSelectedContent] = useState(null);

  const contentList = [
    { id: 1, title: 'Content 1', description: 'Description for content 1' },
    { id: 2, title: 'Content 2', description: 'Description for content 2' },
    { id: 3, title: 'Content 3', description: 'Description for content 3' },
    { id: 4, title: 'Content 4', description: 'Description for content 4' },
  ];

  const handleSelectContent = (content) => {
    setSelectedContent(content);
    setView('detail'); // Switch to content detail view
  };

  const handleBackToList = () => {
    setView('list'); // Go back to the content list view
    setSelectedContent(null); // Clear selected content
  };

  const onConfirm = () => {
    alert('Content and Tokens created successfully!');
  };

  return (
    <section className="py-8 bg-gray-50 sm:py-12 lg:py-16">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-black sm:text-4xl lg:text-5xl">
            Content and Token Management
          </h2>
        </div>

        <nav className="mt-6 mb-4 text-center">
          <button className="mx-2 px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700" onClick={handleBackToList}>
            Content List
          </button>
          <button className="mx-2 px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700" disabled>
            Content Detail
          </button>
          <button className="mx-2 px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700">Management Options</button>
        </nav>

        <div className="max-w-md mx-auto mt-8 bg-white rounded-lg shadow-lg p-6">
          {view === 'list' && (
            <div>
              <h2 className="text-xl font-semibold">Select Content</h2>
              <ul className="space-y-2">
                {contentList.map((content) => (
                  <li key={content.id}>
                    <button
                      className="w-full text-left py-2 px-4 bg-gray-200 rounded-md hover:bg-gray-300"
                      onClick={() => handleSelectContent(content)}
                    >
                      {content.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {view === 'detail' && selectedContent && (
            <div>
              <h2 className="text-xl font-semibold">Content Details</h2>
              <p>Title: <span className="font-medium">{selectedContent.title}</span></p>
              <p>Description: <span className="font-medium">{selectedContent.description}</span></p>

              <div className="mt-6">
                <button className="w-full py-3 px-4 text-white bg-blue-600 rounded-md hover:bg-blue-700" onClick={onConfirm}>
                  Confirm
                </button>
              </div>

              <div className="mt-4">
                <button className="w-full py-3 px-4 text-white bg-blue-600 rounded-md hover:bg-blue-700" onClick={() => alert('Distributing DRM Tokens...')}>
                  Distribute DRM Tokens
                </button>
                <button className="w-full py-3 px-4 text-white bg-blue-600 rounded-md hover:bg-blue-700 mt-2" onClick={() => alert('Viewing Transactions...')}>
                  View Transactions
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
