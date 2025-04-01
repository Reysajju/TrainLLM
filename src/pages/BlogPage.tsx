import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { BlogPost } from '../types';
import SEO from '../components/SEO';

const posts: BlogPost[] = [
  {
    id: '1',
    title: 'Understanding LoRA for Efficient Fine-Tuning',
    excerpt: 'Learn how Low-Rank Adaptation (LoRA) is revolutionizing the way we fine-tune large language models, making the process more efficient and accessible.',
    date: 'March 15, 2024',
    author: 'Dr. Emily Chen',
    readTime: '8 min read',
    category: 'Technical',
  },
  {
    id: '2',
    title: 'The Future of Custom LLMs in Enterprise',
    excerpt: 'Explore how businesses are leveraging custom-trained language models to improve their operations and create unique competitive advantages.',
    date: 'March 10, 2024',
    author: 'Marcus Rodriguez',
    readTime: '6 min read',
    category: 'Business',
  },
  {
    id: '3',
    title: 'Quantization Techniques for Model Optimization',
    excerpt: 'A deep dive into various quantization methods and their impact on model performance, size, and inference speed.',
    date: 'March 5, 2024',
    author: 'Sarah Park',
    readTime: '10 min read',
    category: 'Technical',
  },
  {
    id: '4',
    title: 'Best Practices for Dataset Preparation',
    excerpt: 'Essential tips and techniques for preparing high-quality training data that leads to better fine-tuned models.',
    date: 'February 28, 2024',
    author: 'Dr. Emily Chen',
    readTime: '7 min read',
    category: 'Guide',
  },
];

const categories = ['All', 'Technical', 'Business', 'Guide'];

const blogImages = [
  'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800',
  'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800',
  'https://images.unsplash.com/photo-1655720828018-edd2daec9349?q=80&w=800',
  'https://images.unsplash.com/photo-1673187359209-2a7d69c7eabd?q=80&w=800',
];

const authorImages = [
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100',
  'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100',
  'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=100',
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100',
];

export default function BlogPage() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <SEO
        title="Blog - AI and LLM Fine-Tuning Insights"
        description="Latest updates, guides, and insights about LLM fine-tuning, AI development, and machine learning best practices."
        canonical="https://trainllm.magnatesempire.com/blog"
      />
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
          >
            TrainLLM Insights & News
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-2 text-lg leading-8 text-gray-600"
          >
            Latest updates, guides, and insights about LLM fine-tuning and AI development.
          </motion.p>
          
          <div className="mt-8 flex justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 rounded-full text-sm font-medium text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 transition-all duration-200"
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {posts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-start bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-200"
            >
              <div className="w-full">
                <div className="relative w-full">
                  <img
                    src={blogImages[index]}
                    alt={post.title}
                    className="aspect-[2/1] w-full rounded-t-2xl bg-gray-100 object-cover sm:aspect-[3/2]"
                  />
                </div>
                <div className="px-6 py-8">
                  <div className="flex items-center gap-x-4 text-xs">
                    <time dateTime={post.date} className="text-gray-500">
                      {post.date}
                    </time>
                    <div className="flex items-center gap-1 text-gray-500">
                      <Clock className="h-4 w-4" />
                      {post.readTime}
                    </div>
                    <span className="inline-flex items-center rounded-full bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700">
                      {post.category}
                    </span>
                  </div>
                  <div className="group relative">
                    <h3 className="mt-3 text-xl font-semibold leading-6 text-gray-900 group-hover:text-indigo-600 transition-colors">
                      <Link to={`/blog/${post.id}`}>
                        <span className="absolute inset-0" />
                        {post.title}
                      </Link>
                    </h3>
                    <p className="mt-5 text-sm leading-6 text-gray-600 line-clamp-3">{post.excerpt}</p>
                  </div>
                  <div className="relative mt-8 flex items-center gap-x-4">
                    <img
                      src={authorImages[index]}
                      alt={post.author}
                      className="h-10 w-10 rounded-full bg-gray-100 object-cover"
                    />
                    <div className="text-sm leading-6">
                      <p className="font-semibold text-gray-900">
                        {post.author}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-20 rounded-2xl bg-gray-50 py-16 px-8 sm:py-24 sm:px-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">Subscribe to Our Newsletter</h2>
          <p className="mt-4 text-lg text-gray-600">Get the latest insights and updates delivered to your inbox.</p>
          <form className="mt-8 sm:mx-auto sm:max-w-xl" data-netlify="true" name="newsletter">
            <input type="hidden" name="form-name" value="newsletter" />
            <div className="sm:flex gap-4">
              <input
                type="email"
                name="email"
                required
                className="w-full rounded-lg border-0 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                placeholder="Enter your email"
              />
              <button
                type="submit"
                className="mt-4 sm:mt-0 w-full sm:w-auto rounded-lg bg-indigo-600 px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all duration-200"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}