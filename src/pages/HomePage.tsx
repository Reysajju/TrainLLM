import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Brain, Cpu, Cloud, Lock, ChevronRight, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function HomePage() {
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const hasSeenPopup = localStorage.getItem('hasSeenPopup');
    if (!hasSeenPopup) {
      const timer = setTimeout(() => setShowPopup(true), 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleGetEarlyAccess = () => {
    navigate('/contact');
  };

  const handleSubmitLead = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    localStorage.setItem('hasSeenPopup', 'true');
    setShowPopup(false);
    navigate('/contact');
  };

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2 lg:items-center">
            <div className="lg:pr-8">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"
              >
                Fine-Tune LLMs Effortlessly in the Cloud
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-6 text-lg leading-8 text-gray-600"
              >
                TrainLLM simplifies custom model creation. Upload your data, configure advanced options like LoRA, and leverage scalable cloud power without the MLOps headache.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mt-10 flex items-center gap-x-6"
              >
                <button
                  onClick={handleGetEarlyAccess}
                  className="rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all duration-200 transform hover:scale-105"
                >
                  Get Early Access
                </button>
                <a href="src/pages/ContactPage.tsx" className="text-sm font-semibold leading-6 text-gray-900 flex items-center gap-1 hover:text-indigo-600 transition-colors">
                  Learn more <ChevronRight className="h-4 w-4" />
                </a>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative"
            >
              <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-gray-50">
                <img
                  src="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop"
                  alt="AI Training Visualization"
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600/20 to-transparent mix-blend-multiply rounded-2xl" />
              </div>
            </motion.div>
          </div>
        </div>
        <div className="absolute inset-x-0 -z-10 transform-gpu overflow-hidden blur-3xl" aria-hidden="true">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
        </div>
      </section>

      {/* Pain Points Section */}
      <section id="features" className="py-24 sm:py-32 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">Stop Wrestling with Complexity</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Everything you need to train custom LLMs
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Focus on your data and goals, not infrastructure. TrainLLM handles the complex MLOps so you can focus on creating value.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {[
                {
                  name: 'Zero Infrastructure Headache',
                  description: 'No need to manage complex GPU clusters or worry about scaling. We handle all the infrastructure for you.',
                  icon: Cloud,
                },
                {
                  name: 'Advanced Techniques Made Simple',
                  description: 'LoRA, quantization, and other optimization techniques are just a few clicks away.',
                  icon: Cpu,
                },
                {
                  name: 'Enterprise-Grade Security',
                  description: 'Your data and models are protected with industry-leading security measures and compliance standards.',
                  icon: Lock,
                },
              ].map((feature) => (
                <div key={feature.name} className="flex flex-col">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                      <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{feature.description}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Expert Opinions Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">Recognized Potential</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              The Future of Accessible AI
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mt-20 lg:max-w-none lg:grid-cols-2">
            {[
              {
                quote: "TrainLLM addresses a critical bottleneck in AI adoption. Simplifying fine-tuning democratizes powerful AI capabilities.",
                author: "Dr. Tehmeena Abbasi",
                title: "AI Research Director",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
              },
              {
                quote: "We see significant potential in platforms like TrainLLM that lower the barrier to entry for specialized AI model creation.",
                author: "Qais Muhammad",
                title: "Partner, Future Ventures Capital",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
              },
            ].map((testimonial) => (
              <div key={testimonial.author} className="flex flex-col gap-6 bg-white p-8 ring-1 ring-gray-900/10 rounded-2xl">
                <div className="flex items-center gap-x-4">
                  <img className="h-12 w-12 rounded-full" src={testimonial.image} alt="" />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.author}</div>
                    <div className="text-sm leading-6 text-gray-600">{testimonial.title}</div>
                  </div>
                </div>
                <p className="text-gray-600 italic">{testimonial.quote}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Lead Capture Popup */}
      {showPopup && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-gray-500 bg-opacity-75 transition-opacity">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <div className="relative transform overflow-hidden rounded-2xl bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
              <div className="absolute right-0 top-0 pr-4 pt-4">
                <button
                  type="button"
                  className="rounded-lg bg-white p-2 text-gray-400 hover:text-gray-500 hover:bg-gray-100 transition-all duration-200"
                  onClick={() => setShowPopup(false)}
                >
                  <span className="sr-only">Close</span>
                  <X className="h-6 w-6" />
                </button>
              </div>
              <div>
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-indigo-100">
                  <Brain className="h-8 w-8 text-indigo-600" />
                </div>
                <div className="mt-4 text-center">
                  <h3 className="text-2xl font-bold leading-6 text-gray-900">
                    Join the AI Revolution
                  </h3>
                  <div className="mt-3">
                    <p className="text-lg text-gray-500">
                      Be among the first to experience the future of LLM fine-tuning.
                    </p>
                  </div>
                </div>
              </div>
              <form onSubmit={handleSubmitLead} className="mt-6" data-netlify="true" name="early-access">
                <input type="hidden" name="form-name" value="early-access" />
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="block w-full rounded-lg border-0 py-3 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 transition-all duration-200"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="block w-full rounded-lg border-0 py-3 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 transition-all duration-200"
                      placeholder="you@example.com"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      id="company"
                      className="block w-full rounded-lg border-0 py-3 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 transition-all duration-200"
                      placeholder="Your company name"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="mt-6 w-full rounded-lg bg-indigo-600 px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all duration-200 transform hover:scale-105"
                >
                  Join Waitlist
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}