'use client';

import { useState } from 'react';
import { BlogPost } from '../../constants/constants';

export default function AdminPage() {
  const [formData, setFormData] = useState<BlogPost>({
    title: '',
    metaDescription: '',
    author: {
      name: '',
      bio: '',
      profileImage: '',
    },
    tags: [''],
    categories: [''],
    introduction: {
      hook: '',
      overview: '',
      valueProposition: '',
    },
    body: [{
      subheading: '',
      content: '',
      examples: [''],
      visuals: [''],
    }],
    conclusion: {
      summary: '',
      finalThought: '',
    },
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const keys = name.split('.');
    
    setFormData(prev => {
      const newData = { ...prev };
      let current: Record<string, unknown> = newData;
      
      for (let i = 0; i < keys.length - 1; i++) {
        current = current[keys[i]] as Record<string, unknown>;
      }
      
      current[keys[keys.length - 1]] = value;
      return newData;
    });
  };

  const handleArrayInputChange = (e: React.ChangeEvent<HTMLInputElement>, arrayName: keyof BlogPost, index: number) => {
    const { value } = e.target;
    setFormData(prev => ({
      ...prev,
      [arrayName]: (prev[arrayName] as string[]).map((item: string, i: number) => 
        i === index ? value : item
      ),
    }));
  };

  const addArrayItem = (arrayName: keyof BlogPost) => {
    setFormData(prev => ({
      ...prev,
      [arrayName]: [...(prev[arrayName] as string[]), ''],
    }));
  };

  const removeArrayItem = (arrayName: keyof BlogPost, index: number) => {
    setFormData(prev => ({
      ...prev,
      [arrayName]: (prev[arrayName] as string[]).filter((_: string, i: number) => i !== index),
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    // Here you would typically send the data to your API
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Create Blog Post</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Basic Information */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Basic Information</h2>
          <div>
            <label className="block mb-1">Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block mb-1">Meta Description</label>
            <textarea
              name="metaDescription"
              value={formData.metaDescription}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
            />
          </div>
        </div>

        {/* Author Information */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Author Information</h2>
          <div>
            <label className="block mb-1">Author Name</label>
            <input
              type="text"
              name="author.name"
              value={formData.author.name}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block mb-1">Author Bio</label>
            <textarea
              name="author.bio"
              value={formData.author.bio}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block mb-1">Author Profile Image URL</label>
            <input
              type="text"
              name="author.profileImage"
              value={formData.author.profileImage}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
            />
          </div>
        </div>

        {/* Tags and Categories */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Tags and Categories</h2>
          <div>
            <label className="block mb-1">Tags</label>
            {formData.tags.map((tag, index) => (
              <div key={index} className="flex gap-2 mb-2">
                <input
                  type="text"
                  value={tag}
                  onChange={(e) => handleArrayInputChange(e, 'tags', index)}
                  className="flex-1 p-2 border rounded"
                />
                <button
                  type="button"
                  onClick={() => removeArrayItem('tags', index)}
                  className="px-3 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  Remove
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={() => addArrayItem('tags')}
              className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Add Tag
            </button>
          </div>
          <div>
            <label className="block mb-1">Categories</label>
            {formData.categories.map((category, index) => (
              <div key={index} className="flex gap-2 mb-2">
                <input
                  type="text"
                  value={category}
                  onChange={(e) => handleArrayInputChange(e, 'categories', index)}
                  className="flex-1 p-2 border rounded"
                />
                <button
                  type="button"
                  onClick={() => removeArrayItem('categories', index)}
                  className="px-3 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  Remove
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={() => addArrayItem('categories')}
              className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Add Category
            </button>
          </div>
        </div>

        {/* Introduction */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Introduction</h2>
          <div>
            <label className="block mb-1">Hook</label>
            <input
              type="text"
              name="introduction.hook"
              value={formData.introduction.hook}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block mb-1">Overview</label>
            <textarea
              name="introduction.overview"
              value={formData.introduction.overview}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block mb-1">Value Proposition</label>
            <textarea
              name="introduction.valueProposition"
              value={formData.introduction.valueProposition}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
            />
          </div>
        </div>

        {/* Body Sections */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Body Sections</h2>
          {formData.body.map((section, sectionIndex) => (
            <div key={sectionIndex} className="border p-4 rounded space-y-4">
              <h3 className="text-lg font-semibold">Section {sectionIndex + 1}</h3>
              <div>
                <label className="block mb-1">Subheading</label>
                <input
                  type="text"
                  name={`body.${sectionIndex}.subheading`}
                  value={section.subheading}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label className="block mb-1">Content</label>
                <textarea
                  name={`body.${sectionIndex}.content`}
                  value={section.content}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                />
              </div>
              
              {/* Examples */}
              <div>
                <label className="block mb-1">Examples</label>
                {section.examples.map((example, exampleIndex) => (
                  <div key={exampleIndex} className="flex gap-2 mb-2">
                    <input
                      type="text"
                      value={example}
                      onChange={(e) => {
                        const newBody = [...formData.body];
                        newBody[sectionIndex].examples[exampleIndex] = e.target.value;
                        setFormData({ ...formData, body: newBody });
                      }}
                      className="flex-1 p-2 border rounded"
                      placeholder="Enter example"
                    />
                    <button
                      type="button"
                      onClick={() => {
                        const newBody = [...formData.body];
                        newBody[sectionIndex].examples = newBody[sectionIndex].examples.filter((_, i) => i !== exampleIndex);
                        setFormData({ ...formData, body: newBody });
                      }}
                      className="px-3 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                    >
                      Remove
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() => {
                    const newBody = [...formData.body];
                    newBody[sectionIndex].examples.push('');
                    setFormData({ ...formData, body: newBody });
                  }}
                  className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  Add Example
                </button>
              </div>

              {/* Visuals */}
              <div>
                <label className="block mb-1">Visuals (Image URLs or Embeds)</label>
                {section.visuals.map((visual, visualIndex) => (
                  <div key={visualIndex} className="flex gap-2 mb-2">
                    <input
                      type="text"
                      value={visual}
                      onChange={(e) => {
                        const newBody = [...formData.body];
                        newBody[sectionIndex].visuals[visualIndex] = e.target.value;
                        setFormData({ ...formData, body: newBody });
                      }}
                      className="flex-1 p-2 border rounded"
                      placeholder="Enter image URL or embed code"
                    />
                    <button
                      type="button"
                      onClick={() => {
                        const newBody = [...formData.body];
                        newBody[sectionIndex].visuals = newBody[sectionIndex].visuals.filter((_, i) => i !== visualIndex);
                        setFormData({ ...formData, body: newBody });
                      }}
                      className="px-3 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                    >
                      Remove
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() => {
                    const newBody = [...formData.body];
                    newBody[sectionIndex].visuals.push('');
                    setFormData({ ...formData, body: newBody });
                  }}
                  className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  Add Visual
                </button>
              </div>

              <button
                type="button"
                onClick={() => {
                  const newBody = formData.body.filter((_, i) => i !== sectionIndex);
                  setFormData({ ...formData, body: newBody });
                }}
                className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Remove Section
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() => {
              setFormData({
                ...formData,
                body: [
                  ...formData.body,
                  {
                    subheading: '',
                    content: '',
                    examples: [''],
                    visuals: [''],
                  },
                ],
              });
            }}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Add Section
          </button>
        </div>

        {/* Conclusion */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Conclusion</h2>
          <div>
            <label className="block mb-1">Summary</label>
            <textarea
              name="conclusion.summary"
              value={formData.conclusion.summary}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block mb-1">Final Thought</label>
            <textarea
              name="conclusion.finalThought"
              value={formData.conclusion.finalThought}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full px-6 py-3 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Create Blog Post
        </button>
      </form>
    </div>
  );
}
