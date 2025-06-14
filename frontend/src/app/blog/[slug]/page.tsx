import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
// import { getBlogById } from '@/app/service/api';

// Mock data - In a real application, this would come from a database
const mockBlogPosts: Record<string, BlogPost> = {
  'first-post': {
    title: 'Getting Started with Next.js',
    metaDescription: 'Next.js is a powerful React framework that enables server-side rendering and static site generation. It provides an excellent developer experience with features like fast refresh, file-system based routing, and API routes.',
    author: {
      name: 'John Doe',
      bio: 'A passionate developer with a focus on web technologies.',
      profileImage: '/datebg.jpg'
    },
    tags: ['Next.js', 'React', 'Web Development'],
    categories: ['Web Development', 'JavaScript'],
    introduction: {
      hook: 'Next.js: Your Gateway to Modern Web Development',
      overview: 'Next.js is a powerful React framework that enables server-side rendering and static site generation. It provides an excellent developer experience with features like fast refresh, file-system based routing, and API routes.',
      valueProposition: 'One of the key benefits of Next.js is its ability to optimize performance through automatic code splitting and image optimization. This means your application will load faster and provide a better user experience.'
    },
    body: [
      {
        subheading: 'Key Features of Next.js',
        content: 'Next.js provides an excellent developer experience with features like fast refresh, file-system based routing, and API routes.',
        examples: ['Automatic code splitting', 'Image optimization'],
        visuals: ['/datebg.jpg', '/datebg.jpg'],
        tips: ['Use automatic code splitting to optimize your application', 'Optimize images for faster loading']
      },
      {
        subheading: 'The Future of Web Development',
        content: 'Modern web applications are expected to be fast, accessible, and provide a seamless experience across all devices. This has led to the rise of frameworks that prioritize performance and developer experience.',
        examples: ['Automatic code splitting', 'Image optimization'],
        visuals: ['/datebg.jpg', '/datebg.jpg'],
        tips: ['Use automatic code splitting to optimize your application', 'Optimize images for faster loading']
      }
    ],
    conclusion: {
      summary: 'Whether you\'re building a small personal project or a large-scale application, Next.js provides the tools and features you need to create modern, performant web applications.',
      finalThought: 'As we look to the future, web development will continue to focus on creating better user experiences while maintaining high performance and accessibility standards.'
    },
    callToAction: {
      prompt: 'Start building your next project with Next.js',
      actions: ['download', 'linkToRelatedContent']
    },
    relatedPosts: ['second-post'],
    socialShare: {
      enabled: true,
      platforms: ['twitter', 'facebook', 'linkedin', 'email']
    }
  },
  'second-post': {
    title: 'The Future of Web Development',
    metaDescription: 'Web development continues to evolve at a rapid pace, with new frameworks and tools emerging regularly. The focus has shifted towards creating more interactive and responsive user experiences.',
    author: {
      name: 'Jane Smith',
      bio: 'A passionate developer with a focus on web technologies.',
      profileImage: '/datebg.jpg'
    },
    tags: ['Web Development', 'JavaScript'],
    categories: ['Web Development', 'JavaScript'],
    introduction: {
      hook: 'The Future of Web Development',
      overview: 'Web development continues to evolve at a rapid pace, with new frameworks and tools emerging regularly. The focus has shifted towards creating more interactive and responsive user experiences.',
      valueProposition: 'Modern web applications are expected to be fast, accessible, and provide a seamless experience across all devices.'
    },
    body: [
      {
        subheading: 'Key Features of Next.js',
        content: 'Next.js provides an excellent developer experience with features like fast refresh, file-system based routing, and API routes.',
        examples: ['Automatic code splitting', 'Image optimization'],
        visuals: ['/datebg.jpg', '/datebg.jpg'],
        tips: ['Use automatic code splitting to optimize your application', 'Optimize images for faster loading']
      },
      {
        subheading: 'The Future of Web Development',
        content: 'Modern web applications are expected to be fast, accessible, and provide a seamless experience across all devices. This has led to the rise of frameworks that prioritize performance and developer experience.',
        examples: ['Automatic code splitting', 'Image optimization'],
        visuals: ['/datebg.jpg', '/datebg.jpg'],
        tips: ['Use automatic code splitting to optimize your application', 'Optimize images for faster loading']
      }
    ],
    conclusion: {
      summary: 'As we look to the future, web development will continue to focus on creating better user experiences while maintaining high performance and accessibility standards.',
      finalThought: 'Modern web applications are expected to be fast, accessible, and provide a seamless experience across all devices.'
    },
    callToAction: {
      prompt: 'Start building your next project with Next.js',
      actions: ['download', 'linkToRelatedContent']
    },
    relatedPosts: ['first-post'],
    socialShare: {
      enabled: true,
      platforms: ['twitter', 'facebook', 'linkedin', 'email']
    }
  }
};

// This is the type for our blog post data
type Author = {
  name: string;
  bio?: string;
  profileImage?: string;
};

type Introduction = {
  hook: string;
  overview: string;
  valueProposition: string;
};

type BodySection = {
  subheading: string;
  content: string;
  examples?: string[];
  visuals?: string[];
  tips?: string[];
};

type Conclusion = {
  summary: string;
  finalThought: string;
};

type CallToAction = {
  prompt: string;
  actions: ('comment' | 'share' | 'subscribe' | 'download' | 'linkToRelatedContent')[];
};

type SocialShare = {
  enabled: boolean;
  platforms: ('twitter' | 'facebook' | 'linkedin' | 'email')[];
};

type BlogPost = {
  title: string;
  metaDescription?: string;
  author: Author;
  tags: string[];
  categories: string[];
  introduction: Introduction;
  body: BodySection[];
  conclusion: Conclusion;
  callToAction: CallToAction;
  relatedPosts: string[];
  socialShare: SocialShare;
};

interface BlogPostParams {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: BlogPostParams): Promise<Metadata> {
  return {
    title: `Blog Post - ${params.slug}`,
    description: `Read our blog post about ${params.slug}`,
  };
}

// This function generates the page props
export async function generateStaticParams() {
  return Object.keys(mockBlogPosts).map((slug) => ({
    slug: slug,
  }));
}

// The main page component
export default async function BlogPost({ params }: BlogPostParams) {
  // In a real application, you would fetch the post data here
  const post = mockBlogPosts[params.slug];

  if (!post) {
    notFound();
  }

  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Blog Post: {params.slug}</h1>
      <div className="prose lg:prose-xl">
        {/* Header Section */}
        <header className="mb-12">
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          {post.metaDescription && (
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
              {post.metaDescription}
            </p>
          )}
          
          {/* Author Info */}
          <div className="flex items-center gap-4 mb-6">
            {post.author.profileImage && (
              <Image
                src={post.author.profileImage}
                alt={post.author.name}
                width={48}
                height={48}
                className="rounded-full"
              />
            )}
            <div>
              <p className="font-semibold">{post.author.name}</p>
              {post.author.bio && (
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {post.author.bio}
                </p>
              )}
            </div>
          </div>

          {/* Tags and Categories */}
          <div className="flex flex-wrap gap-2">
            {post.categories.map((category) => (
              <span
                key={category}
                className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
              >
                {category}
              </span>
            ))}
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        {/* Introduction */}
        <section className="mb-12">
          <p className="text-xl font-semibold mb-4">{post.introduction.hook}</p>
          <p className="mb-4">{post.introduction.overview}</p>
          <p className="italic">{post.introduction.valueProposition}</p>
        </section>

        {/* Main Content */}
        <section className="mb-12">
          {post.body.map((section, index) => (
            <div key={index} className="mb-8">
              <h2 className="text-2xl font-bold mb-4">{section.subheading}</h2>
              <p className="mb-4">{section.content}</p>
              
              {section.examples && section.examples.length > 0 && (
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg mb-4">
                  <h3 className="font-semibold mb-2">Examples:</h3>
                  <ul className="list-disc list-inside">
                    {section.examples.map((example, i) => (
                      <li key={i}>{example}</li>
                    ))}
                  </ul>
                </div>
              )}

              {section.tips && section.tips.length > 0 && (
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mb-4">
                  <h3 className="font-semibold mb-2">Tips:</h3>
                  <ul className="list-disc list-inside">
                    {section.tips.map((tip, i) => (
                      <li key={i}>{tip}</li>
                    ))}
                  </ul>
                </div>
              )}

              {section.visuals && section.visuals.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  {section.visuals.map((visual, i) => (
                    <Image
                      key={i}
                      src={visual}
                      alt={`Visual ${i + 1} for ${section.subheading}`}
                      width={400}
                      height={300}
                      className="rounded-lg"
                    />
                  ))}
                </div>
              )}
            </div>
          ))}
        </section>

        {/* Conclusion */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Conclusion</h2>
          <p className="mb-4">{post.conclusion.summary}</p>
          <p className="italic">{post.conclusion.finalThought}</p>
        </section>

        {/* Call to Action */}
        <section className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg mb-12">
          <p className="text-xl font-semibold mb-4">{post.callToAction.prompt}</p>
          <div className="flex flex-wrap gap-4">
            {post.callToAction.actions.map((action) => (
              <button
                key={action}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                {action.charAt(0).toUpperCase() + action.slice(1)}
              </button>
            ))}
          </div>
        </section>

        {/* Social Share */}
        {post.socialShare.enabled && (
          <section className="mb-12">
            <h3 className="text-lg font-semibold mb-4">Share this article</h3>
            <div className="flex gap-4">
              {post.socialShare.platforms.map((platform) => (
                <button
                  key={platform}
                  className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                >
                  {platform.charAt(0).toUpperCase() + platform.slice(1)}
                </button>
              ))}
            </div>
          </section>
        )}

        {/* Related Posts */}
        {post.relatedPosts.length > 0 && (
          <section>
            <h3 className="text-2xl font-bold mb-4">Related Posts</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {post.relatedPosts.map((postId) => (
                <Link
                  key={postId}
                  href={`/blog/${postId}`}
                  className="p-4 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                >
                  {/* You would need to fetch and display related post previews here */}
                  <p className="font-semibold">Related Post {postId}</p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </article>
  );
} 