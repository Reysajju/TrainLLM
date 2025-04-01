import { Link } from 'react-router-dom';
import { Brain } from 'lucide-react';

const navigation = {
  solutions: [
    { name: 'Fine-Tuning', href: '/contact' },
    { name: 'Model Library', href: '/contact' },
    { name: 'Enterprise', href: '/contact' },
    { name: 'Pricing', href: '/contact' },
  ],
  support: [
    { name: 'Documentation', href: '/contact' },
    { name: 'API Reference', href: '/contact' },
    { name: 'Status', href: '/contact' },
    { name: 'Contact', href: '/contact' },
  ],
  company: [
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Careers', href: '/contact' },
    { name: 'Press', href: '/contact' },
  ],
  legal: [
    { name: 'Privacy', href: '/contact' },
    { name: 'Terms', href: '/contact' },
    { name: 'Cookie Policy', href: '/contact' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-900" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <Link to="/" className="flex items-center gap-2">
              <Brain className="h-8 w-8 text-indigo-500" />
              <span className="text-xl font-semibold text-white">TrainLLM</span>
            </Link>
            <p className="text-sm leading-6 text-gray-300">
              Empowering developers to fine-tune and deploy custom language models with ease.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Solutions</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.solutions.map((item) => (
                    <li key={item.name}>
                      <Link to={item.href} className="text-sm leading-6 text-gray-300 hover:text-white transition-colors">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">Support</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.support.map((item) => (
                    <li key={item.name}>
                      <Link to={item.href} className="text-sm leading-6 text-gray-300 hover:text-white transition-colors">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Company</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <Link to={item.href} className="text-sm leading-6 text-gray-300 hover:text-white transition-colors">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">Legal</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <Link to={item.href} className="text-sm leading-6 text-gray-300 hover:text-white transition-colors">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-gray-400">
            &copy; {new Date().getFullYear()} TrainLLM. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}