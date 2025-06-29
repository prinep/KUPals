import React from 'react';
import Link from 'next/link'

const KUPalsGroupsPage = () => {
  const publicGroups = [
    { id: 'p1', name: 'Hiking Enthusiasts of KU', members: 120, description: 'Explore trails around Kathmandu Valley!' },
    { id: 'p2', name: 'KU Music ', members: 85, description: 'Connect with fellow musicians and jam!' },
    { id: 'p3', name: 'Photography Club KU', members: 150, description: 'fadsfa ad fasdf afa fasfafa asf' },
    { id: 'p4', name: 'fdsafsdafds fads as', members: 210, description: 'fdasfasf asdf adsfadsfasfasfs' },
    { id: 'p5', name: ' fdafa fdas fdas', members: 75, description: 'fsadfa asdfafsafasdasfasfasfdsafa' },
  ];

  const privateGroups = [
    { id: 'v1', name: 'COMP 206 Study Group (Sec A)', members: 15, description: 'Dedicated to COMP 206 coursework.' },
    { id: 'v2', name: 'Project group Team', members: 5, description: 'Private space for our final year project.' },
  ];

  const userName = 'Praful';
  const userId = 'kupals-user-id-1234567890abcdef';

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans antialiased">
      <nav className="bg-white shadow-sm p-4 flex items-center justify-between sticky top-0 z-10">
        <div className="flex items-center space-x-2">
          <span className="text-xl font-bold text-[#158080]">KUPals</span>
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-gray-700">Welcome, {userName}!</span>
        </div>
      </nav>

      <div className="flex flex-1 overflow-hidden">
        <aside className="w-64 bg-white shadow-md p-4 flex flex-col space-y-4 border-r border-gray-200">
          <nav className="space-y-2">
            <Link href="dashboard" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition duration-150 ease-in-out">Dashboard</Link>
            <Link href="groups" className="block px-3 py-2 bg-gray-100 text-[#158080] font-semibold rounded-md transition duration-150 ease-in-out">Groups</Link>
            <Link href="chat" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition duration-150 ease-in-out">Chat</Link>
            <Link href="profile" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition duration-150 ease-in-out">Profile</Link>
            <Link href="settings" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition duration-150 ease-in-out">Settings</Link>
          </nav>
          {userId && (
            <div className="mt-auto p-3 bg-gray-100 rounded-lg text-sm text-gray-600 break-words">
              User ID: <br /> <span className="font-mono text-xs">{userId}</span>
            </div>
          )}
        </aside>

        <main className="flex-1 p-6 overflow-y-auto bg-gray-50">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Explore & Manage Groups</h1>

          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <input
              type="text"
              placeholder="Search groups..."
              className="flex-1 p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#158080] focus:border-transparent"
            />
            <button className="px-5 py-3 bg-[#158080] text-white font-semibold rounded-md shadow-md hover:bg-teal-700 transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#158080] focus:ring-opacity-50">
              + Create New Group
            </button>
          </div>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-800 mb-5 border-b-2 border-gray-200 pb-2">Public Interest Groups</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {publicGroups.map(group => (
                <div key={group.id} className="bg-white rounded-lg shadow-md p-5 border border-gray-200 hover:shadow-lg transition duration-200 ease-in-out">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2 truncate">{group.name}</h3>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">{group.description}</p>
                  <div className="flex items-center text-gray-500 text-xs mb-4">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h-5m-1.58-1.58C10.74 18.06 10 17.15 10 16a6 6 0 1112 0c0 1.15-.74 2.06-1.42 2.42M12 13a6 6 0 00-6-6v6a6 6 0 006 6z"></path></svg>
                    {group.members} Members
                  </div>
                  <button className="w-full px-4 py-2 bg-[#158080] text-white rounded-md hover:bg-teal-700 transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#158080] focus:ring-opacity-50">
                    Join Group
                  </button>
                </div>
              ))}
            </div>
            {publicGroups.length === 0 && (
              <p className="text-gray-500 text-center py-8">No public groups available at the moment.</p>
            )}
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-5 border-b-2 border-gray-200 pb-2">My Private Groups</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-600">
              {privateGroups.map(group => (
                <div key={group.id} className="bg-white rounded-lg shadow-md p-5 border border-gray-200 hover:shadow-lg transition duration-200 ease-in-out">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2 truncate">{group.name}</h3>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">{group.description}</p>
                  <div className="flex items-center text-gray-500 text-xs mb-4">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                    {group.members} Members
                  </div>
                  <button className="w-full px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-opacity-50">
                    View Group
                  </button>
                </div>
              ))}
            </div>
            {privateGroups.length === 0 && (
              <p className="text-gray-500 text-center py-8">You are not part of any private groups.</p>
            )}
            <div className="text-center mt-8">
                <button className="text-[#158080] hover:underline px-4 py-2">
                    Request to Join a Private Group
                </button>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default KUPalsGroupsPage;
