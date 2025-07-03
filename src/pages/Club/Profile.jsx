import React, { useState, useEffect } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaGlobe, FaLinkedin, FaTwitter, FaFacebook, FaInstagram, FaYoutube, FaEdit } from "react-icons/fa";
import { assets } from '../../assets/assets';
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
    <div className="flex flex-col items-center justify-center bg-gray-100 min-h-screen w-[83%] ml-[17%] mt-[5%] pr-4">
      {/* Cover Photo and Profile Photo Container */}
      <div className="relative w-full ml-6 mt-6">
        {/* Cover Photo */}
        <img
          src={profileData.basicInfo.coverPhoto || assets.header}
          alt="Cover"
          className="w-full h-[300px] object-cover rounded-lg shadow-lg"
        />

        {/* Profile Photo */}
        <div className="absolute bottom-0 left-16 transform translate-y-1/2">
          <img
            src={profileData.basicInfo.profilePic || assets.profile}
            alt="Profile"
            className="w-[150px] h-[150px] rounded-full border-4 border-black object-cover"
          />
        </div>
      </div>

      {/* Information Section */}
      <div className="-mt-2 w-full bg-white p-6 rounded-lg shadow-lg ml-6">
        {/* Header and Description Section */}
        <div className="flex justify-between items-start gap-8">
          {/* Header Section */}
          <div className="mt-20">
            <h1 className="text-2xl font-bold mb-8">{profileData.basicInfo.name}</h1>
            {profileData.organizationDetails?.universityClub && (
              <>
                <p className="text-gray-600 font-semibold">
                  {profileData.organizationDetails.universityClub.university}
                </p>
                <p className="italic text-gray-500">
                  {profileData.organizationDetails.universityClub.department}
                </p>
              </>
            )}
            {profileData.organizationDetails?.community && (
              <p className="text-gray-600 font-semibold">
                {profileData.organizationDetails.community.region} Community
              </p>
            )}
          </div>

          {/* Description Section */}
          <div className="w-1/2">
            <div className="mt-1 mb-4 ml-96">
              <button className="text-red-600 font-semibold hover:underline flex items-center">
                <FaEdit className="mr-1" /> Edit Profile
              </button>
            </div>
            <h2 className="text-lg font-semibold">Description</h2>
            <p className="text-gray-600 mt-2 leading-relaxed border-l-2 border-black pl-4">
              {profileData.basicInfo.desc || "No description available"}
            </p>
          </div>
        </div>
      </div>

      {/* Contact Details Card */}
      <div className="mt-8 w-full bg-white p-6 rounded-lg shadow-lg flex flex-col lg:flex-row gap-6 ml-6">
        {/* Left Section: Contact Person */}
        <div className="flex-1">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Contact Person</h2>
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span role="img" aria-label="person">👤</span>
              <p className="text-lg font-medium text-gray-700">
                {profileData.basicInfo.contactPerson}
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <span role="img" aria-label="role">🔑</span>
              <p className="text-lg font-medium text-gray-700">
                {profileData.organizationDetails?.type === 'UNIVERSITY_CLUB' ? 'Club Representative' : 'Community Leader'}
              </p>
            </div>
          </div>
        </div>

        {/* Middle Section: Contact Information */}
        <div className="flex-1">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Contact Information</h2>
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <FaPhone className="text-gray-700" />
              <p className="text-lg font-medium text-gray-700">
                {profileData.basicInfo.phone}
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <FaEnvelope className="text-gray-700" />
              <p className="text-lg font-medium text-gray-700">
                {profileData.basicInfo.email}
              </p>
            </div>
            {profileData.basicInfo.address && (
              <div className="flex items-center space-x-2">
                <FaMapMarkerAlt className="text-gray-700" />
                <p className="text-lg font-medium text-gray-700">
                  {profileData.basicInfo.address}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Right Section: Social Media Links */}
        <div className="flex-1">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Follow Us</h2>
          <div className="flex items-center justify-start space-x-4">
            {profileData.socialMedia?.map((social) => (
              <a 
                key={social.id}
                href={social.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-2xl hover:opacity-80"
              >
                {social.platform === 'Facebook' && <FaFacebook className="text-blue-600" />}
                {social.platform === 'Twitter' && <FaTwitter className="text-blue-400" />}
                {social.platform === 'Instagram' && <FaInstagram className="text-pink-600" />}
                {social.platform === 'LinkedIn' && <FaLinkedin className="text-blue-700" />}
                {social.platform === 'YouTube' && <FaYoutube className="text-red-600" />}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;