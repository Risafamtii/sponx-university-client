// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { IoArrowBack } from 'react-icons/io5';
// import { FaSave } from 'react-icons/fa';
// //import { toast } from 'react-toastify';
// //import { createCompany } from '../../utils/api/admin'; // You'll need to create this API function

// const CompanyAdd = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     // User fields
//     email: '',
//     password: '',
//     name: '',
//     profilePic: '',
//     coverPhoto: '',
    
//     // Company fields
//     address: '',
//     phone: '',
//     website: '',
//     desc: '',
//     industry: '',
    
//     // Bank details
//     bankName: '',
//     accountName: '',
//     accountNumber: '',
//     bankBranch: ''
//   });
  
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
    
//     try {
//       const response = await createCompany(formData);
//       toast.success('Company created successfully!');
//       navigate('/admin/users/companies');
//     } catch (error) {
//       console.error('Error creating company:', error);
//       toast.error(error.response?.data?.message || 'Failed to create company');
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div className="bg-white w-[83%] ml-[17%] mt-[5%] rounded-xl shadow-lg flex flex-col items-center py-8 h-[90vh] overflow-y-auto">
//       <div className="w-[90%] max-w-4xl">
//         <button 
//           onClick={() => navigate(-1)}
//           className="flex items-center gap-2 mb-6 text-blue-600 hover:text-blue-800"
//         >
//           <IoArrowBack /> Back to Companies
//         </button>
        
//         <h1 className="mb-6 text-2xl font-bold text-gray-800">Add New Company</h1>
        
//         <form onSubmit={handleSubmit} className="space-y-6">
//           <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
//             {/* User Information */}
//             <div className="space-y-4">
//               <h2 className="pb-2 text-lg font-semibold text-gray-700 border-b">Account Information</h2>
              
//               <div>
//                 <label className="block mb-1 text-sm font-medium text-gray-700">Email*</label>
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                   className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
//                 />
//               </div>
              
//               <div>
//                 <label className="block mb-1 text-sm font-medium text-gray-700">Password*</label>
//                 <input
//                   type="password"
//                   name="password"
//                   value={formData.password}
//                   onChange={handleChange}
//                   required
//                   minLength="6"
//                   className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
//                 />
//               </div>
              
//               <div>
//                 <label className="block mb-1 text-sm font-medium text-gray-700">Profile Picture URL</label>
//                 <input
//                   type="url"
//                   name="profilePic"
//                   value={formData.profilePic}
//                   onChange={handleChange}
//                   className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
//                 />
//               </div>
              
//               <div>
//                 <label className="block mb-1 text-sm font-medium text-gray-700">Cover Photo URL</label>
//                 <input
//                   type="url"
//                   name="coverPhoto"
//                   value={formData.coverPhoto}
//                   onChange={handleChange}
//                   className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
//                 />
//               </div>
//             </div>
            
//             {/* Company Information */}
//             <div className="space-y-4">
//               <h2 className="pb-2 text-lg font-semibold text-gray-700 border-b">Company Details</h2>
              
//               <div>
//                 <label className="block mb-1 text-sm font-medium text-gray-700">Company Name*</label>
//                 <input
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   required
//                   className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
//                 />
//               </div>
              
//               <div>
//                 <label className="block mb-1 text-sm font-medium text-gray-700">Address*</label>
//                 <input
//                   type="text"
//                   name="address"
//                   value={formData.address}
//                   onChange={handleChange}
//                   required
//                   className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
//                 />
//               </div>
              
//               <div>
//                 <label className="block mb-1 text-sm font-medium text-gray-700">Phone*</label>
//                 <input
//                   type="tel"
//                   name="phone"
//                   value={formData.phone}
//                   onChange={handleChange}
//                   required
//                   className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
//                 />
//               </div>
              
//               <div>
//                 <label className="block mb-1 text-sm font-medium text-gray-700">Website</label>
//                 <input
//                   type="url"
//                   name="website"
//                   value={formData.website}
//                   onChange={handleChange}
//                   className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
//                 />
//               </div>
              
//               <div>
//                 <label className="block mb-1 text-sm font-medium text-gray-700">Industry</label>
//                 <input
//                   type="text"
//                   name="industry"
//                   value={formData.industry}
//                   onChange={handleChange}
//                   className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
//                 />
//               </div>
//             </div>
//           </div>
          
//           {/* Bank Details */}
//           <div className="space-y-4">
//             <h2 className="pb-2 text-lg font-semibold text-gray-700 border-b">Bank Information</h2>
//             <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
//               <div>
//                 <label className="block mb-1 text-sm font-medium text-gray-700">Bank Name</label>
//                 <input
//                   type="text"
//                   name="bankName"
//                   value={formData.bankName}
//                   onChange={handleChange}
//                   className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
//                 />
//               </div>
              
//               <div>
//                 <label className="block mb-1 text-sm font-medium text-gray-700">Account Name</label>
//                 <input
//                   type="text"
//                   name="accountName"
//                   value={formData.accountName}
//                   onChange={handleChange}
//                   className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
//                 />
//               </div>
              
//               <div>
//                 <label className="block mb-1 text-sm font-medium text-gray-700">Account Number</label>
//                 <input
//                   type="text"
//                   name="accountNumber"
//                   value={formData.accountNumber}
//                   onChange={handleChange}
//                   className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
//                 />
//               </div>
              
//               <div>
//                 <label className="block mb-1 text-sm font-medium text-gray-700">Bank Branch</label>
//                 <input
//                   type="text"
//                   name="bankBranch"
//                   value={formData.bankBranch}
//                   onChange={handleChange}
//                   className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
//                 />
//               </div>
//             </div>
//           </div>
          
//           {/* Description */}
//           <div>
//             <label className="block mb-1 text-sm font-medium text-gray-700">Description</label>
//             <textarea
//               name="desc"
//               value={formData.desc}
//               onChange={handleChange}
//               rows={3}
//               className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
//             />
//           </div>
          
//           <div className="flex justify-end pt-4">
//             <button
//               type="submit"
//               disabled={isSubmitting}
//               className="flex items-center gap-2 px-6 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
//             >
//               <FaSave /> {isSubmitting ? 'Saving...' : 'Save Company'}
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default CompanyAdd;