import React from 'react';
import { motion } from 'framer-motion';

const pageVariants = {
  initial: {
    opacity: 0,
  },
  in: {
    opacity: 1,
    transition: { duration: 0.5 }
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.3 }
  }
};

const blogPosts = [
  {
    id: 1,
    title: "Getting Started with React Development",
    excerpt: "Learn the fundamentals of React and start building modern web applications with this powerful JavaScript library.",
    date: "April 15, 2025",
    author: "John Smith",
    category: "Web Development",
    imageUrl: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2"
  },
  {
    id: 2,
    title: "The Future of AI in Education",
    excerpt: "Explore how artificial intelligence is transforming the education sector and creating new opportunities for learners.",
    date: "April 10, 2025",
    author: "Sarah Johnson",
    category: "AI & Machine Learning",
    imageUrl: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485"
  },
  {
    id: 3,
    title: "Mobile App Development Trends in 2025",
    excerpt: "Stay ahead of the curve with these emerging trends that are shaping the future of mobile application development.",
    date: "April 5, 2025",
    author: "Michael Chen",
    category: "Mobile Development",
    imageUrl: "https://images.unsplash.com/photo-1551650975-87deedd944c3"
  },
  {
    id: 4,
    title: "Cybersecurity Best Practices for Businesses",
    excerpt: "Protect your organization from cyber threats with these essential security measures and strategies.",
    date: "March 28, 2025",
    author: "Lisa Williams",
    category: "Cybersecurity",
    imageUrl: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7"
  }
];

const BlogView = () => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="exit"
      variants={pageVariants}
      className="container mx-auto px-4 max-w-7xl py-16"
    >
      <h1 className="text-4xl md:text-5xl font-bold mb-8 font-heading">Blog</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <motion.div 
            key={post.id} 
            className="bg-white rounded-lg shadow-md overflow-hidden"
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <img 
              src={post.imageUrl} 
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="text-sm text-blue-600 font-medium mb-2">{post.category}</div>
              <h2 className="text-xl font-bold mb-2">{post.title}</h2>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-500">
                  {post.date} • {post.author}
                </div>
                <a 
                  href="#" 
                  className="text-blue-600 hover:underline text-sm font-medium"
                >
                  Read More
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default BlogView;
