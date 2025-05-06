import { useState } from 'react';
import {
  ArrowUpRight,
  Bell,
  Calendar,
  Clock,
  DollarSign,
  FileText,
  HelpCircle,
  Mail,
  PieChart,
  Search,
  Settings,
  TrendingUp,
  Users
} from 'react-feather';

const Overview = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  // Sample data
  const metrics = [
    { title: 'Active Sponsorships', value: 5, icon: <DollarSign size={18} />, change: '+2' },
    { title: 'Pending Requests', value: 3, icon: <Mail size={18} />, change: '-1' },
    { title: 'Success Rate', value: '72%', icon: <TrendingUp size={18} />, change: '+5%' },
    { title: 'Total Funding', value: '$12,500', icon: <PieChart size={18} />, change: '+$2K' }
  ];

  const pipeline = [
    { stage: 'Draft', count: 2, color: 'bg-gray-200' },
    { stage: 'Submitted', count: 3, color: 'bg-blue-100' },
    { stage: 'Under Review', count: 1, color: 'bg-yellow-100' },
    { stage: 'Confirmed', count: 1, color: 'bg-green-100' }
  ];

  const recentActivity = [
    { 
      id: 1, 
      title: 'TechCorp accepted your proposal!', 
      time: '2 hours ago', 
      icon: <FileText size={16} className="text-green-500" /> 
    },
    { 
      id: 2, 
      title: 'Deadline: Submit materials for FoodFest', 
      time: '1 day ago', 
      icon: <Clock size={16} className="text-yellow-500" /> 
    },
    { 
      id: 3, 
      title: 'New sponsor (GreenEnergy) joined platform', 
      time: '2 days ago', 
      icon: <Users size={16} className="text-blue-500" /> 
    }
  ];

  const upcomingEvents = [
    { 
      id: 1, 
      title: 'Annual Hackathon', 
      deadline: 'Jun 30', 
      sponsorsNeeded: 3, 
      status: 'Draft',
      categories: ['Tech', 'Food']
    },
    { 
      id: 2, 
      title: 'Charity Gala', 
      deadline: 'Jul 15', 
      sponsorsNeeded: 2, 
      status: 'Pending',
      categories: ['Beverage']
    }
  ];

  const recommendedCompanies = [
    { name: 'TechCorp', match: '92%', previous: 'Sponsored 3 events' },
    { name: 'EduSolutions', match: '85%', previous: 'New to platform' },
    { name: 'GreenEnergy', match: '78%', previous: 'Prefers sustainability events' }
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md">
        <div className="p-4 border-b border-gray-200">
          <h1 className="text-xl font-bold text-indigo-600">SponsorConnect</h1>
          <p className="text-xs text-gray-500">University Club Platform</p>
        </div>
        <nav className="p-4 space-y-1">
          {[
            { id: 'dashboard', icon: <PieChart size={18} />, label: 'Dashboard' },
            { id: 'proposals', icon: <FileText size={18} />, label: 'Proposals' },
            { id: 'calendar', icon: <Calendar size={18} />, label: 'Calendar' },
            { id: 'companies', icon: <Users size={18} />, label: 'Companies' },
            { id: 'reports', icon: <TrendingUp size={18} />, label: 'Reports' },
            { id: 'settings', icon: <Settings size={18} />, label: 'Settings' }
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex items-center w-full p-3 rounded-lg text-sm ${activeTab === item.id ? 'bg-indigo-50 text-indigo-600' : 'text-gray-600 hover:bg-gray-100'}`}
            >
              <span className="mr-3">{item.icon}</span>
              {item.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        {/* Header */}
        
        {/* Key Metrics */}
        <div className="grid grid-cols-1 gap-6 mt-12 mb-8 md:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric, index) => (
            <div key={index} className="p-6 bg-white border border-gray-100 shadow-sm rounded-xl">
              <div className="flex justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">{metric.title}</p>
                  <h3 className="mt-1 text-2xl font-bold">{metric.value}</h3>
                  <p className="mt-2 text-xs text-green-500">{metric.change}</p>
                </div>
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-indigo-50">
                  {metric.icon}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pipeline and Activity */}
        <div className="grid grid-cols-1 gap-6 mb-8 lg:grid-cols-3">
          {/* Sponsorship Pipeline */}
          <div className="p-6 bg-white border border-gray-100 shadow-sm rounded-xl lg:col-span-1">
            <h2 className="mb-4 text-lg font-semibold text-gray-800">Sponsorship Pipeline</h2>
            <div className="space-y-4">
              {pipeline.map((stage, index) => (
                <div key={index} className="flex items-center">
                  <div className={`w-4 h-4 rounded-full ${stage.color} mr-3`}></div>
                  <span className="flex-1 text-sm font-medium text-gray-700">{stage.stage}</span>
                  <span className="text-sm text-gray-500">{stage.count}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Activity */}
          <div className="p-6 bg-white border border-gray-100 shadow-sm rounded-xl lg:col-span-2">
            <h2 className="mb-4 text-lg font-semibold text-gray-800">Recent Activity</h2>
            <div className="space-y-4">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="flex items-start p-3 transition-colors rounded-lg hover:bg-gray-50">
                  <div className="p-2 mr-4 rounded-lg">
                    {activity.icon}
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-800">{activity.title}</p>
                    <p className="mt-1 text-xs text-gray-500">{activity.time}</p>
                  </div>
                  <button className="text-gray-400 hover:text-gray-600">
                    <ArrowUpRight size={16} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Upcoming Events and Recommended Companies */}
        <div className="grid grid-cols-1 gap-6 mb-8 lg:grid-cols-2">
          {/* Upcoming Events */}
          <div className="p-6 bg-white border border-gray-100 shadow-sm rounded-xl">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-800">Upcoming Events</h2>
              <button className="text-sm font-medium text-indigo-600 hover:text-indigo-800">
                View All
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th className="px-4 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">Event</th>
                    <th className="px-4 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">Deadline</th>
                    <th className="px-4 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">Sponsors</th>
                    <th className="px-4 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">Status</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {upcomingEvents.map((event) => (
                    <tr key={event.id} className="hover:bg-gray-50">
                      <td className="px-4 py-3 whitespace-nowrap">
                        <div className="font-medium text-gray-800">{event.title}</div>
                        <div className="mt-1 text-xs text-gray-500">{event.categories.join(', ')}</div>
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-500 whitespace-nowrap">
                        {event.deadline}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-500 whitespace-nowrap">
                        {event.sponsorsNeeded}
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          event.status === 'Draft' ? 'bg-gray-100 text-gray-800' :
                          event.status === 'Pending' ? 'bg-blue-100 text-blue-800' :
                          'bg-green-100 text-green-800'
                        }`}>
                          {event.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Recommended Companies */}
          <div className="p-6 bg-white border border-gray-100 shadow-sm rounded-xl">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-800">Recommended Companies</h2>
              <button className="text-sm font-medium text-indigo-600 hover:text-indigo-800">
                View All
              </button>
            </div>
            <div className="space-y-4">
              {recommendedCompanies.map((company, index) => (
                <div key={index} className="flex items-center p-4 transition-shadow border border-gray-100 rounded-lg hover:shadow-sm">
                  <div className="flex items-center justify-center w-10 h-10 mr-4 font-medium text-indigo-600 rounded-full bg-indigo-50">
                    {company.name.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-800">{company.name}</h3>
                    <p className="mt-1 text-xs text-gray-500">{company.previous}</p>
                  </div>
                  <div className="text-right">
                    <span className="block font-medium text-indigo-600">{company.match}</span>
                    <span className="text-xs text-gray-500">Match</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Performance and Quick Actions */}
        
      </div>
    </div>
  );
};

export default Overview;