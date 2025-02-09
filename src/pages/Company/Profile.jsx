import React from "react";
import { FaLock, FaGlobe, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Profile = () => {
  return (
    <div className="min-h-screen bg-[#F9F9F9] flex flex-col items-center w-[83%] ml-[17%]">
      <div className="relative w-full bg-white overflow-hidden h-screen">
        <div className="bg-black text-white flex justify-center items-center p-6 relative min-h-[30%] rounded-b-2xl">
          <h1 className="text-3xl font-semi-bold">Technology that Moves Human Civilization</h1>
         
        </div>
        
        <div className="p-6 flex items-center gap-4 border-b">
            <div className="bg-white w-full rounded-xl p-4 -mt-20 z-10 opacity-90">
                <div className="w-16 h-16 bg-gray-300 rounded-full"></div>
                <div>
                    <h2 className="text-xl font-semibold">SyscoLabs</h2>
                    <p className="text-gray-500">esthera@simmmpIe.com</p>
                </div>
            </div>
        </div>
        
        <div className="p-6">
          <h3 className="text-lg font-semibold mb-4">Company Bio</h3>
          <p className="text-gray-600 mb-4">
            Hi, I'm Alec Thompson. Decisions: If you can't decide, the answer is no.
            If two equally difficult paths, choose the one more painful in the short term
            (pain avoidance is creating an illusion of equality).
          </p>
          <div className="space-y-2 text-gray-700">
            <p><strong>Company Name:</strong> SyscoLABS Srilanka</p>
            <p><FaPhone className="inline mr-2" /> <strong>Contact:</strong> (44) 123 1234 123</p>
            <p><FaEnvelope className="inline mr-2" /> <strong>Email:</strong> alecThompson@mail.com</p>
            <p><FaMapMarkerAlt className="inline mr-2" /> <strong>Location:</strong> 55A, Dharmapala Mawatha, Colombo, Sri Lanka</p>
            <p><FaGlobe className="inline mr-2" /> <strong>Website:</strong> syscolabs.lk</p>
          </div>
        </div>
        
        <div className="p-6 border-t">
          <h3 className="text-lg font-semibold mb-4">Security</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-1">Password</label>
              <input type="password" className="w-full border rounded px-4 py-2" placeholder="**********" />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Backup Email</label>
              <input type="email" className="w-full border rounded px-4 py-2" placeholder="**********" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
