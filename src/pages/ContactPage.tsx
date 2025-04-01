import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Building2, Users, Brain } from 'lucide-react';
import { useState } from 'react';
import SEO from '../components/SEO';

const industryOptions = [
  'Technology',
  'Healthcare',
  'Finance',
  'Education',
  'Manufacturing',
  'Retail',
  'Other'
];

const companySizeOptions = [
  '1-10 employees',
  '11-50 employees',
  '51-200 employees',
  '201-500 employees',
  '501-1000 employees',
  '1000+ employees'
];

const useCaseOptions = [
  'Customer Support',
  'Content Generation',
  'Data Analysis',
  'Research',
  'Education',
  'Healthcare',
  'Legal',
  'Other'
];

const experienceLevelOptions = [
  'Beginner - New to AI/ML',
  'Intermediate - Some AI/ML experience',
  'Advanced - Experienced with AI/ML',
  'Expert - Professional AI/ML practitioner'
];

const deploymentPreferenceOptions = [
  'Cloud-hosted solution',
  'On-premises deployment',
  'Hybrid setup',
  'Not sure yet'
];

export default function ContactPage() {
  const [isEarlyAccessForm, setIsEarlyAccessForm] = useState(false);

  return (
    <div className="bg-white">
      <SEO
        title="Contact Us - Get Early Access"
        description="Contact TrainLLM to learn more about our LLM fine-tuning platform or get early access to our beta program."
        canonical="https://trainllm.magnatesempire.com/contact"
      />
      
      <div className="relative isolate">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          {/* Form Toggle */}
          <div className="mx-auto max-w-2xl mb-12">
            <div className="flex justify-center p-1 rounded-full bg-gray-100">
              <button
                className={`flex-1 py-2 px-4 rounded-full text-sm font-medium transition-all ${
                  !isEarlyAccessForm 
                    ? 'bg-white shadow text-gray-900' 
                    : 'text-gray-500 hover:text-gray-900'
                }`}
                onClick={() => setIsEarlyAccessForm(false)}
              >
                Contact Us
              </button>
              <button
                className={`flex-1 py-2 px-4 rounded-full text-sm font-medium transition-all ${
                  isEarlyAccessForm 
                    ? 'bg-white shadow text-gray-900' 
                    : 'text-gray-500 hover:text-gray-900'
                }`}
                onClick={() => setIsEarlyAccessForm(true)}
              >
                Early Access Application
              </button>
            </div>
          </div>

          <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2 gap-x-16">
            {/* Left Column */}
            <div className="relative lg:static">
              <div className="mx-auto max-w-xl lg:mx-0">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                    {isEarlyAccessForm ? 'Apply for Early Access' : 'Get in Touch'}
                  </h1>
                  <p className="mt-6 text-lg leading-8 text-gray-600">
                    {isEarlyAccessForm
                      ? "Join the waitlist to be among the first to experience TrainLLM's revolutionary LLM fine-tuning platform."
                      : "Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible."}
                  </p>
                  <dl className="mt-10 space-y-4 text-base leading-7 text-gray-600">
                    <div className="flex gap-x-4">
                      <dt className="flex-none">
                        <span className="sr-only">Email</span>
                        <Mail className="h-7 w-6 text-gray-400" aria-hidden="true" />
                      </dt>
                      <dd>
                        <a className="hover:text-gray-900" href="mailto:contact@trainllm.magnatesempire.com">
                          contact@trainllm.magnatesempire.com
                        </a>
                      </dd>
                    </div>
                    <div className="flex gap-x-4">
                      <dt className="flex-none">
                        <span className="sr-only">Phone</span>
                        <Phone className="h-7 w-6 text-gray-400" aria-hidden="true" />
                      </dt>
                      <dd>
                        <a className="hover:text-gray-900" href="tel:+1 (555) 234-5678">
                          +1 (555) 234-5678
                        </a>
                      </dd>
                    </div>
                    <div className="flex gap-x-4">
                      <dt className="flex-none">
                        <span className="sr-only">Location</span>
                        <MapPin className="h-7 w-6 text-gray-400" aria-hidden="true" />
                      </dt>
                      <dd>San Francisco, CA</dd>
                    </div>
                  </dl>
                </motion.div>
              </div>
            </div>

            {/* Right Column - Forms */}
            <div>
              {!isEarlyAccessForm ? (
                // Simple Contact Form
                <motion.form
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  method="POST"
                  className="grid grid-cols-1 gap-y-6"
                  data-netlify="true"
                  name="contact"
                >
                  <input type="hidden" name="form-name" value="contact" />
                  
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      autoComplete="name"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      autoComplete="email"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      required
                    />
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      Send Message
                    </button>
                  </div>
                </motion.form>
              ) : (
                // Early Access Application Form
                <motion.form
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  method="POST"
                  className="grid grid-cols-1 gap-y-6"
                  data-netlify="true"
                  name="early-access"
                >
                  <input type="hidden" name="form-name" value="early-access" />
                  
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                        First Name
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        id="firstName"
                        autoComplete="given-name"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                        Last Name
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        id="lastName"
                        autoComplete="family-name"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Work Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      autoComplete="email"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      autoComplete="tel"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      id="company"
                      autoComplete="organization"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-700">
                      Job Title
                    </label>
                    <input
                      type="text"
                      name="jobTitle"
                      id="jobTitle"
                      autoComplete="organization-title"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="industry" className="block text-sm font-medium text-gray-700">
                      Industry
                    </label>
                    <select
                      id="industry"
                      name="industry"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      required
                    >
                      <option value="">Select an industry</option>
                      {industryOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="companySize" className="block text-sm font-medium text-gray-700">
                      Company Size
                    </label>
                    <select
                      id="companySize"
                      name="companySize"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      required
                    >
                      <option value="">Select company size</option>
                      {companySizeOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="useCases" className="block text-sm font-medium text-gray-700">
                      Primary Use Cases (Select all that apply)
                    </label>
                    <div className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-2">
                      {useCaseOptions.map((option) => (
                        <div key={option} className="flex items-center">
                          <input
                            type="checkbox"
                            id={`useCase-${option}`}
                            name="useCases"
                            value={option}
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label htmlFor={`useCase-${option}`} className="ml-2 text-sm text-gray-700">
                            {option}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="experienceLevel" className="block text-sm font-medium text-gray-700">
                      AI/ML Experience Level
                    </label>
                    <select
                      id="experienceLevel"
                      name="experienceLevel"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      required
                    >
                      <option value="">Select experience level</option>
                      {experienceLevelOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="deploymentPreference" className="block text-sm font-medium text-gray-700">
                      Preferred Deployment Model
                    </label>
                    <select
                      id="deploymentPreference"
                      name="deploymentPreference"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      required
                    >
                      <option value="">Select deployment preference</option>
                      {deploymentPreferenceOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="timeline" className="block text-sm font-medium text-gray-700">
                      Expected Implementation Timeline
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      required
                    >
                      <option value="">Select timeline</option>
                      <option value="immediate">Immediate (1-3 months)</option>
                      <option value="short">Short term (3-6 months)</option>
                      <option value="medium">Medium term (6-12 months)</option>
                      <option value="long">Long term (12+ months)</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-gray-700">
                      Estimated Monthly Budget
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      required
                    >
                      <option value="">Select budget range</option>
                      <option value="0-1000">$0 - $1,000</option>
                      <option value="1001-5000">$1,001 - $5,000</option>
                      <option value="5001-10000">$5,001 - $10,000</option>
                      <option value="10001-50000">$10,001 - $50,000</option>
                      <option value="50001+">$50,001+</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-700">
                      Additional Information
                    </label>
                    <textarea
                      id="additionalInfo"
                      name="additionalInfo"
                      rows={4}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      placeholder="Please share any additional requirements or questions you have."
                    />
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      Submit Application
                      <Brain className="ml-2 h-5 w-5" />
                    </button>
                  </div>
                </motion.form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}