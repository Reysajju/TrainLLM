import { motion } from 'framer-motion';
import { Brain, Target, Lightbulb, Users } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"
            >
              About TrainLLM
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-lg leading-8 text-gray-600"
            >
              We're on a mission to democratize AI by making LLM fine-tuning accessible to everyone.
            </motion.p>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
      </div>

      {/* Mission section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">Our Mission</h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                To empower developers, researchers, and businesses of all sizes to easily create and deploy custom Large Language Models. We believe that by making AI more accessible, we can unlock new possibilities and drive innovation across industries.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">Our Vision</h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                A world where anyone with domain expertise can harness the power of AI without getting bogged down by technical complexity. We're building the tools that make this future possible.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Values section */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Values</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              These core principles guide everything we do at TrainLLM.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {[
                {
                  name: 'Accessibility',
                  description: 'Making advanced AI capabilities available to everyone, regardless of technical background.',
                  icon: Users,
                },
                {
                  name: 'Innovation',
                  description: 'Constantly pushing boundaries to simplify complex processes and create better solutions.',
                  icon: Lightbulb,
                },
                {
                  name: 'Impact',
                  description: 'Focusing on meaningful applications that create real value for our users and society.',
                  icon: Target,
                },
              ].map((value) => (
                <div key={value.name} className="flex flex-col">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                      <value.icon className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    {value.name}
                  </dt>
                  <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{value.description}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* Team section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Team</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We're a diverse team of AI researchers, engineers, and product designers united by our passion for making AI accessible.
          </p>
          <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
            {[
              {
                name: 'Dr. Emily Chen',
                role: 'Founder & CEO',
                image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
              },
              {
                name: 'Marcus Rodriguez',
                role: 'CTO',
                image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
              },
              {
                name: 'Sarah Park',
                role: 'Head of Product',
                image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
              },
            ].map((person) => (
              <div key={person.name} className="text-center">
                <img
                  className="mx-auto h-24 w-24 rounded-full"
                  src={person.image}
                  alt={person.name}
                />
                <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                <p className="text-sm leading-6 text-gray-600">{person.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}