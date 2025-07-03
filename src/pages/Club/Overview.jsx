import React from 'react';
import {
  ArrowUpRight,
  Clock,
  DollarSign,
  FileText,
  PieChart,
  TrendingUp,
  Users,
  Mail,
  Calendar,
  Target,
  Award,
  Activity,
  ChevronRight,
  Plus
} from 'react-feather';

const OrganizationDashboard = () => {
  // Dummy data matching your Prisma schema
  const metrics = [
    { 
      title: 'Active Sponsorships', 
      value: 5, 
      icon: <DollarSign size={20} />, 
      change: '+2', 
      trend: 'up', 
      bgColor: 'bg-indigo-50', 
      iconColor: 'text-indigo-600' 
    },
    { 
      title: 'Pending Requests', 
      value: 3, 
      icon: <Mail size={20} />, 
      change: '-1', 
      trend: 'down', 
      bgColor: 'bg-amber-50', 
      iconColor: 'text-amber-600' 
    },
    { 
      title: 'Success Rate', 
      value: '72%', 
      icon: <TrendingUp size={20} />, 
      change: '+5%', 
      trend: 'up', 
      bgColor: 'bg-green-50', 
      iconColor: 'text-green-600' 
    },
    { 
      title: 'Total Funding', 
      value: '$12,500', 
      icon: <PieChart size={20} />, 
      change: '+$2K', 
      trend: 'up', 
      bgColor: 'bg-blue-50', 
      iconColor: 'text-blue-600' 
    }
  ];

  const sponsorshipPipeline = [
    { 
      stage: 'DRAFT', 
      count: 2, 
      color: 'bg-gray-300', 
      textColor: 'text-gray-700', 
      progressWidth: 'w-1/6' 
    },
    { 
      stage: 'SUBMITTED', 
      count: 3, 
      color: 'bg-blue-200', 
      textColor: 'text-blue-700', 
      progressWidth: 'w-1/3' 
    },
    { 
      stage: 'UNDER_REVIEW', 
      count: 1, 
      color: 'bg-amber-200', 
      textColor: 'text-amber-700', 
      progressWidth: 'w-1/4' 
    },
    { 
      stage: 'CONFIRMED', 
      count: 1, 
      color: 'bg-green-200', 
      textColor: 'text-green-700', 
      progressWidth: 'w-1/4' 
    }
  ];

  const recentActivity = [
    { 
      id: 1, 
      title: 'TechCorp accepted your proposal for Hackathon 2023!', 
      time: '2 hours ago', 
      icon: <Award size={18} className="text-green-500" />,
      type: 'SPONSORSHIP_APPROVED'
    },
    { 
      id: 2, 
      title: 'Deadline approaching: Submit materials for FoodFest', 
      time: '1 day ago', 
      icon: <Clock size={18} className="text-amber-500" />,
      type: 'EVENT_REMINDER'
    },
    { 
      id: 3, 
      title: 'New sponsor (GreenEnergy) joined the platform', 
      time: '2 days ago', 
      icon: <Users size={18} className="text-blue-500" />,
      type: 'NEW_SPONSOR'
    },
    { 
      id: 4, 
      title: 'Your event "Startup Competition" was approved', 
      time: '3 days ago', 
      icon: <FileText size={18} className="text-indigo-500" />,
      type: 'EVENT_APPROVED'
    }
  ];

  const upcomingEvents = [
    { 
      id: 1, 
      name: 'Annual Hackathon', 
      date: '2023-06-30T09:00:00Z', 
      sponsorsNeeded: 3, 
      status: 'DRAFT',
      categories: ['TECH', 'FOOD'],
      icon: <Activity size={16} className="text-indigo-500" />
    },
    { 
      id: 2, 
      name: 'Charity Gala', 
      date: '2023-07-15T18:00:00Z', 
      sponsorsNeeded: 2, 
      status: 'PENDING',
      categories: ['SOCIAL'],
      icon: <Calendar size={16} className="text-amber-500" />
    },
    { 
      id: 3, 
      name: 'Startup Pitch Competition', 
      date: '2023-08-05T10:00:00Z', 
      sponsorsNeeded: 4, 
      status: 'APPROVED',
      categories: ['TECH', 'FINANCE'],
      icon: <TrendingUp size={16} className="text-green-500" />
    }
  ];

  const recommendedCompanies = [
    { 
      id: 1,
      name: 'TechCorp', 
      matchScore: '92%', 
      industry: 'TECH', 
      previousEngagement: 'Sponsored 3 events',
      color: 'bg-gradient-to-br from-blue-500 to-blue-600'
    },
    { 
      id: 2,
      name: 'EduSolutions', 
      matchScore: '85%', 
      industry: 'EDUCATION', 
      previousEngagement: 'New to platform',
      color: 'bg-gradient-to-br from-purple-500 to-purple-600'
    },
    { 
      id: 3,
      name: 'GreenEnergy', 
      matchScore: '78%', 
      industry: 'ENERGY', 
      previousEngagement: 'Prefers sustainability events',
      color: 'bg-gradient-to-br from-green-500 to-green-600'
    },
    { 
      id: 4,
      name: 'FoodPlus', 
      matchScore: '75%', 
      industry: 'FOOD', 
      previousEngagement: 'Looking for food sponsorships',
      color: 'bg-gradient-to-br from-amber-500 to-amber-600'
    }
  ];

  return (
    <div className="bg-gray-50 w-[83%] ml-[17%] mt-[5%] min-h-screen p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold text-gray-800">Organization Dashboard</h1>
        <div className="flex items-center space-x-4">
          <button className="flex items-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700">
            <Plus size={16} className="mr-2" />
            New Event
          </button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 gap-6 mb-8 md:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric, index) => (
          <div key={index} className={`p-6 transition-all duration-200 border rounded-xl hover:shadow-md ${metric.bgColor} border-gray-200 hover:border-gray-300`}>
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <p className="mb-1 text-sm font-medium text-gray-600">{metric.title}</p>
                <h3 className="mb-2 text-2xl font-bold text-gray-800">{metric.value}</h3>
                <div className="flex items-center">
                  <span className={`text-sm font-medium ${
                    metric.trend === 'up' ? 'text-green-600' : 'text-red-500'
                  }`}>
                    {metric.change}
                  </span>
                  <span className="ml-1 text-xs text-gray-500">vs last month</span>
                </div>
              </div>
              <div className={`flex items-center justify-center w-12 h-12 rounded-lg ${metric.iconColor} ${metric.bgColor.replace('bg-', 'bg-opacity-20')}`}>
                {metric.icon}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Main Content Area */}
      <div className="grid grid-cols-1 gap-6 mb-8 lg:grid-cols-3">
        {/* Sponsorship Pipeline */}
        <div className="p-6 bg-white border rounded-xl shadow-xs border-gray-200 lg:col-span-1">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-800">Sponsorship Pipeline</h2>
            <button className="flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-700">
              View all <ChevronRight size={16} className="ml-1" />
            </button>
          </div>
          
          <div className="w-full h-2 mb-6 overflow-hidden rounded-full bg-gray-100">
            {sponsorshipPipeline.map((stage, i) => (
              <div 
                key={i} 
                className={`h-full float-left ${stage.color} ${stage.progressWidth}`}
                title={`${stage.stage}: ${stage.count}`}
              ></div>
            ))}
          </div>
          
          <div className="space-y-3">
            {sponsorshipPipeline.map((stage, index) => (
              <div key={index} className="flex items-center justify-between p-3 transition-colors duration-150 rounded-lg hover:bg-gray-50">
                <div className="flex items-center">
                  <div className={`w-3 h-3 rounded-full ${stage.color} mr-3`}></div>
                  <span className="font-medium text-gray-700">
                    {stage.stage.split('_').map(word => 
                      word.charAt(0) + word.slice(1).toLowerCase()
                    ).join(' ')}
                  </span>
                </div>
                <div className="flex items-center">
                  <span className={`px-2.5 py-0.5 text-xs font-semibold rounded-full ${stage.color} ${stage.textColor}`}>
                    {stage.count}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="p-6 bg-white border rounded-xl shadow-xs border-gray-200 lg:col-span-2">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-800">Recent Activity</h2>
            <button className="flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-700">
              View all <ChevronRight size={16} className="ml-1" />
            </button>
          </div>
          <div className="space-y-3">
            {recentActivity.map((activity) => (
              <div key={activity.id} className={`flex items-start p-4 transition-all duration-200 rounded-lg border group border-gray-200 hover:shadow-xs hover:border-gray-300`}>
                <div className={`flex items-center justify-center w-10 h-10 mr-4 rounded-lg bg-white border border-gray-100`}>
                  {activity.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="mb-1 font-medium text-gray-800">{activity.title}</p>
                  <p className="text-sm text-gray-500">{activity.time}</p>
                </div>
                <button className="p-1.5 transition-all duration-200 rounded-lg opacity-0 group-hover:opacity-100 text-gray-400 hover:text-gray-600 hover:bg-gray-50">
                  <ArrowUpRight size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Upcoming Events */}
        <div className="p-6 bg-white border rounded-xl shadow-xs border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-800">Upcoming Events</h2>
            <button className="flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-700">
              View all <ChevronRight size={16} className="ml-1" />
            </button>
          </div>
          <div className="space-y-4">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="p-4 transition-all duration-200 border rounded-lg border-gray-200 hover:shadow-xs hover:border-gray-300">
                <div className="flex items-start">
                  <div className="flex items-center justify-center w-10 h-10 mr-4 mt-0.5 rounded-lg bg-gray-50">
                    {event.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-gray-800">{event.name}</h3>
                      <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                        event.status === 'DRAFT' ? 'bg-yellow-100 text-yellow-700' :
                        event.status === 'PENDING' ? 'bg-blue-100 text-blue-700' :
                        event.status === 'APPROVED' ? 'bg-green-100 text-green-700' :
                        'bg-gray-100 text-gray-700'
                      }`}>
                        {event.status.charAt(0) + event.status.slice(1).toLowerCase()}
                      </span>
                    </div>
                    <div className="flex flex-wrap items-center mt-2 space-x-2">
                      <span className="flex items-center text-sm text-gray-500">
                        <Calendar size={14} className="mr-1" /> 
                        {new Date(event.date).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </span>
                      <span className="text-sm text-gray-500">•</span>
                      <span className="text-sm text-gray-500">
                        <span className="font-medium">{event.sponsorsNeeded}</span> sponsors needed
                      </span>
                    </div>
                    <div className="flex flex-wrap items-center mt-2 space-x-2">
                      {event.categories.map((cat, idx) => (
                        <span key={idx} className="px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-600">
                          {cat}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recommended Partners */}
        <div className="p-6 bg-white border rounded-xl shadow-xs border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-800">Recommended Partners</h2>
            <button className="flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-700">
              View all <ChevronRight size={16} className="ml-1" />
            </button>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {recommendedCompanies.map((company) => (
              <div key={company.id} className="p-4 transition-all duration-200 border rounded-lg group border-gray-200 hover:shadow-xs hover:border-gray-300">
                <div className="flex items-start">
                  <div className={`flex items-center justify-center w-12 h-12 mr-4 font-bold text-white rounded-lg ${company.color} shadow-md`}>
                    {company.name.split(' ').map(w => w[0]).join('')}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800">{company.name}</h3>
                    <p className="text-xs text-gray-500">{company.industry}</p>
                    <p className="mt-1 text-sm text-gray-600">{company.previousEngagement}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-3">
                  <div className="w-full bg-gray-100 rounded-full h-1.5">
                    <div 
                      className="h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600" 
                      style={{ width: company.matchScore }}
                    ></div>
                  </div>
                  <span className="ml-3 text-sm font-semibold text-indigo-600">{company.matchScore}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrganizationDashboard;