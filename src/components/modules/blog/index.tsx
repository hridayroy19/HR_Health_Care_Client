import Image from 'next/image';
import React from 'react';

// Main App component
const BlogManagement = () => {
  // Mock data for blog posts. In a real app, this would be fetched from an API or CMS.
  const blogPosts = [
    {
      id: 1,
      title: "The Future of Healthcare: Online Consultations",
      excerpt: "Online doctor consultations are revolutionizing healthcare delivery, offering convenience and accessibility like never before. Learn how this technology is changing the patient experience.",
      image: "https://placehold.co/800x600/6B7280/FFFFFF?text=Article+1",
      date: "October 26, 2023",
    },
    {
      id: 2,
      title: "5 Common Health Myths Debunked by Doctors",
      excerpt: "Don't fall for misinformation. Our doctors are here to separate fact from fiction and help you make informed decisions about your health.",
      image: "https://placehold.co/800x600/6B7280/FFFFFF?text=Article+2",
      date: "October 24, 2023",
    },
    {
      id: 3,
      title: "Mental Wellness: The Importance of a Digital Check-up",
      excerpt: "Mental health is just as important as physical health. Discover how online consultations can provide a safe and confidential space for discussing mental wellness.",
      image: "https://placehold.co/800x600/6B7280/FFFFFF?text=Article+3",
      date: "October 22, 2023",
    },
    {
      id: 4,
      title: "How to Prepare for Your First Virtual Doctor Visit",
      excerpt: "Your first online appointment can be a breeze with the right preparation. We've compiled a checklist to ensure you get the most out of your consultation.",
      image: "https://placehold.co/800x600/6B7280/FFFFFF?text=Article+4",
      date: "October 20, 2023",
    },
    {
      id: 5,
      title: "Pediatric Care: A Parent's Guide to Online Doctor Visits",
      excerpt: "Online consultations are a convenient way to manage your child's health. Learn about the benefits and best practices for virtual pediatric care.",
      image: "https://placehold.co/800x600/6B7280/FFFFFF?text=Article+5",
      date: "October 18, 2023",
    },
    {
      id: 6,
      title: "Managing Chronic Conditions with Telemedicine",
      excerpt: "Telemedicine is a powerful tool for individuals managing chronic conditions, offering ongoing support and monitoring from the comfort of home.",
      image: "https://placehold.co/800x600/6B7280/FFFFFF?text=Article+6",
      date: "October 16, 2023",
    },
  ];

  return (
    <div className="bg-gray-50 mt-24 px-24 dark:bg-gray-950 min-h-screen text-gray-900 dark:text-gray-50 font-sans">
      <div className="container mx-auto px-4 py-8 md:py-16">
        <header className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold bg-clip-text bg-gradient-to-r text-purple-600 mb-2">
            The Telehealth Blog
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Your trusted source for insights and updates on online doctor consultations and modern healthcare.
          </p>
        </header>

        {/* Blog Post Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="relative group bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
              <Image
                height={100}
                width={200}
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105 rounded-t-xl"
              />
              <div className="p-6">
                <span className="text-xs font-semibold text-purple-600 dark:text-purple-400 uppercase tracking-wider mb-2 block">
                  {post.date}
                </span>
                <h2 className="text-2xl font-semibold leading-tight mb-2">
                  {post.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  {post.excerpt}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center text-purplel-600 dark:text-purple-400 font-medium text-sm transition-colors duration-200 hover:text-purple-600 dark:hover:text-purple-400"
                >
                  Read more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="ml-1"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-purple-50 dark:bg-teal-900/20 p-8 rounded-2xl shadow-inner border border-purple-200 dark:border-purple-800">
          <h3 className="text-3xl font-bold mb-3 text-gray-800 dark:text-gray-200">
            Ready to experience convenient healthcare?
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 max-w-xl mx-auto">
            Book an appointment with a certified doctor from the comfort of your home.
          </p>
          <a
            href="#"
            className="inline-block bg-gradient-to-r from-purple-500 to-purple-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            Book Now
          </a>
        </div>
        <div className='mt-16'>
            <p className='text-purple-800 text-sm'>
                Doctor On Demand by Included Health telehealth services provide online medical care for urgent care, mental health, and therapy.

Over 100 million people have access to our online providers, therapists, and psychiatrists at a reduced cost through their employer or health plan. We’re available 24/7 to treat colds, the flu, UTIs, anxiety, depression, acne, and more.

The telemedicine services made available through Doctor On Demand by Included Health are provided by licensed physicians practicing within a group of independently owned professional practices collectively known as “Doctor On Demand Professionals”. These professional practices provide services via the Doctor On Demand® telehealth platform. Included Health, Inc. does not itself provide any physician, mental health or other healthcare provider services.
            </p>
        </div>
      </div>
    </div>
  );
};

export default BlogManagement;
