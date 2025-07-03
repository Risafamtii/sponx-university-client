import React, { useState, useEffect } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaGlobe, FaFacebook, FaTwitter, FaInstagram, FaCog, FaLock, FaEdit } from "react-icons/fa";
import { getUserById } from '../../utils/api/auth';

const Profile = () => {
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const userData = JSON.parse(localStorage.getItem("user"));
  const userId = userData?.id;

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        setLoading(true);
        const response = await getUserById(userId);
        setProfileData(response.data.data);
        setError(null);
      } catch (error) {
        console.error("Failed to fetch profile:", error);
        setError("Failed to load profile data");
      } finally {
        setLoading(false);
      }
    };

    if (userId) {
      fetchUserData();
    }
  }, [userId]);

  if (loading) return <div className="mt-[5%] bg-[#F9F9F9] flex justify-center items-center w-[83%] ml-[17%] h-screen">Loading...</div>;
  if (error) return <div className="mt-[5%] bg-[#F9F9F9] flex justify-center items-center w-[83%] ml-[17%] h-screen">Error: {error}</div>;
  if (!profileData) return <div className="mt-[5%] bg-[#F9F9F9] flex justify-center items-center w-[83%] ml-[17%] h-screen">No profile data found</div>;

  return (
    <div className="mt-[5%] bg-[#F9F9F9] flex flex-col items-center w-[83%] ml-[17%]">
      <div className="relative w-full h-screen bg-white">
        <div className="bg-black text-white flex justify-center items-center p-6 relative min-h-[30%] rounded-b-2xl">
          <h1 className="text-3xl font-semi-bold">
            {profileData.basicInfo.desc || "Technology that Moves Human Civilization"}
          </h1>
        </div>
        
        <div className="flex items-center gap-4 p-6 border-b">
          <div className="z-10 flex w-full gap-8 p-4 -mt-20 bg-white/90 rounded-xl">
            <div className="w-20 h-20 bg-gray-300 rounded-full overflow-hidden">
              {profileData.basicInfo.profilePic && (
                <img 
                  src={profileData.basicInfo.profilePic} 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              )}
            </div>
            
            <div className="flex flex-col items-start justify-center">
              <h2 className="text-xl font-semibold">{profileData.basicInfo.name}</h2>
              <p className="text-gray-500">{profileData.basicInfo.email}</p>
            </div>

            <div className="flex items-center gap-2 ml-auto">
              <button className="flex items-center gap-1 px-2 py-1 font-medium text-gray-700 rounded-lg shadow hover:bg-white">
                <FaCog /> Overview
              </button>
              <button className="flex items-center gap-1 px-2 py-1 font-medium text-gray-700 rounded-lg shadow hover:bg-white">
                <FaLock /> Security
              </button>
              <button className="flex items-center gap-1 px-2 py-1 font-medium text-gray-700 rounded-lg shadow hover:bg-white">
                <FaEdit /> Edit
              </button>
            </div>
          </div>
        </div>

        {/* Company Bio */}
        <div className="p-6">
          <h3 className="mb-4 text-lg font-semibold">Company Bio</h3>
          <p className="text-[#A0AEC0] mb-4 font-normal">
            {profileData.basicInfo.desc || "No description available"}
          </p>
          
          {/* Contact Information */}
          <div className="space-y-2 text-gray-700">
            <p><strong>Company Name:</strong> {profileData.basicInfo.name}</p>
            <p>
              <FaPhone className="inline mr-2" /> 
              <strong>Contact:</strong> {profileData.basicInfo.phone}
            </p>
            <p>
              <FaEnvelope className="inline mr-2" /> 
              <strong>Email:</strong> {profileData.basicInfo.email}
            </p>
            <p>
              <FaMapMarkerAlt className="inline mr-2" /> 
              <strong>Location:</strong> {profileData.basicInfo.address}
            </p>
            {profileData.companyDetails?.website && (
              <p>
                <FaGlobe className="inline mr-2" /> 
                <strong>Website:</strong> 
                <a href={profileData.companyDetails.website} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  {profileData.companyDetails.website}
                </a>
              </p>
            )}
            
            {/* Social Media */}
            {profileData.socialMedia?.length > 0 && (
              <p className="flex items-center space-x-3">
                <strong>Social Media:</strong>
                {profileData.socialMedia.map(social => (
                  <a 
                    key={social.id} 
                    href={social.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:opacity-80"
                  >
                    {social.platform === 'Facebook' && <FaFacebook className="text-blue-600" />}
                    {social.platform === 'Twitter' && <FaTwitter className="text-blue-400" />}
                    {social.platform === 'Instagram' && <FaInstagram className="text-pink-500" />}
                  </a>
                ))}
              </p>
            )}
          </div>
        </div>
        
        {/* Company Details */}
        {profileData.basicInfo.type === 'COMPANY' && profileData.companyDetails && (
          <div className="p-6 border-t">
            <h3 className="mb-4 text-lg font-semibold">Company Details</h3>
            <div className="space-y-2 text-gray-700">
              <p><strong>Industry:</strong> {profileData.companyDetails.industry}</p>
              {profileData.companyDetails.bankDetails && (
                <>
                  <p><strong>Bank Name:</strong> {profileData.companyDetails.bankDetails.bankName}</p>
                  <p><strong>Account Name:</strong> {profileData.companyDetails.bankDetails.accountName}</p>
                  <p><strong>Account Number:</strong> {profileData.companyDetails.bankDetails.accountNumber}</p>
                </>
              )}
            </div>
          </div>
        )}

        {/* Security Section */}
        <div className="p-6 border-t">
          <h3 className="mb-4 text-lg font-semibold">Security</h3>
          <div className="space-y-4">
            <div>
              <label className="block mb-1 text-gray-700">Password</label>
              <input 
                type="password" 
                className="px-4 py-1 border border-gray-300 w-80 rounded-xl" 
                placeholder="**********" 
                disabled
              />
            </div>
            <div>
              <label className="block mb-1 text-gray-700">Backup Email</label>
              <input 
                type="email" 
                className="px-4 py-1 border border-gray-300 w-80 rounded-xl" 
                placeholder={profileData.basicInfo.email} 
                disabled
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;