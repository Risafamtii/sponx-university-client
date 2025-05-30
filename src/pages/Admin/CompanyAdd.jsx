import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';
import { companyService } from '../../utils/api/admin';
import { toast } from 'react-toastify';

const CompanyAdd = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    website: '',
    contactPerson: '',
    industry: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    industry: '',
    contactPerson: '',
    website: '',
  });

  const INDUSTRIES = [
    "Technology", "Finance", "Healthcare", "Education", "Manufacturing",
    "Retail", "Hospitality", "Construction", "Transportation", "Energy",
    "Telecommunications", "Agriculture", "Media", "Other"
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
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
      newErrors.phone = "Please enter a valid 10-digit phone number";
      isValid = false;
    }

    if (!formData.industry) {
      newErrors.industry = "Please select an industry";
      isValid = false;
    }

    if (!formData.email) {
      newErrors.email = "Email address is required";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
      isValid = false;
    }

    if (!formData.contactPerson.trim()) {
      newErrors.contactPerson = "Contact person name is required";
      isValid = false;
    }

    if (!formData.website.trim()) {
      newErrors.website = "Website is required";
      isValid = false;
    } else if (!/^([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/.test(formData.website)) {
      newErrors.website = "Please enter a valid domain (e.g., example.com or sub.example.com)";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Clear previous errors
    setErrors({
      name: '',
      email: '',
      phone: '',
      industry: '',
      contactPerson: '',
      website: '',
    });

    // Validate form fields
    if (!validateForm()) {
      toast.error('Please fix the errors in the form');
      return;
    }

    setIsSubmitting(true);

    try {
      const companyData = {
        userData: {
          email: formData.email.trim(),
          name: formData.name.trim(),
          phone: formData.phone.trim(),
          contactPerson: formData.contactPerson.trim(),
        },
        companyDetails: {
          website: formData.website 
            ? formData.website.startsWith('http') 
              ? formData.website 
              : `https://${formData.website}`
            : null,
          industry: formData.industry || null
        }
      };

      const response = await companyService.create(companyData);

      console.log(response);

      if (response.status === 201) {
        toast.success(response.data?.message || "Company created successfully!");
        navigate('/admin/users/companies');
      }

    } catch (error) {
      const errorMessage = error.response?.data?.error || 
                      error.response?.data?.message || 
                      'Registration failed. Please try again.';
      toast.error(errorMessage);
      console.error('Registration error:', error.response?.data || error.message);
      setErrors(prev => ({
        ...prev,
        general: error.response?.data?.message || 'Registration failed. Please try again.'
      }));
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
            disabled={isSubmitting}
          >
            <IoArrowBack className="text-lg" />
            <span className="font-medium">Back to Companies</span>
          </button>
          <h1 className="text-2xl font-bold text-gray-800">Create New Company</h1>
          <div className="w-32"></div> {/* Spacer for alignment */}
        </div>

        <form onSubmit={handleSubmit} className="p-6 overflow-hidden bg-white border border-gray-200 shadow-sm rounded-xl">
          <h2 className="pb-2 mb-6 text-xl font-semibold text-gray-800 border-b border-gray-100">Company Details</h2>
          
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Company Name */}
            <div>
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700">
                Company Name *
              </label>
              <input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-2.5 text-sm border rounded-lg focus:ring-2 focus:ring-blue-200 focus:border-blue-500 transition-colors ${
                  errors.name ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Acme Inc."
                disabled={isSubmitting}
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-600">{errors.name}</p>
              )}
            </div>

            {/* Industry */}
            <div>
              <label htmlFor="industry" className="block mb-2 text-sm font-medium text-gray-700">
                Industry *
              </label>
              <select
                id="industry"
                name="industry"
                value={formData.industry}
                onChange={handleChange}
                className={`w-full px-4 py-2.5 text-sm border rounded-lg focus:ring-2 focus:ring-blue-200 focus:border-blue-500 transition-colors ${
                  errors.industry ? 'border-red-500' : 'border-gray-300'
                }`}
                disabled={isSubmitting}
              >
                <option value="">Select industry</option>
                {INDUSTRIES.map((industry) => (
                  <option key={industry} value={industry}>{industry}</option>
                ))}
              </select>
              {errors.industry && (
                <p className="mt-1 text-sm text-red-600">{errors.industry}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 mt-6 md:grid-cols-2">
            {/* Email */}
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">
                Email *
              </label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-2.5 text-sm border rounded-lg focus:ring-2 focus:ring-blue-200 focus:border-blue-500 transition-colors ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="contact@company.com"
                disabled={isSubmitting}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email}</p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-700">
                Phone Number *
              </label>
              <input
                id="phone"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`w-full px-4 py-2.5 text-sm border rounded-lg focus:ring-2 focus:ring-blue-200 focus:border-blue-500 transition-colors ${
                  errors.phone ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="0771234567"
                disabled={isSubmitting}
              />
              {errors.phone && (
                <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 mt-6 md:grid-cols-2">
            {/* Contact Person */}
            <div>
              <label htmlFor="contactPerson" className="block mb-2 text-sm font-medium text-gray-700">
                Contact Person *
              </label>
              <input
                id="contactPerson"
                type="text"
                name="contactPerson"
                value={formData.contactPerson}
                onChange={handleChange}
                className={`w-full px-4 py-2.5 text-sm border rounded-lg focus:ring-2 focus:ring-blue-200 focus:border-blue-500 transition-colors ${
                  errors.contactPerson ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="John Doe"
                disabled={isSubmitting}
              />
              {errors.contactPerson && (
                <p className="mt-1 text-sm text-red-600">{errors.contactPerson}</p>
              )}
            </div>

            {/* Website */}
            <div>
              <label htmlFor="website" className="block mb-2 text-sm font-medium text-gray-700">
                Website *
              </label>
              <div className="flex rounded-lg shadow-sm">
                <span className="inline-flex items-center px-3.5 text-sm text-gray-500 bg-gray-50 border border-r-0 border-gray-300 rounded-l-md">
                  https://
                </span>
                <input
                  id="website"
                  name="website"
                  type="text"
                  value={formData.website}
                  onChange={handleChange}
                  className={`flex-1 min-w-0 block w-full px-3.5 py-2.5 text-sm text-gray-900 border border-gray-300 rounded-r-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                    errors.website ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="example.com"
                  disabled={isSubmitting}
                />
              </div>
              {errors.website && (
                <p className="mt-1 text-sm text-red-600">{errors.website}</p>
              )}
            </div>
          </div>

          <div className="flex justify-end pt-6">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`px-6 py-2.5 text-sm font-medium text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors ${
                isSubmitting ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
              }`}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg className="w-4 h-4 mr-2 animate-spin" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Saving...
                </span>
              ) : (
                'Save Company'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CompanyAdd;