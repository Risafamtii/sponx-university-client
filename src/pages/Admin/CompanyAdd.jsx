import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';
import { createCompany } from '../../utils/api/admin';

const CompanyAdd = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    website: '',
    desc: '',
    industry: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    industry: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = "Company name is required";
      isValid = false;
    }

    if (!formData.phone) {
      newErrors.phone = "Phone number is required";
      isValid = false;
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Invalid phone number format";
      isValid = false;
    }

    if (!formData.industry) {
      newErrors.industry = "Industry is required";
      isValid = false;
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    try {
      const companyData = {
        userData: {
          email: formData.email,
          name: formData.name,
          type: 'COMPANY'
        },
        companyDetails: {
          name: formData.name,
          phone: formData.phone,
          website: formData.website,
          desc: formData.desc,
          industry: formData.industry
        }
      };

      const response = await createCompany(companyData);
      navigate('/companies', { state: { success: 'Company created successfully!' } });
    } catch (error) {
      console.error('Error creating company:', error);
      alert(error.response?.data?.error || 'Failed to create company');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col items-center bg-white w-[83%] ml-[17%] mt-[5%] rounded-xl shadow-lg py-4 h-[90vh] overflow-y-auto">

      <div className="w-[90%] max-w-5xl">
        {/* Header with back button */}
        <div className="flex items-center justify-between mb-8">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 px-4 py-2 text-gray-600 transition-colors duration-200 rounded-lg hover:text-blue-700 hover:bg-blue-50"
          >
            <IoArrowBack className="text-lg" />
            <span className="font-medium">Back to Companies</span>
          </button>
          <h1 className="text-2xl font-bold text-gray-800">Create New Company</h1>
          <div className="w-32"></div>
        </div>

        <form onSubmit={handleSubmit} className="p-6 overflow-hidden bg-white border border-gray-200 shadow-sm rounded-xl">
          <h2 className="pb-2 mb-6 text-xl font-semibold text-gray-800 border-b border-gray-100">Company Details</h2>
          
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">Company Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                
                className={`w-full px-4 py-2.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-200 focus:border-blue-500 transition-colors ${
                  errors.name ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Acme Inc."
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-600">{errors.name}</p>
              )}
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">Industry</label>
              <select
                name="industry"
                value={formData.industry}
                onChange={handleChange}
                className={`w-full px-4 py-2.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-200 focus:border-blue-500 transition-colors ${
                  errors.industry ? 'border-red-500' : 'border-gray-300'
                }`}      
                >
                <option value="">Select industry</option>
                <option value="Technology">Technology</option>
                <option value="Finance">Finance</option>
                <option value="Healthcare">Healthcare</option>
                <option value="Manufacturing">Manufacturing</option>
                <option value="Retail">Retail</option>
              </select>
              {errors.industry && (
                <p className="mt-1 text-sm text-red-600">{errors.industry}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 mt-6 md:grid-cols-2">
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">Email</label>
              <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
                
                className={`w-full px-4 py-2.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-200 focus:border-blue-500 transition-colors ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                }`}                 
                placeholder="123 Business St, City"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email}</p>
              )}
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">Phone Number*</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                
                className={`w-full px-4 py-2.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-200 focus:border-blue-500 transition-colors ${
                  errors.phone ? 'border-red-500' : 'border-gray-300'
                }`}                 
                placeholder="+1 (555) 123-4567"
              />
              {errors.phone && (
                <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
              )}
            </div>
          </div>

          <div className="mt-6">
            <label className="block mb-2 text-sm font-medium text-gray-700">Website</label>
            <input
              type="url"
              name="website"
              value={formData.website}
              onChange={handleChange}
              className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-200 focus:border-blue-500 transition-colors"
              placeholder="https://company.com"
            />
          </div>

          <div className="mt-6">
            <label className="block mb-2 text-sm font-medium text-gray-700">Description</label>
            <textarea
              name="desc"
              value={formData.desc}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-200 focus:border-blue-500 transition-colors"
              placeholder="Brief description about the company..."
            ></textarea>
          </div>

          <div className="flex justify-end pt-6">
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-6 py-2.5 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
            >
              {isSubmitting ? 'Saving...' : 'Save Company'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CompanyAdd;





