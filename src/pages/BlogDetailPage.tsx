import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import type { BlogPost } from '../types';

// This would typically come from an API/database
const blogPosts: Record<string, BlogPost & { content: string }> = {
  '1': {
    id: '1',
    title: 'Understanding LoRA for Efficient Fine-Tuning',
    excerpt: 'Learn how Low-Rank Adaptation (LoRA) is revolutionizing the way we fine-tune large language models, making the process more efficient and accessible.',
    date: 'March 15, 2024',
    author: 'Dr. Emily Chen',
    readTime: '8 min read',
    category: 'Technical',
    content: `
      <h2>Introduction to LoRA</h2>
      <p>Low-Rank Adaptation (LoRA) is a revolutionary technique that has transformed the landscape of LLM fine-tuning. By reducing the number of trainable parameters while maintaining model quality, LoRA makes fine-tuning more accessible and cost-effective.</p>
      
      <h2>How LoRA Works</h2>
      <p>LoRA works by adding small, trainable rank decomposition matrices to the existing weights of the model. This approach allows for efficient adaptation of the model to new tasks without modifying the original weights.</p>
      
      <h2>Benefits of Using LoRA</h2>
      <ul>
        <li>Reduced memory footprint</li>
        <li>Faster training times</li>
        <li>Lower computational costs</li>
        <li>Comparable performance to full fine-tuning</li>
      </ul>
      
      <h2>Implementation Best Practices</h2>
      <p>When implementing LoRA for your fine-tuning needs, consider these key factors:</p>
      <ul>
        <li>Choosing the right rank for your use case</li>
        <li>Selecting appropriate layers for adaptation</li>
        <li>Balancing model performance and efficiency</li>
      </ul>
    `
  },
  '2': {
    id: '2',
    title: 'The Future of Custom LLMs in Enterprise',
    excerpt: 'Explore how businesses are leveraging custom-trained language models to improve their operations and create unique competitive advantages.',
    date: 'March 10, 2024',
    author: 'Marcus Rodriguez',
    readTime: '6 min read',
    category: 'Business',
    content: `
      <h2>The Rise of Custom LLMs</h2>
      <p>As businesses increasingly recognize the potential of AI, custom-trained language models are becoming a crucial tool for gaining competitive advantages and improving operational efficiency.</p>
      
      <h2>Business Applications</h2>
      <p>Custom LLMs are transforming various aspects of enterprise operations:</p>
      <ul>
        <li>Customer service automation</li>
        <li>Document processing and analysis</li>
        <li>Internal knowledge management</li>
        <li>Product development assistance</li>
      </ul>
      
      <h2>Implementation Strategies</h2>
      <p>Successfully implementing custom LLMs requires careful planning and consideration of:</p>
      <ul>
        <li>Data quality and preparation</li>
        <li>Model selection and training approach</li>
        <li>Integration with existing systems</li>
        <li>Monitoring and maintenance</li>
      </ul>
    `
  }
};

export default function BlogDetailPage() {
  const { id } = useParams();
  const post = blogPosts[id || ''];

  if (!post) {
    return <div className="min-h-screen flex items-center justify-center">Post not found</div>;
  }

  return (
    <div className="bg-white py-24 sm:py-32">
      <SEO
        title={post.title}
        description={post.excerpt}
        type="article"
        canonical={`https://trainllm.magnatesempire.com/blog/${post.id}`}
      />
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl"
        >
          <div className="flex items-center gap-x-4 text-xs mb-6">
            <time dateTime={post.date} className="text-gray-500">
              {post.date}
            </time>
            <span className="inline-flex items-center rounded-full bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700">
              {post.category}
            </span>
          </div>
          
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-8">
            {post.title}
          </h1>
          
          <div className="flex items-center gap-x-4 mb-12">
            <img
              src={`https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&h=100&fit=crop`}
              alt={post.author}
              className="h-10 w-10 rounded-full bg-gray-100"
            />
            <div className="text-sm leading-6">
              <p className="font-semibold text-gray-900">{post.author}</p>
              <p className="text-gray-600">{post.readTime}</p>
            </div>
          </div>
          
          <div 
            className="prose prose-lg prose-indigo mx-auto"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </motion.article>
      </div>
    </div>
  );
}