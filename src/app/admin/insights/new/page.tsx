
"use client";

import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db, auth } from '@/lib/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';

const ReactQuill = dynamic(
  () => {
    const Quill = import('react-quill');
    return Quill;
  },
  {
    ssr: false,
    loading: () => <p>Loading editor...</p>,
  }
);


export default function NewInsightPage() {
  const [user] = useAuthState(auth);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');
  const [tags, setTags] = useState('');
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleCreateInsight = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) {
      setError("You must be logged in to create an insight.");
      return;
    }

    if (!title || !content || !category) {
      setError("Please fill out all required fields.");
      return;
    }

    try {
      await addDoc(collection(db, 'insights'), {
        title,
        content,
        category,
        tags: tags.split(',').map(tag => tag.trim()),
        author: user.displayName || user.email,
        authorId: user.uid,
        createdAt: serverTimestamp(),
        published: true, // Or based on a form field
      });
      router.push('/admin'); // Redirect to admin dashboard after creation
    } catch (err: any) {
      setError(err.message);
    }
  };

  const quillRef = useRef<HTMLDivElement>(null);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">Create New Insight</h1>
      <form onSubmit={handleCreateInsight} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="title">Title</Label>
          <Input
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            placeholder="Insight Title"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="content">Content</Label>
          <div ref={quillRef}>
            <ReactQuill
              theme="snow"
              value={content}
              onChange={setContent}
              className="bg-white"
             />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="category">Category</Label>
          <Input
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
            placeholder="e.g., Finance, Technology"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="tags">Tags (comma-separated)</Label>
          <Input
            id="tags"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            placeholder="e.g., Africa, Investment, Policy"
          />
        </div>
        {error && <p className="text-destructive text-sm">{error}</p>}
        <Button type="submit">Publish Insight</Button>
      </form>
    </div>
  );
}
