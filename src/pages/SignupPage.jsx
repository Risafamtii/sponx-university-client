import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { signup } from '../utils/api/auth';
import { toast } from "react-toastify";

// Color schemes defined statically for Tailwind to work properly
const COLOR_SCHEMES = {
  company: {
    bg: 'bg-blue-50',
    text: 'text-blue-600',
    border: 'border-blue-300',
    focus: 'focus:ring-blue-500',
    hover: 'hover:border-blue-400',
    gradient: 'from-blue-600 to-indigo-700',
    button: 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700',
    focusBorder: 'focus:border-blue-500',
    ring: 'ring-blue-500'
  },
  organization: {
    bg: 'bg-green-50',
    text: 'text-green-600',
    border: 'border-green-300',
    focus: 'focus:ring-green-500',
    hover: 'hover:border-green-400',
    gradient: 'from-green-600 to-emerald-700',
    button: 'bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700',
    focusBorder: 'focus:border-green-500',
    ring: 'ring-green-500'
  }
};

// Constants
const INDUSTRIES = [
  "Technology", "Finance", "Healthcare", "Education", "Manufacturing",
  "Retail", "Hospitality", "Construction", "Transportation", "Energy",
  "Telecommunications", "Agriculture", "Media", "Other"
];

const ORGANIZATION_TYPES = [
  { value: "UNIVERSITY_CLUB", label: "University Club" },
  { value: "COMMUNITY", label: "Community Organization" }
];

const REGIONS = [
  "Western Province", "Central Province", "Southern Province", 
  "Northern Province", "Eastern Province", "North Western Province", 
  "North Central Province", "Uva Province", "Sabaragamuwa Province"
];

const SignupPage = () => {
  const { type } = useParams();
  const navigate = useNavigate();
  const colorScheme = COLOR_SCHEMES[type === 'company' ? 'company' : 'organization'];

  // Initial form data
  const getInitialFormData = () => {
    const commonFields = {
      name: "",
      email: "",
      phone: "",
      contactPerson: "",
      terms: false,
    };

    if (type === 'organization') {
      return {
        ...commonFields,
        organizationType: "",
        university: "",
        department: "",
        clubName: "",
        communityName: "",
        region: ""
      };
    } else if (type === 'company') {
      return {
        ...commonFields,
        industry: "",
        website: ""
      };
    }
    return commonFields;
  };

  const [formData, setFormData] = useState(getInitialFormData());
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Reset dependent fields when organization type changes
  useEffect(() => {
    if (type === 'organization') {
      setFormData(prev => {
        const updated = { ...prev };
        if (prev.organizationType === "UNIVERSITY_CLUB") {
          updated.communityName = "";
          updated.region = "";
        } else if (prev.organizationType === "COMMUNITY") {
          updated.university = "";
          updated.department = "";
          updated.clubName = "";
        }
        return updated;
      });
    }
  }, [formData.organizationType, type]);
  
  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;
    setFormData(prev => ({ 
      ...prev, 
      [name]: type === 'checkbox' ? checked : value 
    }));
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validate = () => {
    const newErrors = {};
    
    // Common validations
    if (!formData.name.trim() && type === 'company') {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 3 && type === 'company') {
      newErrors.name = "Name must be at least 3 characters";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9]{10}$/.test(formData.phone)) {
      newErrors.phone = "Invalid phone number (10 digits required)";
    }
    
    if (!formData.contactPerson.trim()) {
      newErrors.contactPerson = "Contact person is required";
    }

    // Type-specific validations
    if (type === 'organization') {
      if (!formData.organizationType) {
        newErrors.organizationType = "Organization type is required";
      }
      
      if (formData.organizationType === "UNIVERSITY_CLUB") {
        if (!formData.university.trim()) newErrors.university = "University name is required";
        if (!formData.department.trim()) newErrors.department = "Department name is required";
        if (!formData.clubName.trim()) newErrors.clubName = "Club name is required";
      }
      
      if (formData.organizationType === "COMMUNITY") {
        if (!formData.communityName.trim()) newErrors.communityName = "Community name is required";
        if (!formData.region.trim()) newErrors.region = "Region is required";
      }
    } else if (type === 'company') {
      if (!formData.industry) {
        newErrors.industry = "Industry is required";
      }
      if (formData.website && !/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/.test(formData.website)) {
        newErrors.website = "Invalid website URL";
      }
    }

    if (!formData.terms) {
      newErrors.terms = "You must agree to the terms and privacy policy";
    }

    //console.log(newErrors);
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = async (e) => {
  e.preventDefault();
  if (!validate()) return;

  setIsSubmitting(true);

  try {
    
    const backendType = type === 'company' ? 'COMPANY' : 'ORG';

    const payload = {
      type: backendType,
      email: formData.email,
      phone: formData.phone,
      contactPerson: formData.contactPerson,
      ...(type === 'company' && {
        name: formData.name,
        industry: formData.industry,
        website: formData.website || null,
      }),
      ...(type === 'organization' && {
        name: formData.organizationType === "UNIVERSITY_CLUB" 
          ? formData.clubName 
          : formData.communityName,
        organizationType: formData.organizationType,
        ...(formData.organizationType === "UNIVERSITY_CLUB" ? {
          university: formData.university,
          department: formData.department
        } : {
          region: formData.region
        })
      })
    };

    const response = await signup(payload);
    toast.success("Registration successful!");
    navigate('/login', {
      state: { message: `Registration successful!`, type }
    });
  } catch (error) {
    toast.error(error.response?.data?.message || 'Registration failed');
    console.error('Registration error:', error.response?.data || error.message);
    setErrors({
      general: error.response?.data?.message || 'Registration failed. Please try again.'
    });
  } finally {
    setIsSubmitting(false);
  }
};

  // Helper functions
  const getTitle = () => {
    return type === 'company' 
      ? 'Company Registration' 
      : 'Organization Registration';
  };

  const getDescription = () => {
    return type === 'company'
      ? 'Register your company to connect with organizations and expand your network'
      : 'Register your organization to collaborate with businesses and access resources';
  };

  // Form field components
  const renderCommonFields = () => (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
      {/* Email */}
      <div className="space-y-1">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full px-4 py-3 text-sm border rounded-lg focus:ring-2 ${colorScheme.focus} focus:border-transparent ${
            errors.email ? "border-red-500" : colorScheme.border
          }`}
          placeholder="contact@example.com"
          aria-describedby={errors.email ? "email-error" : undefined}
        />
        {errors.email && (
          <p id="email-error" className="mt-1 text-xs text-red-600" aria-live="polite">
            {errors.email}
          </p>
        )}
      </div>

      {/* Phone */}
      <div className="space-y-1">
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
          Phone Number <span className="text-red-500">*</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          className={`w-full px-4 py-3 text-sm border rounded-lg focus:ring-2 ${colorScheme.focus} focus:border-transparent ${
            errors.phone ? "border-red-500" : colorScheme.border
          }`}
          placeholder="771234567"
          maxLength="10"
          aria-describedby={errors.phone ? "phone-error" : undefined}
        />
        {errors.phone && (
          <p id="phone-error" className="mt-1 text-xs text-red-600" aria-live="polite">
            {errors.phone}
          </p>
        )}
      </div>

      {/* Contact Person */}
      <div className="space-y-1">
        <label htmlFor="contactPerson" className="block text-sm font-medium text-gray-700">
          Contact Person <span className="text-red-500">*</span>
        </label>
        <input
          id="contactPerson"
          name="contactPerson"
          type="text"
          value={formData.contactPerson}
          onChange={handleChange}
          className={`w-full px-4 py-3 text-sm border rounded-lg focus:ring-2 ${colorScheme.focus} focus:border-transparent ${
            errors.contactPerson ? "border-red-500" : colorScheme.border
          }`}
          placeholder="John Doe"
          aria-describedby={errors.contactPerson ? "contactPerson-error" : undefined}
        />
        {errors.contactPerson && (
          <p id="contactPerson-error" className="mt-1 text-xs text-red-600" aria-live="polite">
            {errors.contactPerson}
          </p>
        )}
      </div>
    </div>
  );

  const renderOrganizationFields = () => (
    <>
      {/* Organization Type */}
      <div className="space-y-1">
        <label htmlFor="organizationType" className="block text-sm font-medium text-gray-700">
          Organization Type <span className="text-red-500">*</span>
        </label>
        <select
          id="organizationType"
          name="organizationType"
          value={formData.organizationType}
          onChange={handleChange}
          className={`w-full px-4 py-3 text-sm border rounded-lg focus:ring-2 ${colorScheme.focus} focus:border-transparent ${
            errors.organizationType ? "border-red-500" : colorScheme.border
          }`}
          aria-describedby={errors.organizationType ? "organizationType-error" : undefined}
        >
          <option value="">Select organization type</option>
          {ORGANIZATION_TYPES.map((orgType) => (
            <option key={orgType.value} value={orgType.value}>
              {orgType.label}
            </option>
          ))}
        </select>
        {errors.organizationType && (
          <p id="organizationType-error" className="mt-1 text-xs text-red-600" aria-live="polite">
            {errors.organizationType}
          </p>
        )}
      </div>

      {/* University Club Fields */}
      {formData.organizationType === "UNIVERSITY_CLUB" && (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          <div className="space-y-1">
            <label htmlFor="university" className="block text-sm font-medium text-gray-700">
              University <span className="text-red-500">*</span>
            </label>
            <input
              id="university"
              name="university"
              type="text"
              value={formData.university}
              onChange={handleChange}
              className={`w-full px-4 py-3 text-sm border rounded-lg focus:ring-2 ${colorScheme.focus} focus:border-transparent ${
                errors.university ? "border-red-500" : colorScheme.border
              }`}
              placeholder="University of Colombo"
              aria-describedby={errors.university ? "university-error" : undefined}
            />
            {errors.university && (
              <p id="university-error" className="mt-1 text-xs text-red-600" aria-live="polite">
                {errors.university}
              </p>
            )}
          </div>

          <div className="space-y-1">
            <label htmlFor="faculty" className="block text-sm font-medium text-gray-700">
              Department <span className="text-red-500">*</span>
            </label>
            <input
              id="department"
              name="department"
              type="text"
              value={formData.department}
              onChange={handleChange}
              className={`w-full px-4 py-3 text-sm border rounded-lg focus:ring-2 ${colorScheme.focus} focus:border-transparent ${
                errors.faculty ? "border-red-500" : colorScheme.border
              }`}
              placeholder="Faculty of Science"
              aria-describedby={errors.faculty ? "faculty-error" : undefined}
            />
            {errors.department && (
              <p id="department-error" className="mt-1 text-xs text-red-600" aria-live="polite">
                {errors.department}
              </p>
            )}
          </div>

          <div className="space-y-1">
            <label htmlFor="clubName" className="block text-sm font-medium text-gray-700">
              Club Name <span className="text-red-500">*</span>
            </label>
            <input
              id="clubName"
              name="clubName"
              type="text"
              value={formData.clubName}
              onChange={handleChange}
              className={`w-full px-4 py-3 text-sm border rounded-lg focus:ring-2 ${colorScheme.focus} focus:border-transparent ${
                errors.clubName ? "border-red-500" : colorScheme.border
              }`}
              placeholder="Science Society"
              aria-describedby={errors.clubName ? "clubName-error" : undefined}
            />
            {errors.clubName && (
              <p id="clubName-error" className="mt-1 text-xs text-red-600" aria-live="polite">
                {errors.clubName}
              </p>
            )}
          </div>
        </div>
      )}

      {/* Community Fields */}
      {formData.organizationType === "COMMUNITY" && (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="space-y-1">
            <label htmlFor="communityName" className="block text-sm font-medium text-gray-700">
              Community Name <span className="text-red-500">*</span>
            </label>
            <input
              id="communityName"
              name="communityName"
              type="text"
              value={formData.communityName}
              onChange={handleChange}
              className={`w-full px-4 py-3 text-sm border rounded-lg focus:ring-2 ${colorScheme.focus} focus:border-transparent ${
                errors.communityName ? "border-red-500" : colorScheme.border
              }`}
              placeholder="Community Organization"
              aria-describedby={errors.communityName ? "communityName-error" : undefined}
            />
            {errors.communityName && (
              <p id="communityName-error" className="mt-1 text-xs text-red-600" aria-live="polite">
                {errors.communityName}
              </p>
            )}
          </div>

          <div className="space-y-1">
            <label htmlFor="region" className="block text-sm font-medium text-gray-700">
              Region <span className="text-red-500">*</span>
            </label>
            <select
              id="region"
              name="region"
              value={formData.region}
              onChange={handleChange}
              className={`w-full px-4 py-3 text-sm border rounded-lg focus:ring-2 ${colorScheme.focus} focus:border-transparent ${
                errors.region ? "border-red-500" : colorScheme.border
              }`}
              aria-describedby={errors.region ? "region-error" : undefined}
            >
              <option value="">Select region</option>
              {REGIONS.map((region) => (
                <option key={region} value={region}>{region}</option>
              ))}
            </select>
            {errors.region && (
              <p id="region-error" className="mt-1 text-xs text-red-600" aria-live="polite">
                {errors.region}
              </p>
            )}
          </div>
        </div>
      )}
    </>
  );

  const renderCompanyFields = () => (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
      {/* Company Name */}
      <div className="space-y-1">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Company Name <span className="text-red-500">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          className={`w-full px-4 py-3 text-sm border rounded-lg focus:ring-2 ${colorScheme.focus} focus:border-transparent ${
            errors.name ? "border-red-500" : colorScheme.border
          }`}
          placeholder="Acme Corporation"
          aria-describedby={errors.name ? "name-error" : undefined}
        />
        {errors.name && (
          <p id="name-error" className="mt-1 text-xs text-red-600" aria-live="polite">
            {errors.name}
          </p>
        )}
      </div>

      {/* Industry */}
      <div className="space-y-1">
        <label htmlFor="industry" className="block text-sm font-medium text-gray-700">
          Industry <span className="text-red-500">*</span>
        </label>
        <select
          id="industry"
          name="industry"
          value={formData.industry}
          onChange={handleChange}
          className={`w-full px-4 py-3 text-sm border rounded-lg focus:ring-2 ${colorScheme.focus} focus:border-transparent ${
            errors.industry ? "border-red-500" : colorScheme.border
          }`}
          aria-describedby={errors.industry ? "industry-error" : undefined}
        >
          <option value="">Select industry</option>
          {INDUSTRIES.map((industry) => (
            <option key={industry} value={industry}>{industry}</option>
          ))}
        </select>
        {errors.industry && (
          <p id="industry-error" className="mt-1 text-xs text-red-600" aria-live="polite">
            {errors.industry}
          </p>
        )}
      </div>

      {/* Website */}
      <div className="space-y-1">
        <label htmlFor="website" className="block text-sm font-medium text-gray-700">
          Website
        </label>
        <div className="flex">
          <span className="inline-flex items-center px-3 text-sm text-gray-500 bg-gray-100 border border-r-0 border-gray-300 rounded-l-lg">
            https://
          </span>
          <input
            id="website"
            name="website"
            type="text"
            value={formData.website}
            onChange={handleChange}
            className={`flex-1 px-4 py-3 text-sm border border-gray-300 rounded-r-lg focus:ring-2 ${colorScheme.focus} focus:border-transparent ${
              errors.website ? "border-red-500" : ""
            }`}
            placeholder="yourcompany.com"
            aria-describedby={errors.website ? "website-error" : undefined}
          />
        </div>
        {errors.website && (
          <p id="website-error" className="mt-1 text-xs text-red-600" aria-live="polite">
            {errors.website}
          </p>
        )}
      </div>
    </div>
  );

  return (
    <div className={`flex items-center justify-center min-h-screen p-4 ${colorScheme.bg}`}>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-4xl"
      >
        {/* Back button */}
        <div className="absolute top-4 left-4 sm:top-6 sm:left-6">
          <button
            onClick={() => navigate(-1)}
            className={`inline-flex items-center px-4 py-2 text-sm font-medium ${colorScheme.text} bg-white border ${colorScheme.border} rounded-lg shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 ${colorScheme.focus}`}
            aria-label="Go back"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back
          </button>
        </div>

        {/* Form container */}
        <div className="overflow-hidden bg-white shadow-xl rounded-2xl">
          {/* Header */}
          <div className={`p-6 text-center bg-gradient-to-r ${colorScheme.gradient}`}>
            <h1 className="text-2xl font-bold text-white md:text-3xl">{getTitle()}</h1>
            <p className="mt-1 text-blue-100">{getDescription()}</p>
          </div>

          {/* Form content */}
          <div className="px-6 py-8 sm:p-10">
            {errors.general && (
              <div className="p-4 mb-6 text-sm text-red-700 bg-red-100 rounded-lg" role="alert">
                <span className="font-medium">Error:</span> {errors.general}
              </div>
            )}
            
            <form className="space-y-6" onSubmit={handleSubmit} noValidate>
              {type === 'organization' && renderOrganizationFields()}
              {type === 'company' && renderCompanyFields()}
              
              {renderCommonFields()}

              {/* Terms and Conditions */}
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="terms"
                    name="terms"
                    type="checkbox"
                    checked={formData.terms}
                    onChange={handleChange}
                    className={`w-4 h-4 rounded border-gray-300 ${colorScheme.text} focus:ring-${type === 'company' ? 'blue' : 'green'}-500 ${
                      errors.terms ? "border-red-500" : ""
                    }`}
                    aria-describedby="terms-error"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="terms" className="font-medium text-gray-700">
                    I agree to the <a href="/terms" className={`${colorScheme.text} hover:underline`}>Terms</a> and <a href="/privacy" className={`${colorScheme.text} hover:underline`}>Privacy Policy</a>
                  </label>
                  {errors.terms && (
                    <p id="terms-error" className="mt-1 text-xs text-red-600" aria-live="polite">
                      {errors.terms}
                    </p>
                  )}
                </div>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                className={`w-full py-3 px-6 text-sm font-medium text-white rounded-lg shadow-md transition-all ${
                  isSubmitting 
                    ? 'bg-gray-400 cursor-not-allowed'
                    : `${colorScheme.button} hover:shadow-lg`
                }`}
                aria-busy={isSubmitting}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <svg className="w-5 h-5 mr-2 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Registering {type === 'company' ? 'Company' : 'Organization'}...
                  </div>
                ) : (
                  `Register ${type === 'company' ? 'Company' : 'Organization'}`
                )}
              </motion.button>
            </form>

            {/* Divider */}
            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 text-gray-500 bg-white">
                  Already have an account?
                </span>
              </div>
            </div>

            {/* Login Link */}
            <button
              onClick={() => navigate('/login')}
              className={`w-full py-2.5 px-4 text-sm font-medium ${colorScheme.text} bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 ${colorScheme.focus}`}
              aria-label="Sign in to your account"
            >
              Sign in to your account
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SignupPage;