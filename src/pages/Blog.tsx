import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

const blogPosts = [
  {
    id: 1,
    title: 'The Future of Web Development',
    excerpt: 'Exploring emerging technologies and trends in web development.',
    date: '2024-03-01',
  },
  {
    id: 2,
    title: 'Mastering SEO in 2024',
    excerpt: "Tips and strategies for improving your website's search engine rankings.",
    date: '2024-02-15',
  },
  {
    id: 3,
    title: 'The Impact of AI on Digital Marketing',
    excerpt: 'How artificial intelligence is revolutionizing the digital marketing landscape.',
    date: '2024-01-30',
  },
];

const Blog = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-8"
    >
      <Helmet>
        <title>Blog - Elisha Ejimofor | Web Development & Digital Marketing Insights</title>
        <meta name="description" content="Read the latest insights on web development, digital marketing, and AI from Elisha Ejimofor." />
      </Helmet>
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      <div className="grid gap-8">
        {blogPosts.map((post) => (
          <motion.article
            key={post.id}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-md p-6"
          >
            <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
            <p className="text-gray-600 mb-4">{post.excerpt}</p>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">{post.date}</span>
              <button className="text-indigo-600 hover:text-indigo-800">Read More</button>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.div>
  );
};

export default Blog;