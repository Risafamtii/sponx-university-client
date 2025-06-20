import React, { useEffect, useState } from 'react';
import { eventService } from '../../utils/api/company';
import { toast } from 'react-toastify';
import { useParams, useNavigate } from 'react-router-dom';

const EventView = () => {
  const [event, setEvent] = useState(null);
  const [isPlacingBid, setIsPlacingBid] = useState(false);
  const [bidAmount, setBidAmount] = useState(0);
  const [bidMessage, setBidMessage] = useState('');
  const [activeTab, setActiveTab] = useState('details');
  const [loading, setLoading] = useState(true);
  
  const navigate = useNavigate();
  const { id } = useParams();
  const loggedUser = JSON.parse(localStorage.getItem("user"));
  const company = loggedUser?.company; // Assuming user has company data

  useEffect(() => {
    const fetchEventData = async () => {
      try {
        setLoading(true);
        const response = await eventService.getById(id);
        setEvent(response.data.event);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch event:", error);
        toast.error("Failed to load event data");
        navigate('/company/events');
      }
    };

    fetchEventData();
  }, [id, navigate]);

  const handleBack = () => navigate(-1);

  const handleBidSubmit = async (e) => {
    e.preventDefault();
    if (bidAmount <= 0) {
      toast.error("Bid amount must be greater than 0");
      return;
    }
    
    if (bidAmount > event.budget) {
      toast.warning("Your bid exceeds the event budget");
      return;
    }

    setIsPlacingBid(true);
    
    try {
      // Replace this with actual API call
      // const response = await eventService.placeBid(id, { amount: bidAmount, message: bidMessage });
      
      // Simulate API response
      const newBid = {
        id: Math.max(...event.bids.map(b => b.id)) + 1,
        companyId: company.id,
        eventId: event.id,
        amount: bidAmount,
        message: bidMessage,
        status: "PENDING",
        createdAt: new Date().toISOString(),
        company: {
          id: company.id,
          name: company.name,
          user: {
            name: loggedUser.name,
            profilePic: loggedUser.profilePic || "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
          }
        }
      };
      
      setEvent({
        ...event,
        bids: [...event.bids, newBid]
      });
      
      setBidAmount(0);
      setBidMessage('');
      toast.success("Bid placed successfully!");
    } catch (error) {
      console.error("Failed to place bid:", error);
      toast.error("Failed to place bid");
    } finally {
      setIsPlacingBid(false);
    }
  };

  if (loading || !event) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-50 ml-[17%] mt-[5%]">
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 border-4 border-t-[#303972] border-gray-200 rounded-full animate-spin"></div>
          <p className="mt-4 text-lg font-medium text-gray-600">Loading event data...</p>
        </div>
      </div>
    );
  }

  const existingBid = event.bids.find(bid => bid.companyId === company?.id);

  return (
    <div className='w-[83%] mt-[5%] bg-white ml-[17%] p-6'>
      <div className="max-w-6xl mx-auto">
        {/* Event Header */}
        <div className="flex flex-col gap-6 mb-8 md:flex-row">
          <div className="md:w-1/3">
            {event.banner && (
              <img 
                src={event.banner} 
                alt={event.name} 
                className="object-cover w-full h-64 rounded-lg shadow-md"
                onError={(e) => {
                  e.target.src = "https://via.placeholder.com/800x400?text=Event+Banner";
                }}
              />
            )}
          </div>
          <div className="md:w-2/3">
            <div className="flex items-start justify-between">
              <div>
                <h1 className="mb-2 text-3xl font-bold text-gray-800">{event.name}</h1>
                <p className="mb-4 text-gray-600">
                  Organized by: {event.organizer.user.name}
                </p>
              </div>
              <button 
                onClick={handleBack}
                className="px-4 py-2 text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
              >
                Back
              </button>
            </div>
            
            <div className="flex flex-wrap gap-4 mb-4">
              <div className="px-4 py-2 rounded-lg bg-blue-50">
                <p className="text-sm text-gray-500">Date</p>
                <p className="font-medium">
                  {new Date(event.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                  })}
                </p>
              </div>
              <div className="px-4 py-2 rounded-lg bg-blue-50">
                <p className="text-sm text-gray-500">Location</p>
                <p className="font-medium">{event.location}</p>
              </div>
              <div className="px-4 py-2 rounded-lg bg-blue-50">
                <p className="text-sm text-gray-500">Budget</p>
                <p className="font-medium">${event.budget.toLocaleString()}</p>
              </div>
              <div className="px-4 py-2 rounded-lg bg-blue-50">
                <p className="text-sm text-gray-500">Status</p>
                <p className="font-medium capitalize">{event.status.toLowerCase()}</p>
              </div>
            </div>
            
            <div className="flex mt-4 space-x-4">
              <button 
                onClick={() => setActiveTab('details')}
                className={`px-4 py-2 rounded-md ${activeTab === 'details' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
              >
                Event Details
              </button>
              <button 
                onClick={() => setActiveTab('bids')}
                className={`px-4 py-2 rounded-md ${activeTab === 'bids' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
              >
                Existing Bids ({event.bids.length})
              </button>
              {event.companies?.length > 0 && (
                <button 
                  onClick={() => setActiveTab('participants')}
                  className={`px-4 py-2 rounded-md ${activeTab === 'participants' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
                >
                  Participants ({event.companies.length})
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Tab Content */}
        <div className="pt-6 border-t border-gray-200">
          {activeTab === 'details' ? (
            <div className="grid gap-8 md:grid-cols-3">
              <div className="md:col-span-2">
                <h2 className="mb-4 text-xl font-semibold text-gray-800">Event Description</h2>
                <p className="mb-6 text-gray-700 whitespace-pre-line">{event.description}</p>
                
                {event.proposal && (
                  <>
                    <h2 className="mb-4 text-xl font-semibold text-gray-800">Proposal Details</h2>
                    <div className="p-4 rounded-lg bg-gray-50">
                      <p className="text-gray-700 whitespace-pre-line">{event.proposal}</p>
                    </div>
                  </>
                )}
              </div>
              
              <div>
                <div className="sticky p-6 bg-white border border-gray-200 rounded-lg shadow-sm top-6">
                  <h3 className="mb-4 text-lg font-medium text-gray-800">Place a Bid</h3>
                  
                  {!company ? (
                    <div className="p-4 rounded-lg bg-yellow-50">
                      <p className="text-yellow-800">You need to be associated with a company to place a bid.</p>
                    </div>
                  ) : existingBid ? (
                    <div className="p-4 rounded-lg bg-blue-50">
                      <p className="font-medium text-blue-800">You've already placed a bid</p>
                      <p className="mt-2">Amount: <span className="font-semibold">${existingBid.amount.toLocaleString()}</span></p>
                      <p className="mt-1">Status: <span className="font-semibold capitalize">{existingBid.status.toLowerCase()}</span></p>
                      {existingBid.message && (
                        <p className="mt-2 text-sm">Your message: "{existingBid.message}"</p>
                      )}
                    </div>
                  ) : (
                    <form onSubmit={handleBidSubmit}>
                      <div className="mb-4">
                        <label htmlFor="amount" className="block mb-1 text-sm font-medium text-gray-700">
                          Bid Amount (USD)
                        </label>
                        <div className="relative rounded-md shadow-sm">
                          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <span className="text-gray-500 sm:text-sm">$</span>
                          </div>
                          <input
                            type="number"
                            id="amount"
                            min="1"
                            max={event.budget}
                            value={bidAmount || ''}
                            onChange={(e) => setBidAmount(Number(e.target.value))}
                            className="block w-full py-2 pr-12 border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 pl-7 sm:text-sm"
                            placeholder="0"
                            required
                          />
                          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                            <span className="text-gray-500 sm:text-sm">/ ${event.budget.toLocaleString()}</span>
                          </div>
                        </div>
                        <p className="mt-1 text-xs text-gray-500">
                          Maximum budget: ${event.budget.toLocaleString()}
                        </p>
                      </div>
                      
                      <div className="mb-4">
                        <label htmlFor="message" className="block mb-1 text-sm font-medium text-gray-700">
                          Message (Optional)
                        </label>
                        <textarea
                          id="message"
                          rows={3}
                          value={bidMessage}
                          onChange={(e) => setBidMessage(e.target.value)}
                          className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                          placeholder="Tell the organizer why you're the best fit..."
                        />
                      </div>
                      
                      <button
                        type="submit"
                        disabled={isPlacingBid || bidAmount <= 0 || bidAmount > event.budget}
                        className="w-full px-4 py-2 font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isPlacingBid ? 'Submitting...' : 'Place Bid'}
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          ) : activeTab === 'bids' ? (
            <div>
              <h2 className="mb-6 text-xl font-semibold text-gray-800">Existing Bids</h2>
              
              {event.bids.length === 0 ? (
                <div className="p-8 text-center rounded-lg bg-gray-50">
                  <p className="text-gray-500">No bids have been placed yet</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {event.bids
                    .sort((a, b) => b.amount - a.amount)
                    .map((bid) => (
                      <div 
                        key={bid.id} 
                        className={`p-4 border rounded-lg hover:bg-gray-50 ${
                          bid.companyId === company?.id ? 'border-blue-300 bg-blue-50' : 'border-gray-200'
                        }`}
                      >
                        <div className="flex items-center mb-2 space-x-3">
                          <img 
                            src={bid.company?.user?.profilePic || "https://via.placeholder.com/40?text=Company"} 
                            alt={bid.company?.user?.name || 'Company'}
                            className="object-cover w-10 h-10 rounded-full"
                          />
                          <div>
                            <p className="font-medium">
                              {bid.company?.user?.name || `Company ${bid.companyId}`}
                              {bid.companyId === company?.id && (
                                <span className="ml-2 text-xs text-blue-600">(Your bid)</span>
                              )}
                            </p>
                            <p className="text-sm text-gray-500">
                              Bid: ${bid.amount.toLocaleString()}
                              {event.budget > 0 && (
                                <span> ({(bid.amount / event.budget * 100).toFixed(0)}% of budget)</span>
                              )}
                            </p>
                          </div>
                        </div>
                        {bid.message && (
                          <p className="mt-2 text-gray-700 pl-13">"{bid.message}"</p>
                        )}
                        <div className="flex items-center justify-between mt-3">
                          <span className={`text-sm px-2 py-1 rounded-full ${
                            bid.status === 'APPROVED' ? 'bg-green-100 text-green-800' :
                            bid.status === 'REJECTED' ? 'bg-red-100 text-red-800' :
                            bid.status === 'WITHDRAWN' ? 'bg-gray-100 text-gray-800' :
                            'bg-yellow-100 text-yellow-800'
                          }`}>
                            {bid.status.toLowerCase()}
                          </span>
                          <span className="text-xs text-gray-500">
                            {new Date(bid.createdAt).toLocaleString()}
                          </span>
                        </div>
                      </div>
                    ))}
                </div>
              )}
            </div>
          ) : (
            <div>
              <h2 className="mb-6 text-xl font-semibold text-gray-800">Participating Companies</h2>
              
              {event.companies.length === 0 ? (
                <div className="p-8 text-center rounded-lg bg-gray-50">
                  <p className="text-gray-500">No participating companies yet</p>
                </div>
              ) : (
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {event.companies.map((company) => (
                    <div key={company.id} className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
                      <p className="font-medium">{company.name}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventView;