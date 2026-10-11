"use client";

import { ArrowRight, Calendar, Mail, User, Phone, FileText, ArrowLeft } from "lucide-react";
import { useState } from "react";

export default function JoinUs() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });
  
  const [formData, setFormData] = useState({
    interest: "",
    startDate: "",
    fullName: "",
    email: "",
    mobile: "",
    note: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear status when user starts typing again
    if (submitStatus.type) {
      setSubmitStatus({ type: null, message: '' });
    }
  };

  const handleNext = (e?: React.MouseEvent) => {
    // Prevent any form submission
    if (e) {
      e.preventDefault();
    }
    
    // Validate step 1 before proceeding to step 2
    if (step === 1) {
      if (!formData.interest || !formData.startDate) {
        setSubmitStatus({
          type: 'error',
          message: 'Please select your interest and start date'
        });
        return;
      }
    }
    
    // Validate step 2 before proceeding to step 3
    if (step === 2) {
      if (!formData.fullName || !formData.email || !formData.mobile) {
        setSubmitStatus({
          type: 'error',
          message: 'Please fill in all personal information fields'
        });
        return;
      }
      
      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        setSubmitStatus({
          type: 'error',
          message: 'Please enter a valid email address'
        });
        return;
      }
      
      // Mobile validation (basic)
      if (formData.mobile.trim().length < 10) {
        setSubmitStatus({
          type: 'error',
          message: 'Please enter a valid mobile number'
        });
        return;
      }
    }
    
    // Clear any error messages and proceed
    setSubmitStatus({ type: null, message: '' });
    setStep(step + 1);
  };

  const handlePrevious = (e?: React.MouseEvent) => {
    // Prevent any form submission
    if (e) {
      e.preventDefault();
    }
    setStep(step - 1);
    // Clear any error messages when going back
    setSubmitStatus({ type: null, message: '' });
  };

  const validateAllFields = () => {
    // Check if all required fields from all steps are filled
    if (!formData.interest) {
      setSubmitStatus({
        type: 'error',
        message: 'Please select your interest (Step 1)'
      });
      setStep(1);
      return false;
    }
    
    if (!formData.startDate) {
      setSubmitStatus({
        type: 'error',
        message: 'Please select your start date (Step 1)'
      });
      setStep(1);
      return false;
    }
    
    if (!formData.fullName) {
      setSubmitStatus({
        type: 'error',
        message: 'Please enter your full name (Step 2)'
      });
      setStep(2);
      return false;
    }
    
    if (!formData.email) {
      setSubmitStatus({
        type: 'error',
        message: 'Please enter your email address (Step 2)'
      });
      setStep(2);
      return false;
    }
    
    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSubmitStatus({
        type: 'error',
        message: 'Please enter a valid email address'
      });
      setStep(2);
      return false;
    }
    
    if (!formData.mobile) {
      setSubmitStatus({
        type: 'error',
        message: 'Please enter your mobile number (Step 2)'
      });
      setStep(2);
      return false;
    }
    
    // Mobile validation (basic)
    if (formData.mobile.trim().length < 10) {
      setSubmitStatus({
        type: 'error',
        message: 'Please enter a valid mobile number (at least 10 digits)'
      });
      setStep(2);
      return false;
    }
    
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all required fields across all steps
    if (!validateAllFields()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      // Send data to our API endpoint
      const response = await fetch('/api/send-mail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit inquiry');
      }

      // Success!
      setSubmitStatus({
        type: 'success',
        message: data.message || 'Inquiry sent successfully! We\'ll respond within 24 hours.'
      });

      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          interest: "",
          startDate: "",
          fullName: "",
          email: "",
          mobile: "",
          note: ""
        });
        setStep(1);
        setSubmitStatus({ type: null, message: '' });
      }, 3000);

    } catch (error: any) {
      setSubmitStatus({
        type: 'error',
        message: error.message || 'Failed to send inquiry. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const isStepValid = () => {
    if (step === 1) {
      return formData.interest && formData.startDate;
    }
    if (step === 2) {
      return formData.fullName && formData.email && formData.mobile;
    }
    return true;
  };

  return (
    <section className="w-full bg-[#f4f7f8] px-6 py-12 font-jost">
      <div className="mx-auto max-w-[720px]">
        
        {/* Status Message */}
        {submitStatus.type && (
          <div className={`mb-6 p-4 rounded-xl text-sm ${
            submitStatus.type === 'success' 
              ? 'bg-green-50 text-green-800 border border-green-200' 
              : 'bg-red-50 text-red-800 border border-red-200'
          }`}>
            {submitStatus.message}
          </div>
        )}
        
        {/* Progress indicator */}
        <div className="mb-8 flex justify-between items-center">
          <div className="flex gap-2">
            <div className={`h-2 w-8 rounded-full ${step >= 1 ? 'bg-[#225475]' : 'bg-black/10'}`} />
            <div className={`h-2 w-8 rounded-full ${step >= 2 ? 'bg-[#225475]' : 'bg-black/10'}`} />
            <div className={`h-2 w-8 rounded-full ${step >= 3 ? 'bg-[#225475]' : 'bg-black/10'}`} />
          </div>
          <span className="text-sm text-[#5c6b73]">Step {step} of 3</span>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 rounded-2xl border border-black/10 bg-white p-8 shadow-[0_8px_24px_rgba(10,10,10,0.06)] md:p-10">
          
          {/* Step 1: Interest and Date */}
          {step === 1 && (
            <div className="space-y-6">
              <h3 className="mb-4 font-poppins text-xl font-semibold text-black">Your interest</h3>
              
              {/* Interest - Dropdown */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-black">
                  What are you interested in? <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <FileText className="absolute left-4 top-1/2 -translate-y-1/2 text-[#5c6b73]" size={20} />
                  <select
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    className="h-12 w-full appearance-none cursor-pointer rounded-xl border border-black/15 bg-white pr-10 pl-11 text-sm text-black outline-none transition-colors focus:border-[#225475] focus:ring-2 focus:ring-[#225475]/20 disabled:cursor-not-allowed disabled:bg-[#f4f7f8]"
                    required
                    disabled={isSubmitting}
                  >
                    <option value="" disabled>Select an option</option>
                    <option value="Want to be a Consultant">Want to be a Consultant</option>
                    <option value="Want to Consult a Professional">Want to Consult a Professional</option>
                  </select>
                  {/* Custom dropdown arrow */}
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg className="w-5 h-5 text-[#5c6b73]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Start Date */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-black">
                  Intended Start Date <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-[#5c6b73]" size={20} />
                  <input
                    type="date"
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleChange}
                    className="h-12 w-full rounded-xl border border-black/15 bg-white pr-4 pl-11 text-sm text-black outline-none transition-colors placeholder:text-black/40 focus:border-[#225475] focus:ring-2 focus:ring-[#225475]/20 disabled:cursor-not-allowed disabled:bg-[#f4f7f8]"
                    required
                    disabled={isSubmitting}
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Personal Information */}
          {step === 2 && (
            <div className="space-y-6">
              <h3 className="mb-4 font-poppins text-xl font-semibold text-black">Personal information</h3>
              
              {/* Full Name */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-black">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-[#5c6b73]" size={20} />
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="h-12 w-full rounded-xl border border-black/15 bg-white pr-4 pl-11 text-sm text-black outline-none transition-colors placeholder:text-black/40 focus:border-[#225475] focus:ring-2 focus:ring-[#225475]/20 disabled:cursor-not-allowed disabled:bg-[#f4f7f8]"
                    required
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-black">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-[#5c6b73]" size={20} />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="h-12 w-full rounded-xl border border-black/15 bg-white pr-4 pl-11 text-sm text-black outline-none transition-colors placeholder:text-black/40 focus:border-[#225475] focus:ring-2 focus:ring-[#225475]/20 disabled:cursor-not-allowed disabled:bg-[#f4f7f8]"
                    required
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              {/* Mobile */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-black">
                  Mobile Number <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-[#5c6b73]" size={20} />
                  <input
                    type="tel"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    placeholder="0917 000 0000"
                    className="h-12 w-full rounded-xl border border-black/15 bg-white pr-4 pl-11 text-sm text-black outline-none transition-colors placeholder:text-black/40 focus:border-[#225475] focus:ring-2 focus:ring-[#225475]/20 disabled:cursor-not-allowed disabled:bg-[#f4f7f8]"
                    required
                    disabled={isSubmitting}
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Additional Notes */}
          {step === 3 && (
            <div className="space-y-6">
              <h3 className="mb-4 font-poppins text-xl font-semibold text-black">Additional information</h3>
              
              {/* Note */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-black">
                  Additional notes <span className="font-normal text-[#5c6b73]">(optional)</span>
                </label>
                <textarea
                  name="note"
                  value={formData.note}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Tell us anything else you'd like us to know..."
                  className="w-full resize-none rounded-xl border border-black/15 bg-white px-4 py-3 text-sm text-black outline-none transition-colors placeholder:text-black/40 focus:border-[#225475] focus:ring-2 focus:ring-[#225475]/20 disabled:cursor-not-allowed disabled:bg-[#f4f7f8]"
                  disabled={isSubmitting}
                />
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex gap-4 pt-4">
            {step > 1 && (
              <button
                type="button"
                onClick={handlePrevious}
                disabled={isSubmitting}
                className="flex h-12 flex-1 items-center justify-center gap-2 rounded-full border border-black/15 bg-white text-sm font-semibold text-black transition-colors hover:border-black/40 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <ArrowLeft size={16} />
                <span>Previous</span>
              </button>
            )}
            
            {step < 3 ? (
              <button
                type="button"
                onClick={(e) => handleNext(e)}
                disabled={isSubmitting || !isStepValid()}
                className={`flex h-12 flex-1 items-center justify-center gap-2 rounded-full bg-[#225475] text-sm font-semibold text-white transition-colors hover:bg-[#1b445e] ${
                  isSubmitting || !isStepValid() ? 'cursor-not-allowed opacity-50' : ''
                }`}
              >
                <span>Next</span>
                <ArrowRight size={16} />
              </button>
            ) : (
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex h-12 flex-1 flex-col items-center justify-center rounded-full bg-[#225475] text-sm font-semibold text-white transition-colors hover:bg-[#1b445e] disabled:cursor-not-allowed disabled:opacity-50"
              >
                {isSubmitting ? 'Sending...' : 'Submit'}
              </button>
            )}
          </div>

          {/* Privacy note */}
          {step === 3 && (
            <p className="text-center text-xs text-[#5c6b73]">You will also receive free training material.</p>
          )}
          <p className="mt-4 text-center text-xs text-[#5c6b73]">
            By submitting this form, you agree to our Terms of Service and Privacy Policy
          </p>

        </form>

      </div>
    </section>
  );
}