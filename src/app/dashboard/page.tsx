// pages/dashboard.js
import Header from '@/components/Header';
import React from 'react';

const Dashboard = () => {
  return (
    <div className="bg-lightGray min-h-screen">
      <Header />
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Welcome back, [User Name]!</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Quick Actions */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-2xl font-semibold mb-4">Quick Actions</h3>
              <ul>
                <li><a href="#explore" className="text-primary-blue">Explore Spaces</a></li>
                <li><a href="#list-space" className="text-primary-green">List a New Space</a></li>
                <li><a href="#profile" className="text-secondary-teal">Update Profile</a></li>
              </ul>
            </div>

            {/* Your Spaces */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-2xl font-semibold mb-4">Your Spaces</h3>
              {/* Example space summary */}
              <div className="mb-4">
                <h4 className="text-xl font-bold">Cozy Apartment in Downtown</h4>
                <p className="text-gray-600">Last updated: 3 days ago</p>
              </div>
              <a href="#manage-spaces" className="text-primary-blue">Manage Your Spaces</a>
            </div>

            {/* Recent Activity */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-2xl font-semibold mb-4">Recent Activity</h3>
              <p>No recent activity to show.</p>
            </div>

            {/* Notifications */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-2xl font-semibold mb-4">Notifications</h3>
              <p>You have no new notifications.</p>
            </div>

            {/* Discover Section */}
            <div className="bg-white shadow-lg rounded-lg p-6 col-span-1 md:col-span-2 lg:col-span-3">
              <h3 className="text-2xl font-semibold mb-4">Discover New Spaces</h3>
              {/* Example discover content */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
                  <h4 className="font-bold">Modern Office in Tech Park</h4>
                  <p className="text-gray-600">Explore this space</p>
                </div>
                <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
                  <h4 className="font-bold">Beachside Retreat</h4>
                  <p className="text-gray-600">Relax and unwind</p>
                </div>
              </div>
              <a href="#explore" className="text-primary-blue mt-4 block">See More</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
