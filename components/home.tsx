import React from 'react';
import { mockPosts } from './mockData'; 
import Link from 'next/link';


const features = [
  { title: 'Fast Performance', description: 'Experience blazing fast speeds with our optimized code.' },
  { title: 'Responsive Design', description: 'Enjoy a seamless experience on any device.' },
  { title: 'Customizable', description: 'Easily customize the design and functionality to fit your needs.' },
];

const stats = [
  {
    data: "35K",
    title: "Customers"
  },
  {
    data: "40+",
    title: "Countries"
  },
  {
    data: "30M+",
    title: "Total revenue"
  },
];

const Home: React.FC = () => {
  const posts = mockPosts;

  return (
    <div className="relative z-[1000] min-h-screen bg-black text-white">
      {/* Blog Info Section */}
      <section className="dark:bg-gray-900">
  <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
    <div className="mr-auto place-self-center lg:col-span-7">
      <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
        Welcome To Our Blog
      </h1>
      <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
      Join our community to learn, grow, and stay informed with valuable tips and resources for success.
      </p>
      <Link href="/login" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
  Get started
  <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
</Link>
  <button>
      <Link href="/blog" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-300 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
        Blog
      </Link>
  </button>

    </div>
    <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
      <img src="/blogs1.png" alt="mockup" />
    </div>                
  </div>
</section>

      {/* Stats Section */}
      <section className="py-28 ">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-white text-3xl font-semibold sm:text-4xl">
              Our customers are always happy
            </h3>
            <p className="mt-3 text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi venenatis sollicitudin quam ut tincidunt.
            </p>
          </div>
          <div className="mt-12">
            <ul className="flex flex-col gap-4 items-center justify-center sm:flex-row">
              {stats.map((item, idx) => (
                <li key={idx} className="w-full text-center bg-gray-800 px-12 py-4 rounded-lg sm:w-auto">
                  <h4 className="text-4xl text-white font-semibold">{item.data}</h4>
                  <p className="mt-3 text-gray-400 font-medium">{item.title}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <div className="relative z-10 p-4">
        <div className="mt-12 max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-gray-800 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
              >
                <h3 className="text-2xl font-semibold mb-3 text-white">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
