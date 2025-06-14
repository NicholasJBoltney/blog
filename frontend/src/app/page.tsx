import Image from "next/image";
import Link from "next/link";

// Mock data - In a real application, this would come from a database
const blogPosts = [
  {
    id: 'first-post',
    title: 'Getting Started with Next.js',
    metaDescription: 'Next.js is a powerful React framework that enables server-side rendering and static site generation.',
    author: {
      name: 'John Doe',
      profileImage: '/datebg.jpg'
    },
    introduction: {
      hook: 'Next.js: Your Gateway to Modern Web Development',
      overview: 'Next.js is a powerful React framework that enables server-side rendering and static site generation.'
    },
    categories: ['Web Development', 'JavaScript'],
    tags: ['Next.js', 'React']
  },
  {
    id: 'second-post',
    title: 'The Future of Web Development',
    metaDescription: 'Web development continues to evolve at a rapid pace, with new frameworks and tools emerging regularly.',
    author: {
      name: 'Jane Smith',
      profileImage: '/datebg.jpg'
    },
    introduction: {
      hook: 'The Future of Web Development',
      overview: 'Web development continues to evolve at a rapid pace, with new frameworks and tools emerging regularly.'
    },
    categories: ['Web Development', 'JavaScript'],
    tags: ['Web Development', 'JavaScript']
  }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-white dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Welcome to Our Blog
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Discover the latest insights, tutorials, and updates from our team
          </p>
          <Link
            href={`/admin`}
            className="inline-block px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Create a blog
          </Link>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-6">
                {/* Categories */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.categories.map((category) => (
                    <span
                      key={category}
                      className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full text-sm"
                    >
                      {category}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  {post.title}
                </h2>

                {/* Author */}
                <div className="flex items-center gap-3 mb-4">
                  {post.author.profileImage && (
                    <Image
                      src={post.author.profileImage}
                      alt={post.author.name}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                  )}
                  <span className="text-gray-600 dark:text-gray-300">
                    {post.author.name}
                  </span>
                </div>

                {/* Introduction */}
                <div className="mb-6">
                  <p className="text-gray-600 dark:text-gray-300 mb-2">
                    {post.introduction.hook}
                  </p>
                  <p className="text-gray-500 dark:text-gray-400">
                    {post.introduction.overview}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300 rounded text-sm"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Read More Button */}
                <Link
                  href={`/blog/${post.id}`}
                  className="inline-block px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                  Read More
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-white dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Stay Updated
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Subscribe to our newsletter for the latest blog posts and updates
          </p>
          <form className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
