import { motion } from 'framer-motion';
import { Activity, Database, Zap, Play, Pause, CheckCircle, XCircle, Brain, Settings, Cpu } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const stats = [
  { name: 'Active Jobs', value: '1', icon: Activity },
  { name: 'Completed Models', value: '3', icon: Database },
  { name: 'Credits Remaining', value: '500', icon: Zap },
];

const jobs = [
  {
    id: 1,
    name: 'Customer Support Assistant',
    model: 'DeepSeek-67B',
    status: 'running',
    progress: 65,
    startedAt: '2024-03-15T10:30:00',
    parameters: {
      lora_r: 8,
      lora_alpha: 16,
      learning_rate: '3e-4',
      batch_size: 4,
    },
  },
  {
    id: 2,
    name: 'Legal Document Analyzer',
    model: 'Qwen-72B',
    status: 'completed',
    progress: 100,
    startedAt: '2024-03-14T15:45:00',
    parameters: {
      lora_r: 16,
      lora_alpha: 32,
      learning_rate: '2e-4',
      batch_size: 8,
    },
  },
  {
    id: 3,
    name: 'Product Description Generator',
    model: 'Llama-2-70B',
    status: 'failed',
    progress: 45,
    startedAt: '2024-03-14T09:15:00',
    parameters: {
      lora_r: 4,
      lora_alpha: 8,
      learning_rate: '5e-4',
      batch_size: 2,
    },
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'running':
      return {
        bg: 'bg-blue-500',
        text: 'text-blue-700',
        light: 'bg-blue-50',
        border: 'border-blue-200',
        gradient: 'from-blue-500/20 to-blue-500/5',
      };
    case 'completed':
      return {
        bg: 'bg-green-500',
        text: 'text-green-700',
        light: 'bg-green-50',
        border: 'border-green-200',
        gradient: 'from-green-500/20 to-green-500/5',
      };
    case 'failed':
      return {
        bg: 'bg-red-500',
        text: 'text-red-700',
        light: 'bg-red-50',
        border: 'border-red-200',
        gradient: 'from-red-500/20 to-red-500/5',
      };
    default:
      return {
        bg: 'bg-gray-500',
        text: 'text-gray-700',
        light: 'bg-gray-50',
        border: 'border-gray-200',
        gradient: 'from-gray-500/20 to-gray-500/5',
      };
  }
};

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function DashboardPreview() {
  const [showEarlyAccessPopup, setShowEarlyAccessPopup] = useState(false);
  const navigate = useNavigate();

  const handleGetEarlyAccess = () => {
    navigate('/contact');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">Your Fine-Tuning Control Center</h1>
            <p className="mt-1 text-sm text-gray-500">
              This is a static preview of the TrainLLM dashboard. Sign up to access full functionality.
            </p>
          </div>
          <button
            type="button"
            className="rounded-full bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={() => setShowEarlyAccessPopup(true)}
          >
            Create New Fine-Tuning Job
          </button>
        </div>

        <div className="mt-8">
          <dl className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.name}
                className="relative overflow-hidden rounded-lg bg-white px-4 pb-12 pt-5 shadow sm:px-6 sm:pt-6"
              >
                <dt>
                  <div className="absolute rounded-md bg-indigo-500 p-3">
                    <stat.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  <p className="ml-16 truncate text-sm font-medium text-gray-500">{stat.name}</p>
                </dt>
                <dd className="ml-16 flex items-baseline pb-6 sm:pb-7">
                  <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="mt-8">
          <div className="sm:flex sm:items-center">
            <div className="sm:flex-auto">
              <h2 className="text-base font-semibold leading-6 text-gray-900">Recent Jobs</h2>
              <p className="mt-2 text-sm text-gray-700">
                A list of all recent fine-tuning jobs including their status, parameters, and progress.
              </p>
            </div>
          </div>
          <div className="mt-8 flow-root">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle">
                <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
                  {jobs.map((job) => {
                    const statusColor = getStatusColor(job.status);
                    return (
                      <div
                        key={job.id}
                        className={classNames(
                          'bg-white border-l-4 mb-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-200',
                          `border-l-${statusColor.bg}`
                        )}
                      >
                        <div className="px-6 py-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <h3 className="text-lg font-semibold text-gray-900">{job.name}</h3>
                              <span
                                className={classNames(
                                  'inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-medium',
                                  statusColor.light,
                                  statusColor.text
                                )}
                              >
                                {job.status === 'completed' && <CheckCircle className="h-3 w-3" />}
                                {job.status === 'running' && <Play className="h-3 w-3" />}
                                {job.status === 'failed' && <XCircle className="h-3 w-3" />}
                                {job.status.charAt(0).toUpperCase() + job.status.slice(1)}
                              </span>
                            </div>
                            <div className="text-sm text-gray-500">
                              Started: {new Date(job.startedAt).toLocaleString()}
                            </div>
                          </div>

                          <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4">
                            <div className="flex items-center space-x-2">
                              <Cpu className="h-4 w-4 text-gray-400" />
                              <span className="text-sm font-medium text-gray-900">{job.model}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Settings className="h-4 w-4 text-gray-400" />
                              <span className="text-sm text-gray-500">
                                LoRA (r={job.parameters.lora_r}, α={job.parameters.lora_alpha})
                              </span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Activity className="h-4 w-4 text-gray-400" />
                              <span className="text-sm text-gray-500">
                                LR: {job.parameters.learning_rate}
                              </span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Database className="h-4 w-4 text-gray-400" />
                              <span className="text-sm text-gray-500">
                                Batch: {job.parameters.batch_size}
                              </span>
                            </div>
                          </div>

                          <div className="mt-4">
                            <div className="flex items-center justify-between text-sm text-gray-500 mb-1">
                              <span>Progress</span>
                              <span>{job.progress}%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div
                                className={classNames(
                                  'h-2 rounded-full transition-all duration-500',
                                  statusColor.bg
                                )}
                                style={{ width: `${job.progress}%` }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Early Access Popup */}
      {showEarlyAccessPopup && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <div className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
              <div>
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100">
                  <Brain className="h-6 w-6 text-indigo-600" />
                </div>
                <div className="mt-3 text-center sm:mt-5">
                  <h3 className="text-2xl font-semibold leading-6 text-gray-900">
                    Coming Soon!
                  </h3>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Fine-tuning functionality is coming soon. Get early access and be among the first to try it out!
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-5 sm:mt-6 flex gap-3">
                <button
                  type="button"
                  className="inline-flex w-full justify-center rounded-full bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  onClick={handleGetEarlyAccess}
                >
                  Get Early Access
                </button>
                <button
                  type="button"
                  className="inline-flex w-full justify-center rounded-full bg-gray-100 px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-200"
                  onClick={() => setShowEarlyAccessPopup(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}