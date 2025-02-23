import React, { useState } from 'react';
import { MdCameraAlt } from 'react-icons/md';

const Settings = () => {
 
  const [activeTab, setActiveTab] = useState('edit');
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);
  const [formData, setFormData] = useState({
    name: 'Charlene Reed',
    username: 'Charlene Reed',
    email: 'charlenereed@gmail.com',
    password: '********',
    currentPassword: '',
    newPassword: ''
  });

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 mt-10">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow">
        <div className="p-8">
          <div className="flex flex-col items-center mb-8">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&h=150"
                alt="Profile"
                className="w-32 h-32 rounded-full object-cover"
              />
              <button className="absolute bottom-0 right-0 bg-blue-800 p-2 rounded-full text-white">
                <MdCameraAlt size={20} />
              </button>
            </div>
            <h1 className="text-xl font-semibold mt-4">Danish Heilium</h1>
          </div>

          <div className="border-b mb-6">
            <div className="flex gap-8">
              <button
                className={`pb-4 ${
                  activeTab === 'edit'
                    ? 'border-b-2 border-blue-800 text-blue-800'
                    : 'text-gray-500'
                }`}
                onClick={() => setActiveTab('edit')}
              >
                Edit Profile
              </button>
              <button
                className={`pb-4 ${
                  activeTab === 'security'
                    ? 'border-b-2 border-blue-800 text-blue-800'
                    : 'text-gray-500'
                }`}
                onClick={() => setActiveTab('security')}
              >
                Security
              </button>
            </div>
          </div>

          {activeTab === 'edit' ? (
            <form className="space-y-6">
              <h2 className="text-lg font-semibold">Change Credentials</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    User Name
                  </label>
                  <input
                    type="text"
                    value={formData.username}
                    onChange={(e) =>
                      setFormData({ ...formData, username: e.target.value })
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    value={formData.password}
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="px-6 py-2 bg-blue-800 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Save
                </button>
              </div>
            </form>
          ) : (
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-lg font-semibold">Two-factor Authentication</h2>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Enable or disable two factor authentication</span>
                  <button
                    onClick={() => setTwoFactorEnabled(!twoFactorEnabled)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      twoFactorEnabled ? 'bg-teal-300' : 'bg-gray-200'
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        twoFactorEnabled ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-lg font-semibold">Change Password</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Current Password
                    </label>
                    <input
                      type="password"
                      value={formData.currentPassword}
                      onChange={(e) =>
                        setFormData({ ...formData, currentPassword: e.target.value })
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="********"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      New Password
                    </label>
                    <input
                      type="password"
                      value={formData.newPassword}
                      onChange={(e) =>
                        setFormData({ ...formData, newPassword: e.target.value })
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="********"
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  className="px-6 py-2 bg-blue-800 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Save
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
  
}

export default Settings
