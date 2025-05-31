import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';
import { organizationService } from '../../utils/api/admin';
import { toast } from 'react-toastify';

const OrganizationAdd = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    organizationType: 'UNIVERSITY_CLUB',
    name: '',
    email: '',
    phone: '',
    contactPerson: '',
    university: '',
    department: '',
    clubName: '',
    communityName: '',
    region: ''
  });

  const [errors, setErrors] = useState({
    organizationType: '',
    name: '',
    email: '',
    phone: '',
    contactPerson: '',
    university: '',
    department: '',
    clubName: '',
    communityName: '',
    region: ''
  });

  const ORGANIZATION_TYPES = [
    { value: "UNIVERSITY_CLUB", label: "University Club" },
    { value: "COMMUNITY", label: "Community Organization" }
  ];

  const REGIONS = [
    "Western Province", "Central Province", "Southern Province", 
    "Northern Province", "Eastern Province", "North Western Province", 
    "North Central Province", "Uva Province", "Sabaragamuwa Province"
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

    if (!formData.organizationType) {
      newErrors.organizationType = "Organization type is required";
      isValid = false;
    }

    if (!formData.email) {
      newErrors.email = "Email address is required";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
      isValid = false;
    }

    if (!formData.phone) {
      newErrors.phone = "Phone number is required";
      isValid = false;
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid 10-digit phone number";
      isValid = false;
    }

    if (!formData.contactPerson.trim()) {
      newErrors.contactPerson = "Contact person name is required";
      isValid = false;
    }

    if (formData.organizationType === 'UNIVERSITY_CLUB') {
      if (!formData.university.trim()) {
        newErrors.university = "University name is required";
        isValid = false;
      }
      
      if (!formData.department.trim()) {
        newErrors.department = "Department name is required";
        isValid = false;
      }
      
      if (!formData.clubName.trim()) {
        newErrors.clubName = "Club name is required";
        isValid = false;
      }
    } else if (formData.organizationType === 'COMMUNITY') {
      if (!formData.communityName.trim()) {
        newErrors.communityName = "Community name is required";
        isValid = false;
      }
      
      if (!formData.region) {
        newErrors.region = "Region is required";
        isValid = false;
      }
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Clear previous errors
    setErrors({
      organizationType: '',
      name: '',
      email: '',
      phone: '',
      contactPerson: '',
      university: '',
      department: '',
      clubName: '',
      communityName: '',
      region: ''
    });

    // Validate form fields
    if (!validateForm()) {
      toast.error('Please fix the errors in the form');
      return;
    }

    setIsSubmitting(true);

    try {
      const organizationData = {
        userData: {
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          contactPerson: formData.contactPerson.trim(),
          name: formData.organizationType === "UNIVERSITY_CLUB" 
            ? formData.clubName.trim() 
            : formData.communityName.trim()
        },
        organizationDetails: {
          organizationType: formData.organizationType,
          ...(formData.organizationType === "UNIVERSITY_CLUB" ? {
            university: formData.university.trim(),
            department: formData.department.trim()
          } : {
            region: formData.region
          })
        }
      };

      const response = await organizationService.create(organizationData);

      if (response.status === 201) {
        toast.success(response.data?.message || "Organization created successfully!");
        navigate('/admin/users/orgs');
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
            <span className="font-medium">Back to Organizations</span>
          </button>
          <h1 className="text-2xl font-bold text-gray-800">Create New Organization</h1>
          <div className="w-32"></div> {/* Spacer for alignment */}
        </div>

        <form onSubmit={handleSubmit} className="p-6 overflow-hidden bg-white border border-gray-200 shadow-sm rounded-xl">
          <h2 className="pb-2 mb-6 text-xl font-semibold text-gray-800 border-b border-gray-100">Organization Details</h2>
          
          {/* Organization Type */}
          <div className="mb-6">
            <label htmlFor="organizationType" className="block mb-2 text-sm font-medium text-gray-700">
              Organization Type *
            </label>
            <select
              id="organizationType"
              name="organizationType"
              value={formData.organizationType}
              onChange={handleChange}
              className={`w-full px-4 py-2.5 text-sm border rounded-lg focus:ring-2 focus:ring-blue-200 focus:border-blue-500 transition-colors ${
                errors.organizationType ? 'border-red-500' : 'border-gray-300'
              }`}
              disabled={isSubmitting}
            >
              {ORGANIZATION_TYPES.map((orgType) => (
                <option key={orgType.value} value={orgType.value}>{orgType.label}</option>
              ))}
            </select>
            {errors.organizationType && (
              <p className="mt-1 text-sm text-red-600">{errors.organizationType}</p>
            )}
          </div>

          {/* University Club Fields */}
          {formData.organizationType === 'UNIVERSITY_CLUB' && (
            <div className="grid grid-cols-1 gap-6 mb-6 md:grid-cols-3">
              <div>
                <label htmlFor="university" className="block mb-2 text-sm font-medium text-gray-700">
                  University *
                </label>
                <input
                  id="university"
                  type="text"
                  name="university"
                  value={formData.university}
                  onChange={handleChange}
                  className={`w-full px-4 py-2.5 text-sm border rounded-lg focus:ring-2 focus:ring-blue-200 focus:border-blue-500 transition-colors ${
                    errors.university ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="University of Colombo"
                  disabled={isSubmitting}
                />
                {errors.university && (
                  <p className="mt-1 text-sm text-red-600">{errors.university}</p>
                )}
              </div>

              <div>
                <label htmlFor="department" className="block mb-2 text-sm font-medium text-gray-700">
                  Department *
                </label>
                <input
                  id="department"
                  type="text"
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  className={`w-full px-4 py-2.5 text-sm border rounded-lg focus:ring-2 focus:ring-blue-200 focus:border-blue-500 transition-colors ${
                    errors.department ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Faculty of Science"
                  disabled={isSubmitting}
                />
                {errors.department && (
                  <p className="mt-1 text-sm text-red-600">{errors.department}</p>
                )}
              </div>

              <div>
                <label htmlFor="clubName" className="block mb-2 text-sm font-medium text-gray-700">
                  Club Name *
                </label>
                <input
                  id="clubName"
                  type="text"
                  name="clubName"
                  value={formData.clubName}
                  onChange={handleChange}
                  className={`w-full px-4 py-2.5 text-sm border rounded-lg focus:ring-2 focus:ring-blue-200 focus:border-blue-500 transition-colors ${
                    errors.clubName ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Science Society"
                  disabled={isSubmitting}
                />
                {errors.clubName && (
                  <p className="mt-1 text-sm text-red-600">{errors.clubName}</p>
                )}
              </div>
            </div>
          )}

          {/* Community Organization Fields */}
          {formData.organizationType === 'COMMUNITY' && (
            <div className="grid grid-cols-1 gap-6 mb-6 md:grid-cols-2">
              <div>
                <label htmlFor="communityName" className="block mb-2 text-sm font-medium text-gray-700">
                  Community Name *
                </label>
                <input
                  id="communityName"
                  type="text"
                  name="communityName"
                  value={formData.communityName}
                  onChange={handleChange}
                  className={`w-full px-4 py-2.5 text-sm border rounded-lg focus:ring-2 focus:ring-blue-200 focus:border-blue-500 transition-colors ${
                    errors.communityName ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Community Organization"
                  disabled={isSubmitting}
                />
                {errors.communityName && (
                  <p className="mt-1 text-sm text-red-600">{errors.communityName}</p>
                )}
              </div>

              <div>
                <label htmlFor="region" className="block mb-2 text-sm font-medium text-gray-700">
                  Region *
                </label>
                <select
                  id="region"
                  name="region"
                  value={formData.region}
                  onChange={handleChange}
                  className={`w-full px-4 py-2.5 text-sm border rounded-lg focus:ring-2 focus:ring-blue-200 focus:border-blue-500 transition-colors ${
                    errors.region ? 'border-red-500' : 'border-gray-300'
                  }`}
                  disabled={isSubmitting}
                >
                  <option value="">Select region</option>
                  {REGIONS.map((region) => (
                    <option key={region} value={region}>{region}</option>
                  ))}
                </select>
                {errors.region && (
                  <p className="mt-1 text-sm text-red-600">{errors.region}</p>
                )}
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
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
                placeholder="contact@organization.com"
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

          {/* Contact Person */}
          <div className="mt-6">
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
                'Save Organization'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OrganizationAdd;